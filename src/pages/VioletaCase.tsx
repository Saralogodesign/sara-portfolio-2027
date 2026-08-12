import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import { violetaCase } from "../content/projects/violeta";

const journey = [
  { label: "Agresión digital", note: "Ciberacoso · deepfakes" },
  { label: "Duda / normalización", note: "¿Es denunciable?" },
  { label: "Búsqueda de ayuda", note: "Información dispersa" },
  { label: "Proceso complejo", note: "Fricción alta" },
  { label: "Abandono", note: "Sin acompañamiento" },
];

const principles = [
  { principle: "Anonimato", decision: "Sin login obligatorio" },
  { principle: "Confianza", decision: "Explicar quién alimenta el sistema" },
  { principle: "Lenguaje adaptado", decision: "IA + voz para expresar" },
  { principle: "Agilizar el proceso", decision: "Borrador de denuncia" },
];

const brandBoard = [
  { label: "Wordmark", intent: "Presencia inmediata" },
  { label: "Tipografía", intent: "Carácter cercano" },
  { label: "Paleta", intent: "Violeta · lila · rosa" },
  { label: "Fotografía", intent: "Humana, no clínica" },
  { label: "Tono", intent: "Seguridad sin paternalismo" },
];

const roadmap = [
  { stage: "01", title: "MVP ligero", validate: "Web + asistente conversacional" },
  { stage: "02", title: "Producto validado", validate: "Aprender antes de escalar" },
  { stage: "03", title: "App nativa", validate: "Expansión con tracción" },
];

const diagrams = {
  reto: (
    <div className="cx-diagram cx-journey" aria-label="Journey resumido">
      {journey.map((step, index) => (
        <div key={step.label} className={index === 2 ? "is-intervene" : undefined}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step.label}</strong>
          <em>{step.note}</em>
          {index === 2 ? <b>Punto de intervención</b> : null}
        </div>
      ))}
    </div>
  ),
  research: (
    <div className="cx-diagram cx-triangulate" aria-label="Triangulación de research">
      <div>
        <strong>Usuarias</strong>
        <span>Focus groups · encuestas</span>
      </div>
      <div>
        <strong>Expertas</strong>
        <span>Legal · ciberseguridad</span>
      </div>
      <div>
        <strong>Datos / contexto</strong>
        <span>Brecha de denuncia</span>
      </div>
      <span className="cx-arrow">→</span>
      <div className="is-core">
        <strong>Insight</strong>
        <span>Identificar · opciones · control</span>
      </div>
      <span className="cx-arrow">→</span>
      <div className="is-out">
        <strong>Principios</strong>
        <span>Confianza antes que features</span>
      </div>
    </div>
  ),
  "decision-01": (
    <div className="cx-diagram cx-principles" aria-label="Principios y decisiones">
      {principles.map((item) => (
        <div key={item.principle}>
          <p className="cx-label">{item.principle}</p>
          <strong>{item.decision}</strong>
        </div>
      ))}
    </div>
  ),
  branding: (
    <div className="cx-diagram cx-brand-board" aria-label="Mini foundation board">
      {brandBoard.map((item) => (
        <div key={item.label}>
          <p className="cx-label">{item.label}</p>
          <strong>{item.intent}</strong>
        </div>
      ))}
    </div>
  ),
  "decision-02": (
    <div className="cx-diagram cx-months" aria-label="Roadmap de madurez">
      {roadmap.map((item) => (
        <div key={item.stage}>
          <strong>{item.stage}</strong>
          <span>{item.title}</span>
          <em>{item.validate}</em>
        </div>
      ))}
    </div>
  ),
  resultado: (
    <div className="cx-diagram cx-layers" aria-label="Tres capas conectadas">
      <div>
        <strong>Problema social</strong>
        <span>Research + insights</span>
      </div>
      <div>
        <strong>Identidad</strong>
        <span>Confianza y tono</span>
      </div>
      <div>
        <strong>Producto + negocio</strong>
        <span>Roadmap viable</span>
      </div>
    </div>
  ),
};

export default function VioletaCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = violetaCase.documentTitle;
    return () => {
      document.title = "Sara — Product Designer";
    };
  }, []);

  return (
    <CaseLayout currentSlug="violeta" className="violeta-case">
      <CaseArticle content={violetaCase} diagrams={diagrams} heroToneClass="violet" />
    </CaseLayout>
  );
}
