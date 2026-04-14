'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { companyInfo } from '@/lib/data';
import { getHeroImage, imageManifest } from '@/lib/images';

const heroImage = getHeroImage(imageManifest);
const heroWords1 = ['LOCKED', 'OUT?'];
const heroWords2 = ['WE', 'ARRIVE', 'FAST.'];

export default function Hero() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will call you right back.');
    setName(''); setPhone(''); setService('');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImage ? (
          <div className="ken-burns w-full h-full">
            <Image
              src={heroImage}
              alt="Locksmith Luz professional service"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="ken-burns w-full h-full bg-[#0f1e17]" />
        )}
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #1a5e35 0%, #0f1e17 80%)',
            opacity: 0.88,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 w-full max-w-5xl mx-auto" style={{ paddingTop: '10vh' }}>
        {/* Trust badge */}
        <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#d6b328]/40 bg-[#217443]/20 px-4 py-2 mb-8">
          <span className="font-body text-xs text-white font-medium tracking-wide">
            🔒 Licensed &amp; Insured · California
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold uppercase leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(42px, 8vw, 88px)', letterSpacing: '-1px' }}>
          <div>
            {heroWords1.map((word, i) => (
              <span
                key={word}
                className="hero-word text-white mr-3"
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </div>
          <div>
            {heroWords2.map((word, i) => (
              <span
                key={word}
                className={`hero-word mr-3 ${i === 2 ? 'gradient-text' : 'text-white'}`}
                style={{ animationDelay: `${360 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* Sub-headline */}
        <p className="hero-sub font-body text-lg text-white/75 max-w-xl mb-8 leading-relaxed">
          {companyInfo.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <Link
            href="/contact/"
            className="hero-cta1 btn-gold px-8 py-4 text-sm font-display font-bold uppercase tracking-wider rounded-sm"
          >
            Get Free Estimate
          </Link>
          <a
            href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
            className="hero-cta2 inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-display font-bold uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white/15 transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {companyInfo.phone}
          </a>
        </div>

        {/* Quick quote form */}
        <div className="hero-form w-full max-w-2xl rounded-lg p-6 backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <p className="font-display text-xs uppercase tracking-widest text-[#d6b328] mb-4">Get a Free Quote — We Call Back in Minutes</p>
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              aria-label="Your Name"
              title="Your Name"
              value={name || ''}
              onChange={e => setName(e.target.value)}
              className="form-input"
              data-hint="Your Name"
              required
            />
            <input
              type="tel"
              aria-label="Phone Number"
              title="Phone Number"
              value={phone || ''}
              onChange={e => setPhone(e.target.value)}
              className="form-input"
              data-hint="Phone Number"
              required
            />
            <select
              value={service}
              onChange={e => setService(e.target.value)}
              className="form-input"
              required
            >
              <option value="">Service Type</option>
              <option>Emergency Lockout</option>
              <option>Residential Lock</option>
              <option>Automotive</option>
              <option>Commercial</option>
              <option>Rekeying</option>
              <option>Smart Lock</option>
              <option>Other</option>
            </select>
            <button
              type="submit"
              className="btn-gold md:col-span-3 py-3 rounded-sm text-sm"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
