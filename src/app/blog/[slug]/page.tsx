import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, companyInfo } from '@/lib/data';
import CTA from '@/components/sections/CTA';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Locksmith Luz Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return <div className="pt-32 text-center">Post not found.</div>;

  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`https://locksmithluz.com/blog/${post.slug}/`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://locksmithluz.com/' },
          { name: 'Blog', url: 'https://locksmithluz.com/blog/' },
          { name: post.title, url: `https://locksmithluz.com/blog/${post.slug}/` },
        ]}
      />
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/blog/" className="font-display text-xs text-white/40 uppercase tracking-widest hover:text-[#d6b328] transition-colors">
              ← Blog
            </Link>
            <span className="text-white/20">|</span>
            <span className="font-display text-xs text-[#d6b328] uppercase tracking-widest">{post.category}</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <div className="space-y-6">
                {post.content.map((para, i) => (
                  <p key={i} className="font-body text-[#4a6155] leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#f5f9f6] rounded-sm border border-[#d4e6db]">
                <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-2">
                  Need Professional Locksmith Help?
                </h3>
                <p className="font-body text-sm text-[#4a6155] mb-4">
                  Locksmith Luz serves Los Angeles and all of California. Call us for a free estimate.
                </p>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="btn-gold inline-block px-6 py-3 rounded-sm text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="bg-[#0f1e17] rounded-sm p-6 mb-6 sticky top-24">
                <h3 className="font-display font-bold text-lg text-white mb-3">Need Help Now?</h3>
                <p className="font-body text-sm text-white/60 mb-4">
                  24/7 locksmith service throughout California.
                </p>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="btn-gold block text-center py-3 rounded-sm text-sm mb-3"
                >
                  {companyInfo.phone}
                </a>
                <Link
                  href="/contact/"
                  className="block text-center border border-white/30 text-white font-display uppercase text-sm py-3 rounded-sm hover:border-[#d6b328] hover:text-[#d6b328] transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>

              {otherPosts.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold text-sm text-[#217443] uppercase tracking-widest mb-4">
                    More Articles
                  </h3>
                  {otherPosts.map(p => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}/`}
                      className="block mb-4 pb-4 border-b border-[#d4e6db] last:border-0 group"
                    >
                      <span className="font-display font-semibold text-sm text-[#0d1a12] group-hover:text-[#217443] transition-colors leading-tight block">
                        {p.title}
                      </span>
                      <span className="font-display text-xs text-[#d6b328] uppercase tracking-wider mt-1 block">{p.category}</span>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
