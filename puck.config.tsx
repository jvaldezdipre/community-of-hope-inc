import type { Config } from "@measured/puck";
import { sharedPuckComponents, type SharedPuckProps } from "@/puck/shared";
import {
  eventsPuckComponents,
  type EventsPuckProps,
} from "@/components/pages/events/puck";
import {
  donatePuckComponents,
  type DonatePuckProps,
} from "@/components/pages/donate/puck";

// Re-export per-page types + helpers so existing imports from "@/puck.config"
// keep working. New code should import directly from the page's puck.tsx.
export type { EventCardProps, EventsPuckProps } from "@/components/pages/events/puck";
export { puckEventToEventItem } from "@/components/pages/events/puck";
export type {
  DonatePaymentMethod,
  DonatePaymentsBlockProps,
  DonateImpactSectionProps,
  DonatePaymentCardProps,
  DonatePaymentGridProps,
  DonatePuckProps,
} from "@/components/pages/donate/puck";
export type { SharedPuckProps } from "@/puck/shared";

export type PuckProps = SharedPuckProps & EventsPuckProps & DonatePuckProps;

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
    donate: {
      title: "Donate page",
      // DonatePaymentsBlock is always seeded on the page and locked — staff
      // edits its array of methods in the right sidebar. DonatePaymentCard
      // and DonatePaymentGrid stay registered for legacy data shapes but are
      // intentionally absent from the drawer.
      components: ["DonateImpactSection"],
    },
  },
  components: {
    ...sharedPuckComponents,
    ...eventsPuckComponents,
    ...donatePuckComponents,
  },
};
