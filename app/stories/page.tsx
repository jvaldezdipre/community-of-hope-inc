import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { StoriesPageContent } from "@/components/pages/stories/StoriesPageContent";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Read real stories from Hope House graduates, referral partners, and women who rebuilt their lives with Community of Hope Inc. in Groton, CT. Every number represents a life changed.";

export const metadata: Metadata = {
  title: "Stories",
  description,
  alternates: { canonical: "/stories" },
};

export default async function StoriesPage() {
  const pageData = await getPageContent("stories");
  const hasPuckContent = pageData.content.length > 0;

  return (
    <>
      <WebPageJsonLd
        name="Stories of Hope | Community of Hope Inc."
        description={description}
        path="/stories"
      />
      <StoriesPageContent
        puckContent={hasPuckContent ? <Render config={puckConfig} data={pageData} /> : undefined}
      />
    </>
  );
}
