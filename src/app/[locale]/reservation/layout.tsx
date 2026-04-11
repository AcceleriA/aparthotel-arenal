import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Réserver | Aparthotel Arenal',
    description: "Réservez votre studio à l'Aparthotel Arenal de Platja de Pals. Meilleur prix garanti en réservation directe.",
    alternates: buildAlternates('/reservation', params.locale),
    openGraph: {
      title: 'Réserver | Aparthotel Arenal',
      description: 'Réservez directement au meilleur prix. Studios à Platja de Pals, Costa Brava.',
      images: [{ url: 'https://www.aparthotel-arenal.com/images/hero/hero-golf.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
