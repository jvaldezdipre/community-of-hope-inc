"use client";

import Link from "next/link";

export function StoriesPageContent({
  puckContent,
}: {
  puckContent?: React.ReactNode;
} = {}) {
  return (
    <main
      className="min-h-screen pb-24 bg-white"
      style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
    >
      {puckContent}

      {/* ─── Back link ──────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="pt-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            <Link href="/" className="text-[#458CFE] hover:underline">
              &larr; Back to Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
