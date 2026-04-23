import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SupportersPageContent } from "@/components/pages/supporters/SupportersPageContent";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Partners, donors, and supporters who make Community of Hope Inc. possible. Thank you to everyone who helps us restore hope and rebuild lives in southeastern Connecticut.";

export const metadata: Metadata = {
  title: "Supporters",
  description,
  alternates: { canonical: "/supporters" },
};

export default async function SupportersPage() {
  const pageData = await getPageContent("supporters");
  const hasPuckContent = pageData.content.length > 0;

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
      <SupportersPageContent
        puckContent={hasPuckContent ? <Render config={puckConfig} data={pageData} /> : undefined}
      />
    </>
  );
}
