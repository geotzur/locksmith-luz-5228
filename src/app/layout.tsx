import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/headers/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Locksmith Luz — Trusted Locksmith Services in California',
    template: '%s | Locksmith Luz',
  },
  description: 'Locksmith Luz delivers expert lock installation, emergency lockouts, and automotive key services across Los Angeles and all of California — 24 hours a day. Licensed, insured, ALOA certified.',
  keywords: [
    'locksmith Los Angeles',
    'locksmith California',
    'emergency lockout service',
    'residential lock installation',
    'rekeying services',
    'automotive locksmith',
    'commercial locksmith',
    'smart lock installation',
    'high-security locks',
    'safe opening',
    'master key systems',
    '24 hour locksmith',
    'ALOA certified locksmith',
    'lock repair',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Locksmith Luz',
    url: 'https://locksmithluz.com',
    title: 'Locksmith Luz — Trusted Locksmith Services in California',
    description: 'Licensed & insured locksmith serving Los Angeles, CA 24/7. Emergency lockouts, residential, commercial, and automotive services.',
    images: [{ url: 'https://locksmithluz.com/logo.jpg' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Los Angeles',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-textPrimary">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Floating call button — mobile only */}
        <a
          href="tel:5557482963"
          className="fixed bottom-6 right-6 z-50 md:hidden bg-[#d6b328] text-[#0d1a12] rounded-full w-14 h-14 flex items-center justify-center shadow-xl"
          aria-label="Call Locksmith Luz"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
