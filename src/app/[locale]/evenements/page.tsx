'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function EventsPage() {
  const t = useTranslations('events');
  const locale = useLocale();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Événements', url: `/${locale}/evenements` },
  ]);

  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
  ] as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-terrasse-arenal.jpg"
          alt="Arenal Café - Événements"
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

      {/* Intro */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-text text-center">
              {t('intro')}
            </p>
          </div>

          {/* Monthly events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {months.map((month) => (
              <div key={month} className="card">
                <div className="p-6">
                  <p className="section-label mb-2">{t(`${month}.period`)}</p>
                  <h3 className="section-title mb-3 text-xl">{t(`${month}.name`)}</h3>
                  <p className="font-instrument text-deep-coastal/70 text-sm leading-relaxed">
                    {t(`${month}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA back to story */}
          <div className="text-center mt-16">
            <p className="font-instrument text-deep-coastal/70 mb-6">{t('ctaText')}</p>
            <Link href="/notre-histoire" className="btn-secondary">
              {t('ctaLink')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
