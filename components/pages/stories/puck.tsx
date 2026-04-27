import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { StoriesHero as StoriesHeroRender } from "./StoriesHero";
import { StoriesFeaturedStory as StoriesFeaturedStoryRender } from "./StoriesFeaturedStory";
import {
  StoriesCommunityVoices as StoriesCommunityVoicesRender,
  type StoriesCommunityVoice,
} from "./StoriesCommunityVoices";
import {
  StoriesImpact as StoriesImpactRender,
  type StoriesImpactStat,
} from "./StoriesImpact";
import { StoriesVisionQuote as StoriesVisionQuoteRender } from "./StoriesVisionQuote";
import { StoriesShareYourStory as StoriesShareYourStoryRender } from "./StoriesShareYourStory";
import { StoriesBottomCTA as StoriesBottomCTARender } from "./StoriesBottomCTA";

export type StoriesHeroBlockProps = {
  backgroundImage: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type StoriesFeaturedStoryBlockProps = {
  eyebrow: string;
  quote: string;
  photo: string;
  initials: string;
  name: string;
  context: string;
};

export type StoriesCommunityVoicesBlockProps = {
  heading: string;
  voices: StoriesCommunityVoice[];
};

export type StoriesImpactBlockProps = {
  backgroundImage: string;
  eyebrow: string;
  heading: string;
  stats: StoriesImpactStat[];
};

export type StoriesVisionQuoteBlockProps = {
  quote: string;
  attribution: string;
};

export type StoriesShareYourStoryBlockProps = {
  eyebrow: string;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export type StoriesBottomCTABlockProps = {
  heading: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
};

export type StoriesPuckProps = {
  StoriesHeroBlock: StoriesHeroBlockProps;
  StoriesFeaturedStoryBlock: StoriesFeaturedStoryBlockProps;
  StoriesCommunityVoicesBlock: StoriesCommunityVoicesBlockProps;
  StoriesImpactBlock: StoriesImpactBlockProps;
  StoriesVisionQuoteBlock: StoriesVisionQuoteBlockProps;
  StoriesShareYourStoryBlock: StoriesShareYourStoryBlockProps;
  StoriesBottomCTABlock: StoriesBottomCTABlockProps;
};

export const storiesPuckComponents: Config<StoriesPuckProps>["components"] = {
  StoriesHeroBlock: {
    label: "Stories hero",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      backgroundImage: {
        type: "custom",
        label:
          "Background image (full bleed behind the hero with a white fade on the left)",
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
        label: "Eyebrow (small uppercase label above title)",
      },
      title: { type: "text", label: "Page title" },
      description: { type: "textarea", label: "Intro description paragraph" },
    },
    defaultProps: {
      backgroundImage: "",
      eyebrow: "",
      title: "",
      description: "",
    },
    render: ({ puck: _puck, ...rest }) => <StoriesHeroRender {...rest} />,
  },
  StoriesFeaturedStoryBlock: {
    label: "Featured Story (spotlight testimonial)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      quote: { type: "textarea", label: "Quote text" },
      photo: {
        type: "custom",
        label: "Photo (optional, falls back to initials circle if empty)",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      initials: {
        type: "text",
        label: "Initials (shown when no photo is uploaded, e.g. MR)",
      },
      name: { type: "text", label: "Person's name" },
      context: {
        type: "text",
        label: "Context (e.g. 'Hope House Graduate')",
      },
    },
    defaultProps: {
      eyebrow: "Featured Story",
      quote: "",
      photo: "",
      initials: "",
      name: "",
      context: "",
    },
    render: ({ puck: _puck, ...rest }) => <StoriesFeaturedStoryRender {...rest} />,
  },
  StoriesCommunityVoicesBlock: {
    label: "Community Voices (2-col testimonial cards)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Section heading" },
      voices: {
        type: "array",
        label: "Testimonials (add, remove, or reorder via drag)",
        defaultItemProps: {
          quote: "",
          photo: "",
          initials: "",
          name: "",
          context: "",
        },
        getItemSummary: (item) => item.name || "Testimonial",
        arrayFields: {
          quote: { type: "textarea", label: "Quote" },
          photo: {
            type: "custom",
            label: "Photo (optional, falls back to initials circle if empty)",
            render: ({ value, onChange, readOnly }) => (
              <ImageUploadField
                value={value as string | undefined}
                onChange={onChange}
                readOnly={readOnly}
              />
            ),
          },
          initials: {
            type: "text",
            label: "Initials (shown when no photo, e.g. SW)",
          },
          name: { type: "text", label: "Name or role" },
          context: {
            type: "text",
            label: "Context (e.g. 'Referral Partner, New London County')",
          },
        },
      },
    },
    defaultProps: {
      heading: "Community Voices",
      voices: [],
    },
    render: ({ puck: _puck, ...rest }) => <StoriesCommunityVoicesRender {...rest} />,
  },
  StoriesImpactBlock: {
    label: "Impact by the Numbers (dark, bg image + 4 stats)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
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
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Section heading" },
      stats: {
        type: "array",
        label: "Stats (renders 4 across on desktop, 2 on mobile)",
        defaultItemProps: { number: "", label: "" },
        getItemSummary: (item) =>
          [item.number, item.label.split("\n")[0]]
            .filter(Boolean)
            .join(" \u2014 ") || "Stat",
        arrayFields: {
          number: { type: "text", label: "Number (e.g. 15+, 300+)" },
          label: {
            type: "textarea",
            label:
              "Label (use line breaks to split across two lines, e.g. Years Serving\\nSoutheastern CT)",
          },
        },
      },
    },
    defaultProps: {
      backgroundImage: "",
      eyebrow: "The Impact",
      heading: "Every number represents a life changed.",
      stats: [],
    },
    render: ({ puck: _puck, ...rest }) => <StoriesImpactRender {...rest} />,
  },
  StoriesVisionQuoteBlock: {
    label: "Vision Quote (centered pull quote)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      quote: {
        type: "textarea",
        label: "Quote text (quotes are added automatically)",
      },
      attribution: {
        type: "text",
        label: "Attribution (e.g. 'Community of Hope Inc.')",
      },
    },
    defaultProps: {
      quote: "",
      attribution: "",
    },
    render: ({ puck: _puck, ...rest }) => <StoriesVisionQuoteRender {...rest} />,
  },
  StoriesShareYourStoryBlock: {
    label: "Share Your Story (beige invitation CTA)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: { type: "text", label: "Heading" },
      description: { type: "textarea", label: "Description paragraph" },
      buttonLabel: { type: "text", label: "Button label" },
      buttonHref: {
        type: "text",
        label: "Button link (https:// for external, /path for internal)",
      },
    },
    defaultProps: {
      eyebrow: "Your Voice Matters",
      heading: "Have a story to share?",
      description: "",
      buttonLabel: "Share Your Story",
      buttonHref: "/contact",
    },
    render: ({ puck: _puck, ...rest }) => <StoriesShareYourStoryRender {...rest} />,
  },
  StoriesBottomCTABlock: {
    label: "Bottom CTA (white bordered card, 2 buttons)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Heading" },
      description: { type: "textarea", label: "Description paragraph" },
      primaryButtonLabel: { type: "text", label: "Primary button label" },
      primaryButtonHref: {
        type: "text",
        label: "Primary button link (https:// or /path)",
      },
      secondaryButtonLabel: { type: "text", label: "Secondary button label" },
      secondaryButtonHref: {
        type: "text",
        label: "Secondary button link (https:// or /path)",
      },
    },
    defaultProps: {
      heading: "Your story could be next.",
      description: "",
      primaryButtonLabel: "Explore Programs",
      primaryButtonHref: "/programs",
      secondaryButtonLabel: "Donate",
      secondaryButtonHref: "/donate",
    },
    render: ({ puck: _puck, ...rest }) => <StoriesBottomCTARender {...rest} />,
  },
};
