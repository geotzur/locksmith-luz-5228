import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import WhyUs from '@/components/sections/WhyUs';
import Services from '@/components/sections/Services';
import StatsBar from '@/components/sections/StatsBar';
import ProcessSteps from '@/components/sections/ProcessSteps';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Areas from '@/components/sections/Areas';
import CTA from '@/components/sections/CTA';
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Locksmith Luz | Locksmith in Los Angeles, CA | Free Estimates',
  description: 'Locksmith Luz delivers expert lock installation, emergency lockouts, and automotive key services across Los Angeles and all of California — 24 hours a day. Licensed, insured, ALOA certified.',
  openGraph: {
    title: 'Locksmith Luz | Locksmith in Los Angeles, CA | Free Estimates',
    description: 'Licensed & insured locksmith serving Los Angeles, CA 24/7. Emergency lockouts, residential, commercial, and automotive services.',
    url: 'https://locksmithluz.com/',
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[{ name: 'Home', url: 'https://locksmithluz.com/' }]}
      />
      <Hero />
      <Marquee />
      <WhyUs />
      <hr className="gold-rule" />
      <Services />
      <StatsBar />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <Areas />
      <CTA />
    </>
  );
}
