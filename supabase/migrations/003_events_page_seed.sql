-- ============================================================================
-- Seed the Events page with the existing hardcoded event in Puck format.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Overwrites the row for slug='events' with a full Puck content tree
-- containing Heading, Paragraph, and one EventCard (Saddle Up for Hope 2026)
-- so nothing disappears from the live site after the new build ships.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'events',
  '{
    "content": [
      {
        "type": "Heading",
        "props": {
          "id": "Heading-seed",
          "text": "Events"
        }
      },
      {
        "type": "Paragraph",
        "props": {
          "id": "Paragraph-seed",
          "text": "Join us at upcoming fundraisers, community gatherings, and events that support our mission."
        }
      },
      {
        "type": "EventCard",
        "props": {
          "id": "EventCard-saddle-up-2026",
          "title": "Saddle Up for Hope",
          "tagline": "Dance to Make Dreams Come True",
          "date": "2026-05-01",
          "time": "6 PM to 10 PM",
          "location": "Ocean Beach, Port and Starboard, New London",
          "description": "An unforgettable \"Denim and Diamond\" evening with dinner, dancing, community, and purpose, all to benefit Hope House, Kindness Connection, and women and families in our community. Line dancing and freestyle led by Dance Country. Dinner includes pulled pork, herb roasted chicken, mac and cheese, garlic mashed potatoes, salad, coleslaw, cornbread, and more.",
          "image": "/events/saddle-up-for-hope.png",
          "flyerPdf": "",
          "ticketUrl": "https://www.eventbrite.com/e/saddle-up-for-hope-2026-tickets-1983089289448?aff=oddtdtcreator",
          "contactEmail": "Annette@4coh.com",
          "contactPhone": "860-912-4356",
          "tickets": [
            { "label": "Individual Ticket (Open Seating)", "price": "$75" },
            { "label": "Table of 10 (Reserved Seating)", "price": "$600" }
          ],
          "sponsorships": [
            {
              "tier": "Ledgelight Legacy Partner",
              "price": "$5,000",
              "perks": [
                { "text": "2 premium tables (seats 20)" },
                { "text": "2-page premium color program ad" },
                { "text": "Pre-party gathering" },
                { "text": "3 social media spotlights" },
                { "text": "Stage recognition" },
                { "text": "Your signage on stage" },
                { "text": "WCTY advertising with Dance Country" },
                { "text": "Charcuterie & dessert upgrade" },
                { "text": "Sponsors 10 individuals in recovery to attend" }
              ]
            },
            {
              "tier": "Trailblazer",
              "price": "$2,500",
              "perks": [
                { "text": "Table of 10" },
                { "text": "Full-page program ad" },
                { "text": "2 social media spotlights" },
                { "text": "Mention from stage" },
                { "text": "Sponsor board" },
                { "text": "Charcuterie & dessert upgrade" },
                { "text": "Sponsors 8 individuals in recovery to attend" }
              ]
            },
            {
              "tier": "Hope Diamond",
              "price": "$1,250",
              "perks": [
                { "text": "Table of 10" },
                { "text": "Full-page program ad" },
                { "text": "2 social media spotlights" },
                { "text": "Sponsor board" },
                { "text": "Dessert upgrade" },
                { "text": "Sponsors 5 individuals in recovery to attend" }
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
