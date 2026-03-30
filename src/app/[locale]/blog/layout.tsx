import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Guides, conseils et inspirations pour votre séjour à Pals, Costa Brava. Le journal de l\'Aparthotel Arenal.',
  openGraph: {
    title: 'Journal | Aparthotel Arenal',
    description: 'Guides, conseils et inspirations pour votre séjour à Pals.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
