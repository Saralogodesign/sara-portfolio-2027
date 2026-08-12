import type { CaseStudyContent } from "../types";

export const escuelaCase: CaseStudyContent = {
  slug: "escuela-hosteleria",
  documentTitle: "Escuela de Hostelería y Alimentación — Sara",
  hero: {
    eyebrow: "CASE STUDY · PRODUCT DESIGN · UI SYSTEM",
    title: "Escuela de Hostelería y Alimentación",
    subtitle: "Diseñar para que el producto pueda seguir funcionando cuando tú ya no estás.",
    lead: "Un proyecto institucional donde el reto no fue solo construir una web, sino dejar un sistema entendible, implementable y transferible entre proveedores.",
    skills:
      "Product Design · UI System · Accessibility · Design-to-Dev · Stakeholder Management · Documentation",
    meta: [
      { label: "Contexto", value: "Servicio público de formación" },
      { label: "Año", value: "2025" },
      { label: "Mi papel", value: "Diseño + coordinación" },
      { label: "Reto", value: "Continuidad y transferencia" },
    ],
    artLabel: "COMPOSICIÓN / HERO",
    artTitle: "Escuela",
    artHint: "2–3 pantallas del diseño original + detalle del sistema de componentes",
    heroNote: "No usar la web actual como hero. La captura de la implementación solo aparece como contexto.",
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXTO",
      title: "Un producto que tenía que sobrevivir a la licitación",
      paragraphs: [
        "El proyecto llegó a través de Aspasia, adjudicataria del servicio, que necesitaba externalizar el diseño y construcción de la plataforma. Eso generaba una cadena larga de interlocución entre cliente directo, administración, equipo interno e IT.",
        "La restricción más importante era menos visible: la solución debía entregarse llave en mano y seguir funcionando cuando terminara la adjudicación, incluso si el siguiente proveedor era otro. Diseñar bien significaba también hacer el producto transferible.",
      ],
      media: [
        {
          id: "context",
          src: "/images/projects/escuela-hosteleria/context.jpg",
          alt: "Captura discreta de la plataforma publicada",
          caption: "Captura discreta de la plataforma publicada",
          note: "Evidencia de que el servicio llegó a producción · no protagonista",
        },
      ],
    },
    {
      id: "role",
      eyebrow: "MI PAPEL",
      title: "Traducir entre diseño, cliente e IT",
      tone: "soft",
      paragraphs: [
        "Lideré la interlocución entre los distintos actores y convertí restricciones técnicas, de seguridad y de infraestructura en decisiones que el cliente pudiera entender y validar. A la vez, trasladaba a desarrollo las necesidades de producto y comunicación con suficiente precisión para evitar interpretaciones innecesarias.",
        "En un entorno institucional, buena parte del trabajo senior ocurre entre pantallas: gestionar dependencias, cerrar decisiones y mantener una visión común cuando cada interlocutor habla un lenguaje distinto. Todo el producto se diseñó y documentó en Figma, que funcionó como fuente única de verdad para cliente y desarrollo. La entrega final se cerró en el propio archivo: componentes, reglas, comportamientos y documentación quedaron preparados para su transferencia.",
      ],
      media: [
        {
          id: "role",
          src: "/images/projects/escuela-hosteleria/role.jpg",
          alt: "Documentación / handoff reconstruida",
          caption: "Documentación / handoff reconstruida",
          note: "Componente + estados + comportamiento + nota funcional",
        },
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISIÓN 01",
      title: "Crear identidad donde apenas había sistema",
      paragraphs: [
        "El punto de partida visual era mínimo. A partir del logo y de referencias dispersas construí un lenguaje propio para diferenciar la Escuela de otros servicios formativos, sin romper con el contexto institucional.",
        "El objetivo no era hacer una marca protagonista, sino crear suficiente personalidad y consistencia para que web y comunicación funcionaran como partes del mismo servicio.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/escuela-hosteleria/decision-01.jpg",
          alt: "Brand foundations reconstruidas",
          caption: "Brand foundations reconstruidas",
          note: "Logo de partida → paleta → tipografía → jerarquía → recursos → aplicación",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISIÓN 02",
      title: "Accesibilidad como requisito de producto",
      tone: "dark",
      paragraphs: [
        "Al tratarse de un servicio público, la accesibilidad formaba parte de los requisitos del producto desde el inicio. No la traté como una revisión al final, sino como una capa transversal que condicionaba decisiones visuales, de interacción y de contenido.",
        "Trabajé contraste y legibilidad, jerarquía semántica y visual, estados de foco e interacción, formularios comprensibles y contenido no textual preparado para alternativas como alt text. Estos criterios se trasladaron también al handoff para que desarrollo pudiera mantenerlos durante la implementación.",
      ],
      media: [
        {
          id: "decision-02",
          src: "/images/projects/escuela-hosteleria/decision-02.jpg",
          alt: "Artefacto principal · Accessibility by design",
          caption: "Artefacto principal · Accessibility by design",
          note: "Lámina en Figma con evidencias reales sobre componentes · no una checklist genérica",
        },
        {
          id: "decision-02-handoff",
          src: "/images/projects/escuela-hosteleria/decision-02-handoff.jpg",
          alt: "Artefacto de handoff · Figma como fuente de verdad",
          caption: "Artefacto de handoff · Figma como fuente de verdad",
          note: "Documentación para desarrollo: accesibilidad, comportamiento y reglas de uso en el mismo archivo",
        },
      ],
    },
    {
      id: "decision-03",
      eyebrow: "DECISIÓN 03",
      title: "Un UI kit pequeño, pero preparado para reutilizarse",
      paragraphs: [
        "El presupuesto no justificaba un Design System amplio, así que trabajé un kit reducido alrededor de las piezas que realmente necesitábamos. La prioridad fue que los componentes fueran consistentes, reutilizables y suficientemente claros para desarrollo y comunicación.",
        "Ese recorte es parte de la decisión: sistematizar donde aporta valor, sin sobrediseñar una infraestructura que el proyecto no necesitaba. El kit se construyó en Figma con variantes, properties y estados pensados para reutilización y handoff.",
      ],
      media: [
        {
          id: "decision-03",
          src: "/images/projects/escuela-hosteleria/decision-03.jpg",
          alt: "Artefacto clave · 2–3 componentes en detalle",
          caption: "Artefacto clave · 2–3 componentes en detalle",
          note: "Variants, properties, estados y responsive behavior · imagen protagonista",
        },
      ],
    },
    {
      id: "sistema",
      eyebrow: "SISTEMA",
      title: "Del componente a comunicación",
      tone: "soft",
      paragraphs: [
        "El lenguaje visual no se quedó dentro de la interfaz. Parte de las foundations y patrones se reutilizaron en materiales de comunicación para mantener continuidad entre captación, información del curso y experiencia digital.",
        "Eso permitió tratar la plataforma y sus piezas de comunicación como un mismo sistema, aunque el alcance y presupuesto fueran reducidos.",
      ],
      media: [
        {
          id: "sistema",
          src: "/images/projects/escuela-hosteleria/sistema.jpg",
          alt: "Composición producto + comunicación",
          caption: "Composición producto + comunicación",
          note: "Card/CTA web junto a ficha de curso, cartel, social o pieza equivalente",
        },
      ],
    },
    {
      id: "decision-04",
      eyebrow: "DECISIÓN 04",
      title: "Diseñar el handoff para el siguiente proveedor",
      paragraphs: [
        "La documentación tenía un objetivo poco habitual: no solo ayudar al equipo que desarrollaba en ese momento, sino permitir que otra empresa pudiera hacerse cargo del servicio después.",
        "Por eso el handoff debía explicar estructura, uso y comportamiento con claridad. Todo el producto se construyó y documentó en Figma: foundations, componentes, variants, properties, estados, responsive y notas funcionales. El archivo se entregó cerrado como fuente única de verdad para desarrollo y como documentación transferible al siguiente proveedor, reduciendo conocimiento implícito y dependencia del equipo original.",
      ],
      media: [
        {
          id: "decision-04",
          src: "/images/projects/escuela-hosteleria/decision-04.jpg",
          alt: "Lámina de documentación de trabajo",
          caption: "Lámina de documentación de trabajo",
          note: "Nomenclatura, properties, estados, reglas responsive y ejemplo de implementación",
        },
      ],
    },
    {
      id: "restricciones",
      eyebrow: "RESTRICCIONES",
      title: "Diseñar dentro de restricciones reales",
      tone: "soft",
      paragraphs: [
        "Seguridad, infraestructura institucional, presupuesto y alcance limitaron muchas decisiones. En lugar de esconder esas restricciones, el proyecto me obligó a priorizar: qué sistematizar, qué documentar y dónde invertir el esfuerzo para que la solución pudiera implementarse y mantenerse.",
        "La implementación actual ha evolucionado después de la entrega y no representa por completo el sistema visual original. En el portfolio muestro principalmente el diseño y los artefactos entregados, utilizando la plataforma publicada como evidencia de que el servicio llegó a producción.",
      ],
      media: [
        {
          id: "restricciones",
          src: "/images/projects/escuela-hosteleria/restricciones.jpg",
          alt: "Comparativa controlada · Designed system / Implemented service",
          caption: "Comparativa controlada · Designed system / Implemented service",
          note: "No plantearla como «bien vs mal» · indicar qué corresponde a la entrega",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CIERRE",
    title: "Qué demuestra este proyecto",
    skills: [
      "Stakeholder management",
      "Design-to-dev",
      "UI systems",
      "Accessibility",
      "Figma documentation",
      "Institutional constraints",
      "Handoff",
      "Continuidad operativa",
    ],
    text: "Este proyecto muestra una faceta menos espectacular, pero muy real del diseño senior: construir suficiente sistema para que diseño, desarrollo y cliente puedan entenderse; integrar accesibilidad desde el diseño; y dejar en Figma una entrega documentada y transferible para que el producto siga funcionando cuando cambian las personas y los proveedores.",
  },
};
