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
      "Our program is rooted in faith — not as a requirement, but as a foundation. Women are invited into a community that believes in second chances, unconditional love, and the possibility of total transformation.",
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
      "Our mentors and staff include women who have walked the same road. They understand the struggle because they've lived it — and they know what it takes to build a new life.",
  },
];

// ─── Testimonials ───────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "When I came to Hope House, I was homeless and suicidal. I had nothing. Through the love and structure here, I earned my CNA license, got a car, found an apartment, and rebuilt my relationship with my children. Community of Hope saved my life.",
    name: "Miss R.",
    context: "Hope House Graduate",
    initials: "MR",
  },
  {
    quote:
      "I've referred several clients to Community of Hope over the years. What sets them apart is the family model — it's not just a bed and rules. The women genuinely support each other, and the staff walks alongside them every step. It's the kind of program I wish existed in every county.",
    name: "Licensed Social Worker",
    context: "Referral Partner, New London County",
    initials: "SW",
  },
  {
    quote:
      "I didn't think I deserved help. I didn't think anyone would want me. But from day one, they treated me like I mattered. They helped me get clean, get certified, and get my life back. I'm now a Recovery Coach helping other women — because of what Hope House gave me.",
    name: "Program Graduate",
    context: "Now a CCAR Certified Recovery Coach",
    initials: "PG",
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
    title: "The House",
    subtitle: "Women's Recovery Home",
    slug: "the-house",
    description:
      "A 12-bed, faith-based recovery residence. Women receive structured support, mentoring, life skills training, and a safe family-style environment to rebuild their lives.",
    goodFor:
      "Women 18+ recovering from addiction, homelessness, or domestic violence who need stable housing and a supportive community.",
    image:
      "https://images.unsplash.com/photo-1628077571013-88b0a74d4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGludGVyaW9yJTIwd2FybSUyMHN1bmxpZ2h0JTIwc2FmZXxlbnwxfHx8fDE3NzIzNzcxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body:
      "The House is our 12-bed, faith-based recovery home. Women live together as a family — sharing meals, responsibilities, and genuine connection. We believe recovery happens in relationship, not isolation. Residents receive mentoring, life skills training, job readiness support, and vocational certifications. Program length varies based on individual needs, typically 6 to 18 months. Contact us to learn more or refer someone.",
  },
  {
    number: "02",
    title: "Kindness Connection",
    subtitle: "Community Outreach",
    slug: "kindness-connection",
    description:
      "A community-facing program providing basic necessities — food, clothing, hygiene products, household items — plus support with car repairs, certifications, and housing help for individuals and families across Connecticut and beyond.",
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
      "Our residents and graduates can earn their CCAR Recovery Coach certification — transforming personal experience into a professional credential that helps them serve others. Contact info for this program coming soon.",
    goodFor:
      "Women in recovery who want to turn their story into a career helping others. Also open to community members seeking certification.",
    image:
      "https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRvcmluZyUyMGNvdW5zZWxpbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzIzNzcxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body:
      "Recovery Coaching at Community of Hope includes CCAR Recovery Coach training and certification. Our women turn their experience into a credential that lets them support others in recovery. Details and contact information for this program will be updated soon.",
  },
  {
    number: "04",
    title: "LeadHERship",
    subtitle: "Nonprofits Supporting Each Other",
    slug: "leadhership",
    description:
      "A program where nonprofits support each other — strengthening leadership and capacity across the sector.",
    goodFor:
      "Nonprofit leaders and organizations looking for peer support, collaboration, and shared growth.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    body:
      "LeadHERship brings nonprofits together to support one another. More details about this program will be added as we receive them from the team.",
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
    { name: "Julie Brousseau", role: "Chairman" },
    { name: "Leslie Carpenter", role: "Secretary" },
    { name: "Megan Quinn", role: "Board Member" },
    { name: "Stephene Bordelon", role: "Board Member" },
  ],
};

// ─── About Page: Community Partners (groups we work closely with and recommend) ───
export const communityPartners = [
  {
    name: "Celebrate Recovery (Groton Bible Chapel)",
    url: "https://grotonbiblechapel.churchcenter.com/registrations/events/2458371",
    description:
      "Groton Bible Chapel offers a weekly Celebrate Recovery meeting. Celebrate Recovery is a life recovery program that offers a supportive, Christian group environment.",
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
];

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
      "We'll have a conversation about your situation, needs, and goals. No judgment — just understanding.",
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
export const faqs = [
  {
    question: "How quickly can someone move in?",
    answer:
      "We can often accommodate intake within 24-48 hours depending on bed availability. If you're in crisis or need to refer a client urgently, call us directly at 860-912-8983 and we'll work to get someone in as quickly as possible.",
  },
  {
    question: "What is the application or referral process?",
    answer:
      "You can apply directly, be referred by a social worker, case manager, treatment center, or family member. Simply call us or fill out the referral form on this page. We'll schedule a phone conversation to discuss the situation and determine if Hope House is the right fit.",
  },
  {
    question: "Is this a religious program? Do residents have to be Christian?",
    answer:
      "Hope House is faith-based and rooted in Christian values. However, we welcome women of all backgrounds and beliefs. Our faith approach is about love, community, and second chances — not requirements or judgment.",
  },
  {
    question: "What does the program include?",
    answer:
      "Residents receive safe housing, meals, mentoring, life skills training, job readiness support, vocational certifications (including CNA and CCAR Recovery Coach), community activities, and ongoing personal support. Everything is designed to help women transition from crisis to independence.",
  },
  {
    question: "How long does someone stay at Hope House?",
    answer:
      "Program length varies based on individual needs, typically ranging from 6 to 18 months. We don't rush anyone out — the goal is lasting transformation, not a quick fix.",
  },
  {
    question: "Is there a cost for residents?",
    answer:
      "As a nonprofit, we work to make the program accessible to every woman who needs it, regardless of financial situation. Contact us directly to discuss specifics for your situation.",
  },
  {
    question: "How can I donate or support Community of Hope?",
    answer:
      "You can donate through our website, mail a check, organize a supply drive, or volunteer your time. Every gift — no matter the size — directly supports women in recovery. We're a registered 501(c)(3), so all donations are tax-deductible.",
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
  { value: "other", label: "Not sure yet — help me decide" },
];
