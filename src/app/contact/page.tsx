'use client';

import { useState } from 'react';
import { companyInfo } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Locksmith Luz! We will be in touch shortly.');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pre-label pre-label-gold justify-center mb-4">GET IN TOUCH</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Contact Locksmith Luz
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to schedule? Get in touch for a free estimate or emergency response. We respond within minutes.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f9f6] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-sm border border-[#d4e6db] p-8">
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-6">
                Request a Free Estimate
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className="border border-[#d4e6db] rounded-sm px-4 py-3 font-body text-sm text-[#0d1a12] placeholder:text-[#4a6155]/50 focus:outline-none focus:border-[#217443] w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="border border-[#d4e6db] rounded-sm px-4 py-3 font-body text-sm text-[#0d1a12] placeholder:text-[#4a6155]/50 focus:outline-none focus:border-[#217443] w-full"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  required
                  className="border border-[#d4e6db] rounded-sm px-4 py-3 font-body text-sm text-[#0d1a12] placeholder:text-[#4a6155]/50 focus:outline-none focus:border-[#217443] w-full"
                />
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="border border-[#d4e6db] rounded-sm px-4 py-3 font-body text-sm text-[#0d1a12] focus:outline-none focus:border-[#217443] w-full bg-white"
                >
                  <option value="">Select Service</option>
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
                  placeholder="Describe your situation (optional)"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="border border-[#d4e6db] rounded-sm px-4 py-3 font-body text-sm text-[#0d1a12] placeholder:text-[#4a6155]/50 focus:outline-none focus:border-[#217443] w-full resize-none"
                />
                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-sm text-sm"
                >
                  Send Request
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-8">
                Reach Us Directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#217443]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#217443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#217443] uppercase tracking-wider mb-1">Phone</div>
                    <a href={`tel:${companyInfo.phone.replace(/\D/g, '')}`} className="font-display font-bold text-2xl text-[#0d1a12] hover:text-[#217443] transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#217443]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#217443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#217443] uppercase tracking-wider mb-1">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="font-body text-[#4a6155] hover:text-[#217443] transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#217443]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#217443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#217443] uppercase tracking-wider mb-1">Hours</div>
                    <p className="font-body text-[#4a6155]">{companyInfo.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#217443]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#217443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#217443] uppercase tracking-wider mb-1">Service Area</div>
                    <p className="font-body text-[#4a6155]">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#f5f9f6] rounded-sm border border-[#d4e6db] p-6">
                <h3 className="font-display font-bold text-lg text-[#0d1a12] mb-3">Emergency? Call Now</h3>
                <p className="font-body text-sm text-[#4a6155] mb-4">
                  For urgent lockouts, our emergency line is available 24/7. A live dispatcher will answer immediately.
                </p>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="btn-gold block text-center py-4 rounded-sm text-sm"
                >
                  Emergency Line: {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
