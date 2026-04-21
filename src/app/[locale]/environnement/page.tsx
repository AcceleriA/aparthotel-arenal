'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function EnvironmentPage() {
  const t = useTranslations('environment');
  const locale = useLocale();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Environnement', url: `/${locale}/environnement` },
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
          alt="Environment"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.4) 80%, rgba(13,43,62,0.7) 100%)'
          }}
        />
        <div className="relative z-10 container-arenal pb-12">
          <h1 className="text-white">{t('title')}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-bleached-stone">
        <div className="container-arenal text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-6">{t('subtitle')}</h2>
          <p className="section-text text-center">{t('intro')}</p>
        </div>
      </section>

      {/* Cards */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Golf */}
            <Link href="/environnement/golf">
              <div className="card group cursor-pointer h-full flex flex-col overflow-hidden">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src="/images/hero/golf.jpg"
                    alt="Golf"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="section-title mb-3 text-2xl">{t('golfTitle')}</h3>
                  <p className="font-instrument text-deep-coastal/70 flex-grow">{t('golfText')}</p>
                  <p className="font-instrument text-roof-clay font-medium group-hover:text-deep-coastal transition-colors mt-4">
                    {t('golfLink')} →
                  </p>
                </div>
              </div>
            </Link>

            {/* Beaches */}
            <Link href="/environnement/plages">
              <div className="card group cursor-pointer h-full flex flex-col overflow-hidden">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src="/images/hero/beach.jpg"
                    alt="Beaches"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="section-title mb-3 text-2xl">{t('beachesTitle')}</h3>
                  <p className="font-instrument text-deep-coastal/70 flex-grow">{t('beachesText')}</p>
                  <p className="font-instrument text-roof-clay font-medium group-hover:text-deep-coastal transition-colors mt-4">
                    {t('beachesLink')} →
                  </p>
                </div>
              </div>
            </Link>

            {/* Village */}
            <div className="card h-full flex flex-col overflow-hidden">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="/images/hero/village.jpg"
                  alt="Village"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="section-title mb-3 text-2xl">{t('villageTitle')}</h3>
                <p className="font-instrument text-deep-coastal/70">{t('villageText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
