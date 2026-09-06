import type { ReactNode } from "react";
import type { CaseSection, CaseStudyContent } from "../content/types";
import CaseMedia, { CaseVideo, isVideoSrc, mediaCaption } from "./CaseMedia";
import CaseSectionNav from "./CaseSectionNav";

type Props = {
  content: CaseStudyContent;
  /** Diagramas opcionales por id de sección */
  diagrams?: Record<string, ReactNode>;
  /** Clase del bloque hero art (tone) */
  heroToneClass?: string;
};

type SectionGroup =
  | { type: "single"; section: CaseSection }
  | { type: "decisions"; sections: CaseSection[] };

function isDecisionSection(section: CaseSection) {
  return section.id.startsWith("decision-");
}

/** Agrupa rachas de decisiones consecutivas (01+02, etc.) para apilarlas */
function groupSections(sections: CaseSection[]): SectionGroup[] {
  const groups: SectionGroup[] = [];
  let i = 0;

  while (i < sections.length) {
    const section = sections[i];
    if (!isDecisionSection(section)) {
      groups.push({ type: "single", section });
      i += 1;
      continue;
    }

    const batch: CaseSection[] = [];
    while (i < sections.length && isDecisionSection(sections[i])) {
      batch.push(sections[i]);
      i += 1;
    }

    if (batch.length >= 2) {
      groups.push({ type: "decisions", sections: batch });
    } else {
      groups.push({ type: "single", section: batch[0] });
    }
  }

  return groups;
}

/** Cabecera + secciones de texto/media. Los diagramas se inyectan por section.id */
export default function CaseArticle({ content, diagrams = {}, heroToneClass = "" }: Props) {
  const { hero, sections, closing } = content;
  const groups = groupSections(sections);

  const navItems = [
    { id: "case-hero", label: "Inicio" },
    ...sections.map((section) => ({
      id: section.id,
      label: section.eyebrow || section.title,
    })),
    { id: "case-close", label: closing.eyebrow || closing.title },
  ];

  const renderSection = (section: CaseSection) => {
    const toneClass =
      section.tone === "dark" ? "cx-dark" : section.tone === "soft" ? "cx-soft" : "";
    return (
      <section
        key={section.id}
        id={section.id}
        className={`cx-section cx-pad ${toneClass}`.trim()}
      >
        <p className="eyebrow">{section.eyebrow}</p>
        <div className="cx-text-row">
          <header className="cx-text-head">
            <h2>{section.title}</h2>
          </header>
          <div className="cx-prose">
            {section.paragraphs.map((p, i) => (
              <p key={`${section.id}-${i}`}>{p}</p>
            ))}
          </div>
        </div>
        {diagrams[section.id] ?? null}
        {section.media?.length ? (
          <div className="cx-media-list">
            {section.media.map((m) => (
              <CaseMedia key={m.id} media={m} />
            ))}
          </div>
        ) : null}
      </section>
    );
  };

  return (
    <>
      <CaseSectionNav items={navItems} />

      <section className="case-hero" id="case-hero">
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
        <figure className="cx-hero-figure">
          <div className={`case-art ${heroToneClass} cx-hero-art`.trim()}>
            {hero.heroMedia?.src ? (
              isVideoSrc(hero.heroMedia.src) ? (
                <CaseVideo
                  src={hero.heroMedia.src}
                  alt={mediaCaption(hero.heroMedia, hero.artHint)}
                  interactive
                  onError={() => {}}
                />
              ) : (
                <img
                  src={hero.heroMedia.src}
                  alt={mediaCaption(hero.heroMedia, hero.artHint)}
                />
              )
            ) : (
              <>
                <span>{hero.artLabel}</span>
                <strong>{hero.artTitle}</strong>
                <i>{hero.artHint}</i>
              </>
            )}
          </div>
          {hero.heroMedia ? (
            <figcaption className="cx-media-caption">
              {mediaCaption(hero.heroMedia, hero.artHint)}
            </figcaption>
          ) : null}
        </figure>
      </section>

      {groups.map((group) => {
        if (group.type === "single") return renderSection(group.section);
        return (
          <div
            key={group.sections.map((s) => s.id).join("-")}
            className="cx-decision-stack"
          >
            {group.sections.map((section) => renderSection(section))}
          </div>
        );
      })}

      <section className="cx-section cx-pad cx-dark cx-close" id="case-close">
        <p className="eyebrow">{closing.eyebrow}</p>
        <h2>{closing.title}</h2>
        <div className="cx-tech">
          {closing.skills.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="cx-closing">{closing.text}</p>
      </section>
    </>
  );
}
