import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'blog' });
  const title = t('sectionLabel');
  const subtitle = t('subtitle');
  return {
    title,
    description: subtitle,
    alternates: buildAlternates('/blog', params.locale),
    openGraph: {
      title: `${title} | Aparthotel Arenal`,
      description: subtitle,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
