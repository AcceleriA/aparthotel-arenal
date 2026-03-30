'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { studios } from '@/data/studios';

export default function HomePage() {
  const t = useTranslations('home');
  const tStudios = useTranslations('studios');
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-golf.jpg"
          alt="Aparthotel Arenal - Pals, Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-coastal/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-4">{t('heroTitle')}</h1>
          <p className="font-instrument text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('heroSubtitle')}
          </p>
          <Link href="/studios" className="btn-primary text-lg px-8 py-4">
            {t('heroCta')}
          </Link>
        </div>
      </section>

      {/* Story preview */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-text mb-4">{t('sectionStory')}</p>
            <p className="font-instrument text-lg text-deep-coastal/80 mb-6 leading-relaxed">
              {t('storyText')}
            </p>
            <Link href="/notre-histoire" className="btn-secondary">
              {t('storyLink')}
            </Link>
          </div>
        </div>
      </section>

      {/* Studios */}
      <section className="section-padding bg-white">
        <div className="container-arenal">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('sectionStudios')}</h2>
            <p className="font-instrument text-deep-coastal/70 max-w-2xl mx-auto">
              {t('studiosText')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.slice(0, 3).map((studio) => (
              <Link key={studio.slug} href={`/studios/${studio.slug}`}>
                <div className="card group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={studio.image}
                      alt={studio.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2">{studio.name}</h3>
                    <p className="label-text mb-3">
                      {studio.capacity} {tStudios('persons')} · {studio.surface} {tStudios('sqm')}
                    </p>
                    <p className="font-instrument text-deep-coastal/70 text-sm line-clamp-2">
                      {studio.description[locale as keyof typeof studio.description] || studio.description.fr}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/studios" className="btn-secondary">
              {t('studiosLink')}
            </Link>
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('sectionEnvironment')}</h2>
            <p className="font-instrument text-deep-coastal/70 max-w-2xl mx-auto">
              {t('environmentText')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/environnement/golf">
              <div className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/hero/hero-golf.jpg"
                    alt="Golf de Pals"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3>Golf</h3>
                </div>
              </div>
            </Link>
            <Link href="/environnement/plages">
              <div className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-deep-coastal/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-italiana text-3xl text-deep-coastal/30">Plages</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3>Plages</h3>
                </div>
              </div>
            </Link>
            <Link href="/notre-histoire">
              <div className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/arenal-cafe/entrance.jpg"
                    alt="Arenal Café"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3>Arenal Café</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/environnement" className="btn-secondary">
              {t('environmentLink')}
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-deep-coastal">
        <div className="container-arenal text-center">
          <h2 className="text-white mb-4">{t('sectionBooking')}</h2>
          <p className="font-instrument text-white/70 max-w-xl mx-auto mb-8">
            {t('bookingText')}
          </p>
          <Link href="/reservation" className="bg-terracotta text-white px-8 py-4 rounded-lg font-instrument font-medium hover:opacity-90 transition-opacity inline-block text-lg">
            {t('bookingCta')}
          </Link>
        </div>
      </section>
    </>
  );
}
