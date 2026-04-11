import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, getBlogPosts, getAllBlogSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = getAllBlogSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.locale, params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: buildAlternates(`/blog/${post.slug}`, params.locale),
    openGraph: {
      title: `${post.title} | Aparthotel Arenal`,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const post = await getBlogPost(params.locale, params.slug);
  if (!post) notFound();

  const locale = params.locale;
  const allPosts = getBlogPosts(locale);
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.5) 80%, rgba(13,43,62,0.85) 100%)',
          }}
        />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="container-arenal" style={{ maxWidth: '800px' }}>
            <div className="flex gap-3 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-utility)',
                    fontSize: '10px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    padding: '4px 10px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                lineHeight: '1.2',
              }}
            >
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '12px',
                display: 'block',
              }}
            >
              {new Date(post.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-arenal" style={{ maxWidth: '800px' }}>
          <Link
            href={`/${locale}/blog`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: '#C17854',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '2rem',
            }}
          >
            ← Retour au journal
          </Link>

          {/* Article body */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Schema.org Article */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                image: `https://aparthotel-arenal.com${post.coverImage}`,
                datePublished: post.date,
                author: {
                  '@type': 'Organization',
                  name: 'Aparthotel Arenal',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'Aparthotel Arenal',
                  url: 'https://aparthotel-arenal.com',
                },
              }),
            }}
          />

          {/* Prev/Next */}
          <div
            className="grid grid-cols-2 gap-6 mt-16"
            style={{ borderTop: '1px solid #D4A574', paddingTop: '2rem' }}
          >
            {prevPost ? (
              <Link
                href={`/${locale}/blog/${prevPost.slug}`}
                className="group flex flex-col"
                style={{ textDecoration: 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>
                  ← Article précédent
                </span>
                <span
                  style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#1B4965', marginTop: '4px' }}
                  className="group-hover:text-[#C17854] transition-colors"
                >
                  {prevPost.title}
                </span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                href={`/${locale}/blog/${nextPost.slug}`}
                className="group flex flex-col items-end text-right"
                style={{ textDecoration: 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>
                  Article suivant →
                </span>
                <span
                  style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#1B4965', marginTop: '4px' }}
                  className="group-hover:text-[#C17854] transition-colors"
                >
                  {nextPost.title}
                </span>
              </Link>
            ) : <div />}
          </div>

          {/* CTA */}
          <div className="mt-16 p-12 text-center" style={{ backgroundColor: '#F5F0E8' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#1B4965', marginBottom: '12px' }}>
              Envie de découvrir Pals ?
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#777', marginBottom: '24px' }}>
              Réservez votre studio à l&apos;Aparthotel Arenal
            </p>
            <Link
              href={`/${locale}/reservation`}
              className="btn-primary"
            >
              Réserver
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
