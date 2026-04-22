-- ============================================================================
-- Replace slot-based payment grid with an array-based DonatePaymentsBlock.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Aligns editor and live layouts by using a single component whose render
-- function emits the 2-column grid directly (matching how events render their
-- sponsorship tier grid inside one EventCard render). Overwrites the donate
-- row from migration 005.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'donate',
  '{
    "content": [
      {
        "type": "Heading",
        "props": {
          "id": "Heading-donate",
          "text": "Donate"
        }
      },
      {
        "type": "Paragraph",
        "props": {
          "id": "Paragraph-donate",
          "text": "Every gift helps a woman rebuild her life. Your donation goes directly to Hope House, Kindness Connection, and our recovery programs."
        }
      },
      {
        "type": "DonatePaymentsBlock",
        "props": {
          "id": "DonatePaymentsBlock-main",
          "methods": [
            {
              "heading": "Donate Online",
              "description": "100% of your donation goes directly to our mission. No platform fees, no processing fees.",
              "buttonLabel": "Donate via Zeffy",
              "buttonUrl": "https://www.zeffy.com/en-US/donation-form/hopes-heros",
              "badge": "Recommended, Zero Fees",
              "featured": "featured"
            },
            {
              "heading": "Donate via PayPal",
              "description": "Quick and secure giving through PayPal.",
              "buttonLabel": "Donate via PayPal",
              "buttonUrl": "https://www.paypal.com/donate/?hosted_button_id=PT3GR48DP4N9Y",
              "badge": "",
              "featured": "standard"
            }
          ]
        }
      },
      {
        "type": "DonateImpactSection",
        "props": {
          "id": "DonateImpactSection-main",
          "heading": "Your generosity in action.",
          "tiers": [
            { "amount": "$40", "description": "Provides a bus pass for a resident" },
            { "amount": "$175", "description": "Covers one week of housing at Hope House" },
            { "amount": "$500", "description": "Supports a resident''s utility costs" }
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
