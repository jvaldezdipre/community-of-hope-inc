import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import {
  ProgramsList as ProgramsListRender,
  ProgramsHelpCTA as ProgramsHelpCTARender,
  type ProgramCardData,
} from "./ProgramsOverview";

export type ProgramsListBlockProps = {
  introText: string;
  programs: ProgramCardData[];
};

export type ProgramsHelpCTAProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phonePrefix: string;
  phoneNumber: string;
};

export type ProgramsPuckProps = {
  ProgramsListBlock: ProgramsListBlockProps;
  ProgramsHelpCTA: ProgramsHelpCTAProps;
};

export const programsPuckComponents: Config<ProgramsPuckProps>["components"] = {
  ProgramsListBlock: {
    label: "Programs list",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      introText: { type: "textarea", label: "Intro paragraph" },
      programs: {
        type: "array",
        label: "Programs (locked to 4 — each links to a hardcoded sub-page)",
        min: 4,
        max: 4,
        defaultItemProps: {
          slug: "",
          number: "",
          subtitle: "",
          title: "",
          image: "",
          goodFor: "",
          highlights: [],
        },
        getItemSummary: (item) =>
          [item.number, item.title].filter(Boolean).join(" — ") || "Program",
        arrayFields: {
          // Slug is tied to the sub-page route at /programs/[slug]. Staff
          // shouldn't edit it — hidden from the UI but preserved in data.
          slug: { type: "text", visible: false },
          number: { type: "text", label: "Number badge (e.g. 01)" },
          subtitle: { type: "text", label: "Subtitle / eyebrow" },
          title: { type: "text", label: "Program title" },
          image: {
            type: "custom",
            label: "Banner image",
            render: ({ value, onChange, readOnly }) => (
              <ImageUploadField
                value={value as string | undefined}
                onChange={onChange}
                readOnly={readOnly}
              />
            ),
          },
          goodFor: {
            type: "textarea",
            label: "Description / who it's good for",
          },
          highlights: {
            type: "array",
            label: "Highlights (short bullets, wraps in 2 columns)",
            defaultItemProps: { text: "" },
            getItemSummary: (item) => item.text || "Highlight",
            arrayFields: {
              text: { type: "text", label: "Highlight text" },
            },
          },
        },
      },
    },
    defaultProps: {
      introText: "",
      programs: [
        { slug: "", number: "", subtitle: "", title: "", image: "", goodFor: "", highlights: [] },
        { slug: "", number: "", subtitle: "", title: "", image: "", goodFor: "", highlights: [] },
        { slug: "", number: "", subtitle: "", title: "", image: "", goodFor: "", highlights: [] },
        { slug: "", number: "", subtitle: "", title: "", image: "", goodFor: "", highlights: [] },
      ],
    },
    render: ({ introText, programs }) => (
      <ProgramsListRender introText={introText} programs={programs} />
    ),
  },
  ProgramsHelpCTA: {
    label: "\"Not sure?\" CTA card",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Heading" },
      description: { type: "textarea", label: "Description" },
      buttonLabel: { type: "text", label: "Button label" },
      buttonHref: { type: "text", label: "Button link (e.g. /contact)" },
      phonePrefix: {
        type: "text",
        label: "Phone prefix text (e.g. 'or call ')",
      },
      phoneNumber: { type: "text", label: "Phone number (e.g. 860-912-4356)" },
    },
    defaultProps: {
      heading: "Not sure which program fits?",
      description: "",
      buttonLabel: "Contact Us",
      buttonHref: "/contact",
      phonePrefix: "or call ",
      phoneNumber: "",
    },
    render: ({ puck: _puck, ...rest }) => <ProgramsHelpCTARender {...rest} />,
  },
};
