-- ============================================================================
-- Round 2: Add the "What Residents Receive" block to the Hope House page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the hope-house row with hero + receive blocks seeded.
-- Safe to run if you haven't customized the hero yet. If you HAVE edited
-- the hero and want to preserve those edits, skip this migration and add
-- the receive block manually in the admin.
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
      },
      {
        "type": "HopeHouseReceiveBlock",
        "props": {
          "id": "HopeHouseReceiveBlock-main",
          "eyebrow": "What You''ll Receive",
          "heading": "Everything you need to start over.",
          "pitch": "Hope House isn''t just a bed. It''s a full foundation. Here''s what every resident receives from day one.",
          "items": [
            { "title": "Safe Housing", "detail": "A 12-bed, family-style home, not a facility" },
            { "title": "Clothing with Dignity", "detail": "A boutique experience providing clothing, shoes, and accessories" },
            { "title": "Mentoring", "detail": "From staff and women who have walked the same road" },
            { "title": "Job Readiness", "detail": "Resume help, interview prep, and workplace skills" },
            { "title": "Leadership Opportunities", "detail": "Opportunities to grow, lead, and give back" },
            { "title": "Faith-Based Support", "detail": "Rooted in love, not requirements or judgment" },
            { "title": "Community", "detail": "Women supporting women through accountability and friendship" }
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
