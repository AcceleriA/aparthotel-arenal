import { useTranslations, useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { studios } from '@/data/studios';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return studios.flatMap((studio) =>
    locales.map((locale) => ({ locale, slug: studio.slug }))
  );
}

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const studio = studios.find((s) => s.slug === params.slug);
  if (!studio) return {};
  return {
    title: `${studio.name} | Aparthotel Arenal`,
    description: studio.description[params.locale as keyof typeof studio.description] || studio.description.fr,
  };
}

export default function StudioDetailPage({ params }: { params: { slug: string; locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const studio = studios.find((s) => s.slug === params.slug);
  if (!studio) notFound();

  const t = useTranslations('studios');
  const locale = useLocale();
  const description = studio.description[locale as keyof typeof studio.description] || studio.description.fr;

  return (
    <>
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={studio.image}
          alt={studio.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-coastal/40" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="container-arenal">
            <h1 className="text-white mb-2">{studio.name}</h1>
            <p className="font-instrument text-white/80 text-lg">
              {studio.capacity} {t('persons')} · {studio.surface} {t('sqm')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-arenal">
          <Link href={`/${locale}/studios`} className="font-instrument text-terracotta hover:text-deep-coastal transition-colors mb-8 inline-block">
            ← {t('allStudios')}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <p className="font-instrument text-lg text-deep-coastal/80 leading-relaxed">{description}</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-6">
              <h3 className="mb-4">{t('features')}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="label-text">{t('capacity')}</span>
                  <span className="font-instrument">{studio.capacity} {t('persons')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="label-text">{t('surface')}</span>
                  <span className="font-instrument">{studio.surface} {t('sqm')}</span>
                </div>
                <hr className="border-bleached-stone my-3" />
                {studio.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="text-terracotta">✓</span>
                    <span className="font-instrument text-sm">{t(feature)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {studio.gallery.length > 1 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studio.gallery.map((img, i) => (
                  <div key={i} className="relative h-72 rounded-card overflow-hidden">
                    <Image src={img} alt={`${studio.name} - ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-limestone/20 rounded-card p-8 md:p-12 text-center">
            <h2 className="mb-4">{t('bookThis')}</h2>
            <Link href={`/${locale}/reservation`} className="btn-primary text-lg">
              {t('bookThis')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
