// ─── Trust Bar Stats ────────────────────────────────────────
export const trustBarStats = [
  { number: "15+", label: "Years Serving\nSoutheastern CT" },
  { number: "12", label: "Beds at\nHope House" },
  { number: "300+", label: "Women's Lives\nTransformed" },
  { number: "4", label: "Recovery & Community\nPrograms" },
];

// ─── Why Us Differentiators ─────────────────────────────────
export const differentiators = [
  {
    number: "01",
    title: "Family, Not a Facility",
    description:
      "Hope House isn't an institution. It's a home. Women live together as a family, sharing meals, responsibilities, and genuine connection. We believe recovery happens in relationship, not isolation.",
  },
  {
    number: "02",
    title: "Faith-Centered Recovery",
    description:
      "Our program is rooted in faith, not as a requirement, but as a foundation. Women are invited into a community that believes in second chances, unconditional love, and the possibility of total transformation.",
  },
  {
    number: "03",
    title: "From Crisis to Career",
    description:
      "We don't just provide shelter. Our women earn certifications like CNA licenses and CCAR Recovery Coach credentials. They leave with skills, confidence, and a real path forward.",
  },
  {
    number: "04",
    title: "Mentors Who've Been There",
    description:
      "Our mentors and staff include women who have walked the same road. They understand the struggle because they've lived it, and they know what it takes to build a new life.",
  },
];

// ─── Testimonials ───────────────────────────────────────────
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  initials: string;
  photo?: string | null; // optional; falls back to initials avatar when unset
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "When I came to Hope House, I was homeless and suicidal. I had nothing. Through the love and structure here, I earned my CNA license, got a car, found an apartment, and rebuilt my relationship with my children. Community of Hope saved my life.",
    name: "Miss R.",
    context: "Hope House Graduate",
    initials: "MR",
    photo: null,
  },
  {
    quote:
      "I've referred several clients to Community of Hope over the years. What sets them apart is the family model. It's not just a bed and rules. The women genuinely support each other, and the staff walks alongside them every step. It's the kind of program I wish existed in every county.",
    name: "Licensed Social Worker",
    context: "Referral Partner, New London County",
    initials: "SW",
    photo: null,
  },
  {
    quote:
      "I didn't think I deserved help. I didn't think anyone would want me. But from day one, they treated me like I mattered. They helped me get clean, get certified, and get my life back. I'm now a Recovery Coach helping other women because of what Hope House gave me.",
    name: "Program Graduate",
    context: "Now a CCAR Certified Recovery Coach",
    initials: "PG",
    photo: null,
  },
];

// ─── Programs ───────────────────────────────────────────────
export type Program = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  goodFor: string;
  image: string;
  slug: string;
  /** Placeholder body for individual program page (CMS later) */
  body: string;
};

