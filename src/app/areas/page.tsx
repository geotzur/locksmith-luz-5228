import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { areas } from '@/lib/data';
import { getAreaImage, imageManifest } from '@/lib/images';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Locksmith Service Areas in California | Locksmith Luz',
  description: 'Locksmith Luz serves all of Los Angeles and surrounding California cities. Find your area and get fast locksmith service — emergency lockouts, lock installation, rekeying, and more.',
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pre-label pre-label-gold justify-center mb-4">SERVICE COVERAGE</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Areas We Serve
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Locksmith Luz operates throughout Los Angeles and greater California. Same-day service available across all service areas.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f9f6] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map(area => {
              const img = getAreaImage(area.slug, imageManifest);
              return (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}/`}
                  className="bg-white rounded-sm border border-[#d4e6db] overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#217443]/10">
                    {img ? (
                      <Image
                        src={img}
                        alt={area.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#217443]/10 to-[#d6b328]/10">
                        <span className="font-display text-[#217443]/40 text-sm text-center px-3">{area.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="font-display font-bold text-lg text-[#0d1a12] mb-2 group-hover:text-[#217443] transition-colors">
                      {area.name}
                    </h2>
                    <p className="font-body text-xs text-[#4a6155] leading-relaxed line-clamp-2">
                      {area.description}
                    </p>
                    <span className="inline-block mt-3 font-display text-xs text-[#d6b328] uppercase tracking-wider">
                      View Services →
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
