'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import LodgifySearchBar from '@/components/booking/LodgifySearchBar';

export default function ReservationPage() {
  const t = useTranslations('booking');
  const tCross = useTranslations('crosslinks');
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-golf.jpg"
          alt="Reservation"
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
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding">
        <div className="container-arenal">
          {/* Guarantee Section */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="section-title mb-6">{t('guarantee')}</h2>
            <p className="section-text text-center">{t('guaranteeText')}</p>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-title text-center mb-12">{t('directBenefits')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-6 text-center">
                <p className="text-3xl text-roof-clay mb-4">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80 leading-relaxed">{t('benefit1')}</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl text-roof-clay mb-4">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80 leading-relaxed">{t('benefit2')}</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl text-roof-clay mb-4">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80 leading-relaxed">{t('benefit3')}</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl text-roof-clay mb-4">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80 leading-relaxed">{t('benefit4')}</p>
              </div>
            </div>
          </div>

          {/* Lodgify Widget */}
          <div className="bg-bleached-stone p-12">
            <h2 className="section-title text-center mb-8">{t('searchTitle')}</h2>
            <LodgifySearchBar />
          </div>

          {/* Alternative Contact Info */}
          <div className="mt-12 text-center">
            <p className="font-instrument text-deep-coastal/60 mb-4">Ou contactez-nous directement :</p>
            <p className="font-instrument text-lg">
              <a href="mailto:info@aparthotel-arenal.com" className="text-terracotta hover:text-maritime-pine transition-colors font-semibold">
                info@aparthotel-arenal.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Découvrir aussi */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '4rem 0' }}>
        <div className="container-arenal">
          <div className="text-center mb-10">
            <span style={{ fontFamily: 'var(--font-utility)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B8AFA3' }}>
              {tCross('discoverAlso')}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href={`/${locale}/studios`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourStudios')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('studiosDesc')}
              </p>
            </Link>
            <Link href={`/${locale}/environnement`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('environment')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('environmentDesc')}
              </p>
            </Link>
            <Link href={`/${locale}/notre-histoire`} className="group bg-white p-8 text-center" style={{ textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#1B4965' }} className="group-hover:text-[#C17854] transition-colors">
                {tCross('ourStory')}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#999', marginTop: '8px' }}>
                {tCross('storyDesc')}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
