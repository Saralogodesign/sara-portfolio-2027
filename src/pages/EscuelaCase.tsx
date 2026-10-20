import { useEffect, useMemo } from "react";
import CaseLayout from "../components/CaseLayout";
import CaseArticle from "../components/CaseArticle";
import EscuelaButtonPlayground from "../components/EscuelaButtonPlayground";
import EscuelaFigmaHub from "../components/EscuelaFigmaHub";
import EscuelaGovernance from "../components/EscuelaGovernance";
import { getCase } from "../content/projects/getCase";
import { useLocale } from "../i18n/LocaleContext";

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

const foundations = [
  {
    id: "color",
    tone: "signal",
    eyebrow: "01 / Color",
    summary: "Logo → primitivos → roles semánticos",
    note: "Orange/500 · text/primary · action/primary",
  },
  {
    id: "shape",
    tone: "signal",
    eyebrow: "02 / Shape",
    summary: "Logo → control · card · field",
    note: "La forma diferencia jerarquía y función.",
  },
  {
    id: "type",
    tone: "foundation",
    eyebrow: "03 / Typography",
    summary: "Grande. Directo. Condensado.",
    note: "Barlow Semi Condensed / headings · Lato / body & interface",
  },
  {
    id: "rhythm",
    tone: "foundation",
    eyebrow: "04 / Rhythm",
    summary: "Base 4 px · proximidad · alineación",
    note: "4 · 8 · 16 · 24 · 32",
  },
  {
    id: "a11y",
    tone: "system",
    eyebrow: "05 / Accessibility",
    summary: "Contraste · foco · target 44 px · color + texto",
    note: "8.36:1 · 2.36:1 · 21:1",
  },
  {
    id: "semantic",
    tone: "system",
    eyebrow: "06 / Semantic UI",
    summary: "Tokens → foundations → componentes accesibles",
    note: "La coherencia nace de sistematizar, no de repetir el logo.",
  },
] as const;

const foundationFlow = ["Logo", "Principios", "Tokens", "Foundations", "Producto"];

const spacingScale = [4, 8, 16, 24, 32];

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
    <>
      <div className="cx-diagram eh-translation" aria-label="Flujo de traducción">
        {translation.map((step) => (
          <div key={step}>{step}</div>
        ))}
      </div>
      <EscuelaFigmaHub />
    </>
  ),
  "decision-01": (
    <div className="cx-diagram eh-foundations" aria-label="Cómo nacen las foundations">
      <header className="eh-foundations-head">
        <p className="eh-foundations-eyebrow">Del logo al sistema</p>
      </header>

      <div className="eh-foundations-source">
        <img
          src="/images/projects/escuela-hosteleria/Logo_escuela.png"
          alt="Logo Escuela Municipal de Hostelería y Alimentación"
        />
      </div>

      <div className="eh-foundations-grid">
        {foundations.map((item) => (
          <article key={item.id} className={`eh-foundations-card is-${item.tone} is-${item.id}`}>
            <p className="eh-foundations-card-eyebrow">{item.eyebrow}</p>

            {item.id === "color" ? (
              <div className="eh-foundations-swatches" aria-hidden="true">
                <span className="is-orange">#FF8945</span>
                <span className="is-black">#000000</span>
                <span className="is-white">#FFFFFF</span>
              </div>
            ) : null}

            {item.id === "shape" ? (
              <div className="eh-foundations-shapes" aria-hidden="true">
                <div>
                  <i className="is-full" />
                  <span>radius/full</span>
                </div>
                <div>
                  <i className="is-12" />
                  <span>radius/12</span>
                </div>
                <div>
                  <i className="is-8" />
                  <span>radius/8</span>
                </div>
              </div>
            ) : null}

            {item.id === "type" ? (
              <p className="eh-foundations-type-sample" aria-hidden="true">
                Grande. Directo. Condensado.
              </p>
            ) : null}

            {item.id === "rhythm" ? (
              <div className="eh-foundations-bars" aria-hidden="true">
                {spacingScale.map((size) => (
                  <div key={size}>
                    <i style={{ width: `${size * 4.5}px` }} />
                    <span>{size} px</span>
                  </div>
                ))}
              </div>
            ) : null}

            {item.id === "a11y" ? (
              <div className="eh-foundations-contrast" aria-hidden="true">
                <span className="is-ok">
                  <strong>8.36:1</strong>
                  Negro / naranja
                </span>
                <span className="is-warn">
                  <strong>2.36:1</strong>
                  Blanco / naranja
                </span>
                <span className="is-max">
                  <strong>21:1</strong>
                  Blanco / negro
                </span>
              </div>
            ) : null}

            {item.id === "semantic" ? (
              <div className="eh-foundations-tokens" aria-hidden="true">
                <span className="is-action">action/primary</span>
                <span className="is-text">text/primary</span>
                <span className="is-surface">surface/default</span>
              </div>
            ) : null}

            <p className="eh-foundations-summary">{item.summary}</p>
            <p className="eh-foundations-note">{item.note}</p>
          </article>
        ))}
      </div>

      <p className="eh-foundations-flow" aria-label="Flujo del sistema">
        {foundationFlow.flatMap((step, index) => {
          const word = (
            <span
              key={step}
              className={index === 0 || index === foundationFlow.length - 1 ? "is-accent" : undefined}
            >
              {step}
            </span>
          );
          if (index === 0) return [word];
          return [
            <span key={`arrow-${step}`} className="eh-foundations-arrow" aria-hidden="true">
              →
            </span>,
            word,
          ];
        })}
      </p>
    </div>
  ),
  "decision-02": (
    <div className="cx-diagram eh-a11y" aria-label="Accessibility by design">
      {a11yEvidence.map((item) => (
        <div key={item.label}>
          <strong>{item.label}</strong>
          <span>{item.note}</span>
        </div>
      ))}
    </div>
  ),
  "decision-03": <EscuelaGovernance />,
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
  const { locale } = useLocale();
  const content = useMemo(() => getCase("escuela-hosteleria", locale)!, [locale]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseLayout currentSlug="escuela-hosteleria" className="escuela-case">
      <CaseArticle
        content={content}
        diagrams={diagrams}
        diagramsAfter={{
          "decision-02": (
            <>
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
              <EscuelaButtonPlayground />
            </>
          ),
        }}
        heroToneClass="teal"
      />
    </CaseLayout>
  );
}
