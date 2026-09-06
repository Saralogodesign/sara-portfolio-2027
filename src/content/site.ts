/* ============================================================
   CONTENIDO DEL SITIO — links, hero, about, lab, footer
   Edita aquí textos y URLs globales (no los case studies).
   ============================================================ */

export const site = {
  brand: "SARA",
  /** CAMBIAR AQUÍ: dominio canónico al publicar (OG, sitemap, JSON-LD) */
  url: "https://sara-portfolio-2027.vercel.app",
  title: "Sara — Product Designer · Product Engineer",
  description:
    "Portfolio de Sara: product design y product engineering. Diseño, orquesto y ejecuto.",
  ogImage: "/og.svg",
  links: {
    // CAMBIAR AQUÍ: redes y contacto
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    medium: "https://medium.com/",
    email: "mailto:sara.lg.design@gmail.com?subject=Hola%20Sara",
    emailAddress: "sara.lg.design@gmail.com",
    cv: "#",
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
    lead: "Soy Sara, diseñadora de producto. Me gusta convertir preguntas difíciles en experiencias sencillas, útiles y bonitas.",
    portraitLabel: "Coloca aquí\ntu fotografía",
    /** Ruta: /images/home/portrait.jpg — vacío = placeholder */
    portraitSrc: "",
    note: "Curiosa por naturaleza.\nSistemática por elección.\nSiempre aprendiendo.",
  },
  lab: {
    title: "Playground_",
    subtitle: "// Experimentos, pruebas y cosas que hago por curiosidad",
    items: ["TYPE\nSTUDIES", "AI +\nDESIGN", "COLOR\nSYSTEMS", "MOTION\nTESTS"],
  },
  footer: {
    title: "¡Hablemos!",
    titleHover: "Escríbeme.",
    copyright: "© 2026 Sara — Product Designer",
    location: "Madrid",
  },
  caseFooter: {
    copyright: "© 2026 Sara — Product Designer",
    contactLabel: "Hablemos →",
    contactHref: "mailto:sara.lg.design@gmail.com?subject=Hola%20Sara",
    backLabel: "← Todos los proyectos",
    backHref: "/#work",
  },
} as const;
