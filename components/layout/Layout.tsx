import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      {children}
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
