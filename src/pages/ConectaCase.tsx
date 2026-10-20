import { useEffect, useMemo } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import { getCase } from "../content/projects/getCase";
import { useLocale } from "../i18n/LocaleContext";

export default function ConectaCase() {
  const { locale } = useLocale();
  const content = useMemo(() => getCase("conecta", locale)!, [locale]);

  const diagrams = useMemo(() => {
    const isEn = locale === "en";
    return {
      context: (
        <div className="cx-diagram cx-eco-simple" role="img" aria-label={isEn ? "Conecta ecosystem" : "Ecosistema Conecta"}>
          <div>{isEn ? "Artists" : "Artistas"}</div>
          <span>↔</span>
          <div className="is-core">CONECTA</div>
          <span>↔</span>
          <div>{isEn ? "Venues / promoters" : "Salas / promotores"}</div>
        </div>
      ),
      "decision-01": (
        <div className="cx-diagram cx-compare" aria-label={isEn ? "Onboarding before / after" : "Before / After del onboarding"}>
          <div>
            <p className="cx-label">Before</p>
            <ol>
              <li>{isEn ? "Long signup" : "Registro largo"}</li>
              <li>{isEn ? "Many fields" : "Muchos campos"}</li>
              <li>{isEn ? "Access" : "Acceso"}</li>
            </ol>
            <span className="cx-note">{isEn ? "Commitment before value" : "Compromiso antes del valor"}</span>
          </div>
          <div className="is-after">
            <p className="cx-label">After</p>
            <ol>
              <li>{isEn ? "Minimal access" : "Acceso mínimo"}</li>
              <li className="is-value">{isEn ? "Explore · value" : "Explorar · valor"}</li>
              <li>{isEn ? "Complete profile" : "Completar perfil"}</li>
            </ol>
            <span className="cx-note">{isEn ? "Value before asking for data" : "Valor antes de pedir datos"}</span>
          </div>
        </div>
      ),
      colaboracion: (
        <div className="cx-diagram cx-collab" aria-label={isEn ? "Workflow" : "Flujo de trabajo"}>
          {(isEn
            ? ["Stakeholders", "Workshop / decision", "Figma", "Validation", "Development"]
            : ["Stakeholders", "Workshop / decisión", "Figma", "Validación", "Desarrollo"]
          ).map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>
      ),
      resultado: (
        <div className="cx-diagram cx-months" aria-label={isEn ? "4-month timeline" : "Timeline de 4 meses"}>
          {(isEn
            ? [
                { m: "01", h: "Definition" },
                { m: "02", h: "Flows / workshops" },
                { m: "03", h: "UI / system" },
                { m: "04", h: "Handoff / MVP" },
              ]
            : [
                { m: "01", h: "Definición" },
                { m: "02", h: "Flujos / workshops" },
                { m: "03", h: "UI / sistema" },
                { m: "04", h: "Handoff / MVP" },
              ]
          ).map((item) => (
            <div key={item.h}>
              <strong>{item.m}</strong>
              <span>{item.h}</span>
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
    <CaseLayout currentSlug="conecta" className="conecta-case">
      <CaseArticle content={content} diagrams={diagrams} heroToneClass="navy" />
    </CaseLayout>
  );
}
