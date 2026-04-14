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

type EventJsonLdProps = {
  name: string;
  description: string;
  startDate: string; // ISO 8601 (e.g. "2026-05-01T18:00")
  endDate: string;
  locationName: string;
  locationAddress: string;
  image: string; // absolute or root-relative
  offers?: {
    price: string;
    name: string;
    url?: string | null;
  }[];
};

export function EventJsonLd({
  name,
  description,
  startDate,
  endDate,
  locationName,
  locationAddress,
  image,
  offers,
}: EventJsonLdProps) {
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        streetAddress: locationAddress,
        addressLocality: "New London",
        addressRegion: "CT",
        addressCountry: "US",
      },
    },
    image: [imageUrl],
    organizer: {
      "@type": "Organization",
      name: "Community of Hope Inc.",
      url: siteUrl,
    },
    ...(offers && offers.length > 0
      ? {
          offers: offers.map((o) => ({
            "@type": "Offer",
            name: o.name,
            price: o.price.replace(/[^0-9.]/g, ""),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            ...(o.url ? { url: o.url } : {}),
          })),
        }
      : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
