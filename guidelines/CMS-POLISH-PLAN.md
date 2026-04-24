# CMS Polish & Merge Plan

**Status:** Staging deployed. Functionality complete. Visual polish pending.
**Goal:** Merge CMS block components with their original animated counterparts so the live site matches the original design pixel-for-pixel, with no duplicate code.

---

## TL;DR — What's Wrong

The CMS was built by creating **new block components in parallel** to the existing animated page files (e.g., `HomeHeroBlock.tsx` next to `Hero.tsx`). This means:

1. **Live site visual drift** — CMS blocks don't fully match the originals. Animations are missing (except on Home). Spacing and layout may also differ.
2. **Duplicate code** — every page has two versions of every section (the animated original + the CMS block).
3. **Dead fallback code** — ~1,500 lines of hardcoded content that only renders if the Supabase `pages` row is missing (which never happens in practice).

**End goal:** One animated component per section, used by both the live site (via Puck) and the CMS editor. No duplicate files. No dead fallback.

---

## Strategy — How the Merge Works

For each section (e.g., Hero), the merge is:

1. **Start with the original animated file** (e.g., `Hero.tsx`) — already pixel-perfect, already has `motion` wrappers
2. **Convert its hardcoded strings into props** — match the shape that the current CMS block uses (`HomeHeroBlockProps`)
3. **Register that file as the Puck block** in `puck.tsx` — replace the current CMS block import
4. **Delete the duplicate CMS block file** (e.g., `HomeHeroBlock.tsx`)
5. **Delete the fallback branch** in the page content file (the `{!puckContent && ...}` block)
6. **Verify** the page still renders correctly on `/` and `/admin/pages/home`

Result: the original animated component is now the Puck block. Live site animations preserved. No duplicates.

---

## Per-Page Task List

### 🏠 Home page (`/`)

**Files to merge (11 sections):**

| Original | Current CMS block | Action |
|---|---|---|
| `components/pages/home/Hero.tsx` | `components/pages/home/HomeHeroBlock.tsx` | Merge: extract props into Hero, register Hero as Puck block, delete HomeHeroBlock |
| `components/pages/home/TrustBar.tsx` | `components/pages/home/HomeTrustBarBlock.tsx` | Same pattern |
| `components/pages/home/WhyUs.tsx` | `components/pages/home/HomeWhyUsBlock.tsx` | Same pattern |
| `components/pages/home/Testimonials.tsx` | `components/pages/home/HomeTestimonialsBlock.tsx` | Same pattern |
| `components/pages/home/MidCTA.tsx` | `components/pages/home/HomeMidCTABlock.tsx` | Same pattern |
| `components/pages/home/Programs.tsx` | `components/pages/home/HomeProgramsBlock.tsx` | Same pattern |
| `components/pages/home/AboutSection.tsx` | `components/pages/home/HomeAboutBlock.tsx` | Same pattern |
| `components/pages/home/DarkSection.tsx` | `components/pages/home/HomeDarkProcessBlock.tsx` | Same pattern |
| `components/pages/home/FAQ.tsx` | `components/pages/home/HomeFAQBlock.tsx` | Same pattern |
| `components/pages/home/ContactForm.tsx` | `components/pages/home/HomeContactBlock.tsx` | Form fields + submission logic stay; intro text props added to ContactForm directly |
| `components/pages/home/FinalCTA.tsx` | `components/pages/home/HomeFinalCTABlock.tsx` | Same pattern |

**Files to update:**
- `components/pages/home/puck.tsx` — update block registrations to point at the merged original files
- `components/pages/home/HomePage.tsx` — simplify to `return <>{puckContent}</>;` (delete the fallback that imports the originals)

**Files to delete after merge:**
- All 11 `Home*Block.tsx` files

**Special case — ContactForm:**
ContactForm is also used on `/contact` (`variant="standalone"`). Don't break that. Add optional intro text props to ContactForm itself, use them when Puck passes them, fall back to defaults otherwise. Delete HomeContactBlock.tsx.

---

### 🏠 Hope House (`/programs/hope-house`)

**The original "animated version" is inline JSX** inside `components/pages/programs/TheHousePageContent.tsx` (inside the `{!puckContent && <>...</>}` branch).

**CMS block files (9):**
- `components/pages/programs/hope-house/HopeHouseHero.tsx`
- `components/pages/programs/hope-house/HopeHouseReceive.tsx`
- `components/pages/programs/hope-house/HopeHouseDetails.tsx`
- `components/pages/programs/hope-house/HopeHouseProcess.tsx`
- `components/pages/programs/hope-house/HopeHouseTestimonial.tsx`
- `components/pages/programs/hope-house/HopeHouseGrowth.tsx`
- `components/pages/programs/hope-house/HopeHouseFAQ.tsx`
- `components/pages/programs/hope-house/HopeHouseBottomCTA.tsx`
- The Inside Hope House carousel uses the shared `PhotoCarousel` component — leave alone

