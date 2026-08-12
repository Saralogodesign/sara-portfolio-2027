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
    <main className={`case-page conecta-case ${className}`.trim()}>
      <header className="case-nav">
        <Link className="brand" to="/">
          {site.brand}
          <span>.</span>
        </Link>
        <Link to={site.caseFooter.backHref}>{site.caseFooter.backLabel}</Link>
      </header>

      <article>{children}</article>

      <section className="more-projects">
        <p className="eyebrow">SEGUIR EXPLORANDO</p>
        <h2>Más proyectos</h2>
        <div>
          {related.map((item) => (
            <Link to={`/projects/${item.slug}`} key={item.slug}>
              <div className={`more-art ${item.tone}`}>{item.title}</div>
              <p>{item.category}</p>
              <h3>{item.title} →</h3>
            </Link>
          ))}
        </div>
      </section>

      <footer className="case-footer">
        <Link className="brand" to="/">
          {site.brand}
          <span>.</span>
        </Link>
        <p>{site.caseFooter.copyright}</p>
        <a href={site.caseFooter.contactHref}>{site.caseFooter.contactLabel}</a>
      </footer>
    </main>
  );
}
