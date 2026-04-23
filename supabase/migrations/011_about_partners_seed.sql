-- ============================================================================
-- Append the Community Partners block to the About page Puck content.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of the About row with hero + leadership + partners sections.
-- Safe to run if you haven't customized those sections in the admin yet.
-- If you HAVE, skip this and add the partners block manually (or merge by
-- hand in the Supabase jsonb editor).
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
      },
      {
        "type": "AboutPartnersBlock",
        "props": {
          "id": "AboutPartnersBlock-main",
          "heading": "Community Partners",
          "subtitle": "Groups we work closely with and would recommend.",
          "partners": [
            {
              "name": "Regeneration (Groton Bible Chapel)",
              "url": "https://grotonbiblechapel.churchcenter.com/registrations/events/2458371",
              "description": "Groton Bible Chapel offers a weekly Regeneration meeting. Regeneration is a life recovery program that offers a supportive, Christian group environment."
            },
            {
              "name": "Community Speaks Out",
              "url": "https://www.communityspeaksout.org",
              "description": "CSO is organized and operated to walk families through the process of getting addicted-family members into treatment through financial and logistical assistance, and to foster community support, awareness, and education on addiction and addiction prevention."
            },
            {
              "name": "Groton Alliance for Substance Abuse Prevention (GASP)",
              "url": "https://llhd.org/healthy-communities/preventing-substance-use-disorder-and-tobacco-related-illness/gasp/",
              "description": "GASP works to reduce and prevent substance abuse among young people in Groton, CT by pulling together businesses, parents, teens, schools, police, youth and health/social service agencies to advance their mission of building a healthy, safe and drug-free community through advocacy and education."
            },
            {
              "name": "Malta Ministries",
              "url": "https://www.maltaoutreach.org",
              "description": "Malta is a faith-based, non-profit organization serving the homeless in southeastern CT."
            },
            {
              "name": "The Southeastern Council on Alcoholism and Drug Dependence (SCADD)",
              "url": "https://www.scadd.org",
              "description": "SCADD''s mission is to provide a treatment environment rich in cultural diversity where individuals and families are empowered to overcome substance abuse issues, thereby improving their quality of life."
            },
            {
              "name": "Work & Learn Inc",
              "url": "https://www.worknlearn.us",
              "description": "Work & Learn is a Bible-based, volunteer-based nonprofit that helps adults transform their lives. It provides free guidance for actions to strengthen spiritual values and career skills with support by volunteer Career Coaches and Christian Mentors."
            },
            {
              "name": "Urban Alliance",
              "url": "https://urbanalliance.com/about/",
              "description": "Urban Alliance''s goal is to create opportunities for people to achieve lasting change in their lives through the collaborative work of churches and organizations in their community."
            },
            {
              "name": "Ahava Living",
              "url": "https://www.ahavaliving.com/",
              "description": "Ahava Living is a community partner supporting women on their journey toward healing, stability, and purposeful living."
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
