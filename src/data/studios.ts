export interface Studio {
  slug: string;
  name: string;
  image: string;
  gallery: string[];
  capacity: number;
  surface: number;
  description: Record<string, string>;
  features: string[];
}

export const studios: Studio[] = [
  {
    slug: 'studio-1',
    name: 'Studio 1',
    image: '/images/studios/studio-1.jpg',
    gallery: ['/images/studios/studio-1.jpg', '/images/studios/bathroom.jpg'],
    capacity: 2,
    surface: 35,
    description: {
      fr: 'Studio lumineux avec séjour ouvert sur une cuisine équipée et vue sur le village de Pals. Idéal pour un couple en quête de tranquillité.',
      es: 'Estudio luminoso con salón abierto a una cocina equipada y vistas al pueblo de Pals. Ideal para una pareja en busca de tranquilidad.',
      en: 'Bright studio with open living area, fully equipped kitchen and views of Pals village. Ideal for a couple seeking tranquility.',
      de: 'Helles Studio mit offenem Wohnbereich, voll ausgestatteter Küche und Blick auf das Dorf Pals. Ideal für ein Paar auf der Suche nach Ruhe.',
      ca: 'Studio lluminós amb sala oberta a una cuina equipada i vistes al poble de Pals. Ideal per a una parella que busca tranquil·litat.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'studio-2',
    name: 'Studio 2',
    image: '/images/studios/studio-2.jpg',
    gallery: ['/images/studios/studio-2.jpg', '/images/studios/bedroom-twin.jpg'],
    capacity: 4,
    surface: 45,
    description: {
      fr: 'Studio spacieux avec terrasse et coin salon. Le séjour s\'ouvre sur une vue dégagée vers le massif du Montgrí. Parfait pour une famille ou un petit groupe.',
      es: 'Estudio espacioso con terraza y zona de estar. El salón se abre a una vista despejada hacia el macizo del Montgrí. Perfecto para una familia o un grupo pequeño.',
      en: 'Spacious studio with terrace and lounge area. The living room opens to a clear view of the Montgrí massif. Perfect for a family or small group.',
      de: 'Geräumiges Studio mit Terrasse und Sitzbereich. Das Wohnzimmer öffnet sich auf einen freien Blick auf das Montgrí-Massiv. Perfekt für eine Familie oder kleine Gruppe.',
      ca: 'Studio espaiós amb terrassa i zona d\'estar. La sala s\'obre a una vista oberta cap al massís del Montgrí. Perfecte per a una família o un grup petit.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'studio-3',
    name: 'Studio 3',
    image: '/images/studios/studio-3.jpg',
    gallery: ['/images/studios/studio-3.jpg', '/images/studios/bathroom.jpg'],
    capacity: 2,
    surface: 30,
    description: {
      fr: 'Studio cosy avec chambre double et décoration soignée. Un cocon intime au coeur de l\'Arenal, avec accès direct au café en contrebas.',
      es: 'Estudio acogedor con cama doble y decoración cuidada. Un rincón íntimo en el corazón del Arenal, con acceso directo al café de abajo.',
      en: 'Cosy studio with double bed and tasteful décor. An intimate retreat at the heart of the Arenal, with direct access to the café below.',
      de: 'Gemütliches Studio mit Doppelbett und geschmackvoller Einrichtung. Ein intimer Rückzugsort im Herzen des Arenal, mit direktem Zugang zum Café darunter.',
      ca: 'Studio acollidor amb llit doble i decoració acurada. Un racó íntim al cor de l\'Arenal, amb accés directe al cafè de sota.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'studio-4',
    name: 'Studio 4',
    image: '/images/studios/studio-4.jpg',
    gallery: ['/images/studios/studio-4.jpg', '/images/studios/bathroom.jpg'],
    capacity: 3,
    surface: 40,
    description: {
      fr: 'Studio avec grand séjour, cuisine ouverte et coin nuit séparé. La terrasse offre une vue panoramique sur les toits de Pals et la campagne environnante.',
      es: 'Estudio con amplio salón, cocina abierta y zona de noche separada. La terraza ofrece una vista panorámica de los tejados de Pals y el campo circundante.',
      en: 'Studio with large living room, open kitchen and separate sleeping area. The terrace offers panoramic views over the rooftops of Pals and the surrounding countryside.',
      de: 'Studio mit großem Wohnzimmer, offener Küche und separatem Schlafbereich. Die Terrasse bietet einen Panoramablick über die Dächer von Pals und die umliegende Landschaft.',
      ca: 'Studio amb gran sala, cuina oberta i zona de nit separada. La terrassa ofereix una vista panoràmica sobre les teulades de Pals i el camp circumdant.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'studio-5',
    name: 'Studio 5',
    image: '/images/studios/studio-5.jpg',
    gallery: ['/images/studios/studio-5.jpg', '/images/studios/bedroom-twin.jpg'],
    capacity: 4,
    surface: 45,
    description: {
      fr: 'Le plus grand de nos studios, avec deux espaces nuit et un séjour généreux. Sa terrasse est la plus grande du bâtiment, orientée plein sud.',
      es: 'El más grande de nuestros estudios, con dos zonas de noche y un salón generoso. Su terraza es la más grande del edificio, orientada al sur.',
      en: 'The largest of our studios, with two sleeping areas and a generous living room. Its terrace is the largest in the building, facing due south.',
      de: 'Das größte unserer Studios, mit zwei Schlafbereichen und einem großzügigen Wohnzimmer. Seine Terrasse ist die größte des Gebäudes, nach Süden ausgerichtet.',
      ca: 'El més gran dels nostres studios, amb dues zones de nit i una sala generosa. La seva terrassa és la més gran de l\'edifici, orientada a ple sud.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
];
