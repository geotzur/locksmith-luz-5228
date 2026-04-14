import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { areas, services, companyInfo } from '@/lib/data';
import CTA from '@/components/sections/CTA';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateStaticParams() {
  const params: { area: string; service: string }[] = [];
  for (const area of areas) {
    for (const service of services) {
      params.push({ area: area.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { area: string; service: string } }): Promise<Metadata> {
  const area = areas.find(a => a.slug === params.area);
  const service = services.find(s => s.slug === params.service);
  if (!area || !service) return { title: 'Not Found' };
  return {
    title: `${service.name} in ${area.name}, CA | Locksmith Luz`,
    description: `Professional ${service.name.toLowerCase()} in ${area.name}, California. ${service.shortDescription}`,
  };
}

export default function AreaServicePage({ params }: { params: { area: string; service: string } }) {
  const area = areas.find(a => a.slug === params.area);
  const service = services.find(s => s.slug === params.service);
  if (!area || !service) return <div className="pt-32 text-center">Page not found.</div>;

  return (
    <>
      <ServiceJsonLd
        name={`${service.name} in ${area.name}`}
        description={service.shortDescription}
        url={`https://locksmithluz.com/areas/${area.slug}/${service.slug}/`}
        areaName={area.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://locksmithluz.com/' },
          { name: 'Areas', url: 'https://locksmithluz.com/areas/' },
          { name: area.name, url: `https://locksmithluz.com/areas/${area.slug}/` },
          { name: service.name, url: `https://locksmithluz.com/areas/${area.slug}/${service.slug}/` },
        ]}
      />
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="pre-label pre-label-gold mb-4">
            <Link href={`/areas/${area.slug}/`} className="hover:text-white/80 transition-colors">
              {area.name}
            </Link>
            {' '}&rsaquo; {service.name}
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            {service.name} in {area.name}, CA
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            {service.shortDescription} Serving {area.name} and all of Los Angeles County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
              className="btn-gold px-8 py-4 rounded-sm text-sm inline-block text-center"
            >
              Call {companyInfo.phone}
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white/70 text-white font-display font-bold uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white/15 transition-colors text-center text-sm"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-3xl text-[#0d1a12] mb-6 gradient-bar">
                {service.name} Service in {area.name}
              </h2>
              <div className="space-y-4 mb-8">
                {service.fullDescription.map((para, i) => (
                  <p key={i} className="font-body text-[#4a6155] leading-relaxed">
                    {para}
                  </p>
                ))}
                <p className="font-body text-[#4a6155] leading-relaxed">
                  Locksmith Luz has been serving {area.name} since {companyInfo.yearEstablished}. {area.description}
                </p>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-4">
                What&apos;s Included in {area.name}
              </h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-[#62c794] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-[15px] text-[#4a6155]">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-4">
                Why {area.name} Residents Choose Us
              </h3>
              <ul className="space-y-3 mb-8">
                {area.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-[#62c794] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-[15px] text-[#4a6155]">{h}</span>
                  </li>
                ))}
              </ul>

              <div>
                <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-4">Common Questions</h3>
                {service.faq.map((faq, i) => (
                  <div key={i} className="border-b border-[#d4e6db] pb-4 mb-4">
                    <h4 className="font-display font-semibold text-base text-[#0d1a12] mb-2">{faq.question}</h4>
                    <p className="font-body text-sm text-[#4a6155] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#0f1e17] rounded-sm p-6 mb-6 sticky top-24">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Serving {area.name} Now
                </h3>
                <p className="font-body text-sm text-white/60 mb-5">
                  24/7 service available in {area.name}. Call for immediate dispatch.
                </p>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="btn-gold block text-center py-4 rounded-sm text-sm mb-3"
                >
                  {companyInfo.phone}
                </a>
                <Link
                  href="/contact/"
                  className="block text-center border border-white/30 text-white font-display uppercase text-sm tracking-wider py-3 rounded-sm hover:border-[#d6b328] hover:text-[#d6b328] transition-colors"
                >
                  Get Free Quote
                </Link>
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                  {companyInfo.certifications.map(cert => (
                    <div key={cert} className="flex items-center gap-2">
                      <Check size={14} className="text-[#62c794]" />
                      <span className="font-body text-xs text-white/50">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-sm text-[#217443] uppercase tracking-widest mb-4">
                  More in {area.name}
                </h3>
                {services.filter(s => s.slug !== service.slug).slice(0, 5).map(s => (
                  <Link
                    key={s.slug}
                    href={`/areas/${area.slug}/${s.slug}/`}
                    className="block font-body text-sm text-[#4a6155] hover:text-[#217443] py-1.5 border-b border-[#d4e6db] last:border-0 transition-colors"
                  >
                    → {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
