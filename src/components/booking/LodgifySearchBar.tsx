'use client';

import { useEffect, useRef } from 'react';

interface LodgifySearchBarProps {
  className?: string;
}

/**
 * Composant Lodgify Portable Search Bar
 * Charge dynamiquement le widget de recherche Lodgify avec les paramètres Arenal.
 *
 * Website ID: 646342
 * Checkout URL: https://checkout.lodgify.com/nuria-fuentes-martinez/fr/#/787031
 */
export default function LodgifySearchBar({ className = '' }: LodgifySearchBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Injecter les CSS custom properties pour le branding Arenal
    const styleId = 'lodgify-arenal-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        :root {
          --ldg-psb-background: #ffffff;
          --ldg-psb-border-radius: 0.42em;
          --ldg-psb-box-shadow: 0px 24px 54px 0px rgba(0, 0, 0, 0.1);
          --ldg-psb-padding: 14px;
          --ldg-psb-input-background: #ffffff;
          --ldg-psb-button-border-radius: 0.42em;
          --ldg-psb-color-primary: #1b4965;
          --ldg-psb-color-primary-lighter: #8da4b2;
          --ldg-psb-color-primary-darker: #0e2533;
          --ldg-psb-color-primary-contrast: #ffffff;
          --ldg-semantic-color-primary: #1b4965;
          --ldg-semantic-color-primary-lighter: #8da4b2;
          --ldg-semantic-color-primary-darker: #0e2533;
          --ldg-semantic-color-primary-contrast: #ffffff;
          --ldg-component-modal-z-index: 999;
        }
        #lodgify-search-bar {
          width: 100%;
        }
      `;
      document.head.appendChild(style);
    }

    // Charger le script Lodgify une seule fois
    if (!scriptLoaded.current) {
      const existingScript = document.querySelector(
        'script[src="https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js"]'
      );
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js';
        script.defer = true;
        document.body.appendChild(script);
      }
      scriptLoaded.current = true;
    }
  }, []);

  return (
    <div className={className}>
      <div
        id="lodgify-search-bar"
        ref={containerRef}
        data-website-id="646342"
        data-language-code="fr"
        data-checkout-page-url="https://checkout.lodgify.com/nuria-fuentes-martinez/fr/#/787031"
        data-dates-check-in-label="Arrivée"
        data-dates-check-out-label="Départ"
        data-guests-counter-label="Invités"
        data-guests-input-singular-label="{{NumberOfGuests}} invité"
        data-guests-input-plural-label="{{NumberOfGuests}} invités"
        data-location-input-label="Emplacement"
        data-search-button-label="Rechercher"
        data-dates-input-min-stay-tooltip-text='{"one":"Minimum {minStay} nuit","other":"Minimum de {minStay} nuits"}'
        data-guests-breakdown-label="Invités"
        data-adults-label='{"one":"adulte","other":"adultes"}'
        data-adults-description="Âges {minAge} ou plus"
        data-children-label='{"one":"enfant","other":"enfants"}'
        data-children-description="Âges {minAge} - {maxAge}"
        data-children-not-allowed-label="Non adapté aux enfants"
        data-infants-label='{"one":"bébé","other":"bébés"}'
        data-infants-description="Moins de {maxAge}"
        data-infants-not-allowed-label="Non adapté aux bébés"
        data-pets-label='{"one":"animal de compagnie","other":"animaux de compagnie"}'
        data-pets-not-allowed-label="Non autorisé"
        data-done-label="Terminé"
        data-new-tab="true"
        data-version="stable"
        data-has-guests-breakdown
      />
    </div>
  );
}
