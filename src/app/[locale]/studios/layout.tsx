import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Nos studios',
    description: '5 studios tout équipés de 30 à 45 m² à Platja de Pals, Costa Brava. Terrasse, cuisine, wifi, parking privé.',
    alternates: buildAlternates('/studios', params.locale),
    openGraph: {
      title: 'Nos studios | Aparthotel Arenal',
      description: '5 studios tout équipés de 30 à 45 m² à Platja de Pals.',
      images: [{ url: 'https://www.aparthotel-arenal.com/images/hero/hero-studio.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
