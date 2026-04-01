'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeNames } from '@/i18n/config';
import { GA4Events } from '@/components/SEO/GA4';
import type { Locale } from '@/i18n/config';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    const currentLocale = pathname.split('/')[0] || 'en';
    GA4Events.languageSwitch(currentLocale, locale);
    router.push(pathname, { locale });
    setIsLanguageOpen(false);
  };

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.story', href: '/notre-histoire' },
    { key: 'nav.events', href: '/evenements' },
    { key: 'nav.studios', href: '/studios' },
    { key: 'nav.environment', href: '/environnement' },
    { key: 'nav.blog', href: '/blog' },
    { key: 'nav.contact', href: '/contact' },
  ];

  const headerBgClass = isScrolled
    ? 'bg-bleached-stone/95 backdrop-blur-md shadow-md'
    : 'bg-transparent';

  const logoColorClass = isScrolled ? 'text-deep-coastal' : 'text-white';
  const logoHoverClass = isScrolled ? 'hover:text-limestone-warm' : 'hover:text-limestone-warm';
  const navTextColorClass = isScrolled ? 'text-text-mid' : 'text-white text-opacity-85';
  const navHoverClass = isScrolled ? 'hover:text-limestone-warm' : 'hover:text-limestone-warm';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
      style={{ height: '72px', padding: '0 48px' }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-start gap-0.5 group"
          aria-label="Accueil"
        >
          <div
            className={`transition-colors duration-300 ${logoColorClass} ${logoHoverClass}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              letterSpacing: '4px',
            }}
          >
            A R E N A L
          </div>
          <div
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-text-faint' : 'text-white text-opacity-70'
            }`}
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '9px',
              letterSpacing: '2px',
            }}
          >
            P A L S  ·  C O S T A  B R A V A
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`transition-all duration-300 relative ${navTextColorClass} ${navHoverClass}`}
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '11px',
                fontWeight: '300',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}
            >
              {t(item.key)}
              <span
                className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: 'var(--limestone-warm)' }}
              />
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-text-faint hover:text-limestone-warm' : 'text-white text-opacity-70 hover:text-limestone-warm'
              }`}
              aria-label="Sélectionner la langue"
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '8px 12px',
              }}
            >
              Lang
            </button>
            {isLanguageOpen && (
              <div
                className="absolute right-0 mt-2 w-32 bg-bleached-stone rounded shadow-lg border transition-all duration-300"
                style={{ borderColor: 'var(--limestone-light)' }}
              >
                {locales.map((locale) => (
                  <button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    className="w-full text-left px-4 py-2 text-sm font-instrument text-text-dark hover:bg-limestone-pale transition-colors"
                  >
                    {localeNames[locale]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/reservation"
            onClick={() => GA4Events.ctaClick('header')}
            className="hidden md:inline-block transition-all duration-300"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: `1px solid currentColor`,
              borderColor: isScrolled ? 'var(--deep-coastal)' : 'rgba(255, 255, 255, 0.5)',
              color: isScrolled ? 'var(--deep-coastal)' : 'white',
              padding: '12px 24px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              if (isScrolled) {
                el.style.backgroundColor = 'var(--deep-coastal)';
                el.style.color = 'white';
              } else {
                el.style.backgroundColor = 'white';
                el.style.color = 'var(--deep-coastal)';
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = 'transparent';
              el.style.color = isScrolled ? 'var(--deep-coastal)' : 'white';
            }}
          >
            {t('nav.book')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 justify-center items-end p-2"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{ backgroundColor: isScrolled ? 'var(--text-dark)' : 'white' }}
            />
            <span
              className={`h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ backgroundColor: isScrolled ? 'var(--text-dark)' : 'white' }}
            />
            <span
              className={`h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{ backgroundColor: isScrolled ? 'var(--text-dark)' : 'white' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 bg-bleached-stone/95 backdrop-blur-md"
          style={{
            borderTop: '1px solid var(--limestone-light)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div className="py-4 space-y-2" style={{ padding: '0 48px' }}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 font-instrument text-sm text-text-dark hover:text-limestone-warm transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <div
              className="px-4 py-3 mt-2"
              style={{ borderTop: '1px solid var(--limestone-light)' }}
            >
              <Link
                href="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center block"
              >
                {t('nav.book')}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
