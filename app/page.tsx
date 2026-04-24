import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { HomePage } from "@/components/pages/home/HomePage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Community of Hope Inc. Faith-based recovery and community outreach in Groton, CT. Hope House, The Kindness Connection, and CCAR Recovery Coach training. 15+ years of transformed lives.";

export const metadata: Metadata = {
  title: {
    absolute: "Community of Hope Inc. | Hope House & Recovery | Groton, CT",
  },
  description,
  alternates: { canonical: "/" },
};

export default async function Page() {
  const pageData = await getPageContent("home");
  const hasPuckContent = pageData.content.length > 0;

  return (
    <>
      <WebPageJsonLd
        name="Community of Hope Inc. | Hope House & Recovery | Groton, CT"
        description={description}
        path="/"
      />
      <HomePage
        puckContent={hasPuckContent ? <Render config={puckConfig} data={pageData} /> : undefined}
      />
    </>
  );
}
