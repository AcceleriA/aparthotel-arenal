import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réserver | Aparthotel Arenal',
  description: 'Réservez votre studio à l\'Aparthotel Arenal de Pals. Meilleur prix garanti en réservation directe.',
  openGraph: {
    title: 'Réserver | Aparthotel Arenal',
    description: 'Réservez directement au meilleur prix. Studios à Pals, Costa Brava.',
    images: [{ url: 'https://aparthotel-arenal.com/images/hero/hero-golf.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
