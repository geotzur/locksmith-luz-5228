'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { companyInfo } from '@/lib/data';
import { Check } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly with your free quote.');
    setName(''); setPhone(''); setService(''); setMessage('');
  };

  const trustBullets = [
    'Free estimates — no obligation',
    'Same-day service available',
    'Licensed, insured & bonded in California',
  ];

  return (
    <section ref={ref} className="flex flex-col lg:flex-row min-h-[500px]">
      {/* Left — dark panel */}
      <div
        className="relative w-full lg:w-1/2 bg-[#0f1e17] flex flex-col justify-center px-8 md:px-12 lg:px-20 py-10 md:py-16 overflow-hidden"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'opacity 600ms ease-out, transform 600ms ease-out',
        }}
      >
        {/* Floating blobs */}
        <div className="blob blob-green absolute w-72 h-72 -left-16 -top-16 pointer-events-none" style={{ opacity: 0.07 }} />
        <div className="blob blob-gold absolute w-56 h-56 right-0 bottom-0 pointer-events-none" style={{ opacity: 0.06 }} />

        <div className="relative z-10">
          <div className="pre-label pre-label-gold mb-4">READY TO HELP</div>
          <h2 className="font-display font-bold text-[38px] md:text-[52px] text-white tracking-tight leading-none mb-6">
            Ready to Secure<br />Your Property?
          </h2>
          <ul className="space-y-3 mb-8">
            {trustBullets.map(bullet => (
              <li key={bullet} className="flex items-center gap-3">
                <Check size={18} className="text-[#62c794] flex-shrink-0" />
                <span className="font-body text-[15px] text-white/80">{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d6b328" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="font-display font-bold text-[32px] text-[#d6b328] group-hover:underline">
              {companyInfo.phone}
            </span>
          </a>
        </div>
      </div>

      {/* Right — gold panel */}
      <div
        className="w-full lg:w-1/2 bg-[#d6b328] flex flex-col justify-center px-8 md:px-12 lg:px-20 py-10 md:py-16"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(30px)',
          transition: 'opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms',
        }}
      >
        <h3 className="font-display font-bold text-2xl text-[#0d1a12] mb-6 tracking-tight">
          Get Your Free Quote
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            aria-label="Your Name"
            title="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-input-gold"
            required
          />
          <input
            type="tel"
            aria-label="Phone Number"
            title="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="form-input-gold"
            required
          />
          <select
            value={service}
            onChange={e => setService(e.target.value)}
            className="form-input-gold"
            required
          >
            <option value="">Service Needed</option>
            <option>Emergency Lockout</option>
            <option>Residential Lock Installation</option>
            <option>Rekeying</option>
            <option>Automotive Locksmith</option>
            <option>Commercial Security</option>
            <option>Smart Lock Installation</option>
            <option>High-Security Upgrade</option>
            <option>Safe Service</option>
            <option>Other</option>
          </select>
          <textarea
            aria-label="Additional details (optional)"
            title="Additional details"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
            className="form-input-gold resize-none"
          />
          <button
            type="submit"
            className="btn-gold bg-[#0f1e17] text-white w-full py-4 rounded-sm text-sm mt-2"
            style={{ background: '#0f1e17', color: '#fff' }}
          >
            Get My Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}
