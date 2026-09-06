import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import { escuelaCase } from "../content/projects/escuela";

const stakeholders = [
  { label: "Administración", note: "Cliente final" },
  { label: "Aspasia", note: "Adjudicataria" },
  { label: "Diseño", note: "Punto de traducción", lead: true },
  { label: "IT / desarrollo", note: "Restricciones e implementación" },
  { label: "Futuro proveedor", note: "Continuidad del servicio" },
];

const translation = [
  "Necesidad de servicio",
  "Decisión de diseño",
  "Restricción IT",
  "Ajuste",
  "Validación",
  "Implementación",
];

const brandPath = [
  { label: "Referencias de partida", items: ["Logo", "Referencias dispersas"] },
  { label: "Criterios definidos", items: ["Personalidad", "Consistencia", "Contexto institucional"] },
  { label: "Sistema final", items: ["Paleta", "Tipografía", "Jerarquía", "Recursos gráficos"] },
];

const a11yEvidence = [
  { label: "Contraste", note: "Ratio visible en color" },
  { label: "Button", note: "Default · hover · focus · disabled" },
  { label: "Input", note: "Label · helper · error" },
  { label: "Headings", note: "Jerarquía semántica y visual" },
  { label: "Alt text", note: "Imagen con alternativa" },
];

const a11yInSystem = [
  { label: "Foco visible", note: "Estados de interacción claros" },
  { label: "Error sin color solo", note: "Feedback comprensible" },
  { label: "Labels definidos", note: "Properties en el kit" },
];

const uiKit = [
  "Button",
  "Input",
  "Select",
  "Card de curso",
  "Tags",
  "Alert / estado",
  "Navegación",
  "Accordion",
  "CTA",
];

const reuseLine = ["Foundations", "UI kit", "Web", "Comunicación"];

const transfer = [
  { label: "Equipo actual", note: "Diseño + desarrollo" },
  { label: "Documentación / sistema", note: "Figma · fuente única de verdad" },
  { label: "Entrega", note: "Archivo cerrado · llave en mano" },
  { label: "Futuro proveedor", note: "Toma de control" },
  { label: "Continuidad del servicio", note: "Sin dependencia del equipo original" },
];

const diagrams = {
  context: (
    <div className="cx-diagram eh-stakeholders" aria-label="Mapa de stakeholders">
      {stakeholders.map((item) => (
        <div key={item.label} className={item.lead ? "is-lead" : undefined}>
          <strong>{item.label}</strong>
          <span>{item.note}</span>
        </div>
      ))}
    </div>
  ),
  role: (
    <div className="cx-diagram eh-translation" aria-label="Flujo de traducción">
      {translation.map((step) => (
        <div key={step}>{step}</div>
      ))}
    </div>
  ),
  "decision-01": (
    <div className="cx-diagram eh-brand-path" aria-label="De referencias a sistema">
      {brandPath.map((col) => (
        <div key={col.label} className={col.label === "Sistema final" ? "is-system" : undefined}>
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
    <>
      <div className="cx-diagram eh-a11y" aria-label="Accessibility by design">
        {a11yEvidence.map((item) => (
          <div key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </div>
        ))}
      </div>
      <div className="cx-diagram eh-a11y-system" aria-label="Accesibilidad en el UI kit">
        <p className="cx-label">En el sistema</p>
        <div>
          {a11yInSystem.map((item) => (
            <div key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  ),
  "decision-03": (
    <div className="cx-diagram eh-kit eh-kit-light" aria-label="UI kit reducido">
      {uiKit.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  ),
  sistema: (
    <div className="cx-diagram eh-reuse" aria-label="Línea de reutilización">
      {reuseLine.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  ),
  "decision-04": (
    <div className="cx-diagram eh-transfer" aria-label="Ciclo de transferencia">
      {transfer.map((item) => (
        <div key={item.label}>
          <strong>{item.label}</strong>
          <span>{item.note}</span>
        </div>
      ))}
    </div>
  ),
  restricciones: (
    <div className="cx-diagram eh-compare" aria-label="Diseñado vs implementado">
      <div>
        <p className="cx-label">Designed system</p>
        <strong>Mi entrega</strong>
        <span>Foundations, UI kit, accesibilidad y documentación en Figma</span>
      </div>
      <div className="is-live">
        <p className="cx-label">Implemented service</p>
        <strong>Servicio publicado</strong>
        <span>Evidencia de producción · ha evolucionado después de la entrega</span>
      </div>
    </div>
  ),
};

export default function EscuelaCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="escuela-hosteleria" className="escuela-case">
      <CaseArticle content={escuelaCase} diagrams={diagrams} heroToneClass="teal" />
    </CaseLayout>
  );
}
