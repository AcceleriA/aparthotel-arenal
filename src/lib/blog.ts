import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: string;
  tags: string[];
  locale: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: string;
  tags: string[];
  locale: string;
}

export function getBlogPosts(locale: string): BlogPostMeta[] {
  const localeDir = path.join(contentDirectory, locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const filePath = path.join(localeDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: data.slug || filename.replace(/\.md$/, ''),
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '/images/hero/hero-golf.jpg',
      author: data.author || 'Aparthotel Arenal',
      tags: data.tags || [],
      locale: locale,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(locale: string, slug: string): Promise<BlogPost | null> {
  const localeDir = path.join(contentDirectory, locale);
  const filePath = path.join(localeDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: data.slug || slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '/images/hero/hero-golf.jpg',
    author: data.author || 'Aparthotel Arenal',
    tags: data.tags || [],
    locale: locale,
    content: contentHtml,
  };
}

export function getAllBlogSlugs(locale: string): string[] {
  const localeDir = path.join(contentDirectory, locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  return fs.readdirSync(localeDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fileContents = fs.readFileSync(path.join(localeDir, f), 'utf8');
      const { data } = matter(fileContents);
      return data.slug || f.replace(/\.md$/, '');
    });
}
