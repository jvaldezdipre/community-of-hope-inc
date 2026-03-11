"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { getProgramBySlug, testimonials } from "@/lib/constants";

const coachingTestimonial = testimonials.find((t) => t.context.includes("Recovery Coach"))!;

const whatYoullLearn = [
  { title: "Ethics & Boundaries", detail: "Professional standards for peer support relationships" },
  { title: "Recovery Capital", detail: "Identifying and building strengths that sustain long-term recovery" },
  { title: "Stages of Change", detail: "Understanding where someone is and meeting them there" },
  { title: "Motivational Interviewing", detail: "Guiding conversations that inspire action and hope" },
  { title: "Peer Support Skills", detail: "Active listening, empathy, and walking alongside others" },
  { title: "Building Recovery Plans", detail: "Helping others create personalized pathways forward" },
  { title: "Cultural Competency", detail: "Serving people from all backgrounds with sensitivity" },
  { title: "Self-Care in Recovery", detail: "Protecting your own wellness while helping others heal" },
];

const programDetails = [
  { label: "Certification", value: "CCAR Recovery Coach" },
  { label: "Cost", value: "Free for residents" },
  { label: "Who It's For", value: "Women in recovery" },
  { label: "Format", value: "Training + practice" },
  { label: "Outcome", value: "Professional credential" },
  { label: "Led By", value: "Community of Hope" },
];

const certificationSteps = [
  {
    number: "1",
    title: "Express Interest",
    description:
      "Talk to staff about starting the certification process. We'll help you determine if you're ready and what to expect.",
  },
  {
    number: "2",
    title: "Complete Training",
    description:
      "Attend the CCAR Recovery Coach Academy — an intensive, multi-day training covering everything you need to know.",
  },
  {
    number: "3",
    title: "Supervised Practice",
    description:
      "Gain hands-on experience supporting others in recovery with guidance from experienced coaches and staff.",
  },
  {
    number: "4",
    title: "Earn Your Credential",
    description:
      "Receive your CCAR Recovery Coach certification — a recognized professional credential that opens doors.",
  },
];

const coachingFaqs = [
  {
    question: "What is CCAR Recovery Coaching?",
    answer:
      "CCAR (Connecticut Community for Addiction Recovery) Recovery Coaching is a peer-based support model. Certified Recovery Coaches use their own lived experience to help others navigate recovery — not as counselors or therapists, but as guides who've walked the same road.",
  },
  {
    question: "Do I have to be a Hope House resident to get certified?",
    answer:
      "The program is primarily offered to Hope House residents and graduates, but community members interested in certification can reach out to discuss availability. We want to make this opportunity as accessible as possible.",
  },
  {
    question: "What does the training involve?",
    answer:
      "The CCAR Recovery Coach Academy is a multi-day intensive training covering recovery coaching fundamentals, ethics, motivational interviewing, recovery capital, and practical skills. You'll learn through instruction, group work, and real-world practice.",
  },
  {
    question: "How long does it take to get certified?",
    answer:
      "The academy training itself runs several days. After that, you'll complete supervised practice hours. The full process from start to certification varies based on individual pace, but our team supports you every step of the way.",
  },
  {
    question: "Is there a cost for the certification?",
    answer:
      "For Hope House residents and graduates, the certification program is provided at no cost. We believe every woman who wants to turn her story into a career should have the opportunity to do so, regardless of finances.",
  },
];

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function RecoveryCoachingPageContent() {
  const program = getProgramBySlug("recovery-coaching")!;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "Recovery Coaching", href: "/programs/recovery-coaching" },
        ]}
      />
      <main className="min-h-screen pb-24 bg-white" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
        {/* ─── Hero (white) ───────────────────────────────── */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6" style={{ paddingTop: "clamp(32px, 4vw, 48px)", paddingBottom: sectionPaddingLg }}>
            <div className="grid md:grid-cols-[1fr_440px] gap-10 md:gap-16 items-center">
              <motion.div
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
                  {program.subtitle}
                </span>
                <h1
                  className="text-[#1A1A1A] mb-4"
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
                  className="text-[#5A5A5A] mb-4 max-w-[520px]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                    fontWeight: 300,
                  }}
                >
                  Turn your lived experience into a professional credential. Our
                  CCAR Recovery Coach certification program helps women in
                  recovery become the guides they once needed — equipped to
                  support others on the same journey.
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
                  Free for Hope House residents. Open to graduates and community members.
                </p>
                <div className="flex flex-wrap items-center gap-4">
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
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ImageWithFallback
                  src={program.image}
                  alt="Women mentoring and recovery coaching"
                  className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── What You'll Learn (beige) ──────────────────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div>
                <span
                  className="block text-[#458CFE] uppercase mb-4"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    fontWeight: 500,
                  }}
                >
                  What You&apos;ll Learn
                </span>
                <h2
                  className="text-[#1A1A1A] mb-4"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  Real skills to help real people.
                </h2>
                <p
                  className="text-[#5A5A5A] max-w-[380px]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  The CCAR Recovery Coach Academy covers everything you need to
                  support others through recovery — with confidence, compassion,
                  and professional training behind you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {whatYoullLearn.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  >
                    <span className="shrink-0 mt-[3px] w-5 h-5 rounded-full bg-[#458CFE]/10 flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#458CFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p
                        className="text-[#1A1A1A] mb-0.5"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-[#5A5A5A]"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.82rem",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── At a Glance (white) ────────────────────────── */}
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
                At a glance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {programDetails.map((d, i) => (
                  <motion.div
                    key={d.label}
                    className="border-l-2 border-[#458CFE]/20 pl-5 py-1"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  >
                    <span
                      className="block text-[#5A5A5A] mb-1"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 300,
                      }}
                    >
                      {d.label}
                    </span>
                    <span
                      className="text-[#1A1A1A]"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "1.05rem",
                        fontWeight: 400,
                      }}
                    >
                      {d.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Path to Certification (dark) ───────────────── */}
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
                The Path to Certification
              </motion.span>
              <motion.h2
                className="text-white max-w-[550px] mx-auto"
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
                From lived experience to professional credential.
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {certificationSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#8FB8FF]/30 text-[#8FB8FF] mb-4 mx-auto">
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
                    className="text-white mb-2"
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
                    className="text-white/70 max-w-[260px] mx-auto"
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

        {/* ─── Testimonial (white) ────────────────────────── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
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
                &ldquo;{coachingTestimonial.quote}&rdquo;
              </p>
              <span
                className="block mt-6 text-[#5A5A5A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                }}
              >
                — {coachingTestimonial.name}, {coachingTestimonial.context}
              </span>
            </motion.div>
          </div>
        </section>

        {/* ─── Who This Is For (beige) ────────────────────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
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
                Who This Is For
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
                Your story is your qualification.
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {[
                  "Current Hope House residents ready to earn a professional credential",
                  "Program graduates who want to give back and build a career",
                  "Women in recovery who want to turn experience into purpose",
                  "Community members interested in peer support certification",
                  "Anyone passionate about helping others navigate recovery",
                  "Social workers or organizations looking to refer candidates",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  >
                    <span className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-[#458CFE]" />
                    <p
                      className="text-[#5A5A5A]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
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
                {coachingFaqs.map((faq, i) => (
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
                  Ready to turn your story into a career?
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
                  Reach out to learn more about the CCAR Recovery Coach
                  certification program. We&apos;ll walk you through the process and
                  help you take the first step.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="primary" as="a" href="/contact">
                    Contact Us
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
