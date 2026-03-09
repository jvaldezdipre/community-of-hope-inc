import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const description =
  "Partners, donors, and supporters who make Community of Hope Inc. possible. Thank you to everyone who helps us restore hope and rebuild lives in southeastern Connecticut.";

export const metadata: Metadata = {
  title: "Supporters",
  description,
};

export default function SupportersPage() {
  return (
    <>
      <WebPageJsonLd
        name="Supporters | Community of Hope Inc."
        description={description}
        path="/supporters"
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
          Our Supporters
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
          We are grateful for every partner, donor, and volunteer who stands with us. Your support makes Hope House, The Kindness Connection, and our recovery programs possible.
        </p>
        <div
          className="rounded-[8px] bg-[#FAF8F5] border border-[#EBEBEB] p-8"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 300, color: "#5A5A5A" }}
        >
          <p>
            Supporters and partner recognition will be featured here. If you&apos;d like to give or partner with us, visit our{" "}
            <Link href="/donate" className="text-[#458CFE] hover:underline">Donate</Link> page or{" "}
            <Link href="/contact" className="text-[#458CFE] hover:underline">Contact</Link> us.
          </p>
        </div>
      </PageLayout>
    </>
  );
}
