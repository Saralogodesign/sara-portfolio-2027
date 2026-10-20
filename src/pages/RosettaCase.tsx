import { useEffect, useMemo } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import RosettaEcosystem from "../components/RosettaEcosystem";
import { getCase } from "../content/projects/getCase";
import { useLocale } from "../i18n/LocaleContext";

export default function RosettaCase() {
  const { locale } = useLocale();
  const content = useMemo(() => getCase("rosetta", locale)!, [locale]);

  const diagrams = useMemo(() => {
    const cycle =
      locale === "en"
        ? ["Decision", "Status", "Conversation", "Implementation", "Validation"]
        : ["Decisión", "Estado", "Conversación", "Implementación", "Validación"];
    const pipeline =
      locale === "en"
        ? ["Foundations", "Figma components", "Rosetta Storybook", "NPM package", "Product"]
        : ["Foundations", "Componentes Figma", "Rosetta Storybook", "Paquete NPM", "Producto"];
    const loop =
      locale === "en"
        ? ["Design + rules", "Agents / MCP / API", "Implementation", "Human review", "Iteration"]
        : ["Diseño + reglas", "Agentes / MCP / API", "Implementación", "Revisión humana", "Iteración"];
    const humanKey = locale === "en" ? "Human review" : "Revisión humana";

    return {
      role: <RosettaEcosystem />,
      "decision-01": (
        <div
          className="cx-diagram cx-collab"
          aria-label={locale === "en" ? "Visible cycle" : "Ciclo visible"}
        >
          {cycle.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>
      ),
      "decision-02": (
        <div
          className="cx-diagram cx-reuse"
          aria-label={locale === "en" ? "Flow reuse" : "Reutilización del flujo"}
        >
          <div className="is-origin">Conecta</div>
          <span>→</span>
          <div className="is-core">{locale === "en" ? "Rosetta pilot" : "Piloto Rosetta"}</div>
          <span>→</span>
          <div className="cx-reuse-grid">
            <b>{locale === "en" ? "Project B" : "Proyecto B"}</b>
            <b>{locale === "en" ? "Project C" : "Proyecto C"}</b>
            <b>{locale === "en" ? "Project D" : "Proyecto D"}</b>
          </div>
        </div>
      ),
      "design-system": (
        <div
          className="cx-diagram cx-pipeline"
          aria-label={locale === "en" ? "From foundations to product" : "De foundations a producto"}
        >
          {pipeline.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>
      ),
      ai: (
        <div
          className="cx-diagram cx-loop"
          aria-label={locale === "en" ? "Orchestration loop" : "Loop de orquestación"}
        >
          {loop.map((step) => (
            <div key={step} className={step === humanKey ? "is-value" : undefined}>
              {step}
            </div>
          ))}
        </div>
      ),
    };
  }, [locale]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="rosetta" className="rosetta-case">
      <CaseArticle content={content} diagrams={diagrams} heroToneClass="blue" />
    </CaseLayout>
  );
}
