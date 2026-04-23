import type { Config } from "@measured/puck";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import {
  AboutHeroBlock as AboutHeroBlockRender,
  type AboutMilestone,
  type AboutHeroMediaType,
} from "./AboutHeroBlock";
import {
  AboutLeadership as AboutLeadershipRender,
  type LeadershipPerson,
  type ExecutiveDirectorInfo,
} from "./AboutLeadership";
import {
  AboutPartners as AboutPartnersRender,
  type CommunityPartner,
} from "./AboutPartners";

export type AboutHeroBlockProps = {
  storyText: string;
  milestones: AboutMilestone[];
  mediaType: AboutHeroMediaType;
  videoUrl: string;
  image: string;
};

export type AboutLeadershipBlockProps = {
  heading: string;
  executiveDirector: ExecutiveDirectorInfo;
  staffLabel: string;
  staff: LeadershipPerson[];
  boardLabel: string;
  board: LeadershipPerson[];
};

export type AboutPartnersBlockProps = {
  heading: string;
  subtitle: string;
  partners: CommunityPartner[];
};

export type AboutPuckProps = {
  AboutHeroBlock: AboutHeroBlockProps;
  AboutLeadershipBlock: AboutLeadershipBlockProps;
  AboutPartnersBlock: AboutPartnersBlockProps;
};

export const aboutPuckComponents: Config<AboutPuckProps>["components"] = {
  AboutHeroBlock: {
    label: "About hero",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      storyText: { type: "textarea", label: "Story text" },
      milestones: {
        type: "array",
        label: "Milestones (exactly 3)",
        min: 3,
        max: 3,
        defaultItemProps: { value: "", label: "" },
        getItemSummary: (item) =>
          [item.value, item.label].filter(Boolean).join(" — ") || "Milestone",
        arrayFields: {
          value: { type: "text", label: "Value (e.g. 15+, 300+, 8 → 12)" },
          label: { type: "text", label: "Label (e.g. Years of service)" },
        },
      },
      mediaType: {
        type: "radio",
        label: "Media type",
        options: [
          { label: "Video (YouTube)", value: "video" },
          { label: "Image", value: "image" },
          { label: "None (hide this column)", value: "none" },
        ],
      },
      videoUrl: {
        type: "text",
        label:
          "YouTube URL (only used when Media type = Video). Paste any youtube.com or youtu.be link.",
      },
      image: {
        type: "custom",
        label: "Image (only used when Media type = Image)",
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
      storyText: "",
      milestones: [
        { value: "", label: "" },
        { value: "", label: "" },
        { value: "", label: "" },
      ],
      mediaType: "video",
      videoUrl: "",
      image: "",
    },
    render: ({ storyText, milestones, mediaType, videoUrl, image }) => (
      <AboutHeroBlockRender
        storyText={storyText}
        milestones={milestones}
        mediaType={mediaType}
        videoUrl={videoUrl}
        image={image}
      />
    ),
  },
  AboutLeadershipBlock: {
    label: "Leadership & Staff",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Section heading" },
      executiveDirector: {
        type: "object",
        label: "Executive Director",
        objectFields: {
          name: { type: "text", label: "Name" },
          title: { type: "text", label: "Title" },
          image: {
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
        },
      },
      staffLabel: {
        type: "text",
        label: "Staff group label (e.g. STAFF). Leave empty to hide.",
      },
      staff: {
        type: "array",
        label: "Staff members (renders 3 per row on desktop)",
        defaultItemProps: { name: "", role: "", image: "" },
        getItemSummary: (item) =>
          [item.name, item.role].filter(Boolean).join(" — ") || "Staff member",
        arrayFields: {
          name: { type: "text", label: "Name" },
          role: { type: "text", label: "Role / title" },
          image: {
            type: "custom",
            label: "Photo (leave empty to show initials)",
            render: ({ value, onChange, readOnly }) => (
              <ImageUploadField
                value={value as string | undefined}
                onChange={onChange}
                readOnly={readOnly}
              />
            ),
          },
        },
      },
      boardLabel: {
        type: "text",
        label: "Board group label (e.g. BOARD OF DIRECTORS). Leave empty to hide.",
      },
      board: {
        type: "array",
        label: "Board of Directors (renders 4 per row on desktop)",
        defaultItemProps: { name: "", role: "", image: "" },
        getItemSummary: (item) =>
          [item.name, item.role].filter(Boolean).join(" — ") || "Board member",
        arrayFields: {
          name: { type: "text", label: "Name" },
          role: { type: "text", label: "Role / title" },
          image: {
            type: "custom",
            label: "Photo (leave empty to show initials)",
            render: ({ value, onChange, readOnly }) => (
              <ImageUploadField
                value={value as string | undefined}
                onChange={onChange}
                readOnly={readOnly}
              />
            ),
          },
        },
      },
    },
    defaultProps: {
      heading: "Leadership & Staff",
      executiveDirector: { name: "", title: "", image: "" },
      staffLabel: "Staff",
      staff: [],
      boardLabel: "Board of Directors",
      board: [],
    },
    render: ({
      heading,
      executiveDirector,
      staffLabel,
      staff,
      boardLabel,
      board,
    }) => (
      <AboutLeadershipRender
        heading={heading}
        executiveDirector={executiveDirector}
        staffLabel={staffLabel}
        staff={staff}
        boardLabel={boardLabel}
        board={board}
      />
    ),
  },
  AboutPartnersBlock: {
    label: "Community Partners",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Section heading" },
      subtitle: { type: "textarea", label: "Subtitle / description" },
      partners: {
        type: "array",
        label: "Partners (renders 2 per row on desktop)",
        defaultItemProps: { name: "", url: "", description: "" },
        getItemSummary: (item) => item.name || "Partner",
        arrayFields: {
          name: { type: "text", label: "Partner name" },
          url: {
            type: "text",
            label: "Website URL (leave empty to show name as plain text)",
          },
          description: { type: "textarea", label: "Description" },
        },
      },
    },
    defaultProps: {
      heading: "Community Partners",
      subtitle: "Groups we work closely with and would recommend.",
      partners: [],
    },
    render: ({ heading, subtitle, partners }) => (
      <AboutPartnersRender
        heading={heading}
        subtitle={subtitle}
        partners={partners}
      />
    ),
  },
};
