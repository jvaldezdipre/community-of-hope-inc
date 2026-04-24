import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { HopeHouseHero as HopeHouseHeroRender } from "./HopeHouseHero";
import {
  HopeHouseReceive as HopeHouseReceiveRender,
  type HopeHouseReceiveItem,
} from "./HopeHouseReceive";
import {
  HopeHouseDetails as HopeHouseDetailsRender,
  type HopeHouseDetail,
} from "./HopeHouseDetails";
import {
  HopeHouseProcess as HopeHouseProcessRender,
  type HopeHouseProcessStep,
} from "./HopeHouseProcess";
import { PhotoCarousel, type CarouselPhoto } from "@/components/ui/PhotoCarousel";
import { HopeHouseTestimonial as HopeHouseTestimonialRender } from "./HopeHouseTestimonial";
import {
  HopeHouseGrowth as HopeHouseGrowthRender,
  type HopeHouseGrowthCard,
} from "./HopeHouseGrowth";
import {
  HopeHouseFAQ as HopeHouseFAQRender,
  type HopeHouseFaqItem,
} from "./HopeHouseFAQ";
import { HopeHouseBottomCTA as HopeHouseBottomCTARender } from "./HopeHouseBottomCTA";

export type HopeHouseHeroBlockProps = {
  eyebrow: string;
  title: string;
  mainText: string;
  eligibilityText: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
  image: string;
};

export type HopeHouseReceiveBlockProps = {
  eyebrow: string;
  heading: string;
  pitch: string;
  items: HopeHouseReceiveItem[];
};

export type HopeHouseDetailsBlockProps = {
  heading: string;
  details: HopeHouseDetail[];
};

export type HopeHouseProcessBlockProps = {
  eyebrow: string;
  heading: string;
  backgroundImage: string;
  steps: HopeHouseProcessStep[];
};

export type HopeHouseCarouselBlockProps = {
  eyebrow: string;
  heading: string;
  description: string;
  background: "white" | "beige" | "dark";
  photos: CarouselPhoto[];
};

export type HopeHouseTestimonialBlockProps = {
  quote: string;
  name: string;
  context: string;
};

export type HopeHouseGrowthBlockProps = {
  eyebrow: string;
  heading: string;
  description: string;
  backgroundImage: string;
  cards: HopeHouseGrowthCard[];
};

export type HopeHouseFAQBlockProps = {
  heading: string;
  faqs: HopeHouseFaqItem[];
};

export type HopeHouseBottomCTABlockProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
};

export type HopeHousePuckProps = {
  HopeHouseHeroBlock: HopeHouseHeroBlockProps;
  HopeHouseReceiveBlock: HopeHouseReceiveBlockProps;
  HopeHouseDetailsBlock: HopeHouseDetailsBlockProps;
  HopeHouseProcessBlock: HopeHouseProcessBlockProps;
  HopeHouseCarouselBlock: HopeHouseCarouselBlockProps;
  HopeHouseTestimonialBlock: HopeHouseTestimonialBlockProps;
  HopeHouseGrowthBlock: HopeHouseGrowthBlockProps;
  HopeHouseFAQBlock: HopeHouseFAQBlockProps;
  HopeHouseBottomCTABlock: HopeHouseBottomCTABlockProps;
};

