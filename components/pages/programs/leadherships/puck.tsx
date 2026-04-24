import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { LeadHershipsHero as LeadHershipsHeroRender } from "./LeadHershipsHero";
import {
  LeadHershipsHowItWorks as LeadHershipsHowItWorksRender,
  type LeadHershipsHowItWorksItem,
} from "./LeadHershipsHowItWorks";
import { LeadHershipsUpcomingEvent as LeadHershipsUpcomingEventRender } from "./LeadHershipsUpcomingEvent";
import {
  LeadHershipsSponsorship as LeadHershipsSponsorshipRender,
  type LeadHershipsSponsorshipTier,
} from "./LeadHershipsSponsorship";
import { PhotoCarousel, type CarouselPhoto } from "@/components/ui/PhotoCarousel";
import {
  LeadHershipsGetInvolved as LeadHershipsGetInvolvedRender,
  type LeadHershipsGetInvolvedCard,
} from "./LeadHershipsGetInvolved";
import {
  LeadHershipsFAQ as LeadHershipsFAQRender,
  type LeadHershipsFaqItem,
} from "./LeadHershipsFAQ";
import { LeadHershipsBottomCTA as LeadHershipsBottomCTARender } from "./LeadHershipsBottomCTA";
import { DatePickerField } from "@/components/admin/DatePickerField";

export type LeadHershipsHeroBlockProps = {
  backgroundImage: string;
  eyebrow: string;
  logoImage: string;
  logoAlt: string;
  quote: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
};

export type LeadHershipsHowItWorksBlockProps = {
  eyebrow: string;
  heading: string;
  pitch: string;
  items: LeadHershipsHowItWorksItem[];
};

export type LeadHershipsUpcomingEventBlockProps = {
  eyebrow: string;
  title: string;
  dateISO: string;
  dateDisplay: string;
  location: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
};

export type LeadHershipsSponsorshipBlockProps = {
  eyebrow: string;
  heading: string;
  tiers: LeadHershipsSponsorshipTier[];
  footnote: string;
};

export type LeadHershipsCarouselBlockProps = {
  eyebrow: string;
  heading: string;
  description: string;
  background: "white" | "beige" | "dark";
  photos: CarouselPhoto[];
};

export type LeadHershipsGetInvolvedBlockProps = {
  cards: LeadHershipsGetInvolvedCard[];
};

export type LeadHershipsFAQBlockProps = {
  heading: string;
  faqs: LeadHershipsFaqItem[];
};

export type LeadHershipsBottomCTABlockProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
};

export type LeadHershipsPuckProps = {
  LeadHershipsHeroBlock: LeadHershipsHeroBlockProps;
  LeadHershipsHowItWorksBlock: LeadHershipsHowItWorksBlockProps;
  LeadHershipsUpcomingEventBlock: LeadHershipsUpcomingEventBlockProps;
  LeadHershipsSponsorshipBlock: LeadHershipsSponsorshipBlockProps;
  LeadHershipsCarouselBlock: LeadHershipsCarouselBlockProps;
  LeadHershipsGetInvolvedBlock: LeadHershipsGetInvolvedBlockProps;
  LeadHershipsFAQBlock: LeadHershipsFAQBlockProps;
  LeadHershipsBottomCTABlock: LeadHershipsBottomCTABlockProps;
};

