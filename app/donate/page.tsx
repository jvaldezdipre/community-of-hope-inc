import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const description =
  "Donate to Community of Hope Inc., a 501(c)(3) in Groton, CT. Your gift supports Hope House, The Kindness Connection, and women rebuilding their lives.";

export const metadata: Metadata = {
  title: "Donate",
  description,
};

export default function DonatePage() {
  return (
    <>
      <WebPageJsonLd
        name="Donate | Community of Hope Inc."
        description={description}
        path="/donate"
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
          className="text-[#5A5A5A] mb-12 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Community of Hope Inc. is a 501(c)(3) public charity. Your tax-deductible gift helps us provide recovery housing, The Kindness Connection, and vocational training for women in southeastern Connecticut.
        </p>
        <div className="rounded-[8px] bg-[#458CFE]/5 border border-[#458CFE]/20 p-8 max-w-[560px]">
          <p
            className="text-[#1A1A1A] mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            To give by check, mail to:
          </p>
          <p
            className="text-[#5A5A5A] mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Community of Hope Inc.<br />
            20 Grove Avenue<br />
            Groton, CT 06340
          </p>
          <p
            className="text-[#5A5A5A]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            EIN 26-0109933. For other ways to give or to discuss a larger gift, please <Link href="/contact" className="text-[#458CFE] hover:underline">contact us</Link>.
          </p>
        </div>
      </PageLayout>
    </>
  );
}
