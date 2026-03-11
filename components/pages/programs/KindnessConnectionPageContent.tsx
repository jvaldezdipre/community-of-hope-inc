"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { getProgramBySlug } from "@/lib/constants";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfdEoCnAugAqUBADWEwNDM1zhCGu7Qma8QCPtQkSNJqeznzSw/viewform";

const whatWeProvide = [
  { title: "Food & Groceries", detail: "Fresh and non-perishable food for individuals and families" },
  { title: "Clothing", detail: "Clean, quality clothing for adults and children" },
  { title: "Hygiene Products", detail: "Toiletries and personal care essentials" },
  { title: "Household Items", detail: "Bedding, kitchenware, cleaning supplies, and more" },
  { title: "Car Repairs", detail: "Help getting you back on the road when transportation is a barrier" },
  { title: "Housing Assistance", detail: "Support navigating housing options and applications" },
  { title: "Certification Help", detail: "Assistance pursuing vocational certifications and job training" },
  { title: "Referrals & Support", detail: "Connections to partner organizations and local resources" },
];

const programDetails = [
  { label: "Cost", value: "Free" },
  { label: "Who Can Request", value: "Anyone in need" },
  { label: "Service Area", value: "All of CT & beyond" },
  { label: "Director", value: "Veronica Sullivan" },
  { label: "Response Time", value: "As fast as we can" },
  { label: "How to Request", value: "Form, call, or email" },
];

const howItWorks = [
  {
    number: 1,
    title: "Tell us what you need",
    description:
      "Fill out the request form or call us. Let us know your situation and what would help most.",
  },
  {
    number: 2,
    title: "We review & connect",
    description:
      "Our team reviews your request and reaches out to coordinate pickup, delivery, or next steps.",
  },
  {
    number: 3,
    title: "Receive support",
    description:
      "Get the items or assistance you need — no hoops, no judgment. Just practical help from people who care.",
  },
];

const kindnessFaqs = [
  {
    question: "Do I have to be in a program to get help?",
    answer:
      "No. Kindness Connection is open to anyone in the community — you don't need to be a Hope House resident or part of any program. If you need help, reach out.",
  },
  {
    question: "Is there a cost?",
    answer:
      "Everything we provide through Kindness Connection is free. We're a 501(c)(3) nonprofit funded by donations and community support.",
  },
  {
    question: "What if I need something not on the list?",
    answer:
      "Reach out anyway. If we can't help directly, we'll do our best to connect you with someone who can. Our network of partners covers a wide range of needs.",
  },
  {
    question: "Can I request help for someone else?",
    answer:
      "Absolutely. Family members, social workers, case managers, pastors — anyone can submit a request on behalf of someone in need.",
  },
  {
    question: "How can I donate items to Kindness Connection?",
    answer:
      "We accept donations of food, clothing, hygiene products, and household items. Contact us to coordinate a drop-off or pickup. Every contribution goes directly to a family in need.",
  },
];

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function KindnessConnectionPageContent() {
  const program = getProgramBySlug("kindness-connection")!;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "Kindness Connection", href: "/programs/kindness-connection" },
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
                  Food, clothing, household essentials, car repairs, and more — free,
                  practical support for individuals and families across Connecticut who
                  need a hand right now.
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
                  Open to anyone in the community. No program enrollment required.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer">
                    Request Help
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
                  alt="Kindness Connection community outreach"
                  className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── What We Provide (beige) ─────────────────────── */}
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
                  What We Provide
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
                  Practical help, no strings attached.
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
                  Kindness Connection meets people where they are — with exactly what
                  they need to get through the day and move forward.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {whatWeProvide.map((item, i) => (
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

        {/* ─── How It Works (dark) ─────────────────────────── */}
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
                How It Works
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
                Three steps to getting help.
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {howItWorks.map((step, i) => (
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
                    className="text-white/70 max-w-[280px] mx-auto"
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

        {/* ─── Who This Is For (white) ─────────────────────── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:px-10 md:py-12 shadow-sm">
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
                  If you need help, this is for you.
                </h2>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                  {[
                    "Families facing food insecurity or basic needs gaps",
                    "Individuals who need clothing, hygiene products, or household items",
                    "Anyone dealing with a transportation barrier (car repairs)",
                    "People seeking help with housing applications or resources",
                    "Community members looking for vocational certification support",
                    "Social workers, pastors, or case managers referring someone in need",
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ (beige) ────────────────────────────────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
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
                {kindnessFaqs.map((faq, i) => (
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
                  Need help? Let us know.
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
                  Fill out the request form and our team will follow up. You can also
                  call us directly — we&apos;re happy to talk through what you need.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="primary" as="a" href={FORM_URL} target="_blank" rel="noopener noreferrer">
                    Fill Out the Request Form
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
        <section className="bg-white pb-24">
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
