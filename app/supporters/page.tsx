import type { Metadata } from "next";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SupportersPageContent } from "@/components/pages/supporters/SupportersPageContent";

const description =
  "Partners, donors, and supporters who make Community of Hope Inc. possible. Thank you to everyone who helps us restore hope and rebuild lives in southeastern Connecticut.";

export const metadata: Metadata = {
  title: "Supporters",
  description,
  alternates: { canonical: "/supporters" },
};

export default function SupportersPage() {
  return (
    <>
      <WebPageJsonLd
        name="Supporters | Community of Hope Inc."
        description={description}
        path="/supporters"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Supporters", href: "/supporters" },
        ]}
      />
      <SupportersPageContent />
    </>
  );
}
