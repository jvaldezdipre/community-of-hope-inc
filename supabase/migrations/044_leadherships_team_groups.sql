-- ============================================================================
-- Reshape the LeadHerships team block: flat groups, no hierarchy.
-- ============================================================================
-- Paste into Supabase -> SQL Editor -> New query -> Run.
--
-- 043 seeded this block in the About page's shape: one featured Executive
-- Director on top, then staff, then a smaller board. Annette asked for the
-- opposite on this page -- nobody featured alone, and board members and
-- directors treated as peers. The block now holds a list of GROUPS instead,
-- every person the same size.
--
-- REQUIRES the matching code deploy (LeadHershipsTeamBlock groups field).
-- Until that ships, production skips this block entirely, so running this
-- early is safe -- it just will not be visible yet.
--
-- Seeded with the people currently on the About page. Annette still needs to
-- add, per her note: 2 more program directors and 1 more board member
-- (she listed 6 board / 3 program directors / 1 fundraising director).
-- She does that herself at /admin/pages/leadherships -> Our Team.
--
-- SAFETY NOTES:
-- * Rewrites ONLY the LeadHershipsTeamBlock's props on the leadherships row.
-- * Leaves the other 8 blocks and their order untouched.
-- * Does NOT touch the About page or any other page row.
-- * Safe to re-run - it sets an absolute value.
-- ============================================================================

update public.pages
set
  content = jsonb_set(
    content,
    '{content}',
    (
      select jsonb_agg(
               case
                 when b ->> 'type' = 'LeadHershipsTeamBlock'
                 then jsonb_set(b, '{props}', '{
  "id": "LeadHershipsTeamBlock-main",
  "heading": "Our Team",
  "groups": [
    {
      "label": "Directors",
      "people": [
        {
          "name": "Annette Eldridge",
          "role": "Executive Director",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1776968897884-img-2626.png"
        },
        {
          "name": "Faith Claspell",
          "role": "Program Director",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777308857924-image0-1.jpeg"
        },
        {
          "name": "Sandra St Germain",
          "role": "Fundraising Director",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777309130653-sandy-s.jfif"
        }
      ]
    },
    {
      "label": "Board of Directors",
      "people": [
        {
          "name": "Julie Brousseau",
          "role": "Chairman",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777308597427-thumbnail-1.jfif"
        },
        {
          "name": "Leslie Carpenter",
          "role": "Secretary",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777309114571-leslie-c.jfif"
        },
        {
          "name": "Megan Quinn",
          "role": "Board Member",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777308617833-megan.jfif"
        },
        {
          "name": "Stephene Bordelon",
          "role": "Board Member",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777309210678-stephene.png"
        },
        {
          "name": "Carol Dye",
          "role": "Board Member",
          "image": "https://eyancflbrmtijrgwgkha.supabase.co/storage/v1/object/public/events/1777309103421-carol-dye.jfif"
        }
      ]
    }
  ]
}'::jsonb)
                 else b
               end
               order by ord
             )
      from jsonb_array_elements(content -> 'content') with ordinality as t(b, ord)
    )
  ),
  updated_at = now()
where slug = 'leadherships';
