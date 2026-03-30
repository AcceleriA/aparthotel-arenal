'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeNames } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleLanguageChange = (locale: Locale) => {
    router.push(pathname, { locale });
    setIsLanguageOpen(false);
  };

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.story', href: '/notre-histoire' },
    { key: 'nav.events', href: '/evenements' },
    { key: 'nav.studios', href: '/studios' },
    { key: 'nav.environment', href: '/environnement' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bleached-stone/95 backdrop-blur-md border-b border-limestone/20">
      <div className="container-arenal">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-start gap-0.5 group"
            aria-label="Accueil"
          >
            <div className="font-italiana text-2xl tracking-arenal text-deep-coastal font-semibold group-hover:text-terracotta transition-colors">
              A R E N A L
            </div>
            <div className="font-jura text-xs tracking-wider text-deep-coastal/60 group-hover:text-terracotta transition-colors">
              P A L S
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="font-instrument text-sm text-deep-coastal hover:text-terracotta transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="font-jura text-xs uppercase tracking-wider text-deep-coastal/60 hover:text-terracotta transition-colors py-2 px-3"
                aria-label="Sélectionner la langue"
              >
                Lang
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-limestone/20 overflow-hidden">
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

            {/* CTA Button - Desktop */}
            <Link
              href="/reservation"
              className="hidden md:inline-block btn-primary"
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
                className={`h-0.5 w-6 bg-deep-coastal transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-deep-coastal transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-deep-coastal transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-limestone/20 bg-white/50 backdrop-blur-sm">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 font-instrument text-sm text-deep-coastal hover:bg-limestone/10 hover:text-terracotta transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="px-4 py-3 mt-2 border-t border-limestone/20">
                <Link
                  href="/reservation"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  {t('nav.book')}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
