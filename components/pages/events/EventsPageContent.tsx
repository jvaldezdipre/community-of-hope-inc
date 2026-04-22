import { Calendar, MapPin, Clock, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/lib/constants";

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="rounded-[8px] border border-[#EBEBEB] bg-white overflow-hidden">
      <div className="grid md:grid-cols-[380px_1fr] md:gap-12 lg:gap-16 items-stretch">
        {/* Flyer image */}
        <div className="relative bg-[#FAF8F5] min-h-[300px] md:min-h-0">
          {event.image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={event.image}
              alt={`${event.title} event flyer`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Event details */}
        <div className="p-8 md:p-10 flex flex-col">
          <h2
            className="text-[#1A1A1A] mb-1"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.35rem, 2.2vw, 1.65rem)",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            {event.title}
          </h2>
          <p
            className="text-[#458CFE] uppercase mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            {event.tagline}
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center gap-3">
              <Calendar size={16} className="text-[#458CFE] shrink-0" strokeWidth={1.5} />
              <span
                className="text-[#1A1A1A]"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 400 }}
              >
                {formatDate(event.date)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-[#458CFE] shrink-0" strokeWidth={1.5} />
              <span
                className="text-[#3D3D3D]"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
              >
                {event.time}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[#458CFE] shrink-0" strokeWidth={1.5} />
              <span
                className="text-[#3D3D3D]"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
              >
                {event.location}
              </span>
            </div>
          </div>

          <p
            className="text-[#3D3D3D] mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.96rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            {event.description}
          </p>

          {/* Tickets */}
          {event.tickets.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-8">
              {event.tickets.map((t, i) => (
                <div
                  key={`ticket-${i}`}
                  className="bg-[#FAF8F5] rounded-[6px] px-4 py-3 border border-[#EBEBEB]"
                >
                  <span
                    className="block text-[#458CFE] mb-0.5"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                    }}
                  >
                    {t.price}
                  </span>
                  <span
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.84rem",
                      fontWeight: 300,
                    }}
                  >
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto flex flex-wrap items-center gap-4">
            {event.ticketUrl ? (
              <Button
                variant="primary"
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Tickets
              </Button>
            ) : (
              <Button variant="primary" href={`mailto:${event.contactEmail}`}>
                Contact to Reserve
              </Button>
            )}
            {event.contactPhone && (
              <a
                href={`tel:${event.contactPhone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-2 text-[#458CFE] hover:underline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                <Phone size={14} strokeWidth={1.5} />
                {event.contactPhone}
              </a>
            )}
            {event.flyerPdf && (
              <a
                href={event.flyerPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#458CFE] hover:underline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                <FileText size={14} strokeWidth={1.5} />
                Download Flyer
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SponsorshipSection({ event }: { event: EventItem }) {
  if (!event.sponsorships?.length) return null;

  return (
    <section
      className="pt-16 border-t border-[#EBEBEB]"
      style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}
    >
      <h2
        className="text-[#1A1A1A] mb-2"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Become a Sponsor
      </h2>
      <p
        className="text-[#3D3D3D] mb-10 max-w-[640px]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        Align your brand with one of the most respected recovery-focused organizations in southeastern Connecticut.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {event.sponsorships.map((s, si) => (
          <div
            key={`sponsorship-${si}`}
            className="rounded-[8px] border border-[#EBEBEB] bg-white p-6 flex flex-col"
          >
            <span
              className="text-[#458CFE] uppercase mb-1"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
              }}
            >
              {s.tier}
            </span>
            <span
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.4rem",
                fontWeight: 400,
              }}
            >
              {s.price}
            </span>
            <ul className="flex-1 space-y-2 mb-6">
              {s.perks.map((perk, pi) => (
                <li
                  key={`perk-${pi}`}
                  className="text-[#3D3D3D] pl-4 relative"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  <span className="absolute left-0 text-[#458CFE]">&bull;</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button variant="primary" href={`mailto:${event.contactEmail}`}>
          Inquire About Sponsorship
        </Button>
        <span
          className="text-[#3D3D3D]"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", fontWeight: 300 }}
        >
          Program ads also available: $50 to $300
        </span>
      </div>
    </section>
  );
}

export function PastEventCard({ event }: { event: EventItem }) {
  return (
    <div className="rounded-[8px] border border-[#EBEBEB] overflow-hidden">
      <div className="relative h-48 bg-[#FAF8F5]">
        {event.image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={event.image}
            alt={`${event.title} event`}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-5">
        <p
          className="text-[#1A1A1A] mb-1"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "1rem",
            fontWeight: 400,
          }}
        >
          {event.title}
        </p>
        <span
          className="text-[#3D3D3D]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
          }}
        >
          {formatDate(event.date)}
        </span>
      </div>
    </div>
  );
}

export function EmptyEventsState() {
  return (
    <div
      className="rounded-[8px] bg-[#FAF8F5] border border-[#EBEBEB] p-8 text-center"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <p className="text-[#3D3D3D]" style={{ fontSize: "1rem", fontWeight: 300 }}>
        No upcoming events right now. Check back soon or call us at{" "}
        <a href="tel:8609124356" className="text-[#458CFE] hover:underline">
          860-912-4356
        </a>{" "}
        for the latest updates.
      </p>
    </div>
  );
}

export function PastEventsSection({ events }: { events: EventItem[] }) {
  if (events.length === 0) return null;
  return (
    <section
      className="pt-16 border-t border-[#EBEBEB] mt-16"
      style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}
    >
      <h2
        className="text-[#1A1A1A] mb-8"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Past Events
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <PastEventCard key={`${event.date}-${event.title}-${i}`} event={event} />
        ))}
      </div>
    </section>
  );
}
