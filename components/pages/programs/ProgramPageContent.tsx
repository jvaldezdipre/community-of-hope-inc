import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { getProgramBySlug } from "@/lib/constants";

export function ProgramPageContent({ slug }: { slug: string }) {
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <PageLayout>
      <h1
        className="text-[#1A1A1A] mb-2"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        {program.title}
      </h1>
      <p
        className="text-[#458CFE] uppercase mb-8"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          fontWeight: 500,
        }}
      >
        {program.subtitle}
      </p>
      <div className="prose prose-neutral max-w-none">
        <p
          className="text-[#5A5A5A] mb-6 whitespace-pre-line"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          {program.body}
        </p>
      </div>
      <p
        className="mt-10"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        <Link href="/programs" className="text-[#458CFE] hover:underline">
          ← Back to Programs
        </Link>
      </p>
    </PageLayout>
  );
}
