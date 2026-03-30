import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Environnement | Aparthotel Arenal',
  description: 'Golf, plages et nature autour de l\'Aparthotel Arenal à Pals. À 2 min des plages et du Golf de Pals.',
  openGraph: {
    title: 'Environnement | Aparthotel Arenal',
    description: 'Golf, plages et nature à Pals, Costa Brava.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
