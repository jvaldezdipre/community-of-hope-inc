import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { EventsPageContent } from "@/components/pages/events/EventsPageContent";

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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events" },
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
          Events
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
          Join us at upcoming fundraisers, community gatherings, and events that support our mission.
        </p>
        <EventsPageContent />
      </PageLayout>
    </>
  );
}
