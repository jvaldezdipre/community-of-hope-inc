const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4coh.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NonprofitOrganization"],
  name: "Community of Hope Inc.",
  url: siteUrl,
  logo: `${siteUrl}/coh-logo.png`,
  description:
    "Faith-based recovery and community outreach in Groton, CT. Hope House, The Kindness Connection, and CCAR Recovery Coach training.",
  telephone: "860-912-8983",
  areaServed: {
    "@type": "State",
    name: "Connecticut",
  },
  nonprofitStatus: "Nonprofit501c3",
  founder: {
    "@type": "Person",
    name: "Annette Eldridge",
    jobTitle: "Executive Director",
  },
  sameAs: [],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

type WebPageJsonLdProps = {
  name: string;
  description: string;
  path: string;
};

export function WebPageJsonLd({ name, description, path }: WebPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteUrl}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Community of Hope Inc.",
      url: siteUrl,
    },
    about: {
      "@type": "Organization",
      name: "Community of Hope Inc.",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

export function FAQPageJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
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
