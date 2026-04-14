"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/constants";

type SocialIconsProps = {
  variant?: "light" | "dark";
  size?: number;
  className?: string;
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

export function SocialIcons({ variant = "light", size = 16, className = "" }: SocialIconsProps) {
  const styles = variantStyles[variant];

  const icons = [
    { name: "Facebook", url: socialLinks.facebook, Icon: Facebook },
    { name: "Instagram", url: socialLinks.instagram, Icon: Instagram },
    { name: "LinkedIn", url: socialLinks.linkedin, Icon: Linkedin },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icons.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url ?? "#"}
          target={url ? "_blank" : undefined}
          rel={url ? "noopener noreferrer" : undefined}
          aria-label={`Community of Hope on ${name}`}
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${styles.wrapper}`}
        >
          <Icon size={size} strokeWidth={1.6} className={styles.icon} />
        </a>
      ))}
    </div>
  );
}
