'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { companyInfo } from '@/lib/data';
import { navLinks } from '@/lib/header-data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const servicesLink = navLinks.find(l => l.label === 'Services');

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-[#d6b328]/30'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span
              className={`font-display font-bold text-xl md:text-2xl tracking-tight ${
                scrolled ? 'text-[#0d1a12]' : 'text-white'
              }`}
            >
              🔐 LOCKSMITH LUZ
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={(e) => {
                      // Only close if the related target is outside this container
                      const container = e.currentTarget;
                      if (!container.contains(e.relatedTarget as Node)) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <button
                      className={`nav-link font-display text-[13px] font-medium uppercase tracking-wider transition-colors duration-200 ${
                        scrolled ? 'text-[#0d1a12] hover:text-[#d6b328]' : 'text-white hover:text-[#d6b328]'
                      }`}
                    >
                      {link.label} ▾
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-64 z-50 pt-1">
                        <div className="bg-white shadow-xl border border-[#d4e6db] rounded-sm py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 font-body text-sm text-[#0d1a12] hover:bg-[#f5f9f6] hover:text-[#217443] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link font-display text-[13px] font-medium uppercase tracking-wider transition-colors duration-200 ${
                    scrolled ? 'text-[#0d1a12] hover:text-[#d6b328]' : 'text-white hover:text-[#d6b328]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
              className="nav-cta hidden md:inline-block"
            >
              📞 {companyInfo.phone}
            </a>
            {/* Hamburger */}
            <button
              className={`lg:hidden p-2 ${scrolled ? 'text-[#0d1a12]' : 'text-white'}`}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={drawerOpen ? 'open' : ''}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col h-full px-8 py-8">
          {/* Close button */}
          <div className="flex justify-between items-center mb-10">
            <span className="font-display font-bold text-xl text-white">LOCKSMITH LUZ</span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="font-display font-bold text-2xl text-white uppercase hover:text-[#d6b328] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <a
            href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
            className="nav-cta w-full text-center py-4 mt-8"
            onClick={() => setDrawerOpen(false)}
          >
            📞 {companyInfo.phone}
          </a>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[199]"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
}
