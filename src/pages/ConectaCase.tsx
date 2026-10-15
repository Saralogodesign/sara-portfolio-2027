import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import { conectaCase } from "../content/projects/conecta";

const diagrams = {
  context: (
    <div className="cx-diagram cx-eco-simple" role="img" aria-label="Ecosistema Conecta">
      <div>Artistas</div>
      <span>↔</span>
      <div className="is-core">CONECTA</div>
      <span>↔</span>
      <div>Salas / promotores</div>
    </div>
  ),
  "decision-01": (
    <div className="cx-diagram cx-compare" aria-label="Before / After del onboarding">
      <div>
        <p className="cx-label">Before</p>
        <ol>
          <li>Registro largo</li>
          <li>Muchos campos</li>
          <li>Acceso</li>
        </ol>
        <span className="cx-note">Compromiso antes del valor</span>
      </div>
      <div className="is-after">
        <p className="cx-label">After</p>
        <ol>
          <li>Acceso mínimo</li>
          <li className="is-value">Explorar · valor</li>
          <li>Completar perfil</li>
        </ol>
        <span className="cx-note">Valor antes de pedir datos</span>
      </div>
    </div>
  ),
  colaboracion: (
    <div className="cx-diagram cx-collab" aria-label="Flujo de trabajo">
      {["Stakeholders", "Workshop / decisión", "Figma", "Validación", "Desarrollo"].map((step) => (
        <div key={step}>{step}</div>
      ))}
    </div>
  ),
  resultado: (
    <div className="cx-diagram cx-months" aria-label="Timeline de 4 meses">
      {[
        { m: "01", h: "Definición" },
        { m: "02", h: "Flujos / workshops" },
        { m: "03", h: "UI / sistema" },
        { m: "04", h: "Handoff / MVP" },
      ].map((item) => (
        <div key={item.h}>
          <strong>{item.m}</strong>
          <span>{item.h}</span>
        </div>
      ))}
    </div>
  ),
};

const diagramsAfter = {
  identidad: (
    <p className="cx-media-caption" style={{ marginTop: 4 }}>
      <a href="/images/projects/conecta/origen-principios.pdf" target="_blank" rel="noreferrer">
        Descargar presentación · Guidelines Conecta (PDF)
      </a>
    </p>
  ),
};

export default function ConectaCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="conecta" className="conecta-case">
      <CaseArticle
        content={conectaCase}
        diagrams={diagrams}
        diagramsAfter={diagramsAfter}
        heroToneClass="navy"
      />
    </CaseLayout>
  );
}
