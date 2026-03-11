import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { TheHousePageContent } from "@/components/pages/programs/TheHousePageContent";

const description =
  "Hope House is a 12-bed, faith-based recovery home for women 18+ in Groton, CT. Mentoring, life skills, vocational certifications, and a family-style community. Beds available — call 860-912-8983.";

export const metadata: Metadata = {
  title: "The House | Programs",
  description,
};

export default function TheHousePage() {
  return (
    <>
      <WebPageJsonLd
        name="The House | Programs | Community of Hope Inc."
        description={description}
        path="/programs/the-house"
      />
      <TheHousePageContent />
    </>
  );
}
