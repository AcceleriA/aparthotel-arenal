'use client';

import { useEffect, useRef } from 'react';

type LodgifyLocale = 'fr' | 'es' | 'en' | 'de' | 'ca';

interface LodgifySearchBarProps {
  className?: string;
  locale?: LodgifyLocale;
}

interface LodgifyLabels {
  checkIn: string;
  checkOut: string;
  guests: string;
  guestSingular: string;
  guestPlural: string;
  location: string;
  search: string;
  minStayOne: string;
  minStayOther: string;
  adultsOne: string;
  adultsOther: string;
  adultsDesc: string;
  childrenOne: string;
  childrenOther: string;
  childrenDesc: string;
  childrenNotAllowed: string;
  infantsOne: string;
  infantsOther: string;
  infantsDesc: string;
  infantsNotAllowed: string;
  petsOne: string;
  petsOther: string;
  petsNotAllowed: string;
  done: string;
  searchPageUrl: string;
}

const TRANSLATIONS: Record<LodgifyLocale, LodgifyLabels> = {
  fr: {
    checkIn: 'Arrivée',
    checkOut: 'Départ',
    guests: 'Invités',
    guestSingular: '{{NumberOfGuests}} invité',
    guestPlural: '{{NumberOfGuests}} invités',
    location: 'Emplacement',
    search: 'Rechercher',
    minStayOne: 'Minimum {minStay} nuit',
    minStayOther: 'Minimum de {minStay} nuits',
    adultsOne: 'adulte',
    adultsOther: 'adultes',
    adultsDesc: 'Âges {minAge} ou plus',
    childrenOne: 'enfant',
    childrenOther: 'enfants',
    childrenDesc: 'Âges {minAge} - {maxAge}',
    childrenNotAllowed: 'Non adapté aux enfants',
    infantsOne: 'bébé',
    infantsOther: 'bébés',
    infantsDesc: 'Moins de {maxAge}',
    infantsNotAllowed: 'Non adapté aux bébés',
    petsOne: 'animal de compagnie',
    petsOther: 'animaux de compagnie',
    petsNotAllowed: 'Non autorisé',
    done: 'Terminé',
    searchPageUrl: 'https://nuria-fuentes-martinez.lodgify.com/fr/proprietes',
  },
  es: {
    checkIn: 'Llegada',
    checkOut: 'Salida',
    guests: 'Huéspedes',
    guestSingular: '{{NumberOfGuests}} huésped',
    guestPlural: '{{NumberOfGuests}} huéspedes',
    location: 'Ubicación',
    search: 'Buscar',
    minStayOne: 'Mínimo {minStay} noche',
    minStayOther: 'Mínimo de {minStay} noches',
    adultsOne: 'adulto',
    adultsOther: 'adultos',
    adultsDesc: 'Edades {minAge} o más',
    childrenOne: 'niño',
    childrenOther: 'niños',
    childrenDesc: 'Edades {minAge} - {maxAge}',
    childrenNotAllowed: 'No apto para niños',
    infantsOne: 'bebé',
    infantsOther: 'bebés',
    infantsDesc: 'Menos de {maxAge}',
    infantsNotAllowed: 'No apto para bebés',
    petsOne: 'mascota',
    petsOther: 'mascotas',
    petsNotAllowed: 'No permitido',
    done: 'Hecho',
    searchPageUrl: 'https://nuria-fuentes-martinez.lodgify.com/es/propiedades',
  },
  en: {
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    guests: 'Guests',
    guestSingular: '{{NumberOfGuests}} guest',
    guestPlural: '{{NumberOfGuests}} guests',
    location: 'Location',
    search: 'Search',
    minStayOne: 'Minimum {minStay} night',
    minStayOther: 'Minimum of {minStay} nights',
    adultsOne: 'adult',
    adultsOther: 'adults',
    adultsDesc: 'Ages {minAge} and up',
    childrenOne: 'child',
    childrenOther: 'children',
    childrenDesc: 'Ages {minAge} - {maxAge}',
    childrenNotAllowed: 'Not suitable for children',
    infantsOne: 'infant',
    infantsOther: 'infants',
    infantsDesc: 'Under {maxAge}',
    infantsNotAllowed: 'Not suitable for infants',
    petsOne: 'pet',
    petsOther: 'pets',
    petsNotAllowed: 'Not allowed',
    done: 'Done',
    searchPageUrl: 'https://nuria-fuentes-martinez.lodgify.com/en/properties',
  },
  de: {
    checkIn: 'Anreise',
    checkOut: 'Abreise',
    guests: 'Gäste',
    guestSingular: '{{NumberOfGuests}} Gast',
    guestPlural: '{{NumberOfGuests}} Gäste',
    location: 'Standort',
    search: 'Suchen',
    minStayOne: 'Mindestens {minStay} Nacht',
    minStayOther: 'Mindestens {minStay} Nächte',
    adultsOne: 'Erwachsener',
    adultsOther: 'Erwachsene',
    adultsDesc: 'Ab {minAge} Jahren',
    childrenOne: 'Kind',
    childrenOther: 'Kinder',
    childrenDesc: '{minAge} - {maxAge} Jahre',
    childrenNotAllowed: 'Nicht für Kinder geeignet',
    infantsOne: 'Kleinkind',
    infantsOther: 'Kleinkinder',
    infantsDesc: 'Unter {maxAge}',
    infantsNotAllowed: 'Nicht für Kleinkinder geeignet',
    petsOne: 'Haustier',
    petsOther: 'Haustiere',
    petsNotAllowed: 'Nicht erlaubt',
    done: 'Fertig',
    searchPageUrl: 'https://nuria-fuentes-martinez.lodgify.com/de/immobilien',
  },
  ca: {
    checkIn: 'Arribada',
    checkOut: 'Sortida',
    guests: 'Hostes',
    guestSingular: '{{NumberOfGuests}} hoste',
    guestPlural: '{{NumberOfGuests}} hostes',
    location: 'Ubicació',
    search: 'Cercar',
    minStayOne: 'Mínim {minStay} nit',
    minStayOther: 'Mínim de {minStay} nits',
    adultsOne: 'adult',
    adultsOther: 'adults',
    adultsDesc: 'Edats {minAge} o més',
    childrenOne: 'nen',
    childrenOther: 'nens',
    childrenDesc: 'Edats {minAge} - {maxAge}',
    childrenNotAllowed: 'No adequat per a nens',
    infantsOne: 'nadó',
    infantsOther: 'nadons',
    infantsDesc: 'Menys de {maxAge}',
    infantsNotAllowed: 'No adequat per a nadons',
    petsOne: 'mascota',
    petsOther: 'mascotes',
    petsNotAllowed: 'No permès',
    done: 'Fet',
    searchPageUrl: 'https://nuria-fuentes-martinez.lodgify.com/ca/propietats',
  },
};

