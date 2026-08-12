/* ============================================================
   CONTENIDO DEL SITIO — links, hero, about, lab, footer
   Edita aquí textos y URLs globales (no los case studies).
   ============================================================ */

export const site = {
  brand: "SARA",
  links: {
    // CAMBIAR AQUÍ: redes y contacto
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    medium: "https://medium.com/",
    email: "mailto:hola@sara.design",
    cv: "#",
  },
  nav: [
    { href: "#work", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#lab", label: "Laboratorio" },
  ],
  hero: {
    title: "Designer",
    roles: ["Product", "Engineer"] as const,
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
    title: "Hablemos!",
    copyright: "© 2027 Sara — Product Designer",
    location: "Hecho con cariño en Barcelona",
  },
  caseFooter: {
    copyright: "© 2027 Sara — Product Designer",
    contactLabel: "Hablemos →",
    contactHref: "/#contact",
    backLabel: "← Todos los proyectos",
    backHref: "/#work",
  },
} as const;
