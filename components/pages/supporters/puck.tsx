import type { Config, Field } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { SupportersHero as SupportersHeroRender } from "./blocks/SupportersHero";
import {
  SupportersFeaturedPartnership as SupportersFeaturedPartnershipRender,
  type FeaturedPartnershipPartner,
} from "./blocks/SupportersFeaturedPartnership";
import {
  SupportersCorporate as SupportersCorporateRender,
  type SupportersCorporateItem,
} from "./blocks/SupportersCorporate";
import {
  SupportersEvent as SupportersEventRender,
  type SupportersEventItem,
} from "./blocks/SupportersEvent";
import { SupportersGratitude as SupportersGratitudeRender } from "./blocks/SupportersGratitude";
import {
  SupportersByCategory as SupportersByCategoryRender,
  type SupportersCategory,
} from "./blocks/SupportersByCategory";
import {
  SupportersIndividual as SupportersIndividualRender,
  type SupportersIndividualItem,
} from "./blocks/SupportersIndividual";
import { SupportersBottomCTA as SupportersBottomCTARender } from "./blocks/SupportersBottomCTA";

// Reusable field-builder for supporters that can show a logo OR a name.
// Produces the exact same 3 fields (name, logo, notes) wherever staff edits a
// supporter row — Featured Partnership, Corporate, Event Sponsors, Category.
const supporterArrayFields: {
  name: Field<string>;
  logo: Field<string>;
  notes: Field<string>;
} = {
  name: {
    type: "text",
    label:
      "Name (required — shown as text when no logo uploaded, used as alt text when logo is uploaded)",
  },
  logo: {
    type: "custom",
    label: "Logo (optional — if uploaded, shown in place of the name)",
    render: ({ value, onChange, readOnly }) => (
      <ImageUploadField
        value={value as string | undefined}
        onChange={onChange}
        readOnly={readOnly}
      />
    ),
  },
  notes: {
    type: "text",
    label:
      "Notes (optional — shown under the name, e.g. a contact person. Hidden when a logo is uploaded.)",
  },
};

export type SupportersHeroBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
};

export type SupportersFeaturedPartnershipBlockProps = {
  eyebrow: string;
  headline: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  partners: FeaturedPartnershipPartner[];
};

export type SupportersCorporateBlockProps = {
  eyebrow: string;
  heading: string;
  supporters: SupportersCorporateItem[];
};

export type SupportersEventBlockProps = {
  eyebrow: string;
  heading: string;
  supporters: SupportersEventItem[];
};

export type SupportersGratitudeBlockProps = {
  quote: string;
  backgroundImage: string;
};

export type SupportersByCategoryBlockProps = {
  heading: string;
  categories: SupportersCategory[];
};

export type SupportersIndividualBlockProps = {
  eyebrow: string;
  heading: string;
  names: SupportersIndividualItem[];
};

export type SupportersBottomCTABlockProps = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  backgroundImage: string;
};

export type SupportersPuckProps = {
  SupportersHeroBlock: SupportersHeroBlockProps;
  SupportersFeaturedPartnershipBlock: SupportersFeaturedPartnershipBlockProps;
  SupportersCorporateBlock: SupportersCorporateBlockProps;
  SupportersEventBlock: SupportersEventBlockProps;
  SupportersGratitudeBlock: SupportersGratitudeBlockProps;
  SupportersByCategoryBlock: SupportersByCategoryBlockProps;
  SupportersIndividualBlock: SupportersIndividualBlockProps;
  SupportersBottomCTABlock: SupportersBottomCTABlockProps;
};

