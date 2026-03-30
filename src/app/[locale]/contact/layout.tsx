import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Aparthotel Arenal',
  description: 'Contactez l\'Aparthotel Arenal à Pals, Costa Brava. Téléphone, email et formulaire de contact.',
  openGraph: {
    title: 'Contact | Aparthotel Arenal',
    description: 'Contactez-nous pour votre séjour à Pals.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
