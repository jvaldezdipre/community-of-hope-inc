-- ============================================================================
-- Round 4b: Add the Bottom CTA block to the Kindness Connection page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Final round. Full replace of the kindness-connection row with ALL 7
-- sections seeded (hero, receive, details, process, audience, faq, bottom
-- CTA). After this runs, the entire Kindness Connection page is rendered
-- from CMS content and the hardcoded fallback in KindnessConnectionPage-
-- Content.tsx is no longer used.
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
      },
      {
        "type": "KindnessConnectionDetailsBlock",
        "props": {
          "id": "KindnessConnectionDetailsBlock-main",
          "heading": "At a glance",
          "details": [
            { "label": "Cost", "value": "Free" },
            { "label": "Who Can Request", "value": "Anyone in need" },
            { "label": "Service Area", "value": "All of CT & beyond" },
            { "label": "Director", "value": "Veronica Sullivan" },
            { "label": "Response Time", "value": "As fast as we can" },
            { "label": "How to Request", "value": "Call 860-856-5655" }
          ]
        }
      },
      {
        "type": "KindnessConnectionProcessBlock",
        "props": {
          "id": "KindnessConnectionProcessBlock-main",
          "eyebrow": "How It Works",
          "heading": "Three steps to getting help.",
          "steps": [
            {
              "number": "1",
              "title": "Tell us what you need",
              "description": "Give us a call at 860-856-5655. Let us know your situation and what would help most."
            },
            {
              "number": "2",
              "title": "We review & connect",
              "description": "Our team reviews your request and reaches out to coordinate pickup, delivery, or next steps."
            },
            {
              "number": "3",
              "title": "Receive support",
              "description": "Get the items or assistance you need. No hoops, no judgment. Just practical help from people who care."
            }
          ]
        }
      },
      {
        "type": "KindnessConnectionAudienceBlock",
        "props": {
          "id": "KindnessConnectionAudienceBlock-main",
          "eyebrow": "Who This Is For",
          "heading": "If you need help, this is for you.",
          "items": [
            { "text": "Families facing food insecurity or essential needs gaps" },
            { "text": "Individuals who need clothing, hygiene products, or household items" },
            { "text": "People seeking referrals for housing or other resources" },
            { "text": "Social workers, pastors, or case managers referring someone in need" }
          ]
        }
      },
      {
        "type": "KindnessConnectionFAQBlock",
        "props": {
          "id": "KindnessConnectionFAQBlock-main",
          "heading": "Common Questions",
          "faqs": [
            {
              "question": "Do I have to be in a program to get help?",
              "answer": "No. Kindness Connection is open to anyone in the community. You don''t need to be a Hope House resident or part of any program. If you need help, reach out."
            },
            {
              "question": "Is there a cost?",
              "answer": "Everything we provide through Kindness Connection is free. We''re a 501(c)(3) nonprofit funded by donations and community support."
            },
            {
              "question": "What if I need something not on the list?",
              "answer": "Reach out anyway. If we can''t help directly, we''ll do our best to connect you with someone who can. Our network of partners covers a wide range of needs."
            },
            {
              "question": "Can I request help for someone else?",
              "answer": "Absolutely. Family members, social workers, case managers, pastors, anyone can submit a request on behalf of someone in need."
            },
            {
              "question": "How can I donate items to Kindness Connection?",
              "answer": "We accept donations of food, clothing, hygiene products, and household items. Contact us to coordinate a drop-off or pickup. Every item donated goes directly to an individual or family in need."
            }
          ]
        }
      },
      {
        "type": "KindnessConnectionBottomCTABlock",
        "props": {
          "id": "KindnessConnectionBottomCTABlock-main",
          "heading": "Need help? Let us know.",
          "description": "Give us a call and our team will talk through what you need. We''re here to help.",
          "buttonLabel": "Call Us",
          "buttonHref": "tel:8608565655",
          "phoneNumber": "860-856-5655"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
