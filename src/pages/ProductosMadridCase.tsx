import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import ProductosSurveyReel from "../components/ProductosSurveyReel";
import { productosMadridCase } from "../content/projects/productos-madrid";

type PieSlice = { label: string; pct: number; color: string };

type PieBlock = {
  kicker: string;
  title: string;
  slices: PieSlice[];
};

const PIE_COLORS = [
  "var(--strawberry)",
  "var(--strawberry-400)",
  "var(--strawberry-200)",
] as const;

function polar(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function piePath(cx: number, cy: number, r: number, start: number, end: number) {
  const a = polar(cx, cy, r, end);
  const b = polar(cx, cy, r, start);
  const large = end - start > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${a.x} ${a.y} A ${r} ${r} 0 ${large} 0 ${b.x} ${b.y} Z`;
}

/** Tres hallazgos clave de las encuestas (120 respuestas) en quesitos. */
const surveyPies: PieBlock[] = [
  {
    kicker: "HORECA · Búsqueda",
    title: "Empiezan por el producto",
    slices: [
      { label: "Producto o categoría", pct: 60, color: PIE_COLORS[0] },
      { label: "Proveedor conocido", pct: 25, color: PIE_COLORS[1] },
      { label: "Recomendación", pct: 15, color: PIE_COLORS[2] },
    ],
  },
  {
    kicker: "HORECA · Descarte",
    title: "La zona tumba la oferta",
    slices: [
      { label: "No entrega en zona", pct: 55, color: PIE_COLORS[0] },
      { label: "Pedido mínimo alto", pct: 30, color: PIE_COLORS[1] },
      { label: "Info insuficiente", pct: 15, color: PIE_COLORS[2] },
    ],
  },
  {
    kicker: "Los tres sectores · Precio",
    title: "El rango orientativo encaja",
    slices: [
      { label: "Rango con condiciones", pct: 47, color: PIE_COLORS[0] },
      { label: "Precio exacto", pct: 30, color: PIE_COLORS[1] },
      { label: "Solo al contactar", pct: 23, color: PIE_COLORS[2] },
    ],
  },
];

function SurveyPie({ kicker, title, slices }: PieBlock) {
  let angle = 0;
  const arcs = slices.map((slice) => {
    const start = angle;
    const end = angle + slice.pct * 3.6;
    angle = end;
    return { ...slice, d: piePath(100, 100, 78, start, end) };
  });

  return (
    <article className="pm-pie" aria-label={`${kicker}. ${title}`}>
      <p className="cx-label">{kicker}</p>
      <h4>{title}</h4>
      <div className="pm-pie-visual">
        <svg viewBox="0 0 200 200" className="pm-pie-svg" aria-hidden="true">
          {arcs.map((arc) => (
            <path key={arc.label} d={arc.d} fill={arc.color} />
          ))}
        </svg>
        <ul className="pm-pie-legend">
          {slices.map((slice) => (
            <li key={slice.label}>
              <i style={{ background: slice.color }} aria-hidden="true" />
              <span>{slice.label}</span>
              <strong>{slice.pct}%</strong>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

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
    <div
      className="cx-diagram pm-surveys"
      aria-label="Tres hallazgos clave de las encuestas: búsqueda, descarte y precio"
    >
      <p className="pm-surveys-note">120 respuestas · 40 por sector · tres lecturas</p>
      <div className="pm-pie-grid">
        {surveyPies.map((pie) => (
          <SurveyPie key={pie.title} {...pie} />
        ))}
      </div>
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
