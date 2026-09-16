-- ============================================================================
-- Backfill programAdsText on existing EventCard blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- The "Program ads also available: $50 to $300" line beside the sponsorship
-- button used to be hardcoded. It's now an editable field on each event
-- (Events → an event → "Program ads line"). This pre-fills that field on events
-- that already exist, so Annette sees the current text in the editor instead
-- of an empty box — same approach as 041_global_settings_phone_fields.sql.
--
-- This migration is OPTIONAL for the live site: events without the field
-- already fall back to the exact same text. Run it so the editor is truthful —
-- without it the field looks empty while the site still shows the line.
--
-- SAFETY NOTES:
-- • Only ADDS programAdsText to EventCard blocks that don't have it yet.
--   An event where it's already set (including set to empty = hidden) is left
--   exactly as it is.
-- • Does NOT touch any other field on any event (title, date, tickets,
--   sponsorship tiers, images, PDFs…), the Heading/Paragraph blocks, block
--   order, or any other page.
-- • Idempotent — once every event has the field, re-running matches no rows
--   and reports UPDATE 0.
-- ============================================================================

update public.pages
set
  content = jsonb_set(
    content,
    '{content}',
    coalesce(
      (
        select jsonb_agg(
                 case
                   when block ->> 'type' = 'EventCard'
                     and block -> 'props' -> 'programAdsText' is null
                   then jsonb_set(
                     block,
                     '{props,programAdsText}',
                     '"Program ads also available: $50 to $300"'::jsonb
                   )
                   else block
                 end
                 order by ord
               )
        from jsonb_array_elements(content -> 'content') with ordinality as t(block, ord)
      ),
      '[]'::jsonb
    )
  ),
  updated_at = now()
where slug = 'events'
  and exists (
    select 1
    from jsonb_array_elements(content -> 'content') as b
    where b ->> 'type' = 'EventCard'
      and b -> 'props' -> 'programAdsText' is null
  );
