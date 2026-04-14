import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Locksmith Blog — Tips, Guides & Security Advice | Locksmith Luz',
  description: 'Read expert locksmith tips, security guides, and advice from Locksmith Luz. Learn about deadbolts, rekeying, smart locks, and California home security.',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pre-label pre-label-gold justify-center mb-4">LOCKSMITH INSIGHTS</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Security Tips &amp; Guides
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Expert advice on home security, lock selection, rekeying, smart locks, and more from the team at Locksmith Luz.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f9f6] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-white rounded-sm border border-[#d4e6db] overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-[#217443]/10 to-[#d6b328]/10 flex items-center justify-center">
                  <span className="font-display text-[40px] text-[#217443]/20">🔑</span>
                </div>
                <div className="p-6">
                  <span className="inline-block font-display text-[11px] uppercase tracking-widest text-[#d6b328] mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-display font-bold text-lg text-[#0d1a12] mb-3 group-hover:text-[#217443] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-[#4a6155] leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="font-display text-sm text-[#d6b328] uppercase tracking-wider">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
