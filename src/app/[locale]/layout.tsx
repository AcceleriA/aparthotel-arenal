import type { Metadata } from 'next';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SchemaOrgVacationRental } from '@/components/SEO/SchemaOrg';
import { GoogleAnalytics } from '@/components/SEO/GA4';
import '../globals.css';

const baseUrl = 'https://aparthotel-arenal.com';

export const metadata: Metadata = {
  title: {
    default: 'Aparthotel Arenal | Studios meublés à Pals, Costa Brava',
    template: '%s | Aparthotel Arenal',
  },
  description: 'Séjournez dans nos studios tout équipés au coeur de Pals, Costa Brava. À deux pas du golf et des plages. Réservez directement au meilleur prix.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Aparthotel Arenal',
    description: 'Studios meublés au coeur de Pals, Costa Brava. Entre golf et Méditerranée.',
    type: 'website',
    url: baseUrl,
    siteName: 'Aparthotel Arenal',
    images: [{ url: '/images/hero/hero-golf.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aparthotel Arenal',
    description: 'Studios meublés à Pals, Costa Brava',
    images: ['/images/hero/hero-golf.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: baseUrl,
    languages: {
      'fr': `${baseUrl}/fr`,
      'es': `${baseUrl}/es`,
      'en': `${baseUrl}/en`,
      'de': `${baseUrl}/de`,
      'ca': `${baseUrl}/ca`,
    },
  },
};

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
    <html lang={locale}>
      <body className="bg-bleached-stone text-deep-coastal">
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <SchemaOrgVacationRental />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
