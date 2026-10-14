/* ============================================================
   CONTENIDO DEL SITIO — links, hero, about, lab, footer
   Edita aquí textos y URLs globales (no los case studies).
   ============================================================ */

export const site = {
  brand: "SARA",
  /** CAMBIAR AQUÍ: dominio canónico al publicar (OG, sitemap, JSON-LD) */
  url: "https://portfolio-sara-2026.vercel.app",
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
    cv: "/cv/Sara_Lopez_Gomez_CV_2026.pdf",
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
    lead: "Diseño experiencias y orden: design systems, gobernanza y flujos con IA como aliada.\n\nMenos fricción, más claridad.",
    portraitLabel: "Coloca aquí\ntu fotografía",
    /** Ruta: /images/home/portrait.jpg — vacío = placeholder */
    portraitSrc: "/images/home/portrait.png",
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
