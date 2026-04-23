"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { PhotoCarousel, hopeHousePlaceholderPhotos } from "@/components/ui/PhotoCarousel";
import { getProgramBySlug, processSteps, testimonials, faqs } from "@/lib/constants";

const whatResidentsReceive = [
  { title: "Safe Housing", detail: "A 12-bed, family-style home, not a facility" },
  { title: "Clothing with Dignity", detail: "A boutique experience providing clothing, shoes, and accessories" },
  { title: "Mentoring", detail: "From staff and women who have walked the same road" },
  { title: "Job Readiness", detail: "Resume help, interview prep, and workplace skills" },
  { title: "Leadership Opportunities", detail: "Opportunities to grow, lead, and give back" },
  { title: "Faith-Based Support", detail: "Rooted in love, not requirements or judgment" },
  { title: "Community", detail: "Women supporting women through accountability and friendship" },
];

const programDetails = [
  { label: "Beds", value: "12" },
  { label: "Program Length", value: "6–18 months" },
  { label: "Cost", value: "Free" },
  { label: "Age Requirement", value: "18+" },
  { label: "Intake", value: "Based on availability" },
  { label: "Service Area", value: "All of Connecticut" },
];

// Pull the Hope House graduate testimonial
const houseTestimonial = testimonials[0];

// Pull FAQs most relevant to Hope House
const relevantFaqQuestions = [
  "How quickly can someone move in?",
  "Is this a religious program? Do residents have to be Christian?",
  "What does the program include?",
  "How long does someone stay at Hope House?",
  "Is there a cost for residents?",
];
const relevantFaqs = faqs.filter((f) => relevantFaqQuestions.includes(f.question));

