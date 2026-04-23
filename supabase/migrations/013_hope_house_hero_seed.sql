-- ============================================================================
-- Seed the Hope House page with the existing hardcoded hero content.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Round 1 of wrapping Hope House: only the hero section is CMS-editable.
-- Sections 2–9 (What Residents Receive, Program Details, Process Steps,
-- Photo Carousel, Testimonial, Personal Growth, FAQ, Bottom CTA) continue
-- to render from code until wrapped in later rounds.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'hope-house',
  '{
    "content": [
      {
        "type": "HopeHouseHeroBlock",
        "props": {
          "id": "HopeHouseHeroBlock-main",
          "eyebrow": "Women''s Recovery Home",
          "title": "Hope House",
          "mainText": "A 12-bed, faith-based recovery residence where women rebuild their lives in a safe, family-style community. Mentoring, job readiness, and genuine connection. Not a program, a home. No judgment, just a conversation.",
          "eligibilityText": "For women 18+ recovering from addiction, homelessness, or domestic violence who need stable housing and a supportive community.",
          "buttonLabel": "Apply Now",
          "buttonHref": "/apply-hope-house",
          "phoneNumber": "860-912-4356",
          "image": "https://images.unsplash.com/photo-1628077571013-88b0a74d4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGludGVyaW9yJTIwd2FybSUyMHN1bmxpZ2h0JTIwc2FmZXxlbnwxfHx8fDE3NzIzNzcxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
