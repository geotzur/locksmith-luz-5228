import type { Metadata } from 'next';
import Link from 'next/link';
import { services, areas, blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sitemap | Locksmith Luz',
  description: 'Complete sitemap of Locksmith Luz website. Browse all services, service areas, and blog posts.',
};

export default function SitemapPage() {
  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-none mb-4">
            Site Map
          </h1>
          <p className="font-body text-white/60">All pages on the Locksmith Luz website.</p>
        </div>
      </section>

      <section className="bg-[#f5f9f6] py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Main pages */}
            <div>
              <h2 className="font-display font-bold text-lg text-[#217443] uppercase tracking-wide mb-4 pb-2 border-b border-[#d4e6db]">
                Main Pages
              </h2>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about/' },
                  { label: 'Services', href: '/services/' },
                  { label: 'Service Areas', href: '/areas/' },
                  { label: 'Blog', href: '/blog/' },
                  { label: 'Contact', href: '/contact/' },
                  { label: 'Testimonials', href: '/testimonials/' },
                  { label: 'Privacy Policy', href: '/privacy-policy/' },
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-sm text-[#4a6155] hover:text-[#217443] transition-colors">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-display font-bold text-lg text-[#217443] uppercase tracking-wide mb-4 pb-2 border-b border-[#d4e6db]">
                Services
              </h2>
              <ul className="space-y-2">
                {services.map(s => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`} className="font-body text-sm text-[#4a6155] hover:text-[#217443] transition-colors">
                      → {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h2 className="font-display font-bold text-lg text-[#217443] uppercase tracking-wide mb-4 pb-2 border-b border-[#d4e6db]">
                Service Areas
              </h2>
              <ul className="space-y-2">
                {areas.map(a => (
                  <li key={a.slug}>
                    <Link href={`/areas/${a.slug}/`} className="font-body text-sm text-[#4a6155] hover:text-[#217443] transition-colors">
                      → {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h2 className="font-display font-bold text-lg text-[#217443] uppercase tracking-wide mb-4 pb-2 border-b border-[#d4e6db]">
                Blog
              </h2>
              <ul className="space-y-2">
                {blogPosts.map(p => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}/`} className="font-body text-sm text-[#4a6155] hover:text-[#217443] transition-colors">
                      → {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Area + Service pages (sample) */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-lg text-[#217443] uppercase tracking-wide mb-4 pb-2 border-b border-[#d4e6db]">
                Local Service Pages (Sample)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {areas.slice(0, 4).flatMap(area =>
                  services.slice(0, 3).map(service => (
                    <Link
                      key={`${area.slug}-${service.slug}`}
                      href={`/areas/${area.slug}/${service.slug}/`}
                      className="font-body text-sm text-[#4a6155] hover:text-[#217443] transition-colors"
                    >
                      → {service.name} in {area.name}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
