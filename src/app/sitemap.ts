import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { studios } from '@/data/studios';
import { getBlogPosts } from '@/lib/blog';

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
  '/evenements',
  '/blog',
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
        changeFrequency: page === '' ? 'weekly' : page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/reservation' ? 0.9 : page === '/blog' ? 0.8 : 0.7,
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

  // Blog post pages
  for (const locale of locales) {
    const posts = getBlogPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
