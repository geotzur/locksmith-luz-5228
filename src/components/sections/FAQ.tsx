'use client';

import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { faqs } from '@/lib/data';

const tabKeys = Object.keys(faqs) as Array<keyof typeof faqs>;

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const btn = tabRefs.current[activeTab];
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [activeTab]);

  const currentFaqs = faqs[tabKeys[activeTab]];

  return (
    <section className="bg-[#0f1e17] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 500ms ease-out, transform 500ms ease-out',
          }}
        >
          <div className="pre-label pre-label-gold justify-center mb-3">FREQUENTLY ASKED</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-none">
            Common Questions Answered
          </h2>
        </div>

        {/* Tab bar */}
        <div
          className="relative mb-8 overflow-x-auto"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 500ms ease-out 200ms',
          }}
        >
          <div className="flex gap-2 border-b border-white/10 relative min-w-max">
            {tabKeys.map((tab, i) => (
              <button
                key={tab}
                ref={el => { tabRefs.current[i] = el; }}
                onClick={() => setActiveTab(i)}
                className={`faq-tab ${activeTab === i ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
            {/* Sliding gold indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-[#d6b328] transition-all duration-300"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>
        </div>

        {/* FAQ items */}
        <div
          key={activeTab}
          className="grid gap-4"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 400ms ease-out 100ms, transform 400ms ease-out 100ms',
          }}
        >
          {currentFaqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-white/10 pb-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(15px)',
                transition: `opacity 400ms ease-out ${i * 60}ms, transform 400ms ease-out ${i * 60}ms`,
              }}
            >
              <h3 className="font-display font-semibold text-base text-white mb-2">
                {faq.question}
              </h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
