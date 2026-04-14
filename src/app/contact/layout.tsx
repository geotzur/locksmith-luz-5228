import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Locksmith Luz | Free Estimates Los Angeles',
  description: 'Contact Locksmith Luz for a free estimate or emergency locksmith service in Los Angeles and California. Call 24/7 or submit an online request — we respond within minutes.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://locksmithluz.com/' },
          { name: 'Contact', url: 'https://locksmithluz.com/contact/' },
        ]}
      />
      {children}
    </>
  );
}
