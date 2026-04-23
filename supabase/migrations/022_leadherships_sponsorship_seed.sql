-- ============================================================================
-- LeadHerships Round 4: Add Sponsorship Tiers block (dark, 5 tier cards).
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of leadherships row with Hero + How It Works + Upcoming Event
-- + Sponsorship Tiers seeded. Remaining sections (Past Events Carousel, Get
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
      },
      {
        "type": "LeadHershipsUpcomingEventBlock",
        "props": {
          "id": "LeadHershipsUpcomingEventBlock-main",
          "eyebrow": "Upcoming Event",
          "title": "I am Woman, Hear Me Roar!",
          "dateISO": "2026-10-15",
          "dateDisplay": "Thursday, October 15, 2026",
          "location": "Groton, Connecticut",
          "description": "An inspiring luncheon with keynote address, presentation of the colors, vibrant basket raffle, and a \u201Cpassport experience\u201D sparking new partnerships. Stay tuned for details.",
          "primaryButtonLabel": "Nominate an Honoree",
          "primaryButtonHref": "https://docs.google.com/forms/d/1Zgi7z06LejTq1k5eHz4iYgyhcWW9Tnb0ahidj2urrlU/viewform",
          "secondaryButtonLabel": "Become a Sponsor",
          "secondaryButtonHref": "tel:8609124356"
        }
      },
      {
        "type": "LeadHershipsSponsorshipBlock",
        "props": {
          "id": "LeadHershipsSponsorshipBlock-main",
          "eyebrow": "Sponsorship Packages",
          "heading": "Your sponsorship celebrates women leaders and fuels collaboration.",
          "tiers": [
            {
              "name": "Gold Sponsor",
              "price": "$5,000",
              "available": "1 available",
              "benefits": [
                { "text": "Premier vendor table in the Hunt Room" },
                { "text": "Logo on all event marketing materials, program, and signage" },
                { "text": "Option to speak at event (2\u20133 minutes)" },
                { "text": "Full double-page color ad in event program" },
                { "text": "Banner on display" },
                { "text": "Add swag to gift bags" },
                { "text": "10 seats at full table" }
              ]
            },
            {
              "name": "Silver Sponsor",
              "price": "$2,500",
              "available": "3 available",
              "benefits": [
                { "text": "Full-page ad in event program" },
                { "text": "5 event tickets" },
                { "text": "Recognition from stage during event" },
                { "text": "Option to add to swag bag" },
                { "text": "Vendor table available" }
              ]
            },
            {
              "name": "Bronze Table Sponsor",
              "price": "$1,000",
              "available": "15 available",
              "benefits": [
                { "text": "Shared table with nonprofit chosen by team" },
                { "text": "Logo and quarter-page ad in program" },
                { "text": "5 sponsor tickets + 5 nonprofit tickets" }
              ]
            },
            {
              "name": "Copper Sponsor",
              "price": "$500",
              "available": "20 available",
              "benefits": [
                { "text": "Business card-size ad in program" },
                { "text": "Listed on sponsor board" },
                { "text": "Option to add to swag bag" },
                { "text": "5 tickets donated to nonprofit" }
              ]
            },
            {
              "name": "Champion of Change",
              "price": "$200",
              "available": "40 available",
              "benefits": [
                { "text": "Sponsor two individuals for event seats" },
                { "text": "Name listed in program and on sponsor board" }
              ]
            }
          ],
          "footnote": "Custom packages available. Call us to discuss."
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
