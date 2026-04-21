'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { studios } from '@/data/studios';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function StudiosPage() {
  const t = useTranslations('studios');
  const tCross = useTranslations('crosslinks');
  const locale = useLocale();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Studios', url: `/${locale}/studios` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-studio-salon.jpg"
          alt="Studios Arenal"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.4) 80%, rgba(13,43,62,0.7) 100%)'
          }}
        />
        <div className="relative z-10 container-arenal pb-12">
          <h1 className="text-white">{t('title')}</h1>
          <p className="font-instrument text-white/80 text-lg mt-2">{t('subtitle')}</p>
        </div>
      </section>

      {/* Studios grid */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.map((studio, index) => (
              <Link key={studio.slug} href={`/studios/${studio.slug}`}>
                <div className="card group cursor-pointer h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={studio.image}
                      alt={studio.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index < 3}
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="mb-2">{studio.name}</h3>
                    <p className="label-text mb-3">
                      {studio.capacity} {t('persons')} · {studio.surface} {t('sqm')}
                    </p>
                    <p className="font-instrument text-deep-coastal/70 text-sm flex-grow line-clamp-3">
                      {studio.description[locale as keyof typeof studio.description] || studio.description.fr}
                    </p>
                    <p className="font-instrument text-terracotta font-medium mt-4 group-hover:text-deep-coastal transition-colors">
                      {t('bookThis')} →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Découvrir aussi */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '4rem 0' }}>
        <div className="container-arenal">
          <div className="text-center mb-10">
            <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>
              {tCross('discoverAlso')}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href={`/${locale}/reservation`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('book')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('bookDesc')}
              </p>
            </Link>
            <Link href={`/${locale}/environnement`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('environment')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('environmentDesc')}
              </p>
            </Link>
            <Link href={`/${locale}/notre-histoire`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourStory')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('storyDesc')}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
