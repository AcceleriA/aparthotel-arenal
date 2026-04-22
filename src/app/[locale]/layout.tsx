import type { Metadata } from 'next';
import { Italiana, Instrument_Sans, Lora, Jura } from 'next/font/google';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GoogleAnalytics } from '@/components/SEO/GA4';
import CookieConsent from '@/components/analytics/CookieConsent';
import { buildAlternates, SITE_URL } from '@/lib/hreflang';
import '../globals.css';

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display',
  preload: true,
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  display: 'swap',
  variable: '--font-accent',
  preload: false,
});

const jura = Jura({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-utility',
  preload: false,
});

const LOCALE_META: Record<Locale, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: {
    title: 'Aparthotel Arenal | Studios meublés à Pals, Costa Brava',
    description: 'Séjournez dans nos studios tout équipés au cœur de Platja de Pals, Costa Brava. À deux pas du golf et des plages. Réservez en direct au meilleur prix.',
    ogTitle: 'Aparthotel Arenal',
    ogDescription: 'Studios meublés au cœur de Platja de Pals, Costa Brava. Entre golf et Méditerranée.',
  },
  es: {
    title: 'Aparthotel Arenal | Estudios en Platja de Pals, Costa Brava',
    description: 'Alójate en nuestros estudios totalmente equipados en Platja de Pals, Costa Brava. A dos pasos del golf y las playas. Reserva directa al mejor precio.',
    ogTitle: 'Aparthotel Arenal',
    ogDescription: 'Estudios en Platja de Pals, Costa Brava. Entre golf y Mediterráneo.',
  },
  en: {
    title: 'Aparthotel Arenal | Studios in Platja de Pals, Costa Brava',
    description: 'Stay in our fully equipped studios in Platja de Pals, Costa Brava. Minutes from the golf course and the beach. Best price guaranteed on direct bookings.',
    ogTitle: 'Aparthotel Arenal',
    ogDescription: 'Fully equipped studios in Platja de Pals, Costa Brava. Between golf and the Mediterranean.',
  },
  de: {
    title: 'Aparthotel Arenal | Studios in Platja de Pals, Costa Brava',
    description: 'Ferienstudios in Platja de Pals, Costa Brava. Minuten vom Golfplatz und den Stränden entfernt. Bestpreis bei Direktbuchung.',
    ogTitle: 'Aparthotel Arenal',
    ogDescription: 'Vollausgestattete Studios in Platja de Pals, Costa Brava. Zwischen Golf und Mittelmeer.',
  },
  ca: {
    title: 'Aparthotel Arenal | Studios a Platja de Pals, Costa Brava',
    description: 'Allotja\'t als nostres studios totalment equipats a Platja de Pals, Costa Brava. A dos passos del golf i les platges. Reserva directa al millor preu.',
    ogTitle: 'Aparthotel Arenal',
    ogDescription: 'Studios a Platja de Pals, Costa Brava. Entre el golf i el Mediterrani.',
  },
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : 'en') as Locale;
  const meta = LOCALE_META[locale];
  const alternates = buildAlternates('/', locale);

  return {
    title: {
      default: meta.title,
      template: '%s | Aparthotel Arenal',
    },
    description: meta.description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: 'website',
      url: alternates.canonical,
      siteName: 'Aparthotel Arenal',
      locale: locale,
      images: [{ url: '/images/hero/hero-golf.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ['/images/hero/hero-golf.jpg'],
    },
    robots: { index: true, follow: true },
    alternates,
    verification: {
      google: 'ImF5FJ-PCdRZqyxnfuWYR8U3q0T9XN-Rn8PIfiAGq2s',
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${italiana.variable} ${instrumentSans.variable} ${lora.variable} ${jura.variable}`}>
      <body className="bg-bleached-stone text-deep-coastal">
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
