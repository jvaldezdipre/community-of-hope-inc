-- ============================================================================
-- Round 2a: Add the "What We Provide" block to the Kindness Connection page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the kindness-connection row with hero + receive blocks
-- seeded. Safe to run if you haven't customized the hero yet. If you HAVE
-- edited the hero and want to preserve those edits, skip this migration and
-- add the receive block manually in the admin.
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
      },
      {
        "type": "KindnessConnectionReceiveBlock",
        "props": {
          "id": "KindnessConnectionReceiveBlock-main",
          "eyebrow": "Central Resources",
          "heading": "Practical help, no strings attached.",
          "pitch": "Kindness Connection meets people where they are, with exactly what they need to get through the day and move forward.",
          "items": [
            { "title": "Essential Support", "detail": "Food, clothing, and other essentials as able" },
            { "title": "Clothing", "detail": "Clean, quality clothing for adults and children" },
            { "title": "Hygiene Products", "detail": "Toiletries and personal care essentials" },
            { "title": "Household Items", "detail": "Bedding, kitchenware, cleaning supplies, and more" },
            { "title": "Referrals & Support", "detail": "Connections to partner organizations, housing resources, and local services" }
          ]
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
