-- ============================================================================
-- Round 2a: Add the Corporate Partners block to the Supporters page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the supporters row with hero + featured partnership +
-- corporate blocks seeded. Each corporate partner has: name (text), logo
-- (optional image), and notes (optional text). If a logo is uploaded it
-- shows; if not, the name shows as text. Exactly matches the "word OR logo"
-- fallback behavior.
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
      },
      {
        "type": "SupportersCorporateBlock",
        "props": {
          "id": "SupportersCorporateBlock-main",
          "eyebrow": "Corporate Partners",
          "heading": "The organizations carrying us forward.",
          "supporters": [
            { "name": "Dominion Energy", "logo": "/supporters-logos/Dominion_Energy-«_Horizontal_RGB.jpg", "notes": "" },
            { "name": "Foxwoods Resort Casino", "logo": "/supporters-logos/foxwoods-resort-casino-98.jpg", "notes": "" },
            { "name": "Lawrence & Memorial Hospital", "logo": "/supporters-logos/YNHHS_LM_hor_clr_cmyk.jpg", "notes": "" },
            { "name": "Mohegan Sun", "logo": "/supporters-logos/Mohegan-Sun-logo.png", "notes": "" },
            { "name": "Pfizer", "logo": "/supporters-logos/Pfizer-logo.jpg", "notes": "" },
            { "name": "Groton Rotary Club", "logo": "/supporters-logos/rotary_sign_default.png", "notes": "" }
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
