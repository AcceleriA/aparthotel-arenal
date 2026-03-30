import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Événements | Aparthotel Arenal',
  description: 'Événements mensuels au Café de l\'Arenal à Pals. Dégustations, musique, art et rencontres.',
  openGraph: {
    title: 'Événements | Aparthotel Arenal',
    description: 'Événements mensuels au Café de l\'Arenal.',
    images: [{ url: 'https://aparthotel-arenal.com/images/arenal-cafe/entrance.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
