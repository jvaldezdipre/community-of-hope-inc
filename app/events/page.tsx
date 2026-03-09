import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const description =
  "Upcoming events, fundraisers, and community gatherings hosted by Community of Hope Inc. in Groton, CT. Join us and support women in recovery.";

export const metadata: Metadata = {
  title: "Events",
  description,
};

export default function EventsPage() {
  return (
    <>
      <WebPageJsonLd
        name="Events | Community of Hope Inc."
        description={description}
        path="/events"
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
          Events
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
          Join us at upcoming fundraisers, community gatherings, and events that support our mission. Check back for new dates or contact us to get involved.
        </p>
        <div
          className="rounded-[8px] bg-[#FAF8F5] border border-[#EBEBEB] p-8 text-center"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <p className="text-[#5A5A5A]" style={{ fontSize: "0.95rem", fontWeight: 300 }}>
            New events will be posted here. For the latest updates, call us at{" "}
            <a href="tel:8609128983" className="text-[#458CFE] hover:underline">
              860-912-8983
            </a>{" "}
            or visit our <Link href="/contact" className="text-[#458CFE] hover:underline">Contact</Link> page.
          </p>
        </div>
      </PageLayout>
    </>
  );
}
