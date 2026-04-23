import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { TheHousePageContent } from "@/components/pages/programs/TheHousePageContent";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Hope House is a 12-bed, faith-based recovery home for women 18+ in Groton, CT. Mentoring, job readiness, clothing with dignity, and a family-style community. No cost for residents. Call 860-912-4356.";

export const metadata: Metadata = {
  title: "Hope House | Programs",
  description,
  alternates: { canonical: "/programs/hope-house" },
};

export default async function TheHousePage() {
  const pageData = await getPageContent("hope-house");
  const hasPuckHero = pageData.content.length > 0;

  return (
    <>
      <WebPageJsonLd
        name="Hope House | Programs | Community of Hope Inc."
        description={description}
        path="/programs/hope-house"
      />
      <TheHousePageContent
        puckContent={hasPuckHero ? <Render config={puckConfig} data={pageData} /> : undefined}
      />
    </>
  );
}
