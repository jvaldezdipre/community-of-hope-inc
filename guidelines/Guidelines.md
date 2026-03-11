# Community of Hope — Project Tracker

**Client:** Community of Hope Inc. — Annette Eldridge, Executive Director  
**Type:** Pro Bono (Portfolio + Network Value)  
**Current Site:** 4coh.com (WordPress, outdated)  
**Staging:** community-of-hope.netlify.app  
**Date Started:** March 9, 2026  

---

## Done So Far (Implementation Status)

- **Nav:** Programs dropdown implemented (Overview + The House, Kindness Connection, Recovery Coaching, LeadHERship). Get Involved dropdown unchanged.
- **Programs hub:** `/programs` lists all 4 programs with “Learn more” links to individual pages. Copy updated to “Four ways we serve.”
- **Four program pages:** `/programs/the-house`, `/programs/kindness-connection`, `/programs/recovery-coaching`, `/programs/leadhership` — each has placeholder content, back link to Programs, and meta/JSON-LD. Ready for client copy; CMS later.
- **Home:** Bed count 12, no address, brighter hero/footer, testimonials, service area “all of Connecticut and beyond,” counseling → conversations/life skills, map removed. Still pending: correct phone number, mission statement, and services redirect links (GBC, Malta, GASP, SCADD).
- **Footer:** Quick links include all program pages. Trust bar shows “4” programs.

**Ready to implement next (no client dependency):** Services page redirect links (URLs in doc). After that: CMS, forms, and remaining pages as content arrives.

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
| Home | 🔨 | Structure done. Pending: phone number, mission statement, services redirect links (see Home Page Updates) |
| Programs (main) | ✅ | Overview of all 4 programs with links to individual pages. Placeholder copy; ready for client content. |
| — The House | ✅ | Page built with placeholder content. CMS editable later. |
| — Kindness Connection | ✅ | Page built with placeholder (car repairs, certifications, housing help). CMS editable later. |
| — Recovery Coaching | ✅ | Page built with placeholder. Contact info for this section when client provides. CMS editable later. |
| — LeadHERship | ✅ | Page built with placeholder. CMS editable later. |
| About | ❌ | Staff + board members, mission, Eversource renovation story. Wording coming from client |
| Stories | ❌ | Real stories, real photos, animated testimonials |
| Events | ❌ | Eventbrite integration, unique link per event, CMS editable |
| Supporters | ❌ | Logo grid, donor recognition. Details TBD |
| Donate | ❌ | Zeffy integration (0 fees). Details TBD |
| Contact | ❌ | Form with program dropdown selector. Details TBD |

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
| Keep services page links (GBC, Malta, GASP, SCADD redirects) | ❌ | See links below |

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
| Referral/contact form | ❌ | Submission email TBD from client |
| Eventbrite integration | ❌ | Different link for every event |
| Zeffy donate integration | ❌ | |
| CCAR Training contact form | ❌ | Specific contact for this section |

---

## Technical & SEO (Launch Day)

| Task | Status |
|------|--------|
| Set up GA4 on new site | ❌ |
| Add schema markup (nonprofit, local business) | ❌ |
| Meta titles and descriptions for all pages | 🔨 | Programs hub + 4 program pages done; rest at launch |
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
- [ ] About page wording and mission statement
- [ ] Staff names, roles, and photos
- [ ] Board member names and roles
- [ ] Detailed program descriptions from team members
- [ ] LeadHERship program details
- [ ] Updated FAQ questions
- [ ] Graduate photos (with permission)
- [ ] Event photos from past galas
- [ ] Supporter/donor list confirmation
- [ ] Donate page details (tiers, campaigns)
- [ ] Contact page details (social links, etc.)
- [ ] New logo direction/preferences
- [ ] GBC, Malta, GASP redirect links
- [ ] Meeting date with the 2 additional team members

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
