import type { CaseStudyContent } from "../types";

export const productosMadridCaseEn: CaseStudyContent = {
  slug: "productos-madrid",
  documentTitle: "Productos de Madrid — Sara",
  hero: {
    eyebrow: "CASE STUDY · PRODUCT DISCOVERY · IN PROGRESS",
    title: "Productos de Madrid",
    subtitle: "Define what a professional needs to know to find a viable supplier.",
    lead:
      "A project connecting HORECA and Madrid's agri-food sector where design starts by understanding professional purchasing, structuring information, and making maintenance viable.",
    skills:
      "Product Discovery · Deep Research · Information Architecture · Systems Thinking · AI Workflow",
    meta: [
      { label: "Context", value: "Agri-food ecosystem" },
      { label: "Focus", value: "Product + research + systems" },
      { label: "Phase", value: "Discovery 0 to 1" },
      { label: "Status", value: "In progress" },
    ],
    artLabel: "CONNECTOR / HERO",
    artTitle: "Productos de Madrid",
    artHint: "HORECA survey results: offer discard in cheese, columns and bars",
    heroMedia: {
      id: "hero",
      src: "/images/projects/productos-madrid/cover.jpg",
      caption:
        "Training reel · HORECA survey (n = 40): offer discard in cheese, columns and bars",
    },
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXT",
      title: "The challenge of connecting two realities",
      paragraphs: [
        "Showing products is only the beginning. The question is what HORECA needs to evaluate an offer and what information producers and distributors can provide and maintain. Institutional neutrality rules out ranking suppliers. My approach connects research, product definition, and data structure.",
        "The priority is understanding what helps decide before turning it into fields, filters, or features. Product First guides exploration; its fit for each purchasing context still needs validation.",
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISION 01",
      title: "Research need and capacity to respond",
      tone: "soft",
      paragraphs: [
        "Deep Research and benchmarking organized four lines: supply, demand, distribution, and product information. The survey was reframed as one entry per profile, with a four-minute target duration and comparable variables.",
        "The charts below are results we use to explore how the product will behave. Percentages use the 40 sector responses as the denominator.",
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISION 02",
      title: "Separate product from offer",
      paragraphs: [
        "Initial proposal pending validation. Levels indicate information depth and filter scope, not a requirement to complete steps in that order. Product and offer attributes stay separate. Level 2 filters narrow products; level 3 filters narrow offers.",
        "A product only remains after filtering offers if at least one meets all selected criteria at once. That avoids combining one supplier's coverage with another's minimum. The taxonomy needs catalog audit and comprehension testing.",
        "* Price, stock, and lead times don't become filters until they can be compared and maintained.",
        "* Season does not mean current availability.",
      ],
    },
    {
      id: "decision-03",
      eyebrow: "DECISION 03",
      title: "Make the path from research to product traceable",
      tone: "soft",
      paragraphs: [
        "The architecture organizes knowledge states. Each tool has a role and each transformation keeps its source, state, and review. The map represents the intended workflow; it does not prove full automation between applications.",
        "AGENTS.md governs agent rules; Skills run procedures. Notion holds tracking. The order allows iteration: a contradiction sends work back to research. Minutes do not equal a decision.",
      ],
    },
  ],
  closing: {
    eyebrow: "CLOSING",
    title: "What this project shows",
    skills: [
      "Product discovery",
      "Deep research",
      "Information architecture",
      "Systems thinking",
      "AI workflow",
      "Stakeholder alignment",
    ],
    text:
      "Product judgment, research, and systems thinking: connecting user needs with information, operations, and technical constraints. Real outcomes so far: documentary research, research instruments, work architecture, and an initial information model. Still pending: primary research, focus group, category and filter validation, and MVP closure.",
  },
};
