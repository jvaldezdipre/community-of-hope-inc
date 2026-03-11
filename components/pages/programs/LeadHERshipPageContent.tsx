"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { getProgramBySlug } from "@/lib/constants";

const offerings = [
  {
    icon: "01",
    title: "Confidence & Self-Worth",
    description:
      "Rebuild the belief that you are capable, valuable, and worthy of leading your own life — no matter where you've been.",
  },
  {
    icon: "02",
    title: "Communication Skills",
    description:
      "Learn to advocate for yourself, set boundaries, and speak with confidence in interviews, meetings, and relationships.",
  },
  {
    icon: "03",
    title: "Goal Setting & Planning",
    description:
      "Create a personal roadmap for your future — whether that's education, career, housing, or rebuilding your family.",
  },
  {
    icon: "04",
    title: "Financial Literacy",
    description:
      "Gain practical skills around budgeting, saving, and building financial independence one step at a time.",
  },
  {
    icon: "05",
    title: "Mentoring & Community",
    description:
      "Connect with women who have walked this road before you. Real mentorship from people who understand your journey.",
  },
  {
    icon: "06",
    title: "Leadership Development",
    description:
      "Discover the leader inside you. Whether it's leading a team, a household, or a community initiative — you're ready.",
  },
];

const audienceSegments = [
  {
    title: "Women in Recovery",
    description: "Building a new life and ready to discover who they really are.",
  },
  {
    title: "Hope House Residents",
    description: "Taking the next step beyond housing into personal growth.",
  },
  {
    title: "Program Graduates",
    description: "Continuing to grow and stepping into leadership roles.",
  },
  {
    title: "Community Women",
    description: "Any woman who wants to build confidence, skills, and purpose.",
  },
];

const growthSteps = [
  {
    number: "1",
    title: "Join the Program",
    description: "Reach out or talk to staff. There's no application fee and no prerequisites — just a willingness to grow.",
  },
  {
    number: "2",
    title: "Learn & Practice",
    description: "Attend workshops, mentoring sessions, and group activities designed to build real-world skills and confidence.",
  },
  {
    number: "3",
    title: "Step Into Your Role",
    description: "Apply what you've learned — in your career, your family, your community. You were made to lead.",
  },
];

