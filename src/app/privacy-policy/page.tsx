import type { Metadata } from 'next';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy | Locksmith Luz',
  description: 'Privacy policy for Locksmith Luz. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#0f1e17] pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-none mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-white/60">Last updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="space-y-8 font-body text-[#4a6155] leading-relaxed">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">Introduction</h2>
              <p>
                {companyInfo.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">Information We Collect</h2>
              <p>We collect information you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Submit a contact or quote request form</li>
                <li>Call our phone number</li>
                <li>Send us an email</li>
              </ul>
              <p className="mt-3">This may include: name, email address, phone number, and a description of your service request.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your service requests and inquiries</li>
                <li>Schedule and dispatch locksmith technicians</li>
                <li>Send you service confirmations and follow-ups</li>
                <li>Improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">Third-Party Services</h2>
              <p>
                We use the following third-party services: Netlify (hosting), Google Fonts (typography), and Google Analytics (website analytics). These services may collect usage data according to their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. We do not sell, trade, or transfer your personal information to outside parties without your consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">Your California Privacy Rights</h2>
              <p>
                California residents have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt out of the sale of personal information (we do not sell personal information).
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#0d1a12] mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="mt-3 p-4 bg-[#f5f9f6] rounded-sm border border-[#d4e6db]">
                <p className="font-body text-[#0d1a12]">{companyInfo.name}</p>
                <p>Email: <a href={`mailto:${companyInfo.email}`} className="text-[#217443] hover:underline">{companyInfo.email}</a></p>
                <p>Phone: <a href={`tel:${companyInfo.phone.replace(/\D/g, '')}`} className="text-[#217443] hover:underline">{companyInfo.phone}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
