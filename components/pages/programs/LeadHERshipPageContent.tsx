"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getProgramBySlug } from "@/lib/constants";

const NOMINATIONS_FORM_URL =
  "https://docs.google.com/forms/d/1Zgi7z06LejTq1k5eHz4iYgyhcWW9Tnb0ahidj2urrlU/viewform";

const sponsorshipTiers = [
  {
    name: "Gold Sponsor",
    price: "$5,000",
    available: "1 available",
    benefits: [
      "Premier vendor table in the Hunt Room",
      "Logo on all event marketing materials, program, and signage",
      "Option to speak at event (2–3 minutes)",
      "Full double-page color ad in event program",
      "Banner on display",
      "Add swag to gift bags",
      "10 seats at full table",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$2,500",
    available: "3 available",
    benefits: [
      "Full-page ad in event program",
      "5 event tickets",
      "Recognition from stage during event",
      "Option to add to swag bag",
      "Vendor table available",
    ],
  },
  {
    name: "Bronze Table Sponsor",
    price: "$1,000",
    available: "15 available",
    benefits: [
      "Shared table with nonprofit chosen by team",
      "Logo and quarter-page ad in program",
      "5 sponsor tickets + 5 nonprofit tickets",
    ],
  },
  {
    name: "Copper Sponsor",
    price: "$500",
    available: "20 available",
    benefits: [
      "Business card-size ad in program",
      "Listed on sponsor board",
      "Option to add to swag bag",
      "5 tickets donated to nonprofit",
    ],
  },
  {
    name: "Champion of Change",
    price: "$200",
    available: "40 available",
    benefits: [
      "Sponsor two individuals for event seats",
      "Name listed in program and on sponsor board",
    ],
  },
];

const eventFaqs = [
  {
    question: "What is LeadHerships?",
    answer:
      "LeadHerships is an initiative of Community of Hope designed to honor and empower women who are actively serving others. Each year, nonprofit partners are invited to nominate an honoree who reflects leadership, resilience, and impact in their community.",
  },
  {
    question: "How does the nomination process work?",
    answer:
      "Each invited nonprofit partner selects one honoree who reflects leadership, resilience, and impact. Nominations are submitted through our Google Form. At the celebration, honorees and their organizations receive recognition.",
  },
  {
    question: "How can my organization get involved?",
    answer:
      "There are many ways to participate: become a sponsor, nominate an honoree, volunteer at the event, or contribute items for swag bags and raffle baskets. Contact us to discuss how your organization can be part of LeadHerships.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "Nonprofits rarely get to attend their own events without incurring costs. LeadHerships changes that. Each nonprofit partner receives 2 complimentary luncheon tickets. Additional tickets are available through sponsorship packages.",
  },
  {
    question: "How can I become a sponsor?",
    answer:
      "We offer sponsorship packages from $200 to $5,000 with various benefits. Custom packages are also available. Contact us by phone to discuss sponsorship opportunities.",
  },
];

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function LeadHERshipPageContent() {
  const program = getProgramBySlug("leadherships")!;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "LeadHerships", href: "/programs/leadherships" },
        ]}
      />
      <main className="min-h-screen pb-24 bg-white" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
        {/* ─── Hero with background image ────────────────── */}
        <section
          className="relative bg-white overflow-hidden"
          style={{
            minHeight: "clamp(420px, 50vw, 580px)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/LeadHERships-Facebook Banner Design - Edited.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div
            className="relative max-w-[1200px] mx-auto px-6 flex items-center"
            style={{
              paddingTop: "clamp(48px, 6vw, 80px)",
              paddingBottom: "clamp(48px, 6vw, 80px)",
              minHeight: "clamp(420px, 50vw, 580px)",
            }}
          >
            <motion.div
              className="max-w-[560px]"
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
                A Community of Hope Initiative
              </span>
              <h1 className="mb-5">
                <img
                  src="/leadhership-logo .png"
                  alt="LeadHerships"
                  className="h-[150px] md:h-[200px] w-auto object-contain mix-blend-multiply"
                />
              </h1>
              <p
                className="text-[#3A3A3A] mb-4 italic"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;Inspiring, Elevating, and Empowering all women to have a seat at the table&rdquo;
              </p>
              <p
                className="text-[#3D3D3D] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                LeadHerships is an initiative of Community of Hope designed to
                honor and empower women who are actively serving others. While we
                spotlight women, we also uplift the organizations that stand
                beside them to build stronger, more compassionate communities.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  as="a"
                  href={NOMINATIONS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nominate an Honoree
                </Button>
                <a
                  href="tel:8609128983"
                  className="flex items-center gap-2 text-[#458CFE] hover:underline"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                  }}
                >
                  <Phone size={15} strokeWidth={1.5} />
                  860-912-8983
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── How It Works (beige) ──────────────────────── */}
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
                  How It Works
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
                  Honoring women who lead by serving.
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
                  Nonprofits rarely get to attend their own events without
                  incurring costs. LeadHerships changes that story. We convene,
                  honor, and equip, with recognition, connection, and
                  collaboration at the center.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { title: "Host Invites Partners", detail: "Each year's host invites nonprofit partners to participate. 2026 host: Community of Hope." },
                  { title: "Partners Nominate Honorees", detail: "Each nonprofit partner selects one honoree reflecting leadership, resilience, and impact." },
                  { title: "Celebration & Recognition", detail: "At the luncheon, honorees and their organizations receive recognition and celebration." },
                  { title: "Complimentary Tickets", detail: "Each nonprofit partner receives 2 complimentary luncheon tickets. No cost to attend." },
                ].map((item, i) => (
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

        {/* ─── Upcoming Event (white) ────────────────────── */}
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
                Upcoming Event
              </span>
              <h2
                className="text-[#1A1A1A] mb-3"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                I am Woman, Hear Me Roar!
              </h2>
              <p
                className="text-[#3D3D3D] mb-2"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                Date TBD &nbsp;·&nbsp; Location TBD
              </p>
              <p
                className="text-[#3D3D3D] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.96rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                An inspiring luncheon with keynote address, presentation of the
                colors, vibrant basket raffle, and a &ldquo;passport
                experience&rdquo; sparking new partnerships. Stay tuned for
                details.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="primary"
                  as="a"
                  href={NOMINATIONS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nominate an Honoree
                </Button>
                <Button variant="outlineLight" as="a" href="tel:8609128983">
                  Become a Sponsor
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Sponsorship Tiers (dark) ──────────────────── */}
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
                Sponsorship Packages
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
                Your sponsorship celebrates women leaders and fuels collaboration.
              </motion.h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorshipTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  className="rounded-[8px] border border-[#8FB8FF]/15 px-6 py-8"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <span
                    className="block text-[#8FB8FF] mb-1"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                      fontWeight: 400,
                    }}
                  >
                    {tier.price}
                  </span>
                  <h3
                    className="text-white mb-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {tier.name}
                  </h3>
                  <span
                    className="block text-white/40 mb-4"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.84rem",
                      fontWeight: 300,
                    }}
                  >
                    {tier.available}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2 items-start">
                        <span className="shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[#8FB8FF]/50" />
                        <span
                          className="text-white/70"
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.88rem",
                            lineHeight: 1.6,
                            fontWeight: 300,
                          }}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-center text-white/50 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
              }}
            >
              Custom packages available. Call us to discuss.
            </motion.p>
          </div>
        </section>

        {/* ─── Get Involved (white) ──────────────────────── */}
        <section className="bg-white" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] px-6 py-8">
                  <h3
                    className="text-[#1A1A1A] mb-3"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    Volunteer
                  </h3>
                  <p
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    Join us for a day of fun and hospitality, working with
                    like-minded women. Training provided. Contact us to sign up.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] px-6 py-8">
                  <h3
                    className="text-[#1A1A1A] mb-3"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    Donate or Contribute
                  </h3>
                  <p
                    className="text-[#3D3D3D] mb-4"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    Help make LeadHerships special with:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Swag bag items for honorees (20–25 qty)",
                      "Gift certificates and door prizes",
                      "Raffle baskets and in-kind services",
                      "General operating support",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[#458CFE]" />
                        <span
                          className="text-[#3D3D3D]"
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            fontWeight: 300,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ (beige) ──────────────────────────────── */}
        <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2
                className="text-[#1A1A1A] mb-8 text-center"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Common Questions
              </h2>
              <div className="flex flex-col gap-0 max-w-[800px] mx-auto">
                {eventFaqs.map((faq, i) => (
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
                      className="text-[#3D3D3D] pb-6 pr-8"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.95rem",
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
                  Be part of LeadHerships.
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
                  Whether you want to nominate an honoree, sponsor the event,
                  volunteer, or contribute, we&apos;d love to have you at the
                  table.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant="primary"
                    as="a"
                    href={NOMINATIONS_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nominate an Honoree
                  </Button>
                  <a
                    href="tel:8609128983"
                    className="flex items-center gap-2 text-[#458CFE] hover:underline"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
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
