'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/lib/data';

function useCounter(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat, started, delay }: { stat: typeof stats[0]; started: boolean; delay: number }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const count = useCounter(stat.numericValue, 1800, active);
  const display = stat.label === 'Star Rating' ? count.toFixed(1) : count.toLocaleString();

  return (
    <div className="flex flex-col items-center text-center px-6 py-4">
      <div className="stat-num">
        {display}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="font-body text-[13px] text-white/60 uppercase tracking-wider mt-2">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="statsbar" className="relative bg-[#0f1e17] py-10 md:py-16 overflow-hidden" ref={ref}>
      {/* Floating blobs */}
      <div className="blob blob-green absolute w-80 h-80 -left-20 -top-20" style={{ opacity: 0.07 }} />
      <div className="blob blob-gold absolute w-64 h-64 right-0 bottom-0" style={{ opacity: 0.06 }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#d6b328]/20">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} started={inView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
