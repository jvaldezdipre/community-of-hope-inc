-- ============================================================================
-- Round 3b: Add the By Category block to the Supporters page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the supporters row with hero + featured partnership +
-- corporate + event + gratitude + by-category blocks seeded. Category
-- items use the same "word OR logo" pattern — upload a logo and it shows,
-- leave blank and the name shows. Notes display inline next to the name
-- (hidden when a logo is uploaded).
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
      },
      {
        "type": "SupportersEventBlock",
        "props": {
          "id": "SupportersEventBlock-main",
          "eyebrow": "2 Hearts 1 Sound Mind · February 2025",
          "heading": "Event Sponsors",
          "supporters": [
            { "name": "Chelsea Groton Bank", "logo": "", "notes": "" },
            { "name": "Charter Oak Bank", "logo": "", "notes": "" },
            { "name": "Yale New Haven Health", "logo": "", "notes": "" },
            { "name": "Ahava Living", "logo": "", "notes": "" },
            { "name": "Crocker Ballroom", "logo": "", "notes": "" },
            { "name": "Coastal Business Network", "logo": "", "notes": "" },
            { "name": "Bluprints Unlimited", "logo": "", "notes": "Pat Todd" },
            { "name": "Nutmeg Building & Remodeling", "logo": "/supporters-logos/d55f3c0bc44b17106054f219509a5ff4.jpg", "notes": "Denise Nott" },
            { "name": "RB Kent and Sons", "logo": "/supporters-logos/1179846-rb3-v2.w400.h150.png", "notes": "" },
            { "name": "ECHO", "logo": "", "notes": "" },
            { "name": "Clear Path Financial Solutions", "logo": "", "notes": "" },
            { "name": "Hourglass Insurance", "logo": "/supporters-logos/rBVaSVs_wjqAMwTRAAHOBx6kIwU151.jpg", "notes": "" },
            { "name": "Open Concepts", "logo": "", "notes": "" },
            { "name": "Southeastern Women''s Network", "logo": "", "notes": "" }
          ]
        }
      },
      {
        "type": "SupportersGratitudeBlock",
        "props": {
          "id": "SupportersGratitudeBlock-main",
          "quote": "Every name on this page changed a life.",
          "backgroundImage": "/supporter2.webp"
        }
      },
      {
        "type": "SupportersByCategoryBlock",
        "props": {
          "id": "SupportersByCategoryBlock-main",
          "heading": "Partners across the community.",
          "categories": [
            {
              "label": "Faith Community",
              "items": [
                { "name": "Calvary Chapel", "logo": "", "notes": "" },
                { "name": "Groton Bible Chapel", "logo": "", "notes": "" },
                { "name": "Groton Heights Baptist Church", "logo": "", "notes": "" },
                { "name": "Potters House Church of God", "logo": "", "notes": "" },
                { "name": "Revelation Church", "logo": "", "notes": "" },
                { "name": "Steadfast Baptist Church", "logo": "", "notes": "" }
              ]
            },
            {
              "label": "Professional Services",
              "items": [
                { "name": "Duncklee Inc.", "logo": "/supporters-logos/ducklee-final_OL-1.jpg", "notes": "" },
                { "name": "Massad Insurance", "logo": "/supporters-logos/massad_llc_short.jpg", "notes": "" },
                { "name": "TMG Companies", "logo": "", "notes": "" },
                { "name": "Project Courage", "logo": "/supporters-logos/ProjectCourage.png", "notes": "" },
                { "name": "BLU-PRINTS Signs", "logo": "/supporters-logos/BLU-PRINTS_header-768x142.png", "notes": "" },
                { "name": "Sunrise Home Inspection", "logo": "/supporters-logos/Sunrise-Logo.png", "notes": "" },
                { "name": "Stonington Institute", "logo": "/supporters-logos/logo-1.png", "notes": "" },
                { "name": "Fastsigns", "logo": "/supporters-logos/Fastsigns.png", "notes": "" },
                { "name": "Bouvier Insurance", "logo": "", "notes": "" },
                { "name": "Utopia Hair Salon", "logo": "", "notes": "" },
                { "name": "Brawn Service Station", "logo": "", "notes": "" },
                { "name": "Reagan Construction Group", "logo": "", "notes": "" }
              ]
            },
            {
              "label": "Healthcare & Social Services",
              "items": [
                { "name": "Natchaug Hospital", "logo": "/supporters-logos/HHC_Natchaug_horz-24pt_4C-1.png", "notes": "" },
                { "name": "Sound Community Services", "logo": "", "notes": "" },
                { "name": "Connecticut Behavioral Health", "logo": "", "notes": "" },
                { "name": "Aware Recovery Care", "logo": "", "notes": "" },
                { "name": "Southeastern Council on Alcoholism & Drug Dependence", "logo": "/supporters-logos/SCADD.jpg", "notes": "" }
              ]
            },
            {
              "label": "Community Organizations",
              "items": [
                { "name": "Urban Alliance", "logo": "", "notes": "" },
                { "name": "World Vision", "logo": "", "notes": "" },
                { "name": "Housing Ministries of New England", "logo": "", "notes": "" },
                { "name": "NAMI Southeastern CT", "logo": "", "notes": "" },
                { "name": "Coastal Lodge #57, A.F. & A.M. of CT", "logo": "/supporters-logos/Clean_Proof_6.jpg", "notes": "" }
              ]
            }
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
