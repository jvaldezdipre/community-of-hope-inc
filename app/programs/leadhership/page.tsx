import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { LeadHERshipPageContent } from "@/components/pages/programs/LeadHERshipPageContent";

const description =
  "LeadHERship is a free women's empowerment program by Community of Hope Inc. Build confidence, leadership skills, financial literacy, and a vision for your future — open to women in recovery, graduates, and the community.";

export const metadata: Metadata = {
  title: "LeadHERship | Programs",
  description,
};

export default function LeadHERshipPage() {
  return (
    <>
      <WebPageJsonLd
        name="LeadHERship | Programs | Community of Hope Inc."
        description={description}
        path="/programs/leadhership"
      />
      <LeadHERshipPageContent />
    </>
  );
}
