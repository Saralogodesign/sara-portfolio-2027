import { Link } from "react-router-dom";
import { useMemo, type ReactNode } from "react";
import { getSite } from "../content/site";
import LanguageToggle from "../i18n/LanguageToggle";
import { useLocale } from "../i18n/LocaleContext";
import { getUi } from "../i18n/ui";
import EmailLink from "./EmailLink";
import MoreProjectsCarousel from "./MoreProjectsCarousel";

type Props = {
  children: ReactNode;
  className?: string;
  currentSlug: string;
};

export default function CaseLayout({ children, className = "", currentSlug }: Props) {
  const { locale } = useLocale();
  const site = useMemo(() => getSite(locale), [locale]);
  const ui = useMemo(() => getUi(locale), [locale]);

  return (
    <div className={`case-page ${className}`.trim()}>
      <a className="skip-link" href="#case-main">
        {ui.skipToContent}
      </a>
      <header className="case-nav">
        <Link className="brand" to="/" aria-label={ui.homeAria}>
          {site.brand}
          <span>.</span>
        </Link>
        <div className="case-nav-end">
          <LanguageToggle />
          <Link to={site.caseFooter.backHref}>{site.caseFooter.backLabel}</Link>
        </div>
      </header>

      <main id="case-main">
        <article>{children}</article>
        <MoreProjectsCarousel currentSlug={currentSlug} />
      </main>

      <footer className="case-footer">
        <div className="case-footer-socials" aria-label={ui.socialsAria}>
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
