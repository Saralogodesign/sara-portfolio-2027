import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmailLink from "../components/EmailLink";
import SplitFlapRole from "../components/SplitFlapRole";
import { CaseVideo } from "../components/CaseMedia";
import { projects } from "../content/projects";
import { site } from "../content/site";

function ProjectCover({
  image,
  video,
  title,
  tone,
  index,
}: {
  image?: string;
  video?: string;
  title: string;
  tone: string;
  index: number;
}) {
  const [broken, setBroken] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showVideo = Boolean(video) && !broken && !reduceMotion;
  const showImage = Boolean(image) && !showVideo;

  return (
    <div className={`project-art ${tone}`} aria-hidden="true">
      {showVideo ? (
        <CaseVideo src={video!} poster={image} alt="" onError={() => setBroken(true)} />
      ) : showImage ? (
        <img src={image} alt="" onError={() => setBroken(true)} />
      ) : (
        <>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{title}</strong>
        </>
      )}
    </div>
  );
}

function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className} aria-label="Redes sociales">
      <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        GH
      </a>
      <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        in
      </a>
      <a href={site.links.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
        M
      </a>
      <EmailLink aria-label="Email">
        <svg className="hero-social-mail" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M3.5 5.75h17a1.25 1.25 0 0 1 1.25 1.25v10a1.25 1.25 0 0 1-1.25 1.25h-17A1.25 1.25 0 0 1 2.25 17V7A1.25 1.25 0 0 1 3.5 5.75Zm.75 2.03V17h15.5V7.78l-7.02 4.45a1.5 1.5 0 0 1-1.46 0L4.25 7.78Zm1.1-1.28 6.2 3.93a.5.5 0 0 0 .5 0l6.2-3.93H5.35Z"
          />
        </svg>
      </EmailLink>
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState<"grid" | "timeline">("grid");
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const hasCv = Boolean(site.links.cv) && site.links.cv !== "#";

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const sync = () => {
      setNarrow(mq.matches);
      if (!mq.matches) setMenuOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("view") === "timeline") {
      setView("timeline");
    }

    const onScroll = () => setNavScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    type RGB = [number, number, number];
    type Theme = {
      id: string;
      bg: RGB;
      fg: RGB;
      muted: RGB;
      accent: RGB;
      accentContrast: RGB;
      surface: RGB;
      line: RGB;
      lineAlpha: number;
      ctaBg: RGB;
      ctaFg: RGB;
    };

    const themes: Theme[] = [
      {
        id: "work",
        bg: [248, 249, 247],
        fg: [25, 25, 25],
        muted: [85, 85, 85],
        accent: [196, 36, 74],
        accentContrast: [255, 255, 255],
        surface: [236, 238, 233],
        line: [25, 25, 25],
        lineAlpha: 0.16,
        ctaBg: [196, 36, 74],
        ctaFg: [255, 255, 255],
      },
      {
        id: "about",
        bg: [196, 36, 74],
        fg: [255, 255, 255],
        muted: [255, 224, 230],
        accent: [244, 168, 184],
        accentContrast: [25, 25, 25],
        surface: [168, 32, 62],
        line: [255, 255, 255],
        lineAlpha: 0.28,
        ctaBg: [255, 255, 255],
        ctaFg: [196, 36, 74],
      },
      {
        id: "lab",
        bg: [10, 10, 10],
        fg: [248, 249, 247],
        muted: [180, 176, 170],
        accent: [244, 168, 184],
        accentContrast: [10, 10, 10],
        surface: [36, 36, 36],
        line: [255, 255, 255],
        lineAlpha: 0.32,
        ctaBg: [248, 249, 247],
        ctaFg: [10, 10, 10],
      },
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const mix = (a: RGB, b: RGB, t: number): RGB => [
      Math.round(lerp(a[0], b[0], t)),
      Math.round(lerp(a[1], b[1], t)),
      Math.round(lerp(a[2], b[2], t)),
    ];

    const mixTheme = (from: Theme, to: Theme, t: number): Theme => ({
      id: to.id,
      bg: mix(from.bg, to.bg, t),
      fg: mix(from.fg, to.fg, t),
      muted: mix(from.muted, to.muted, t),
      accent: mix(from.accent, to.accent, t),
      accentContrast: mix(from.accentContrast, to.accentContrast, t),
      surface: mix(from.surface, to.surface, t),
      line: mix(from.line, to.line, t),
      lineAlpha: lerp(from.lineAlpha, to.lineAlpha, t),
      ctaBg: mix(from.ctaBg, to.ctaBg, t),
      ctaFg: mix(from.ctaFg, to.ctaFg, t),
    });

    const applyTheme = (theme: Theme) => {
      const root = document.documentElement;
      const rgb = (c: RGB) => `${c[0]}, ${c[1]}, ${c[2]}`;
      root.style.setProperty("--page-bg", `rgb(${rgb(theme.bg)})`);
      root.style.setProperty("--fg", `rgb(${rgb(theme.fg)})`);
      root.style.setProperty("--fg-muted", `rgb(${rgb(theme.muted)})`);
      root.style.setProperty("--accent", `rgb(${rgb(theme.accent)})`);
      root.style.setProperty("--accent-contrast", `rgb(${rgb(theme.accentContrast)})`);
      root.style.setProperty("--surface", `rgb(${rgb(theme.surface)})`);
      root.style.setProperty("--line", `rgba(${rgb(theme.line)}, ${theme.lineAlpha})`);
      root.style.setProperty("--cta-bg", `rgb(${rgb(theme.ctaBg)})`);
      root.style.setProperty("--cta-fg", `rgb(${rgb(theme.ctaFg)})`);
    };

    const sections = [
      { id: "work", el: document.getElementById("work") },
      { id: "about", el: document.getElementById("about") },
      { id: "lab", el: document.getElementById("lab") },
    ];

    const onThemeScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let from = themes[0];
      let to = themes[0];
      let t = 0;

      // Zona media junto al límite: +10% (más elegante) y sin mezclar toda la sección
      const blendPx = Math.min(308, Math.max(220, window.innerHeight * 0.24 * 1.1));
      // "Smootherstep" (curva quintica): transiciones más suaves que smoothstep
      const smoothstep = (x: number) => {
        const s = Math.min(1, Math.max(0, x));
        return s * s * s * (s * (s * 6 - 15) + 10);
      };

      for (let i = 0; i < sections.length; i++) {
        const el = sections[i].el;
        if (!el) continue;
        const top = el.offsetTop;
        const next = sections[i + 1]?.el;
        const bottom = next ? next.offsetTop : top + el.offsetHeight;
        if (y >= top && y < bottom) {
          from = themes[i];
          to = themes[Math.min(i + 1, themes.length - 1)];
          if (next && from.id !== to.id) {
            const blendStart = bottom - blendPx;
            t = y <= blendStart ? 0 : smoothstep((y - blendStart) / blendPx);
          } else {
            t = 0;
          }
          break;
        }
        if (y >= bottom && i === sections.length - 1) {
          from = themes[i];
          to = themes[i];
          t = 0;
        }
      }

      applyTheme(t > 0 && from.id !== to.id ? mixTheme(from, to, t) : from);
    };

    onThemeScroll();
    window.addEventListener("scroll", onThemeScroll, { passive: true });

    const revealEls = document.querySelectorAll(".reveal, .tl-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onThemeScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <a className="skip-link" href="#work">
        Saltar a proyectos
      </a>
      <header className={`site-nav ${navScrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label="Ir al inicio">
          {site.brand}
          <span>.</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
          <i />
        </button>
        <nav
          id="site-menu"
          aria-label="Navegación principal"
          aria-hidden={narrow && !menuOpen}
          inert={narrow && !menuOpen ? true : undefined}
          onClick={() => setMenuOpen(false)}
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              <span>{item.label}</span>
            </a>
          ))}
          <EmailLink className="nav-cta">Contacto</EmailLink>
          <SocialLinks className="nav-socials" />
        </nav>
      </header>

      <main id="main">
      <section className="hero" id="top">
        <SocialLinks className="hero-socials" />
        <div className="hero-title">
          <SplitFlapRole words={site.hero.roles} />
          <h1>{site.hero.title}</h1>
        </div>
        <p className="hero-copy">{site.hero.copy}</p>
        <a className="scroll-cue" href="#work">
          {site.hero.scrollLabel}
        </a>
      </section>

      <section className={`work work-${view}`} id="work">
        <div className="section-heading reveal">
          <div>
            <h2>{site.work.title}</h2>
            <p>{site.work.subtitle}</p>
          </div>
          <div className="view-toggle" role="group" aria-label="Cambiar vista de proyectos">
            <button type="button" aria-pressed={view === "grid"} onClick={() => setView("grid")}>
              Grid
            </button>
            <button type="button" aria-pressed={view === "timeline"} onClick={() => setView("timeline")}>
              Timeline
            </button>
          </div>
        </div>
        <div className={`projects ${view}`}>
          {projects.map((project, index) => {
            const fromSide = index % 2 === 0 ? "tl-from-left" : "tl-from-right";
            return (
              <Link
                to={`/projects/${project.slug}`}
                className={view === "timeline" ? `project tl-card ${fromSide}` : "project reveal"}
                key={project.slug}
                aria-label={`Ver proyecto ${project.title}`}
                style={
                  view === "grid"
                    ? {
                        transitionDelay: `${Math.floor(index / 2) * 160 + (index % 2 === 1 ? 200 : 0)}ms`,
                      }
                    : undefined
                }
              >
                <div className="project-copy">
                  <p className="project-meta">
                    {project.year} · {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-cta">{site.work.cta}</span>
                </div>
                {view === "timeline" && <span className="tl-dot" aria-hidden="true" />}
                <ProjectCover
                  image={project.image}
                  video={project.video}
                  title={project.title}
                  tone={project.tone}
                  index={index}
                />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="about reveal" id="about">
        <div className="section-heading light">
          <div>
            <h2>{site.about.title}</h2>
            <p>{site.about.subtitle}</p>
          </div>
        </div>
        <div className="about-grid">
          <p className="about-lead">{site.about.lead}</p>
          <div className="portrait" aria-label="Espacio para tu fotografía">
            {site.about.portraitSrc ? (
              <img src={site.about.portraitSrc} alt="Sara" />
            ) : (
              <span style={{ whiteSpace: "pre-line" }}>{site.about.portraitLabel}</span>
            )}
          </div>
          <div className="about-note">
            <span>✦</span>
            <p style={{ whiteSpace: "pre-line" }}>{site.about.note}</p>
          </div>
        </div>
      </section>

      <section className="lab reveal" id="lab">
        <div className="section-heading light">
          <div>
            <h2>{site.lab.title}</h2>
            <p>{site.lab.subtitle}</p>
          </div>
        </div>
        <div className="lab-grid">
          {site.lab.items.map((item) => (
            <div key={item} style={{ whiteSpace: "pre-line" }}>
              {item}
            </div>
          ))}
        </div>
      </section>
      </main>
      <footer className="reveal" id="contact">
        <h2>
          <EmailLink className="footer-title-link" data-hover={site.footer.titleHover}>
            <span className="footer-title-default">{site.footer.title}</span>
            <span className="footer-title-hover" aria-hidden="true">
              {site.footer.titleHover}
            </span>
          </EmailLink>
        </h2>
        <div className="footer-bottom">
          <p>{site.footer.copyright}</p>
          <div>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {hasCv ? (
              <a href={site.links.cv} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            ) : null}
            <EmailLink aria-label="Email" className="footer-mail-link">
              <svg className="footer-mail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M3.5 5.75h17a1.25 1.25 0 0 1 1.25 1.25v10a1.25 1.25 0 0 1-1.25 1.25h-17A1.25 1.25 0 0 1 2.25 17V7A1.25 1.25 0 0 1 3.5 5.75Zm.75 2.03V17h15.5V7.78l-7.02 4.45a1.5 1.5 0 0 1-1.46 0L4.25 7.78Zm1.1-1.28 6.2 3.93a.5.5 0 0 0 .5 0l6.2-3.93H5.35Z"
                />
              </svg>
            </EmailLink>
          </div>
          <p>{site.footer.location}</p>
        </div>
      </footer>
    </div>
  );
}