/**
 * Lodgify Portable Search Bar - multilingual
 * Website ID: 646342
 *
 * Chargement direct (pas de lazy loading) pour eviter les problemes de timing
 * avec le script Lodgify qui doit trouver le div #lodgify-search-bar au moment
 * de son execution.
 */
export default function LodgifySearchBar({ className = '', locale = 'fr' }: LodgifySearchBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[locale] || TRANSLATIONS.fr;

  useEffect(() => {
    // Injecter les styles CSS Lodgify
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

    // Charger le script Lodgify - sans defer, avec onload
    const existingScript = document.querySelector(
      'script[src="https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={className} style={{ minHeight: '72px' }}>
      <div
        id="lodgify-search-bar"
        ref={containerRef}
        data-website-id="646342"
        data-language-code={locale}
        data-search-page-url={t.searchPageUrl}
        data-dates-check-in-label={t.checkIn}
        data-dates-check-out-label={t.checkOut}
        data-guests-counter-label={t.guests}
        data-guests-input-singular-label={t.guestSingular}
        data-guests-input-plural-label={t.guestPlural}
        data-location-input-label={t.location}
        data-search-button-label={t.search}
        data-dates-input-min-stay-tooltip-text={JSON.stringify({ one: t.minStayOne, other: t.minStayOther })}
        data-guests-breakdown-label={t.guests}
        data-adults-label={JSON.stringify({ one: t.adultsOne, other: t.adultsOther })}
        data-adults-description={t.adultsDesc}
        data-children-label={JSON.stringify({ one: t.childrenOne, other: t.childrenOther })}
        data-children-description={t.childrenDesc}
        data-children-not-allowed-label={t.childrenNotAllowed}
        data-infants-label={JSON.stringify({ one: t.infantsOne, other: t.infantsOther })}
        data-infants-description={t.infantsDesc}
        data-infants-not-allowed-label={t.infantsNotAllowed}
        data-pets-label={JSON.stringify({ one: t.petsOne, other: t.petsOther })}
        data-pets-not-allowed-label={t.petsNotAllowed}
        data-done-label={t.done}
        data-new-tab="true"
        data-version="stable"
        data-has-guests-breakdown
      />
    </div>
  );
}
