import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { services, companyInfo } from '@/lib/data';
import { getServiceImage, imageManifest } from '@/lib/images';
import CTA from '@/components/sections/CTA';
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.name} in Los Angeles, CA | Locksmith Luz`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} — Locksmith Luz`,
      description: service.shortDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return <div className="pt-32 text-center">Service not found.</div>;

  const img = getServiceImage(service.slug, imageManifest);
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <ServiceJsonLd
        name={service.name}
        description={service.shortDescription}
        url={`https://locksmithluz.com/services/${service.slug}/`}
      />
      {service.faq.length > 0 && <FAQJsonLd faqs={service.faq} />}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://locksmithluz.com/' },
          { name: 'Services', url: 'https://locksmithluz.com/services/' },
          { name: service.name, url: `https://locksmithluz.com/services/${service.slug}/` },
        ]}
      />
      {/* Hero */}
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="pre-label pre-label-gold mb-4">LOCKSMITH SERVICE</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            {service.name}
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            {service.shortDescription}
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

      {/* Content */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {img && (
                <div className="rounded-sm overflow-hidden mb-8 aspect-[16/9]">
                  <Image
                    src={img}
                    alt={service.name}
                    width={900}
                    height={506}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-5 mb-10">
                {service.fullDescription.map((para, i) => (
                  <p key={i} className="font-body text-[#4a6155] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="mb-10">
                <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-5 gradient-bar">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-[#62c794] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[15px] text-[#4a6155]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-5 gradient-bar">
                  Common Questions
                </h2>
                <div className="space-y-6">
                  {service.faq.map((item, i) => (
                    <div key={i} className="border-b border-[#d4e6db] pb-5">
                      <h3 className="font-display font-semibold text-base text-[#0d1a12] mb-2">
                        {item.question}
                      </h3>
                      <p className="font-body text-sm text-[#4a6155] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact card */}
              <div className="bg-[#0f1e17] rounded-sm p-6 mb-6 sticky top-24">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Need This Service?
                </h3>
                <p className="font-body text-sm text-white/60 mb-5">
                  Call us now or request a free estimate online. We respond within minutes.
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

              {/* Other services */}
              <div>
                <h3 className="font-display font-semibold text-sm text-[#217443] uppercase tracking-widest mb-4">
                  Other Services
                </h3>
                <ul className="space-y-2">
                  {otherServices.map(s => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="font-body text-sm text-[#4a6155] hover:text-[#217443] transition-colors"
                      >
                        → {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