export const programs: Program[] = [
  {
    number: "01",
    title: "Hope House",
    subtitle: "Women's Recovery Home",
    slug: "hope-house",
    description:
      "A 12-bed, faith-based recovery residence. Women receive structured support, mentoring, and a safe family-style environment to rebuild their lives. No cost for residents.",
    goodFor:
      "Women 18+ recovering from addiction, homelessness, or domestic violence who need stable housing and a supportive community.",
    image:
      "https://images.unsplash.com/photo-1628077571013-88b0a74d4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGludGVyaW9yJTIwd2FybSUyMHN1bmxpZ2h0JTIwc2FmZXxlbnwxfHx8fDE3NzIzNzcxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body:
      "Hope House is our 12-bed, faith-based recovery home. Women live together as a family, sharing responsibilities and genuine connection. We believe recovery happens in relationship, not isolation. Residents receive mentoring, job readiness support, clothing with dignity, and opportunities to grow, lead, and give back. Program length varies based on individual needs, typically 6 to 18 months. There is no cost for residents. Contact us to learn more or refer someone.",
  },
  {
    number: "02",
    title: "Kindness Connection",
    subtitle: "Community Outreach",
    slug: "kindness-connection",
    description:
      "A community-facing program providing basic necessities including food, clothing, hygiene products, and household items, plus support with car repairs, certifications, and housing help for individuals and families across Connecticut and beyond.",
    goodFor:
      "Community members facing food insecurity or basic needs gaps. Families and individuals seeking local support, including help with transportation, housing, or vocational steps.",
    image:
      "https://images.unsplash.com/photo-1707409066859-a90674383d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBmcmllbmRzaGlwJTIwc3VwcG9ydCUyMGVtYnJhY2V8ZW58MXx8fHwxNzcyMzc3MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    body:
      "Kindness Connection meets practical needs across our community: food, clothing, hygiene products, and household items. We also help with car repairs, certifications, and housing when we can. If you or someone you know needs a hand, reach out. Our team serves all of Connecticut and beyond.",
  },
  {
    number: "03",
    title: "Recovery Coaching",
    subtitle: "CCAR Certification",
    slug: "recovery-coaching",
    description:
      "Our residents and graduates can earn their CCAR Recovery Coach certification, transforming personal experience into a professional credential that helps them serve others. Contact info for this program coming soon.",
    goodFor:
      "Women in recovery who want to turn their story into a career helping others. Also open to community members seeking certification.",
    image:
      "https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRvcmluZyUyMGNvdW5zZWxpbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzIzNzcxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body:
      "Recovery Coaching at Community of Hope includes CCAR Recovery Coach training and certification. Our women turn their experience into a credential that lets them support others in recovery. Details and contact information for this program will be updated soon.",
  },
  {
    number: "04",
    title: "LeadHerships",
    subtitle: "Celebrating Women Leaders",
    slug: "leadherships",
    description:
      "An annual initiative honoring and empowering women who are actively serving others. Nonprofit partners nominate honorees for a celebration of leadership, resilience, and impact.",
    goodFor:
      "Nonprofit organizations, community leaders, and anyone passionate about celebrating women who lead by serving others.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    body:
      "LeadHerships is an initiative of Community of Hope designed to honor and empower women who are actively serving others. While we spotlight women, we also uplift the organizations that stand beside them to build stronger, more compassionate communities. Each year, nonprofit partners nominate honorees for an inspiring celebration.",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

// ─── About Details ──────────────────────────────────────────
export const aboutDetails = [
  { label: "Executive Director", value: "Annette Eldridge" },
  { label: "Status", value: "501(c)(3) Public Charity" },
];

// ─── About Page: Our Story (placeholder until client provides Eversource renovation copy) ───
export const aboutStory =
  "Community of Hope Inc. began over 15 years ago with a single home and a conviction that every woman deserves a real chance at a new life. With the support of partners like Eversource and our community, we renovated and expanded our space to serve more women. Today we operate Hope House as a 12-bed recovery home and run four programs across Connecticut and beyond.";
export const aboutMilestones = [
  { value: "15+", label: "Years of service" },
  { value: "300+", label: "Women's lives transformed" },
  { value: "8 → 12", label: "Beds at Hope House (grown over time)" },
];

// ─── About Page: Leadership & Staff (verify names/roles with Annette) ───
export type LeadershipPerson = { name: string; role: string; photo?: string | null };
export const aboutLeadership = {
  executiveDirector: { name: "Annette Eldridge", title: "Executive Director", photo: null as string | null },
  staff: [
    { name: "Faith Claspell", role: "Program Director", photo: null as string | null },
    { name: "Veronica Sullivan", role: "Kindness Connection Director", photo: null as string | null },
    { name: "Sandra St Germaine", role: "Fundraising Director", photo: null as string | null },
  ] as LeadershipPerson[],
  board: [
    { name: "Julie Brousseau", role: "Chairman", photo: null as string | null },
    { name: "Leslie Carpenter", role: "Secretary", photo: null as string | null },
    { name: "Megan Quinn", role: "Board Member", photo: null as string | null },
    { name: "Stephene Bordelon", role: "Board Member", photo: null as string | null },
  ] as LeadershipPerson[],
};

// ─── About Page: Community Partners (groups we work closely with and recommend) ───
export const communityPartners = [
  {
    name: "Regeneration (Groton Bible Chapel)",
    url: "https://grotonbiblechapel.churchcenter.com/registrations/events/2458371",
    description:
      "Groton Bible Chapel offers a weekly Regeneration meeting. Regeneration is a life recovery program that offers a supportive, Christian group environment.",
  },
  {
    name: "Community Speaks Out",
    url: "https://www.communityspeaksout.org",
    description:
      "CSO is organized and operated to walk families through the process of getting addicted-family members into treatment through financial and logistical assistance, and to foster community support, awareness, and education on addiction and addiction prevention.",
  },
  {
    name: "Groton Alliance for Substance Abuse Prevention (GASP)",
    url: "https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/",
    description:
      "GASP works to reduce and prevent substance abuse among young people in Groton, CT by pulling together businesses, parents, teens, schools, police, youth and health/social service agencies to advance their mission of building a healthy, safe and drug-free community through advocacy and education.",
  },
  {
    name: "Malta Ministries",
    url: "https://www.maltaoutreach.org",
    description: "Malta is a faith-based, non-profit organization serving the homeless in southeastern CT.",
  },
  {
    name: "The Southeastern Council on Alcoholism and Drug Dependence (SCADD)",
    url: "https://www.scadd.org",
    description:
      "SCADD's mission is to provide a treatment environment rich in cultural diversity where individuals and families are empowered to overcome substance abuse issues, thereby improving their quality of life.",
  },
  {
    name: "Work & Learn Inc",
    url: "https://www.worknlearn.us",
    description:
      "Work & Learn is a Bible-based, volunteer-based nonprofit that helps adults transform their lives. It provides free guidance for actions to strengthen spiritual values and career skills with support by volunteer Career Coaches and Christian Mentors.",
  },
  {
    name: "Urban Alliance",
    url: "https://urbanalliance.com/about/",
    description:
      "Urban Alliance's goal is to create opportunities for people to achieve lasting change in their lives through the collaborative work of churches and organizations in their community.",
  },
  {
    name: "Ahava Living",
    url: "https://www.ahavaliving.com/",
    description:
      "Ahava Living is a community partner supporting women on their journey toward healing, stability, and purposeful living.",
  },
];

// ─── Supporters ─────────────────────────────────────────────
// CMS-ready. Groups below are auto-derived from `category`. When CMS is
// wired up, register this as a data model and expose each field.
export type SupporterCategory =
  | "corporate"
  | "event-sponsor"
  | "faith"
  | "professional"
  | "healthcare"
  | "community"
  | "individual";

export type Supporter = {
  name: string;
  category: SupporterCategory;
  logo?: string | null;
  url?: string | null;
  notes?: string;
};

export const supporters: Supporter[] = [
  // ─ Corporate Partners (6 major logos shown prominently) ─
  { name: "Dominion Energy", category: "corporate", logo: "/supporters-logos/Dominion_Energy-«_Horizontal_RGB.jpg" },
  { name: "Foxwoods Resort Casino", category: "corporate", logo: "/supporters-logos/foxwoods-resort-casino-98.jpg" },
  { name: "Lawrence & Memorial Hospital", category: "corporate", logo: "/supporters-logos/YNHHS_LM_hor_clr_cmyk.jpg" },
  { name: "Mohegan Sun", category: "corporate", logo: "/supporters-logos/Mohegan-Sun-logo.png" },
  { name: "Pfizer", category: "corporate", logo: "/supporters-logos/Pfizer-logo.jpg" },
  { name: "Groton Rotary Club", category: "corporate", logo: "/supporters-logos/rotary_sign_default.png" },

  // ─ Event Sponsors (2 Hearts 1 Sound Mind — Feb 2025) ─
  { name: "Chelsea Groton Bank", category: "event-sponsor" },
  { name: "Charter Oak Bank", category: "event-sponsor" },
  { name: "Yale New Haven Health", category: "event-sponsor" },
  { name: "Ahava Living", category: "event-sponsor" },
  { name: "Crocker Ballroom", category: "event-sponsor" },
  { name: "Coastal Business Network", category: "event-sponsor" },
  { name: "Bluprints Unlimited", category: "event-sponsor", notes: "Pat Todd" },
  { name: "Nutmeg Building & Remodeling", category: "event-sponsor", notes: "Denise Nott", logo: "/supporters-logos/d55f3c0bc44b17106054f219509a5ff4.jpg" },
  { name: "RB Kent and Sons", category: "event-sponsor", logo: "/supporters-logos/1179846-rb3-v2.w400.h150.png" },
  { name: "ECHO", category: "event-sponsor" },
  { name: "Clear Path Financial Solutions", category: "event-sponsor" },
  { name: "Hourglass Insurance", category: "event-sponsor", logo: "/supporters-logos/rBVaSVs_wjqAMwTRAAHOBx6kIwU151.jpg" },
  { name: "Open Concepts", category: "event-sponsor" },
  { name: "Southeastern Women's Network", category: "event-sponsor" },

  // ─ Faith Community ─
  { name: "Calvary Chapel", category: "faith" },
  { name: "Groton Bible Chapel", category: "faith" },
  { name: "Groton Heights Baptist Church", category: "faith" },
  { name: "Potters House Church of God", category: "faith" },
  { name: "Revelation Church", category: "faith" },
  { name: "Steadfast Baptist Church", category: "faith" },

  // ─ Professional Services ─
  { name: "Duncklee Inc.", category: "professional", logo: "/supporters-logos/ducklee-final_OL-1.jpg" },
  { name: "Massad Insurance", category: "professional", logo: "/supporters-logos/massad_llc_short.jpg" },
  { name: "TMG Companies", category: "professional" },
  { name: "Project Courage", category: "professional", logo: "/supporters-logos/ProjectCourage.png" },
  { name: "BLU-PRINTS Signs", category: "professional", logo: "/supporters-logos/BLU-PRINTS_header-768x142.png" },
  { name: "Sunrise Home Inspection", category: "professional", logo: "/supporters-logos/Sunrise-Logo.png" },
  { name: "Stonington Institute", category: "professional", logo: "/supporters-logos/logo-1.png" },
  { name: "Fastsigns", category: "professional", logo: "/supporters-logos/Fastsigns.png" },
  { name: "Bouvier Insurance", category: "professional" },
  { name: "Utopia Hair Salon", category: "professional" },
  { name: "Brawn Service Station", category: "professional" },
  { name: "Reagan Construction Group", category: "professional" },

  // ─ Healthcare & Social Services ─
  { name: "Natchaug Hospital", category: "healthcare", logo: "/supporters-logos/HHC_Natchaug_horz-24pt_4C-1.png" },
  { name: "Sound Community Services", category: "healthcare" },
  { name: "Connecticut Behavioral Health", category: "healthcare" },
  { name: "Aware Recovery Care", category: "healthcare" },
  { name: "Southeastern Council on Alcoholism & Drug Dependence", category: "healthcare", logo: "/supporters-logos/SCADD.jpg" },

  // ─ Community Organizations ─
  { name: "Urban Alliance", category: "community" },
  { name: "World Vision", category: "community" },
  { name: "Housing Ministries of New England", category: "community" },
  { name: "NAMI Southeastern CT", category: "community" },
  { name: "Coastal Lodge #57, A.F. & A.M. of CT", category: "community", logo: "/supporters-logos/Clean_Proof_6.jpg" },

  // ─ Individual Supporters ─
  { name: "Megan Quinn", category: "individual" },
  { name: "Linda Labbe", category: "individual" },
  { name: "Brooke Forbes", category: "individual" },
  { name: "Rosemary Robertson", category: "individual" },
  { name: "Gingerella \"Jo Jo Nice\"", category: "individual" },
  { name: "Pat Todd", category: "individual" },
  { name: "Denise Nott", category: "individual" },
  { name: "Jennifer Latz", category: "individual" },
  { name: "Dennis Latz", category: "individual" },
  { name: "Biddy Barbee", category: "individual" },
  { name: "Sandy St. Germain", category: "individual" },
  { name: "Karen Neilan", category: "individual" },
  { name: "Verna Swan", category: "individual" },
];

export function getSupportersByCategory(category: SupporterCategory) {
  return supporters.filter((s) => s.category === category);
}

// Featured partnership — the Eversource + Groton Utilities renovation story.
// Separate from the supporters list because it has narrative weight and gets
// its own spotlight section on the page.
export const featuredPartnership = {
  partners: [
    { name: "Eversource Energy", logo: "/supporters-logos/eversource.png" as string | null },
    { name: "Groton Utilities", logo: "/supporters-logos/Groton-Utilities-logo.png" as string | null },
  ],
  eyebrow: "A Story Of Partnership",
  headline: "A place rebuilt by two good neighbors.",
  body: "When Hope House needed renovations for accessibility, energy efficiency, and resident safety, Eversource Energy and Groton Utilities stepped in. Because of their partnership, our home is warmer, safer, and open to more women than ever before.",
};

// ─── Social Media Links ─────────────────────────────────────
// Set URLs when client provides them. Icons render regardless; null URLs
// fall back to "#" so icons stay visible as placeholders pre-launch.
export const socialLinks: { facebook: string | null; instagram: string | null; linkedin: string | null } = {
  facebook: null,
  instagram: null,
  linkedin: null,
};

// ─── Events ─────────────────────────────────────────────────
export type EventItem = {
  slug: string; // URL-safe identifier, e.g. "saddle-up-for-hope-2026"
  title: string;
  tagline: string;
  date: string; // ISO date for sorting: "2026-05-01"
  time: string;
  location: string;
  description: string;
  image: string; // path in /public/events/ OR absolute URL (CMS-ready)
  flyerPdf?: string; // optional path or URL to downloadable flyer PDF
  tickets: { label: string; price: string }[];
  ticketUrl: string | null; // Eventbrite link when available
  contactEmail: string;
  contactPhone: string;
  sponsorships?: { tier: string; price: string; perks: string[] }[];
};

export const events: EventItem[] = [
  {
    slug: "saddle-up-for-hope-2026",
    title: "Saddle Up for Hope",
    tagline: "Dance to Make Dreams Come True",
    date: "2026-05-01",
    time: "6 PM to 10 PM",
    location: "Ocean Beach, Port and Starboard, New London",
    description:
      "An unforgettable \"Denim and Diamond\" evening with dinner, dancing, community, and purpose, all to benefit Hope House, Kindness Connection, and women and families in our community. Line dancing and freestyle led by Dance Country. Dinner includes pulled pork, herb roasted chicken, mac and cheese, garlic mashed potatoes, salad, coleslaw, cornbread, and more.",
    image: "/events/saddle-up-for-hope.png",
    tickets: [
      { label: "Individual Ticket (Open Seating)", price: "$75" },
      { label: "Table of 10 (Reserved Seating)", price: "$600" },
    ],
    ticketUrl: "https://www.eventbrite.com/e/saddle-up-for-hope-2026-tickets-1983089289448?aff=oddtdtcreator",
    contactEmail: "Annette@4coh.com",
    contactPhone: "860-912-4356",
    sponsorships: [
      {
        tier: "Ledgelight Legacy Partner",
        price: "$5,000",
        perks: [
          "2 premium tables (seats 20)",
          "2-page premium color program ad",
          "Pre-party gathering",
          "3 social media spotlights",
          "Stage recognition",
          "Your signage on stage",
          "WCTY advertising with Dance Country",
          "Charcuterie & dessert upgrade",
          "Sponsors 10 individuals in recovery to attend",
        ],
      },
      {
        tier: "Trailblazer",
        price: "$2,500",
        perks: [
          "Table of 10",
          "Full-page program ad",
          "2 social media spotlights",
          "Mention from stage",
          "Sponsor board",
          "Charcuterie & dessert upgrade",
          "Sponsors 8 individuals in recovery to attend",
        ],
      },
      {
        tier: "Hope Diamond",
        price: "$1,250",
        perks: [
          "Table of 10",
          "Full-page program ad",
          "2 social media spotlights",
          "Sponsor board",
          "Dessert upgrade",
          "Sponsors 5 individuals in recovery to attend",
        ],
      },
    ],
  },
];

export function getUpcomingEvents() {
  const today = new Date().toISOString().split("T")[0];
  return events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
}

// ─── LeadHerships Event ─────────────────────────────────────
// Editable content for the LeadHerships program/event page. Shape is
// CMS-ready: when Builder.io (or similar) is wired up, register this object
// as a data model and expose each field as an editable input.
export type LeadHershipEvent = {
  title: string;
  date: string; // ISO date, e.g. "2026-10-15" — used for sorting/schema
  dateDisplay: string; // Human-readable fallback, shown in UI
  location: string;
  description: string;
};

export const leadHershipEvent: LeadHershipEvent = {
  title: "I am Woman, Hear Me Roar!",
  date: "2026-10-15",
  dateDisplay: "Thursday, October 15, 2026",
  location: "Groton, Connecticut",
  description:
    "An inspiring luncheon with keynote address, presentation of the colors, vibrant basket raffle, and a \u201Cpassport experience\u201D sparking new partnerships. Stay tuned for details.",
};

export function getPastEvents() {
  const today = new Date().toISOString().split("T")[0];
  return events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));
}