const leadhershipFaqs = [
  {
    question: "What is LeadHERship?",
    answer:
      "LeadHERship is a personal development and empowerment program for women. It focuses on building confidence, leadership skills, financial literacy, and practical tools that help women step into stronger roles in their lives — at work, at home, and in the community.",
  },
  {
    question: "Do I have to be a Hope House resident?",
    answer:
      "No. LeadHERship is open to Hope House residents, graduates, and any woman in the community who wants to grow. If you're looking for a supportive environment to build yourself up, this program is for you.",
  },
  {
    question: "Is there a cost?",
    answer:
      "LeadHERship is completely free. We believe every woman deserves access to the tools and support she needs to lead her own life — regardless of her financial situation.",
  },
  {
    question: "What kind of time commitment is involved?",
    answer:
      "The program is flexible and designed to meet women where they are. Contact us to learn about the current schedule and how you can participate at your own pace.",
  },
  {
    question: "I don't see myself as a leader. Is this still for me?",
    answer:
      "Absolutely — that's exactly who this is for. Leadership isn't about a title. It's about believing in yourself, making decisions with confidence, and showing up for your life. LeadHERship helps you see what's already inside you.",
  },
];

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function LeadHERshipPageContent() {
  const program = getProgramBySlug("leadhership")!;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "LeadHERship", href: "/programs/leadhership" },
        ]}
      />
      <main className="min-h-screen pb-24 bg-white" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
        {/* ─── Hero (white) — centered layout ────────────── */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6" style={{ paddingTop: "clamp(32px, 4vw, 48px)", paddingBottom: sectionPaddingLg }}>
            <motion.div
              className="text-center max-w-[680px] mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                Women&apos;s Empowerment
              </span>
              <h1
                className="text-[#1A1A1A] mb-5"
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
                className="text-[#5A5A5A] mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                You&apos;ve survived the hardest parts. Now it&apos;s time to lead.
                LeadHERship helps women build the confidence, skills, and vision to
                step into stronger roles — in their careers, their families, and
                their communities.
              </p>
              <p
                className="text-[#5A5A5A] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                Free and open to all women — residents, graduates, and community members.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" as="a" href="/contact">
                  Get Started
                </Button>
                <a
                  href="tel:8609128983"
                  className="flex items-center gap-2 text-[#458CFE] hover:underline"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                  }}
                >
                  <Phone size={15} strokeWidth={1.5} />
                  860-912-8983
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ImageWithFallback
                src={program.image}
                alt="Women supporting and empowering each other"
                className="w-full h-[300px] md:h-[420px] object-cover rounded-[8px]"
              />
            </motion.div>
          </div>
        </section>

        {/* ─── What You'll Build (beige) — 3-col cards ─────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                }}
              >
                What You&apos;ll Build
              </span>
              <h2
                className="text-[#1A1A1A] max-w-[500px] mx-auto"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                The skills to lead your own life.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, i) => (
                <motion.div
                  key={item.icon}
                  className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <span
                    className="block text-[#458CFE]/30 mb-4"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                    }}
                  >
                    {item.icon}
                  </span>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#5A5A5A]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why It Matters (white) — centered narrative ─── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              className="max-w-[720px] mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                }}
              >
                Why It Matters
              </span>
              <h2
                className="text-[#1A1A1A] mb-6"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Recovery is the beginning, not the end.
              </h2>
              <p
                className="text-[#5A5A5A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                Getting clean and finding stability is a huge accomplishment — but
                what comes next? Many women leave programs unsure of who they are
                outside of their past. LeadHERship bridges that gap. It&apos;s
                where women go from surviving to thriving — discovering their
                strengths, building practical skills, and stepping into roles they
                never imagined for themselves. A mother who leads her household
                with confidence. An employee who speaks up in meetings. A woman who
                mentors others because she knows what it took to get here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── Who It's For (dark) — audience cards ──────── */}
        <section className="bg-[#0F1D33]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <motion.span
                className="block text-[#8FB8FF] uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                Who It&apos;s For
              </motion.span>
              <motion.h2
                className="text-white max-w-[500px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Every woman has a leader inside her.
              </motion.h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audienceSegments.map((segment, i) => (
                <motion.div
                  key={segment.title}
                  className="text-center px-4 py-8 rounded-[8px] border border-[#8FB8FF]/15"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {segment.title}
                  </h3>
                  <p
                    className="text-white/60"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {segment.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How It Works (white) — 3 steps ─────────────── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
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
                How it works
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {growthSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#458CFE]/10 text-[#458CFE] mb-5 mx-auto">
                    <span
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "1.1rem",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#5A5A5A] max-w-[280px] mx-auto"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Vision (beige) — large centered quote ──────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              className="max-w-[700px] mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p
                className="text-[#1A1A1A] italic"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;She didn&apos;t need someone to save her. She needed
                someone to believe she could save herself — and then give her
                the tools to do it.&rdquo;
              </p>
              <span
                className="block mt-6 text-[#5A5A5A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                }}
              >
                — The LeadHERship Vision
              </span>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ (white) ──────────────────────────────── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2
                className="text-[#1A1A1A] mb-8"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Common Questions
              </h2>
              <div className="flex flex-col gap-0">
                {leadhershipFaqs.map((faq, i) => (
                  <motion.details
                    key={faq.question}
                    className="border-t border-[#EBEBEB] group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  >
                    <summary
                      className="flex items-center justify-between cursor-pointer py-5 text-[#1A1A1A] select-none list-none [&::-webkit-details-marker]:hidden"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                      }}
                    >
                      {faq.question}
                      <span className="text-[#458CFE]/50 text-xl ml-4 shrink-0 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p
                      className="text-[#5A5A5A] pb-6 pr-8"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.8,
                        fontWeight: 300,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.details>
                ))}
                <div className="border-t border-[#EBEBEB]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Bottom CTA (beige) ─────────────────────────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:py-12 md:px-10 text-center shadow-sm">
                <h2
                  className="text-[#1A1A1A] mb-3"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  Ready to discover the leader in you?
                </h2>
                <p
                  className="text-[#5A5A5A] mb-8 max-w-[520px] mx-auto"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  Reach out to learn more about LeadHERship and how you can start
                  building the confidence, skills, and community to lead your life
                  on your terms.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="primary" as="a" href="/contact">
                    Get Started
                  </Button>
                  <a
                    href="tel:8609128983"
                    className="flex items-center gap-2 text-[#458CFE] hover:underline"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                    }}
                  >
                    <Phone size={15} strokeWidth={1.5} />
                    860-912-8983
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Back link ──────────────────────────────────── */}
        <section className="bg-[#FAF8F5] pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <p
              className="pt-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <Link href="/programs" className="text-[#458CFE] hover:underline">
                &larr; Back to Programs
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
