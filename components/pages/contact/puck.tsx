import type { Config } from "@measured/puck";
import { ContactSidebar as ContactSidebarRender, type ContactPhone } from "./ContactPage";
import type { SocialLinksShape } from "@/components/ui/SocialIcons";

export type ContactSidebarProps = {
  eyebrow: string;
  phones: ContactPhone[];
  followUsLabel: string;
};

export type ContactPuckProps = {
  ContactSidebar: ContactSidebarProps;
};

export const contactPuckComponents: Config<ContactPuckProps>["components"] = {
  ContactSidebar: {
    label: "Contact sidebar",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      eyebrow: { type: "text", label: "Eyebrow label (e.g. Reach us directly)" },
      phones: {
        type: "array",
        label: "Phone numbers",
        defaultItemProps: { label: "", number: "" },
        getItemSummary: (item) =>
          [item.label, item.number].filter(Boolean).join(" — ") || "Phone",
        arrayFields: {
          label: { type: "text", label: "Label (e.g. Main, Housing, Kindness Connection)" },
          number: { type: "text", label: "Phone number (e.g. 860-912-4356)" },
        },
      },
      followUsLabel: {
        type: "text",
        label: "Social icons label (leave empty to hide)",
      },
    },
    defaultProps: {
      eyebrow: "Reach us directly",
      phones: [],
      followUsLabel: "Follow us",
    },
    render: ({ eyebrow, phones, followUsLabel, puck }) => {
      const socialLinks = puck?.metadata?.socialLinks as
        | SocialLinksShape
        | undefined;
      return (
        <ContactSidebarRender
          eyebrow={eyebrow}
          phones={phones}
          followUsLabel={followUsLabel}
          socialLinks={socialLinks}
        />
      );
    },
  },
};
