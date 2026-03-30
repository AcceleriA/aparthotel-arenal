'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ReservationPage() {
  const t = useTranslations('booking');

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-96 flex items-end justify-center overflow-hidden">
        <Image
          src="/images/hero/beach.jpg"
          alt="Reservation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 pb-12">
          <h1 className="font-italiana text-5xl md:text-6xl">{t('title')}</h1>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding">
        <div className="container-arenal">
          {/* Guarantee Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-italiana text-3xl text-center mb-4">{t('guarantee')}</h2>
            <p className="font-instrument text-lg text-center text-deep-coastal/80 mb-8">{t('guaranteeText')}</p>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-italiana text-2xl text-center mb-8">{t('directBenefits')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <p className="font-italiana text-2xl text-terracotta mb-2">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80">{t('benefit1')}</p>
              </div>
              <div className="card text-center">
                <p className="font-italiana text-2xl text-terracotta mb-2">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80">{t('benefit2')}</p>
              </div>
              <div className="card text-center">
                <p className="font-italiana text-2xl text-terracotta mb-2">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80">{t('benefit3')}</p>
              </div>
              <div className="card text-center">
                <p className="font-italiana text-2xl text-terracotta mb-2">✓</p>
                <p className="font-instrument text-sm text-deep-coastal/80">{t('benefit4')}</p>
              </div>
            </div>
          </div>

          {/* Lodgify Widget */}
          <div className="bg-limestone rounded-lg p-8">
            <h2 className="font-italiana text-2xl text-center mb-6">Système de réservation</h2>
            <div id="lodgify-widget" className="min-h-96 flex items-center justify-center">
              <p className="font-instrument text-deep-coastal/60 text-center">
                Chargement du système de réservation...
              </p>
            </div>
            {/* Uncomment and add your Lodgify embed code here */}
            {/*
            <script async src="https://www.lodgify.com/lf.embed.js"></script>
            <div
              class="lf-widget"
              data-property-id="YOUR_PROPERTY_ID"
              data-theme="light"
            ></div>
            */}
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
    </>
  );
}
