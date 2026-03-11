import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { ProgramsPageTitle } from "@/components/pages/programs/ProgramsPageTitle";
import { ProgramsOverview } from "@/components/pages/programs/ProgramsOverview";

const description =
  "The House recovery home, Kindness Connection, Recovery Coaching, and LeadHERship. Four ways we serve women and families across Connecticut and beyond.";

export const metadata: Metadata = {
  title: "Programs",
  description,
};

export default function ProgramsPage() {
  return (
    <>
      <WebPageJsonLd
        name="Programs | Community of Hope Inc."
        description={description}
        path="/programs"
      />
      <PageLayout>
        <ProgramsPageTitle />
        <ProgramsOverview />
      </PageLayout>
    </>
  );
}
