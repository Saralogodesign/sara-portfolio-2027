import type { ReactNode } from "react";
import type { CaseStudyContent } from "../content/types";
import CaseMedia from "./CaseMedia";

type Props = {
  content: CaseStudyContent;
  /** Diagramas opcionales por id de sección */
  diagrams?: Record<string, ReactNode>;
  /** Clase del bloque hero art (tone) */
  heroToneClass?: string;
};

/** Cabecera + secciones de texto/media. Los diagramas se inyectan por section.id */
export default function CaseArticle({ content, diagrams = {}, heroToneClass = "" }: Props) {
  const { hero, sections, closing } = content;

  return (
    <>
      <section className="case-hero">
        <p className="project-meta">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="case-subtitle">{hero.subtitle}</p>
        {hero.lead ? <p className="eh-lead">{hero.lead}</p> : null}
        <p className="cx-skills">{hero.skills}</p>
        <dl className="conecta-meta compact">
          {hero.meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <div
          className={`case-art ${heroToneClass} cx-hero-art`.trim()}
          aria-hidden={hero.heroMedia?.src ? undefined : true}
        >
          {hero.heroMedia?.src ? (
            <img src={hero.heroMedia.src} alt={hero.heroMedia.alt} />
          ) : (
            <>
              <span>{hero.artLabel}</span>
              <strong>{hero.artTitle}</strong>
              <i aria-hidden="true">{hero.artHint}</i>
            </>
          )}
        </div>
        {hero.heroNote ? <p className="eh-hero-note">{hero.heroNote}</p> : null}
      </section>

      {sections.map((section) => {
        const toneClass =
          section.tone === "dark" ? "cx-dark" : section.tone === "soft" ? "cx-soft" : "";
        return (
          <section key={section.id} className={`cx-section cx-pad ${toneClass}`.trim()}>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <div className="cx-prose">
              {section.paragraphs.map((p, i) => (
                <p key={`${section.id}-${i}`}>{p}</p>
              ))}
            </div>
            {diagrams[section.id] ?? null}
            {section.media?.map((m) => (
              <CaseMedia key={m.id} media={m} />
            ))}
          </section>
        );
      })}

      <section className="cx-section cx-pad cx-dark cx-close">
        <p className="eyebrow">{closing.eyebrow}</p>
        <h2>{closing.title}</h2>
        <div className="cx-tech" role="list" aria-label="Habilidades y herramientas">
          {closing.skills.map((item) => (
            <span key={item} role="listitem">
              {item}
            </span>
          ))}
        </div>
        <p className="cx-closing">{closing.text}</p>
      </section>
    </>
  );
}
