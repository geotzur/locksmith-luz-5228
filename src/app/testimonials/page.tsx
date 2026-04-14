import type { Metadata } from 'next';
import { testimonials } from '@/lib/data';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Customer Testimonials | Locksmith Luz California',
  description: 'Read real reviews from Locksmith Luz customers across Los Angeles and California. See why homeowners and businesses trust us for locksmith services.',
};

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

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pre-label pre-label-gold justify-center mb-4">WHAT CLIENTS SAY</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Customer Reviews
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Real feedback from real California customers who trusted Locksmith Luz with their homes, vehicles, and businesses.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f9f6] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card bg-white rounded-sm p-7 border border-[#d4e6db]"
              >
                <StarRating rating={t.rating} />
                <p className="font-body italic text-[15px] text-[#4a6155] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#d4e6db] pt-4">
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
                  <div className="mt-3">
                    <span className="font-display text-[11px] uppercase tracking-wider text-[#d6b328]">
                      Service: {t.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
