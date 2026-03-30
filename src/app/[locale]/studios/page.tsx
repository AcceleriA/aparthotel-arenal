'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { studios } from '@/data/studios';

export default function StudiosPage() {
  const t = useTranslations('studios');
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-studio.jpg"
          alt="Studios Arenal"
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

      {/* Studios grid */}
      <section className="section-padding">
        <div className="container-arenal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.map((studio) => (
              <Link key={studio.slug} href={`/studios/${studio.slug}`}>
                <div className="card group cursor-pointer h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={studio.image}
                      alt={studio.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="mb-2">{studio.name}</h3>
                    <p className="label-text mb-3">
                      {studio.capacity} {t('persons')} · {studio.surface} {t('sqm')}
                    </p>
                    <p className="font-instrument text-deep-coastal/70 text-sm flex-grow line-clamp-3">
                      {studio.description[locale as keyof typeof studio.description] || studio.description.fr}
                    </p>
                    <p className="font-instrument text-terracotta font-medium mt-4 group-hover:text-deep-coastal transition-colors">
                      {t('bookThis')} →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
