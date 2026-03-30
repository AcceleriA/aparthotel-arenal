'use client';

import { useTranslations } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('nav');

  return (
    <section className="section-padding">
      <div className="container-arenal max-w-3xl mx-auto">
        <h1 className="mb-8">{t('legal')}</h1>

        <div className="font-instrument text-deep-coastal/80 space-y-8">
          <div>
            <h2 className="mb-3">Informations de l&apos;éditeur</h2>
            <p>
              Aparthotel Arenal<br />
              Carrer de l&apos;Arenal, Pals, 17256, Girona<br />
              Espagne
            </p>
          </div>

          <div>
            <h2 className="mb-3">Contact</h2>
            <p>
              Email : info@aparthotel-arenal.com<br />
              Téléphone : +34 972 637 000
            </p>
          </div>

          <div>
            <h2 className="mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphiques, logos) est la propriété
              d&apos;Aparthotel Arenal et est protégé par les lois espagnoles et européennes sur le droit
              d&apos;auteur. Toute reproduction sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Limitation de responsabilité</h2>
            <p>
              Aparthotel Arenal ne garantit pas que le site et son contenu seront exempts d&apos;erreurs
              ou d&apos;interruptions. Nous ne sommes pas responsables des dommages résultant de
              l&apos;utilisation de ce site.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. Aparthotel Arenal n&apos;est pas
              responsable du contenu ou des pratiques de ces sites tiers.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit espagnol. Tout litige lié à
              l&apos;utilisation de ce site sera soumis aux tribunaux espagnols compétents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
