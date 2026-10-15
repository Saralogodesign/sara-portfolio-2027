import type { CaseStudyContent } from "../types";

export const productosMadridCase: CaseStudyContent = {
  slug: "productos-madrid",
  documentTitle: "Productos de Madrid — Sara",
  hero: {
    eyebrow: "CASE STUDY · PRODUCT DISCOVERY · EN CURSO",
    title: "Productos de Madrid",
    subtitle: "Definir qué necesita saber un profesional para encontrar un proveedor viable.",
    lead:
      "Un proyecto de conexión entre HORECA y el sector agroalimentario madrileño donde el diseño empieza por entender la compra profesional, estructurar la información y hacer viable su mantenimiento.",
    skills:
      "Product Discovery · Deep Research · Information Architecture · Systems Thinking · AI Workflow",
    meta: [
      { label: "Contexto", value: "Ecosistema agroalimentario" },
      { label: "Enfoque", value: "Producto + investigación + sistemas" },
      { label: "Fase", value: "Discovery 0 a 1" },
      { label: "Estado", value: "En curso" },
    ],
    artLabel: "CONECTOR / HERO",
    artTitle: "Productos de Madrid",
    artHint: "Resultados de encuesta HORECA: descarte de oferta en quesito, columnas y barras",
    heroMedia: {
      id: "hero",
      src: "/images/projects/productos-madrid/cover.jpg",
      caption:
        "Reel formativo · encuesta HORECA (n = 40): descarte de oferta en quesito, columnas y barras",
    },
  },
  sections: [
    {
      id: "context",
      eyebrow: "CONTEXTO",
      title: "El reto de conectar dos realidades",
      paragraphs: [
        "Mostrar productos es solo el comienzo. La pregunta es qué necesita HORECA para evaluar una oferta y qué información pueden facilitar y mantener productores y distribuidores. La neutralidad institucional excluye rankings entre proveedores. Mi enfoque conecta research, definición de producto y estructura del dato.",
        "La prioridad es entender qué ayuda a decidir antes de convertirlo en campos, filtros o funcionalidades. Product First orienta la exploración; su adecuación a cada contexto de compra sigue pendiente de contraste.",
      ],
    },
    {
      id: "decision-01",
      eyebrow: "DECISIÓN 01",
      title: "Investigar la necesidad y la capacidad de respuesta",
      tone: "soft",
      paragraphs: [
        "El Deep Research y el benchmark organizaron cuatro líneas: oferta, demanda, distribución e información de producto. La encuesta se reformuló como una entrada por perfil, con duración objetivo de cuatro minutos y variables comparables.",
        "Los gráficos siguientes son resultados que nos sirven para explorar cómo se comportará el producto. Los porcentajes usan como denominador las 40 respuestas del sector.",
      ],
    },
    {
      id: "decision-02",
      eyebrow: "DECISIÓN 02",
      title: "Separar el producto de la oferta",
      paragraphs: [
        "Propuesta inicial pendiente de validación. Los niveles indican profundidad de información y alcance del filtro, no una obligación de completar pasos en ese orden. Los atributos de producto y oferta permanecen separados. Los filtros del nivel 2 reducen productos; los del nivel 3 reducen ofertas.",
        "Un producto solo permanece tras filtrar ofertas si al menos una cumple todos los criterios seleccionados a la vez. Así se evita combinar la cobertura de un proveedor con el mínimo de otro. La taxonomía requiere auditoría del catálogo y pruebas de comprensión.",
        "* Precio, stock y plazos no se convierten en filtros mientras no puedan compararse y mantenerse.",
        "* Temporada no significa disponibilidad actual.",
      ],
    },
    {
      id: "decision-03",
      eyebrow: "DECISIÓN 03",
      title: "Hacer trazable el paso de research a producto",
      tone: "soft",
      paragraphs: [
        "La arquitectura organiza estados del conocimiento. Cada herramienta tiene una función y cada transformación conserva su fuente, estado y revisión. El mapa representa el flujo de trabajo previsto; no acredita una automatización integral entre aplicaciones.",
        "AGENTS.md gobierna las reglas del agente; las Skills ejecutan procedimientos. Notion conserva el seguimiento. El orden admite iteraciones: una contradicción devuelve el trabajo a research. Acta no equivale a decisión.",
      ],
    },
  ],
  closing: {
    eyebrow: "CIERRE",
    title: "Qué demuestra este proyecto",
    skills: [
      "Product discovery",
      "Deep research",
      "Information architecture",
      "Systems thinking",
      "AI workflow",
      "Stakeholder alignment",
    ],
    text:
      "Criterio de producto, investigación y pensamiento sistémico: relacionar necesidades de usuario con información, operación y restricciones técnicas. Resultado real hasta ahora: research documental, instrumentos de investigación, arquitectura de trabajo y modelo inicial de información. Pendiente: investigación primaria, focus group, validación de categorías y filtros, y cierre del MVP.",
  },
};
