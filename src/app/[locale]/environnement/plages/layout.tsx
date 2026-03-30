import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plages de Pals | Aparthotel Arenal',
  description: 'Les plus belles plages de Pals et de la Costa Brava. Platja de Pals, Sa Riera, Illes Formigues.',
  openGraph: {
    title: 'Plages de Pals | Aparthotel Arenal',
    description: 'Platja de Pals, Sa Riera et les Illes Formigues à 2 minutes.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
