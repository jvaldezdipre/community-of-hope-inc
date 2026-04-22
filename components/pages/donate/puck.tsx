import type { Config } from "@measured/puck";
import {
  PaymentCard as PaymentCardRender,
  ImpactSection as ImpactSectionRender,
} from "./DonatePage";

export type DonatePaymentMethod = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  badge: string;
  featured: "featured" | "standard";
};

export type DonatePaymentsBlockProps = {
  methods: DonatePaymentMethod[];
};

export type DonateImpactSectionProps = {
  heading: string;
  tiers: { amount: string; description: string }[];
};

// Legacy shapes kept registered so pre-migration data (004 / 005) still
// renders correctly. No new data should reference these after migration 006.
export type DonatePaymentCardProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  badge: string;
  featured: "featured" | "standard";
};

export type DonatePaymentGridProps = {
  cards: unknown;
};

export type DonatePuckProps = {
  DonatePaymentsBlock: DonatePaymentsBlockProps;
  DonateImpactSection: DonateImpactSectionProps;
  DonatePaymentCard: DonatePaymentCardProps;
  DonatePaymentGrid: DonatePaymentGridProps;
};

export const donatePuckComponents: Config<DonatePuckProps>["components"] = {
  DonatePaymentsBlock: {
    label: "Payment methods",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      methods: {
        type: "array",
        label: "Payment methods",
        defaultItemProps: {
          heading: "New payment method",
          description: "",
          buttonLabel: "Donate",
          buttonUrl: "",
          badge: "",
          featured: "standard",
        },
        getItemSummary: (item) =>
          [item.heading, item.buttonLabel].filter(Boolean).join(" — ") ||
          "Payment method",
        arrayFields: {
          heading: { type: "text", label: "Card heading (e.g. Donate Online)" },
          description: { type: "textarea", label: "Description" },
          buttonLabel: {
            type: "text",
            label: "Button label (e.g. Donate via Zeffy)",
          },
          buttonUrl: { type: "text", label: "Button URL" },
          badge: {
            type: "text",
            label: "Badge (optional, e.g. Recommended, Zero Fees)",
          },
          featured: {
            type: "radio",
            label: "Visual style",
            options: [
              { label: "Featured (blue border + shadow)", value: "featured" },
              { label: "Standard (plain)", value: "standard" },
            ],
          },
        },
      },
    },
    defaultProps: {
      methods: [],
    },
    render: ({ methods }) => (
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24 items-stretch">
        {methods.map((m, i) => (
          <PaymentCardRender
            key={`pm-${i}`}
            heading={m.heading}
            description={m.description}
            buttonLabel={m.buttonLabel}
            buttonUrl={m.buttonUrl}
            badge={m.badge || undefined}
            featured={m.featured === "featured"}
          />
        ))}
      </div>
    ),
  },
  DonateImpactSection: {
    label: "Your generosity in action",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Section heading" },
      tiers: {
        type: "array",
        label: "Giving tiers (exactly 3)",
        min: 3,
        max: 3,
        defaultItemProps: { amount: "", description: "" },
        getItemSummary: (item) =>
          [item.amount, item.description].filter(Boolean).join(" — ") || "Tier",
        arrayFields: {
          amount: { type: "text", label: "Amount (e.g. $40)" },
          description: { type: "textarea", label: "What it covers" },
        },
      },
    },
    defaultProps: {
      heading: "Your generosity in action.",
      tiers: [
        { amount: "$40", description: "Provides a bus pass for a resident" },
        { amount: "$175", description: "Covers one week of housing at Hope House" },
        { amount: "$500", description: "Supports a resident's utility costs" },
      ],
    },
    render: ({ heading, tiers }) => (
      <ImpactSectionRender heading={heading} tiers={tiers} />
    ),
  },
  DonatePaymentGrid: {
    label: "Payment methods grid",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      cards: { type: "slot" },
    },
    defaultProps: { cards: [] },
    render: ({ cards: Cards }) => {
      const Slot = Cards as React.FC;
      return (
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24 items-stretch">
          <Slot />
        </div>
      );
    },
  },
  DonatePaymentCard: {
    label: "Payment method card",
    permissions: {
      delete: true,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      heading: { type: "text", label: "Card heading (e.g. Donate Online)" },
      description: { type: "textarea", label: "Description" },
      buttonLabel: { type: "text", label: "Button label (e.g. Donate via Zeffy)" },
      buttonUrl: { type: "text", label: "Button URL" },
      badge: {
        type: "text",
        label: "Badge (optional, e.g. Recommended, Zero Fees)",
      },
      featured: {
        type: "radio",
        label: "Visual style",
        options: [
          { label: "Featured (blue border + shadow)", value: "featured" },
          { label: "Standard (plain)", value: "standard" },
        ],
      },
    },
    defaultProps: {
      heading: "New payment method",
      description: "",
      buttonLabel: "Donate",
      buttonUrl: "",
      badge: "",
      featured: "standard",
    },
    render: ({ heading, description, buttonLabel, buttonUrl, badge, featured }) => (
      <PaymentCardRender
        heading={heading}
        description={description}
        buttonLabel={buttonLabel}
        buttonUrl={buttonUrl}
        badge={badge || undefined}
        featured={featured === "featured"}
      />
    ),
  },
};
