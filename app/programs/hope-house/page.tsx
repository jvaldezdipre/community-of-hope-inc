import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { TheHousePageContent } from "@/components/pages/programs/TheHousePageContent";

const description =
  "Hope House is a 12-bed, faith-based recovery home for women 18+ in Groton, CT. Mentoring, job readiness, clothing with dignity, and a family-style community. No cost for residents. Call 860-912-8983.";

export const metadata: Metadata = {
  title: "Hope House | Programs",
  description,
  alternates: { canonical: "/programs/hope-house" },
};

export default function TheHousePage() {
  return (
    <>
      <WebPageJsonLd
        name="Hope House | Programs | Community of Hope Inc."
        description={description}
        path="/programs/hope-house"
      />
      <TheHousePageContent />
    </>
  );
}
