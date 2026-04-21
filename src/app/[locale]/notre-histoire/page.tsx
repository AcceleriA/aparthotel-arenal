'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function StoryPage() {
  const t = useTranslations('story');
  const tNav = useTranslations('nav');
  const tCross = useTranslations('crosslinks');
  const locale = useLocale();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Notre histoire', url: `/${locale}/notre-histoire` },
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
          src="/images/arenal-cafe/entrance.jpg"
          alt="Arenal Café"
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
          <p className="section-label text-white/60 mb-4">{t('sectionLabel')}</p>
          <h1 className="text-white mb-2">{t('title')}</h1>
          <p className="font-accent italic font-lora text-white/70 text-lg">{t('subtitle')}</p>
        </div>
      </section>

      {/* Story blocks */}
      <section className="section-padding">
        <div className="container-arenal">
          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="section-label mb-4">{t('block1Label')}</p>
              <h2 className="section-title mb-6">{t('block1Title')}</h2>
              <p className="section-text">{t('block1Text')}</p>
            </div>
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/arenal-cafe/entrance.jpg"
                alt="Arenal Café - Les débuts"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-80 overflow-hidden order-2 md:order-1">
              <Image
                src="/images/hero/hero-studio.jpg"
                alt="Studios Arenal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="section-label mb-4">{t('block2Label')}</p>
              <h2 className="section-title mb-6">{t('block2Title')}</h2>
              <p className="section-text">{t('block2Text')}</p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">{t('block3Label')}</p>
              <h2 className="section-title mb-6">{t('block3Title')}</h2>
              <p className="section-text">{t('block3Text')}</p>
            </div>
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/studios/studio-1.jpg"
                alt="Studio Arenal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Events CTA */}
          <div className="mt-20">
            <div className="bg-bleached-stone p-12">
              <div className="text-center max-w-2xl mx-auto">
                <p className="section-label mb-6 justify-center">{t('eventsCta')}</p>
                <h2 className="section-title mb-6">{t('eventsTitle')}</h2>
                <p className="section-text mb-8 mx-auto">{t('eventsText')}</p>
                <Link href="/evenements" className="btn-primary">
                  {tNav('events')}
                </Link>
              </div>
            </div>
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
            <Link href={`/${locale}/studios`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourStudios')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('studiosDesc')}
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
