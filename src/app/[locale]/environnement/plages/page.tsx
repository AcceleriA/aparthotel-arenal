'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function BeachesPage() {
  const t = useTranslations('beaches');

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-end overflow-hidden">
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

          <p className="section-text mb-16 max-w-3xl">
            {t('intro')}
          </p>

          {/* Beaches grid */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">{t('platjaPals')}</h2>
                <p className="section-text">
                  {t('platjaPalsDesc')}
                </p>
              </div>
              <div className="relative h-72 overflow-hidden">
                <div className="h-full flex items-center justify-center bg-bleached-stone">
                  <span className="font-italiana text-2xl text-deep-coastal/20">Platja de Pals</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-72 overflow-hidden order-2 md:order-1">
                <div className="h-full flex items-center justify-center bg-bleached-stone">
                  <span className="font-italiana text-2xl text-deep-coastal/20">Sa Riera</span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="section-title mb-6">{t('saRiera')}</h2>
                <p className="section-text">
                  {t('saRieraDesc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">{t('illesFormigues')}</h2>
                <p className="section-text">
                  {t('illesFormiguesDesc')}
                </p>
              </div>
              <div className="relative h-72 overflow-hidden">
                <div className="h-full flex items-center justify-center bg-bleached-stone">
                  <span className="font-italiana text-2xl text-deep-coastal/20">Illes Formigues</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bleached-stone">
        <div className="container-arenal text-center">
          <h2 className="section-title mb-6">Aparthotel Arenal</h2>
          <Link href="/reservation" className="btn-primary">
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
