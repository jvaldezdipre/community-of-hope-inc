-- ============================================================================
-- LeadHerships Round 6+7 (final): Get Involved + FAQ + Bottom CTA.
-- LeadHerships is now fully CMS-managed across 8 blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of leadherships row with all 8 blocks seeded.
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
      },
      {
        "type": "LeadHershipsCarouselBlock",
        "props": {
          "id": "LeadHershipsCarouselBlock-main",
          "eyebrow": "Past Events",
          "heading": "A night of honor, community, and celebration.",
          "description": "A glimpse into past LeadHerships evenings \u2014 the honorees, the guests, and the community standing together for Community of Hope.",
          "background": "beige",
          "photos": [
            { "src": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80", "alt": "Elegant event hall with tables and stage", "caption": "Past LeadHerships events have brought together community leaders from across Connecticut." },
            { "src": "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80", "alt": "Group of women celebrating at an event", "caption": "Honorees and guests celebrating the women who lead, serve, and inspire." },
            { "src": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80", "alt": "Woman speaking at a podium", "caption": "Honoree remarks \u2014 stories of courage, leadership, and quiet impact." },
            { "src": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80", "alt": "Table setting at a formal event", "caption": "Thoughtful details throughout the evening \u2014 every table tells a story." },
            { "src": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80", "alt": "Audience applauding at event", "caption": "A room full of supporters standing behind Community of Hope''s mission." }
          ]
        }
      },
      {
        "type": "LeadHershipsGetInvolvedBlock",
        "props": {
          "id": "LeadHershipsGetInvolvedBlock-main",
          "cards": [
            {
              "title": "Volunteer",
              "body": "Join us for a day of fun and hospitality, working with like-minded women. Training provided. Contact us to sign up.",
              "bullets": []
            },
            {
              "title": "Donate or Contribute",
              "body": "Help make LeadHerships special with:",
              "bullets": [
                { "text": "Swag bag items for honorees (20\u201325 qty)" },
                { "text": "Gift certificates and door prizes" },
                { "text": "Raffle baskets and in-kind services" },
                { "text": "General operating support" }
              ]
            }
          ]
        }
      },
      {
        "type": "LeadHershipsFAQBlock",
        "props": {
          "id": "LeadHershipsFAQBlock-main",
          "heading": "Common Questions",
          "faqs": [
            {
              "question": "What is LeadHerships?",
              "answer": "LeadHerships is an initiative of Community of Hope designed to honor and empower women who are actively serving others. Each year, nonprofit partners are invited to nominate an honoree who reflects leadership, resilience, and impact in their community.",
              "helpfulLinks": []
            },
            {
              "question": "How does the nomination process work?",
              "answer": "Each invited nonprofit partner selects one honoree who reflects leadership, resilience, and impact. Nominations are submitted through our Google Form. At the celebration, honorees and their organizations receive recognition.",
              "helpfulLinks": [
                { "label": "Open the nomination form", "url": "https://docs.google.com/forms/d/1Zgi7z06LejTq1k5eHz4iYgyhcWW9Tnb0ahidj2urrlU/viewform" }
              ]
            },
            {
              "question": "How can my organization get involved?",
              "answer": "There are many ways to participate: become a sponsor, nominate an honoree, volunteer at the event, or contribute items for swag bags and raffle baskets. Contact us to discuss how your organization can be part of LeadHerships.",
              "helpfulLinks": []
            },
            {
              "question": "Is there a cost to attend?",
              "answer": "Nonprofits rarely get to attend their own events without incurring costs. LeadHerships changes that. Each nonprofit partner receives 2 complimentary luncheon tickets. Additional tickets are available through sponsorship packages.",
              "helpfulLinks": []
            },
            {
              "question": "How can I become a sponsor?",
              "answer": "We offer sponsorship packages from $200 to $5,000 with various benefits. Custom packages are also available. Contact us by phone to discuss sponsorship opportunities.",
              "helpfulLinks": [
                { "label": "Call 860-912-4356", "url": "tel:8609124356" }
              ]
            }
          ]
        }
      },
      {
        "type": "LeadHershipsBottomCTABlock",
        "props": {
          "id": "LeadHershipsBottomCTABlock-main",
          "heading": "Be part of LeadHerships.",
          "description": "Whether you want to nominate an honoree, sponsor the event, volunteer, or contribute, we''d love to have you at the table.",
          "buttonLabel": "Nominate an Honoree",
          "buttonHref": "https://docs.google.com/forms/d/1Zgi7z06LejTq1k5eHz4iYgyhcWW9Tnb0ahidj2urrlU/viewform",
          "phoneNumber": "860-912-4356"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
