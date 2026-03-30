'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <section className="section-padding">
      <div className="container-arenal max-w-3xl mx-auto">
        <h1 className="mb-8">{t('title')}</h1>

        <div className="space-y-12">
          <div>
            <p className="section-text">
              {t('intro')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('dataTitle')}</h2>
            <p className="section-text">
              {t('dataText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('purposeTitle')}</h2>
            <p className="section-text">
              {t('purposeText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('storageTitle')}</h2>
            <p className="section-text">
              {t('storageText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('rightsTitle')}</h2>
            <p className="section-text">
              {t('rightsText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('cookiesTitle')}</h2>
            <p className="section-text">
              {t('cookiesText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('contactTitle')}</h2>
            <p className="section-text">
              {t('contactText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
