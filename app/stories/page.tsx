import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { StoriesPageContent } from "@/components/pages/stories/StoriesPageContent";

const description =
  "Read real stories from Hope House graduates, referral partners, and women who rebuilt their lives with Community of Hope Inc. in Groton, CT. Every number represents a life changed.";

export const metadata: Metadata = {
  title: "Stories",
  description,
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <WebPageJsonLd
        name="Stories of Hope | Community of Hope Inc."
        description={description}
        path="/stories"
      />
      <StoriesPageContent />
    </>
  );
}
