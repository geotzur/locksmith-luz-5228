const BASE_URL = 'https://locksmithluz.com';

export function LocalBusinessJsonLd({
  name = 'Locksmith Luz',
  url = BASE_URL,
  phone = '(555) 748-2963',
  email = 'info@locksmithluz.com',
  address = 'Los Angeles, CA',
  city = 'Los Angeles',
  state = 'CA',
  description = 'Licensed, insured, ALOA-certified locksmith serving Los Angeles and all of California 24/7.',
  areaName,
}: {
  name?: string;
  url?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  description?: string;
  areaName?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name,
    url,
    telephone: phone,
    email,
    description,
    image: `${BASE_URL}/logo.jpg`,
    priceRange: '$$',
    openingHours: ['Mo-Su 07:00-22:00'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: areaName ?? city,
      addressRegion: state,
      addressCountry: 'US',
    },
    areaServed: areaName
      ? { '@type': 'City', name: areaName }
      : { '@type': 'State', name: 'California' },
    hasCredential: ['Licensed', 'Insured', 'Bonded', 'ALOA Certified'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3500',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  provider = 'Locksmith Luz',
  areaName = 'Los Angeles',
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaName?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Locksmith',
      name: provider,
      url: BASE_URL,
      telephone: '(555) 748-2963',
    },
    areaServed: {
      '@type': 'City',
      name: areaName,
    },
    serviceType: 'Locksmith Service',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished = '2024-01-01',
  dateModified = '2024-01-01',
  author = 'Locksmith Luz',
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Locksmith Luz',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.jpg`,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