export const leadHershipsPuckComponents: Config<LeadHershipsPuckProps>["components"] = {
  LeadHershipsHeroBlock: {
    label: "LeadHerships hero",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      backgroundImage: {
        type: "custom",
        label: "Background image (shown behind the hero with a white gradient on the left)",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      eyebrow: {
        type: "text",
        label: "Eyebrow (small uppercase label above logo)",
      },
      logoImage: {
        type: "custom",
        label: "Logo image (used instead of a text title)",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      logoAlt: {
        type: "text",
        label: "Logo alt text (describes the logo for screen readers + SEO)",
      },
      quote: {
        type: "textarea",
        label: "Italic quote (shown above the description, quotes added automatically)",
      },
      description: {
        type: "textarea",
        label: "Main description paragraph",
      },
      buttonLabel: {
        type: "text",
        label: "Button label (e.g. Nominate an Honoree)",
      },
      buttonHref: {
        type: "text",
        label: "Button link (https:// for external, /path for internal)",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (e.g. 860-912-4356). Leave empty to hide.",
      },
    },
    defaultProps: {
      backgroundImage: "",
      eyebrow: "",
      logoImage: "",
      logoAlt: "LeadHerships",
      quote: "",
      description: "",
      buttonLabel: "Nominate an Honoree",
      buttonHref: "",
      phoneNumber: "",
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsHeroRender {...rest} />,
  },
  LeadHershipsHowItWorksBlock: {
    label: "How It Works (beige, heading + 4 items)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      pitch: { type: "textarea", label: "Short pitch paragraph (shown under heading)" },
      items: {
        type: "array",
        label: "Checklist items (renders 2 columns with checkmarks)",
        defaultItemProps: { title: "", detail: "" },
        getItemSummary: (item) => item.title || "Item",
        arrayFields: {
          title: { type: "text", label: "Title (e.g. Host Invites Partners)" },
          detail: { type: "textarea", label: "Detail / short description" },
        },
      },
    },
    defaultProps: {
      eyebrow: "How It Works",
      heading: "Honoring women who lead by serving.",
      pitch: "",
      items: [],
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsHowItWorksRender {...rest} />,
  },
  LeadHershipsUpcomingEventBlock: {
    label: "Upcoming Event (title, date, 2 buttons)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      title: { type: "text", label: "Event title" },
      dateISO: {
        type: "custom",
        label: "Event date (used for accessibility + SEO)",
        render: ({ value, onChange, readOnly }) => (
          <DatePickerField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      dateDisplay: {
        type: "text",
        label: "Date as shown on the page (e.g. Thursday, October 15, 2026)",
      },
      location: { type: "text", label: "Location (e.g. Groton, Connecticut)" },
      description: { type: "textarea", label: "Event description" },
      primaryButtonLabel: { type: "text", label: "Primary button label" },
      primaryButtonHref: {
        type: "text",
        label: "Primary button link (https:// for external, /path for internal)",
      },
      secondaryButtonLabel: { type: "text", label: "Secondary button label" },
      secondaryButtonHref: {
        type: "text",
        label: "Secondary button link (tel:, mailto:, https://, or /path)",
      },
    },
    defaultProps: {
      eyebrow: "Upcoming Event",
      title: "",
      dateISO: "",
      dateDisplay: "",
      location: "",
      description: "",
      primaryButtonLabel: "Nominate an Honoree",
      primaryButtonHref: "",
      secondaryButtonLabel: "Become a Sponsor",
      secondaryButtonHref: "",
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsUpcomingEventRender {...rest} />,
  },
  LeadHershipsSponsorshipBlock: {
    label: "Sponsorship Tiers (dark, 3-column grid)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      tiers: {
        type: "array",
        label: "Tiers (add, remove, or reorder; wraps naturally)",
        defaultItemProps: {
          name: "",
          price: "",
          available: "",
          benefits: [],
        },
        getItemSummary: (item) =>
          [item.price, item.name].filter(Boolean).join(" — ") || "Tier",
        arrayFields: {
          name: { type: "text", label: "Tier name (e.g. Gold Sponsor)" },
          price: { type: "text", label: "Price label (e.g. $5,000)" },
          available: {
            type: "text",
            label: "Availability (e.g. 1 available). Leave empty to hide.",
          },
          benefits: {
            type: "array",
            label: "Benefits (one bullet per row)",
            defaultItemProps: { text: "" },
            getItemSummary: (item) => item.text || "Benefit",
            arrayFields: {
              text: { type: "textarea", label: "Benefit text" },
            },
          },
        },
      },
      footnote: {
        type: "text",
        label: "Footnote under the grid (e.g. Custom packages available.)",
      },
    },
    defaultProps: {
      eyebrow: "Sponsorship Packages",
      heading: "",
      tiers: [],
      footnote: "",
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsSponsorshipRender {...rest} />,
  },
  LeadHershipsCarouselBlock: {
    label: "Past Events photo carousel",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      description: { type: "textarea", label: "Description paragraph" },
      background: {
        type: "radio",
        label: "Section background",
        options: [
          { label: "Beige (matches page chrome)", value: "beige" },
          { label: "White", value: "white" },
          { label: "Dark navy", value: "dark" },
        ],
      },
      photos: {
        type: "array",
        label: "Photos (add, remove, or reorder via drag)",
        defaultItemProps: { src: "", alt: "", caption: "" },
        getItemSummary: (item) => item.alt || item.caption || "Photo",
        arrayFields: {
          src: {
            type: "custom",
            label: "Photo",
            render: ({ value, onChange, readOnly }) => (
              <ImageUploadField
                value={value as string | undefined}
                onChange={onChange}
                readOnly={readOnly}
              />
            ),
          },
          alt: {
            type: "text",
            label:
              "Alt text (describes the image for screen readers + SEO — required)",
          },
          caption: {
            type: "textarea",
            label: "Caption (optional, shown under the photo)",
          },
        },
      },
    },
    defaultProps: {
      eyebrow: "Past Events",
      heading: "A night of honor, community, and celebration.",
      description: "",
      background: "beige",
      photos: [],
    },
    render: ({ eyebrow, heading, description, background, photos }) => {
      // Filter out rows without an image yet (prevents empty src warnings
      // when staff clicks + to add a new photo before uploading).
      const validPhotos = photos.filter((p) => p.src);
      return (
        <PhotoCarousel
          photos={validPhotos}
          eyebrow={eyebrow || undefined}
          heading={heading || undefined}
          description={description || undefined}
          background={background}
        />
      );
    },
  },
  LeadHershipsGetInvolvedBlock: {
    label: "Get Involved (2 cards: Volunteer + Donate/Contribute)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      cards: {
        type: "array",
        label: "Cards (renders 2 per row)",
        defaultItemProps: { title: "", body: "", bullets: [] },
        getItemSummary: (item) => item.title || "Card",
        arrayFields: {
          title: { type: "text", label: "Card title" },
          body: {
            type: "textarea",
            label: "Body paragraph (shown under the title)",
          },
          bullets: {
            type: "array",
            label: "Bullet list (optional, shown under the body)",
            defaultItemProps: { text: "" },
            getItemSummary: (item) => item.text || "Bullet",
            arrayFields: {
              text: { type: "text", label: "Bullet text" },
            },
          },
        },
      },
    },
    defaultProps: {
      cards: [],
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsGetInvolvedRender {...rest} />,
  },
  LeadHershipsFAQBlock: {
    label: "FAQ (Common Questions)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Section heading" },
      faqs: {
        type: "array",
        label: "Questions (accordion, click to expand)",
        defaultItemProps: { question: "", answer: "", helpfulLinks: [] },
        getItemSummary: (item) => item.question || "Question",
        arrayFields: {
          question: { type: "text", label: "Question" },
          answer: { type: "textarea", label: "Answer" },
          helpfulLinks: {
            type: "array",
            label: "Helpful links (optional, shown below the answer)",
            defaultItemProps: { label: "", url: "" },
            getItemSummary: (item) => item.label || "Link",
            arrayFields: {
              label: { type: "text", label: "Link label" },
              url: {
                type: "text",
                label: "URL (tel:, mailto:, https://, or internal /path)",
              },
            },
          },
        },
      },
    },
    defaultProps: {
      heading: "Common Questions",
      faqs: [],
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsFAQRender {...rest} />,
  },
  LeadHershipsBottomCTABlock: {
    label: "Bottom CTA (Be part of LeadHerships)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Heading" },
      description: { type: "textarea", label: "Description paragraph" },
      buttonLabel: { type: "text", label: "Button label" },
      buttonHref: {
        type: "text",
        label: "Button link (https:// for external, /path for internal)",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (e.g. 860-912-4356). Leave empty to hide.",
      },
    },
    defaultProps: {
      heading: "Be part of LeadHerships.",
      description: "",
      buttonLabel: "Nominate an Honoree",
      buttonHref: "",
      phoneNumber: "",
    },
    render: ({ puck: _puck, ...rest }) => <LeadHershipsBottomCTARender {...rest} />,
  },
};
