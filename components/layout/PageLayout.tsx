import { ReactNode } from "react";

export function PageLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`min-h-screen pt-[120px] pb-24 ${className}`}
      style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">{children}</div>
    </main>
  );
}
