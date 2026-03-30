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
      {/* 1. HERO */}
      <section className="relative w-full h-screen overflow-hidden flex items-end justify-start">
        <Image
          src="/images/hero/hero-golf.jpg"
          alt="Aparthotel Arenal - Pals, Costa Brava"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.4) 80%, rgba(13,43,62,0.7) 100%)'
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

      {/* 2. BOOKING BAR - Floating */}
      <section className="relative z-20 -mt-20 mb-20">
        <div className="container-arenal">
          <div
            className="bg-white p-8 rounded-lg shadow-lg"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}
          >
            {/* Arrival */}
            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '9px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#999999'
                }}
              >
                Arrivée
              </label>
              <input
                type="date"
                className="w-full"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  border: 'none',
                  outline: 'none',
                  color: '#2C2C2C'
                }}
              />
            </div>

            {/* Departure */}
            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '9px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#999999'
                }}
              >
                Départ
              </label>
              <input
                type="date"
                className="w-full"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  border: 'none',
                  outline: 'none',
                  color: '#2C2C2C'
                }}
              />
            </div>

            {/* Travelers */}
            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '9px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#999999'
                }}
              >
                Voyageurs
              </label>
              <select
                className="w-full"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  border: 'none',
                  outline: 'none',
                  color: '#2C2C2C'
                }}
              >
                <option>1-2</option>
                <option>2-4</option>
                <option>4+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                className="w-full text-white font-medium transition-opacity hover:opacity-90 py-2 px-4 rounded"
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  backgroundColor: '#1B4965'
                }}
              >
                Chercher
              </button>
            </div>
          </div>
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
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div>
              <div className="section-label mb-4" style={{ color: '#D4A574' }}>
                <span style={{ fontFamily: 'var(--font-utility)', fontSize: '10px', letterSpacing: '4px' }}>
                  L&apos;ESPRIT ARENAL
                </span>
              </div>

              <h2 className="mb-6">Notre Histoire</h2>

              <p
                className="section-text mb-8"
                style={{ color: '#555555' }}
              >
                Trois amis, un café, et plus de vingt ans d&apos;histoire. L&apos;Arenal, c&apos;est un lieu de vie avant d&apos;être un hébergement. Le café au rez-de-chaussée a vu naître des amitiés, des projets, des matinées ensoleillées.
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
                    Studios
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
                    Plage
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
                    Booking
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
                          À partir de 95€
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
              COSTA BRAVA
            </div>
            <h2
              className="mb-4"
              style={{ color: 'white' }}
            >
              L&apos;exp&eacute;rience Arenal
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
              L&apos;Empord&agrave; offre un &eacute;quilibre rare entre nature pr&eacute;serv&eacute;e, patrimoine m&eacute;di&eacute;val et gastronomie d&apos;exception.
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
                Plage de Pals
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                Trois kilom&egrave;tres de sable fin bord&eacute; de dunes naturelles et de pin&egrave;des. Accessible &agrave; pied en cinq minutes depuis l&apos;Arenal.
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
                Golf de Pals
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                Parcours 18 trous parmi les plus r&eacute;put&eacute;s d&apos;Espagne, trac&eacute; entre pins maritimes et vue sur les &icirc;les M&egrave;des.
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
                Village m&eacute;di&eacute;val
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                Ruelles pav&eacute;es, tour romane et places ombrag&eacute;es. Le village de Pals est class&eacute; parmi les plus beaux de Catalogne.
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
                Gastronomie
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.7'
                }}
              >
                L&apos;Empord&agrave; concentre une densit&eacute; remarquable de restaurants &eacute;toil&eacute;s, de caves familiales et de march&eacute;s locaux.
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
            <div className="section-label mb-4" style={{ justifyContent: 'center' }}>Saison 2026</div>
            <h2 className="section-title mb-4">Grille tarifaire</h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: '#555555',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              Tarifs par nuit pour un studio classique, hors promotions et packages. Dégressivité appliquée à partir de 5 nuits.
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
                Saison
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
                Période
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
                Prix/nuit
              </div>
            </div>

            {/* Data rows */}
            {[
              { season: 'Basse saison', period: 'Novembre - Mars', price: '65-75€' },
              { season: 'Moyenne saison', period: 'Avril - Mai, Octobre', price: '85-100€' },
              { season: 'Haute saison', period: 'Juin, Septembre', price: '115-130€' },
              { season: 'Ultra haute saison', period: 'Juillet - Août', price: '140-160€' }
            ].map((row, idx) => (
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
                  {row.price}<span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999999' }}>/nuit</span>
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
            <div className="section-label mb-4">S&eacute;jours th&eacute;matiques</div>
            <h2 className="section-title mb-4">Nos packages</h2>
            <p className="section-text">
              Des formules pens&eacute;es pour profiter pleinement de la Costa Brava, combin&eacute;es avec nos partenaires locaux.
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
                Golf &amp; S&eacute;r&eacute;nit&eacute;
              </h3>
              <p style={{ fontFamily: 'var(--font-utility)', fontWeight: 300, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>
                3 nuits minimum
              </p>
              <ul className="mb-7 space-y-2" style={{ listStyle: 'none' }}>
                {['Studio Mestral, 3 nuits', '1 green fee Golf de Pals (18 trous)', 'Petit-d\u00e9jeuner continental quotidien', 'Late checkout garanti (14h)'].map((item, i) => (
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
                D&eacute;couverte Empord&agrave;
              </h3>
              <p style={{ fontFamily: 'var(--font-utility)', fontWeight: 300, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>
                4 nuits minimum
              </p>
              <ul className="mb-7 space-y-2" style={{ listStyle: 'none' }}>
                {['Studio Llevant, 4 nuits', 'Visite guid\u00e9e du village m\u00e9di\u00e9val', 'D\u00e9gustation dans un domaine viticole', 'Carte des sentiers c\u00f4tiers'].map((item, i) => (
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
                {['Studio Gregal, 7 nuits', 'Wifi haut d\u00e9bit garanti', 'Espace de travail d\u00e9di\u00e9', 'R\u00e9duction de 15% sur le tarif standard'].map((item, i) => (
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
            {/* Left: Stylized map */}
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundColor: '#1B4965'
              }}
            >
              {/* Decorative radial gradients */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 70% 70%, rgba(143, 184, 202, 0.1) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />

              {/* "PALS" text */}
              <div
                className="absolute inset-0 flex items-center justify-center text-center"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '96px',
                  color: '#1B4965',
                  opacity: 0.1,
                  zIndex: 0
                }}
              >
                PALS
              </div>

              {/* Animated pin */}
              <div
                className="absolute top-1/3 left-1/3 z-10"
                style={{
                  animation: 'pulse 2s infinite'
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#D4A574',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 8px rgba(212, 165, 116, 0.2)'
                  }}
                />
              </div>

              <style>{`
                @keyframes pulse {
                  0%, 100% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(1.1); opacity: 0.8; }
                }
              `}</style>
            </div>

            {/* Right: Text content */}
            <div>
              <div className="section-label mb-4" style={{ color: '#D4A574' }}>
                <span style={{ fontFamily: 'var(--font-utility)', fontSize: '10px', letterSpacing: '4px' }}>
                  LOCALISATION
                </span>
              </div>

              <h2 className="mb-6">Pals, Costa Brava</h2>

              <p
                className="section-text mb-8"
                style={{ color: '#555555' }}
              >
                Situé au coeur de l&apos;Empordà, Pals est un village médiéval perché sur les collines catalanes. À la croisée des chemins, entre plages et montagnes, golfs et traditions.
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
                  <span>Plage de Pals</span>
                  <span style={{ color: '#D4A574' }}>2 min</span>
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
                  <span>Golf de Pals</span>
                  <span style={{ color: '#D4A574' }}>5 min</span>
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
                  <span>Aéroport de Girona</span>
                  <span style={{ color: '#D4A574' }}>40 min</span>
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
                  <span>Barcelone</span>
                  <span style={{ color: '#D4A574' }}>120 min</span>
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
            Prêt pour une pause en Empordà ?
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
            Consultez nos disponibilités et réservez en direct au meilleur tarif garanti.
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
            Voir les Disponibilités
          </Link>
        </div>
      </section>
    </>
  );
}
