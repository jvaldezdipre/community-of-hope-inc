import { forwardRef } from "react";

const fontStyle = {
  fontFamily: "'Outfit', sans-serif",
} as const;

const variantStyles: Record<
  string,
  { className: string; style?: React.CSSProperties }
> = {
  // Solid blue (Hero, form submit, sticky bar)
  primary: {
    className:
      "inline-flex items-center justify-center bg-[#458CFE] text-white px-9 py-4 rounded-full hover:bg-[#3170DE] transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 500 },
  },
  primaryFull: {
    className:
      "w-full bg-[#458CFE] text-white py-4 rounded-full hover:bg-[#3170DE] transition-colors cursor-pointer",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 500 },
  },
  primaryCompact: {
    className:
      "inline-flex items-center justify-center bg-[#458CFE] text-white py-3 rounded-full",
    style: { ...fontStyle, fontSize: "0.88rem", fontWeight: 500 },
  },
  // White bg on blue section (FinalCTA "Get Help Now")
  primaryOnWhite: {
    className:
      "inline-flex items-center justify-center bg-white text-[#458CFE] px-8 py-4 rounded-full hover:bg-white/90 transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 500 },
  },
  // White bg with icon (MidCTA "Call Now")
  primaryOnWhiteWithGap: {
    className:
      "inline-flex items-center justify-center gap-2 bg-white text-[#458CFE] px-7 py-4 rounded-full hover:bg-white/90 transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 500 },
  },
  // Outline on dark hero
  outlineOnDark: {
    className:
      "inline-flex items-center justify-center border border-white/25 text-white/80 px-9 py-4 rounded-full hover:border-white/50 hover:text-white transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 400 },
  },
  // Outline white on blue section (MidCTA, FinalCTA secondary)
  outlineOnBlue: {
    className:
      "inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full hover:border-white/60 transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 400 },
  },
  outlineOnBlueWithGap: {
    className:
      "inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-full hover:border-white/60 transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 400 },
  },
  // Outline on light background (e.g. Donate page PayPal card)
  outlineLight: {
    className:
      "inline-flex items-center justify-center border-2 border-[#458CFE] text-[#458CFE] bg-transparent px-8 py-4 rounded-full hover:bg-[#458CFE]/5 transition-colors",
    style: { ...fontStyle, fontSize: "0.95rem", fontWeight: 500 },
  },
  // Sticky mobile bar
  stickyOutline: {
    className:
      "flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[#458CFE] text-[#458CFE] py-3 rounded-full",
    style: { ...fontStyle, fontSize: "0.88rem", fontWeight: 500 },
  },
  stickyPrimary: {
    className:
      "flex-1 inline-flex items-center justify-center bg-[#458CFE] text-white py-3 rounded-full",
    style: { ...fontStyle, fontSize: "0.88rem", fontWeight: 500 },
  },
  // Navbar desktop phone (base; add className for scrolled vs transparent)
  navPhone: {
    className:
      "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-400",
    style: { ...fontStyle, fontSize: "0.88rem" },
  },
  // Navbar mobile menu phone
  navPhoneMobile: {
    className:
      "flex items-center justify-center gap-2 bg-[#458CFE] text-white px-5 py-3 rounded-full mt-2",
    style: { ...fontStyle, fontSize: "0.9rem" },
  },
};

export type ButtonVariant = keyof typeof variantStyles;

type BaseProps = {
  variant: ButtonVariant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as?: "a";
    href: string;
    type?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function isAnchorRest(
  rest: Record<string, unknown>
): rest is Record<string, unknown> & { href: string } {
  return "href" in rest && typeof rest.href === "string";
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant, className = "", style, children, ...rest }, ref) {
    const variantConfig = variantStyles[variant];
    if (!variantConfig) {
      console.warn(`Unknown Button variant: ${variant}`);
    }
    const baseClassName = variantConfig?.className ?? "";
    const baseStyle = variantConfig?.style ?? {};
    const mergedClassName = className
      ? `${baseClassName} ${className}`.trim()
      : baseClassName;
    const mergedStyle = style ? { ...baseStyle, ...style } : baseStyle;

    if (isAnchorRest(rest)) {
      const { as, ...anchorRest } = rest;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={mergedClassName}
          style={mergedStyle}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    const { as, ...buttonRest } = rest;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonRest.type ?? "button"}
        className={mergedClassName}
        style={mergedStyle}
        {...buttonRest}
      >
        {children}
      </button>
    );
  }
);
