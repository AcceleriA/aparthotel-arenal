'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeNames } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics';

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
    phone: '+34 972 637 000',
    email: 'aparthotelarenalcafe@gmail.com',
  };

  return (
    <footer style={{ backgroundColor: 'var(--dark-navy)' }}>
      {/* Main Footer Content */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-16 lg:pt-[72px] lg:pb-10"
      >
        {/* Logo & Tagline */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              letterSpacing: '3px',
              color: 'white',
              marginBottom: '12px',
            }}
          >
            A R E N A L
          </div>
          <div
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '10px',
              letterSpacing: '2px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '12px',
            }}
          >
            P A L S  ·  C O S T A  B R A V A
          </div>
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.35)',
              lineHeight: '1.6',
            }}
          >
            {t('footer.tagline')}
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--limestone-warm)',
              marginBottom: '16px',
            }}
          >
            {t('footer.quickLinks')}
          </h3>
          <nav className="space-y-2">
            {navigationLinks.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
                }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--limestone-warm)',
              marginBottom: '16px',
            }}
          >
            {t('footer.contact')}
          </h3>
          <div className="space-y-4">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '10px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.45)',
                  marginBottom: '4px',
                }}
              >
                {t('contact.address')}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.45)',
                }}
              >
                {contactInfo.address}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '10px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.45)',
                  marginBottom: '4px',
                }}
              >
                {t('contact.phone')}
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                onClick={trackPhoneClick}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
                }}
              >
                {contactInfo.phone}
              </a>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '10px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.45)',
                  marginBottom: '4px',
                }}
              >
                {t('contact.email')}
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={trackEmailClick}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
                }}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--limestone-warm)',
              marginBottom: '16px',
            }}
          >
            {t('footer.followUs')}
          </h3>
          <div className="space-y-2">
            <a
              href="https://www.instagram.com/aparthotel.arenal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.45)',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
              }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/aparthotel.arenal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.45)',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
              }}
            >
              Facebook
            </a>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g580332-d1070832-Reviews-Aparthotel_Arenal-Pals_Costa_Brava_Province_of_Girona_Catalonia.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.45)',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
              }}
            >
              TripAdvisor
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 py-6 md:py-8"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '10px',
              letterSpacing: '1.5px',
              color: 'rgba(255, 255, 255, 0.25)',
            }}
          >
            © {currentYear} Aparthotel Arenal. {t('footer.rights')}.
          </p>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link
              href="/legal"
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '10px',
                letterSpacing: '1.5px',
                color: 'rgba(255, 255, 255, 0.25)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              {t('nav.legal')}
            </Link>
            <Link
              href="/privacy"
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '10px',
                letterSpacing: '1.5px',
                color: 'rgba(255, 255, 255, 0.25)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              {t('nav.privacy')}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.25)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 12px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.25)';
              }}
              aria-label="Sélectionner la langue"
            >
              {localeNames[currentLocale as Locale]}
            </button>
            {isLanguageOpen && (
              <div
                className="absolute right-0 bottom-full mb-2 w-32 rounded shadow-lg overflow-hidden"
                style={{
                  backgroundColor: 'var(--bleached-stone)',
                  border: '1px solid var(--limestone-light)',
                }}
              >
                {locales.map((locale) => (
                  <button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    className="w-full text-left px-4 py-2 text-sm font-instrument text-text-dark transition-colors"
                    style={{
                      backgroundColor: 'var(--bleached-stone)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--limestone-pale)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bleached-stone)';
                    }}
                  >
                    {localeNames[locale]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
