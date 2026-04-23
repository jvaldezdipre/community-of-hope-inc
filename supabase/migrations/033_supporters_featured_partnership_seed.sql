-- ============================================================================
-- Round 1b: Add the Featured Partnership block to the Supporters page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the supporters row with hero + featured partnership blocks
-- seeded. Safe to run if you haven''t customized the hero yet. If you HAVE
-- edited the hero and want to preserve those edits, skip this migration and
-- add the Featured Partnership block manually in the admin.
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
      },
      {
        "type": "SupportersFeaturedPartnershipBlock",
        "props": {
          "id": "SupportersFeaturedPartnershipBlock-main",
          "eyebrow": "A Story Of Partnership",
          "headline": "A place rebuilt by two good neighbors.",
          "body": "When Hope House needed renovations for accessibility, energy efficiency, and resident safety, Eversource Energy and Groton Utilities stepped in. Because of their partnership, our home is warmer, safer, and open to more women than ever before.",
          "linkLabel": "Learn more about Hope House",
          "linkHref": "/programs/hope-house",
          "partners": [
            { "name": "Eversource Energy", "logo": "/supporters-logos/eversource.png" },
            { "name": "Groton Utilities", "logo": "/supporters-logos/Groton-Utilities-logo.png" }
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
