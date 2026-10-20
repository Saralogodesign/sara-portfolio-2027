import { useEffect, useMemo } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import { getCase } from "../content/projects/getCase";
import { useLocale } from "../i18n/LocaleContext";

const tension = [
  { from: "Estrés", to: "Pausa" },
  { from: "Cortisol", to: "Contacto" },
  { from: "Desconexión", to: "Bienestar" },
];

const ecosystem = [
  { label: "Smart mattress", note: "Termorregulación · biovitales" },
  { label: "App", note: "Personalizar ritmos" },
  { label: "Experiencia", note: "Descanso · intimidad · conexión" },
];

const conceptMap = [
  { label: "Problema", items: ["Cortisol", "Estrés", "Aceleración"] },
  { label: "Puente", items: ["Descanso", "Contacto", "Slow sex"] },
  { label: "Propuesta", items: ["Cucharita", "Pausa", "Presencia"] },
];

const slowLine = [
  { label: "Slow life", note: "Filosofía" },
  { label: "Pre-order", note: "Modelo de lanzamiento" },
  { label: "Producción ajustada", note: "Bajo demanda" },
  { label: "Menos waste", note: "Coherencia no-waste" },
];

const brandBoard = [
  { label: "Azul profundo", intent: "Calma y descanso" },
  { label: "Nude", intent: "Piel y proximidad" },
  { label: "Tipografía", intent: "Estructura + cercanía" },
  { label: "Fotografía", intent: "Analógica · grano · planos" },
];

const mvpLoop = [
  { label: "Insight", note: "Bajar revoluciones" },
  { label: "Propuesta", note: "Producto + relato" },
  { label: "Landing", note: "Primer contacto" },
  { label: "Feedback", note: "Validación cualitativa" },
  { label: "Iterar", note: "Siguiente paso" },
];

const diagrams = {
  insight: (
    <div className="cx-diagram cx-tension" aria-label="Tensión conceptual">
      {tension.map((item) => (
        <div key={item.from}>
          <span>{item.from}</span>
          <b>→</b>
          <strong>{item.to}</strong>
        </div>
      ))}
    </div>
  ),
  propuesta: (
    <div className="cx-diagram cx-eco-simple cu-eco" aria-label="Ecosistema Cucharita">
      {ecosystem.map((item, index) => (
        <div key={item.label} className={index === 1 ? "is-core" : undefined}>
          <strong>{item.label}</strong>
          <em>{item.note}</em>
        </div>
      ))}
    </div>
  ),
  "decision-01": (
    <div className="cx-diagram cx-concept-map" aria-label="Mapa conceptual">
      {conceptMap.map((col) => (
        <div key={col.label} className={col.label === "Propuesta" ? "is-after" : undefined}>
          <p className="cx-label">{col.label}</p>
          <ul>
            {col.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),
  "decision-02": (
    <div className="cx-diagram cx-slow-line" aria-label="Principio a decisión">
      {slowLine.map((item) => (
        <div key={item.label}>
          <strong>{item.label}</strong>
          <span>{item.note}</span>
        </div>
      ))}
    </div>
  ),
  branding: (
    <div className="cx-diagram cx-brand-foundations" aria-label="Foundations de marca">
      {brandBoard.map((item) => (
        <div key={item.label}>
          <p className="cx-label">{item.label}</p>
          <strong>{item.intent}</strong>
        </div>
      ))}
    </div>
  ),
  mvp: (
    <div className="cx-diagram cx-months" aria-label="MVP loop">
      {mvpLoop.map((item, index) => (
        <div key={item.label}>
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <span>{item.label}</span>
          <em>{item.note}</em>
        </div>
      ))}
    </div>
  ),
};

export default function CucharitaCase() {
  const { locale } = useLocale();
  const content = useMemo(() => getCase("cucharita", locale)!, [locale]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="cucharita" className="cucharita-case">
      <CaseArticle content={content} diagrams={diagrams} heroToneClass="navy" />
    </CaseLayout>
  );
}
