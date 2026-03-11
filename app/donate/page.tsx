import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { DonatePage } from "@/components/pages/donate/DonatePage";

const description =
  "Donate to Community of Hope Inc., a 501(c)(3) in Groton, CT. Your gift supports Hope House, The Kindness Connection, and women rebuilding their lives.";

export const metadata: Metadata = {
  title: "Donate",
  description,
};

export default function Page() {
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
        <DonatePage />
      </PageLayout>
    </>
  );
}
