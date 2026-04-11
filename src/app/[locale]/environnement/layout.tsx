import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Environnement | Aparthotel Arenal',
    description: "Golf, plages et nature autour de l'Aparthotel Arenal à Platja de Pals. À 2 min des plages et du Golf de Pals.",
    alternates: buildAlternates('/environnement', params.locale),
    openGraph: {
      title: 'Environnement | Aparthotel Arenal',
      description: 'Golf, plages et nature à Platja de Pals, Costa Brava.',
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
