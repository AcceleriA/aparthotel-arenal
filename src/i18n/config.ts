export const locales = ['fr', 'es', 'en', 'de', 'ca'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
  ca: 'Català',
};
