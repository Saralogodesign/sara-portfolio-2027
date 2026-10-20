import type { CaseStudyContent } from "../types";

export const rosettaCaseEn: CaseStudyContent = {
  slug: "rosetta",
  documentTitle: "Rosetta — Sara",
  hero: {
    eyebrow: "CASE STUDY · DESIGN SYSTEM PLATFORM",
    title: "Rosetta",
    subtitle: "Turn a project into a shared, transparent, and reusable way of working.",
    skills:
      "Product Design · Design Systems · AI Orchestration · Design Engineering · Stakeholder Experience",
    meta: [
      { label: "Date", value: "01 · 2026" },
      { label: "Status", value: "In progress" },
      { label: "My role", value: "Concept, design, and build" },
      { label: "Stack / workflow", value: "Figma · MCP/API · AI · Supabase · Vercel" },
    ],
    artLabel: "MOCKUP / HERO",
    artTitle: "Rosetta",
    artHint: "Real dashboard or Storybook · one hero image",
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXT",
      title: "The problem wasn't the components. It was the context.",
      paragraphs: [
        "Rosetta emerged during the second phase of Conecta. The product was growing, more stakeholders were involved, and the conversation spread across prototypes, messages, and different tools. For people who don't work in product day to day, following decisions, dependencies, and progress started to feel like a game of broken telephone.",
        "I saw an opportunity: bring product, tracking, and conversation into one environment. Not only to work better, but so the client and stakeholders could see how a digital product actually evolves—no smoke and mirrors.",
      ],
      media: [
        {
          id: "context-01",
          src: "/images/projects/rosetta/RDS_03.png",
          caption: "Portal login · role distinction",
        },
        {
          id: "context-02",
          src: "/images/projects/rosetta/img-chat-mockup-3.png",
          caption: "Internal communication chat between stakeholders",
        },
      ],
    },
    {
      id: "role",
      eyebrow: "ROLE",
      title: "My role: from idea to working pilot",
      tone: "soft",
      paragraphs: [
        "Rosetta wasn't a brief. I spotted the problem, proposed the solution, and took the risk of testing it inside a real client project. I designed the platform and built the full flow with AI: from Figma and components through Storybook, dashboard, Supabase database, and deployment on Vercel.",
        "I'm not a traditional developer—my contribution was designing the system, connecting tools via MCPs and APIs, and iteratively directing implementation until the hypothesis became a working product.",
      ],
    },
    {
      id: "ai",
      eyebrow: "AI",
      title: "AI as an orchestration layer",
      tone: "soft",
      paragraphs: [
        "AI wasn't bolted on at the end. It was the layer that let me prototype a solution that would otherwise have needed different roles and timelines. I used agents to connect design, implementation, and data, iterating on the output until the flow was operational.",
        "What mattered to me wasn't \"generating code\"—it was testing how far a designer could take a system when she understands the rules, defines clear boundaries, and knows how to orchestrate the tools.",
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISION 01",
      title: "Opening up the process",
      tone: "dark",
      paragraphs: [
        "Centralizing the work meant something more uncomfortable than switching tools: making the process visible. Decisions, progress, blockers, and complexity were exposed to the client in near real time. I chose that transparency on purpose.",
        "The goal was to reduce intermediation while showing the work behind a solid digital product. For me it was a leap of faith: open the book wide and trust the process.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/rosetta/RDS_02.png",
          caption: "Real dashboard with statuses · contextual conversation on a task/component",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISION 02",
      title: "Designing for the next project",
      tone: "cream",
      paragraphs: [
        "The second phase of Conecta left room to think beyond the immediate delivery. Rosetta was framed as a pilot: if it worked, the same model could be reused with new clients and projects without rebuilding how we collaborate each time.",
        "That shifted the question from \"how do we organize Conecta?\" to \"what system do we need so this way of working is reusable?\" The platform went from solving a one-off friction to exploring reusable internal infrastructure.",
      ],
    },
    {
      id: "design-system",
      eyebrow: "DESIGN SYSTEM",
      title: "A Design System built to be implemented",
      tone: "soft",
      paragraphs: [
        "Rosetta also includes a lean Design System, with one important condition: it couldn't stay in Figma. Foundations and components were documented in Storybook and packaged as NPM modules so development could consume them directly.",
        "The aim was to bring design and implementation closer and reduce drift from the start. Less reinterpretation at handoff, more consistency, and less technical debt as the product grows.",
      ],
      media: [
        {
          id: "design-system",
          src: "/images/projects/rosetta/Button-npm-2.png",
          caption: "Real Storybook for a component + documentation or NPM package reference",
          scroll: "vertical",
          cursorHint: "scroll",
        },
      ],
    },
    {
      id: "resultado",
      eyebrow: "OUTCOME",
      title: "A system to make the product visible",
      tone: "cream",
      paragraphs: [
        "Rosetta turned a Conecta communication need into a working pilot to centralize tracking, Design System, conversation, and implementation. Beyond serving the project, it opened the possibility of reusing the same working model with other clients.",
        "I don't present it as a finished platform or a solution validated at scale. Its value is precisely in the experiment: spot a real friction, take the risk, build a working response, and turn it into a reusable hypothesis.",
      ],
      media: [
        {
          id: "resultado",
          src: "/images/projects/rosetta/RDS_01.png",
          caption: "Rosetta onboarding",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CLOSING",
    title: "What this project shows",
    skills: [
      "Systems thinking",
      "Design Systems",
      "AI orchestration",
      "Design Engineering",
      "Ownership",
      "Experimentation",
      "Governance",
      "Product vision",
    ],
    text: "Rosetta captures a very specific part of how I work: not stopping at delivery, spotting where the system breaks, and building a better way to connect product, people, and technology.",
  },
};