export const supportersPuckComponents: Config<SupportersPuckProps>["components"] = {
  SupportersHeroBlock: {
    label: "Supporters hero",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: {
        type: "text",
        label: "Eyebrow (small uppercase label above title)",
      },
      title: { type: "text", label: "Page title" },
      description: { type: "textarea", label: "Description paragraph" },
      backgroundImage: {
        type: "custom",
        label: "Background image (white gradient applied automatically)",
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
      eyebrow: "With Gratitude",
      title: "Our Supporters",
      description: "",
      backgroundImage: "/welcomehome.webp",
    },
    render: (props) => <SupportersHeroRender {...props} />,
  },
  SupportersFeaturedPartnershipBlock: {
    label: "Featured Partnership (logos + story)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      headline: { type: "text", label: "Headline" },
      body: { type: "textarea", label: "Body paragraph" },
      linkLabel: { type: "text", label: "Link label (e.g. 'Learn more about Hope House')" },
      linkHref: {
        type: "text",
        label: "Link URL (https:// for external, /path for internal)",
      },
      partners: {
        type: "array",
        label: "Partners (each one shows a word OR a logo)",
        defaultItemProps: { name: "", logo: "" },
        getItemSummary: (item) => item.name || "Partner",
        arrayFields: {
          name: supporterArrayFields.name,
          logo: supporterArrayFields.logo,
        },
      },
    },
    defaultProps: {
      eyebrow: "A Story Of Partnership",
      headline: "",
      body: "",
      linkLabel: "Learn more about Hope House",
      linkHref: "/programs/hope-house",
      partners: [],
    },
    render: (props) => <SupportersFeaturedPartnershipRender {...props} />,
  },
  SupportersCorporateBlock: {
    label: "Corporate Partners (grid of 3 columns)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      supporters: {
        type: "array",
        label: "Corporate partners (each shows a word OR a logo)",
        defaultItemProps: { name: "", logo: "", notes: "" },
        getItemSummary: (item) => item.name || "Partner",
        arrayFields: supporterArrayFields,
      },
    },
    defaultProps: {
      eyebrow: "Corporate Partners",
      heading: "The organizations carrying us forward.",
      supporters: [],
    },
    render: (props) => <SupportersCorporateRender {...props} />,
  },
  SupportersEventBlock: {
    label: "Event Sponsors (grid of 4 columns)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label, e.g. event name + date)" },
      heading: { type: "text", label: "Section heading (e.g. Event Sponsors)" },
      supporters: {
        type: "array",
        label: "Event sponsors (each shows a word OR a logo)",
        defaultItemProps: { name: "", logo: "", notes: "" },
        getItemSummary: (item) => item.name || "Sponsor",
        arrayFields: supporterArrayFields,
      },
    },
    defaultProps: {
      eyebrow: "",
      heading: "Event Sponsors",
      supporters: [],
    },
    render: (props) => <SupportersEventRender {...props} />,
  },
  SupportersGratitudeBlock: {
    label: "Gratitude pull-quote (image + quote)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      quote: { type: "textarea", label: "Quote text (italic, with opening quote mark auto-added)" },
      backgroundImage: {
        type: "custom",
        label: "Background image (beige gradient applied automatically)",
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
      quote: "Every name on this page changed a life.",
      backgroundImage: "/supporter2.webp",
    },
    render: (props) => <SupportersGratitudeRender {...props} />,
  },
  SupportersByCategoryBlock: {
    label: "By Category (grouped name/logo lists)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      heading: { type: "text", label: "Section heading" },
      categories: {
        type: "array",
        label: "Categories (add, remove, or reorder. Empty categories are hidden.)",
        defaultItemProps: { label: "", items: [] },
        getItemSummary: (item) => item.label || "Category",
        arrayFields: {
          label: { type: "text", label: "Category label (e.g. Faith Community)" },
          items: {
            type: "array",
            label: "Supporters in this category (each shows a word OR a logo)",
            defaultItemProps: { name: "", logo: "", notes: "" },
            getItemSummary: (item) => item.name || "Supporter",
            arrayFields: supporterArrayFields,
          },
        },
      },
    },
    defaultProps: {
      heading: "Partners across the community.",
      categories: [],
    },
    render: (props) => <SupportersByCategoryRender {...props} />,
  },
  SupportersIndividualBlock: {
    label: "Individual Supporters (name-only grid)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      names: {
        type: "array",
        label: "Individual supporters (text only, no logos)",
        defaultItemProps: { name: "" },
        getItemSummary: (item) => item.name || "Name",
        arrayFields: {
          name: { type: "text", label: "Person's name" },
        },
      },
    },
    defaultProps: {
      eyebrow: "With Deep Thanks",
      heading: "Individual Supporters",
      names: [],
    },
    render: (props) => <SupportersIndividualRender {...props} />,
  },
  SupportersBottomCTABlock: {
    label: "Bottom CTA (dark with background image)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Heading" },
      description: { type: "textarea", label: "Description paragraph" },
      primaryButtonLabel: { type: "text", label: "Primary button label" },
      primaryButtonHref: {
        type: "text",
        label: "Primary button link (https://, /path, tel:, mailto:)",
      },
      secondaryButtonLabel: { type: "text", label: "Secondary button label" },
      secondaryButtonHref: {
        type: "text",
        label: "Secondary button link (https://, /path, tel:, mailto:)",
      },
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
    },
    defaultProps: {
      eyebrow: "Be Part Of This Story",
      heading: "Your name could be here.",
      description: "",
      primaryButtonLabel: "Donate",
      primaryButtonHref: "/donate",
      secondaryButtonLabel: "Contact Us",
      secondaryButtonHref: "/contact",
      backgroundImage: "/supporter1.webp",
    },
    render: (props) => <SupportersBottomCTARender {...props} />,
  },
};
