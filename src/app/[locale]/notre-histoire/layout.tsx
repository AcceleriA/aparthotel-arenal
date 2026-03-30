import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre histoire | Aparthotel Arenal',
  description: 'Découvrez l\'histoire de l\'Aparthotel Arenal à Pals, Costa Brava. Un lieu de vie entre mer et montagne.',
  openGraph: {
    title: 'Notre histoire | Aparthotel Arenal',
    description: 'Découvrez l\'histoire de l\'Aparthotel Arenal à Pals, Costa Brava.',
    images: [{ url: 'https://aparthotel-arenal.com/images/arenal-cafe/entrance.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
