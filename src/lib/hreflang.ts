import { locales } from '@/i18n/config';

export const SITE_URL = 'https://www.aparthotel-arenal.com';

/**
 * Build an `alternates` metadata object for a given non-localized pathname.
 * Example: buildAlternates('/studios/girasol', 'fr') →
 *   {
 *     canonical: 'https://www.aparthotel-arenal.com/fr/studios/girasol',
 *     languages: {
 *       fr: '.../fr/studios/girasol',
 *       en: '.../en/studios/girasol',
 *       ...
 *       'x-default': '.../en/studios/girasol',
 *     }
 *   }
 */
export function buildAlternates(pathname: string, currentLocale: string) {
  const clean = pathname === '/' || pathname === '' ? '' : pathname.startsWith('/') ? pathname : `/${pathname}`;

  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${SITE_URL}/${locale}${clean}`;
  }
  languages['x-default'] = `${SITE_URL}/en${clean}`;

  return {
    canonical: `${SITE_URL}/${currentLocale}${clean}`,
    languages,
  };
}
