import type { Config } from "@measured/puck";
import {
  HomeHeroBlock as HomeHeroBlockRender,
  type HomeHeroTrustSignal,
} from "./HomeHeroBlock";
import {
  HomeTrustBarBlock as HomeTrustBarBlockRender,
  type HomeTrustBarStat,
} from "./HomeTrustBarBlock";
import {
  HomeWhyUsBlock as HomeWhyUsBlockRender,
  type HomeWhyUsItem,
} from "./HomeWhyUsBlock";
import {
  HomeTestimonialsBlock as HomeTestimonialsBlockRender,
  type HomeTestimonial,
} from "./HomeTestimonialsBlock";
import { HomeMidCTABlock as HomeMidCTABlockRender } from "./HomeMidCTABlock";
import {
  HomeProgramsBlock as HomeProgramsBlockRender,
  type HomeProgramItem,
} from "./HomeProgramsBlock";
import {
  HomeAboutBlock as HomeAboutBlockRender,
  type HomeAboutDetail,
} from "./HomeAboutBlock";
import {
  HomeDarkProcessBlock as HomeDarkProcessBlockRender,
  type HomeProcessStep,
} from "./HomeDarkProcessBlock";
import {
  HomeFAQBlock as HomeFAQBlockRender,
  type HomeFaqItem,
} from "./HomeFAQBlock";
import { HomeContactBlock as HomeContactBlockRender } from "./HomeContactBlock";
import { HomeFinalCTABlock as HomeFinalCTABlockRender } from "./HomeFinalCTABlock";
import { ImageUploadField } from "@/components/admin/ImageUploadField";

export type HomeHeroBlockProps = {
  videoSrc: string;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  trustSignals: HomeHeroTrustSignal[];
};

export type HomeTrustBarBlockProps = {
  stats: HomeTrustBarStat[];
};

export type HomeWhyUsBlockProps = {
  eyebrow: string;
  heading: string;
  items: HomeWhyUsItem[];
};

export type HomeTestimonialsBlockProps = {
  eyebrow: string;
  heading: string;
  testimonials: HomeTestimonial[];
};

export type HomeMidCTABlockProps = {
  heading: string;
  subheading: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  primaryButtonIsPhone: boolean;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
};

export type HomeProgramsBlockProps = {
  eyebrow: string;
  heading: string;
  goodForLabel: string;
  linkLabel: string;
  programs: HomeProgramItem[];
};

export type HomeAboutBlockProps = {
  eyebrow: string;
  heading: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  details: HomeAboutDetail[];
  linkLabel: string;
  linkHref: string;
  videoEmbedUrl: string;
  videoTitle: string;
  pullQuote: string;
  pullQuoteAttribution: string;
};

export type HomeDarkProcessBlockProps = {
  backgroundImage: string;
  eyebrow: string;
  heading: string;
  steps: HomeProcessStep[];
};

export type HomeFAQBlockProps = {
  eyebrow: string;
  heading: string;
  beforePhoneText: string;
  phoneNumber: string;
  afterPhoneText: string;
  faqs: HomeFaqItem[];
};

export type HomeContactBlockProps = {
  eyebrow: string;
  heading: string;
  body: string;
  phoneNumber: string;
};

export type HomeFinalCTABlockProps = {
  heading: string;
  body: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  secondaryButtonIsPhone: boolean;
};

export type HomePuckProps = {
  HomeHeroBlock: HomeHeroBlockProps;
  HomeTrustBarBlock: HomeTrustBarBlockProps;
  HomeWhyUsBlock: HomeWhyUsBlockProps;
  HomeTestimonialsBlock: HomeTestimonialsBlockProps;
  HomeMidCTABlock: HomeMidCTABlockProps;
  HomeProgramsBlock: HomeProgramsBlockProps;
  HomeAboutBlock: HomeAboutBlockProps;
  HomeDarkProcessBlock: HomeDarkProcessBlockProps;
  HomeFAQBlock: HomeFAQBlockProps;
  HomeContactBlock: HomeContactBlockProps;
  HomeFinalCTABlock: HomeFinalCTABlockProps;
};

