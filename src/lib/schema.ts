import { studios, type Studio } from '@/data/studios';
import type { Locale } from '@/i18n/config';

export const SITE_URL = 'https://www.aparthotel-arenal.com';

const COMMON_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Esquina Canigó Puigmal',
  addressLocality: 'Pals',
  postalCode: '17256',
  addressRegion: 'Catalogne',
  addressCountry: 'ES',
} as const;

const COMMON_GEO = {
  '@type': 'GeoCoordinates',
  latitude: 41.9711,
  longitude: 3.1925,
} as const;

const COMMON_AMENITIES = [
  { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi gratuit', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Parking privé gratuit', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Climatisation', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Terrasse privative', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Cuisine équipée', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Télévision', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Café en rez-de-chaussée', value: true },
] as const;

const LOCALE_DESCRIPTIONS: Record<Locale, string> = {
  fr: "Aparthotel Arenal : 5 studios tout équipés à Platja de Pals, Costa Brava. Terrasse, cuisine, wifi, climatisation, parking privé, café en rez-de-chaussée.",
  es: "Aparthotel Arenal: 5 estudios totalmente equipados en Platja de Pals, Costa Brava. Terraza, cocina, wifi, climatización, parking privado, café en planta baja.",
  en: "Aparthotel Arenal: 5 fully equipped studios in Platja de Pals, Costa Brava. Private terrace, kitchen, wifi, air conditioning, parking and a café on the ground floor.",
  de: "Aparthotel Arenal: 5 voll ausgestattete Studios in Platja de Pals, Costa Brava. Private Terrasse, Küche, WLAN, Klimaanlage, Parkplatz und Café im Erdgeschoss.",
  ca: "Aparthotel Arenal: 5 studios totalment equipats a Platja de Pals, Costa Brava. Terrassa, cuina, wifi, climatització, pàrquing privat i cafè a la planta baixa.",
};

export function getLodgingBusinessSchema(locale: Locale) {
  const url = `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#lodging`,
    name: 'Aparthotel Arenal',
    description: LOCALE_DESCRIPTIONS[locale],
    url,
    image: `${SITE_URL}/images/hero/hero-golf.jpg`,
    priceRange: '€€',
    address: COMMON_ADDRESS,
    geo: COMMON_GEO,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${COMMON_GEO.latitude},${COMMON_GEO.longitude}`,
    numberOfRooms: studios.length,
    checkinTime: '15:00',
    checkoutTime: '11:00',
    amenityFeature: COMMON_AMENITIES,
    containedInPlace: {
      '@type': 'TouristDestination',
      name: 'Pals, Costa Brava',
    },
    sameAs: [
      'https://www.airbnb.com/rooms/1660940218502481063',
    ],
  };
}

function getStudioDescription(studio: Studio, locale: Locale): string {
  return (
    studio.description[locale] ||
    studio.description.en ||
    studio.description.fr
  );
}

export function getVacationRentalSchema(studioSlug: string, locale: Locale) {
  const studio = studios.find((s) => s.slug === studioSlug);
  if (!studio) return null;

  const url = `${SITE_URL}/${locale}/studios/${studio.slug}`;
  const description = getStudioDescription(studio, locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    '@id': `${SITE_URL}/#studio-${studio.slug}`,
    name: `${studio.name} — Aparthotel Arenal`,
    description,
    url,
    image: `${SITE_URL}${studio.image}`,
    brand: {
      '@type': 'Brand',
      name: 'Aparthotel Arenal',
    },
    numberOfRooms: 1,
    occupancy: {
      '@type': 'QuantitativeValue',
      value: studio.capacity,
      unitCode: 'C62',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: studio.surface,
      unitCode: 'MTK',
    },
    address: COMMON_ADDRESS,
    geo: COMMON_GEO,
    amenityFeature: COMMON_AMENITIES,
    checkinTime: '15:00',
    checkoutTime: '11:00',
    containedInPlace: {
      '@id': `${SITE_URL}/#lodging`,
      '@type': 'LodgingBusiness',
      name: 'Aparthotel Arenal',
    },
  };
}
