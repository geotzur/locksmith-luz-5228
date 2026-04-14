import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { areas, services, companyInfo } from '@/lib/data';
import { getAreaImage, imageManifest } from '@/lib/images';
import CTA from '@/components/sections/CTA';
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateStaticParams() {
  return areas.map(a => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = areas.find(a => a.slug === params.area);
  if (!area) return { title: 'Area Not Found' };
  return {
    title: `Locksmith in ${area.name}, CA | Locksmith Luz`,
    description: `Professional locksmith services in ${area.name}, California. ${area.description}`,
  };
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areas.find(a => a.slug === params.area);
  if (!area) return <div className="pt-32 text-center">Area not found.</div>;

  const img = getAreaImage(area.slug, imageManifest);

  return (
    <>
      <LocalBusinessJsonLd areaName={area.name} description={area.description} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://locksmithluz.com/' },
          { name: 'Areas', url: 'https://locksmithluz.com/areas/' },
          { name: area.name, url: `https://locksmithluz.com/areas/${area.slug}/` },
        ]}
      />
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="pre-label pre-label-gold mb-4">SERVICE AREA</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Locksmith in {area.name}, CA
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            {area.description}
          </p>
          <a
            href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
            className="btn-gold px-8 py-4 rounded-sm text-sm inline-block"
          >
            Call {companyInfo.phone}
          </a>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0d1a12] mb-6 gradient-bar">
                Why {area.name} Chooses Locksmith Luz
              </h2>
              <ul className="space-y-4 mb-8">
                {area.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-[#62c794] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-[15px] text-[#4a6155]">{h}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-5">
                Services Available in {area.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map(service => (
                  <Link
                    key={service.slug}
                    href={`/areas/${area.slug}/${service.slug}/`}
                    className="border border-[#d4e6db] rounded-sm px-4 py-3 font-body text-sm text-[#217443] hover:bg-[#f5f9f6] hover:border-[#217443] transition-colors"
                  >
                    → {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Image + contact */}
            <div>
              {img && (
                <div className="rounded-sm overflow-hidden aspect-[4/3] mb-6">
                  <Image
                    src={img}
                    alt={`Locksmith in ${area.name}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="bg-[#0f1e17] rounded-sm p-6">
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  Need a Locksmith in {area.name}?
                </h3>
                <p className="font-body text-sm text-white/60 mb-4">
                  Call now for fast, professional service. We serve {area.name} 24 hours a day.
                </p>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="btn-gold block text-center py-4 rounded-sm text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
