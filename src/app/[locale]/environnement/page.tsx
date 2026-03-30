'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function EnvironmentPage() {
  const t = useTranslations('environment');

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-96 flex items-end justify-center overflow-hidden">
        <Image
          src="/images/hero/village.jpg"
          alt="Environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 pb-12">
          <h1 className="font-italiana text-5xl md:text-6xl">{t('title')}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-limestone">
        <div className="container-arenal text-center max-w-3xl mx-auto">
          <h2 className="font-italiana text-3xl mb-4">{t('subtitle')}</h2>
          <p className="font-instrument text-lg text-deep-coastal/80">{t('intro')}</p>
        </div>
      </section>

      {/* Cards */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Golf */}
            <Link href="/environnement/golf">
              <div className="card group cursor-pointer h-full flex flex-col">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/hero/golf.jpg"
                    alt="Golf"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-italiana text-2xl mb-2">{t('golfTitle')}</h3>
                <p className="font-instrument text-deep-coastal/80 flex-grow">{t('golfText')}</p>
                <div className="font-instrument text-terracotta font-semibold group-hover:text-maritime-pine transition-colors mt-4">
                  {t('golfLink')} →
                </div>
              </div>
            </Link>

            {/* Beaches */}
            <Link href="/environnement/plages">
              <div className="card group cursor-pointer h-full flex flex-col">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/hero/beach.jpg"
                    alt="Beaches"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-italiana text-2xl mb-2">{t('beachesTitle')}</h3>
                <p className="font-instrument text-deep-coastal/80 flex-grow">{t('beachesText')}</p>
                <div className="font-instrument text-terracotta font-semibold group-hover:text-maritime-pine transition-colors mt-4">
                  {t('beachesLink')} →
                </div>
              </div>
            </Link>

            {/* Village */}
            <div className="card">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/hero/village.jpg"
                  alt="Village"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-italiana text-2xl mb-2">{t('villageTitle')}</h3>
              <p className="font-instrument text-deep-coastal/80">{t('villageText')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
