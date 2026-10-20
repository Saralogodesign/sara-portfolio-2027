/* ============================================================
   CONTENIDO DEL SITIO — ES / EN
   ============================================================ */

import type { Locale } from "../i18n/types";

const shared = {
  brand: "SARA",
  url: "https://portfolio-sara-2026.vercel.app",
  ogImage: "/og.svg",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    medium: "https://medium.com/",
    emailAddress: "sara.lg.design@gmail.com",
    cv: "/cv/Sara_Lopez_Gomez_CV_2026.pdf",
  },
} as const;

const siteEs = {
  ...shared,
  title: "Sara — Product Designer · Product Engineer",
  description:
    "Portfolio de Sara: product design y product engineering. Diseño, orquesto y ejecuto.",
  links: {
    ...shared.links,
    email: "mailto:sara.lg.design@gmail.com?subject=Hola%20Sara",
  },
  nav: [
    { href: "#work", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#lab", label: "Laboratorio" },
  ],
  hero: {
    title: "Designer",
    roles: ["PRODUCT", "ENGINEER"] as const,
    copy: "Diseño, orquesto y ejecuto.",
    scrollLabel: "scroll",
  },
  work: {
    title: "SelectedWork_",
    subtitle: "// Una selección de proyectos recientes",
    cta: "Ver proyecto →",
  },
  about: {
    title: "AboutMe_",
    subtitle: "// La persona detrás del portfolio",
    lead: "Diseño productos digitales combinando estrategia, criterio visual y design systems, con la IA como aliada del proceso.\n\nMás claridad.\nMejor experiencia.",
    portraitLabel: "Coloca aquí\ntu fotografía",
    portraitSrc: "/images/home/portrait.png",
    note: "Curiosa por naturaleza.\nCreativa y sistemática.\nSiempre aprendiendo.",
  },
  lab: {
    title: "Playground_",
    subtitle: "// Experimentos, pruebas y cosas que hago por curiosidad",
    items: ["TYPE\nSTUDIES", "AI +\nDESIGN", "COLOR\nSYSTEMS", "MOTION\nTESTS"],
  },
  footer: {
    title: "¡Hablemos!",
    titleHover: "Escríbeme.",
    copyright: "© 2026 Sara — Product Designer Engineer",
    location: "Madrid",
  },
  caseFooter: {
    copyright: "© 2026 Sara — Product Designer Engineer",
    contactLabel: "Hablemos →",
    contactHref: "mailto:sara.lg.design@gmail.com?subject=Hola%20Sara",
    backLabel: "← Todos los proyectos",
    backHref: "/#work",
  },
} as const;

const siteEn = {
  ...shared,
  title: "Sara — Product Designer · Product Engineer",
  description:
    "Sara’s portfolio: product design and product engineering. I design, orchestrate, and ship.",
  links: {
    ...shared.links,
    email: "mailto:sara.lg.design@gmail.com?subject=Hi%20Sara",
  },
  nav: [
    { href: "#work", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#lab", label: "Lab" },
  ],
  hero: {
    title: "Designer",
    roles: ["PRODUCT", "ENGINEER"] as const,
    copy: "I design, orchestrate, and ship.",
    scrollLabel: "scroll",
  },
  work: {
    title: "SelectedWork_",
    subtitle: "// A selection of recent projects",
    cta: "View project →",
  },
  about: {
    title: "AboutMe_",
    subtitle: "// The person behind the portfolio",
    lead: "I design digital products combining strategy, visual judgment, and design systems, with AI as a process ally.\n\nMore clarity.\nBetter experience.",
    portraitLabel: "Place your\nphoto here",
    portraitSrc: "/images/home/portrait.png",
    note: "Curious by nature.\nCreative and systematic.\nAlways learning.",
  },
  lab: {
    title: "Playground_",
    subtitle: "// Experiments, tests, and things I make out of curiosity",
    items: ["TYPE\nSTUDIES", "AI +\nDESIGN", "COLOR\nSYSTEMS", "MOTION\nTESTS"],
  },
  footer: {
    title: "Let’s talk!",
    titleHover: "Email me.",
    copyright: "© 2026 Sara — Product Designer Engineer",
    location: "Madrid",
  },
  caseFooter: {
    copyright: "© 2026 Sara — Product Designer Engineer",
    contactLabel: "Let’s talk →",
    contactHref: "mailto:sara.lg.design@gmail.com?subject=Hi%20Sara",
    backLabel: "← All projects",
    backHref: "/#work",
  },
} as const;

export type SiteContent = typeof siteEs;

export function getSite(locale: Locale): SiteContent {
  return (locale === "en" ? siteEn : siteEs) as SiteContent;
}

/** Default Spanish export for any remaining static imports */
export const site = siteEs;
