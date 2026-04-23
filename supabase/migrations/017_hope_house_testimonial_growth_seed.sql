-- ============================================================================
-- Round 5: Add Testimonial + Personal Growth & Leadership blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of hope-house row with all 7 blocks seeded so far.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'hope-house',
  '{
    "content": [
      {
        "type": "HopeHouseHeroBlock",
        "props": {
          "id": "HopeHouseHeroBlock-main",
          "eyebrow": "Women''s Recovery Home",
          "title": "Hope House",
          "mainText": "A 12-bed, faith-based recovery residence where women rebuild their lives in a safe, family-style community. Mentoring, job readiness, and genuine connection. Not a program, a home. No judgment, just a conversation.",
          "eligibilityText": "For women 18+ recovering from addiction, homelessness, or domestic violence who need stable housing and a supportive community.",
          "buttonLabel": "Apply Now",
          "buttonHref": "/apply-hope-house",
          "phoneNumber": "860-912-4356",
          "image": "https://images.unsplash.com/photo-1628077571013-88b0a74d4e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGludGVyaW9yJTIwd2FybSUyMHN1bmxpZ2h0JTIwc2FmZXxlbnwxfHx8fDE3NzIzNzcxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      },
      {
        "type": "HopeHouseReceiveBlock",
        "props": {
          "id": "HopeHouseReceiveBlock-main",
          "eyebrow": "What You''ll Receive",
          "heading": "Everything you need to start over.",
          "pitch": "Hope House isn''t just a bed. It''s a full foundation. Here''s what every resident receives from day one.",
          "items": [
            { "title": "Safe Housing", "detail": "A 12-bed, family-style home, not a facility" },
            { "title": "Clothing with Dignity", "detail": "A boutique experience providing clothing, shoes, and accessories" },
            { "title": "Mentoring", "detail": "From staff and women who have walked the same road" },
            { "title": "Job Readiness", "detail": "Resume help, interview prep, and workplace skills" },
            { "title": "Leadership Opportunities", "detail": "Opportunities to grow, lead, and give back" },
            { "title": "Faith-Based Support", "detail": "Rooted in love, not requirements or judgment" },
            { "title": "Community", "detail": "Women supporting women through accountability and friendship" }
          ]
        }
      },
      {
        "type": "HopeHouseDetailsBlock",
        "props": {
          "id": "HopeHouseDetailsBlock-main",
          "heading": "At a glance",
          "details": [
            { "label": "Beds", "value": "12" },
            { "label": "Program Length", "value": "6–18 months" },
            { "label": "Cost", "value": "Free" },
            { "label": "Age Requirement", "value": "18+" },
            { "label": "Intake", "value": "Based on availability" },
            { "label": "Service Area", "value": "All of Connecticut" }
          ]
        }
      },
      {
        "type": "HopeHouseProcessBlock",
        "props": {
          "id": "HopeHouseProcessBlock-main",
          "eyebrow": "The Path Forward",
          "heading": "From your first call to a brand new life.",
          "backgroundImage": "/hopehouse1.webp",
          "steps": [
            { "number": "1", "title": "Reach Out", "description": "Call us, fill out our referral form, or have a social worker or family member contact us on your behalf." },
            { "number": "2", "title": "Assessment & Intake", "description": "We''ll have a conversation about your situation, needs, and goals. No judgment, just understanding." },
            { "number": "3", "title": "Move In & Begin", "description": "Once accepted, you''ll join the Hope House family. Your room, your community, and your new beginning are waiting." },
            { "number": "4", "title": "Grow & Graduate", "description": "Through mentoring, training, and faith-based support, you''ll develop the skills and confidence to build an independent life." }
          ]
        }
      },
      {
        "type": "HopeHouseCarouselBlock",
        "props": {
          "id": "HopeHouseCarouselBlock-main",
          "eyebrow": "Inside Hope House",
          "heading": "A home, not a facility.",
          "description": "Take a look inside Hope House — the rooms, the grounds, and the community that makes this place feel like home from day one.",
          "background": "beige",
          "photos": [
            { "src": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80", "alt": "A warm, sunlit family-style living room", "caption": "Our family-style living room, where residents gather, share meals, and support one another." },
            { "src": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80", "alt": "Bright kitchen with morning light", "caption": "Mornings at Hope House — coffee, conversation, and a fresh start to every day." },
            { "src": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80", "alt": "Cozy bedroom with natural light", "caption": "Private, peaceful spaces where residents can rest, reflect, and dream again." },
            { "src": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80", "alt": "Hands joined in support", "caption": "Women supporting women — the heart of everything we do at Hope House." },
            { "src": "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1400&q=80", "alt": "Garden path outside a country home", "caption": "The grounds around our barn and gardens — a quiet place to walk, think, and heal." }
          ]
        }
      },
      {
        "type": "HopeHouseTestimonialBlock",
        "props": {
          "id": "HopeHouseTestimonialBlock-main",
          "quote": "When I came to Hope House, I was homeless and suicidal. I had nothing. Through the love and structure here, I earned my CNA license, got a car, found an apartment, and rebuilt my relationship with my children. Community of Hope saved my life.",
          "name": "Miss R.",
          "context": "Hope House Graduate"
        }
      },
      {
        "type": "HopeHouseGrowthBlock",
        "props": {
          "id": "HopeHouseGrowthBlock-main",
          "eyebrow": "Grow, Lead, Give Back",
          "heading": "Recovery is the beginning, not the end.",
          "description": "Hope House isn''t just about getting back on your feet. It''s about discovering who you really are. Through mentoring, workshops, and community, residents build the confidence, skills, and vision to lead their own lives.",
          "backgroundImage": "/hope2.webp",
          "cards": [
            { "number": "01", "title": "Confidence & Self-Worth", "description": "Rebuild the belief that you are capable, valuable, and worthy of leading your own life, no matter where you''ve been." },
            { "number": "02", "title": "Communication Skills", "description": "Learn to advocate for yourself, set boundaries, and speak with confidence in interviews, meetings, and relationships." },
            { "number": "03", "title": "Goal Setting & Planning", "description": "Create a personal roadmap for your future, whether that''s education, career, housing, or rebuilding your family." },
            { "number": "04", "title": "Financial Literacy", "description": "Gain practical skills around budgeting, saving, and building financial independence one step at a time." },
            { "number": "05", "title": "Mentoring & Community", "description": "Connect with women who have walked this road before you. Real mentorship from people who understand your journey." },
            { "number": "06", "title": "Leadership Development", "description": "Discover the leader inside you. Whether it''s leading a team, a household, or a community initiative, you''re ready." }
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
