import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { ProgramPageContent } from "@/components/pages/programs/ProgramPageContent";
import { getProgramBySlug } from "@/lib/constants";

const slug = "recovery-coaching";
const program = getProgramBySlug(slug)!;

export const metadata: Metadata = {
  title: `${program.title} | Programs`,
  description: program.description,
};

export default function RecoveryCoachingPage() {
  return (
    <>
      <WebPageJsonLd
        name={`${program.title} | Programs | Community of Hope Inc.`}
        description={program.description}
        path={`/programs/${slug}`}
      />
      <ProgramPageContent slug={slug} />
    </>
  );
}
