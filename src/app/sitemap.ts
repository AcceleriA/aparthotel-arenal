import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { studios } from '@/data/studios';

const baseUrl = 'https://aparthotel-arenal.com';

const pages = [
  '',
  '/notre-histoire',
  '/studios',
  '/reservation',
  '/environnement',
  '/environnement/golf',
  '/environnement/plages',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/reservation' ? 0.9 : 0.7,
      });
    }
  }

  // Studio pages
  for (const studio of studios) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/studios/${studio.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
