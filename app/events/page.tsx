import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd, BreadcrumbJsonLd, EventJsonLd } from "@/components/seo/JsonLd";
import {
  EventCard,
  SponsorshipSection,
  PastEventsSection,
  EmptyEventsState,
} from "@/components/pages/events/EventsPageContent";
import { getPageContent } from "@/lib/cms";
import { puckConfig, puckEventToEventItem, type EventCardProps } from "@/puck.config";

const description =
  "Upcoming events, fundraisers, and community gatherings hosted by Community of Hope Inc. in Groton, CT. Join us and support women in recovery.";

export const metadata: Metadata = {
  title: "Events",
  description,
  alternates: { canonical: "/events" },
};

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

export default async function EventsPage() {
  const pageData = await getPageContent("events");
  const today = todayISO();

  const chromeItems = pageData.content.filter((item) => item.type !== "EventCard");
  const eventItems = pageData.content
    .filter((item) => item.type === "EventCard")
    .map((item) =>
      puckEventToEventItem(item.props as EventCardProps & { id: string }),
    );

  const upcomingEvents = eventItems
    .filter((e) => e.date && e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const pastEvents = eventItems
    .filter((e) => e.date && e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  const chromeData = {
    content: chromeItems,
    root: pageData.root,
  } as typeof pageData;

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
      {upcomingEvents.map((event, i) => (
        <EventJsonLd
          key={`${event.date}-${event.title}-${i}`}
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
            url: event.ticketUrl ?? undefined,
          }))}
        />
      ))}

      <PageLayout>
        {chromeItems.length > 0 && (
          <Render config={puckConfig} data={chromeData} />
        )}

        {upcomingEvents.length > 0 ? (
          <div className="flex flex-col gap-12">
            {upcomingEvents.map((event, i) => (
              <div key={`${event.date}-${event.title}-${i}`}>
                <EventCard event={event} />
                <SponsorshipSection event={event} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyEventsState />
        )}

        <PastEventsSection events={pastEvents} />
      </PageLayout>
    </>
  );
}
