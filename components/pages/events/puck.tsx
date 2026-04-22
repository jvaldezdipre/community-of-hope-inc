import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { DatePickerField } from "@/components/admin/DatePickerField";
import type { EventItem } from "@/lib/constants";
import {
  EventCard as EventCardRender,
  SponsorshipSection,
  PastEventCard,
} from "./EventsPageContent";

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

export type EventsPuckProps = {
  EventCard: EventCardProps;
};

/**
 * Converts the Puck-flavored EventCardProps into the EventItem shape the
 * existing render components already know how to consume. The main shape
 * change is `perks: {text}[]` (Puck) → `perks: string[]` (render component).
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

export const eventsPuckComponents: Config<EventsPuckProps>["components"] = {
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
};
