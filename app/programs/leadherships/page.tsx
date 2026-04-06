import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { LeadHERshipPageContent } from "@/components/pages/programs/LeadHERshipPageContent";

const description =
  "LeadHerships is a Community of Hope initiative honoring women who lead by serving. Nominate an honoree, become a sponsor, or get involved in our annual celebration of leadership, resilience, and impact.";

export const metadata: Metadata = {
  title: "LeadHerships | Programs",
  description,
};

export default function LeadHershipsPage() {
  return (
    <>
      <WebPageJsonLd
        name="LeadHerships | Programs | Community of Hope Inc."
        description={description}
        path="/programs/leadherships"
      />
      <LeadHERshipPageContent />
    </>
  );
}
