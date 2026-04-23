"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { socialLinks as fallbackLinks } from "@/lib/constants";

export type SocialLinksShape = {
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
};

type SocialIconsProps = {
  variant?: "light" | "dark";
  size?: number;
  className?: string;
  /**
   * Live URLs from the CMS global-settings row. When omitted, falls back to
   * the hardcoded values in lib/constants.ts so pages not yet wired through
   * the layout keep rendering during the transition.
   */
  links?: SocialLinksShape;
};

const variantStyles = {
  light: {
    wrapper: "border-[#EBEBEB] bg-white hover:bg-[#FAF8F5] hover:border-[#458CFE]/40",
    icon: "text-[#1A1A1A]",
  },
  dark: {
    wrapper: "border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30",
    icon: "text-white/85",
  },
} as const;

export function SocialIcons({
  variant = "light",
  size = 16,
  className = "",
  links,
}: SocialIconsProps) {
  const styles = variantStyles[variant];
  const resolved = links ?? fallbackLinks;

  // Hide icons whose URL is empty/null rather than linking to "#".
  const icons = [
    { name: "Facebook", url: resolved.facebook, Icon: Facebook },
    { name: "Instagram", url: resolved.instagram, Icon: Instagram },
    { name: "LinkedIn", url: resolved.linkedin, Icon: Linkedin },
  ].filter((icon) => icon.url);

  if (icons.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icons.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url!}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Community of Hope on ${name}`}
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${styles.wrapper}`}
        >
          <Icon size={size} strokeWidth={1.6} className={styles.icon} />
        </a>
      ))}
    </div>
  );
}
