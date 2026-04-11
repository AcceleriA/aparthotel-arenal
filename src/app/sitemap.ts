import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { studios } from '@/data/studios';
import { getAllBlogSlugs } from '@/lib/blog';

const SITE_URL = 'https://www.aparthotel-arenal.com';

function buildLanguages(pathname: string): Record<string, string> {
  const clean = pathname === '/' ? '' : pathname;
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${SITE_URL}/${locale}${clean}`;
  }
  languages['x-default'] = `${SITE_URL}/en${clean}`;
  return languages;
}

function makeEntries(
  pathname: string,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly',
  priority = 0.7,
  lastModified: Date = new Date()
): MetadataRoute.Sitemap {
  const languages = buildLanguages(pathname);
  const clean = pathname === '/' ? '' : pathname;
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}${clean}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Root page per locale
  entries.push(...makeEntries('/', 'weekly', 1));

  // Studios listing
  entries.push(...makeEntries('/studios', 'weekly', 0.9));

  // Individual studios (5 studios x 5 locales = 25 entries)
  for (const studio of studios) {
    entries.push(...makeEntries(`/studios/${studio.slug}`, 'weekly', 0.85));
  }

  // Blog index
  entries.push(...makeEntries('/blog', 'weekly', 0.7));

  // Blog posts — union of slugs across locales
  const slugSet = new Set<string>();
  for (const locale of locales) {
    for (const slug of getAllBlogSlugs(locale)) {
      slugSet.add(slug);
    }
  }
  Array.from(slugSet).forEach((slug) => {
    entries.push(...makeEntries(`/blog/${slug}`, 'monthly', 0.65));
  });

  // Reservation
  entries.push(...makeEntries('/reservation', 'monthly', 0.9));

  // Secondary pages
  entries.push(...makeEntries('/environnement', 'monthly', 0.6));
  entries.push(...makeEntries('/environnement/plages', 'monthly', 0.7));
  entries.push(...makeEntries('/environnement/golf', 'monthly', 0.7));
  entries.push(...makeEntries('/evenements', 'monthly', 0.6));
  entries.push(...makeEntries('/notre-histoire', 'monthly', 0.6));
  entries.push(...makeEntries('/contact', 'yearly', 0.4));
  entries.push(...makeEntries('/mentions-legales', 'yearly', 0.3));
  entries.push(...makeEntries('/politique-confidentialite', 'yearly', 0.3));

  return entries;
}
