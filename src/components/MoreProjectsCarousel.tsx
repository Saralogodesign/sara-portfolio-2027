import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../content/projects";
import { site } from "../content/site";
import type { ProjectCard } from "../content/types";

type Props = {
  currentSlug: string;
};

function buildOthers(currentSlug: string): ProjectCard[] {
  const index = projects.findIndex((item) => item.slug === currentSlug);
  if (index < 0 || projects.length < 2) return [];

  const total = projects.length;
  const others: ProjectCard[] = [];
  for (let step = 1; step < total; step += 1) {
    others.push(projects[(index + step) % total]);
  }
  return others;
}

/** Carrusel: anterior + siguientes, con flechas para ver el resto */
export default function MoreProjectsCarousel({ currentSlug }: Props) {
  const others = buildOthers(currentSlug);
  const [offset, setOffset] = useState(() => Math.max(0, others.length - 1));
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const apply = () => setVisibleCount(mq.matches ? 1 : 3);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (others.length === 0) return null;

  const count = Math.min(visibleCount, others.length);
  const visible = Array.from({ length: count }, (_, i) => {
    return others[(offset + i) % others.length];
  });

  const canNavigate = others.length > count;

  const shift = (dir: -1 | 1) => {
    setOffset((current) => (current + dir + others.length) % others.length);
  };

  return (
    <section className="more-projects" aria-labelledby="more-projects-title">
      <p className="eyebrow">SEGUIR EXPLORANDO</p>
      <h2 id="more-projects-title">Más proyectos</h2>

      <div className="more-carousel">
        <button
          type="button"
          className="more-carousel-btn more-carousel-prev"
          aria-label="Proyectos anteriores"
          disabled={!canNavigate}
          onClick={() => shift(-1)}
        >
          ←
        </button>

        <div className="more-carousel-track">
          {visible.map((item) => (
            <Link to={`/projects/${item.slug}`} key={item.slug}>
              <MoreArt item={item} />
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <span className="project-cta">{site.work.cta}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="more-carousel-btn more-carousel-next"
          aria-label="Proyectos siguientes"
          disabled={!canNavigate}
          onClick={() => shift(1)}
        >
          →
        </button>
      </div>
    </section>
  );
}

function MoreArt({ item }: { item: ProjectCard }) {
  const [broken, setBroken] = useState(false);
  const showImage = Boolean(item.image) && !broken;

  return (
    <div className={`more-art ${item.tone}`} aria-hidden="true">
      {showImage ? (
        <img src={item.image} alt="" onError={() => setBroken(true)} />
      ) : (
        item.title
      )}
    </div>
  );
}
