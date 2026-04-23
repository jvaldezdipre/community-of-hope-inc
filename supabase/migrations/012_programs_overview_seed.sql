-- ============================================================================
-- Seed the Programs Overview page with existing hardcoded content.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Covers the /programs overview route only. Individual sub-pages (Hope House,
-- Kindness Connection, LeadHerships, Recovery Coaching) continue to render
-- from code until they're wrapped in Puck individually. The program cards'
-- "Learn more →" links are hardcoded to /programs/[slug]; staff can't change
-- where they point.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'programs',
  '{
    "content": [
      {
        "type": "Heading",
        "props": {
          "id": "Heading-programs",
          "text": "Our Programs"
        }
      },
      {
        "type": "Paragraph",
        "props": {
          "id": "Paragraph-programs-intro",
          "text": "Recovery housing, community outreach, professional certification, and nonprofit collaboration. Find the program that fits your situation or the person you''re referring."
        }
      },
      {
        "type": "ProgramsListBlock",
        "props": {
          "id": "ProgramsListBlock-main",
          "introText": "Each of our programs serves a different need, but they share the same foundation: faith, dignity, and the belief that no one is beyond hope. Many of the women we serve move through more than one program on their path forward.",
          "programs": [
            {
              "slug": "hope-house",
              "number": "01",
              "subtitle": "Women''s Recovery Home",
              "title": "Hope House",
              "image": "https://images.unsplash.com/photo-1628077571013-88b0a74d4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGludGVyaW9yJTIwd2FybSUyMHN1bmxpZ2h0JTIwc2FmZXxlbnwxfHx8fDE3NzIzNzcxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "goodFor": "Women 18+ recovering from addiction, homelessness, or domestic violence who need stable housing and a supportive community.",
              "highlights": [
                { "text": "12-bed faith-based residence" },
                { "text": "6–18 month program" },
                { "text": "Mentoring & job readiness" },
                { "text": "Clothing with Dignity" }
              ]
            },
            {
              "slug": "kindness-connection",
              "number": "02",
              "subtitle": "Community Outreach",
              "title": "Kindness Connection",
              "image": "https://images.unsplash.com/photo-1707409066859-a90674383d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBmcmllbmRzaGlwJTIwc3VwcG9ydCUyMGVtYnJhY2V8ZW58MXx8fHwxNzcyMzc3MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
              "goodFor": "Community members facing food insecurity or basic needs gaps. Families and individuals seeking local support, including help with transportation, housing, or vocational steps.",
              "highlights": [
                { "text": "Food, clothing & essentials" },
                { "text": "Car repairs & housing help" },
                { "text": "Open to all, no referral needed" },
                { "text": "Serving all of Connecticut" }
              ]
            },
            {
              "slug": "recovery-coaching",
              "number": "03",
              "subtitle": "CCAR Certification",
              "title": "Recovery Coaching",
              "image": "https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRvcmluZyUyMGNvdW5zZWxpbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzIzNzcxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "goodFor": "Women in recovery who want to turn their story into a career helping others. Also open to community members seeking certification.",
              "highlights": [
                { "text": "CCAR certified training" },
                { "text": "Turn experience into a career" },
                { "text": "Open to residents & community" },
                { "text": "Professional credential" }
              ]
            },
            {
              "slug": "leadherships",
              "number": "04",
              "subtitle": "Celebrating Women Leaders",
              "title": "LeadHerships",
              "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "goodFor": "Nonprofit organizations, community leaders, and anyone passionate about celebrating women who lead by serving others.",
              "highlights": [
                { "text": "Annual celebration event" },
                { "text": "Honoring women leaders" },
                { "text": "Nonprofit partnerships" },
                { "text": "Sponsorship opportunities" }
              ]
            }
          ]
        }
      },
      {
        "type": "ProgramsHelpCTA",
        "props": {
          "id": "ProgramsHelpCTA-main",
          "heading": "Not sure which program fits?",
          "description": "Call us or fill out a quick form and we''ll help you figure out the right next step for yourself or the person you''re referring.",
          "buttonLabel": "Contact Us",
          "buttonHref": "/contact",
          "phonePrefix": "or call ",
          "phoneNumber": "860-912-4356"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
