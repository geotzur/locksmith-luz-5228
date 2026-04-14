'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { services } from '@/lib/data';
import { getServiceImage, imageManifest } from '@/lib/images';

const featuredServices = services.slice(0, 4);

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const isEven = index % 2 === 0;
  const img = getServiceImage(service.slug, imageManifest);
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-[#f5f9f6]';

  return (
    <div className={bg} ref={ref}>
      <div className="max-w-7xl mx-auto py-10 md:py-16 px-4 md:px-6">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          {/* Image */}
          <div
            className="w-full lg:w-3/5 service-img-wrap aspect-[4/3]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : `translateX(${isEven ? '-40px' : '40px'})`,
              transition: 'opacity 600ms ease-out, transform 600ms ease-out',
            }}
          >
            {img ? (
              <Image
                src={img}
                alt={service.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#217443]/10 flex items-center justify-center">
                <span className="font-display text-2xl text-[#217443]/40">{service.name}</span>
              </div>
            )}
          </div>

          {/* Text */}
          <div
            className="w-full lg:w-2/5 flex flex-col gap-5"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : `translateX(${isEven ? '40px' : '-40px'})`,
              transition: 'opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms',
            }}
          >
            <div className="pre-label pre-label-green">{service.name.toUpperCase()}</div>
            <h3 className="gradient-bar font-display font-bold text-[28px] md:text-[34px] text-[#0d1a12] tracking-tight leading-tight">
              {service.name}
            </h3>
            <p className="font-body text-[#4a6155] leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Checklist */}
            <ul className="space-y-2">
              {service.features.slice(0, 4).map((feature, fi) => (
                <li
                  key={fi}
                  className="flex items-start gap-2"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-10px)',
                    transition: `opacity 300ms ease-out ${200 + fi * 50}ms, transform 300ms ease-out ${200 + fi * 50}ms`,
                  }}
                >
                  <Check size={18} className="text-[#62c794] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-[14px] text-[#4a6155] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${service.slug}/`}
              className="inline-flex items-center gap-2 border border-[#d6b328] text-[#217443] font-display font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-[#d6b328] hover:text-[#0d1a12] transition-colors duration-200 w-fit"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services">
      {/* Section header */}
      <div className="bg-[#f5f9f6] py-10 md:py-16" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 500ms ease-out, transform 500ms ease-out',
            }}
          >
            <div className="pre-label pre-label-green mb-3">OUR SERVICES</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0d1a12] tracking-tight leading-none max-w-2xl">
              Professional Locksmith Solutions for Every Need
            </h2>
          </div>
        </div>
      </div>

      <hr className="gold-rule" />

      {/* Service rows */}
      {featuredServices.map((service, i) => (
        <ServiceRow key={service.slug} service={service} index={i} />
      ))}

      {/* View all services */}
      <div className="bg-[#f5f9f6] py-10 text-center">
        <Link
          href="/services/"
          className="btn-gold inline-block px-10 py-4 rounded-sm text-sm"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
