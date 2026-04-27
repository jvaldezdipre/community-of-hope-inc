import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { KindnessConnectionHero as KindnessConnectionHeroRender } from "./KindnessConnectionHero";
import {
  KindnessConnectionReceive as KindnessConnectionReceiveRender,
  type KindnessConnectionReceiveItem,
} from "./KindnessConnectionReceive";
import {
  KindnessConnectionDetails as KindnessConnectionDetailsRender,
  type KindnessConnectionDetail,
} from "./KindnessConnectionDetails";
import {
  KindnessConnectionProcess as KindnessConnectionProcessRender,
  type KindnessConnectionProcessStep,
} from "./KindnessConnectionProcess";
import {
  KindnessConnectionAudience as KindnessConnectionAudienceRender,
  type KindnessConnectionAudienceItem,
} from "./KindnessConnectionAudience";
import {
  KindnessConnectionFAQ as KindnessConnectionFAQRender,
  type KindnessConnectionFaqItem,
} from "./KindnessConnectionFAQ";
import { KindnessConnectionBottomCTA as KindnessConnectionBottomCTARender } from "./KindnessConnectionBottomCTA";

export type KindnessConnectionHeroBlockProps = {
  eyebrow: string;
  title: string;
  mainText: string;
  eligibilityText: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
  image: string;
};

export type KindnessConnectionReceiveBlockProps = {
  eyebrow: string;
  heading: string;
  pitch: string;
  items: KindnessConnectionReceiveItem[];
};

export type KindnessConnectionDetailsBlockProps = {
  heading: string;
  details: KindnessConnectionDetail[];
};

export type KindnessConnectionProcessBlockProps = {
  eyebrow: string;
  heading: string;
  steps: KindnessConnectionProcessStep[];
};

export type KindnessConnectionAudienceBlockProps = {
  eyebrow: string;
  heading: string;
  items: KindnessConnectionAudienceItem[];
};

export type KindnessConnectionFAQBlockProps = {
  heading: string;
  faqs: KindnessConnectionFaqItem[];
};

export type KindnessConnectionBottomCTABlockProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
};

export type KindnessConnectionPuckProps = {
  KindnessConnectionHeroBlock: KindnessConnectionHeroBlockProps;
  KindnessConnectionReceiveBlock: KindnessConnectionReceiveBlockProps;
  KindnessConnectionDetailsBlock: KindnessConnectionDetailsBlockProps;
  KindnessConnectionProcessBlock: KindnessConnectionProcessBlockProps;
  KindnessConnectionAudienceBlock: KindnessConnectionAudienceBlockProps;
  KindnessConnectionFAQBlock: KindnessConnectionFAQBlockProps;
  KindnessConnectionBottomCTABlock: KindnessConnectionBottomCTABlockProps;
};

export const kindnessConnectionPuckComponents: Config<KindnessConnectionPuckProps>["components"] = {
  KindnessConnectionHeroBlock: {
    label: "Kindness Connection hero",
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
        label: "Eligibility paragraph (who it's open to)",
      },
      buttonLabel: { type: "text", label: "Button label (e.g. Call Us)" },
      buttonHref: {
        type: "text",
        label: "Button link (tel:, mailto:, https://, or /path)",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (e.g. 860-856-5655). Leave empty to hide.",
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
      buttonLabel: "Call Us",
      buttonHref: "tel:8608565655",
      phoneNumber: "",
      image: "",
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionHeroRender {...rest} />,
  },
  KindnessConnectionReceiveBlock: {
    label: "What We Provide (checklist)",
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
          title: { type: "text", label: "Title (e.g. Essential Support)" },
          detail: { type: "text", label: "Detail / short description" },
        },
      },
    },
    defaultProps: {
      eyebrow: "Central Resources",
      heading: "Practical help, no strings attached.",
      pitch: "",
      items: [],
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionReceiveRender {...rest} />,
  },
  KindnessConnectionDetailsBlock: {
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
          label: { type: "text", label: "Label (e.g. Cost)" },
          value: { type: "text", label: "Value (e.g. Free)" },
        },
      },
    },
    defaultProps: {
      heading: "At a glance",
      details: [],
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionDetailsRender {...rest} />,
  },
  KindnessConnectionProcessBlock: {
    label: "How It Works (dark, steps)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      steps: {
        type: "array",
        label: "Steps (renders 3 columns on desktop)",
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
      eyebrow: "How It Works",
      heading: "Three steps to getting help.",
      steps: [],
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionProcessRender {...rest} />,
  },
  KindnessConnectionAudienceBlock: {
    label: "Who This Is For (white card with bullets)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      items: {
        type: "array",
        label: "Audience bullets (renders 2 columns, add one per group)",
        defaultItemProps: { text: "" },
        getItemSummary: (item) => item.text || "Bullet",
        arrayFields: {
          text: { type: "textarea", label: "Bullet text" },
        },
      },
    },
    defaultProps: {
      eyebrow: "Who This Is For",
      heading: "If you need help, this is for you.",
      items: [],
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionAudienceRender {...rest} />,
  },
  KindnessConnectionFAQBlock: {
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
        defaultItemProps: { question: "", answer: "" },
        getItemSummary: (item) => item.question || "Question",
        arrayFields: {
          question: { type: "text", label: "Question" },
          answer: { type: "textarea", label: "Answer" },
        },
      },
    },
    defaultProps: {
      heading: "Common Questions",
      faqs: [],
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionFAQRender {...rest} />,
  },
  KindnessConnectionBottomCTABlock: {
    label: "Bottom CTA (Need help? Let us know.)",
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
        label: "Button link (tel:, mailto:, https://, or /path)",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (e.g. 860-856-5655). Leave empty to hide.",
      },
    },
    defaultProps: {
      heading: "Need help? Let us know.",
      description: "",
      buttonLabel: "Call Us",
      buttonHref: "tel:8608565655",
      phoneNumber: "",
    },
    render: ({ puck: _puck, ...rest }) => <KindnessConnectionBottomCTARender {...rest} />,
  },
};
