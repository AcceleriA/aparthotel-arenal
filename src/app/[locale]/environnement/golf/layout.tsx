import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Golf à Pals | Aparthotel Arenal',
  description: 'Golf de Pals et Golf d\'Empordà à proximité de l\'Aparthotel Arenal. 2 parcours de renommée internationale.',
  openGraph: {
    title: 'Golf à Pals | Aparthotel Arenal',
    description: '2 parcours de golf de renommée internationale à proximité.',
    images: [{ url: 'https://aparthotel-arenal.com/images/hero/hero-golf.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
