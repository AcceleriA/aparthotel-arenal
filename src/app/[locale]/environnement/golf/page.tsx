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
              <Image src="/images/hero/hero-golf.jpg" alt="Golf de Pals" fill className="object-cover" />
            </div>
          </div>

          {/* Golf d'Emporda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 overflow-hidden order-2 md:order-1">
              <Image src="/images/hero/hero-golf.jpg" alt="Golf d'Empordà" fill className="object-cover" />
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
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
