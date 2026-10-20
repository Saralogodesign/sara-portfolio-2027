import type { CaseStudyContent } from "../types";

export const violetaCaseEn: CaseStudyContent = {
  slug: "violeta",
  documentTitle: "Violeta — Sara",
  hero: {
    eyebrow: "CASE STUDY · RESEARCH · PRODUCT STRATEGY",
    title: "Violeta",
    subtitle: "From a complex social problem to a viable product strategy.",
    skills: "Research · Product Strategy · Branding · Business Design · AI",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Context", value: "Bootcamp project" },
      { label: "My focus", value: "Research, insights, branding, and business" },
      { label: "Outcome", value: "INCIBE × IMMUNE grant" },
    ],
    artLabel: "PHOTOGRAPHY / HERO",
    artTitle: "Violeta",
    artHint: "Identity or full-scale screen · enter through the visual universe",
    heroMedia: {
      id: "hero",
      src: "/images/projects/violeta/resultado.mp4",
      caption: "Violeta onboarding: a safe space, made by and for women",
    },
  },
  sections: [
    {
      id: "reto",
      eyebrow: "THE CHALLENGE",
      title: "When the problem starts before reporting",
      paragraphs: [
        "Violeta grew out of research on digital violence: cyberbullying, deepfakes, and other forms of online aggression with a strong gender bias. The team started from close experiences and a clear gap between suffering an attack, recognizing it as reportable, and knowing what to do next.",
        "Research led us to a key tension: many women feel vulnerable or unprotected, but the reporting process feels complex and distant. The product problem wasn't only informing—it was reducing friction, building trust, and supporting people in a high-stress moment.",
      ],
      media: [
        {
          id: "reto",
          src: "/images/projects/violeta/reto.png",
          caption: "User verbatim · focus group",
        },
        {
          id: "research",
          src: "/images/projects/violeta/research.png",
          caption: "Expert verbatim · Marta López Pardal",
        },
      ],
    },
    {
      id: "research",
      eyebrow: "RESEARCH",
      title: "Finding the right problem",
      tone: "dark",
      paragraphs: [
        "We worked with focus groups, surveys, and expert interviews to understand both user experience and technical and legal reality. I was especially involved in research, interviews, and insight synthesis, including conversations with cybersecurity and ethical hacking profiles.",
        "Before asking a woman to report, we need to help her identify what she's experiencing, understand her options, and regain a sense of control.",
      ],
      media: [
        {
          id: "research-focusgroup",
          src: "/images/projects/violeta/research-focusgroup.png",
          caption: "Focus group · Expert interviews — Marta López, ethical hacker",
        },
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISION 01",
      title: "Design trust before features",
      paragraphs: [
        "The solution was framed as a support platform backed by AI. Each case had to be handled in a personalized way, with adapted language, immediacy, and reliable sources. AI wasn't the headline—it was the mechanism to organize complex information and make it more accessible in a sensitive situation.",
        "That logic became concrete decisions: remove login to protect anonymity, explain from onboarding who feeds the system, add voice to make expression easier, and help prepare a draft report to reduce process friction.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/violeta/decision-01.png",
          caption: "Onboarding · chat · draft report",
          zoom: {
            src: "/images/projects/violeta/decision-01-zoom.png",
            left: "63%",
            top: "16%",
            size: "32%",
            focus: "50% 50%",
            magnify: "fill",
          },
        },
      ],
    },
    {
      id: "branding",
      eyebrow: "BRANDING",
      title: "Identity as part of the experience",
      tone: "soft",
      paragraphs: [
        "In Violeta, identity couldn't be decorative. It had to address a hard topic without building a clinical, institutional, or patronizing experience. I developed much of the branding to find a language with character—close and recognizable—able to convey safety without erasing the energy of someone regaining control.",
        "The system combines a high-presence typeface, editorial resources, human photography, and a violet, lilac, and pink palette.",
      ],
      media: [
        {
          id: "branding",
          src: "/images/projects/violeta/branding.png",
          caption: "Logo, communication, and visual system",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISION 02",
      title: "Give the product a path forward",
      paragraphs: [
        "Even though the user layer had to be free, an impact project needs a model to sustain it. My contribution was developing business lines and a business plan to think about Violeta beyond the academic exercise: aggregated data analysis, monetizing know-how, specialized training, and other complementary paths.",
        "I also proposed a progressive roadmap: first validate a lightweight solution—web and conversational assistant trained on specialized documentation—then evolve toward a fuller product and, finally, a native app. The idea was to learn before assuming the cost of building everything.",
      ],
      media: [
        {
          id: "decision-02",
          src: "/images/projects/violeta/decision-02.png",
          caption: "Roadmap · from MVP to scale",
        },
      ],
    },
    {
      id: "resultado",
      eyebrow: "OUTCOME",
      title: "From bootcamp project to project with runway",
      tone: "soft",
      paragraphs: [
        "The research, product, and viability work turned Violeta into more than a prototype. The project received an INCIBE and IMMUNE grant that let the team continue through a three-month specialization program and work on professionalization.",
        "For me, the value is connecting three layers usually taught separately: understanding a complex social problem, building an identity that earns trust, and designing a product and business strategy with staying power.",
      ],
      media: [
        {
          id: "resultado",
          src: "/images/projects/violeta/CIBERTalent.jpg",
          caption: "Presentation · INCIBE incubator — Cyber Talent",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CLOSING",
    title: "What this project shows",
    skills: [
      "Research",
      "Insight synthesis",
      "Product strategy",
      "Branding",
      "Business design",
      "Roadmapping",
      "AI product thinking",
      "Working with experts",
    ],
    text: "Violeta shows a side of my profile less about \"drawing screens\" and more about direction: researching, synthesizing, building a brand narrative, and finding a viable path from idea to product.",
  },
};
