import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { LeadHERshipPageContent } from "@/components/pages/programs/LeadHERshipPageContent";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "LeadHerships is a Community of Hope initiative honoring women who lead by serving. Nominate an honoree, become a sponsor, or get involved in our annual celebration of leadership, resilience, and impact.";

export const metadata: Metadata = {
  title: "LeadHerships | Programs",
  description,
  alternates: { canonical: "/programs/leadherships" },
};

export default async function LeadHershipsPage() {
  const pageData = await getPageContent("leadherships");
  const hasPuckContent = pageData.content.length > 0;

  return (
    <>
      <WebPageJsonLd
        name="LeadHerships | Programs | Community of Hope Inc."
        description={description}
        path="/programs/leadherships"
      />
      <LeadHERshipPageContent
        puckContent={hasPuckContent ? <Render config={puckConfig} data={pageData} /> : undefined}
      />
    </>
  );
}
