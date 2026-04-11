import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Événements | Aparthotel Arenal',
    description: "Événements mensuels au Café de l'Arenal à Platja de Pals. Dégustations, musique, art et rencontres.",
    alternates: buildAlternates('/evenements', params.locale),
    openGraph: {
      title: 'Événements | Aparthotel Arenal',
      description: "Événements mensuels au Café de l'Arenal.",
      images: [{ url: 'https://www.aparthotel-arenal.com/images/arenal-cafe/entrance.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