export const hopeHousePuckComponents: Config<HopeHousePuckProps>["components"] = {
  HopeHouseHeroBlock: {
    label: "Hope House hero",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: {
        type: "text",
        label: "Eyebrow (small uppercase label above title)",
      },
      title: { type: "text", label: "Page title" },
      mainText: { type: "textarea", label: "Main pitch paragraph" },
      eligibilityText: {
        type: "textarea",
        label: "Eligibility paragraph (who it's for)",
      },
      buttonLabel: { type: "text", label: "Button label (e.g. Apply Now)" },
      buttonHref: {
        type: "text",
        label: "Button link (e.g. /apply-hope-house)",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (e.g. 860-912-4356). Leave empty to hide.",
      },
      image: {
        type: "custom",
        label: "Hero image",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
    },
    defaultProps: {
      eyebrow: "",
      title: "",
      mainText: "",
      eligibilityText: "",
      buttonLabel: "Apply Now",
      buttonHref: "/apply-hope-house",
      phoneNumber: "",
      image: "",
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseHeroRender {...rest} />,
  },
  HopeHouseReceiveBlock: {
    label: "What Residents Receive",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      pitch: { type: "textarea", label: "Short pitch paragraph" },
      items: {
        type: "array",
        label: "Checklist items (renders 2 columns)",
        defaultItemProps: { title: "", detail: "" },
        getItemSummary: (item) => item.title || "Item",
        arrayFields: {
          title: { type: "text", label: "Title (e.g. Safe Housing)" },
          detail: { type: "text", label: "Detail / short description" },
        },
      },
    },
    defaultProps: {
      eyebrow: "What You'll Receive",
      heading: "Everything you need to start over.",
      pitch: "",
      items: [],
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseReceiveRender {...rest} />,
  },
  HopeHouseDetailsBlock: {
    label: "At a glance (program details)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Section heading" },
      details: {
        type: "array",
        label: "Details (renders 2-3 columns)",
        defaultItemProps: { label: "", value: "" },
        getItemSummary: (item) =>
          [item.label, item.value].filter(Boolean).join(": ") || "Detail",
        arrayFields: {
          label: { type: "text", label: "Label (e.g. Beds)" },
          value: { type: "text", label: "Value (e.g. 12)" },
        },
      },
    },
    defaultProps: {
      heading: "At a glance",
      details: [],
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseDetailsRender {...rest} />,
  },
  HopeHouseProcessBlock: {
    label: "The Path Forward (process steps)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      backgroundImage: {
        type: "custom",
        label: "Background image (dark navy overlay applied automatically)",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      steps: {
        type: "array",
        label: "Steps (renders 4 columns on desktop)",
        defaultItemProps: { number: "", title: "", description: "" },
        getItemSummary: (item) =>
          [item.number, item.title].filter(Boolean).join(". ") || "Step",
        arrayFields: {
          number: { type: "text", label: "Step number (e.g. 1)" },
          title: { type: "text", label: "Step title" },
          description: { type: "textarea", label: "Step description" },
        },
      },
    },
    defaultProps: {
      eyebrow: "The Path Forward",
      heading: "",
      backgroundImage: "/hopehouse1.webp",
      steps: [],
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseProcessRender {...rest} />,
  },
  HopeHouseCarouselBlock: {
    label: "Photo carousel (Inside Hope House)",
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
        getItemSummary: (item) =>
          item.alt || item.caption || "Photo",
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
      eyebrow: "Inside Hope House",
      heading: "A home, not a facility.",
      description: "",
      background: "beige",
      photos: [],
    },
    render: ({ eyebrow, heading, description, background, photos }) => {
      // Filter out rows that don't have an image yet (prevents empty src
      // warnings when staff clicks + to add a new photo before uploading).
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
  HopeHouseTestimonialBlock: {
    label: "Testimonial (quote)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      quote: { type: "textarea", label: "Quote (the testimonial text)" },
      name: { type: "text", label: "Person's name" },
      context: {
        type: "text",
        label: "Context (e.g. 'Hope House graduate, 2023')",
      },
    },
    defaultProps: {
      quote: "",
      name: "",
      context: "",
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseTestimonialRender {...rest} />,
  },
  HopeHouseGrowthBlock: {
    label: "Personal Growth & Leadership (6 cards)",
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
      backgroundImage: {
        type: "custom",
        label: "Atmospheric background image (cream overlay applied automatically)",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      cards: {
        type: "array",
        label: "Cards (renders 2-3 columns, wraps naturally)",
        defaultItemProps: { number: "", title: "", description: "" },
        getItemSummary: (item) =>
          [item.number, item.title].filter(Boolean).join(". ") || "Card",
        arrayFields: {
          number: { type: "text", label: "Number (e.g. 01, 02)" },
          title: { type: "text", label: "Card title" },
          description: { type: "textarea", label: "Card description" },
        },
      },
    },
    defaultProps: {
      eyebrow: "Grow, Lead, Give Back",
      heading: "",
      description: "",
      backgroundImage: "/hope2.webp",
      cards: [],
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseGrowthRender {...rest} />,
  },
  HopeHouseFAQBlock: {
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
    render: ({ puck: _puck, ...rest }) => <HopeHouseFAQRender {...rest} />,
  },
  HopeHouseBottomCTABlock: {
    label: "Bottom CTA (Ready to take the next step?)",
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
        label: "Button link (e.g. /apply-hope-house)",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (e.g. 860-912-4356). Leave empty to hide.",
      },
    },
    defaultProps: {
      heading: "Ready to take the next step?",
      description: "",
      buttonLabel: "Apply Now",
      buttonHref: "/apply-hope-house",
      phoneNumber: "",
    },
    render: ({ puck: _puck, ...rest }) => <HopeHouseBottomCTARender {...rest} />,
  },
};
