'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('nav');

  return (
    <section className="section-padding">
      <div className="container-arenal max-w-3xl mx-auto">
        <h1 className="mb-8">{t('privacy')}</h1>

        <div className="font-instrument text-deep-coastal/80 space-y-8">
          <div>
            <h2 className="mb-3">Politique de confidentialité</h2>
            <p>
              Aparthotel Arenal s&apos;engage à protéger votre vie privée. Cette politique explique
              comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Données collectées</h2>
            <p>
              Nous pouvons collecter des informations personnelles telles que votre nom, adresse
              email, numéro de téléphone et les informations fournies via nos formulaires de contact
              ou demandes de réservation. Ces données ne sont collectées que lorsque vous les
              fournissez volontairement.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Utilisation des données</h2>
            <p>
              Nous utilisons les données collectées pour répondre à vos demandes, traiter les
              réservations, envoyer des communications promotionnelles (avec votre consentement)
              et améliorer notre site et nos services.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Protection des données</h2>
            <p>
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos données
              personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à
              info@aparthotel-arenal.com.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Cookies</h2>
            <p>
              Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur. Vous pouvez
              désactiver les cookies via les paramètres de votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="mb-3">Contact</h2>
            <p>
              Pour toute question relative à cette politique, contactez-nous :<br />
              Email : info@aparthotel-arenal.com<br />
              Téléphone : +34 972 637 000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
