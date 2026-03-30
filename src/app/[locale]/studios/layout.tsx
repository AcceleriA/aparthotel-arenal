import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos studios | Aparthotel Arenal',
  description: '5 studios tout équipés de 30 à 45m² au coeur de Pals, Costa Brava. Terrasse, cuisine, WiFi, parking.',
  openGraph: {
    title: 'Nos studios | Aparthotel Arenal',
    description: '5 studios tout équipés de 30 à 45m² au coeur de Pals.',
    images: [{ url: 'https://aparthotel-arenal.com/images/hero/hero-studio.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