// ─── Process Steps (Dark Section) ───────────────────────────
export const processSteps = [
  {
    number: "1",
    title: "Reach Out",
    description:
      "Call us, fill out our referral form, or have a social worker or family member contact us on your behalf.",
  },
  {
    number: "2",
    title: "Assessment & Intake",
    description:
      "We'll have a conversation about your situation, needs, and goals. No judgment, just understanding.",
  },
  {
    number: "3",
    title: "Move In & Begin",
    description:
      "Once accepted, you'll join the Hope House family. Your room, your community, and your new beginning are waiting.",
  },
  {
    number: "4",
    title: "Grow & Graduate",
    description:
      "Through mentoring, training, and faith-based support, you'll develop the skills and confidence to build an independent life.",
  },
];

// ─── FAQ Items ──────────────────────────────────────────────
export type FaqLink = { label: string; url: string };
export type FaqItem = {
  question: string;
  answer: string;
  helpfulLinks?: FaqLink[];
};

export const faqs: FaqItem[] = [
  {
    question: "How quickly can someone move in?",
    answer:
      "Accommodation is based on bed availability, with crisis cases prioritized. You'll hear back from us regarding your application. Call us directly at 860-912-4356 to discuss your situation. For immediate resources anywhere in Connecticut, you can also dial 2-1-1 or visit 211ct.org anytime.",
    helpfulLinks: [
      { label: "Dial 2-1-1", url: "tel:211" },
      { label: "Visit 211ct.org", url: "https://www.211ct.org" },
    ],
  },
  {
    question: "What is the application or referral process?",
    answer:
      "You can apply directly, be referred by a social worker, case manager, treatment center, or family member. Simply call us or fill out the referral form on this page. We'll schedule a phone conversation to discuss the situation and determine if Hope House is the right fit.",
  },
  {
    question: "Is this a religious program? Do residents have to be Christian?",
    answer:
      "Hope House is faith-based and rooted in Christian values. However, we welcome women of all backgrounds and beliefs. Our faith approach is about love, community, and second chances, not requirements or judgment.",
  },
  {
    question: "What does the program include?",
    answer:
      "Residents receive safe housing, mentoring, job readiness support, clothing with dignity, leadership opportunities, community activities, and ongoing personal support. Everything is designed to help women transition from crisis to independence.",
  },
  {
    question: "How long does someone stay at Hope House?",
    answer:
      "Program length varies based on individual needs, typically ranging from 6 to 18 months. We don't rush anyone out. The goal is lasting transformation, not a quick fix.",
  },
  {
    question: "Is there a cost for residents?",
    answer:
      "There is no cost for residents. As a nonprofit, we believe every woman who needs help should have access to it, regardless of financial situation.",
  },
  {
    question: "How can I donate or support Community of Hope?",
    answer:
      "You can donate through our website, mail a check, organize a supply drive, or volunteer your time. Every gift, no matter the size, directly supports women in recovery. We're a registered 501(c)(3), so all donations are tax-deductible.",
  },
];

