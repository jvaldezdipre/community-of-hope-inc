-- ============================================================================
-- Home Round 1: Seed the Hero + Trust Bar blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Hero + Trust Bar are CMS-managed. Remaining sections (WhyUs, Testimonials,
-- MidCTA, Programs, AboutSection, DarkSection, FAQ, ContactForm, FinalCTA)
-- still render from the hardcoded components until future rounds replace them.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'home',
  '{
    "content": [
      {
        "type": "HomeHeroBlock",
        "props": {
          "id": "HomeHeroBlock-main",
          "videoSrc": "/herovideo.mp4",
          "eyebrow": "Women\u2019s Recovery Home \u2014 Groton, CT",
          "headingLine1": "A safe place to",
          "headingLine2": "rebuild your life.",
          "subheading": "Hope House is a faith-based, family-style recovery home for women overcoming addiction, homelessness, and domestic violence in southeastern Connecticut. Beds available now.",
          "primaryButtonLabel": "Get Help Now",
          "primaryButtonHref": "#contact",
          "secondaryButtonLabel": "Learn About Our Programs",
          "secondaryButtonHref": "#programs",
          "trustSignals": [
            { "text": "501(c)(3) Public Charity" },
            { "text": "15+ Years Serving CT" },
            { "text": "Faith-Based & Mentor-Driven" }
          ]
        }
      },
      {
        "type": "HomeTrustBarBlock",
        "props": {
          "id": "HomeTrustBarBlock-main",
          "stats": [
            { "number": "15+", "label": "Years Serving\nSoutheastern CT" },
            { "number": "12", "label": "Beds at\nHope House" },
            { "number": "300+", "label": "Women''s Lives\nTransformed" },
            { "number": "4", "label": "Recovery & Community\nPrograms" }
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
