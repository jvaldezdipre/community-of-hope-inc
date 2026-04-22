import type { Config } from "@measured/puck";

/**
 * Puck primitives used across multiple pages.
 * Add new cross-page components (e.g. generic CTA block) here.
 */
export type SharedPuckProps = {
  Heading: { text: string };
  Paragraph: { text: string };
};

export const sharedPuckComponents: Config<SharedPuckProps>["components"] = {
  Heading: {
    label: "Page heading (H1)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      text: { type: "text", label: "Heading text" },
    },
    defaultProps: {
      text: "Page title",
    },
    render: ({ text }) => (
      <h1
        className="text-[#1A1A1A] mb-4"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        {text}
      </h1>
    ),
  },
  Paragraph: {
    label: "Intro paragraph",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      text: { type: "textarea", label: "Paragraph text" },
    },
    defaultProps: {
      text: "Introductory paragraph.",
    },
    render: ({ text }) => (
      <p
        className="text-[#3D3D3D] mb-16 max-w-[640px]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1rem",
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        {text}
      </p>
    ),
  },
};
