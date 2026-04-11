import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Golf à Pals | Aparthotel Arenal',
    description: "Golf de Pals et Golf d'Empordà à proximité de l'Aparthotel Arenal. Deux parcours de renommée internationale.",
    alternates: buildAlternates('/environnement/golf', params.locale),
    openGraph: {
      title: 'Golf à Pals | Aparthotel Arenal',
      description: 'Deux parcours de golf de renommée internationale à proximité.',
      images: [{ url: 'https://www.aparthotel-arenal.com/images/hero/hero-golf.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
