import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { site } from "../content/site";
import EmailLink from "./EmailLink";
import MoreProjectsCarousel from "./MoreProjectsCarousel";

type Props = {
  children: ReactNode;
  className?: string;
  currentSlug: string;
};

export default function CaseLayout({ children, className = "", currentSlug }: Props) {
  return (
    <div className={`case-page conecta-case ${className}`.trim()}>
      <a className="skip-link" href="#case-main">
        Saltar al contenido
      </a>
      <header className="case-nav">
        <Link className="brand" to="/" aria-label="Ir al inicio">
          {site.brand}
          <span>.</span>
        </Link>
        <Link to={site.caseFooter.backHref}>{site.caseFooter.backLabel}</Link>
      </header>

      <main id="case-main">
        <article>{children}</article>
        <MoreProjectsCarousel currentSlug={currentSlug} />
      </main>

      <footer className="case-footer">
        <div className="case-footer-socials" aria-label="Redes sociales">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.links.medium} target="_blank" rel="noopener noreferrer">
            Medium
          </a>
        </div>
        <p>{site.caseFooter.copyright}</p>
        <EmailLink>{site.caseFooter.contactLabel}</EmailLink>
      </footer>
    </div>
  );
}
