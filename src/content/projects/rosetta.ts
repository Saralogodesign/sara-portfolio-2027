import type { CaseStudyContent } from "../types";

export const rosettaCase: CaseStudyContent = {
  slug: "rosetta",
  documentTitle: "Rosetta — Sara",
  hero: {
    eyebrow: "CASE STUDY · DESIGN SYSTEM PLATFORM",
    title: "Rosetta",
    subtitle: "Convertir un proyecto en un sistema de trabajo compartido, transparente y replicable.",
    skills:
      "Product Design · Design Systems · AI Orchestration · Design Engineering · Stakeholder Experience",
    meta: [
      { label: "Fecha", value: "01 · 2026" },
      { label: "Estado", value: "En proceso" },
      { label: "Mi papel", value: "Concepto, diseño y construcción" },
      { label: "Stack / flujo", value: "Figma · MCP/API · IA · Supabase · Vercel" },
    ],
    artLabel: "MOCKUP / HERO",
    artTitle: "Rosetta",
    artHint: "Dashboard o Storybook real · una imagen protagonista",
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXTO",
      title: "El problema no eran los componentes. Era el contexto.",
      paragraphs: [
        "Rosetta nace durante la segunda fase de Conecta. El producto crecía, había más actores implicados y la conversación se repartía entre prototipos, mensajes y herramientas distintas. Para quienes no trabajan a diario en producto, seguir decisiones, dependencias y evolución empezaba a convertirse en un teléfono escacharrado.",
        "Vi una oportunidad: reunir producto, seguimiento y conversación en un mismo entorno. No solo para trabajar mejor, sino para que cliente y stakeholders pudieran ver cómo evoluciona realmente un producto digital, sin trampa ni cartón.",
      ],
      media: [
        {
          id: "context-01",
          src: "/images/projects/rosetta/RDS_03.png",
          caption: "Login del portal · distinción de roles",
        },
        {
          id: "context-02",
          src: "/images/projects/rosetta/img-chat-mockup-3.png",
          caption: "Chat de comunicación interna entre stakeholders",
        },
      ],
    },
    {
      id: "role",
      eyebrow: "ROL",
      title: "Mi papel: de la idea al piloto funcional",
      tone: "soft",
      paragraphs: [
        "Rosetta no fue un encargo. Detecté el problema, planteé la solución y asumí el riesgo de probarla dentro de un proyecto real con cliente. Diseñé la plataforma y construí el flujo completo apoyándome en IA: desde Figma y los componentes hasta Storybook, dashboard, base de datos en Supabase y publicación en Vercel.",
        "No soy desarrolladora tradicional: mi aportación estuvo en diseñar el sistema, conectar herramientas mediante MCPs y APIs y dirigir iterativamente la implementación hasta convertir la hipótesis en un producto funcional.",
      ],
    },
    {
      id: "ai",
      eyebrow: "IA",
      title: "IA como capa de orquestación",
      tone: "soft",
      paragraphs: [
        "La IA no fue un añadido al final del proceso. Fue la capa que me permitió prototipar una solución que, de otra manera, habría requerido perfiles y tiempos distintos. Utilicé agentes para conectar diseño, implementación y datos, iterando sobre el resultado hasta conseguir un flujo operativo.",
        "Lo relevante para mí no era «generar código», sino comprobar hasta dónde podía llevar una diseñadora un sistema cuando entiende las reglas, define bien los límites y sabe orquestar las herramientas.",
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISIÓN 01",
      title: "Abrir el proceso",
      tone: "dark",
      paragraphs: [
        "Centralizar el trabajo implicaba algo más incómodo que cambiar de herramienta: hacer visible el proceso. Decisiones, avances, bloqueos y complejidad quedaban expuestos al cliente en tiempo casi real.",
        "Elegí esa transparencia a propósito. El objetivo era reducir intermediación y, al mismo tiempo, poner en valor el trabajo que hay detrás de un producto digital sólido. Para mí fue un salto al vacío: abrir el libro de par en par y confiar en el proceso.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/rosetta/RDS_02.png",
          caption: "Dashboard real con estados · conversación contextual sobre una tarea/componente",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISIÓN 02",
      title: "Diseñar para el siguiente proyecto",
      tone: "cream",
      paragraphs: [
        "La segunda fase de Conecta daba margen para pensar más allá de la entrega inmediata. Rosetta se planteó como piloto: si funcionaba, el mismo modelo podía reutilizarse con nuevos clientes y proyectos sin reconstruir cada vez la forma de colaborar.",
        "Eso cambió la pregunta de «¿cómo organizamos Conecta?» a «¿qué sistema necesitamos para que esta forma de trabajar sea replicable?». La plataforma pasó de resolver una fricción puntual a explorar una infraestructura interna reutilizable.",
      ],
    },
    {
      id: "design-system",
      eyebrow: "DESIGN SYSTEM",
      title: "Un Design System pensado para implementarse",
      tone: "soft",
      paragraphs: [
        "Rosetta también contiene un Design System reducido, pero con una condición importante: no debía quedarse en Figma. Foundations y componentes se documentaron en Storybook y se prepararon como paquetes NPM para que desarrollo pudiera consumirlos directamente.",
        "El objetivo era acercar diseño e implementación y reducir divergencias desde el origen. Menos reinterpretación en el handoff, más consistencia y menos deuda técnica acumulada a medida que el producto crece.",
      ],
      media: [
        {
          id: "design-system",
          src: "/images/projects/rosetta/Button-npm-2.png",
          caption: "Storybook real de un componente + documentación o referencia al paquete NPM",
          scroll: "vertical",
          cursorHint: "scroll",
        },
      ],
    },
    {
      id: "resultado",
      eyebrow: "RESULTADO",
      title: "Un sistema para hacer visible el producto",
      tone: "cream",
      paragraphs: [
        "Rosetta convirtió una necesidad de comunicación de Conecta en un piloto funcional para centralizar seguimiento, Design System, conversación e implementación. Además de servir al proyecto, abrió la posibilidad de reutilizar el mismo modelo de trabajo con otros clientes.",
        "No lo planteo como una plataforma cerrada ni como una solución ya validada a escala. Su valor está precisamente en el experimento: detectar una fricción real, asumir el riesgo, construir una respuesta funcional y convertirla en una hipótesis replicable.",
      ],
      media: [
        {
          id: "resultado",
          src: "/images/projects/rosetta/RDS_01.png",
          caption: "Vista más completa o madura de Rosetta · cierre a sangre",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CIERRE",
    title: "Qué demuestra este proyecto",
    skills: [
      "Systems thinking",
      "Design Systems",
      "AI orchestration",
      "Design Engineering",
      "Ownership",
      "Experimentación",
      "Gobernanza",
      "Visión de producto",
    ],
    text: "Rosetta resume una parte muy concreta de mi forma de trabajar: no quedarme en la entrega, detectar dónde se rompe el sistema y construir una forma mejor de conectar producto, personas y tecnología.",
  },
};
