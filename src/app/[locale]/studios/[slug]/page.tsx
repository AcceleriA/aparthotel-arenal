import { useTranslations, useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { studios } from '@/data/studios';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { getVacationRentalSchema, getBreadcrumbSchema } from '@/lib/schema';
import { buildAlternates } from '@/lib/hreflang';

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
    alternates: buildAlternates(`/studios/${studio.slug}`, params.locale),
  };
}

export default function StudioDetailPage({ params }: { params: { slug: string; locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const studio = studios.find((s) => s.slug === params.slug);
  if (!studio) notFound();

  const t = useTranslations('studios');
  const tCross = useTranslations('crosslinks');
  const locale = useLocale();
  const description = studio.description[locale as keyof typeof studio.description] || studio.description.fr;
  const vacationRentalSchema = getVacationRentalSchema(studio.slug, params.locale as Locale);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Studios', url: `/${locale}/studios` },
    { name: studio.name, url: `/${locale}/studios/${studio.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {vacationRentalSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }}
        />
      )}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={studio.image}
          alt={studio.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.4) 80%, rgba(13,43,62,0.7) 100%)'
          }}
        />
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
            <div className="bg-bleached-stone p-8">
              <h3 className="mb-6">{t('features')}</h3>
              <div className="space-y-4">
                <div>
                  <p className="label-text mb-2">{t('capacity')}</p>
                  <p className="font-instrument text-deep-coastal/80">{studio.capacity} {t('persons')}</p>
                </div>
                <div>
                  <p className="label-text mb-2">{t('surface')}</p>
                  <p className="font-instrument text-deep-coastal/80">{studio.surface} {t('sqm')}</p>
                </div>
                <hr className="border-stone-light my-4" />
                {studio.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="text-roof-clay text-lg">✓</span>
                    <span className="font-instrument text-sm text-deep-coastal/70">{t(feature)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {studio.gallery.length > 1 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studio.gallery.map((img, i) => (
                  <div key={i} className="relative h-72 overflow-hidden">
                    <Image src={img} alt={`${studio.name} - ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-bleached-stone p-12 text-center">
            <h2 className="mb-6">{t('bookThis')}</h2>
            <Link href={`/${locale}/reservation`} className="btn-primary">
              {t('bookThis')}
            </Link>
          </div>

          {/* Prev/Next studio navigation */}
          {(() => {
            const currentIndex = studios.findIndex((s) => s.slug === studio.slug);
            const prevStudio = studios[(currentIndex - 1 + studios.length) % studios.length];
            const nextStudio = studios[(currentIndex + 1) % studios.length];
            return (
              <div className="grid grid-cols-2 gap-6 mt-16" style={{ borderTop: '1px solid #D4A574', paddingTop: '2rem' }}>
                <Link
                  href={`/${locale}/studios/${prevStudio.slug}`}
                  className="group flex flex-col"
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>
                    ← {tCross('previousStudio')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: '#1B4965', marginTop: '4px' }} className="group-hover:text-[#C17854] transition-colors">
                    {prevStudio.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999' }}>
                    {prevStudio.surface} m² · {prevStudio.capacity} pers.
                  </span>
                </Link>
                <Link
                  href={`/${locale}/studios/${nextStudio.slug}`}
                  className="group flex flex-col items-end text-right"
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>
                    {tCross('nextStudio')} →
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: '#1B4965', marginTop: '4px' }} className="group-hover:text-[#C17854] transition-colors">
                    {nextStudio.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999' }}>
                    {nextStudio.surface} m² · {nextStudio.capacity} pers.
                  </span>
                </Link>
              </div>
            );
          })()}

          {/* Cross-links */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href={`/${locale}/environnement`}
              className="group p-6 text-center"
              style={{ backgroundColor: '#F5F0E8', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>{tCross('discover')}</span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965', marginTop: '8px' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('environment')}
              </p>
            </Link>
            <Link
              href={`/${locale}/notre-histoire`}
              className="group p-6 text-center"
              style={{ backgroundColor: '#F5F0E8', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>{tCross('discover')}</span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965', marginTop: '8px' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourStory')}
              </p>
            </Link>
            <Link
              href={`/${locale}/reservation`}
              className="group p-6 text-center"
              style={{ backgroundColor: '#F5F0E8', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>{tCross('book')}</span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965', marginTop: '8px' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('yourStay')}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
