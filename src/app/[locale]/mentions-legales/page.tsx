'use client';

import { useTranslations } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('legal');

  return (
    <section className="section-padding">
      <div className="container-arenal max-w-3xl mx-auto">
        <h1 className="mb-8">{t('title')}</h1>

        <div className="space-y-12">
          <div>
            <h2 className="section-title mb-4">{t('owner')}</h2>
            <p className="section-text">
              {t('ownerName')}<br />
              {t('ownerAddress')}<br />
              {t('ownerPhone')}<br />
              {t('ownerEmail')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('hosting')}</h2>
            <p className="section-text">
              {t('hostingProvider')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('intellectual')}</h2>
            <p className="section-text">
              {t('intellectualText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('liability')}</h2>
            <p className="section-text">
              {t('liabilityText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('links')}</h2>
            <p className="section-text">
              {t('linksText')}
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">{t('disputes')}</h2>
            <p className="section-text">
              {t('disputesText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
