import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Notre histoire | Aparthotel Arenal',
    description: "Découvrez l'histoire de l'Aparthotel Arenal à Platja de Pals, Costa Brava. Un lieu de vie entre mer et montagne.",
    alternates: buildAlternates('/notre-histoire', params.locale),
    openGraph: {
      title: 'Notre histoire | Aparthotel Arenal',
      description: "Découvrez l'histoire de l'Aparthotel Arenal à Pals, Costa Brava.",
      images: [{ url: 'https://www.aparthotel-arenal.com/images/arenal-cafe/entrance.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
