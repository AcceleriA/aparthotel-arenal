import { Metadata } from 'next';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Journal',
    description: "Guides, conseils et inspirations pour votre séjour à Pals, Costa Brava. Le journal de l'Aparthotel Arenal.",
    alternates: buildAlternates('/blog', params.locale),
    openGraph: {
      title: 'Journal | Aparthotel Arenal',
      description: 'Guides, conseils et inspirations pour votre séjour à Pals.',
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
