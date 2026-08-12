import { useEffect } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import { conectaCase } from "../content/projects/conecta";

const ownership = [
  { label: "Product Strategy", level: "principal" },
  { label: "UX", level: "principal" },
  { label: "Brand", level: "principal" },
  { label: "Stakeholders", level: "principal" },
  { label: "Design System", level: "compartida" },
  { label: "Handoff", level: "compartida" },
];

const diagrams = {
  context: (
    <div className="cx-diagram cx-eco-simple" aria-label="Ecosistema Conecta">
      <div>Artistas</div>
      <span>↔</span>
      <div className="is-core">CONECTA</div>
      <span>↔</span>
      <div>Salas / promotores</div>
    </div>
  ),
  role: (
    <div className="cx-diagram cx-ownership" aria-label="Mapa de ownership">
      {ownership.map((item) => (
        <div key={item.label} className={`cx-bar ${item.level}`}>
          <div>
            <strong>{item.label}</strong>
            <span>{item.level === "principal" ? "Liderada" : "Compartida"}</span>
          </div>
          <i />
        </div>
      ))}
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
  "decision-02": (
    <div className="cx-diagram cx-pipeline light" aria-label="Taxonomía">
      {["Datos del perfil", "Categorías normalizadas", "Filtros", "Resultados"].map((step) => (
        <div key={step}>{step}</div>
      ))}
    </div>
  ),
  identidad: (
    <div className="cx-diagram cx-brand-pair" aria-label="Comparativa de marca">
      <div>
        <p className="cx-label">Somos Música</p>
        <strong>Origen</strong>
      </div>
      <div className="is-product">
        <p className="cx-label">Conecta</p>
        <strong>Producto digital</strong>
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

export default function ConectaCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = conectaCase.documentTitle;
    return () => {
      document.title = "Sara — Product Designer";
    };
  }, []);

  return (
    <CaseLayout currentSlug="conecta">
      <CaseArticle content={conectaCase} diagrams={diagrams} heroToneClass="navy" />
    </CaseLayout>
  );
}
