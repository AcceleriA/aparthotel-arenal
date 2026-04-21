import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function BlogPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const posts = getBlogPosts(params.locale);
  const locale = params.locale;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Journal', url: `/${locale}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section
        className="relative w-full flex items-end overflow-hidden"
        style={{ height: '40vh', minHeight: '300px' }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#1B4965' }}
        />
        <div className="relative z-10 container-arenal pb-12">
          <div
            className="section-label mb-4"
            style={{ color: '#8FB8CA' }}
          >
            Journal
          </div>
          <h1 className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Le journal de l&apos;Arenal
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginTop: '8px' }}>
            Guides, conseils et inspirations pour votre séjour à Pals
          </p>
        </div>
      </section>

      {/* Blog listing */}
      <section className="section-padding" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-arenal">
          {posts.length === 0 ? (
            <p style={{ fontFamily: 'var(--font-body)', color: '#999', textAlign: 'center', padding: '4rem 0' }}>
              Aucun article pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group"
                  style={{ textDecoration: 'none' }}
                >
                  <article className="bg-white overflow-hidden h-full flex flex-col" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={index < 2}
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex gap-3 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: 'var(--font-utility)',
                              fontSize: '10px',
                              letterSpacing: '1.5px',
                              textTransform: 'uppercase',
                              color: '#B8AFA3',
                              backgroundColor: '#F5F0E8',
                              padding: '4px 8px',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '24px',
                          color: '#1B4965',
                          lineHeight: '1.3',
                          marginBottom: '12px',
                        }}
                        className="group-hover:text-[#C17854] transition-colors"
                      >
                        {post.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: '#777',
                          lineHeight: '1.7',
                          flexGrow: 1,
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <time
                          dateTime={post.date}
                          style={{
                            fontFamily: 'var(--font-utility)',
                            fontSize: '11px',
                            letterSpacing: '1px',
                            color: '#B8AFA3',
                          }}
                        >
                          {new Date(post.date).toLocaleDateString(locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '13px',
                            color: '#C17854',
                          }}
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          Lire →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
