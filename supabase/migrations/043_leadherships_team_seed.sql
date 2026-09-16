-- ============================================================================
-- Add a "Leadership & Staff" roster block to the LeadHerships page.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- This is an identical twin of the About page's Leadership & Staff section:
-- same three groups (Executive Director / Staff / Board), same photo upload
-- with initials fallback, same field labels. It holds its OWN people on the
-- leadherships row, so editing this roster never touches the About page and
-- editing About never touches this one.
--
-- Seeded with the current leadership as a starting point, photos left empty so
-- initials show until Annette uploads headshots at
--   /admin/pages/leadherships → Leadership & Staff.
--
-- SAFETY NOTES:
-- • APPENDS one block. Does NOT replace the row (unlike the 0xx seed files,
--   which do a full overwrite and would discard admin edits).
-- • Idempotent — if a LeadHershipsTeamBlock is already on the page, this does
--   nothing. Safe to re-run.
-- • Does NOT touch the other 8 LeadHerships blocks (hero, how it works,
--   upcoming event, sponsorship, carousel, get involved, FAQ, bottom CTA) or
--   any of their content.
-- • Does NOT touch the About page or any other page row.
-- • Placement: immediately after the Sponsorship block and before the Past
--   Events carousel. If the Sponsorship block has been removed or renamed, it
--   falls back to appending at the end of the page instead.
-- • If the leadherships row does not exist yet, this is a no-op — run
--   024_leadherships_final_seed.sql first.
-- ============================================================================

with target as (
  select
    p.slug,
    coalesce(
      (
        -- WITH ORDINALITY is 1-based; jsonb paths are 0-based, so the
        -- Sponsorship block's ordinal is exactly the slot after it.
        select ord
        from jsonb_array_elements(p.content -> 'content') with ordinality as t(block, ord)
        where block ->> 'type' = 'LeadHershipsSponsorshipBlock'
        limit 1
      ),
      jsonb_array_length(p.content -> 'content')
    )::int as insert_at
  from public.pages p
  where p.slug = 'leadherships'
    and not exists (
      select 1
      from jsonb_array_elements(p.content -> 'content') as b
      where b ->> 'type' = 'LeadHershipsTeamBlock'
    )
)
update public.pages p
set
  content = jsonb_insert(
    p.content,
    array['content', t.insert_at::text],
    '{
      "type": "LeadHershipsTeamBlock",
      "props": {
        "id": "LeadHershipsTeamBlock-main",
        "heading": "Leadership & Staff",
        "executiveDirector": {
          "name": "Annette Eldridge",
          "title": "Executive Director",
          "image": ""
        },
        "staffLabel": "Staff",
        "staff": [
          { "name": "Faith Claspell", "role": "Program Director", "image": "" },
          { "name": "Veronica Sullivan", "role": "Kindness Connection Director", "image": "" },
          { "name": "Sandra St Germaine", "role": "Fundraising Director", "image": "" }
        ],
        "boardLabel": "Board of Directors",
        "board": [
          { "name": "Julie Brousseau", "role": "Chairman", "image": "" },
          { "name": "Leslie Carpenter", "role": "Secretary", "image": "" },
          { "name": "Megan Quinn", "role": "Board Member", "image": "" },
          { "name": "Stephene Bordelon", "role": "Board Member", "image": "" }
        ]
      }
    }'::jsonb,
    false  -- insert BEFORE this slot, i.e. directly after Sponsorship
  ),
  updated_at = now()
from target t
where p.slug = t.slug;

-- ============================================================================
-- VERIFY (optional) — lists the blocks on the page in order.
-- ============================================================================
-- select ord - 1 as index, b ->> 'type' as block
-- from public.pages p,
--      jsonb_array_elements(p.content -> 'content') with ordinality as t(b, ord)
-- where p.slug = 'leadherships'
-- order by ord;
--
-- Expected: LeadHershipsTeamBlock at index 4, between Sponsorship and Carousel.

-- ============================================================================
-- ROLLBACK (optional) — removes the block, leaves everything else intact.
-- ============================================================================
-- update public.pages
-- set
--   content = jsonb_set(
--     content,
--     '{content}',
--     coalesce(
--       (
--         select jsonb_agg(b order by ord)
--         from jsonb_array_elements(content -> 'content') with ordinality as t(b, ord)
--         where b ->> 'type' <> 'LeadHershipsTeamBlock'
--       ),
--       '[]'::jsonb
--     )
--   ),
--   updated_at = now()
-- where slug = 'leadherships';
