import type { CaseStudyContent } from "../types";

export const conectaCaseEn: CaseStudyContent = {
  slug: "conecta",
  documentTitle: "Conecta — Sara",
  hero: {
    eyebrow: "CASE STUDY · PRODUCT DESIGN",
    title: "Conecta",
    subtitle: "From a business opportunity to an MVP ready to evolve.",
    skills: "Lead Product Designer · Product Strategy · UX/UI · Brand System · Stakeholder Management",
    meta: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Duration", value: "4 months · Sep–Dec" },
      { label: "Type", value: "MVP · music platform" },
      { label: "Status", value: "Delivered · phase 2 started" },
    ],
    artLabel: "MOCKUP / HERO",
    artTitle: "Conecta",
    artHint: "Product in use + interface detail",
    heroMedia: {
      id: "hero",
      src: "/images/projects/conecta/hero.mp4",
      caption: "Conecta product in use",
    },
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXT",
      title: "An opportunity—not yet a product",
      paragraphs: [
        "Somos Música spotted a clear friction in its community: artists, venues, and promoters shared an ecosystem but still struggled to find each other. The opportunity was to turn that need into a free service and build an MVP solid enough to validate the proposition and support fundraising.",
        "I joined when there was no defined product yet—only an idea, several stakeholders, and a short timeline. My job was to turn that ambiguity into a clear, designable, deliverable proposal.",
      ],
    },
    {
      id: "role",
      eyebrow: "ROLE",
      title: "My role: end-to-end ownership",
      tone: "dark",
      paragraphs: [
        "I led product definition, digital branding, core flows, client workshops, Figma project structure, and handoff to development. I also shaped how teams and stakeholders in Spain and Panama collaborated.",
        "More than producing screens, my responsibility was keeping business, experience, brand, and execution decisions aligned to reach a coherent MVP in four months.",
      ],
      media: [
        {
          id: "role",
          src: "/images/projects/conecta/role.png",
          caption: "Work phases",
        },
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISION 01",
      title: "Less friction, more value",
      paragraphs: [
        "The initial approach asked for too much information during signup. It helped segmentation but risked conversion: commitment was requested before users understood what they gained.",
        "I proposed progressive onboarding: first identify whether you're an artist or promoter; then, inside the product, complete the profile step by step. The principle was simple: show value before asking for data.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/conecta/decision-01.png",
          caption: "Signup flow: from email access to profile choice and account created",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISION 02",
      title: "Turn categories into architecture",
      tone: "soft",
      paragraphs: [
        "Search depended on a consistent music taxonomy. Genres, formats, and artist types overlapped, and profile data had to feed search filters later. I facilitated an online FigJam workshop to order categories and spot duplicates.",
        "We defined shared logic between data entry and filtering. It wasn't just designing filters—it was designing the structure that made search work.",
      ],
      media: [
        {
          id: "decision-02",
          src: "/images/projects/conecta/decision-02.png",
          caption: "Categorization and filters workshop",
          cursors: [
            { name: "Sara", color: "#c4244a" },
            { name: "Marta", color: "#0d99ff" },
            { name: "Lucía", color: "#14ae5c" },
            { name: "Álex", color: "#7b61ff" },
          ],
        },
      ],
    },
    {
      id: "identidad",
      eyebrow: "IDENTITY",
      title: "An identity of its own, without breaking from Somos Música",
      paragraphs: [
        "I started from the existing visual universe and reinterpreted it for digital product. The goal was for Conecta to have its own personality and be instantly recognizable as a different tool, while still belonging to the same brand family.",
        "The dark system, visual hierarchy, and multimedia content treatment helped put the artist center stage and make the product's value tangible from the first screens.",
      ],
      mediaLayout: "carousel",
      media: Array.from({ length: 21 }, (_, i) => {
        const n = String(i + 1).padStart(2, "0");
        return {
          id: `origen-${n}`,
          src: `/images/projects/conecta/origen-principios-${n}.jpg`,
          caption: `Conecta guidelines · ${n}`,
        };
      }),
    },
    {
      id: "colaboracion",
      eyebrow: "COLLABORATION",
      title: "Designing collaboration too",
      tone: "dark",
      paragraphs: [
        "With multiple stakeholders and development in another time zone, Figma became the single source of truth: product, decisions, prototypes, workshops, and documentation lived in one place.",
        "That governance reduced scatter and helped client and development understand not only what to build, but why each decision was made.",
      ],
      media: [
        {
          id: "colaboracion",
          src: "/images/projects/conecta/colaboracion.png",
          caption: "Figma as single source of truth",
        },
      ],
    },
    {
      id: "resultado",
      eyebrow: "OUTCOME",
      title: "From fuzzy idea to delivered MVP",
      paragraphs: [
        "Between late September and December, Conecta went from an undefined business opportunity to a complete, turnkey MVP. The client chose to keep it internal for now and continue with a second evolution phase. With no public launch yet, I don't present usage metrics as impact.",
        "The demonstrable outcome is the ability to turn ambiguity, multiple stakeholders, and a tight deadline into a coherent, documented product ready to grow.",
      ],
      media: [
        {
          id: "resultado",
          src: "/images/projects/conecta/resultado.png",
          caption: "MVP: search, filters, favorites, and artist profile",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CLOSING",
    title: "What this project shows",
    skills: [
      "Product thinking",
      "Leadership and ownership",
      "Stakeholder management",
      "Facilitation",
      "Brand systems",
      "UX/UI",
      "Design systems",
      "Handoff to development",
    ],
    text: "Framing poorly defined problems, making deliberate decisions, and building a solid foundation—so business and design move in the same direction.",
  },
};
