'use client';

import { useInView } from 'react-intersection-observer';
import { Clock, Key, Eye, FileText } from 'lucide-react';
import { whyUs } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={28} stroke="#217443" strokeWidth={1.5} />,
  Key: <Key size={28} stroke="#217443" strokeWidth={1.5} />,
  Eye: <Eye size={28} stroke="#217443" strokeWidth={1.5} />,
  FileText: <FileText size={28} stroke="#217443" strokeWidth={1.5} />,
};

export default function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="whyus" className="bg-[#f5f9f6] py-12 md:py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className="text-center mb-14 transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div className="pre-label pre-label-green justify-center mb-3">WHY CHOOSE US</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0d1a12] tracking-tight leading-none">
            The Locksmith Luz Difference
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => (
            <div
              key={item.title}
              className="why-item flex flex-col items-center text-center gap-4 p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.92)',
                transition: `opacity 550ms cubic-bezier(0.34,1.56,0.64,1) ${i * 100}ms, transform 550ms cubic-bezier(0.34,1.56,0.64,1) ${i * 100}ms`,
              }}
            >
              <div className="why-icon w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(33,116,67,0.08)' }}>
                {iconMap[item.icon] ?? <Key size={28} stroke="#217443" strokeWidth={1.5} />}
              </div>
              <h3 className="why-title font-display font-semibold text-[17px] text-[#0d1a12] uppercase leading-tight">
                {item.title}
              </h3>
              <p className="font-body text-sm text-[#4a6155] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