**Merge approach:**
1. For each section in TheHousePageContent.tsx, extract the animated JSX into its own component file
2. Convert hardcoded strings to match the corresponding `HopeHouse*BlockProps` shape
3. Register the extracted animated component as the Puck block
4. Delete the old CMS block file
5. Once all sections extracted, delete the `{!puckContent && <>...</>}` fallback from TheHousePageContent.tsx

**End state:** TheHousePageContent.tsx becomes ~30 lines (just the `main` wrapper + `{puckContent}` + back link).

---

### 🏠 LeadHerships (`/programs/leadherships`)

**Original animated JSX** inside `components/pages/programs/LeadHERshipPageContent.tsx` — partial fallback remains (mostly Hero).

**CMS block files (8):**
- `components/pages/programs/leadherships/LeadHershipsHero.tsx`
- `components/pages/programs/leadherships/LeadHershipsHowItWorks.tsx`
- `components/pages/programs/leadherships/LeadHershipsUpcomingEvent.tsx`
- `components/pages/programs/leadherships/LeadHershipsSponsorship.tsx`
- `components/pages/programs/leadherships/LeadHershipsCarousel.tsx` (reuses shared PhotoCarousel)
- `components/pages/programs/leadherships/LeadHershipsGetInvolved.tsx`
- `components/pages/programs/leadherships/LeadHershipsFAQ.tsx`
- `components/pages/programs/leadherships/LeadHershipsBottomCTA.tsx`

**Important — Hero video quirk:** The original Home Hero uses letter-by-letter animation on the heading. LeadHerships Hero uses a background image with gradient overlay. Different effect — preserve each original's specific animation pattern.

**Merge approach:** same as Hope House — extract animated JSX per section, replace CMS block, delete duplicate, strip fallback.

---

### 🏠 Stories (`/stories`)

**Original animated JSX** was deleted from `components/pages/stories/StoriesPageContent.tsx` — only the back link remains. ⚠️ **Originals are lost.**

**Options:**
- **A.** Find original styles/animations in git history (`git log --all --oneline components/pages/stories/StoriesPageContent.tsx`) and restore
- **B.** Add animations to the current CMS block files manually using the same `motion` pattern as Home Hero

**Recommended:** Option A, then copy originals into CMS block files. Takes longer but guarantees visual match.

**CMS block files (7):**
- `components/pages/stories/StoriesHero.tsx`
- `components/pages/stories/StoriesFeaturedStory.tsx`
- `components/pages/stories/StoriesCommunityVoices.tsx`
- `components/pages/stories/StoriesImpact.tsx`
- `components/pages/stories/StoriesVisionQuote.tsx`
- `components/pages/stories/StoriesShareYourStory.tsx`
- `components/pages/stories/StoriesBottomCTA.tsx`

---

### 📄 About page (`/about`)

Check for same pattern — CMS blocks without animations vs. any original animated version. Files:
- `components/pages/about/*.tsx`

**Action:** Audit, apply same merge pattern where drift exists.

---

### 📄 Programs overview (`/programs`)

Check:
- `components/pages/programs/*.tsx`

---

### 📄 Events, Donate, Contact

- **Events** — `EventCard.tsx` is the main CMS block. Check for animation parity with originals.
- **Donate** — `DonatePaymentsBlock.tsx`, `DonateImpactSection.tsx`. Check.
- **Contact** — heading/sidebar blocks. Check.

---

### 🤝 Kindness Connection, Supporters

**You built these**, not me. Audit separately to see if they have the same duplication pattern. If yes, apply the merge. If they were built as a single animated component from the start, no action needed.

---

## Cleanup After All Merges

### Files that can be deleted
- All `Home*Block.tsx` files (11)
- All `HopeHouse*.tsx` block files in `hope-house/` (these get REPLACED by extracted versions — keep the filenames, swap contents)
- Same for `leadherships/` and `stories/`
- The `{!puckContent && <>...</>}` fallback in every page content file

### Files to simplify
- `HomePage.tsx` → just `return <>{puckContent}</>;`
- `TheHousePageContent.tsx` → just the `main` wrapper + `{puckContent}` + back link
- `LeadHERshipPageContent.tsx` → same
- `StoriesPageContent.tsx` → already minimal, leave

