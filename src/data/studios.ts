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
    slug: 'girasol',
    name: 'Girasol',
    image: '/images/studios/studio-1.jpg',
    gallery: ['/images/studios/studio-1.jpg', '/images/studios/bathroom.jpg'],
    capacity: 4,
    surface: 35,
    description: {
      fr: 'Studio de 35 m² baigné de lumière naturelle, avec terrasse privative et vue sur le village médiéval de Pals. Son séjour ouvert sur une cuisine équipée accueille jusqu\'à 4 personnes. Idéal pour un couple ou une petite famille en escapade Costa Brava, entre plage et Empordà.',
      es: 'Estudio luminoso de 35 m² con terraza privada y vistas al pueblo medieval de Pals. Su salón abierto a una cocina equipada acoge hasta 4 personas. Ideal para una pareja o una familia pequeña en escapada por la Costa Brava, entre playa y Empordà.',
      en: 'Bright 35 m² studio with private terrace and views over the medieval village of Pals. The open living area with fully equipped kitchen sleeps up to 4 guests. Ideal for couples or small families on a Costa Brava getaway, between beach and Empordà countryside.',
      de: 'Helles 35 m² Studio mit privater Terrasse und Blick auf das mittelalterliche Dorf Pals. Der offene Wohnbereich mit voll ausgestatteter Küche bietet Platz für bis zu 4 Personen. Ideal für Paare oder kleine Familien auf einer Costa-Brava-Auszeit zwischen Strand und Empordà.',
      ca: 'Studio lluminós de 35 m² amb terrassa privada i vistes al poble medieval de Pals. La seva sala oberta a una cuina equipada acull fins a 4 persones. Ideal per a una parella o una família petita en escapada per la Costa Brava, entre platja i Empordà.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'iris',
    name: 'Iris',
    image: '/images/studios/studio-2.jpg',
    gallery: ['/images/studios/studio-2.jpg', '/images/studios/bedroom-twin.jpg'],
    capacity: 4,
    surface: 45,
    description: {
      fr: 'Studio spacieux de 45 m² avec grand séjour, coin salon et terrasse ouverte sur le massif du Montgrí. Cuisine équipée, climatisation et parking privé inclus pour un séjour confortable à Platja de Pals. Capacité 4 personnes, parfait pour une famille ou un petit groupe.',
      es: 'Estudio espacioso de 45 m² con gran salón, zona de estar y terraza abierta al macizo del Montgrí. Cocina equipada, climatización y parking privado incluidos para una estancia cómoda en Platja de Pals. Capacidad para 4 personas, perfecto para familias o grupos pequeños.',
      en: 'Spacious 45 m² studio with large living room, lounge area and terrace opening onto the Montgrí massif. Equipped kitchen, air conditioning and private parking included for a comfortable stay in Platja de Pals. Sleeps 4, perfect for families or small groups.',
      de: 'Geräumiges 45 m² Studio mit großem Wohnzimmer, Sitzbereich und Terrasse mit Blick auf das Montgrí-Massiv. Ausgestattete Küche, Klimaanlage und Privatparkplatz inklusive für einen komfortablen Aufenthalt in Platja de Pals. Für 4 Personen, perfekt für Familien oder kleine Gruppen.',
      ca: 'Studio espaiós de 45 m² amb gran sala, zona d\'estar i terrassa oberta al massís del Montgrí. Cuina equipada, climatització i pàrquing privat inclosos per a una estada còmoda a Platja de Pals. Capacitat per a 4 persones, perfecte per a famílies o grups petits.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'trigo',
    name: 'Trigo',
    image: '/images/studios/studio-3.jpg',
    gallery: ['/images/studios/studio-3.jpg', '/images/studios/bathroom.jpg'],
    capacity: 4,
    surface: 30,
    description: {
      fr: 'Studio cosy de 30 m² à la décoration soignée, avec terrasse privative et accès direct au café en rez-de-chaussée. Un cocon chaleureux à deux pas de la plage de Pals, pensé pour les couples et les petites familles en quête d\'un pied-à-terre de caractère sur la Costa Brava.',
      es: 'Estudio acogedor de 30 m² con decoración cuidada, terraza privada y acceso directo al café en planta baja. Un refugio cálido a pocos pasos de la playa de Pals, pensado para parejas y familias pequeñas que buscan un alojamiento con carácter en la Costa Brava.',
      en: 'Cosy 30 m² studio with tasteful decor, private terrace and direct access to the café on the ground floor. A warm hideaway moments from the beach of Pals, designed for couples and small families seeking a characterful base on the Costa Brava.',
      de: 'Gemütliches 30 m² Studio mit geschmackvoller Einrichtung, privater Terrasse und direktem Zugang zum Café im Erdgeschoss. Ein warmes Refugium wenige Schritte vom Strand von Pals entfernt, für Paare und kleine Familien auf der Suche nach einem charaktervollen Quartier an der Costa Brava.',
      ca: 'Studio acollidor de 30 m² amb decoració acurada, terrassa privada i accés directe al cafè de la planta baixa. Un refugi càlid a pocs passos de la platja de Pals, pensat per a parelles i famílies petites que busquen un allotjament amb caràcter a la Costa Brava.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'rosa',
    name: 'Rosa',
    image: '/images/studios/studio-4.jpg',
    gallery: ['/images/studios/studio-4.jpg', '/images/studios/bathroom.jpg'],
    capacity: 4,
    surface: 40,
    description: {
      fr: 'Studio de 40 m² avec grand séjour, cuisine ouverte et coin nuit séparé pour plus d\'intimité. Sa terrasse offre une vue panoramique sur les toits du village de Pals et la campagne de l\'Empordà. Jusqu\'à 4 personnes, parking privé inclus, à quelques minutes à pied de la plage.',
      es: 'Estudio de 40 m² con amplio salón, cocina abierta y zona de noche separada para mayor intimidad. Su terraza ofrece una vista panorámica de los tejados del pueblo de Pals y la campiña del Empordà. Hasta 4 personas, parking privado incluido, a pocos minutos a pie de la playa.',
      en: 'A 40 m² studio with large living room, open kitchen and separate sleeping area for more privacy. The terrace offers panoramic views over the rooftops of the village of Pals and the Empordà countryside. Sleeps 4, private parking included, minutes on foot from the beach.',
      de: '40 m² Studio mit großem Wohnzimmer, offener Küche und separatem Schlafbereich für mehr Privatsphäre. Die Terrasse bietet einen Panoramablick über die Dächer des Dorfes Pals und die Landschaft des Empordà. Für 4 Personen, privater Parkplatz inklusive, wenige Gehminuten vom Strand.',
      ca: 'Studio de 40 m² amb gran sala, cuina oberta i zona de nit separada per a més intimitat. La seva terrassa ofereix una vista panoràmica sobre les teulades del poble de Pals i la campinya de l\'Empordà. Fins a 4 persones, pàrquing privat inclòs, a pocs minuts a peu de la platja.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
  {
    slug: 'avena',
    name: 'Avena',
    image: '/images/studios/studio-5.jpg',
    gallery: ['/images/studios/studio-5.jpg', '/images/studios/bedroom-twin.jpg'],
    capacity: 4,
    surface: 45,
    description: {
      fr: 'Le plus grand de nos studios, 45 m² avec deux espaces nuit et la plus grande terrasse du bâtiment, orientée plein sud. Séjour généreux, cuisine équipée et parking privé pour jusqu\'à 4 personnes. Idéal pour les familles et les groupes qui veulent de l\'espace à Platja de Pals.',
      es: 'El más grande de nuestros estudios, 45 m² con dos zonas de noche y la terraza más amplia del edificio, orientada al sur. Salón generoso, cocina equipada y parking privado para hasta 4 personas. Ideal para familias y grupos que buscan espacio en Platja de Pals.',
      en: 'Our largest studio, 45 m² with two sleeping areas and the biggest terrace in the building, facing due south. Generous living room, fully equipped kitchen and private parking for up to 4 guests. Ideal for families and groups who want space in Platja de Pals.',
      de: 'Unser größtes Studio, 45 m² mit zwei Schlafbereichen und der größten Terrasse des Gebäudes, nach Süden ausgerichtet. Großzügiges Wohnzimmer, ausgestattete Küche und Privatparkplatz für bis zu 4 Personen. Ideal für Familien und Gruppen, die Raum in Platja de Pals suchen.',
      ca: 'El més gran dels nostres studios, 45 m² amb dues zones de nit i la terrassa més àmplia de l\'edifici, orientada a ple sud. Sala generosa, cuina equipada i pàrquing privat per a fins a 4 persones. Ideal per a famílies i grups que busquen espai a Platja de Pals.',
    },
    features: ['terrace', 'kitchen', 'wifi', 'aircon', 'tv', 'parking'],
  },
];
