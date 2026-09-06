import type { CaseStudyContent } from "../types";

export const violetaCase: CaseStudyContent = {
  slug: "violeta",
  documentTitle: "Violeta — Sara",
  hero: {
    eyebrow: "CASE STUDY · RESEARCH · PRODUCT STRATEGY",
    title: "Violeta",
    subtitle: "De un problema social complejo a una estrategia de producto viable.",
    skills: "Research · Product Strategy · Branding · Business Design · AI",
    meta: [
      { label: "Año", value: "2024" },
      { label: "Contexto", value: "Proyecto de bootcamp" },
      { label: "Mi foco", value: "Research, insights, branding y business" },
      { label: "Resultado", value: "Beca INCIBE × IMMUNE" },
    ],
    artLabel: "FOTOGRAFÍA / HERO",
    artTitle: "Violeta",
    artHint: "Identidad o pantalla a gran escala · entrar por el universo visual",
    heroMedia: {
      id: "hero",
      src: "/images/projects/violeta/hero.png",
      caption: "Onboarding de Violeta: un espacio seguro, hecho por y para las mujeres",
    },
  },
  sections: [
    {
      id: "reto",
      eyebrow: "EL RETO",
      title: "Cuando el problema empieza antes de denunciar",
      paragraphs: [
        "Violeta nace de una investigación sobre violencia digital: ciberacoso, deepfakes y otras formas de agresión online con un fuerte sesgo de género. El equipo partió de experiencias cercanas y de una brecha evidente entre sufrir una agresión, reconocerla como denunciable y saber qué hacer después.",
        "La investigación nos llevó a una tensión clave: muchas mujeres se sienten vulnerables o desprotegidas, pero el proceso de denuncia se percibe complejo y lejano. El problema de producto no era solo informar; era reducir fricción, generar confianza y acompañar en un momento de alto estrés.",
      ],
      media: [
        {
          id: "reto",
          src: "/images/projects/violeta/reto.png",
          caption: "Verbatim usuaria · focus group",
        },
        {
          id: "research",
          src: "/images/projects/violeta/research.png",
          caption: "Verbatim experta · Marta López Pardal",
        },
      ],
    },
    {
      id: "research",
      eyebrow: "RESEARCH",
      title: "Encontrar el problema correcto",
      tone: "soft",
      paragraphs: [
        "Trabajamos con focus groups, encuestas y entrevistas a expertas para entender tanto la experiencia de las usuarias como la realidad técnica y legal. En mi caso, estuve especialmente implicada en research, entrevistas y síntesis de insights, incluyendo conversaciones con perfiles de ciberseguridad y hacking ético.",
        "Antes de pedir a una mujer que denuncie, hay que ayudarla a identificar lo que está viviendo, entender sus opciones y recuperar sensación de control.",
      ],
      media: [
        {
          id: "research-focusgroup",
          src: "/images/projects/violeta/research-focusgroup.png",
          caption: "Focus group · entrevistas",
        },
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISIÓN 01",
      title: "Diseñar confianza antes que funcionalidades",
      paragraphs: [
        "La solución se planteó como una plataforma de acompañamiento apoyada por IA. Cada caso debía abordarse de forma personalizada, con lenguaje adaptado, inmediatez y fuentes fiables. La IA no era el reclamo: era el mecanismo para ordenar información compleja y hacerla más accesible en una situación sensible.",
        "Esa lógica bajó a decisiones concretas: eliminar el login para proteger el anonimato, explicar desde el onboarding quién alimenta el sistema, incorporar voz para facilitar la expresión y ayudar a preparar un borrador de denuncia para reducir la fricción del proceso.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/violeta/decision-01.png",
          caption: "Onboarding · chat · borrador de denuncia",
          zoom: {
            src: "/images/projects/violeta/decision-01-zoom.png",
            left: "63%",
            top: "16%",
            size: "32%",
            focus: "50% 50%",
            magnify: "118%",
          },
        },
      ],
    },
    {
      id: "branding",
      eyebrow: "BRANDING",
      title: "La identidad como parte de la experiencia",
      tone: "dark",
      paragraphs: [
        "En Violeta la identidad no podía ser una capa decorativa. Tenía que hablar de un tema duro sin construir una experiencia clínica, institucional o paternalista. Desarrollé gran parte del branding buscando un lenguaje con carácter, cercano y reconocible, capaz de transmitir seguridad sin borrar la energía de quien recupera el control.",
        "El sistema combina una tipografía de alta presencia, recursos editoriales, fotografía humana y una paleta violeta, lila y rosa.",
      ],
      media: [
        {
          id: "branding",
          src: "/images/projects/violeta/branding.png",
          caption: "Logo, comunicación y sistema visual",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISIÓN 02",
      title: "Dar recorrido al producto",
      paragraphs: [
        "Aunque la capa de usuario debía ser gratuita, un proyecto de impacto necesita un modelo que lo sostenga. Mi aportación fue desarrollar líneas de negocio y un Business Plan que permitieran pensar Violeta más allá del ejercicio académico: análisis de datos agregados, monetización del know-how, formación especializada y otras vías complementarias.",
        "También planteé un roadmap progresivo: validar primero una solución ligera, web y asistente conversacional entrenado con documentación especializada, y evolucionar después hacia un producto más completo y, finalmente, una aplicación nativa. La idea era aprender antes de asumir el coste de construirlo todo.",
      ],
      media: [
        {
          id: "decision-02",
          src: "/images/projects/violeta/decision-02.png",
          caption: "Roadmap · de MVP a escalado",
        },
      ],
    },
    {
      id: "resultado",
      eyebrow: "RESULTADO",
      title: "De proyecto de bootcamp a proyecto con recorrido",
      tone: "soft",
      paragraphs: [
        "El trabajo de research, producto y viabilidad convirtió Violeta en algo más que un prototipo. El proyecto obtuvo una beca de INCIBE e IMMUNE que permitió al equipo continuar durante un programa de especialización de tres meses y trabajar en su profesionalización.",
        "Para mí, el valor del proyecto está en haber conectado tres capas que normalmente se enseñan por separado: entender un problema social complejo, construir una identidad capaz de generar confianza y diseñar una estrategia de producto y negocio con recorrido.",
      ],
      media: [
        {
          id: "resultado",
          src: "/images/projects/violeta/cover.png",
          caption: "Producto · onboarding",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CIERRE",
    title: "Qué demuestra este proyecto",
    skills: [
      "Research",
      "Insight synthesis",
      "Product strategy",
      "Branding",
      "Business design",
      "Roadmapping",
      "AI product thinking",
      "Trabajo con expertas",
    ],
    text: "Violeta muestra una parte de mi perfil menos centrada en «pintar pantallas» y más en dar dirección: investigar, sintetizar, construir una narrativa de marca y encontrar una forma viable de llevar una idea hasta producto.",
  },
};
