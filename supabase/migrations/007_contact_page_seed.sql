-- ============================================================================
-- Seed the Contact page with the existing hardcoded copy in Puck format.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'contact',
  '{
    "content": [
      {
        "type": "Heading",
        "props": {
          "id": "Heading-contact",
          "text": "Contact Us"
        }
      },
      {
        "type": "Paragraph",
        "props": {
          "id": "Paragraph-contact",
          "text": "Whether you''re seeking help, making a referral, or want to get involved, we''re here. Fill out the form below or call us."
        }
      },
      {
        "type": "ContactSidebar",
        "props": {
          "id": "ContactSidebar-main",
          "eyebrow": "Reach us directly",
          "phones": [
            { "label": "Main", "number": "860-912-4356" },
            { "label": "Kindness Connection", "number": "860-856-5655" }
          ],
          "followUsLabel": "Follow us"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
