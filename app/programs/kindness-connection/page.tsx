import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { KindnessConnectionPageContent } from "@/components/pages/programs/KindnessConnectionPageContent";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Kindness Connection provides free food, clothing, hygiene products, household items, car repairs, and housing help to individuals and families across Connecticut. No program enrollment required. Request help today.";

export const metadata: Metadata = {
  title: "Kindness Connection | Programs",
  description,
  alternates: { canonical: "/programs/kindness-connection" },
};

export default async function KindnessConnectionPage() {
  const pageData = await getPageContent("kindness-connection");
  const hasPuckContent = pageData.content.length > 0;

  return (
    <>
      <WebPageJsonLd
        name="Kindness Connection | Programs | Community of Hope Inc."
        description={description}
        path="/programs/kindness-connection"
      />
      <KindnessConnectionPageContent
        puckContent={hasPuckContent ? <Render config={puckConfig} data={pageData} /> : undefined}
      />
    </>
  );
}
