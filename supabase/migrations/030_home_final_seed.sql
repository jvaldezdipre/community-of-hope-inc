-- ============================================================================
-- Home Rounds 3-5 (final): MidCTA + Programs + About + DarkSection + FAQ +
-- ContactForm intro + FinalCTA. Home page is now fully CMS-managed across
-- 11 blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of home row with all 11 blocks seeded. ContactForm's form
-- fields and submission logic stay hardcoded (needed to hit the inquiries
-- table); only its eyebrow/heading/body/phone are CMS-managed.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'home',
  '{
    "content": [
      {
        "type": "HomeHeroBlock",
        "props": {
          "id": "HomeHeroBlock-main",
          "videoSrc": "/herovideo.mp4",
          "eyebrow": "Women\u2019s Recovery Home \u2014 Groton, CT",
          "headingLine1": "A safe place to",
          "headingLine2": "rebuild your life.",
          "subheading": "Hope House is a faith-based, family-style recovery home for women overcoming addiction, homelessness, and domestic violence in southeastern Connecticut. Beds available now.",
          "primaryButtonLabel": "Get Help Now",
          "primaryButtonHref": "#contact",
          "secondaryButtonLabel": "Learn About Our Programs",
          "secondaryButtonHref": "#programs",
          "trustSignals": [
            { "text": "501(c)(3) Public Charity" },
            { "text": "15+ Years Serving CT" },
            { "text": "Faith-Based & Mentor-Driven" }
          ]
        }
      },
      {
        "type": "HomeTrustBarBlock",
        "props": {
          "id": "HomeTrustBarBlock-main",
          "stats": [
            { "number": "15+", "label": "Years Serving\nSoutheastern CT" },
            { "number": "12", "label": "Beds at\nHope House" },
            { "number": "300+", "label": "Women''s Lives\nTransformed" },
            { "number": "4", "label": "Recovery & Community\nPrograms" }
          ]
        }
      },
      {
        "type": "HomeWhyUsBlock",
        "props": {
          "id": "HomeWhyUsBlock-main",
          "eyebrow": "Why Community of Hope",
          "heading": "Not just sober living.\nA place to become whole.",
          "items": [
            { "number": "01", "title": "Family, Not a Facility", "description": "Hope House isn''t an institution. It''s a home. Women live together as a family, sharing meals, responsibilities, and genuine connection. We believe recovery happens in relationship, not isolation." },
            { "number": "02", "title": "Faith-Centered Recovery", "description": "Our program is rooted in faith, not as a requirement, but as a foundation. Women are invited into a community that believes in second chances, unconditional love, and the possibility of total transformation." },
            { "number": "03", "title": "From Crisis to Career", "description": "We don''t just provide shelter. Our women earn certifications like CNA licenses and CCAR Recovery Coach credentials. They leave with skills, confidence, and a real path forward." },
            { "number": "04", "title": "Mentors Who''ve Been There", "description": "Our mentors and staff include women who have walked the same road. They understand the struggle because they''ve lived it, and they know what it takes to build a new life." }
          ]
        }
      },
      {
        "type": "HomeTestimonialsBlock",
        "props": {
          "id": "HomeTestimonialsBlock-main",
          "eyebrow": "Stories of Transformation",
          "heading": "Real lives. Real change.\nReal hope.",
          "testimonials": [
            { "quote": "When I came to Hope House, I was homeless and suicidal. I had nothing. Through the love and structure here, I earned my CNA license, got a car, found an apartment, and rebuilt my relationship with my children. Community of Hope saved my life.", "name": "Miss R.", "context": "Hope House Graduate", "initials": "MR" },
            { "quote": "I''ve referred several clients to Community of Hope over the years. What sets them apart is the family model. It''s not just a bed and rules. The women genuinely support each other, and the staff walks alongside them every step. It''s the kind of program I wish existed in every county.", "name": "Licensed Social Worker", "context": "Referral Partner, New London County", "initials": "SW" },
            { "quote": "I didn''t think I deserved help. I didn''t think anyone would want me. But from day one, they treated me like I mattered. They helped me get clean, get certified, and get my life back. I''m now a Recovery Coach helping other women because of what Hope House gave me.", "name": "Program Graduate", "context": "Now a CCAR Certified Recovery Coach", "initials": "PG" }
          ]
        }
      },
      {
        "type": "HomeMidCTABlock",
        "props": {
          "id": "HomeMidCTABlock-main",
          "heading": "Need to refer a client or find help for someone you love?",
          "subheading": "We''re here 24/7. Call us or fill out our referral form below.",
          "primaryButtonLabel": "Call Now",
          "primaryButtonHref": "tel:8609124356",
          "primaryButtonIsPhone": true,
          "secondaryButtonLabel": "Refer Someone",
          "secondaryButtonHref": "#contact"
        }
      },
      {
        "type": "HomeProgramsBlock",
        "props": {
          "id": "HomeProgramsBlock-main",
          "eyebrow": "Our Programs",
          "heading": "Four ways we serve.\nOne mission of restoration.",
          "goodForLabel": "This is for you if",
          "linkLabel": "Learn more",
          "programs": [
            {
              "number": "01",
              "subtitle": "Women''s Recovery Home",
              "title": "Hope House",
              "description": "A 12-bed, faith-based recovery residence. Women receive structured support, mentoring, and a safe family-style environment to rebuild their lives. No cost for residents.",
              "goodFor": "Women 18+ recovering from addiction, homelessness, or domestic violence who need stable housing and a supportive community.",
              "image": "https://images.unsplash.com/photo-1628077571013-88b0a74d4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGludGVyaW9yJTIwd2FybSUyMHN1bmxpZ2h0JTIwc2FmZXxlbnwxfHx8fDE3NzIzNzcxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "slug": "hope-house"
            },
            {
              "number": "02",
              "subtitle": "Community Outreach",
              "title": "Kindness Connection",
              "description": "A community-facing program providing basic necessities including food, clothing, hygiene products, and household items, plus support with car repairs, certifications, and housing help for individuals and families across Connecticut and beyond.",
              "goodFor": "Community members facing food insecurity or basic needs gaps. Families and individuals seeking local support, including help with transportation, housing, or vocational steps.",
              "image": "https://images.unsplash.com/photo-1707409066859-a90674383d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBmcmllbmRzaGlwJTIwc3VwcG9ydCUyMGVtYnJhY2V8ZW58MXx8fHwxNzcyMzc3MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
              "slug": "kindness-connection"
            },
            {
              "number": "03",
              "subtitle": "CCAR Certification",
              "title": "Recovery Coaching",
              "description": "Our residents and graduates can earn their CCAR Recovery Coach certification, transforming personal experience into a professional credential that helps them serve others. Contact info for this program coming soon.",
              "goodFor": "Women in recovery who want to turn their story into a career helping others. Also open to community members seeking certification.",
              "image": "https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRvcmluZyUyMGNvdW5zZWxpbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzIzNzcxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "slug": "recovery-coaching"
            },
            {
              "number": "04",
              "subtitle": "Celebrating Women Leaders",
              "title": "LeadHerships",
              "description": "An annual initiative honoring and empowering women who are actively serving others. Nonprofit partners nominate honorees for a celebration of leadership, resilience, and impact.",
              "goodFor": "Nonprofit organizations, community leaders, and anyone passionate about celebrating women who lead by serving others.",
              "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "slug": "leadherships"
            }
          ]
        }
      },
      {
        "type": "HomeAboutBlock",
        "props": {
          "id": "HomeAboutBlock-main",
          "eyebrow": "About Us",
          "heading": "Built on faith.\nDriven by love.",
          "bodyParagraph1": "Community of Hope Inc. was founded over 15 years ago with one belief: every woman, no matter how broken, how lost, how far gone, deserves a real chance at a new life. Under the leadership of Executive Director Annette Eldridge, we''ve grown from a single home into a comprehensive recovery and community outreach organization.",
          "bodyParagraph2": "Hope House is more than a program. It''s a family. Women share meals, hold each other accountable, and walk together through the hardest season of their lives. Our approach combines faith-based mentoring, life skills development, vocational training, and genuine community.",
          "details": [
            { "label": "Executive Director", "value": "Annette Eldridge" },
            { "label": "Status", "value": "501(c)(3) Public Charity" }
          ],
          "linkLabel": "Learn our story, watch our video, and meet our team",
          "linkHref": "/about",
          "videoEmbedUrl": "https://www.youtube.com/embed/Xs3JhtwBFSE?start=267",
          "videoTitle": "Community of Hope video",
          "pullQuote": "We don''t just help women survive. We help them become who they were always meant to be.",
          "pullQuoteAttribution": "Annette Eldridge, Executive Director"
        }
      },
      {
        "type": "HomeDarkProcessBlock",
        "props": {
          "id": "HomeDarkProcessBlock-main",
          "backgroundImage": "/home1.webp",
          "eyebrow": "How It Works",
          "heading": "From your first call to a brand new life.",
          "steps": [
            { "number": "1", "title": "Reach Out", "description": "Call us, fill out our referral form, or have a social worker or family member contact us on your behalf." },
            { "number": "2", "title": "Assessment & Intake", "description": "We''ll have a conversation about your situation, needs, and goals. No judgment, just understanding." },
            { "number": "3", "title": "Move In & Begin", "description": "Once accepted, you''ll join the Hope House family. Your room, your community, and your new beginning are waiting." },
            { "number": "4", "title": "Grow & Graduate", "description": "Through mentoring, training, and faith-based support, you''ll develop the skills and confidence to build an independent life." }
          ]
        }
      },
      {
        "type": "HomeFAQBlock",
        "props": {
          "id": "HomeFAQBlock-main",
          "eyebrow": "Common Questions",
          "heading": "Everything you need to know.",
          "beforePhoneText": "Still have questions? Call us at",
          "phoneNumber": "860-912-4356",
          "afterPhoneText": "or send a message through our form below.",
          "faqs": [
            { "question": "How quickly can someone move in?", "answer": "Accommodation is based on bed availability, with crisis cases prioritized. You''ll hear back from us regarding your application. Call us directly at 860-912-4356 to discuss your situation. For immediate resources anywhere in Connecticut, you can also dial 2-1-1 or visit 211ct.org anytime." },
            { "question": "What is the application or referral process?", "answer": "You can apply directly, be referred by a social worker, case manager, treatment center, or family member. Simply call us or fill out the referral form on this page. We''ll schedule a phone conversation to discuss the situation and determine if Hope House is the right fit." },
            { "question": "Is this a religious program? Do residents have to be Christian?", "answer": "Hope House is faith-based and rooted in Christian values. However, we welcome women of all backgrounds and beliefs. Our faith approach is about love, community, and second chances, not requirements or judgment." },
            { "question": "What does the program include?", "answer": "Residents receive safe housing, mentoring, job readiness support, clothing with dignity, leadership opportunities, community activities, and ongoing personal support. Everything is designed to help women transition from crisis to independence." },
            { "question": "How long does someone stay at Hope House?", "answer": "Program length varies based on individual needs, typically ranging from 6 to 18 months. We don''t rush anyone out. The goal is lasting transformation, not a quick fix." },
            { "question": "Is there a cost for residents?", "answer": "There is no cost for residents. As a nonprofit, we believe every woman who needs help should have access to it, regardless of financial situation." },
            { "question": "How can I donate or support Community of Hope?", "answer": "You can donate through our website, mail a check, organize a supply drive, or volunteer your time. Every gift, no matter the size, directly supports women in recovery. We''re a registered 501(c)(3), so all donations are tax-deductible." }
          ]
        }
      },
      {
        "type": "HomeContactBlock",
        "props": {
          "id": "HomeContactBlock-main",
          "eyebrow": "Get In Touch",
          "heading": "Ready to reach out?\nWe''re here for you.",
          "body": "Whether you''re seeking help for yourself, referring a client, or want to support our mission, fill out this form or call us directly. There''s no wrong way to start.",
          "phoneNumber": "860-912-4356"
        }
      },
      {
        "type": "HomeFinalCTABlock",
        "props": {
          "id": "HomeFinalCTABlock-main",
          "heading": "Every woman deserves a second chance.\nLet us be part of hers.",
          "body": "Whether you''re reaching out for help, referring a client, or supporting our mission. Your next step matters.",
          "primaryButtonLabel": "Get Help Now",
          "primaryButtonHref": "#contact",
          "secondaryButtonLabel": "860-912-4356",
          "secondaryButtonHref": "tel:8609124356",
          "secondaryButtonIsPhone": true
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
