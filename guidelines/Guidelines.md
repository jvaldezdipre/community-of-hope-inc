# Community of Hope — Project Tracker

**Client:** Community of Hope Inc. — Annette Eldridge, Executive Director  
**Type:** Pro Bono (Portfolio + Network Value)  
**Current Site:** 4coh.com (WordPress, outdated)  
**Staging:** community-of-hope.netlify.app  
**Date Started:** March 9, 2026  

---

## Done So Far (Implementation Status)

- **Nav:** Programs dropdown (Overview + The House, Kindness Connection, Recovery Coaching, LeadHERship). Get Involved dropdown (Events, Supporters, Donate).
- **Home:** Hero, about section, programs grid, testimonial marquee, dark “how it works” section, FAQ accordion, contact form, mid/final CTAs, trust bar. Pending: correct phone number, mission statement.
- **Programs hub:** `/programs` lists all 4 programs with “Learn more” links. Copy: “Four ways we serve.”
- **Four program pages:** `/programs/the-house`, `/programs/kindness-connection`, `/programs/recovery-coaching`, `/programs/leadhership` — each has placeholder content, back link, meta/JSON-LD. Ready for client copy; CMS later.
- **About:** Full page with hero (story + milestones + YouTube embed), leadership section (Executive Director, staff grid, board grid with initials placeholders), community partners (GBC, Malta, GASP, SCADD links), trust footer (501c3, service area, phone). Animations throughout. Pending: real staff photos, finalized board names, Eversource renovation story.
- **Events:** “Saddle Up for Hope” event card (May 1, 2026), ticket pricing, 3 sponsorship tiers, mailto CTA fallback, past events grid, empty-state fallback. Meta/JSON-LD done. Pending: Eventbrite link, CMS editable.
- **Donate:** Two giving cards (Zeffy zero-fee recommended + PayPal with real link), impact section ($25/$100/$500 tiers), 501(c)(3) trust footer. Pending: real Zeffy donation link.
- **Stories:** Displays all testimonials from constants as styled blockquotes. Pending: real stories, real photos, richer layout.
- **Contact:** Full form with name, email, phone, “I am...” program dropdown, message. Standalone version on `/contact` with sidebar (main + Kindness Connection phone numbers). Also embedded on homepage. Pending: form submission backend, submission email from client.
- **Supporters:** Placeholder page with intro text and links to Donate/Contact. Pending: logo grid, donor names from client.
- **Footer:** Quick links to all pages. Trust bar shows “4” programs.
- **SEO:** Meta titles and descriptions on all pages. WebPage JSON-LD on all pages. Breadcrumb JSON-LD on Events and Donate.

**Ready to implement next (no client dependency):** CMS setup, form submission backend, Zeffy donation link. After that: remaining client content as it arrives.

---

## Status Legend
- ✅ Done
- 🔨 In Progress
- ⏳ Waiting on Client
- ❌ Not Started

---

## Access & Accounts

| Item | Status | Notes |
|------|--------|-------|
| Zoom account (1 year license) | ✅ | Via Annette, tied to admin@developedmotive.com |
| Google Gmail for org | ✅ | Signed in, new Gmail created for COH |
| Domain registrar access (4coh.com) | ⏳ | Homestead — emailed Andy (previous developer) requesting login credentials. Waiting on response |
| Google Analytics (GA4) | ❌ | Set up at launch using org Gmail |
| Google Search Console | ❌ | Set up at launch using org Gmail |
| Google Business Profile | ❌ | Set up as service area business (no address shown) |

---

## Site Structure — Pages

### Nav: Home | Programs ▾ | About | Stories | Get Involved ▾ | Contact
- **Programs dropdown:** The House, Kindness Connection, Recovery Coaching, LeadHERship
- **Get Involved dropdown:** Events, Supporters, Donate

| Page | Status | Notes |
|------|--------|-------|
| Home | 🔨 | Full structure done. Pending: correct phone number, mission statement |
| Programs (main) | ✅ | Overview of all 4 programs with links to individual pages. Placeholder copy; ready for client content. |
| — The House | ✅ | Page built with placeholder content. CMS editable later. |
| — Kindness Connection | ✅ | Page built with placeholder (car repairs, certifications, housing help). CMS editable later. |
| — Recovery Coaching | ✅ | Page built with placeholder. Contact info for this section when client provides. CMS editable later. |
| — LeadHERship | ✅ | Page built with placeholder. CMS editable later. |
| About | 🔨 | Hero, leadership, community partners (with GBC/Malta/GASP/SCADD links), trust footer built. Pending: real staff photos, finalized board, Eversource story |
| Stories | 🔨 | Testimonial blockquotes from constants. Pending: real stories, photos, richer layout |
| Events | 🔨 | "Saddle Up for Hope" event card, sponsorship tiers, fallback CTA. Pending: Eventbrite link, CMS editable |
| Supporters | 🔨 | Placeholder page with intro text. Pending: logo grid, donor names from client |
| Donate | 🔨 | Zeffy + PayPal cards, impact tiers, trust footer built. Pending: real Zeffy link |
| Contact | 🔨 | Form with program dropdown, sidebar with phone numbers. Pending: form submission backend, submission email |

---

