-- ============================================================================
-- Seed the Kindness Connection page with the existing hardcoded hero content.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Round 1 of wrapping Kindness Connection: only the hero section is
-- CMS-editable. Sections 2–7 (What We Provide, At a Glance, How It Works,
-- Who This Is For, FAQ, Bottom CTA) continue to render from code until
-- wrapped in later rounds.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'kindness-connection',
  '{
    "content": [
      {
        "type": "KindnessConnectionHeroBlock",
        "props": {
          "id": "KindnessConnectionHeroBlock-main",
          "eyebrow": "Community Outreach",
          "title": "Kindness Connection",
          "mainText": "Food, clothing, household essentials, and more. Free, practical support for individuals and families across Connecticut who need a hand right now.",
          "eligibilityText": "Open to anyone in the community. No program enrollment required.",
          "buttonLabel": "Call Us",
          "buttonHref": "tel:8608565655",
          "phoneNumber": "860-856-5655",
          "image": "https://images.unsplash.com/photo-1707409066859-a90674383d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBmcmllbmRzaGlwJTIwc3VwcG9ydCUyMGVtYnJhY2V8ZW58MXx8fHwxNzcyMzc3MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
