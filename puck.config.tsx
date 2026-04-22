import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { DatePickerField } from "@/components/admin/DatePickerField";
import {
  EventCard as EventCardRender,
  SponsorshipSection,
  PastEventCard,
} from "@/components/pages/events/EventsPageContent";
import type { EventItem } from "@/lib/constants";

export type EventCardProps = {
  title: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  flyerPdf: string;
  ticketUrl: string;
  contactEmail: string;
  contactPhone: string;
  tickets: { label: string; price: string }[];
  sponsorships: {
    tier: string;
    price: string;
    perks: { text: string }[];
  }[];
};

export type PuckProps = {
  Heading: { text: string };
  Paragraph: { text: string };
  EventCard: EventCardProps;
};

/**
 * Converts the Puck-flavored EventCardProps into the EventItem shape the
 * existing card components already know how to render. The main shape change
 * is `perks: {text}[]` (Puck) → `perks: string[]` (render component).
 */
export function puckEventToEventItem(
  props: EventCardProps & { id: string },
): EventItem {
  return {
    slug: props.id,
    title: props.title,
    tagline: props.tagline,
    date: props.date,
    time: props.time,
    location: props.location,
    description: props.description,
    image: props.image,
    flyerPdf: props.flyerPdf || undefined,
    tickets: props.tickets ?? [],
    ticketUrl: props.ticketUrl || null,
    contactEmail: props.contactEmail,
    contactPhone: props.contactPhone,
    sponsorships: (props.sponsorships ?? []).map((s) => ({
      tier: s.tier,
      price: s.price,
      perks: (s.perks ?? []).map((p) => p.text),
    })),
  };
}

export const puckConfig: Config<PuckProps> = {
  categories: {
    chrome: {
      title: "Page content",
      components: ["Heading", "Paragraph"],
    },
    events: {
      title: "Events",
      components: ["EventCard"],
    },
  },
  components: {
    Heading: {
      label: "Page heading (H1)",
      fields: {
        text: { type: "text", label: "Heading text" },
      },
      defaultProps: {
        text: "Page title",
      },
      render: ({ text }) => (
        <h1
          className="text-[#1A1A1A] mb-4"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {text}
        </h1>
      ),
    },
    Paragraph: {
      label: "Intro paragraph",
      fields: {
        text: { type: "textarea", label: "Paragraph text" },
      },
      defaultProps: {
        text: "Introductory paragraph.",
      },
      render: ({ text }) => (
        <p
          className="text-[#3D3D3D] mb-16 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {text}
        </p>
      ),
    },
    EventCard: {
      label: "Event",
      fields: {
        title: { type: "text", label: "Event title" },
        tagline: { type: "text", label: "Tagline (short subtitle)" },
        date: {
          type: "custom",
          label: "Date",
          render: ({ value, onChange, readOnly }) => (
            <DatePickerField
              value={value as string | undefined}
              onChange={onChange}
              readOnly={readOnly}
            />
          ),
        },
        time: { type: "text", label: "Time (e.g. 6 PM to 10 PM)" },
        location: { type: "text", label: "Location / address" },
        description: { type: "textarea", label: "Description" },
        image: {
          type: "custom",
          label: "Event flyer image",
          render: ({ value, onChange, readOnly }) => (
            <ImageUploadField
              value={value as string | undefined}
              onChange={onChange}
              readOnly={readOnly}
            />
          ),
        },
        flyerPdf: { type: "text", label: "Flyer PDF URL (optional)" },
        ticketUrl: { type: "text", label: "Ticket URL (optional — Eventbrite etc.)" },
        contactEmail: { type: "text", label: "Contact email" },
        contactPhone: { type: "text", label: "Contact phone" },
        tickets: {
          type: "array",
          label: "Ticket options",
          defaultItemProps: { label: "", price: "" },
          getItemSummary: (item) =>
            [item.price, item.label].filter(Boolean).join(" — ") || "Ticket",
          arrayFields: {
            price: { type: "text", label: "Price (e.g. $75)" },
            label: { type: "text", label: "Description (e.g. Individual Ticket)" },
          },
        },
        sponsorships: {
          type: "array",
          label: "Sponsorship tiers",
          defaultItemProps: { tier: "", price: "", perks: [] },
          getItemSummary: (item) =>
            [item.tier, item.price].filter(Boolean).join(" — ") || "Sponsorship tier",
          arrayFields: {
            tier: { type: "text", label: "Tier name (e.g. Trailblazer)" },
            price: { type: "text", label: "Price (e.g. $2,500)" },
            perks: {
              type: "array",
              label: "Perks included",
              defaultItemProps: { text: "" },
              getItemSummary: (item) => item.text || "Perk",
              arrayFields: {
                text: { type: "text", label: "Perk description" },
              },
            },
          },
        },
      },
      defaultProps: {
        title: "New event",
        tagline: "",
        date: "",
        time: "",
        location: "",
        description: "",
        image: "",
        flyerPdf: "",
        ticketUrl: "",
        contactEmail: "Annette@4coh.com",
        contactPhone: "860-912-4356",
        tickets: [],
        sponsorships: [],
      },
      render: (props) => {
        const today = (props.puck?.metadata?.today as string | undefined) ?? "";
        const isPast = today && props.date ? props.date < today : false;
        const event = puckEventToEventItem(props);

        if (isPast) {
          return (
            <div className="max-w-sm mb-4">
              <PastEventCard event={event} />
            </div>
          );
        }

        return (
          <div className="mb-12">
            <EventCardRender event={event} />
            <SponsorshipSection event={event} />
          </div>
        );
      },
    },
  },
};
