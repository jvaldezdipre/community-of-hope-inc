import type { Metadata } from "next";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { HopeHouseApplication } from "@/components/pages/apply/HopeHouseApplication";

const description =
  "Apply for admission to Hope House, a 12-bed faith-based recovery home for women in Groton, CT. Supportive housing, mentoring, and community for women 18+ seeking sobriety and a fresh start.";

export const metadata: Metadata = {
  title: "Apply to Hope House",
  description,
  alternates: { canonical: "/apply-hope-house" },
};

export default function ApplyHopeHousePage() {
  return (
    <>
      <WebPageJsonLd
        name="Apply to Hope House | Community of Hope Inc."
        description={description}
        path="/apply-hope-house"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "Hope House", href: "/programs/hope-house" },
          { name: "Apply", href: "/apply-hope-house" },
        ]}
      />
      <HopeHouseApplication />
    </>
  );
}