### Update `guidelines/Guidelines.md`
- Note completion of polish pass
- Remove references to "duplicate code" or "fallback" patterns

---

## Per-Section Merge Checklist

For every section, verify after the merge:

- [ ] Component has `"use client"` directive
- [ ] Component imports `motion` from `motion/react`
- [ ] All `motion.*` wrappers present with correct `initial` / `whileInView` / `viewport` / `transition` props
- [ ] All hardcoded strings converted to props
- [ ] Props shape matches what's seeded in the Supabase `pages` row
- [ ] Registered correctly in the matching `puck.tsx`
- [ ] Render function uses `({ puck: _puck, ...rest })` pattern (already applied sitewide)
- [ ] Live page `/` renders with animations
- [ ] CMS editor `/admin/pages/<slug>` renders with animations
- [ ] Editing a field in CMS reflects on live after save
- [ ] `npm run build` passes
- [ ] `npx tsc --noEmit` passes

---

## Order of Operations (Recommended)

1. **Home** first — most visible page, biggest visual impact, most sections (11)
2. **Hope House** — flagship program page, big scope (9 sections, ~600 lines of fallback to handle)
3. **LeadHerships** — similar complexity (8 sections)
4. **Stories** — complicated by lost originals (need git history)
5. **About + Programs overview** — smaller scope
6. **Events, Donate, Contact** — audit first, merge only if drift exists
7. **Kindness Connection, Supporters** — audit (user-built)

---

## Risks to Watch For

1. **Data shape mismatch** — if a CMS block's `defaultProps` uses a field name that differs from what's seeded in Supabase, the merged component will render with empty values. **Mitigation:** double-check field names match the seed migrations in `supabase/migrations/0*_*.sql`.

2. **Client/server boundary errors** — already bulletproofed. `{ puck: _puck, ...rest }` is applied to every puck config. Don't undo that.

3. **Broken fallback for empty DB** — after deleting fallbacks, if someone ever wipes a `pages` row, the page breaks. **Mitigation:** the seed migrations are version-controlled — re-run the latest to recover. Document this in `guidelines/Guidelines.md`.

4. **ContactForm shared usage** — ContactForm is imported both on the home and on `/contact`. Adding optional intro props to ContactForm is fine — both consumers will work. Just don't break the standalone variant.

5. **Dashboard editWebsiteContent link** (future feature) — when building the dashboard link to the CMS, the route is `<WEBSITE_URL>/admin/pages/<slug>`. Don't change the admin URL structure during the merge.

6. **Missing seed field causes empty render** — e.g., if Home Hero seed doesn't include `trustSignals` but the component expects an array, you'll get runtime errors. **Mitigation:** every seed migration is full-replace; verify they include all fields the merged component expects.

---

## Test Plan After Each Page Merge

1. **Localhost** — `npm run dev`, navigate to the page, visually compare to the original by hard-refreshing between merge and pre-merge git state
2. **Animations** — scroll through the page; all entrance animations should fire
3. **CMS editor** — open `/admin/pages/<slug>`, verify canvas shows the animated version
4. **Edit a field** — change a string in the CMS, save, verify it updates on the live page
5. **Build** — `npm run build` from project root must pass
6. **TypeScript** — `npx tsc --noEmit` must pass
7. **Commit + push** — triggers Netlify auto-deploy to staging
8. **Staging smoke test** — visit the staging URL, verify page looks identical to localhost

---

## Rough Time Estimate

| Task | Time |
|---|---|
| Home (11 sections) | 90-120 min |
| Hope House (9 sections) | 60-90 min |
| LeadHerships (8 sections) | 60 min |
| Stories (7 sections, with git recovery) | 60-90 min |
| About + Programs overview | 30 min |
| Events, Donate, Contact audit + fixes | 30-60 min |
| Kindness Connection, Supporters audit | 15-30 min |
| Testing + staging deploys | 30 min |
| **Total** | **~6-8 hours of focused work** |

**Suggested split:** do Home + Hope House in one session (~2-3 hrs), rest in a second session.

---

## When This Is Done

- [ ] Every CMS block is the original animated component (or equivalent)
- [ ] No duplicate files (`Home*Block.tsx`, etc. all deleted)
- [ ] No `{!puckContent && ...}` fallback branches
- [ ] Page content files are ~30-40 lines each (main wrapper + puckContent + back link)
- [ ] `npm run build` passes
- [ ] Every page on localhost matches the pre-CMS design + animations exactly
- [ ] Every page on staging matches
- [ ] `Guidelines.md` updated
- [ ] This file can be deleted

---

**Last updated:** 2026-04-24
