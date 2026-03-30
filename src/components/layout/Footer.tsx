'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeNames } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleLanguageChange = (locale: Locale) => {
    router.push(pathname, { locale });
    setIsLanguageOpen(false);
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.story', href: '/notre-histoire' },
    { key: 'nav.studios', href: '/studios' },
    { key: 'nav.booking', href: '/reservation' },
    { key: 'nav.environment', href: '/environnement' },
    { key: 'nav.contact', href: '/contact' },
  ];

  const contactInfo = {
    address: t('contact.addressValue'),
    phone: '+34 123 456 789',
    email: 'info@aparthotel-arenal.com',
  };

  return (
    <footer className="bg-deep-coastal text-white/70">
      {/* Main Footer Content */}
      <div className="container-arenal py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <div className="font-italiana text-2xl tracking-arenal text-white font-semibold mb-2">
              A R E N A L
            </div>
            <div className="font-jura text-xs tracking-wider text-white/60 mb-4">
              P A L S
            </div>
            <p className="font-instrument text-sm text-white/70 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="font-italiana text-lg tracking-arenal text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <nav className="space-y-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block font-instrument text-sm text-white/70 hover:text-sand transition-colors duration-300"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-italiana text-lg tracking-arenal text-white mb-4">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="label-text text-white/60 mb-1">
                  {t('contact.address')}
                </p>
                <p className="font-instrument text-sm text-white/70">
                  {contactInfo.address}
                </p>
              </div>
              <div>
                <p className="label-text text-white/60 mb-1">
                  {t('contact.phone')}
                </p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="font-instrument text-sm text-white/70 hover:text-sand transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="label-text text-white/60 mb-1">
                  {t('contact.email')}
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-instrument text-sm text-white/70 hover:text-sand transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="font-italiana text-lg tracking-arenal text-white mb-4">
              {t('footer.followUs')}
            </h3>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/aparthotel.arenal"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-instrument text-sm text-white/70 hover:text-sand transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/aparthotel.arenal"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-instrument text-sm text-white/70 hover:text-sand transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-instrument text-sm text-white/70 hover:text-sand transition-colors duration-300"
              >
                TripAdvisor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-deep-coastal/50">
        <div className="container-arenal py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-instrument text-xs text-white/50">
              © {currentYear} Aparthotel Arenal. {t('footer.rights')}.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              <Link
                href="/legal"
                className="font-instrument text-xs text-white/50 hover:text-sand transition-colors"
              >
                {t('nav.legal')}
              </Link>
              <Link
                href="/privacy"
                className="font-instrument text-xs text-white/50 hover:text-sand transition-colors"
              >
                {t('nav.privacy')}
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="font-jura text-xs uppercase tracking-wider text-white/50 hover:text-sand transition-colors py-2 px-3"
                aria-label="Sélectionner la langue"
              >
                {localeNames[currentLocale as Locale]}
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-32 bg-white rounded-lg shadow-lg border border-limestone/20 overflow-hidden">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => handleLanguageChange(locale)}
                      className="w-full text-left px-4 py-2 text-sm font-instrument text-deep-coastal hover:bg-limestone/10 transition-colors"
                    >
                      {localeNames[locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
