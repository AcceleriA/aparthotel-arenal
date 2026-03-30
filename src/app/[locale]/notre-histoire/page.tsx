'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function StoryPage() {
  const t = useTranslations('story');

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/arenal-cafe/entrance.jpg"
          alt="Arenal Café"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-coastal/50" />
        <div className="relative z-10 container-arenal pb-12">
          <h1 className="text-white">{t('title')}</h1>
          <p className="font-instrument text-white/80 text-lg mt-2">{t('subtitle')}</p>
        </div>
      </section>

      {/* Story blocks */}
      <section className="section-padding">
        <div className="container-arenal">
          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="mb-4">{t('block1Title')}</h2>
              <p className="font-instrument text-lg text-deep-coastal/80 leading-relaxed">
                {t('block1Text')}
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/arenal-cafe/entrance.jpg"
                alt="Arenal Café - Les débuts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-80 rounded-card overflow-hidden order-2 md:order-1">
              <Image
                src="/images/hero/hero-studio.jpg"
                alt="Studios Arenal"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-4">{t('block2Title')}</h2>
              <p className="font-instrument text-lg text-deep-coastal/80 leading-relaxed">
                {t('block2Text')}
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">{t('block3Title')}</h2>
              <p className="font-instrument text-lg text-deep-coastal/80 leading-relaxed">
                {t('block3Text')}
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/studios/studio-1.jpg"
                alt="Studio Arenal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
