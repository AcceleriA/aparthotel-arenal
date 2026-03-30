import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return false;
  }

  if (entry.count >= 3) return true; // Max 3 per minute
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de messages envoyés. Veuillez réessayer dans une minute.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, message, honeypot } = body;

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      // Return success to not reveal the honeypot
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[<>]/g, '').trim().slice(0, 1000);
    const cleanName = sanitize(name);
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone ? sanitize(phone) : 'Non renseigné';
    const cleanMessage = sanitize(message);

    // Check if Resend is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Aparthotel Arenal <noreply@aparthotel-arenal.com>',
        to: 'info@aparthotel-arenal.com',
        replyTo: cleanEmail,
        subject: `Nouveau message de ${cleanName} - Aparthotel Arenal`,
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #1B4965; padding: 24px; text-align: center;">
              <h1 style="color: #FAF8F5; font-size: 20px; margin: 0; letter-spacing: 4px;">APARTHOTEL ARENAL</h1>
              <p style="color: #8FB8CA; font-size: 12px; margin: 4px 0 0; letter-spacing: 2px;">PALS, COSTA BRAVA</p>
            </div>
            <div style="padding: 24px; background-color: #FAF8F5;">
              <h2 style="color: #1B4965; font-size: 18px; margin-bottom: 16px;">Nouveau message depuis le site</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px; width: 100px;">Nom</td>
                  <td style="padding: 8px 0; color: #2C2C2C;">${cleanName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px;">Email</td>
                  <td style="padding: 8px 0; color: #2C2C2C;"><a href="mailto:${cleanEmail}" style="color: #C17854;">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px;">Téléphone</td>
                  <td style="padding: 8px 0; color: #2C2C2C;">${cleanPhone}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background-color: #F5F0E8; border-left: 3px solid #D4A574;">
                <p style="color: #999; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <p style="color: #2C2C2C; margin: 0; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
              </div>
            </div>
            <div style="padding: 16px; text-align: center; background-color: #0D2B3E;">
              <p style="color: #8FB8CA; font-size: 11px; margin: 0;">Ce message a été envoyé depuis le formulaire de contact de aparthotel-arenal.com</p>
            </div>
          </div>
        `,
      });
    } else {
      // Fallback: log to console in development
      console.log('Contact form submission (Resend not configured):', {
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
