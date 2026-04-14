import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd, BreadcrumbJsonLd, EventJsonLd } from "@/components/seo/JsonLd";
import { EventsPageContent } from "@/components/pages/events/EventsPageContent";
import { getUpcomingEvents } from "@/lib/constants";

const description =
  "Upcoming events, fundraisers, and community gatherings hosted by Community of Hope Inc. in Groton, CT. Join us and support women in recovery.";

export const metadata: Metadata = {
  title: "Events",
  description,
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
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
      {upcomingEvents.map((event) => (
        <EventJsonLd
          key={event.slug}
          name={event.title}
          description={event.description}
          startDate={`${event.date}T18:00:00-04:00`}
          endDate={`${event.date}T22:00:00-04:00`}
          locationName={event.location.split(",")[0]?.trim() ?? event.location}
          locationAddress={event.location}
          image={event.image}
          offers={event.tickets.map((t) => ({
            name: t.label,
            price: t.price,
            url: event.ticketUrl,
          }))}
        />
      ))}
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
          className="text-[#3D3D3D] mb-16 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
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
