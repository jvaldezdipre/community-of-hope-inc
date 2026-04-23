-- ============================================================================
-- Seed the Global Settings row that holds site-wide values (social URLs etc.)
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- This row is NOT rendered as a public page. Its values are read by the
-- footer (every page) and the contact sidebar via `getSocialLinks()` in
-- lib/cms.ts. Staff edits it through the "Global settings" option in the
-- admin page dropdown.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'global-settings',
  '{
    "content": [
      {
        "type": "GlobalSocialLinks",
        "props": {
          "id": "GlobalSocialLinks-main",
          "facebookUrl": "",
          "instagramUrl": "",
          "linkedinUrl": ""
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do nothing;
