'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function GolfPage() {
  const t = useTranslations('golf');
  const tCross = useTranslations('crosslinks');
  const locale = useLocale();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Environnement', url: `/${locale}/environnement` },
    { name: 'Golf', url: `/${locale}/environnement/golf` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-golf.jpg"
          alt="Golf de Pals"
          fill
          sizes="100vw"
          className="object-cover"
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

      <section className="section-padding">
        <div className="container-arenal">
          <Link href="/environnement" className="font-instrument text-terracotta hover:text-deep-coastal transition-colors mb-8 inline-block">
            ← Environnement
          </Link>

          <p className="section-text mb-20 max-w-3xl">
            {t('intro')}
          </p>

          {/* Golf de Pals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="section-label mb-4">{t('distance')}</p>
              <h2 className="section-title mb-6">{t('palsGolf')}</h2>
              <p className="section-text">
                {t('palsGolfDesc')}
              </p>
            </div>
            <div className="relative h-72 overflow-hidden">
              <Image src="/images/hero/hero-golf.jpg" alt="Golf de Pals" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          {/* Golf d'Emporda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 overflow-hidden order-2 md:order-1">
              <Image src="/images/hero/hero-golf.jpg" alt="Golf d'Empordà" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <p className="section-label mb-4">{t('distance')}</p>
              <h2 className="section-title mb-6">{t('empordaGolf')}</h2>
              <p className="section-text">
                {t('empordaGolfDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bleached-stone">
        <div className="container-arenal text-center">
          <h2 className="section-title mb-6">Arenal Aparthotel</h2>
          <Link href="/reservation" className="btn-primary">
            {tCross('book')}
          </Link>
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
            <Link href={`/${locale}/environnement/plages`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourBeaches')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('beachesDesc')}
              </p>
            </Link>
            <Link href={`/${locale}/studios`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourStudios')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('studiosDesc')}
              </p>
            </Link>
            <Link href={`/${locale}/reservation`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('book')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('bookDesc')}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
