import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import ProductosSurveyReel from "../components/ProductosSurveyReel";
import { productosMadridCase } from "../content/projects/productos-madrid";

type BarItem = { label: string; pct: number };

type SurveyBlock = {
  title: string;
  question: string;
  items: BarItem[];
};

function SurveyChart({ title, question, items }: SurveyBlock) {
  return (
    <article className="pm-survey" aria-label={`${title}. ${question}`}>
      <p className="cx-label">{title}</p>
      <h4>{question}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <div className="pm-survey-meta">
              <span>{item.label}</span>
              <strong>{item.pct}%</strong>
            </div>
            <div
              className="pm-survey-track"
              role="img"
              aria-label={`${item.label}: ${item.pct} por ciento`}
            >
              <i style={{ width: `${item.pct}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

const horecaSurveys: SurveyBlock[] = [
  {
    title: "HORECA · n = 40",
    question: "¿Por dónde comenzarías a buscar una nueva opción de suministro?",
    items: [
      { label: "Producto o categoría", pct: 60 },
      { label: "Proveedor conocido", pct: 25 },
      { label: "Recomendación profesional", pct: 15 },
    ],
  },
  {
    title: "HORECA · n = 40",
    question: "¿Qué condición te haría descartar primero una oferta?",
    items: [
      { label: "No entrega en mi zona", pct: 55 },
      { label: "Pedido mínimo excesivo", pct: 30 },
      { label: "Información insuficiente", pct: 15 },
    ],
  },
  {
    title: "HORECA · n = 40",
    question: "¿Qué información económica mínima necesitas antes de contactar?",
    items: [
      { label: "Rango orientativo con condiciones", pct: 50 },
      { label: "Precio exacto", pct: 35 },
      { label: "Puedo consultarlo al contactar", pct: 15 },
    ],
  },
];

const producerSurveys: SurveyBlock[] = [
  {
    title: "Productores · n = 40",
    question: "¿Qué dato te resulta más difícil mantener actualizado?",
    items: [
      { label: "Disponibilidad actual", pct: 45 },
      { label: "Precio o condiciones económicas", pct: 35 },
      { label: "Zona y plazos de entrega", pct: 20 },
    ],
  },
  {
    title: "Productores · n = 40",
    question: "¿Con qué frecuencia podrías revisar tu oferta?",
    items: [
      { label: "Una vez por semana", pct: 25 },
      { label: "Una vez al mes", pct: 45 },
      { label: "Solo cuando haya cambios", pct: 30 },
    ],
  },
  {
    title: "Productores · n = 40",
    question: "¿Qué información económica podrías publicar antes del contacto?",
    items: [
      { label: "Rango orientativo con condiciones", pct: 50 },
      { label: "Precio exacto", pct: 20 },
      { label: "Solo consulta directa", pct: 30 },
    ],
  },
];

const distributorSurveys: SurveyBlock[] = [
  {
    title: "Distribuidores · n = 40",
    question: "¿Qué dato te resulta más difícil mantener actualizado?",
    items: [
      { label: "Disponibilidad actual", pct: 35 },
      { label: "Precio o condiciones económicas", pct: 40 },
      { label: "Zona y plazos de entrega", pct: 25 },
    ],
  },
  {
    title: "Distribuidores · n = 40",
    question: "¿Con qué frecuencia podrías revisar tu oferta?",
    items: [
      { label: "Una vez por semana", pct: 45 },
      { label: "Una vez al mes", pct: 20 },
      { label: "Solo cuando haya cambios", pct: 35 },
    ],
  },
  {
    title: "Distribuidores · n = 40",
    question: "¿Qué información económica podrías publicar antes del contacto?",
    items: [
      { label: "Rango orientativo con condiciones", pct: 40 },
      { label: "Precio exacto", pct: 35 },
      { label: "Solo consulta directa", pct: 25 },
    ],
  },
];

const discoverTree = [
  {
    n: "0",
    title: "Entrada global",
    scope: "todo el catálogo",
    items: [
      "Búsqueda libre: producto, categoría o proveedor",
      "Contexto puntual: zona, cantidad y recurrencia",
    ],
  },
  {
    n: "1",
    title: "Categorías",
    scope: "producto",
    items: [
      "Frutas y hortalizas",
      "Carnes",
      "Lácteos y huevos",
      "Panadería y cereales",
      "Aceites y conservas",
      "Bebidas",
    ],
  },
  {
    n: "2",
    title: "Refinar resultados",
    scope: "atributos del producto",
    items: [
      "Subcategoría y variedad según categoría",
      "Origen",
      "Temporalidad",
      "Certificaciones, solo con datos contrastables",
    ],
  },
  {
    n: "3",
    title: "Comprobar encaje",
    scope: "oferta de cada proveedor",
    items: [
      "Zona de suministro",
      "Formato y unidad comercial",
      "Pedido mínimo, con unidades comparables",
      "Modalidad de entrega",
    ],
  },
  {
    n: "4",
    title: "Evaluar oferta",
    scope: "ficha, fuera del filtro inicial",
    items: [
      "Precio o rango y condiciones aplicables",
      "Disponibilidad, capacidad y plazo",
      "Responsable y última verificación",
    ],
  },
  {
    n: "5",
    title: "Contactar",
    scope: "fuera de la transacción",
    items: ["Canal del proveedor", "Confirmación de condiciones y negociación"],
  },
];

const ICON_BASE = "/images/projects/productos-madrid";

const stack = [
  {
    tool: "ChatGPT",
    note: "Deep Research, contraste y síntesis asistida",
    icon: `${ICON_BASE}/icon-chatgpt-2.png`,
  },
  {
    tool: "Cursor",
    note: "Arquitectura, memoria operativa y procedimientos",
    icon: `${ICON_BASE}/icon-cursor.png`,
  },
  {
    tool: "Notion",
    note: "Contexto, research, decisiones y seguimiento",
    icon: `${ICON_BASE}/icon-notion.webp`,
  },
  {
    tool: "Jotform",
    note: "Instrumento de encuesta en preparación",
    icon: `${ICON_BASE}/icon-jotform.png`,
  },
  {
    tool: "FigJam / Figma",
    note: "Canvas Product First y capas posteriores de UX",
    icon: `${ICON_BASE}/icon-figma.png`,
  },
];

const flow = [
  { label: "Fuentes", note: "Documentos · Deep Research · respuestas" },
  { label: "Síntesis", note: "Evidence Matrix · hipótesis y gaps" },
  { label: "Definición", note: "Producto · UX · Approval Gate" },
  { label: "Auditoría", note: "Calidad · contradicciones · excluir DEMO" },
  { label: "Decisión", note: "Mapper · revisión humana · log" },
];

const diagrams = {
  "decision-01": (
    <div className="cx-diagram pm-surveys" aria-label="Resultados simulados de encuesta por sector">
      <p className="pm-surveys-note">Resultados · 120 respuestas · 40 por sector</p>
      <div className="pm-survey-grid">
        {horecaSurveys.map((block) => (
          <SurveyChart key={block.question} {...block} />
        ))}
      </div>
      <div className="pm-survey-grid">
        {producerSurveys.map((block) => (
          <SurveyChart key={block.question} {...block} />
        ))}
      </div>
      <div className="pm-survey-grid">
        {distributorSurveys.map((block) => (
          <SurveyChart key={block.question} {...block} />
        ))}
      </div>
      <p className="pm-surveys-note">
        En HORECA, el 55 % señalaría la zona como principal descarte. El rango económico sería
        aceptable para el 50 % de compradores y publicable para el 50 % de productores y el 40 % de
        distribuidores.
      </p>
    </div>
  ),
  "decision-02": (
    <div className="cx-diagram pm-discover" aria-label="Esquema Descubrir: niveles de producto y oferta">
      <p className="pm-discover-root">Descubrir</p>
      <ul className="pm-discover-tree">
        {discoverTree.map((level, levelIndex) => (
          <li
            key={level.n}
            className={levelIndex === discoverTree.length - 1 ? "is-last" : undefined}
          >
            <div className="pm-discover-branch" aria-hidden="true" />
            <div className="pm-discover-node">
              <div className="pm-discover-level">
                <strong>
                  <span>Nivel {level.n}</span>
                  {level.title}
                </strong>
                <em>[{level.scope}]</em>
              </div>
              <ul className="pm-discover-leaves">
                {level.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className={itemIndex === level.items.length - 1 ? "is-last" : undefined}
                  >
                    <span className="pm-discover-twig" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ),
  "decision-03": (
    <>
      <div className="cx-diagram pm-stack" aria-label="Stack de herramientas">
        {stack.map((item) => (
          <div key={item.tool}>
            <img className="pm-stack-icon" src={item.icon} alt="" aria-hidden="true" />
            <strong>{item.tool}</strong>
            <span>{item.note}</span>
          </div>
        ))}
      </div>
      <div className="cx-diagram pm-flow" aria-label="Viaje de la información">
        {flow.map((step) => (
          <div key={step.label}>
            <strong>{step.label}</strong>
            <span>{step.note}</span>
          </div>
        ))}
      </div>
    </>
  ),
};

export default function ProductosMadridCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="productos-madrid" className="productos-madrid-case">
      <CaseArticle
        content={productosMadridCase}
        diagrams={diagrams}
        heroToneClass="ink"
        heroVisual={<ProductosSurveyReel />}
      />
    </CaseLayout>
  );
}
