-- ============================================================================
-- Append the Leadership & Staff block to the About page Puck content.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the About page row with hero + leadership sections. Safe to
-- run if you haven't edited the About page in the admin yet. If you HAVE made
-- edits and don't want to lose them, skip this and add the leadership block
-- manually in the editor (or export→merge).
-- ============================================================================

insert into public.pages (slug, content)
values (
  'about',
  '{
    "content": [
      {
        "type": "Heading",
        "props": {
          "id": "Heading-about",
          "text": "About Us"
        }
      },
      {
        "type": "Paragraph",
        "props": {
          "id": "Paragraph-about-tagline",
          "text": "Built on faith. Driven by love."
        }
      },
      {
        "type": "Paragraph",
        "props": {
          "id": "Paragraph-about-intro",
          "text": "Community of Hope Inc. was founded over 15 years ago with one belief: every woman, no matter how broken, how lost, how far gone, deserves a real chance at a new life. Under the leadership of Executive Director Annette Eldridge, we''ve grown from a single home into a comprehensive recovery and community outreach organization."
        }
      },
      {
        "type": "AboutHeroBlock",
        "props": {
          "id": "AboutHeroBlock-main",
          "storyText": "Community of Hope Inc. began over 15 years ago with a single home and a conviction that every woman deserves a real chance at a new life. With the support of partners like Eversource and our community, we renovated and expanded our space to serve more women. Today we operate Hope House as a 12-bed recovery home and run four programs across Connecticut and beyond.",
          "milestones": [
            { "value": "15+", "label": "Years of service" },
            { "value": "300+", "label": "Women''s lives transformed" },
            { "value": "8 → 12", "label": "Beds at Hope House (grown over time)" }
          ],
          "mediaType": "video",
          "videoUrl": "https://www.youtube.com/watch?v=Xs3JhtwBFSE&t=267s",
          "image": ""
        }
      },
      {
        "type": "AboutLeadershipBlock",
        "props": {
          "id": "AboutLeadershipBlock-main",
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
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