const sectionPadding = "clamp(48px, 8vw, 80px)";
const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function TheHousePageContent() {
  const program = getProgramBySlug("hope-house")!;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "Hope House", href: "/programs/hope-house" },
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
            className="text-[#3D3D3D] mb-4 max-w-[520px]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            A 12-bed, faith-based recovery residence where women rebuild their
            lives in a safe, family-style community. Mentoring, job readiness,
            and genuine connection. Not a program, a home. No judgment, just a
            conversation.
          </p>
          <p
            className="text-[#3D3D3D] mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.93rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            For women 18+ recovering from addiction, homelessness, or domestic
            violence who need stable housing and a supportive community.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" href="/apply-hope-house">
              Apply Now
            </Button>
            <a
              href="tel:8609124356"
              className="flex items-center gap-2 text-[#458CFE] hover:underline"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 400,
              }}
            >
              <Phone size={15} strokeWidth={1.5} />
              860-912-4356
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
            alt="Hope House recovery home"
            className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
          />
        </motion.div>
            </div>
          </div>
        </section>

        {/* ─── What Residents Receive (beige) ─────────────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
          {/* Left — heading + short pitch */}
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
              What You&apos;ll Receive
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
              Everything you need to start over.
            </h2>
            <p
              className="text-[#3D3D3D] max-w-[380px]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Hope House isn&apos;t just a bed. It&apos;s a full foundation.
              Here&apos;s what every resident receives from day one.
            </p>
          </div>

          {/* Right — two-column checklist */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {whatResidentsReceive.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-3"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              >
                <span
                  className="shrink-0 mt-[3px] w-5 h-5 rounded-full bg-[#458CFE]/10 flex items-center justify-center"
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#458CFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p
                    className="text-[#1A1A1A] mb-0.5"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
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

        {/* ─── Program Details / At a glance (white) ───────── */}
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
                className="block text-[#3D3D3D] mb-1"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.84rem",
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

        {/* ─── Process Steps (dark, with image) ────────────── */}
        <section
          className="relative overflow-hidden bg-[#0F1D33]"
          style={{ padding: `${sectionPaddingLg} 0` }}
        >
          {/* Background image — hand reaching for doorknob */}
          <img
            src="/hopehouse1.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Navy overlay — darker top/bottom for text anchors, lighter mid-band
              so the warm doorway glow breathes through. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,29,51,0.88) 0%, rgba(15,29,51,0.68) 45%, rgba(15,29,51,0.72) 60%, rgba(15,29,51,0.9) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1200px] mx-auto px-6">
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
                The Path Forward
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
                From your first call to a brand new life.
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {processSteps.map((step, i) => (
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
                      fontSize: "0.9rem",
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

        {/* ─── Photo Carousel (beige) ─────────────────────── */}
        <PhotoCarousel
          photos={hopeHousePlaceholderPhotos}
          eyebrow="Inside Hope House"
          heading="A home, not a facility."
          description="Take a look inside Hope House — the rooms, the grounds, and the community that makes this place feel like home from day one."
          background="beige"
        />

        {/* ─── Testimonial (white) ─────────────────────────── */}
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
                &ldquo;{houseTestimonial.quote}&rdquo;
              </p>
              <span
                className="block mt-6 text-[#3D3D3D]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.93rem",
                  fontWeight: 300,
                }}
              >
                — {houseTestimonial.name}, {houseTestimonial.context}
              </span>
            </motion.div>
          </div>
        </section>

        {/* ─── Personal Growth & Leadership (beige, with atmospheric bg) ─ */}
        <section
          className="relative overflow-hidden bg-[#FAF8F5]"
          style={{ padding: `${sectionPaddingLg} 0` }}
        >
          {/* Background image — golden hour through bare branches */}
          <img
            src="/hope2.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Heavy cream overlay so the 6 white cards stay legible on top.
              Slight variation top-to-bottom lets the warm glow and branches
              read as atmosphere without competing. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(250,248,245,0.82) 0%, rgba(250,248,245,0.88) 50%, rgba(250,248,245,0.84) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1200px] mx-auto px-6">
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
                Grow, Lead, Give Back
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
                Recovery is the beginning, not the end.
              </h2>
              <p
                className="text-[#3D3D3D] max-w-[640px] mx-auto mt-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.96rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Hope House isn&apos;t just about getting back on your feet. It&apos;s about discovering who you really are. Through mentoring, workshops, and community, residents build the confidence, skills, and vision to lead their own lives.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "01", title: "Confidence & Self-Worth", description: "Rebuild the belief that you are capable, valuable, and worthy of leading your own life, no matter where you've been." },
                { icon: "02", title: "Communication Skills", description: "Learn to advocate for yourself, set boundaries, and speak with confidence in interviews, meetings, and relationships." },
                { icon: "03", title: "Goal Setting & Planning", description: "Create a personal roadmap for your future, whether that's education, career, housing, or rebuilding your family." },
                { icon: "04", title: "Financial Literacy", description: "Gain practical skills around budgeting, saving, and building financial independence one step at a time." },
                { icon: "05", title: "Mentoring & Community", description: "Connect with women who have walked this road before you. Real mentorship from people who understand your journey." },
                { icon: "06", title: "Leadership Development", description: "Discover the leader inside you. Whether it's leading a team, a household, or a community initiative, you're ready." },
              ].map((item, i) => (
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
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
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

        {/* ─── FAQ (white) ────────────────────────────────── */}
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
          {relevantFaqs.map((faq, i) => (
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
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                {faq.question}
                <span className="text-[#458CFE]/50 text-xl ml-4 shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p
                className="text-[#3D3D3D] pb-4 pr-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {faq.answer}
              </p>
              {faq.helpfulLinks && faq.helpfulLinks.length > 0 && (
                <div className="flex flex-wrap gap-x-5 gap-y-2 pb-6 pr-8">
                  {faq.helpfulLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#458CFE] hover:underline"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      {link.label} &rarr;
                    </a>
                  ))}
                </div>
              )}
            </motion.details>
          ))}
          <div className="border-t border-[#EBEBEB]" />
        </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Bottom CTA (white) ─────────────────────────── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
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
            Ready to take the next step?
          </h2>
          <p
            className="text-[#3D3D3D] mb-8 max-w-[520px] mx-auto"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.96rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Whether you&apos;re seeking help for yourself, referring a client, or reaching out for a loved one, we&apos;re here. No judgment, just a conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/apply-hope-house">
              Apply Now
            </Button>
            <a
              href="tel:8609124356"
              className="flex items-center gap-2 text-[#458CFE] hover:underline"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 400,
              }}
            >
              <Phone size={15} strokeWidth={1.5} />
              860-912-4356
            </a>
          </div>
        </div>
            </motion.div>
          </div>
        </section>

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
