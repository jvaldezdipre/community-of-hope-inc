# Community of Hope — Project Tracker

**Client:** Community of Hope Inc. — Annette Eldridge, Executive Director
**Type:** Pro Bono (Portfolio + Network Value)
**Current Site:** 4coh.com (WordPress, outdated)
**Staging:** community-of-hope.netlify.app
**Date Started:** March 9, 2026

---

## Done So Far (Implementation Status)

- **Nav:** Programs dropdown (Overview + Hope House, Kindness Connection, Recovery Coaching, LeadHerships). Get Involved dropdown (Events, Supporters, Donate). Client-side navigation via Next.js Link on all internal routes (including Button component).
- **Home:** Hero, about section, programs grid, testimonial marquee, dark "how it works" section, FAQ accordion, contact form, mid/final CTAs, trust bar. Pending: correct phone number, mission statement.
- **Programs hub:** `/programs` lists all 4 programs with "Learn more" links. Copy: "Four ways we serve."
- **Hope House:** Full dedicated page (renamed from "The House"). Hero, "What You'll Receive" 7-item checklist (removed meals/life skills/vocational certs, added Clothing with Dignity + Leadership Opportunities), "At a Glance" stats (cost: Free, intake: based on availability), dark "Path Forward" 4-step process, testimonial, "Grow, Lead, Give Back" 6-card personal development grid (absorbed from LeadHerships), FAQ (updated: no-cost, bed availability, crisis prioritized), bottom CTA ("no judgment, just a conversation"). URL: `/programs/hope-house`. Breadcrumb JSON-LD.
- **Kindness Connection:** Full dedicated page. Hero with "Call Us" CTA + 860-856-5655 (Google Form removed). "Central Resources" 5-item checklist (removed car repairs, certification help, housing moved to referrals). "Essential Support" as lead item. "At a Glance" 6 stats. Dark "How It Works" 3-step process (updated to reference calling). "Who This Is For" 4 bullet points. FAQ accordion. Bottom CTA (call only). Breadcrumb JSON-LD.
- **Recovery Coaching:** Simplified placeholder page. Hero with CCAR approved partner blurb + "Learn More at CCAR" button linking to addictionrecoverytraining.org. Full content hidden behind `SHOW_FULL_CONTENT` flag for future launch. Back link. Breadcrumb JSON-LD.
- **LeadHerships:** Restructured as event page (not a program page). Hero with LeadHerships logo as background image, "Nominate an Honoree" Google Form CTA. "How It Works" (host invites partners, nominate, celebrate, complimentary tickets). "Upcoming Event" section (date TBD). 5-tier sponsorship packages (Gold $5K to Champion $200). "Get Involved" (Volunteer + Donate/Contribute). Event FAQ. Bottom CTA. URL: `/programs/leadherships`. Breadcrumb JSON-LD.
- **About:** Full page with hero (story + milestones + YouTube embed), leadership section (Executive Director, staff grid, board grid with initials placeholders), community partners (GBC, Malta, GASP, SCADD, CSO, Work & Learn, Urban Alliance links), trust footer (501c3, service area, phone). Section-based layout with alternating backgrounds. Animations throughout. Pending: real staff photos, finalized board names, Eversource renovation story.
- **Events:** "Saddle Up for Hope" event card (May 1, 2026), ticket pricing, 3 sponsorship tiers, Eventbrite ticket link live, past events grid, empty-state fallback. Meta/JSON-LD done.
- **Donate:** Two giving cards (Zeffy zero-fee with live link + PayPal with live link), impact section ($40 bus pass, $175 one week housing, $500 utility support), 501(c)(3) trust footer. Pending: add Venmo + Zelle options.
- **Stories:** Displays all testimonials from constants as styled blockquotes. Pending: real stories, real photos, richer layout.
- **Contact:** Full form with name, email, phone, "I am..." program dropdown (includes LeadHerships event inquiry + event info options), message. Standalone version on `/contact` with sidebar (main + Kindness Connection phone numbers). Also embedded on homepage. Pending: form submission backend, 3rd phone number (housing), submission email from client.
- **Supporters:** Placeholder page with intro text and links to Donate/Contact. Pending: logo grid, donor names from client.
- **Footer:** Quick links to all pages. Trust bar shows "4" programs.
- **SEO:** Meta titles and descriptions on all pages. WebPage JSON-LD on all pages. Breadcrumb JSON-LD on Events, Donate, and all 4 program pages.
- **UX:** Button component uses Next.js Link for all internal routes (smooth client-side navigation). All program pages use full-width alternating background sections (white, beige #FAF8F5, dark #0F1D33) with Framer Motion scroll-triggered animations.

**Ready to implement next (no client dependency):** Accessibility pass (bigger/darker text, mobile responsiveness), form submission backend, verify partner links, testimonial submission form, CMS/dashboard setup. After that: remaining client content as it arrives.

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
| Domain registrar access (4coh.com) | ✅      | Access obtained — ready to point 4coh.com at Netlify at launch |
| Google Analytics (GA4)             | ❌      | Set up at launch using org Gmail                                                                |
| Google Search Console              | ❌      | Set up at launch using org Gmail                                                                |
| Google Business Profile            | ❌      | Set up as service area business (no address shown)                                              |


---

## Site Structure — Pages

### Nav: Home | Programs ▾ | About | Stories | Get Involved ▾ | Contact

- **Programs dropdown:** Hope House, Kindness Connection, Recovery Coaching, LeadHerships
- **Get Involved dropdown:** Events, Supporters, Donate


| Page                  | Status | Notes                                                                                                                                         |
| --------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                  | 🔨     | Full structure done. Pending: correct phone number, mission statement                                                                         |
| Programs (main)       | ✅      | Overview of all 4 programs with links to individual pages.                                                                                    |
| — Hope House          | ✅      | Content revisions complete. Renamed, meals/life skills/vocational certs removed, Clothing with Dignity + leadership content added, intake/cost/FAQ updated. Pending: application form link, bed availability + 2-1-1 links, photo carousel. |
| — Kindness Connection | ✅      | Content revisions complete. Car repairs removed, Central Resources/Essential Support, call-only CTA (856-5655), housing moved to referrals. |
| — Recovery Coaching   | ✅      | Simplified to CCAR approved partner placeholder. Full content hidden behind flag. CCAR link live. |
| — LeadHerships         | 🔨     | Restructured as event page with logo hero, sponsorship tiers, nominations Google Form, volunteer/donate, FAQ. Pending: event date, photo gallery. |
| About                 | 🔨     | Hero, leadership, community partners, trust footer built. Section-based layout. Pending: real staff photos, finalized board, Eversource story |
| Stories               | 🔨     | Testimonial blockquotes from constants. Pending: real stories, photos, richer layout                                                          |
| Events                | ✅      | "Saddle Up for Hope" event card, sponsorship tiers, Eventbrite link live.                                                                     |
| Supporters            | 🔨     | Placeholder page with intro text. Pending: logo grid, donor names from client                                                                 |
| Donate                | 🔨     | Zeffy + PayPal live, impact tiers updated ($40/$175/$500). Pending: add Venmo + Zelle from client                                             |
| Contact               | 🔨     | Form with program dropdown (LeadHerships + event reasons added), sidebar. Pending: 3rd phone number (housing), form backend                    |


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
| Increase font sizes and color contrast (bigger, darker text)         | ✅      |
| Full mobile responsiveness pass                                       | ✅      |
| Remove dashes from text throughout website                            | ✅      |


**Services Page Redirect Links:**

- GBC: [https://grotonbiblechapel.churchcenter.com/registrations/events/2458371](https://grotonbiblechapel.churchcenter.com/registrations/events/2458371)
- Malta: [https://www.maltaoutreach.org](https://www.maltaoutreach.org)
- GASP: [https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/](https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/)
- SCADD: [https://www.scadd.org](https://www.scadd.org)

---

## Meeting 2 — Content Revisions (April 6, 2026)

### Hope House (formerly "The House")

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Rename tab/nav from "The House" to "Hope House"                        | ✅      |
| Remove meals from program offerings                                    | ✅      |
| Remove life skills training references                                 | ✅      |
| Remove vocational certifications references                            | ✅      |
| Add "Clothing Women with Dignity" — boutique experience (clothing, shoes, accessories) | ✅ |
| Absorb leadership development content from LeadHerships page            | ✅      |
| Update leadership section to "opportunities to grow, lead, and give back" | ✅   |
| Remove "no waitlist" → replace with "no judgment, just a conversation" | ✅      |
| Update intake response language: "You'll hear back from us regarding your application" | ✅ |
| Add link to application form (fillable online form, replaces PDF)      | ⏳      |
| Update stay duration to 6–18 months                                    | ✅      |
| Emphasize no cost for residents                                        | ✅      |
| Update FAQ: bed availability based on availability, crisis prioritized | ✅      |
| Add links to bed availability and 2-1-1 resources in FAQ               | 🔨      |
| Add photo carousel for programs (honorees, barn progress)              | ✅      |
| Keep current plant photo at top of page                                | ✅      |

### Kindness Connection

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Remove car repairs from assistance offerings                           | ✅      |
| "Basic Needs" → "Central Resources"                                    | ✅      |
| "Food and Groceries" → "Essential Support" (clothing, hygiene, household items) | ✅ |
| Move housing assistance to referrals section                           | ✅      |
| Remove survey form button                                              | ✅      |
| Remove contact form — direct users to call 856-5655                    | ✅      |
| Update phone number to 856-5655                                        | ✅      |
| Remove certification help — keep only referrals/support connections    | ✅      |
| Item donations go directly to individuals, not program fund            | ✅      |

### Recovery Coaching

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Hide most page content (program still in development)                  | ✅      |
| Keep CCAR approved partner status blurb                                | ✅      |
| Add CCAR link under vocational track section                           | ✅      |
| Maintain page for BRS funding requirements                             | ✅      |

### LeadHerships → Event Page

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Move program/leadership development content to Hope House page         | ✅      |
| Restructure as LeadHerships *event* page                                | ✅      |
| Add Google Form link for nominations                                   | ✅      |
| Add photo carousel/gallery                                             | ✅      |
| Update event date (TBD from client)                                    | ⏳      |
| Correct spelling throughout (LeadHerships)                             | ✅      |

### Donate Page

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Update impact tier: $40 → bus pass                                     | ✅      |
| Update impact tier: $175 → one week of housing                         | ✅      |
| Update impact tier: $500 → utility support                             | ✅      |
| Add Venmo as donation option                                           | ⏳      |
| Add Zelle as donation option                                           | ⏳      |
| Zeffy link — live                                                      | ✅      |

### Contact Page

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Add 3 distinct phone numbers: main, housing, Kindness Connection       | ⏳      |
| Add new contact reasons: Leadership program, event info                | ✅      |
| Remove dashes from phone number formatting                             | ❌      |

### Community Partners

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| "Celebrate Recovery" → "Regeneration"                                  | ✅      |
| Add Hava Living as community partner                                   | ✅      |
| Verify all partner links are working                                   | ✅      |

### Design & Accessibility (Site-Wide)

| Change                                                                 | Status |
| ---------------------------------------------------------------------- | ------ |
| Increase font sizes across all pages                                   | ✅      |
| Darken text colors for better contrast (especially for older users)    | ✅      |
| Full mobile responsiveness audit and fixes                             | ✅      |
| Remove dashes from text throughout website                             | ✅      |
| Add social media widgets (Facebook, Instagram, LinkedIn) — all pages   | 🔨      |

---

## Branding


| Task               | Status | Notes                                                                                                              |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------ |
| New logo design    | ⏳      | Client wants modernized logo. Jeff to send logo ideas to Annette for review. Collaborate before launch              |
| Brand colors       | ✅      | Keeping current brand colors                                                                                       |
| New updated photos | ⏳      | Interior Hope House photos, staff/leadership photos, program photos pending from Annette/Faith. No address shown (safety). Need permission for graduate photos |


---

## CMS Setup


| Page                | Editable Sections                           | Status |
| ------------------- | ------------------------------------------- | ------ |
| Hope House          | Program description, details                | ❌      |
| Kindness Connection | Program description, details                | ❌      |
| Recovery Coaching   | Program description, details                | ❌      |
| LeadHerships         | Program description, details                | ❌      |
| Events              | Add/remove events, Eventbrite links, flyers | ❌      |
| Supporters          | Add/remove logos and donor names            | ❌      |
| Stories             | Add new testimonials                        | ❌      |
| Donate              | Update campaigns, giving tiers              | ❌      |
| Fundraisers         | Updatable                                   | ❌      |


---

## Forms & Integrations


| Item                             | Status | Notes                                                                                 |
| -------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| Application form (digital)       | ❌      | Replace PDF with fillable online form (Google Form or similar). Routing + notification needed. Covers Hope House + Leadership/Ambassador |
| Referral/contact form            | ✅     | UI + Netlify Forms backend wired. Submissions route to Jeff's email (jefesnipez@gmail.com) until Annette provides org email. Honeypot spam protection enabled. |
| Eventbrite integration           | ✅      | Saddle Up for Hope Eventbrite link live in event data and rendered on Events page     |
| Kindness Connection request form | ✅     | Google Form removed per Meeting 2. Page directs users to call 860-856-5655             |
| Zeffy donate integration         | ✅      | Live link on /donate page (hopes-heros form)                                          |
| PayPal donate integration        | ✅      | Live link on /donate page                                                             |
| Venmo donate integration         | ⏳      | Add as third donation option. Pending: Venmo details from client                      |
| Zelle donate integration         | ⏳      | Pending: Zelle link from client                                                       |
| CCAR Training contact form       | ❌      | On hold — Recovery Coaching page being hidden for now                                  |
| LeadHerships nominations form     | ✅      | Google Form live on LeadHerships page                                                 |
| Sponsorship form                 | ⏳      | Fillable sponsorship form + payment link. Pending: details/account info from client   |
| Testimonial submission form      | ❌      | Needs approval/consent checkbox for website use                                       |
| Dashboard/backend for submissions| ❌      | Centralized view for applications, testimonials, form submissions. Team can view/manage/approve |


---

## Technical & SEO (Launch Day)


| Task                                                      | Status |
| --------------------------------------------------------- | ------ |
| Set up GA4 on new site                                    | ❌      |
| Add schema markup (nonprofit, local business)             | ✅     |
| Meta titles and descriptions for all pages                | ✅      |
| Canonical URLs (metadataBase + per-page alternates)       | ✅      |
| Block staging indexing (noindex via netlify.toml)         | ✅      |
| Harden security headers (Referrer-Policy, Permissions-Policy, X-Frame-Options) | ✅ |
| 301 redirects from old WordPress URLs                     | ❌      |
| Google Search Console — submit sitemap                    | ❌      |
| Google Business Profile — set up as service area business | ❌      |
| SSL certificate on Netlify                                | ❌      |
| Connect 4coh.com domain to Netlify                        | ❌      |
| Update any directory listings linking to old URLs         | ❌      |


---

## Waiting on Client

### Phone Numbers & Contact
- 3 correct phone numbers: main line, housing/Hope House, Kindness Connection (856-5655 confirmed, others TBD)
- Which numbers to display where on site
- Form submission email addresses

### Photos & Media
- Interior Hope House photos
- Updated staff and leadership photos
- Program-related images (honorees, barn progress)
- Graduate photos (with permission)
- Event photos from past galas

### Content & Copy
- Mission statement (for homepage)
- Finalize board member names and roles
- Updated FAQ questions
- Eversource renovation story (for About page)
- LeadHerships event page content: correct spelling, new event date, nominations details
- CCAR link and approved partner wording for Recovery Coaching placeholder
- Bed availability link
- ~~2-1-1 resource link~~ — added (tel:211 + 211ct.org) to Hope House FAQ

### Donation & Payment
- Zelle donation link
- Venmo details
- Sponsorship form payment details/account info

### Forms & Links
- ~~Google Form link for LeadHerships nominations~~ — live on LeadHerships page
- Google Form link for Leadership/Ambassador program application
- ~~Hava Living website link for community partners~~ — added (ahavaliving.com)
- Social media links (Facebook, Instagram, LinkedIn) for widgets

### Other
- New logo direction/preferences — Jeff to send ideas, collaborate before launch
- Bloomerang access/username (reference for easy-editing interface)
- Supporter/donor list + logos

### Resolved
- ~~Real Zeffy donation link~~ — live on /donate
- ~~Meeting date with 2 additional team members~~ — Meeting 2 held April 6, 2026
- ~~GBC, Malta, GASP, SCADD redirect links~~ — added on About page as community partners
- ~~Donate page details (tiers, campaigns)~~ — built with Zeffy + PayPal + impact tiers
- ~~Contact page details~~ — form + phone sidebar built
- ~~Eventbrite link for Saddle Up for Hope~~ — live on Events page
- ~~Detailed program descriptions from team members~~ — full pages built (now being revised per Meeting 2)
- ~~LeadHerships program details~~ — restructuring to event page per Meeting 2

---

## New Features (From Meeting 2)

| Feature                                      | Status | Notes                                                                 |
| -------------------------------------------- | ------ | --------------------------------------------------------------------- |
| Photo carousel/gallery (programs, events)    | ✅      | Reusable `PhotoCarousel` component built (stacked-peek style, white/beige/dark variants). Live on Hope House + LeadHerships with placeholder photos. Ready for real photos from Annette. Could also drop into Events, About (barn renovation), Stories |
| Multi-event management on Events page        | ✅      | Array-based data model, auto-sorts by date, renders unlimited upcoming + past events. Optional `flyerPdf` field supports PDF flyer downloads. `slug`-based keys for clean CMS mapping later. To add an event: copy the Saddle Up object in `lib/constants.ts`, edit fields, save. |
| Testimonial submission form                  | ❌      | With approval/consent checkbox for website use                        |
| Social media widgets                         | 🔨      | `SocialIcons` component built (light/dark variants). Live in Footer + Contact sidebar. Icons visible, linking to `#` until client sends real URLs — then update 3 lines in `lib/constants.ts` |
| Fillable online application form             | ❌      | Replace PDF. Covers Hope House + Leadership/Ambassador. Routing + notification |
| Dashboard/CMS for team self-service          | ❌      | Team updates events, stories, program pages. Design changes → Jeff only |
| Blog section                                 | ❌      | For Google ranking. Annette interested. Low priority for launch       |
| Sponsorship form with payment link           | ⏳      | Pending payment details from client                                   |
| Easy-editing interface (Bloomerang-style)     | ❌      | Research similar interface. Pending Bloomerang access from client      |

## Future Additions (Mentioned but Not Priority)

- Ambassador program (application form being combined with Leadership)

---

## Meeting Log

### Meeting 1 — March 10, 2026 (Zoom, 1hr+)

**Attendees:** Jeff, Annette Eldridge
**Summary:** Walked through onboarding doc page by page. Annette loved the staging site. Major discoveries: 4 programs not 3, no address shown for safety, new logo needed, Kindness Connection scope is broader, LeadHerships is a new program, serve all of CT not just southeastern, 12 beds not 8. Uses Zeffy for applications and Eventbrite for events. Annette provided Zoom license and Google org Gmail access.
**Next Steps:** Second meeting with 2 additional team members for detailed content. Date TBD.

### Meeting 2 — April 6, 2026 (Zoom)

**Attendees:** Jeff, Annette Eldridge, Faith
**Summary:** Deep content review of all program pages. Major restructuring decisions:
- **Hope House:** Remove meals, life skills, vocational certs. Add "Clothing Women with Dignity" boutique experience. Absorb leadership development content from LeadHerships. Update intake language, stay duration (6–18 months), no-cost emphasis. Remove "no waitlist" → "no judgment, just a conversation."
- **Kindness Connection:** Remove car repairs, change "Basic Needs" → "Central Resources", "Food and Groceries" → "Essential Support." Remove survey form, direct to call 856-5655. Housing assistance moved to referrals.
- **Recovery Coaching:** Hide most content (still in development). Keep CCAR approved partner status as placeholder for BRS funding.
- **LeadHerships:** Move program content to Hope House. Page becomes LeadHerships *event* page with nominations Google Form, photo gallery, updated event date.
- **Donate:** New tiers ($40 bus pass, $175 one week housing, $500 utilities). Add Venmo + Zelle. Zeffy link now live.
- **Contact:** 3 distinct phone numbers (main, housing, KC). New contact reasons (Leadership, events).
- **Design:** Annette's business mentor recommended bigger/darker text for older users on phones. Full mobile responsiveness pass needed. Remove dashes throughout.
- **New features discussed:** Photo carousels, multi-event management with flyer uploads, testimonial submission with consent, social media widgets, fillable online forms (replace PDF), dashboard/CMS for team self-service, blog section for SEO, sponsorship form.
- **Partners:** "Celebrate Recovery" → "Regeneration." Add Hava Living.
- **Logo:** Collaborate on modernized concepts before launch. Jeff to send ideas.
- **Timeline:** Website live before May 2026.
**Next Steps:** Annette/Faith to send photos, phone numbers, social media links, Google Form links, Zelle/Venmo details, CCAR link, Hava link, LeadHerships event content, Bloomerang access. Jeff to implement all content revisions, accessibility improvements, and new features.