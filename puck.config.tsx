import type { Config } from "@measured/puck";
import { sharedPuckComponents, type SharedPuckProps } from "@/puck/shared";
import { globalPuckComponents, type GlobalPuckProps } from "@/puck/global";
import {
  eventsPuckComponents,
  type EventsPuckProps,
} from "@/components/pages/events/puck";
import {
  donatePuckComponents,
  type DonatePuckProps,
} from "@/components/pages/donate/puck";
import {
  contactPuckComponents,
  type ContactPuckProps,
} from "@/components/pages/contact/puck";
import {
  aboutPuckComponents,
  type AboutPuckProps,
} from "@/components/pages/about/puck";
import {
  programsPuckComponents,
  type ProgramsPuckProps,
} from "@/components/pages/programs/puck";
import {
  hopeHousePuckComponents,
  type HopeHousePuckProps,
} from "@/components/pages/programs/hope-house/puck";
import {
  leadHershipsPuckComponents,
  type LeadHershipsPuckProps,
} from "@/components/pages/programs/leadherships/puck";
import {
  kindnessConnectionPuckComponents,
  type KindnessConnectionPuckProps,
} from "@/components/pages/programs/kindness-connection/puck";
import {
  storiesPuckComponents,
  type StoriesPuckProps,
} from "@/components/pages/stories/puck";
import {
  supportersPuckComponents,
  type SupportersPuckProps,
} from "@/components/pages/supporters/puck";

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
export type {
  ContactSidebarProps,
  ContactPuckProps,
} from "@/components/pages/contact/puck";
export type {
  AboutHeroBlockProps,
  AboutLeadershipBlockProps,
  AboutPartnersBlockProps,
  AboutPuckProps,
} from "@/components/pages/about/puck";
export type {
  ProgramsListBlockProps,
  ProgramsHelpCTAProps,
  ProgramsPuckProps,
} from "@/components/pages/programs/puck";
export type {
  HopeHouseHeroBlockProps,
  HopeHousePuckProps,
} from "@/components/pages/programs/hope-house/puck";
export type {
  LeadHershipsHeroBlockProps,
  LeadHershipsPuckProps,
} from "@/components/pages/programs/leadherships/puck";
export type {
  KindnessConnectionHeroBlockProps,
  KindnessConnectionPuckProps,
} from "@/components/pages/programs/kindness-connection/puck";
export type {
  StoriesHeroBlockProps,
  StoriesFeaturedStoryBlockProps,
  StoriesPuckProps,
} from "@/components/pages/stories/puck";
export type {
  SupportersHeroBlockProps,
  SupportersPuckProps,
} from "@/components/pages/supporters/puck";
export type { SharedPuckProps } from "@/puck/shared";
export type { GlobalSocialLinksProps, GlobalPuckProps } from "@/puck/global";

export type PuckProps = SharedPuckProps &
  GlobalPuckProps &
  EventsPuckProps &
  DonatePuckProps &
  ContactPuckProps &
  AboutPuckProps &
  ProgramsPuckProps &
  HopeHousePuckProps &
  LeadHershipsPuckProps &
  KindnessConnectionPuckProps &
  StoriesPuckProps &
  SupportersPuckProps;

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
    contact: {
      title: "Contact page",
      // ContactSidebar is seeded and locked — staff edits the phone list +
      // labels in the right sidebar, no drawer items needed.
      components: [],
    },
    global: {
      title: "Global settings",
      // GlobalSocialLinks is seeded and locked. Not tied to any public page;
      // its values are pulled into the footer + contact sidebar at render time.
      components: [],
    },
    about: {
      title: "About page",
      // AboutHeroBlock is seeded and locked — staff edits story, milestones,
      // and the media slot (video or image) in the right sidebar.
      components: [],
    },
    programs: {
      title: "Programs page",
      // ProgramsListBlock + ProgramsHelpCTA are seeded and locked. Staff
      // edits program cards (4 fixed) and the "Not sure?" CTA in the sidebar.
      components: [],
    },
    "hope-house": {
      title: "Hope House page",
      // HopeHouseHeroBlock is seeded and locked. More sections added per round.
      components: [],
    },
    leadherships: {
      title: "LeadHerships page",
      // LeadHershipsHeroBlock is seeded and locked. More sections added per round.
      components: [],
    },
    "kindness-connection": {
      title: "Kindness Connection page",
      // KindnessConnectionHeroBlock is seeded and locked. More sections added per round.
      components: [],
    },
    stories: {
      title: "Stories page",
      // StoriesHeroBlock is seeded and locked. More sections added per round.
      components: [],
    },
    supporters: {
      title: "Supporters page",
      // SupportersHeroBlock is seeded and locked. More sections added per round.
      components: [],
    },
  },
  components: {
    ...sharedPuckComponents,
    ...globalPuckComponents,
    ...eventsPuckComponents,
    ...donatePuckComponents,
    ...contactPuckComponents,
    ...aboutPuckComponents,
    ...programsPuckComponents,
    ...hopeHousePuckComponents,
    ...leadHershipsPuckComponents,
    ...kindnessConnectionPuckComponents,
    ...storiesPuckComponents,
    ...supportersPuckComponents,
  },
};
