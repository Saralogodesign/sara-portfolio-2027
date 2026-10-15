import type { CaseStudyContent } from "../types";

export const conectaCase: CaseStudyContent = {
  slug: "conecta",
  documentTitle: "Conecta — Sara",
  hero: {
    eyebrow: "CASE STUDY · PRODUCT DESIGN",
    title: "Conecta",
    subtitle: "De una oportunidad de negocio a un MVP listo para evolucionar.",
    skills: "Lead Product Designer · Product Strategy · UX/UI · Brand System · Stakeholder Management",
    meta: [
      { label: "Rol", value: "Lead Product Designer" },
      { label: "Duración", value: "4 meses · sep–dic" },
      { label: "Tipo", value: "MVP · plataforma musical" },
      { label: "Estado", value: "Entregado · 2ª fase iniciada" },
    ],
    artLabel: "MOCKUP / HERO",
    artTitle: "Conecta",
    artHint: "Producto en uso + detalle de interfaz",
    heroMedia: {
      id: "hero",
      src: "/images/projects/conecta/hero.mp4",
      caption: "Vídeo del producto Conecta en uso",
    },
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXTO",
      title: "Una oportunidad, todavía no un producto",
      paragraphs: [
        "Somos Música detectó una fricción clara en su comunidad: artistas, salas y promotores compartían ecosistema, pero seguían teniendo dificultades para encontrarse. La oportunidad era convertir esa necesidad en un servicio gratuito y construir un MVP suficientemente sólido para validar la propuesta y apoyar la búsqueda de financiación.",
        "Entré cuando todavía no había un producto definido. Había una idea, varios stakeholders y un plazo corto. Mi trabajo fue bajar esa ambigüedad a una propuesta clara, diseñable y entregable.",
      ],
    },
    {
      id: "role",
      eyebrow: "ROL",
      title: "Mi papel: ownership de extremo a extremo",
      tone: "dark",
      paragraphs: [
        "Lideré la definición del producto, el branding digital, los flujos principales, los workshops con cliente, la organización del proyecto en Figma y el handoff a desarrollo. También estructuré la forma de colaborar entre equipos y stakeholders en España y Panamá.",
        "Más que producir pantallas, mi responsabilidad fue mantener alineadas las decisiones de negocio, experiencia, marca y ejecución para llegar a un MVP coherente en cuatro meses.",
      ],
      media: [
        {
          id: "role",
          src: "/images/projects/conecta/role.png",
          caption: "Fases de trabajo",
        },
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISIÓN 01",
      title: "Menos fricción, más valor",
      paragraphs: [
        "El planteamiento inicial pedía demasiada información durante el registro. Era útil para segmentar, pero arriesgado para la conversión: se pedía compromiso antes de que el usuario entendiera qué ganaba.",
        "Propuse un onboarding progresivo: primero identificar si eres artista o promotor; después, ya dentro del producto, completar el perfil poco a poco. El principio fue sencillo: enseñar valor antes de pedir datos.",
      ],
      media: [
        {
          id: "decision-01",
          src: "/images/projects/conecta/decision-01.png",
          caption: "Flujo de registro: de acceder con email a elegir perfil y cuenta creada",
        },
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISIÓN 02",
      title: "Convertir categorías en arquitectura",
      tone: "soft",
      paragraphs: [
        "El buscador dependía de una taxonomía musical consistente. Géneros, formatos y tipos de artista se solapaban, y además la información introducida en el perfil tenía que alimentar después los filtros de búsqueda. Facilité un workshop online en FigJam para ordenar categorías y detectar duplicidades.",
        "Definimos una lógica común entre alta de datos y filtrado. No era solo diseñar filtros: era diseñar la estructura que hacía posible que el buscador funcionara.",
      ],
      media: [
        {
          id: "decision-02",
          src: "/images/projects/conecta/decision-02.png",
          caption: "Workshop de categorización y filtros",
          cursors: [
            { name: "Sara", color: "#c4244a" },
            { name: "Marta", color: "#0d99ff" },
            { name: "Lucía", color: "#14ae5c" },
            { name: "Álex", color: "#7b61ff" },
          ],
        },
      ],
    },
    {
      id: "identidad",
      eyebrow: "IDENTIDAD",
      title: "Una identidad propia, sin romper con Somos Música",
      paragraphs: [
        "Partí del universo visual existente y lo reinterpreté para producto digital. El objetivo era que Conecta tuviera personalidad propia y se reconociera de inmediato como una herramienta diferente, pero siguiera perteneciendo a la misma familia de marca.",
        "El sistema dark, la jerarquía visual y el tratamiento de contenidos multimedia ayudaron a dar protagonismo al artista y a hacer tangible el valor del producto desde las primeras pantallas.",
      ],
      mediaLayout: "carousel",
      media: Array.from({ length: 21 }, (_, i) => {
        const n = String(i + 1).padStart(2, "0");
        return {
          id: `origen-${n}`,
          src: `/images/projects/conecta/origen-principios-${n}.jpg`,
          caption: `Guidelines Conecta · ${n}`,
        };
      }),
    },
    {
      id: "colaboracion",
      eyebrow: "COLABORACIÓN",
      title: "Diseñar también la colaboración",
      tone: "dark",
      paragraphs: [
        "Con varios stakeholders y desarrollo trabajando en otro huso horario, Figma se convirtió en la fuente única de verdad: producto, decisiones, prototipos, workshops y documentación convivían en el mismo entorno.",
        "Esa gobernanza redujo la dispersión y permitió que cliente y desarrollo entendieran no solo qué había que construir, sino por qué se había tomado cada decisión.",
      ],
      media: [
        {
          id: "colaboracion",
          src: "/images/projects/conecta/colaboracion.png",
          caption: "Figma como fuente de verdad",
        },
      ],
    },
    {
      id: "resultado",
      eyebrow: "RESULTADO",
      title: "De idea difusa a MVP entregado",
      paragraphs: [
        "Entre finales de septiembre y diciembre, Conecta pasó de una oportunidad de negocio sin producto definido a un MVP completo y entregado llave en mano. El cliente decidió mantenerlo de momento en entorno interno y continuar con una segunda fase de evolución. Al no existir todavía lanzamiento público, no presento métricas de uso como si fueran impacto.",
        "El resultado demostrable es la capacidad de convertir ambigüedad, múltiples interlocutores y un plazo exigente en un producto coherente, documentado y preparado para crecer.",
      ],
      media: [
        {
          id: "resultado",
          src: "/images/projects/conecta/resultado.png",
          caption: "MVP: búsqueda, filtros, favoritos y perfil de artista",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "CIERRE",
    title: "Qué demuestra este proyecto",
    skills: [
      "Product thinking",
      "Liderazgo y ownership",
      "Stakeholder management",
      "Facilitación",
      "Brand systems",
      "UX/UI",
      "Design systems",
      "Handoff a desarrollo",
    ],
    text: "Ordenar problemas poco definidos, tomar decisiones con criterio y construir una buena base, es necesario para que negocio y diseño avancen en la misma dirección.",
  },
};
