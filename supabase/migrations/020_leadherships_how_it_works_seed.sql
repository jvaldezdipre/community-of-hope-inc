-- ============================================================================
-- LeadHerships Round 2: Add How It Works block (beige, heading + 4 items).
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of leadherships row with Hero + How It Works seeded. Remaining
-- sections (Upcoming Event, Sponsorship Tiers, Past Events Carousel, Get
-- Involved, FAQ, Bottom CTA) still render from the fallback.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'leadherships',
  '{
    "content": [
      {
        "type": "LeadHershipsHeroBlock",
        "props": {
          "id": "LeadHershipsHeroBlock-main",
          "backgroundImage": "/LeadHERships-Facebook Banner Design - Edited.jpg",
          "eyebrow": "A Community of Hope Initiative",
          "logoImage": "/leadhership-logo .png",
          "logoAlt": "LeadHerships",
          "quote": "Inspiring, Elevating, and Empowering all women to have a seat at the table",
          "description": "LeadHerships is an initiative of Community of Hope designed to honor and empower women who are actively serving others. While we spotlight women, we also uplift the organizations that stand beside them to build stronger, more compassionate communities.",
          "buttonLabel": "Nominate an Honoree",
          "buttonHref": "https://docs.google.com/forms/d/1Zgi7z06LejTq1k5eHz4iYgyhcWW9Tnb0ahidj2urrlU/viewform",
          "phoneNumber": "860-912-4356"
        }
      },
      {
        "type": "LeadHershipsHowItWorksBlock",
        "props": {
          "id": "LeadHershipsHowItWorksBlock-main",
          "eyebrow": "How It Works",
          "heading": "Honoring women who lead by serving.",
          "pitch": "Nonprofits rarely get to attend their own events without incurring costs. LeadHerships changes that story. We convene, honor, and equip, with recognition, connection, and collaboration at the center.",
          "items": [
            { "title": "Host Invites Partners", "detail": "Each year''s host invites nonprofit partners to participate. 2026 host: Community of Hope." },
            { "title": "Partners Nominate Honorees", "detail": "Each nonprofit partner selects one honoree reflecting leadership, resilience, and impact." },
            { "title": "Celebration & Recognition", "detail": "At the luncheon, honorees and their organizations receive recognition and celebration." },
            { "title": "Complimentary Tickets", "detail": "Each nonprofit partner receives 2 complimentary luncheon tickets. No cost to attend." }
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