// ─── Navigation Links ───────────────────────────────────────
export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      children: { label: string; href: string }[];
    };

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    children: [
      { label: "Overview", href: "/programs" },
      ...programs.map((p) => ({ label: p.title, href: `/programs/${p.slug}` })),
    ],
  },
  { label: "About", href: "/about" },
  { label: "Stories", href: "/stories" },
  {
    label: "Get Involved",
    children: [
      { label: "Events", href: "/events" },
      { label: "Supporters", href: "/supporters" },
      { label: "Donate", href: "/donate" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// All indexable URLs for footer and sitemap
export const footerQuickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  ...programs.map((p) => ({ label: p.title, href: `/programs/${p.slug}` })),
  { label: "About", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Events", href: "/events" },
  { label: "Supporters", href: "/supporters" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceAreas = ["All of Connecticut and beyond"];

// ─── Contact Form Options ───────────────────────────────────
export const contactTypeOptions = [
  { value: "seeking-help", label: "Seeking help for myself" },
  { value: "referral", label: "A professional referring a client" },
  { value: "family", label: "A family member seeking help for someone" },
  { value: "donor", label: "Interested in donating or volunteering" },
  { value: "kindness", label: "Requesting Kindness Connection assistance" },
  { value: "leadership", label: "LeadHerships event inquiry" },
  { value: "event", label: "Event information" },
  { value: "other", label: "Not sure yet, help me decide" },
];
