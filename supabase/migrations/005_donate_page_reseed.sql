-- ============================================================================
-- Reseed the Donate page with payment cards nested inside a slot-based grid
-- so the editor and live site render with the same 2-column layout.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
-- Overwrites the donate row from migration 004.
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
        "type": "DonatePaymentGrid",
        "props": {
          "id": "DonatePaymentGrid-main",
          "cards": [
            {
              "type": "DonatePaymentCard",
              "props": {
                "id": "DonatePaymentCard-zeffy",
                "heading": "Donate Online",
                "description": "100% of your donation goes directly to our mission. No platform fees, no processing fees.",
                "buttonLabel": "Donate via Zeffy",
                "buttonUrl": "https://www.zeffy.com/en-US/donation-form/hopes-heros",
                "badge": "Recommended, Zero Fees",
                "featured": "featured"
              }
            },
            {
              "type": "DonatePaymentCard",
              "props": {
                "id": "DonatePaymentCard-paypal",
                "heading": "Donate via PayPal",
                "description": "Quick and secure giving through PayPal.",
                "buttonLabel": "Donate via PayPal",
                "buttonUrl": "https://www.paypal.com/donate/?hosted_button_id=PT3GR48DP4N9Y",
                "badge": "",
                "featured": "standard"
              }
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
