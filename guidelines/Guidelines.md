# Community of Hope — Project Tracker

**Client:** Community of Hope Inc. — Annette Eldridge, Executive Director
**Type:** Pro Bono (Portfolio + Network Value)
**Current Site:** 4coh.com (WordPress, outdated)
**Staging:** community-of-hope.netlify.app
**Date Started:** March 9, 2026

---

## Done So Far (Implementation Status)

- **Nav:** Programs dropdown (Overview + The House, Kindness Connection, Recovery Coaching, LeadHERship). Get Involved dropdown (Events, Supporters, Donate). Client-side navigation via Next.js Link on all internal routes (including Button component).
- **Home:** Hero, about section, programs grid, testimonial marquee, dark "how it works" section, FAQ accordion, contact form, mid/final CTAs, trust bar. Pending: correct phone number, mission statement.
- **Programs hub:** `/programs` lists all 4 programs with "Learn more" links. Copy: "Four ways we serve."
- **The House:** Full dedicated page with 8 alternating sections — hero with image, "What Residents Receive" split checklist (beige), "At a Glance" stats, dark "Path Forward" 4-step process, centered testimonial quote, FAQ accordion, bottom CTA card, back link. Breadcrumb JSON-LD. Framer Motion animations throughout.
- **Kindness Connection:** Full dedicated page with 7 alternating sections — hero with "Request Help" Google Form CTA + phone, "What We Provide" 8-item split checklist (beige), "At a Glance" 6 stats, dark "How It Works" 3-step process, "Who This Is For" bordered card with bullet points, FAQ accordion, bottom CTA card. Google Form integration for help requests. Breadcrumb JSON-LD.
- **Recovery Coaching:** Full dedicated page with 8 alternating sections — hero with CCAR certification focus, "What You'll Learn" 8-item split checklist (beige), "At a Glance" 6 stats, dark "Path to Certification" 4-step process, centered testimonial quote, "Who This Is For" bullet points (beige), FAQ accordion, bottom CTA card. Breadcrumb JSON-LD.
- **LeadHERship:** Full dedicated page with unique centered layout variation — centered hero with full-width image below, "What You'll Build" 3-column card grid (beige), centered "Why It Matters" narrative, dark "Who It's For" 4 audience segment cards, "How It Works" 3-step process, centered vision quote (beige), FAQ accordion, bottom CTA card. Women's empowerment focus (subtitle updated from "Nonprofits Supporting Each Other" to "Women's Empowerment"). Breadcrumb JSON-LD.
- **About:** Full page with hero (story + milestones + YouTube embed), leadership section (Executive Director, staff grid, board grid with initials placeholders), community partners (GBC, Malta, GASP, SCADD, CSO, Work & Learn, Urban Alliance links), trust footer (501c3, service area, phone). Section-based layout with alternating backgrounds. Animations throughout. Pending: real staff photos, finalized board names, Eversource renovation story.
- **Events:** "Saddle Up for Hope" event card (May 1, 2026), ticket pricing, 3 sponsorship tiers, Eventbrite ticket link live, past events grid, empty-state fallback. Meta/JSON-LD done.
- **Donate:** Two giving cards (Zeffy zero-fee recommended + PayPal with real link), impact section ($25/$100/$500 tiers), 501(c)(3) trust footer. Pending: real Zeffy donation link.
- **Stories:** Displays all testimonials from constants as styled blockquotes. Pending: real stories, real photos, richer layout.
- **Contact:** Full form with name, email, phone, "I am..." program dropdown, message. Standalone version on `/contact` with sidebar (main + Kindness Connection phone numbers). Also embedded on homepage. Pending: form submission backend, submission email from client.
- **Supporters:** Placeholder page with intro text and links to Donate/Contact. Pending: logo grid, donor names from client.
- **Footer:** Quick links to all pages. Trust bar shows "4" programs.
- **SEO:** Meta titles and descriptions on all pages. WebPage JSON-LD on all pages. Breadcrumb JSON-LD on Events, Donate, and all 4 program pages.
- **UX:** Button component uses Next.js Link for all internal routes (smooth client-side navigation). All program pages use full-width alternating background sections (white, beige #FAF8F5, dark #0F1D33) with Framer Motion scroll-triggered animations.

**Ready to implement next (no client dependency):** CMS setup, form submission backend, Zeffy donation link. After that: remaining client content as it arrives.

---

## Status Legend

- ✅ Done
- 🔨 In Progress
- ⏳ Waiting on Client
- ❌ Not Started

---

## Access & Accounts


| Item                               | Status | Notes                                                                                           |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| Zoom account (1 year license)      | ✅      | Via Annette, tied to [admin@developedmotive.com](mailto:admin@developedmotive.com)              |
| Google Gmail for org               | ✅      | Signed in, new Gmail created for COH                                                            |
| Domain registrar access (4coh.com) | ⏳      | Homestead — emailed Andy (previous developer) requesting login credentials. Waiting on response |
| Google Analytics (GA4)             | ❌      | Set up at launch using org Gmail                                                                |
| Google Search Console              | ❌      | Set up at launch using org Gmail                                                                |
| Google Business Profile            | ❌      | Set up as service area business (no address shown)                                              |


---

## Site Structure — Pages

### Nav: Home | Programs ▾ | About | Stories | Get Involved ▾ | Contact

- **Programs dropdown:** The House, Kindness Connection, Recovery Coaching, LeadHERship
- **Get Involved dropdown:** Events, Supporters, Donate


| Page                  | Status | Notes                                                                                                                                         |
| --------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                  | 🔨     | Full structure done. Pending: correct phone number, mission statement                                                                         |
| Programs (main)       | ✅      | Overview of all 4 programs with links to individual pages.                                                                                    |
| — The House           | ✅      | Full dedicated page — 8 sections with hero, split checklist, stats, dark process steps, testimonial, FAQ, CTA.                                |
| — Kindness Connection | ✅      | Full dedicated page — 7 sections with Google Form CTA, split checklist, stats, dark process, FAQ, CTA.                                        |
| — Recovery Coaching   | ✅      | Full dedicated page — 8 sections with CCAR certification focus, split checklist, stats, dark process, testimonial, FAQ, CTA.                  |
| — LeadHERship         | ✅      | Full dedicated page — unique centered layout, 3-col card grid, audience segments, vision quote, FAQ, CTA. Women's empowerment focus.          |
| About                 | 🔨     | Hero, leadership, community partners, trust footer built. Section-based layout. Pending: real staff photos, finalized board, Eversource story |
| Stories               | 🔨     | Testimonial blockquotes from constants. Pending: real stories, photos, richer layout                                                          |
| Events                | ✅      | "Saddle Up for Hope" event card, sponsorship tiers, Eventbrite link live.                                                                     |
| Supporters            | 🔨     | Placeholder page with intro text. Pending: logo grid, donor names from client                                                                 |
| Donate                | 🔨     | Zeffy + PayPal cards, impact tiers, trust footer built. Pending: real Zeffy link                                                              |
| Contact               | 🔨     | Form with program dropdown, sidebar with phone numbers. Pending: form submission backend, submission email                                    |


---

## Home Page Updates (Confirmed from Onboarding Call)


| Task                                                                 | Status |
| -------------------------------------------------------------------- | ------ |
| Update bed count from 8 to 12                                        | ✅      |
| Remove physical address from footer                                  | ✅      |
| Remove physical address from About section                           | ✅      |
| Brighten footer text                                                 | ✅      |
| Remove "counseling" language → use "conversations" and "life skills" | ✅      |
| Update service area to "all of Connecticut and beyond"               | ✅      |
| Make hero section brighter                                           | ✅      |
| Animated testimonials (single row slow scroll)                       | ✅      |
| Update phone number (correct number TBD from client)                 | ⏳      |
| Clear mission statement on front page                                | ⏳      |
| Remove location/map                                                  | ✅      |
| Keep services page links (GBC, Malta, GASP, SCADD redirects)         | ✅      |


**Services Page Redirect Links:**

- GBC: [https://grotonbiblechapel.churchcenter.com/registrations/events/2458371](https://grotonbiblechapel.churchcenter.com/registrations/events/2458371)
- Malta: [https://www.maltaoutreach.org](https://www.maltaoutreach.org)
- GASP: [https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/](https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/)
- SCADD: [https://www.scadd.org](https://www.scadd.org)

---

## Branding


| Task               | Status | Notes                                                                                                              |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------ |
| New logo design    | ⏳      | Client wants a new logo, not keeping old one                                                                       |
| Brand colors       | ✅      | Keeping current brand colors                                                                                       |
| New updated photos | ⏳      | No house photos or address shown (safety). Staff photos yes. Event photos yes. Need permission for graduate photos |


---

## CMS Setup


| Page                | Editable Sections                           | Status |
| ------------------- | ------------------------------------------- | ------ |
| The House           | Program description, details                | ❌      |
| Kindness Connection | Program description, details                | ❌      |
| Recovery Coaching   | Program description, details                | ❌      |
| LeadHERship         | Program description, details                | ❌      |
| Events              | Add/remove events, Eventbrite links, flyers | ❌      |
| Supporters          | Add/remove logos and donor names            | ❌      |
| Stories             | Add new testimonials                        | ❌      |
| Donate              | Update campaigns, giving tiers              | ❌      |
| Fundraisers         | Updatable                                   | ❌      |


---

## Forms & Integrations


| Item                             | Status | Notes                                                                                 |
| -------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| Application form (digital)       | ❌      | Zeffy account already exists, 0 fees. Form includes program dropdown selector         |
| Referral/contact form            | 🔨     | UI built on /contact and homepage. Pending: backend submission, email TBD from client |
| Eventbrite integration           | ✅      | Saddle Up for Hope Eventbrite link live in event data and rendered on Events page     |
| Kindness Connection request form | ✅      | Google Form integrated on Kindness Connection page with "Request Help" CTA            |
| Zeffy donate integration         | 🔨     | Card/button built on /donate. Pending: real Zeffy donation URL                        |
| PayPal donate integration        | ✅      | Live link on /donate page                                                             |
| CCAR Training contact form       | ❌      | Specific contact for this section                                                     |


---

## Technical & SEO (Launch Day)


| Task                                                      | Status |
| --------------------------------------------------------- | ------ |
| Set up GA4 on new site                                    | ❌      |
| Add schema markup (nonprofit, local business)             | 🔨     |
| Meta titles and descriptions for all pages                | ✅      |
| 301 redirects from old WordPress URLs                     | ❌      |
| Google Search Console — submit sitemap                    | ❌      |
| Google Business Profile — set up as service area business | ❌      |
| SSL certificate on Netlify                                | ❌      |
| Connect 4coh.com domain to Netlify                        | ❌      |
| Update any directory listings linking to old URLs         | ❌      |


---

## Waiting on Client (Next Meeting)

- Correct phone number
- Form submission email addresses
- Mission statement (for homepage)
- Real staff photos (placeholder initials currently used)
- Finalize board member names and roles
- Updated FAQ questions
- Graduate photos (with permission)
- Event photos from past galas
- Supporter/donor list + logos
- Eversource renovation story (for About page)
- Real Zeffy donation link
- New logo direction/preferences
- Meeting date with the 2 additional team members
- ~~GBC, Malta, GASP, SCADD redirect links~~ — added on About page as community partners
- ~~Donate page details (tiers, campaigns)~~ — built with Zeffy + PayPal + impact tiers
- ~~Contact page details~~ — form + phone sidebar built
- ~~Eventbrite link for Saddle Up for Hope~~ — live on Events page
- ~~Detailed program descriptions from team members~~ — full dedicated pages built for all 4 programs with rich content, FAQs, and CTAs
- ~~LeadHERship program details~~ — full page built with women's empowerment focus

---

## Future Additions (Mentioned but Not Priority)

- Ambassador program

---

## Meeting Log

### Meeting 1 — March 10, 2026 (Zoom, 1hr+)

**Attendees:** Jeff, Annette Eldridge
**Summary:** Walked through onboarding doc page by page. Annette loved the staging site. Major discoveries: 4 programs not 3, no address shown for safety, new logo needed, Kindness Connection scope is broader, LeadHERship is a new program, serve all of CT not just southeastern, 12 beds not 8. Uses Zeffy for applications and Eventbrite for events. Annette provided Zoom license and Google org Gmail access.
**Next Steps:** Second meeting with 2 additional team members for detailed content. Date TBD.

### Meeting 2 — TBD

**Attendees:** Jeff, Annette + 2 team members
**Agenda:** Program details, About page content, staff/board info, photos, remaining open items from onboarding doc