import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProject, projects } from "../data";
import ConectaCase from "./ConectaCase";
import CucharitaCase from "./CucharitaCase";
import EscuelaCase from "./EscuelaCase";
import RosettaCase from "./RosettaCase";
import VioletaCase from "./VioletaCase";

export default function Project() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const isSpecial =
    slug === "conecta" ||
    slug === "rosetta" ||
    slug === "violeta" ||
    slug === "cucharita" ||
    slug === "escuela-hosteleria";

  useEffect(() => {
    if (isSpecial) return;
    window.scrollTo(0, 0);
    document.title = project ? `${project.title} — Sara` : "Proyecto — Sara";
    return () => {
      document.title = "Sara — Product Designer";
    };
  }, [project, isSpecial]);

  if (slug === "conecta") return <ConectaCase />;
  if (slug === "rosetta") return <RosettaCase />;
  if (slug === "violeta") return <VioletaCase />;
  if (slug === "cucharita") return <CucharitaCase />;
  if (slug === "escuela-hosteleria") return <EscuelaCase />;


  if (!project) {
    return (
      <>
        <a className="skip-link" href="#case-content">
          Saltar al contenido
        </a>
        <main id="case-content" className="case-missing">
          <h1>Proyecto no encontrado</h1>
          <Link to="/#work">Volver al portfolio</Link>
        </main>
      </>
    );
  }

  const related = projects.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <a className="skip-link" href="#case-content">
        Saltar al contenido del caso
      </a>
      <main className="case-page">
        <header className="case-nav">
          <Link className="brand" to="/" aria-label="SARA, volver al inicio">
            SARA<span aria-hidden="true">.</span>
          </Link>
          <Link to="/#work">← Todos los proyectos</Link>
        </header>
        <article id="case-content">
        <section className="case-hero">
          <p className="project-meta">
            {project.year} · {project.category}
          </p>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <dl>
            <div>
              <dt>Rol</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Duración</dt>
              <dd>{project.duration}</dd>
            </div>
            <div>
              <dt>Equipo</dt>
              <dd>{project.team}</dd>
            </div>
          </dl>
          <div className={`case-art ${project.tone}`} aria-hidden={project.image ? undefined : true}>
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <>
                <span>
                  CASE STUDY · {project.year}
                </span>
                <strong>{project.title}</strong>
                <i aria-hidden="true">↗</i>
              </>
            )}
          </div>
        </section>
        <section className="case-intro">
          <p className="eyebrow">VISIÓN GENERAL</p>
          <h2>{project.intro}</h2>
          <div className="case-two">
            <div>
              <h3>Contexto</h3>
              <p>{project.context}</p>
            </div>
            <div>
              <h3>Reto</h3>
              <p>{project.challenge}</p>
            </div>
          </div>
        </section>
        <section className="case-dark">
          <p className="eyebrow">DEL PROBLEMA A UNA DIRECCIÓN</p>
          <h2>Proceso</h2>
          <ol>
            {project.process.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
        <section className="case-system">
          <div>
            <p className="eyebrow">ARQUITECTURA</p>
            <h2>Sistema modular</h2>
            <p>{project.system}</p>
          </div>
          <div className="system-diagram">
            <span>INPUT</span>
            <b>PRINCIPIOS</b>
            <b>PATRONES</b>
            <b>EXPERIENCIA</b>
            <span>IMPACTO</span>
          </div>
        </section>
        <section className="case-evolution">
          <p className="eyebrow">ITERAR CON INTENCIÓN</p>
          <h2>Evolución</h2>
          <div>
            {project.evolution.map((item) => (
              <section key={item.label}>
                <div className={`mini-art ${project.tone}`} />
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </section>
            ))}
          </div>
        </section>
        <section className="case-impact">
          <div>
            <p className="eyebrow">RESULTADOS</p>
            <h2>Impacto</h2>
          </div>
          <ul>
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="case-tech">
          <p className="eyebrow">BAJO EL CAPÓ</p>
          <h2>Notas técnicas</h2>
          <div>
            {project.technical.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
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
      </article>
      <footer className="case-footer">
        <Link className="brand" to="/" aria-label="SARA, volver al inicio">
          SARA<span aria-hidden="true">.</span>
        </Link>
        <p>© 2027 Sara — Product Designer</p>
        <a href="/#contact">Hablemos →</a>
      </footer>
    </main>
    </>
  );
}
