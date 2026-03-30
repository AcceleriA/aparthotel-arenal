'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function BeachesPage() {
  const t = useTranslations('beaches');

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-end overflow-hidden bg-deep-coastal/10">
        <div className="absolute inset-0 bg-deep-coastal/30" />
        <div className="relative z-10 container-arenal pb-12">
          <h1 className="text-deep-coastal">{t('title')}</h1>
          <p className="font-instrument text-deep-coastal/70 text-lg mt-2">{t('subtitle')}</p>
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

          {/* Beaches grid */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">{t('platjaPals')}</h2>
                <p className="font-instrument text-deep-coastal/80 leading-relaxed">
                  {t('platjaPalsDesc')}
                </p>
              </div>
              <div className="h-64 rounded-card bg-limestone/20 flex items-center justify-center">
                <span className="font-italiana text-2xl text-deep-coastal/20">Platja de Pals</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-64 rounded-card bg-limestone/20 flex items-center justify-center order-2 md:order-1">
                <span className="font-italiana text-2xl text-deep-coastal/20">Sa Riera</span>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-4">{t('saRiera')}</h2>
                <p className="font-instrument text-deep-coastal/80 leading-relaxed">
                  {t('saRieraDesc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">{t('illesFormigues')}</h2>
                <p className="font-instrument text-deep-coastal/80 leading-relaxed">
                  {t('illesFormiguesDesc')}
                </p>
              </div>
              <div className="h-64 rounded-card bg-limestone/20 flex items-center justify-center">
                <span className="font-italiana text-2xl text-deep-coastal/20">Illes Formigues</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-limestone/20">
        <div className="container-arenal text-center">
          <h2 className="mb-6">Aparthotel Arenal</h2>
          <Link href="/reservation" className="btn-primary text-lg">
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
