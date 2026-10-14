import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import RosettaEcosystem from "../components/RosettaEcosystem";
import { rosettaCase } from "../content/projects/rosetta";

const diagrams = {
  context: (
    <div className="cx-diagram cx-compare" aria-label="Antes / después">
      <div>
        <p className="cx-label">Antes</p>
        <ol>
          <li>Múltiples canales</li>
          <li>Herramientas dispersas</li>
          <li>Decisiones difíciles de seguir</li>
        </ol>
        <span className="cx-note">Teléfono escacharrado</span>
      </div>
      <div className="is-after">
        <p className="cx-label">Después</p>
        <ol>
          <li className="is-value">Rosetta · punto común</li>
          <li>Diseño y desarrollo en paralelo</li>
          <li>Stakeholders con contexto</li>
        </ol>
        <span className="cx-note">Un mismo entorno visible</span>
      </div>
    </div>
  ),
  role: <RosettaEcosystem />,
  "decision-01": (
    <div className="cx-diagram cx-collab" aria-label="Ciclo visible">
      {["Decisión", "Estado", "Conversación", "Implementación", "Validación"].map((step) => (
        <div key={step}>{step}</div>
      ))}
    </div>
  ),
  "decision-02": (
    <div className="cx-diagram cx-reuse" aria-label="Reutilización del flujo">
      <div className="is-origin">Conecta</div>
      <span>→</span>
      <div className="is-core">Piloto Rosetta</div>
      <span>→</span>
      <div className="cx-reuse-grid">
        <b>Proyecto B</b>
        <b>Proyecto C</b>
        <b>Proyecto D</b>
      </div>
    </div>
  ),
  "design-system": (
    <div className="cx-diagram cx-pipeline" aria-label="De foundations a producto">
      {["Foundations", "Componentes Figma", "Rosetta Storybook", "Paquete NPM", "Producto"].map((step) => (
        <div key={step}>{step}</div>
      ))}
    </div>
  ),
  ai: (
    <div className="cx-diagram cx-loop" aria-label="Loop de orquestación">
      {[
        "Diseño + reglas",
        "Agentes / MCP / API",
        "Implementación",
        "Revisión humana",
        "Iteración",
      ].map((step) => (
        <div key={step} className={step === "Revisión humana" ? "is-value" : undefined}>
          {step}
        </div>
      ))}
    </div>
  ),
};

export default function RosettaCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="rosetta" className="rosetta-case">
      <CaseArticle content={rosettaCase} diagrams={diagrams} heroToneClass="blue" />
    </CaseLayout>
  );
}
