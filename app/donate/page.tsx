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
        <h1
          className="text-[#1A1A1A] mb-4"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Donate
        </h1>
        <p
          className="text-[#5A5A5A] mb-16 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Every gift helps a woman rebuild her life. Your donation goes directly to Hope House, Kindness Connection, and our recovery programs.
        </p>
        <DonatePage />
      </PageLayout>
    </>
  );
}
