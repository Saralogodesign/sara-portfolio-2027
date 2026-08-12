import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { site } from "../content/site";
import { projects } from "../content/projects";

type Props = {
  children: ReactNode;
  className?: string;
  currentSlug: string;
};

export default function CaseLayout({ children, className = "", currentSlug }: Props) {
  const related = projects.filter((item) => item.slug !== currentSlug).slice(0, 3);

  return (
    <>
      <a className="skip-link" href="#case-content">
        Saltar al contenido del caso
      </a>
      <main className={`case-page conecta-case ${className}`.trim()}>
        <header className="case-nav">
          <Link className="brand" to="/" aria-label={`${site.brand}, volver al inicio`}>
            {site.brand}
            <span aria-hidden="true">.</span>
          </Link>
          <Link to={site.caseFooter.backHref}>{site.caseFooter.backLabel}</Link>
        </header>

        <article id="case-content">{children}</article>

        <section className="more-projects" aria-labelledby="more-projects-heading">
          <p className="eyebrow">SEGUIR EXPLORANDO</p>
          <h2 id="more-projects-heading">Más proyectos</h2>
          <div>
            {related.map((item) => (
              <Link
                to={`/projects/${item.slug}`}
                key={item.slug}
                aria-label={`Ver proyecto ${item.title}`}
              >
                <div className={`more-art ${item.tone}`} aria-hidden="true">
                  {item.title}
                </div>
                <p>{item.category}</p>
                <h3>{item.title} →</h3>
              </Link>
            ))}
          </div>
        </section>

        <footer className="case-footer">
          <Link className="brand" to="/" aria-label={`${site.brand}, volver al inicio`}>
            {site.brand}
            <span aria-hidden="true">.</span>
          </Link>
          <p>{site.caseFooter.copyright}</p>
          <a href={site.caseFooter.contactHref}>{site.caseFooter.contactLabel}</a>
        </footer>
      </main>
    </>
  );
}
