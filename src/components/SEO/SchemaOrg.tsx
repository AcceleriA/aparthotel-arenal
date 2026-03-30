'use client';

import { useLocale } from 'next-intl';

const baseUrl = 'https://aparthotel-arenal.com';

export function SchemaOrgVacationRental() {
  const locale = useLocale();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: 'Aparthotel Arenal',
    description: 'Studios meublés au coeur de Pals, Costa Brava. Entre golf et Méditerranée.',
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/images/hero/hero-golf.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Carrer de l'Arenal",
      addressLocality: 'Pals',
      postalCode: '17256',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.9717,
      longitude: 3.1481,
    },
    telephone: '+34972637000',
    email: 'info@aparthotel-arenal.com',
    numberOfRooms: 5,
    checkinTime: '15:00',
    checkoutTime: '11:00',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Terrace', value: true },
    ],
    containedInPlace: {
      '@type': 'City',
      name: 'Pals',
      containedInPlace: {
        '@type': 'State',
        name: 'Catalonia',
        containedInPlace: {
          '@type': 'Country',
          name: 'Spain',
        },
      },
    },
  };

  const cafeSchema = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'Arenal Café',
    description: 'Café-bar au coeur de Pals, au rez-de-chaussée de l\'Aparthotel Arenal.',
    url: `${baseUrl}/${locale}/notre-histoire`,
    image: `${baseUrl}/images/arenal-cafe/entrance.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Carrer de l'Arenal",
      addressLocality: 'Pals',
      postalCode: '17256',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    telephone: '+34972637000',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeSchema) }}
      />
    </>
  );
}
