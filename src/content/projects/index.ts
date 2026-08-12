/* ============================================================
   LISTADO DE PROYECTOS (HOME)
   Orden = orden en la home. Edita year, category, description, image.
   Cover: /images/projects/{slug}/cover.jpg
   ============================================================ */

import type { ProjectCard } from "../types";

export const projects: ProjectCard[] = [
  {
    slug: "rosetta",
    year: "01 · 2026",
    category: "DESIGN SYSTEM · PLATFORM · EN PROCESO",
    title: "Rosetta",
    tone: "blue",
    image: "/images/projects/rosetta/cover.jpg",
    description: "Convertir un proyecto en un sistema de trabajo compartido, transparente y replicable.",
    subtitle: "Convertir un proyecto en un sistema de trabajo compartido, transparente y replicable.",
    role: "Concepto, diseño y construcción",
    duration: "01 · 2026 · en proceso",
    team: "Piloto · Figma · MCP/API · IA · Supabase · Vercel",
    intro: "El problema no eran los componentes. Era el contexto.",
    context:
      "Nace en la segunda fase de Conecta para reunir producto, seguimiento y conversación en un mismo entorno.",
    challenge: "Hacer visible el proceso y convertir la colaboración en una infraestructura replicable.",
    process: ["Detección", "Piloto", "Design System", "Orquestación IA", "Publicación"],
    system: "Foundations → Figma → Storybook → paquete NPM → producto.",
    evolution: [
      { label: "01 · Fricción", text: "Comunicación y contexto dispersos entre herramientas." },
      { label: "02 · Piloto", text: "Plataforma funcional dentro de un proyecto real." },
      { label: "03 · Replicar", text: "Modelo reutilizable para otros clientes y proyectos." },
    ],
    impact: [
      "Piloto funcional de seguimiento, DS, conversación e implementación",
      "Hipótesis replicable para otros proyectos",
      "En proceso: se presenta como experimento en evolución",
    ],
    technical: [
      "Design Systems",
      "AI orchestration",
      "Design Engineering",
      "Figma · MCP/API",
      "Supabase · Vercel",
      "Storybook · NPM",
    ],
  },
  {
    slug: "conecta",
    year: "2025",
    category: "PRODUCT DESIGN · MVP",
    title: "Conecta",
    tone: "navy",
    image: "/images/projects/conecta/cover.jpg",
    description: "De una oportunidad de negocio a un MVP listo para evolucionar.",
    subtitle: "De una oportunidad de negocio a un MVP listo para evolucionar.",
    role: "Lead Product Designer",
    duration: "4 meses · sep–dic 2025",
    team: "Somos Música · ES–PA",
    intro: "Una oportunidad, todavía no un producto.",
    context:
      "Artistas, salas y promotores compartían ecosistema, pero seguían teniendo dificultades para encontrarse.",
    challenge: "Bajar ambigüedad a una propuesta clara, diseñable y entregable en un plazo corto.",
    process: ["Definición", "Flujos / workshops", "UI / sistema", "Handoff / MVP"],
    system: "Brand system dark y design system como infraestructura para el MVP.",
    evolution: [
      { label: "01 · Definición", text: "Bajar la ambigüedad a una propuesta clara." },
      { label: "02 · Flujos", text: "Workshops, onboarding y taxonomía." },
      { label: "03 · Entrega", text: "MVP llave en mano y segunda fase." },
    ],
    impact: [
      "MVP completo y entregado llave en mano",
      "Segunda fase de evolución iniciada",
      "Sin métricas de uso: aún sin lanzamiento público",
    ],
    technical: ["Product Strategy", "UX/UI", "Brand System", "Stakeholder Management", "Design System", "Handoff"],
  },
  {
    slug: "escuela-hosteleria",
    year: "2025",
    category: "PRODUCT DESIGN · UI SYSTEM",
    title: "Escuela de Hostelería y Alimentación",
    tone: "teal",
    image: "/images/projects/escuela-hosteleria/cover.jpg",
    description: "Diseñar para que el producto pueda seguir funcionando cuando tú ya no estás.",
    subtitle: "Diseñar para que el producto pueda seguir funcionando cuando tú ya no estás.",
    role: "Diseño + coordinación",
    duration: "2025 · servicio público · licitación",
    team: "Aspasia · administración · IT",
    intro: "Un producto que tenía que sobrevivir a la licitación.",
    context:
      "Un proyecto institucional donde el reto no fue solo construir una web, sino dejar un sistema entendible, implementable y transferible entre proveedores.",
    challenge:
      "Entregar llave en mano con identidad, accesibilidad, UI kit y documentación en Figma para continuidad operativa.",
    process: ["Stakeholders", "Identidad", "Accessibility", "UI kit", "Handoff"],
    system: "Kit reducido en Figma, accesible y documentado para diseño, desarrollo y futuro proveedor.",
    evolution: [
      { label: "01 · Traducir", text: "Coordinar administración, Aspasia, diseño e IT." },
      { label: "02 · Accesibilidad", text: "Requisito transversal desde el diseño, no revisión final." },
      { label: "03 · Transferir", text: "Figma como fuente única de verdad para el siguiente proveedor." },
    ],
    impact: [
      "Servicio entregado llave en mano y en producción",
      "Accesibilidad integrada en componentes y handoff",
      "Documentación en Figma transferible entre proveedores",
    ],
    technical: [
      "Stakeholder management",
      "Design-to-dev",
      "UI systems",
      "Accessibility",
      "Figma documentation",
      "Handoff",
    ],
  },
  {
    slug: "violeta",
    year: "2024",
    category: "RESEARCH · PRODUCT STRATEGY",
    title: "Violeta",
    tone: "violet",
    image: "/images/projects/violeta/cover.jpg",
    description: "De un problema social complejo a una estrategia de producto viable.",
    subtitle: "De un problema social complejo a una estrategia de producto viable.",
    role: "Research, insights, branding y business",
    duration: "2024 · bootcamp · beca INCIBE × IMMUNE",
    team: "5 personas · Design Thinking",
    intro: "Cuando el problema empieza antes de denunciar.",
    context:
      "Investigación sobre violencia digital: ciberacoso, deepfakes y agresiones online con sesgo de género.",
    challenge:
      "Reducir fricción, generar confianza y acompañar en un momento de alto estrés — no solo informar.",
    process: ["Research", "Insights", "Producto + IA", "Branding", "Business / roadmap"],
    system: "Confianza antes que funcionalidades: anonimato, lenguaje adaptado y agilización del proceso.",
    evolution: [
      { label: "01 · Insight", text: "Identificar, entender opciones y recuperar control." },
      { label: "02 · Producto", text: "Plataforma de acompañamiento con IA." },
      { label: "03 · Recorrido", text: "Business plan y roadmap de madurez." },
    ],
    impact: [
      "Beca INCIBE × IMMUNE para profesionalizar el proyecto",
      "Programa de especialización de tres meses",
      "Modelo viable más allá del ejercicio académico",
    ],
    technical: [
      "Research",
      "Insight synthesis",
      "Product strategy",
      "Branding",
      "Business design",
      "AI product thinking",
    ],
  },
  {
    slug: "cucharita",
    year: "2024",
    category: "PRODUCT CONCEPT · BRAND",
    title: "Cucharita",
    tone: "navy",
    image: "/images/projects/cucharita/cover.jpg",
    description: "Bienestar, intimidad y tecnología desde una lógica slow.",
    subtitle: "Bienestar, intimidad y tecnología desde una lógica slow.",
    role: "Concepto · insights · branding · lanzamiento",
    duration: "2024 · 15 días · Lean UX · MVP",
    team: "Smart mattress + experiencia digital",
    intro: "Una necesidad muy de ahora: bajar revoluciones.",
    context:
      "Estrés, sobreexposición y poco espacio para parar — conectar descanso, contacto e intimidad con bienestar.",
    challenge:
      "Ordenar el concepto alrededor del cortisol y llevar coherencia de insight a producto, marca y go-to-market.",
    process: ["Insight", "Propuesta", "Branding", "Lanzamiento slow", "Landing MVP"],
    system: "Slow life / slow sex: pre-order, producción bajo demanda y universo visual sensorial.",
    evolution: [
      { label: "01 · Cortisol", text: "Eje narrativo que une descanso, contacto y slow sex." },
      { label: "02 · Marca", text: "Tecnología cálida: azul profundo, nude y fotografía analógica." },
      { label: "03 · MVP", text: "Landing para validar interés antes de construir de más." },
    ],
    impact: [
      "Concepto coherente de producto, relato y lanzamiento",
      "Modelo pre-order / no-waste alineado con la filosofía",
      "Landing MVP para test cualitativo de interés",
    ],
    technical: [
      "Concept development",
      "Brand strategy",
      "Visual craft",
      "Lean UX",
      "Go-to-market",
      "Product narrative",
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
