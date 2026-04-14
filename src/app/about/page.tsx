import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { companyInfo, aboutValues } from '@/lib/data';
import { getAboutImage, imageManifest } from '@/lib/images';
import CTA from '@/components/sections/CTA';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

const aboutImage = getAboutImage(imageManifest);

export const metadata: Metadata = {
  title: "About Locksmith Luz | Los Angeles's Trusted Locksmith",
  description: 'Learn about Locksmith Luz, serving Los Angeles and California since 2011. Licensed, insured, ALOA certified technicians committed to professional lock service with no hidden fees.',
};

const aboutParagraphs = [
  'Locksmith Luz has been protecting California homes, businesses, and vehicles since 2011. Founded in Los Angeles, we have grown into a trusted name across the state by doing one thing exceptionally well: showing up fast, solving the problem right, and treating every customer like a neighbor.',
  'Every technician on our team holds current ALOA certification and passes a rigorous background check before joining. We specialize in residential, commercial, and automotive locksmith work, and our mobile units are stocked with the same professional-grade tools used by the largest security firms in the country.',
  'We believe security is personal. Whether you just moved into a new home in Pasadena, run a small business in Downtown Los Angeles, or got your keys locked in your car in Santa Monica, Locksmith Luz is ready to respond. We back every job with a 90-day workmanship guarantee and will return at no charge if anything we touched is not performing perfectly.',
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://locksmithluz.com/' },
          { name: 'About', url: 'https://locksmithluz.com/about/' },
        ]}
      />
      {/* Hero banner */}
      <section className="bg-[#0f1e17] pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pre-label pre-label-gold justify-center mb-4">OUR STORY</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            About Locksmith Luz
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Serving California&apos;s homeowners, businesses, and drivers since 2011 with licensed, insured locksmith services backed by a 90-day guarantee.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="rounded-sm overflow-hidden aspect-[4/3] bg-[#217443]/10">
              {aboutImage ? (
                <Image
                  src={aboutImage}
                  alt="Locksmith Luz team"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-2xl text-[#217443]/40">Locksmith Luz Team</span>
                </div>
              )}
            </div>

            {/* Text */}
            <div>
              <div className="pre-label pre-label-green mb-4">ESTABLISHED {companyInfo.yearEstablished}</div>
              <h2 className="gradient-bar font-display font-bold text-4xl text-[#0d1a12] tracking-tight leading-tight mb-6">
                California&apos;s Trusted Locksmith
              </h2>
              <div className="space-y-4">
                {aboutParagraphs.map((p, i) => (
                  <p key={i} className="font-body text-[#4a6155] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {companyInfo.certifications.map(cert => (
                  <span
                    key={cert}
                    className="font-display text-[12px] uppercase tracking-wider text-[#217443] border border-[#217443]/30 px-3 py-1.5 rounded-sm"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* Values grid */}
      <section className="bg-[#f5f9f6] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pre-label pre-label-green justify-center mb-3">OUR VALUES</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0d1a12] tracking-tight leading-none">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutValues.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-sm border border-[#d4e6db] border-l-4 border-l-[#217443] p-7"
              >
                <h3 className="font-display font-bold text-xl text-[#0d1a12] mb-3">{value.title}</h3>
                <p className="font-body text-[#4a6155] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
