'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { studios } from '@/data/studios';
import LodgifySearchBar from '@/components/booking/LodgifySearchBar';
import { getLodgingBusinessSchema } from '@/lib/schema';
import type { Locale } from '@/i18n/config';

export default function HomePage() {
  const t = useTranslations('home');
  const tStudios = useTranslations('studios');
  const tLoc = useTranslations('location');
  const locale = useLocale() as Locale;
  const lodgingSchema = getLodgingBusinessSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      {/* 1. HERO */}
      <section className="relative w-full h-screen overflow-hidden flex items-end justify-start">
        <Image
          src="/images/hero/hero-crique-costa-brava.jpg"
          alt="Aparthotel Arenal - Crique de la Costa Brava, eau turquoise et rochers"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />

        {/* Gradient overlay - moins opaque sur mobile pour laisser voir la photo */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.4) 80%, rgba(13,43,62,0.7) 100%)'
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: 'linear-gradient(175deg, rgba(13,43,62,0.05) 0%, rgba(13,43,62,0.0) 40%, rgba(13,43,62,0.2) 80%, rgba(13,43,62,0.4) 100%)'
          }}
        />

        {/* Hero content - bottom-left */}
        <div className="relative z-10 px-20 pb-32 max-w-2xl">
          {/* Location label */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="block"
              style={{
                width: '4px',
                height: '1px',
                backgroundColor: '#D4A574',
                opacity: 0.5
              }}
            />
            <span
              className="text-xs tracking-wider uppercase"
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '11px',
                letterSpacing: '4px',
                color: '#D4A574'
              }}
            >
              Pals, Costa Brava
            </span>
          </div>

          {/* h1 */}
          <h1 className="text-white mb-6 font-display" style={{ fontSize: 'clamp(48px, 7vw, 86px)' }}>
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white mb-8 max-w-xs leading-relaxed"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '18px',
              fontStyle: 'italic',
              opacity: 0.75
            }}
          >
            {t('heroSubtitle')}
          </p>

          {/* CTA Link with arrow */}
          <Link
            href="/studios"
            className="inline-flex items-center gap-2 pb-2 transition-all"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#D4A574',
              borderBottom: '1px solid',
              borderBottomColor: 'rgba(212, 165, 116, 0.5)'
            }}
          >
            <span>{t('heroCta')}</span>
            <span>→</span>
          </Link>
        </div>

        {/* Scroll indicator - bottom-right */}
        <div className="absolute bottom-20 right-20 z-20 flex flex-col items-center gap-3">
          <span
            className="block animate-pulse"
            style={{
              width: '1px',
              height: '40px',
              backgroundColor: '#D4A574',
              opacity: 0.5
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#D4A574',
              opacity: 0.5,
              writingMode: 'vertical-rl',
              textOrientation: 'mixed'
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* 2. BOOKING BAR - Lodgify Search Widget */}
      <section className="relative z-20 -mt-20 mb-20">
        <div className="container-arenal">
          <LodgifySearchBar locale={locale as 'fr' | 'es' | 'en' | 'de' | 'ca'} />
        </div>
      </section>

      {/* 3. INTRO - Two column (image collage | text) */}
      <section className="section-padding">
        <div className="container-arenal">
          <div
            className="grid gap-12 items-center"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            {/* Left: Image collage */}
            <div className="relative h-96">
              {/* Main image - 75% width */}
              <div className="absolute left-0 top-0 w-3/4 h-full">
                <Image
                  src="/images/studios/studio-1.jpg"
                  alt="Studio"
                  fill
                  sizes="(max-width: 768px) 75vw, 37vw"
                  className="object-cover"
                />
              </div>

              {/* Accent image - overlapping bottom-right, 55% width, 240px height */}
              <div
                className="absolute bottom-0 right-0 w-7/12"
                style={{ height: '240px' }}
              >
                <Image
                  src="/images/arenal-cafe/entrance.jpg"
                  alt="Arenal Café"
                  fill
                  sizes="(max-width: 768px) 55vw, 27vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div>
              <div className="section-label mb-4" style={{ color: '#D4A574' }}>
                <span style={{ fontFamily: 'var(--font-utility)', fontSize: '10px', letterSpacing: '4px' }}>
                  {t('spiritLabel')}
                </span>
              </div>

              <h2 className="mb-6">{t('spiritTitle')}</h2>

              <p
                className="section-text mb-8"
                style={{ color: '#555555' }}
              >
                {t('spiritText')}
              </p>

              {/* Stats bar */}
              <div
                className="flex gap-8 pt-8"
                style={{
                  borderTop: '1px solid #D1C9BD'
                }}
              >
                <div>
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '38px',
                      color: '#1B4965'
                    }}
                  >
                    5
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-utility)',
                      fontSize: '10px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#999999'
                    }}
                  >
                    {t('statStudios')}
                  </div>
                </div>

                <div>
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '38px',
                      color: '#1B4965'
                    }}
                  >
                    2 min
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-utility)',
                      fontSize: '10px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#999999'
                    }}
                  >
                    {t('statBeach')}
                  </div>
                </div>

                <div>
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '38px',
                      color: '#1B4965'
                    }}
                  >
                    8.1
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-utility)',
                      fontSize: '10px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#999999'
                    }}
                  >
                    {t('statBooking')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STUDIOS - 5 column grid with colored cards */}
      <section
        className="section-padding"
        style={{ backgroundColor: '#F5F0E8' }}
      >
        <div className="container-arenal">
          {/* Header */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="mb-4">{t('sectionStudios')}</h2>
            </div>
            <p
              className="section-text max-w-sm"
              style={{ color: '#555555' }}
            >
              {t('studiosText')}
            </p>
          </div>

          {/* 5-column grid */}
          <div
            className="grid gap-8 mb-12"
            style={{
              gridTemplateColumns: 'repeat(5, 1fr)'
            }}
          >
            {studios.map((studio, index) => {
              // MVP color gradients per card
              const cardGradients = [
                'linear-gradient(135deg, #8FB8CA 0%, #6a9cb3 40%, #4a8295 100%)',
                'linear-gradient(135deg, #D4A574 0%, #c4956a 40%, #b08560 100%)',
                'linear-gradient(135deg, #5B7553 0%, #6d8a65 40%, #7A9470 100%)',
                'linear-gradient(135deg, #1B4965 0%, #2a6080 40%, #3a7595 100%)',
                'linear-gradient(135deg, #C17854 0%, #d4956e 40%, #D4A574 100%)',
              ];

              return (
                <Link key={studio.slug} href={`/studios/${studio.slug}`}>
                  <div
                    className="h-full flex flex-col cursor-pointer group"
                  >
                    {/* Colored image area with gradient */}
                    <div
                      className="relative h-64 overflow-hidden mb-4"
                      style={{ background: cardGradients[index % 5] }}
                    >
                      <Image
                        src={studio.image}
                        alt={studio.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card content */}
                    <div className="flex-1 flex flex-col" style={{ padding: '28px 28px 32px' }}>
                      {/* Tag badge - positioned on image in MVP */}
                      <div
                        className="mb-3 inline-block px-3 py-1 text-xs"
                        style={{
                          backgroundColor: 'rgba(13, 43, 62, 0.6)',
                          backdropFilter: 'blur(8px)',
                          color: '#ffffff',
                          fontFamily: 'var(--font-utility)',
                          fontSize: '9px',
                          letterSpacing: '2.5px',
                          textTransform: 'uppercase',
                          width: 'fit-content'
                        }}
                      >
                        {studio.capacity} {tStudios('persons')}
                      </div>

                      {/* Name */}
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '24px',
                          color: '#1B4965'
                        }}
                      >
                        {studio.name}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm mb-4 flex-1"
                        style={{
                          color: 'rgba(85, 85, 85, 0.7)',
                          lineHeight: '1.6'
                        }}
                      >
                        {studio.description[locale as keyof typeof studio.description] || studio.description.fr}
                      </p>

                      {/* Details bar with dots + price */}
                      <div
                        className="flex justify-between items-center pt-4"
                        style={{
                          borderTop: '1px solid rgba(212, 165, 116, 0.3)'
                        }}
                      >
                        <div
                          className="flex gap-1"
                          style={{
                            fontFamily: 'var(--font-utility)',
                            fontSize: '9px',
                            color: '#999999'
                          }}
                        >
                          <span>●</span>
                          <span>{studio.surface} m²</span>
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '18px',
                            color: '#C17854'
                          }}
                        >
                          À partir de 65€
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View all link */}
          <div className="text-center">
            <Link href="/studios" className="btn-secondary">
              {t('studiosLink')}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE - Dark section with 4 columns */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ backgroundColor: '#1B4965' }}
      >
        {/* Decorative radial gradients */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #D4A574 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8FB8CA 0%, transparent 70%)'
          }}
        />

        <div className="container-arenal relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-block mb-4"
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '10px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: '#D4A574'
              }}
            >
              {t('experienceLabel')}
            </div>
            <h2
              className="mb-4"
              style={{ color: 'white' }}
            >
              {t('experienceTitle')}
            </h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: '1.8',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              {t('experienceText')}
            </p>
          </div>

          {/* 4-column grid */}
          <div
            className="grid gap-10"
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)'
            }}
          >
            {/* Plage de Pals */}
            <div
              className="pt-8"
              style={{
                borderTop: '1px solid rgba(143, 184, 202, 0.15)'
              }}
            >
              <div className="mb-5" style={{ width: '36px', height: '36px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.2" style={{ width: '28px', height: '28px' }}>
                  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                </svg>
              </div>
              <h4
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  color: '#ffffff',
                  letterSpacing: '1px'
                }}
              >
                {t('expBeachTitle')}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                {t('expBeachText')}
              </p>
            </div>

            {/* Golf de Pals */}
            <div
              className="pt-8"
              style={{
                borderTop: '1px solid rgba(143, 184, 202, 0.15)'
              }}
            >
              <div className="mb-5" style={{ width: '36px', height: '36px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.2" style={{ width: '28px', height: '28px' }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  color: '#ffffff',
                  letterSpacing: '1px'
                }}
              >
                {t('expGolfTitle')}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                {t('expGolfText')}
              </p>
            </div>

            {/* Village médiéval */}
            <div
              className="pt-8"
              style={{
                borderTop: '1px solid rgba(143, 184, 202, 0.15)'
              }}
            >
              <div className="mb-5" style={{ width: '36px', height: '36px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.2" style={{ width: '28px', height: '28px' }}>
                  <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 0v1a3 3 0 006 0V7m0 0v1a3 3 0 006 0V7M5 21V10m14 11V10"/>
                </svg>
              </div>
              <h4
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  color: '#ffffff',
                  letterSpacing: '1px'
                }}
              >
                {t('expVillageTitle')}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                {t('expVillageText')}
              </p>
            </div>

            {/* Gastronomie */}
            <div
              className="pt-8"
              style={{
                borderTop: '1px solid rgba(143, 184, 202, 0.15)'
              }}
            >
              <div className="mb-5" style={{ width: '36px', height: '36px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.2" style={{ width: '28px', height: '28px' }}>
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/>
                </svg>
              </div>
              <h4
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  color: '#ffffff',
                  letterSpacing: '1px'
                }}
              >
                {t('expGastroTitle')}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                {t('expGastroText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING - Centered header + table */}
      <section
        className="section-padding"
        style={{ backgroundColor: '#FAF8F5' }}
      >
        <div className="container-arenal">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label mb-4" style={{ justifyContent: 'center' }}>{t('pricingLabel')}</div>
            <h2 className="section-title mb-4">{t('pricingTitle')}</h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: '#555555',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              {t('pricingText')}
            </p>
          </div>

          {/* Table */}
          <div className="max-w-3xl mx-auto mb-8">
            {/* Header row */}
            <div
              className="pricing-row"
              style={{
                gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: '2px solid #1B4965'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#1B4965'
                }}
              >
                {t('pricingColSeason')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#1B4965'
                }}
              >
                {t('pricingColPeriod')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#1B4965'
                }}
              >
                {t('pricingColPrice')}
              </div>
            </div>

            {/* Data rows */}
            {(t.raw('seasons') as Array<{ season: string; period: string; price: string }>).map((row, idx) => (
              <div
                key={idx}
                className="pricing-row"
                style={{
                  gridTemplateColumns: '1fr 1fr 1fr',
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F5F0E8'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#2C2C2C'
                  }}
                >
                  {row.season}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#555555'
                  }}
                >
                  {row.period}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '26px',
                    color: '#C17854'
                  }}
                >
                  {row.price}<span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999999' }}>{t('pricingPerNight')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '13px',
              fontStyle: 'italic',
              color: '#555555'
            }}
          >
            Réductions early-bird, séjours longs et réservations directes disponibles.
          </p>
        </div>
      </section>

      {/* 7. PACKAGES - 3 cards (MVP originals) */}
      <section className="section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="container-arenal">
          {/* Header */}
          <div className="mb-16">
            <div className="section-label mb-4">{t('packagesLabel')}</div>
            <h2 className="section-title mb-4">{t('packagesTitle')}</h2>
            <p className="section-text">
              {t('packagesText')}
            </p>
          </div>

          {/* 3 cards */}
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
          >
            {/* Golf & Sérénité */}
            <div
              className="p-10 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#FAF8F5',
                borderTop: '3px solid #1B4965',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(27, 73, 101, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: '#1B4965', letterSpacing: '1px', marginBottom: '12px' }}>
                {t('pkg1Title')}
              </h3>
              <p style={{ fontFamily: 'var(--font-utility)', fontWeight: 300, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>
                {t('pkg1Duration')}
              </p>
              <ul className="mb-7 space-y-2" style={{ listStyle: 'none' }}>
                {(t.raw('pkg1Items') as string[]).map((item, i) => (
                  <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.6', color: '#555', paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '1px', background: '#D4A574', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ paddingTop: '20px', borderTop: '1px solid #D1C9BD' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#C17854' }}>320&euro;</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6B6B6B', marginLeft: '4px' }}> / personne</span>
              </div>
            </div>

            {/* Découverte Empordà */}
            <div
              className="p-10 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#FAF8F5',
                borderTop: '3px solid #5B7553',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(27, 73, 101, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: '#1B4965', letterSpacing: '1px', marginBottom: '12px' }}>
                {t('pkg2Title')}
              </h3>
              <p style={{ fontFamily: 'var(--font-utility)', fontWeight: 300, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>
                {t('pkg2Duration')}
              </p>
              <ul className="mb-7 space-y-2" style={{ listStyle: 'none' }}>
                {(t.raw('pkg2Items') as string[]).map((item, i) => (
                  <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.6', color: '#555', paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '1px', background: '#D4A574', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ paddingTop: '20px', borderTop: '1px solid #D1C9BD' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#C17854' }}>480&euro;</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6B6B6B', marginLeft: '4px' }}> / couple</span>
              </div>
            </div>

            {/* Télétravail Littoral */}
            <div
              className="p-10 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#FAF8F5',
                borderTop: '3px solid #C17854',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(27, 73, 101, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: '#1B4965', letterSpacing: '1px', marginBottom: '12px' }}>
                T&eacute;l&eacute;travail Littoral
              </h3>
              <p style={{ fontFamily: 'var(--font-utility)', fontWeight: 300, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>
                7 nuits minimum
              </p>
              <ul className="mb-7 space-y-2" style={{ listStyle: 'none' }}>
                {['Studio Avena, 7 nuits', 'Wifi haut d\u00e9bit garanti', 'Espace de travail d\u00e9di\u00e9', 'R\u00e9duction de 15% sur le tarif standard'].map((item, i) => (
                  <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.6', color: '#555', paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '1px', background: '#D4A574', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ paddingTop: '20px', borderTop: '1px solid #D1C9BD' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#C17854' }}>385&euro;</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6B6B6B', marginLeft: '4px' }}> / semaine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCATION - 2 col grid */}
      <section className="section-padding">
        <div className="container-arenal">
          <div
            className="grid gap-16 items-center"
            style={{
              gridTemplateColumns: '1fr 1fr'
            }}
          >
            {/* Left: Google Maps iframe - adresse Carrer del Canigó 42, Pals */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Carrer+del+Canig%C3%B3+42%2C+17256+Pals%2C+Girona%2C+Spain&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aparthotel Arenal - Carrer del Canigó 42, Pals"
              />
            </div>

            {/* Right: Text content */}
            <div>
              <div className="section-label mb-4" style={{ color: '#D4A574' }}>
                <span style={{ fontFamily: 'var(--font-utility)', fontSize: '10px', letterSpacing: '4px' }}>
                  {tLoc('sectionLabel')}
                </span>
              </div>

              <h2 className="mb-6">{tLoc('title')}</h2>

              <p
                className="section-text mb-8"
                style={{ color: '#555555' }}
              >
                {tLoc('description')}
              </p>

              {/* Distances list */}
              <div className="space-y-3">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#555555',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #D1C9BD'
                  }}
                >
                  <span>{tLoc('beach')}</span>
                  <span style={{ color: '#D4A574' }}>{tLoc('beachTime')}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#555555',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #D1C9BD'
                  }}
                >
                  <span>{tLoc('golf')}</span>
                  <span style={{ color: '#D4A574' }}>{tLoc('golfTime')}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#555555',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #D1C9BD'
                  }}
                >
                  <span>{tLoc('airport')}</span>
                  <span style={{ color: '#D4A574' }}>{tLoc('airportTime')}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#555555',
                    paddingTop: '8px'
                  }}
                >
                  <span>{tLoc('barcelona')}</span>
                  <span style={{ color: '#D4A574' }}>{tLoc('barcelonaTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOOKING CTA - Deep-coastal bg, centered */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ backgroundColor: '#1B4965' }}
      >
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(90deg, #D4A574 1px, transparent 1px), linear-gradient(#D4A574 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container-arenal relative z-10 text-center">
          <h2
            className="mb-4"
            style={{ color: '#ffffff' }}
          >
            {t('ctaTitle')}
          </h2>
          <p
            className="mb-8"
            style={{
              color: '#ffffff',
              opacity: 0.55,
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              maxWidth: '560px',
              margin: '0 auto 32px'
            }}
          >
            {t('ctaText')}
          </p>
          <Link
            href="/reservation"
            className="inline-block px-12 py-4 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              backgroundColor: '#C17854'
            }}
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
