import Link from 'next/link';
import { companyInfo, services, areas } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1a12] text-white">
      <div className="max-w-7xl mx-auto py-10 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + tagline */}
          <div>
            <div className="font-display font-bold text-2xl text-white mb-4">
              🔐 LOCKSMITH LUZ
            </div>
            <p className="font-body text-[13px] text-white/55 leading-relaxed mb-6">
              {companyInfo.footerTagline}
            </p>
            <div className="flex gap-3">
              {['facebook', 'google', 'yelp'].map(platform => (
                <span
                  key={platform}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white/50 capitalize"
                >
                  {platform[0].toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-semibold text-[13px] text-[#d6b328] uppercase tracking-widest border-b border-[#d6b328]/25 pb-3 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map(service => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="font-body text-sm text-white/60 hover:text-[#d6b328] transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h4 className="font-display font-semibold text-[13px] text-[#d6b328] uppercase tracking-widest border-b border-[#d6b328]/25 pb-3 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about/' },
                { label: 'All Services', href: '/services/' },
                { label: 'Service Areas', href: '/areas/' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Testimonials', href: '/testimonials/' },
                { label: 'Contact', href: '/contact/' },
                { label: 'Privacy Policy', href: '/privacy-policy/' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-[#d6b328] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display font-semibold text-[13px] text-[#d6b328] uppercase tracking-widest border-b border-[#d6b328]/25 pb-3 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                className="block font-display font-bold text-lg text-white hover:text-[#d6b328] transition-colors"
              >
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="block font-body text-sm text-white/55 hover:text-[#d6b328] transition-colors"
              >
                {companyInfo.email}
              </a>
              <p className="font-body text-[13px] text-white/55">
                {companyInfo.address}
              </p>
              <p className="font-body text-[13px] text-white/55">
                {companyInfo.hours}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {companyInfo.certifications.map(cert => (
                  <span
                    key={cert}
                    className="text-[11px] font-display font-medium uppercase tracking-wider text-[#62c794] border border-[#62c794]/30 px-2 py-1 rounded-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#d6b328]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-body text-[13px] text-white/40">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="font-body text-[13px] text-white/40">
            Built in California 🌴
          </p>
        </div>
      </div>
    </footer>
  );
}
