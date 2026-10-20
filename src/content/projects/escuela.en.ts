import type { CaseStudyContent } from "../types";

export const escuelaCaseEn: CaseStudyContent = {
  slug: "escuela-hosteleria",
  documentTitle: "Escuela de Hostelería — Sara",
  hero: {
    eyebrow: "CASE STUDY · PRODUCT DESIGN · UI SYSTEM",
    title: "Escuela de Hostelería",
    subtitle: "Design so the product can keep working when you are no longer there.",
    lead: "An institutional project where the challenge wasn't only building a website, but leaving a system that is understandable, implementable, and transferable between vendors.",
    skills:
      "Product Design · UI System · Accessibility · Design-to-Dev · Stakeholder Management · Documentation",
    meta: [
      { label: "Context", value: "Public training service for the Comunidad de Madrid" },
      { label: "Year", value: "2025" },
      { label: "My role", value: "Design + coordination" },
      { label: "Challenge", value: "Continuity and transfer" },
    ],
    artLabel: "COMPOSITION / HERO",
    artTitle: "Escuela",
    artHint: "2–3 screens from the original design + component system detail",
    heroMedia: {
      id: "hero",
      src: "/images/projects/escuela-hosteleria/landing.png",
      caption: "Escuela de Hostelería mobile mockup: career jump, courses, and contact form",
    },
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXT",
      title: "A product that had to survive the tender",
      paragraphs: [
        "The project came through Aspasia, the service contractor, which needed to outsource design and build of the platform. That created a long chain of stakeholders between direct client, administration, internal team, and IT.",
        "The most important constraint was less visible: the solution had to be delivered turnkey and keep working when the contract ended—even if the next vendor was someone else. Designing well also meant making the product transferable.",
      ],
      media: [
        {
          id: "context",
          src: "/images/projects/escuela-hosteleria/web_publish.png",
          caption: "Discrete capture of the published platform",
        },
      ],
    },
    {
      id: "role",
      eyebrow: "MY ROLE",
      title: "Translating between design, client, and IT",
      tone: "soft",
      paragraphs: [
        "I led dialogue between stakeholders and turned technical, security, and infrastructure constraints into decisions the client could understand and approve. At the same time, I translated product and communication needs to development with enough precision to avoid unnecessary interpretation. The whole product was designed and documented in Figma as the single source of truth for client and development.",
        "In an institutional setting, much senior work happens between screens: managing dependencies, closing decisions, and keeping a shared view when each stakeholder speaks a different language. Final delivery was closed in the file itself: components, rules, behaviors, and documentation prepared for transfer.",
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISION 01",
      title: "Creating identity where there was barely a system",
      paragraphs: [
        "The visual starting point was minimal. From the logo and scattered references I built a distinct language to differentiate the Escuela from other training services without breaking from the institutional context.",
        "The goal wasn't a loud brand—it was enough personality and consistency for web and communication to work as parts of the same service.",
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISION 02",
      title: "Accessibility as a product requirement",
      tone: "dark",
      paragraphs: [
        "As a public service, accessibility was part of product requirements from the start. I didn't treat it as a final review but as a cross-cutting layer shaping visual, interaction, and content decisions. I worked contrast and legibility, semantic and visual hierarchy, and focus and interaction states.",
        "I also addressed understandable forms and non-text content prepared for alternatives like alt text. These criteria were carried into handoff so development could maintain them during implementation.",
      ],
      media: [
        {
          id: "decision-02",
          src: "/images/projects/escuela-hosteleria/pruebas-de-contraste.png",
          caption: "Visual documentation · contrast",
        },
      ],
    },
    {
      id: "decision-03",
      eyebrow: "DECISION 03",
      title: "A small UI kit, ready to reuse",
      tone: "soft",
      paragraphs: [
        "Budget didn't justify a large Design System, so I worked a reduced kit around the pieces we actually needed. The priority was components that were consistent, reusable, and clear enough for development and communication.",
        "That scope is part of the decision: systematize where it adds value, without over-designing infrastructure the project didn't need. The kit was built in Figma with variants, properties, and states meant for reuse and handoff.",
        "So the system wouldn't die at delivery, I also left a minimal operating model: who decides, how a change enters, which gates to pass, and how versioning works in Figma.",
      ],
    },
    {
      id: "decision-04",
      eyebrow: "DECISION 04",
      title: "Designing handoff for the next vendor",
      paragraphs: [
        "Documentation had an unusual goal: not only help the team building at the time, but let another company take over the service later. So handoff had to explain structure, usage, and behavior clearly.",
        "The whole product was built and documented in Figma: foundations, components, variants, properties, states, responsive behavior, and functional notes. The file was delivered closed as single source of truth and transferable documentation for the next vendor.",
      ],
      media: [
        {
          id: "decision-04",
          src: "/images/projects/escuela-hosteleria/Button.png",
          caption: "Button component documentation",
          scroll: "vertical",
          cursorHint: "scroll",
        },
      ],
    },
    {
      id: "restricciones",
      eyebrow: "CONSTRAINTS",
      title: "Designing within real constraints",
      tone: "soft",
      paragraphs: [
        "Security, institutional infrastructure, budget, and scope limited many decisions. Instead of hiding those constraints, the project forced prioritization: what to systematize, what to document, and where to invest effort so the solution could be implemented and maintained.",
        "The live implementation has evolved after delivery and doesn't fully represent the original visual system. In the portfolio I show mainly the design and delivered artifacts, using the published platform as evidence the service reached production.",
      ],
    },
  ],
  closing: {
    eyebrow: "CLOSING",
    title: "What this project shows",
    skills: [
      "Stakeholder management",
      "Design-to-dev",
      "UI systems",
      "Accessibility",
      "Figma documentation",
      "Institutional constraints",
      "Handoff",
      "Operational continuity",
    ],
    text: "This project shows a less flashy but very real side of senior design: build enough system for design, development, and client to align; integrate accessibility from design; and leave a documented, transferable Figma delivery so the product keeps working when people and vendors change.",
  },
};
