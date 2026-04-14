'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { processSteps } from '@/lib/data';

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: triggerRef, inView } = useInView({ triggerOnce: false, threshold: 0 });

  // On mobile, just show all steps stacked
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Scroll-based activation for desktop pinned layout
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));
      const step = Math.min(processSteps.length - 1, Math.floor(progress * processSteps.length));
      setActiveStep(step);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="processsteps" className="bg-[#f5f9f6] py-12 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div ref={triggerRef}>
            <div className="pre-label pre-label-green mb-3">HOW IT WORKS</div>
            <h2 className="font-display font-bold text-4xl text-[#0d1a12] tracking-tight leading-none mb-10">
              Our Simple 4-Step Process
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="bg-white rounded-sm border border-[#d4e6db] border-l-4 border-l-[#d6b328] p-6"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 500ms ease-out ${i * 120}ms, transform 500ms ease-out ${i * 120}ms`,
                }}
              >
                <div className="font-display font-bold text-5xl text-[#d6b328] mb-3">
                  {String(step.step).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-2">{step.title}</h3>
                <p className="font-body text-[#4a6155] leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="processsteps" ref={sectionRef} className="relative" style={{ height: `${processSteps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left panel */}
        <div className="w-[35%] bg-[#0f1e17] flex flex-col justify-center px-12 min-h-screen">
          <div className="pre-label pre-label-gold mb-4">HOW IT WORKS</div>
          <h2 className="font-display font-bold text-[38px] text-white tracking-tight leading-none mb-10">
            Our Simple<br />4-Step Process
          </h2>
          <div className="flex flex-col gap-2">
            {processSteps.map((step, i) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(i)}
                className={`process-step-label text-left ${activeStep === i ? 'active' : ''}`}
              >
                {String(step.step).padStart(2, '0')}. {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="w-[65%] bg-[#f5f9f6] relative flex items-center justify-center px-8 lg:px-16 overflow-hidden">
          {/* Ghost watermark */}
          <div
            className="absolute top-8 right-8 font-display font-bold text-[140px] leading-none pointer-events-none select-none"
            style={{
              color: 'rgba(33,116,67,0.06)',
              transform: activeStep >= 0 ? 'rotate(0deg)' : 'rotate(-3deg)',
              transition: 'transform 500ms ease-out',
            }}
          >
            {String(processSteps[activeStep]?.step ?? 1).padStart(2, '0')}
          </div>

          {processSteps.map((step, i) => (
            <div
              key={step.step}
              className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16"
              style={{
                opacity: activeStep === i ? 1 : 0,
                transform: activeStep === i ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                pointerEvents: activeStep === i ? 'auto' : 'none',
              }}
            >
              <div className="font-display font-bold text-[80px] text-[#d6b328] leading-none mb-4">
                {String(step.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[40px] text-[#0d1a12] leading-tight tracking-tight mb-6">
                {step.title}
              </h3>
              <p className="font-body text-[17px] text-[#4a6155] leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
