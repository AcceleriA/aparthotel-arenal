'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function GolfPage() {
  const t = useTranslations('golf');

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-golf.jpg"
          alt="Golf de Pals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-coastal/50" />
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

          <p className="font-instrument text-lg text-deep-coastal/80 mb-16 max-w-3xl">
            {t('intro')}
          </p>

          {/* Golf de Pals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="label-text mb-2">{t('distance')}</p>
              <h2 className="mb-4">{t('palsGolf')}</h2>
              <p className="font-instrument text-deep-coastal/80 leading-relaxed">
                {t('palsGolfDesc')}
              </p>
            </div>
            <div className="relative h-72 rounded-card overflow-hidden">
              <Image src="/images/hero/hero-golf.jpg" alt="Golf de Pals" fill className="object-cover" />
            </div>
          </div>

          {/* Golf d'Emporda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 rounded-card overflow-hidden order-2 md:order-1">
              <Image src="/images/hero/hero-golf.jpg" alt="Golf d'Empordà" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <p className="label-text mb-2">{t('distance')}</p>
              <h2 className="mb-4">{t('empordaGolf')}</h2>
              <p className="font-instrument text-deep-coastal/80 leading-relaxed">
                {t('empordaGolfDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-limestone/20">
        <div className="container-arenal text-center">
          <h2 className="mb-6">Arenal Aparthotel</h2>
          <Link href="/reservation" className="btn-primary text-lg">
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
