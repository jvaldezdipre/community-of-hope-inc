-- ============================================================================
-- Round 3a: Add the "How It Works" block to the Kindness Connection page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the kindness-connection row with hero + receive + details
-- + process blocks seeded. Safe to run if you haven't customized earlier
-- blocks yet. If you HAVE edited them and want to preserve those edits,
-- skip this migration and add the process block manually in the admin.
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
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
