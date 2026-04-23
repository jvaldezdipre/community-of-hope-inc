"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import type { SocialLinksShape } from "@/components/ui/SocialIcons";

interface LayoutProps {
  children: ReactNode;
  socialLinks: SocialLinksShape;
}

export function Layout({ children, socialLinks }: LayoutProps) {
  const pathname = usePathname();
  // Admin/editor routes render full-bleed without the public site chrome.
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      {children}
      <Footer socialLinks={socialLinks} />
      <StickyMobileCTA />
    </div>
  );
}
