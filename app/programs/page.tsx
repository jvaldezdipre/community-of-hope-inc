import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Hope House recovery home, Kindness Connection, Recovery Coaching, and LeadHerships. Four ways we serve women and families across Connecticut and beyond.";

export const metadata: Metadata = {
  title: "Programs",
  description,
  alternates: { canonical: "/programs" },
};

export default async function ProgramsPage() {
  const pageData = await getPageContent("programs");

  return (
    <>
      <WebPageJsonLd
        name="Programs | Community of Hope Inc."
        description={description}
        path="/programs"
      />
      <PageLayout>
        <Render config={puckConfig} data={pageData} />
      </PageLayout>
    </>
  );
}
