"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import {
  featuredPartnership,
  getSupportersByCategory,
  type Supporter,
} from "@/lib/constants";

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";
const ease = [0.25, 0.1, 0.25, 1] as const;

// ─── Reusable: logo slot with graceful text fallback ─────────
function LogoSlot({
  name,
  logo,
  size = "md",
}: {
  name: string;
  logo?: string | null;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
  };
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        className={`${sizes[size]} w-auto object-contain mx-auto`}
      />
    );
  }
  return (
    <span
      className="text-[#458CFE]/50 block"
      style={{
        fontFamily: "'Libre Baskerville', serif",
        fontSize: size === "lg" ? "1.6rem" : size === "md" ? "1.1rem" : "0.9rem",
        fontWeight: 400,
        letterSpacing: "0.02em",
      }}
      aria-hidden="true"
    >
      {name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 3)
        .toUpperCase()}
    </span>
  );
}

// ─── Reusable: eyebrow label ─────────────────────────────────
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`block uppercase mb-4 ${dark ? "text-[#8FB8FF]" : "text-[#458CFE]"}`}
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.68rem",
        letterSpacing: "0.14em",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

export function SupportersPageContent({
  puckContent,
}: {
  /** Rendered Puck sections for Supporters (hero, and more as each round
   * wraps another section). Renders at the top of the page in place of
   * the hardcoded sections that have been migrated. */
  puckContent?: React.ReactNode;
} = {}) {
  const corporate = getSupportersByCategory("corporate");
  const eventSponsors = getSupportersByCategory("event-sponsor");
  const faith = getSupportersByCategory("faith");
  const professional = getSupportersByCategory("professional");
  const healthcare = getSupportersByCategory("healthcare");
  const community = getSupportersByCategory("community");
  const individuals = getSupportersByCategory("individual");

  return (
    <main className="min-h-screen pb-24 bg-white" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
      {puckContent}
      {!puckContent && (
      <>
      {/* ─── Hero (image with left-aligned text) — fallback only ─── */}
      <section
        className="relative bg-white overflow-hidden"
        style={{ marginTop: "calc(-1 * clamp(100px, 12vw, 160px))" }}
      >
        {/* Background image */}
        <img
          src="/welcomehome.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* White overlay — heavier on the left so text reads, fading right so the image breathes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.2) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="relative max-w-[1200px] mx-auto px-6"
          style={{
            paddingTop: "clamp(140px, 16vw, 208px)",
            paddingBottom: sectionPaddingLg,
            minHeight: "clamp(480px, 60vw, 720px)",
          }}
        >
          <motion.div
            className="max-w-[500px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Eyebrow>With Gratitude</Eyebrow>
            <h1
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Our Supporters
            </h1>
            <p
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Behind every woman rebuilt, every bed filled, every meal shared, there is a
              name on this page. These are the partners, businesses, and neighbors who
              make Community of Hope possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Partnership (beige) ────────────────── */}
      <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-[380px_1fr] gap-10 md:gap-16 items-center bg-white rounded-[8px] border border-[#EBEBEB] p-8 md:p-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex flex-col items-center gap-8">
              {featuredPartnership.partners.map((p) => (
                <div key={p.name} className="flex flex-col items-center">
                  <LogoSlot name={p.name} logo={p.logo} size="lg" />
                  {/* Only show text label when there's no logo (fallback case) */}
                  {!p.logo && (
                    <span
                      className="text-[#1A1A1A] text-center mt-2"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                      }}
                    >
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div>
              <Eyebrow>{featuredPartnership.eyebrow}</Eyebrow>
              <h2
                className="text-[#1A1A1A] mb-5"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {featuredPartnership.headline}
              </h2>
              <p
                className="text-[#3D3D3D] mb-6"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.96rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {featuredPartnership.body}
              </p>
              <Link
                href="/programs/hope-house"
                className="text-[#458CFE] hover:underline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                Learn more about Hope House &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Corporate Partners (white) ──────────────────── */}
      <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
          >
            <Eyebrow>Corporate Partners</Eyebrow>
            <h2
              className="text-[#1A1A1A] max-w-[560px] mx-auto"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              The organizations carrying us forward.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporate.map((s, i) => (
              <SupporterCard key={s.name} supporter={s} index={i} featured />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Event Sponsors (beige) ──────────────────────── */}
      <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
          >
            <Eyebrow>2 Hearts 1 Sound Mind &middot; February 2025</Eyebrow>
            <h2
              className="text-[#1A1A1A] max-w-[560px] mx-auto"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Event Sponsors
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {eventSponsors.map((s, i) => (
              <SupporterCard key={s.name} supporter={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gratitude Break (image + pull quote) ────────── */}
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        {/* Background image */}
        <img
          src="/supporter2.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay — heavier on the left where the quote sits, fading right so
            the notes + teacup breathe. Same treatment as the hero. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(250,248,245,0.92) 0%, rgba(250,248,245,0.82) 35%, rgba(250,248,245,0.45) 65%, rgba(250,248,245,0.15) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="relative max-w-[1200px] mx-auto px-6 flex items-center"
          style={{
            minHeight: "clamp(340px, 40vw, 460px)",
            paddingTop: "clamp(56px, 7vw, 88px)",
            paddingBottom: "clamp(56px, 7vw, 88px)",
          }}
        >
          <motion.blockquote
            className="max-w-[460px] text-[#1A1A1A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
              fontWeight: 400,
              lineHeight: 1.35,
              fontStyle: "italic",
            }}
          >
            <span
              className="block mb-4 text-[#458CFE]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "2.5rem",
                lineHeight: 1,
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            Every name on this page changed a life.
          </motion.blockquote>
        </div>
      </section>

      {/* ─── By Category (white) ─────────────────────────── */}
      <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
        <div className="max-w-[820px] mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Partners across the community.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-14 md:gap-16">
            <CategoryList label="Faith Community" items={faith} />
            <CategoryList label="Professional Services" items={professional} />
            <CategoryList label="Healthcare &amp; Social Services" items={healthcare} />
            <CategoryList label="Community Organizations" items={community} />
          </div>
        </div>
      </section>

      {/* ─── Individual Supporters (beige) ───────────────── */}
      <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
          >
            <Eyebrow>With Deep Thanks</Eyebrow>
            <h2
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Individual Supporters
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 text-center">
            {individuals.map((person, i) => (
              <motion.p
                key={person.name}
                className="text-[#1A1A1A]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                {person.name}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA (dark, with image) ───────────────── */}
      <section
        className="relative bg-[#0F1D33] overflow-hidden"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        {/* Background image */}
        <img
          src="/supporter1.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Navy overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,29,51,0.78) 0%, rgba(15,29,51,0.86) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center max-w-[640px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease }}
          >
            <Eyebrow dark>Be Part Of This Story</Eyebrow>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Your name could be here.
            </h2>
            <p
              className="text-white/70 mb-10"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Every supporter on this page chose to show up for women who needed a hand.
              You can make that same choice today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primaryOnWhite" as="a" href="/donate">
                Donate
              </Button>
              <Button variant="outlineOnBlue" as="a" href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </>
      )}
    </main>
  );
}

// ─── Supporter card (used in corporate + event sections) ────
function SupporterCard({
  supporter,
  index,
  featured = false,
}: {
  supporter: Supporter;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center text-center ${
        featured ? "p-6 min-h-[160px]" : "p-4 min-h-[100px]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    >
      {/* Featured (corporate) cards: always show logo slot — large */}
      {featured && (
        <div className={supporter.logo ? "" : "mb-4"}>
          <LogoSlot name={supporter.name} logo={supporter.logo} size="lg" />
        </div>
      )}
      {/* Non-featured (event sponsor) cards: show logo when present, otherwise name */}
      {!featured && supporter.logo && (
        <LogoSlot name={supporter.name} logo={supporter.logo} size="md" />
      )}
      {/* Name label: hide when a logo is already showing it */}
      {!supporter.logo && (
        <p
          className="text-[#1A1A1A]"
          style={{
            fontFamily: featured ? "'Libre Baskerville', serif" : "'Outfit', sans-serif",
            fontSize: featured ? "1rem" : "0.92rem",
            fontWeight: featured ? 400 : 500,
            lineHeight: 1.3,
          }}
        >
          {supporter.name}
        </p>
      )}
      {supporter.notes && !supporter.logo && (
        <span
          className="text-[#3D3D3D] mt-1"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 300,
          }}
        >
          {supporter.notes}
        </span>
      )}
    </motion.div>
  );
}

// ─── Category list (faith, pro services, healthcare, community) ──
function CategoryList({ label, items }: { label: string; items: Supporter[] }) {
  if (items.length === 0) return null;
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease }}
    >
      <Eyebrow>{label}</Eyebrow>
      <div className="relative pt-6">
        {/* Centered divider line */}
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-20 bg-[#458CFE]/30"
          aria-hidden="true"
        />
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[620px] mx-auto">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center justify-center text-center min-h-[64px]"
            >
              {item.logo ? (
                <LogoSlot name={item.name} logo={item.logo} size="md" />
              ) : (
                <span
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.96rem",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {item.name}
                  {item.notes && (
                    <span
                      className="text-[#3D3D3D] ml-1"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                      }}
                    >
                      &mdash; {item.notes}
                    </span>
                  )}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
