const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4coh.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Community of Hope Inc.",
  url: siteUrl,
  logo: `${siteUrl}/coh-logo.png`,
  description:
    "Faith-based recovery and community outreach in Groton, CT. Hope House, The Kindness Connection, and CCAR Recovery Coach training.",
  telephone: "860-912-8983",
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
