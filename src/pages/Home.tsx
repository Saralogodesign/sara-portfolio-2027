import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import CvPreview from "../components/CvPreview";
import EmailLink from "../components/EmailLink";
import SplitFlapRole from "../components/SplitFlapRole";
import { CaseVideo } from "../components/CaseMedia";
import { showPlayground } from "../config/features";
import { projects } from "../content/projects";
import { site } from "../content/site";

const navItems = showPlayground
  ? site.nav
  : site.nav.filter((item) => item.href !== "#lab");

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
      <EmailLink aria-label="Email">
        <svg className="hero-social-mail" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
          />
        </svg>
      </EmailLink>
      <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg className="hero-social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
      {/* GitHub oculto de momento
      <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg className="hero-social-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
          />
        </svg>
      </a>
      */}
      <a href={site.links.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
        <svg className="hero-social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M13.54 12a6.82 6.82 0 0 1-6.77 6.82A6.82 6.82 0 0 1 0 12a6.82 6.82 0 0 1 6.77-6.82A6.82 6.82 0 0 1 13.54 12Zm7.4 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42Zm3.06 0c0 3.1-.53 5.64-1.19 5.64-.66 0-1.19-2.54-1.19-5.64s.53-5.64 1.19-5.64c.66 0 1.19 2.54 1.19 5.64Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState<"grid" | "timeline">("grid");
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [hideSocials, setHideSocials] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const hasCv = Boolean(site.links.cv) && !site.links.cv.startsWith("#");

  const openCv = () => {
    setMenuOpen(false);
    setCvOpen(true);
  };

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
    const footer = document.getElementById("contact");
    if (!footer) return;

    const sync = () => {
      setHideSocials(footer.getBoundingClientRect().top < window.innerHeight);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
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
        bg: [0, 0, 0],
        fg: [255, 255, 255],
        muted: [180, 176, 170],
        accent: [244, 168, 184],
        accentContrast: [0, 0, 0],
        surface: [24, 24, 24],
        line: [255, 255, 255],
        lineAlpha: 0.28,
        ctaBg: [255, 255, 255],
        ctaFg: [0, 0, 0],
      },
      ...(showPlayground
        ? [
            {
              id: "lab",
              bg: [196, 36, 74] as RGB,
              fg: [255, 255, 255] as RGB,
              muted: [255, 224, 230] as RGB,
              accent: [244, 168, 184] as RGB,
              accentContrast: [196, 36, 74] as RGB,
              surface: [168, 32, 62] as RGB,
              line: [255, 255, 255] as RGB,
              lineAlpha: 0.32,
              ctaBg: [255, 255, 255] as RGB,
              ctaFg: [196, 36, 74] as RGB,
            } satisfies Theme,
          ]
        : []),
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
      // Fondo fresa (Playground): selección negra; resto: fresa
      const isStrawberryBg =
        theme.bg[0] > 150 && theme.bg[1] < 90 && theme.bg[2] < 110;
      root.style.setProperty("--page-bg", `rgb(${rgb(theme.bg)})`);
      root.style.setProperty("--fg", `rgb(${rgb(theme.fg)})`);
      root.style.setProperty("--fg-muted", `rgb(${rgb(theme.muted)})`);
      root.style.setProperty("--accent", `rgb(${rgb(theme.accent)})`);
      root.style.setProperty("--accent-contrast", `rgb(${rgb(theme.accentContrast)})`);
      root.style.setProperty("--surface", `rgb(${rgb(theme.surface)})`);
      root.style.setProperty("--line", `rgba(${rgb(theme.line)}, ${theme.lineAlpha})`);
      root.style.setProperty("--cta-bg", `rgb(${rgb(theme.ctaBg)})`);
      root.style.setProperty("--cta-fg", `rgb(${rgb(theme.ctaFg)})`);
      root.style.setProperty("--selection-bg", isStrawberryBg ? "#000" : "var(--strawberry)");
      root.style.setProperty("--selection-fg", "#fff");
      root.classList.toggle("is-strawberry-bg", isStrawberryBg);
    };

    const sections = [
      { id: "work", el: document.getElementById("work") },
      { id: "about", el: document.getElementById("about") },
      ...(showPlayground
        ? [{ id: "lab", el: document.getElementById("lab") }]
        : []),
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

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onThemeScroll);
      document.documentElement.classList.remove("is-strawberry-bg");
      document.documentElement.style.removeProperty("--selection-bg");
      document.documentElement.style.removeProperty("--selection-fg");
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal, .tl-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0, rootMargin: "0px 0px 22% 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [view]);

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
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <span>{item.label}</span>
            </a>
          ))}
          {hasCv ? (
            <button
              type="button"
              className="nav-cta nav-cv"
              aria-label="Ver currículum"
              onClick={openCv}
            >
              CV
              <Download className="nav-cv-icon" aria-hidden="true" strokeWidth={2.25} />
            </button>
          ) : null}
          <EmailLink className="nav-cta">Contacto</EmailLink>
          <SocialLinks className="nav-socials" />
        </nav>
      </header>

      <SocialLinks className={`hero-socials${hideSocials ? " is-hidden" : ""}`} />

      <main id="main">
      <section className="hero" id="top">
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
                        transitionDelay: `${Math.floor(index / 2) * 90 + (index % 2 === 1 ? 80 : 0)}ms`,
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
          <p className="about-lead" style={{ whiteSpace: "pre-line" }}>{site.about.lead}</p>
          <div className="about-side">
            <div className="portrait" aria-label="Espacio para tu fotografía">
              {site.about.portraitSrc ? (
                <img src={site.about.portraitSrc} alt="Sara" />
              ) : (
                <span style={{ whiteSpace: "pre-line" }}>{site.about.portraitLabel}</span>
              )}
            </div>
            <div className="about-note">
              <span aria-hidden="true">→</span>
              <p style={{ whiteSpace: "pre-line" }}>{site.about.note}</p>
            </div>
          </div>
        </div>
      </section>

      {showPlayground ? (
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
      ) : null}
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
              <button type="button" className="footer-cv" onClick={openCv}>
                CV
              </button>
            ) : null}
            <EmailLink aria-label="Email" className="footer-mail-link">
              <span className="footer-mail-icon" aria-hidden="true" />
            </EmailLink>
          </div>
          <p>{site.footer.location}</p>
        </div>
      </footer>

      {hasCv ? (
        <CvPreview open={cvOpen} src={site.links.cv} onClose={() => setCvOpen(false)} />
      ) : null}
    </div>
  );
}
