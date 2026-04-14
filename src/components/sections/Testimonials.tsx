'use client';

import { useInView } from 'react-intersection-observer';
import { testimonials } from '@/lib/data';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? '#d6b328' : 'none'} stroke="#d6b328" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#f5f9f6] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 500ms ease-out, transform 500ms ease-out',
          }}
        >
          <div className="pre-label pre-label-green justify-center mb-3">WHAT CLIENTS SAY</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0d1a12] tracking-tight leading-none">
            Trusted by California Homeowners
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-sm p-7 border border-[#d4e6db]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 500ms ease-out ${i * 80}ms, transform 500ms ease-out ${i * 80}ms`,
              }}
            >
              <StarRating rating={t.rating} />
              <p className="font-body italic text-[15px] text-[#4a6155] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#217443]/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[#217443] text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-[14px] text-[#0d1a12]">{t.author}</div>
                  <div className="font-body text-[12px] text-[#4a6155]">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
