'use client';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { areas } from '@/lib/data';

export default function Areas() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#f5f9f6] py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 500ms ease-out, transform 500ms ease-out',
          }}
        >
          <div className="pre-label pre-label-green mb-3">AREAS WE SERVE</div>
          <h2 className="font-display font-bold text-[38px] text-[#0d1a12] tracking-tight leading-none mb-10">
            Serving Los Angeles and All of California
          </h2>
        </div>

        {/* Chip grid */}
        <div className="flex flex-wrap gap-3">
          {areas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}/`}
              className="area-chip"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1)' : 'scale(0.7)',
                transition: `opacity 400ms cubic-bezier(0.34,1.56,0.64,1) ${i * 40}ms, transform 400ms cubic-bezier(0.34,1.56,0.64,1) ${i * 40}ms`,
              }}
            >
              {area.name}
            </Link>
          ))}
          {/* Additional area chips */}
          {[
            'Culver City', 'West Hollywood', 'Torrance', 'Carson', 'Compton',
            'Inglewood', 'El Monte', 'Pomona', 'Ontario', 'Riverside',
            'San Bernardino', 'Anaheim', 'Garden Grove', 'Orange',
          ].map((city, i) => (
            <span
              key={city}
              className="area-chip"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1)' : 'scale(0.7)',
                transition: `opacity 400ms cubic-bezier(0.34,1.56,0.64,1) ${(areas.length + i) * 40}ms, transform 400ms cubic-bezier(0.34,1.56,0.64,1) ${(areas.length + i) * 40}ms`,
              }}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
