import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TrustFooter } from "@/components/pages/donate/DonatePage";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Donate to Community of Hope Inc., a 501(c)(3) in Groton, CT. Your gift supports Hope House, The Kindness Connection, and women rebuilding their lives.";

export const metadata: Metadata = {
  title: "Donate",
  description,
  alternates: { canonical: "/donate" },
};

export default async function Page() {
  const pageData = await getPageContent("donate");

  return (
    <>
      <WebPageJsonLd
        name="Donate | Community of Hope Inc."
        description={description}
        path="/donate"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Donate", href: "/donate" },
        ]}
      />
      <PageLayout>
        <Render config={puckConfig} data={pageData} />
        <TrustFooter />
      </PageLayout>
    </>
  );
}
