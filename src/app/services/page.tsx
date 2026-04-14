import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { getServiceImage, imageManifest } from '@/lib/images';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Locksmith Services in California — Residential, Commercial & Automotive',
  description: 'Browse all locksmith services offered by Locksmith Luz in Los Angeles and California. Emergency lockouts, lock installation, rekeying, automotive, commercial, smart locks, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pre-label pre-label-gold justify-center mb-4">OUR SERVICES</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Professional Locksmith Services
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            From emergency lockouts to high-security upgrades, Locksmith Luz covers every lock and key need across Los Angeles and California.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f9f6] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => {
              const img = getServiceImage(service.slug, imageManifest);
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="bg-white rounded-sm border border-[#d4e6db] overflow-hidden group hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#217443]/10">
                    {img ? (
                      <Image
                        src={img}
                        alt={service.name}
                        width={600}
                        height={375}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-[#217443]/40">{service.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-display font-bold text-xl text-[#0d1a12] mb-3 group-hover:text-[#217443] transition-colors">
                      {service.name}
                    </h2>
                    <p className="font-body text-sm text-[#4a6155] leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="font-display text-sm text-[#d6b328] uppercase tracking-wider font-semibold">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