export const homePuckComponents: Config<HomePuckProps>["components"] = {
  HomeHeroBlock: {
    label: "Hero (full-screen video + animated heading)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      videoSrc: {
        type: "text",
        label:
          "Video path (drop video file in /public/ then enter e.g. /herovideo.mp4)",
      },
      eyebrow: {
        type: "text",
        label: "Eyebrow (small uppercase label above heading)",
      },
      headingLine1: {
        type: "text",
        label:
          "Heading \u2014 line 1 (e.g. 'A safe place to'). Letters animate in.",
      },
      headingLine2: {
        type: "text",
        label:
          "Heading \u2014 line 2 (e.g. 'rebuild your life.'). Letters animate in.",
      },
      subheading: { type: "textarea", label: "Subheading paragraph" },
      primaryButtonLabel: { type: "text", label: "Primary button label" },
      primaryButtonHref: {
        type: "text",
        label: "Primary button link (#anchor, /path, or https://)",
      },
      secondaryButtonLabel: { type: "text", label: "Secondary button label" },
      secondaryButtonHref: {
        type: "text",
        label: "Secondary button link (#anchor, /path, or https://)",
      },
      trustSignals: {
        type: "array",
        label:
          "Trust signal pills (shown as a row separated by '/' on desktop)",
        defaultItemProps: { text: "" },
        getItemSummary: (item) => item.text || "Trust signal",
        arrayFields: {
          text: {
            type: "text",
            label: "Text (e.g. '501(c)(3) Public Charity')",
          },
        },
      },
    },
    defaultProps: {
      videoSrc: "/herovideo.mp4",
      eyebrow: "",
      headingLine1: "",
      headingLine2: "",
      subheading: "",
      primaryButtonLabel: "Get Help Now",
      primaryButtonHref: "#contact",
      secondaryButtonLabel: "Learn About Our Programs",
      secondaryButtonHref: "#programs",
      trustSignals: [],
    },
    render: (props) => <HomeHeroBlockRender {...props} />,
  },
  HomeTrustBarBlock: {
    label: "Trust Bar (4 stat tiles)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      stats: {
        type: "array",
        label: "Stats (4 across on desktop, 2 on mobile)",
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
      stats: [],
    },
    render: (props) => <HomeTrustBarBlockRender {...props} />,
  },
  HomeWhyUsBlock: {
    label: "Why Us (differentiators — 2 columns)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: {
        type: "textarea",
        label:
          "Heading (use line breaks for multi-line headings, e.g. 'Not just sober living.\\nA place to become whole.')",
      },
      items: {
        type: "array",
        label: "Items (renders 2 columns, wraps naturally)",
        defaultItemProps: { number: "", title: "", description: "" },
        getItemSummary: (item) =>
          [item.number, item.title].filter(Boolean).join(". ") || "Item",
        arrayFields: {
          number: { type: "text", label: "Number (e.g. 01, 02)" },
          title: { type: "text", label: "Title" },
          description: { type: "textarea", label: "Description paragraph" },
        },
      },
    },
    defaultProps: {
      eyebrow: "Why Community of Hope",
      heading: "",
      items: [],
    },
    render: (props) => <HomeWhyUsBlockRender {...props} />,
  },
  HomeTestimonialsBlock: {
    label: "Testimonials (horizontal scrolling marquee)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: {
        type: "textarea",
        label: "Heading (use line breaks for multi-line headings)",
      },
      testimonials: {
        type: "array",
        label: "Testimonials (card list that auto-scrolls across the page)",
        defaultItemProps: {
          quote: "",
          name: "",
          context: "",
          initials: "",
        },
        getItemSummary: (item) => item.name || "Testimonial",
        arrayFields: {
          quote: { type: "textarea", label: "Quote" },
          name: { type: "text", label: "Name or role" },
          context: {
            type: "text",
            label: "Context (e.g. 'Hope House Graduate')",
          },
          initials: {
            type: "text",
            label: "Initials (shown in the avatar circle, e.g. MR)",
          },
        },
      },
    },
    defaultProps: {
      eyebrow: "Stories of Transformation",
      heading: "",
      testimonials: [],
    },
    render: (props) => <HomeTestimonialsBlockRender {...props} />,
  },
  HomeMidCTABlock: {
    label: "Mid CTA (blue bar with 2 buttons)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      heading: { type: "text", label: "Heading" },
      subheading: { type: "textarea", label: "Subheading (shown under heading)" },
      primaryButtonLabel: { type: "text", label: "Primary button label" },
      primaryButtonHref: {
        type: "text",
        label: "Primary button link (tel:, #anchor, /path, https://)",
      },
      primaryButtonIsPhone: {
        type: "radio",
        label: "Show phone icon on primary button?",
        options: [
          { label: "Yes (for 'Call Now' style buttons)", value: true },
          { label: "No", value: false },
        ],
      },
      secondaryButtonLabel: { type: "text", label: "Secondary button label" },
      secondaryButtonHref: {
        type: "text",
        label: "Secondary button link",
      },
    },
    defaultProps: {
      heading: "",
      subheading: "",
      primaryButtonLabel: "Call Now",
      primaryButtonHref: "tel:8609124356",
      primaryButtonIsPhone: true,
      secondaryButtonLabel: "Refer Someone",
      secondaryButtonHref: "#contact",
    },
    render: (props) => <HomeMidCTABlockRender {...props} />,
  },
  HomeProgramsBlock: {
    label: "Programs (4 alternating program rows with images)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: {
        type: "textarea",
        label: "Heading (use line breaks for multi-line)",
      },
      goodForLabel: {
        type: "text",
        label: "'This is for you if' label (uppercase, shown above goodFor text)",
      },
      linkLabel: {
        type: "text",
        label: "Link label (e.g. 'Learn more'). Arrow is added automatically.",
      },
      programs: {
        type: "array",
        label: "Programs (each row alternates image side)",
        defaultItemProps: {
          number: "",
          subtitle: "",
          title: "",
          description: "",
          goodFor: "",
          image: "",
          slug: "",
        },
        getItemSummary: (item) =>
          [item.number, item.title].filter(Boolean).join(". ") || "Program",
        arrayFields: {
          number: { type: "text", label: "Number (e.g. 01, 02)" },
          subtitle: { type: "text", label: "Subtitle (uppercase, e.g. Women's Recovery Home)" },
          title: { type: "text", label: "Program title" },
          description: { type: "textarea", label: "Description paragraph" },
          goodFor: { type: "textarea", label: "'This is for you if' paragraph" },
          image: {
            type: "custom",
            label: "Program image",
            render: ({ value, onChange, readOnly }) => (
              <ImageUploadField
                value={value as string | undefined}
                onChange={onChange}
                readOnly={readOnly}
              />
            ),
          },
          slug: {
            type: "text",
            label:
              "Slug (for the 'Learn more' link, e.g. 'hope-house' links to /programs/hope-house)",
          },
        },
      },
    },
    defaultProps: {
      eyebrow: "Our Programs",
      heading: "",
      goodForLabel: "This is for you if",
      linkLabel: "Learn more",
      programs: [],
    },
    render: (props) => <HomeProgramsBlockRender {...props} />,
  },
  HomeAboutBlock: {
    label: "About section (text + video + pull quote)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: {
        type: "textarea",
        label: "Heading (use line breaks for multi-line)",
      },
      bodyParagraph1: {
        type: "textarea",
        label: "First body paragraph",
      },
      bodyParagraph2: {
        type: "textarea",
        label: "Second body paragraph",
      },
      details: {
        type: "array",
        label: "Organization details (e.g. Executive Director / Status)",
        defaultItemProps: { label: "", value: "" },
        getItemSummary: (item) =>
          [item.label, item.value].filter(Boolean).join(": ") || "Detail",
        arrayFields: {
          label: { type: "text", label: "Label" },
          value: { type: "text", label: "Value" },
        },
      },
      linkLabel: {
        type: "text",
        label: "Link label (arrow added automatically, leave empty to hide)",
      },
      linkHref: {
        type: "text",
        label: "Link URL (e.g. /about)",
      },
      videoEmbedUrl: {
        type: "text",
        label:
          "Video embed URL (e.g. https://www.youtube.com/embed/Xs3JhtwBFSE?start=267)",
      },
      videoTitle: { type: "text", label: "Video title (for accessibility)" },
      pullQuote: { type: "textarea", label: "Pull quote (quotes added automatically)" },
      pullQuoteAttribution: {
        type: "text",
        label: "Pull quote attribution (e.g. 'Annette Eldridge, Executive Director')",
      },
    },
    defaultProps: {
      eyebrow: "About Us",
      heading: "",
      bodyParagraph1: "",
      bodyParagraph2: "",
      details: [],
      linkLabel: "Learn our story, watch our video, and meet our team",
      linkHref: "/about",
      videoEmbedUrl: "",
      videoTitle: "Community of Hope video",
      pullQuote: "",
      pullQuoteAttribution: "",
    },
    render: (props) => <HomeAboutBlockRender {...props} />,
  },
  HomeDarkProcessBlock: {
    label: "How It Works (dark bg image + 4 process steps)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      backgroundImage: {
        type: "custom",
        label: "Background image (navy overlay applied automatically)",
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
      steps: {
        type: "array",
        label: "Steps (renders 4 across on desktop)",
        defaultItemProps: { number: "", title: "", description: "" },
        getItemSummary: (item) =>
          [item.number, item.title].filter(Boolean).join(". ") || "Step",
        arrayFields: {
          number: { type: "text", label: "Step number (e.g. 1, 2, 3, 4)" },
          title: { type: "text", label: "Step title" },
          description: { type: "textarea", label: "Step description" },
        },
      },
    },
    defaultProps: {
      backgroundImage: "/home1.webp",
      eyebrow: "How It Works",
      heading: "From your first call to a brand new life.",
      steps: [],
    },
    render: (props) => <HomeDarkProcessBlockRender {...props} />,
  },
  HomeFAQBlock: {
    label: "FAQ (sticky left + accordion right)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: {
        type: "textarea",
        label: "Heading (use line breaks for multi-line)",
      },
      beforePhoneText: {
        type: "text",
        label:
          "Text before phone (e.g. 'Still have questions? Call us at')",
      },
      phoneNumber: {
        type: "text",
        label: "Phone number (rendered as tel: link, leave empty to hide)",
      },
      afterPhoneText: {
        type: "text",
        label:
          "Text after phone (e.g. 'or send a message through our form below.')",
      },
      faqs: {
        type: "array",
        label: "FAQ entries (accordion)",
        defaultItemProps: { question: "", answer: "" },
        getItemSummary: (item) => item.question || "Question",
        arrayFields: {
          question: { type: "text", label: "Question" },
          answer: { type: "textarea", label: "Answer" },
        },
      },
    },
    defaultProps: {
      eyebrow: "Common Questions",
      heading: "Everything you need to know.",
      beforePhoneText: "Still have questions? Call us at",
      phoneNumber: "860-912-4356",
      afterPhoneText: "or send a message through our form below.",
      faqs: [],
    },
    render: (props) => <HomeFAQBlockRender {...props} />,
  },
  HomeContactBlock: {
    label: "Contact section (intro text — form fields stay fixed)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow (uppercase label)" },
      heading: {
        type: "textarea",
        label: "Heading (use line breaks for multi-line)",
      },
      body: {
        type: "textarea",
        label: "Body paragraph (under the heading)",
      },
      phoneNumber: {
        type: "text",
        label:
          "Phone number (shown on the 'Prefer to talk?' badge as a tel: link)",
      },
    },
    defaultProps: {
      eyebrow: "Get In Touch",
      heading: "",
      body: "",
      phoneNumber: "860-912-4356",
    },
    render: (props) => <HomeContactBlockRender {...props} />,
  },
  HomeFinalCTABlock: {
    label: "Final CTA (blue bar with 2 buttons)",
    permissions: { delete: false, duplicate: false, drag: false, insert: false },
    fields: {
      heading: {
        type: "textarea",
        label: "Heading (use line breaks for multi-line)",
      },
      body: { type: "textarea", label: "Body paragraph" },
      primaryButtonLabel: { type: "text", label: "Primary button label" },
      primaryButtonHref: {
        type: "text",
        label: "Primary button link",
      },
      secondaryButtonLabel: { type: "text", label: "Secondary button label" },
      secondaryButtonHref: {
        type: "text",
        label: "Secondary button link (use tel: for phone)",
      },
      secondaryButtonIsPhone: {
        type: "radio",
        label: "Show phone icon on secondary button?",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
    },
    defaultProps: {
      heading: "",
      body: "",
      primaryButtonLabel: "Get Help Now",
      primaryButtonHref: "#contact",
      secondaryButtonLabel: "860-912-4356",
      secondaryButtonHref: "tel:8609124356",
      secondaryButtonIsPhone: true,
    },
    render: (props) => <HomeFinalCTABlockRender {...props} />,
  },
};
