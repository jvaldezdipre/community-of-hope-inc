import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { KindnessConnectionPageContent } from "@/components/pages/programs/KindnessConnectionPageContent";

const description =
  "Kindness Connection provides free food, clothing, hygiene products, household items, car repairs, and housing help to individuals and families across Connecticut. No program enrollment required — request help today.";

export const metadata: Metadata = {
  title: "Kindness Connection | Programs",
  description,
};

export default function KindnessConnectionPage() {
  return (
    <>
      <WebPageJsonLd
        name="Kindness Connection | Programs | Community of Hope Inc."
        description={description}
        path="/programs/kindness-connection"
      />
      <KindnessConnectionPageContent />
    </>
  );
}
