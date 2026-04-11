import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Plages de Pals | Aparthotel Arenal',
    description: 'Les plus belles plages de Pals et de la Costa Brava. Platja de Pals, Sa Riera, Illes Formigues.',
    alternates: buildAlternates('/environnement/plages', params.locale),
    openGraph: {
      title: 'Plages de Pals | Aparthotel Arenal',
      description: 'Platja de Pals, Sa Riera et les Illes Formigues à 2 minutes.',
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
