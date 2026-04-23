-- ============================================================================
-- Seed the Supporters page with the existing hardcoded hero content.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Round 1 of wrapping Supporters: only the hero section is CMS-editable.
-- Sections 2–8 (Featured Partnership, Corporate Partners, Event Sponsors,
-- Gratitude quote, By Category, Individual Supporters, Bottom CTA) continue
-- to render from code until wrapped in later rounds.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'supporters',
  '{
    "content": [
      {
        "type": "SupportersHeroBlock",
        "props": {
          "id": "SupportersHeroBlock-main",
          "eyebrow": "With Gratitude",
          "title": "Our Supporters",
          "description": "Behind every woman rebuilt, every bed filled, every meal shared, there is a name on this page. These are the partners, businesses, and neighbors who make Community of Hope possible.",
          "backgroundImage": "/welcomehome.webp"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