## Home Page Updates (Confirmed from Onboarding Call)

| Task | Status |
|------|--------|
| Update bed count from 8 to 12 | ✅ |
| Remove physical address from footer | ✅ |
| Remove physical address from About section | ✅ |
| Brighten footer text | ✅ |
| Remove "counseling" language → use "conversations" and "life skills" | ✅ |
| Update service area to "all of Connecticut and beyond" | ✅ |
| Make hero section brighter | ✅ |
| Animated testimonials (single row slow scroll) | ✅ |
| Update phone number (correct number TBD from client) | ⏳ |
| Clear mission statement on front page | ⏳ |
| Remove location/map | ✅ |
| Keep services page links (GBC, Malta, GASP, SCADD redirects) | ✅ | Added on About page |

**Services Page Redirect Links:**
- GBC: https://grotonbiblechapel.churchcenter.com/registrations/events/2458371
- Malta: https://www.maltaoutreach.org
- GASP: https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/
- SCADD: https://www.scadd.org

---

## Branding

| Task | Status | Notes |
|------|--------|-------|
| New logo design | ⏳ | Client wants a new logo, not keeping old one |
| Brand colors | ✅ | Keeping current brand colors |
| New updated photos | ⏳ | No house photos or address shown (safety). Staff photos yes. Event photos yes. Need permission for graduate photos |

---

## CMS Setup

| Page | Editable Sections | Status |
|------|-------------------|--------|
| The House | Program description, details | ❌ |
| Kindness Connection | Program description, details | ❌ |
| Recovery Coaching | Program description, details | ❌ |
| LeadHERship | Program description, details | ❌ |
| Events | Add/remove events, Eventbrite links, flyers | ❌ |
| Supporters | Add/remove logos and donor names | ❌ |
| Stories | Add new testimonials | ❌ |
| Donate | Update campaigns, giving tiers | ❌ |
| Fundraisers | Updatable | ❌ |

---

## Forms & Integrations

| Item | Status | Notes |
|------|--------|-------|
| Application form (digital) | ❌ | Zeffy account already exists, 0 fees. Form includes program dropdown selector |
| Referral/contact form | 🔨 | UI built on /contact and homepage. Pending: backend submission, email TBD from client |
| Eventbrite integration | ❌ | `ticketUrl` field ready in event data; needs Eventbrite link per event |
| Zeffy donate integration | 🔨 | Card/button built on /donate. Pending: real Zeffy donation URL |
| PayPal donate integration | ✅ | Live link on /donate page |
| CCAR Training contact form | ❌ | Specific contact for this section |

---

## Technical & SEO (Launch Day)

| Task | Status |
|------|--------|
| Set up GA4 on new site | ❌ |
| Add schema markup (nonprofit, local business) | 🔨 | WebPage JSON-LD on all pages. Breadcrumb JSON-LD on Events + Donate. Event schema and LocalBusiness schema still needed |
| Meta titles and descriptions for all pages | ✅ | All 12 pages have unique meta title + description |
| 301 redirects from old WordPress URLs | ❌ |
| Google Search Console — submit sitemap | ❌ |
| Google Business Profile — set up as service area business | ❌ |
| SSL certificate on Netlify | ❌ |
| Connect 4coh.com domain to Netlify | ❌ |
| Update any directory listings linking to old URLs | ❌ |

---

## Waiting on Client (Next Meeting)

- [ ] Correct phone number
- [ ] Form submission email addresses
- [ ] Mission statement (for homepage)
- [ ] Real staff photos (placeholder initials currently used)
- [ ] Finalize board member names and roles
- [ ] Detailed program descriptions from team members
- [ ] LeadHERship program details
- [ ] Updated FAQ questions
- [ ] Graduate photos (with permission)
- [ ] Event photos from past galas
- [ ] Supporter/donor list + logos
- [ ] Eversource renovation story (for About page)
- [ ] Real Zeffy donation link
- [ ] Eventbrite link for Saddle Up for Hope
- [ ] New logo direction/preferences
- [ ] Meeting date with the 2 additional team members
- [x] ~~GBC, Malta, GASP, SCADD redirect links~~ — added on About page as community partners
- [x] ~~Donate page details (tiers, campaigns)~~ — built with Zeffy + PayPal + impact tiers
- [x] ~~Contact page details~~ — form + phone sidebar built

---

## Future Additions (Mentioned but Not Priority)

- Ambassador program
- Google Workspace with custom @4coh.com emails

---

## Meeting Log

### Meeting 1 — March 10, 2026 (Zoom, 1hr+)
**Attendees:** Jeff, Annette Eldridge  
**Summary:** Walked through onboarding doc page by page. Annette loved the staging site. Major discoveries: 4 programs not 3, no address shown for safety, new logo needed, Kindness Connection scope is broader, LeadHERship is a new program, serve all of CT not just southeastern, 12 beds not 8. Uses Zeffy for applications and Eventbrite for events. Annette provided Zoom license and Google org Gmail access.  
**Next Steps:** Second meeting with 2 additional team members for detailed content. Date TBD.

### Meeting 2 — TBD
**Attendees:** Jeff, Annette + 2 team members  
**Agenda:** Program details, About page content, staff/board info, photos, remaining open items from onboarding doc
