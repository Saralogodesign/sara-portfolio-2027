/* ============================================================
   TIPOS DE CONTENIDO
   ============================================================ */

export type MediaRef = {
  /** Id único del slot (coincide con el archivo esperado en public/images/projects/{slug}/) */
  id: string;
  /** Ruta pública, ej. /images/projects/rosetta/hero.jpg — vacío = placeholder */
  src?: string;
  /** Pie de foto o vídeo. También se usa como texto alternativo. */
  caption: string;
  /** Ancho visual en el case: full (100%) o half (~50%) */
  size?: "full" | "half";
  /** Vista con scroll interno sin agrandar el contenedor */
  scroll?: "vertical";
  /** Cursores tipo FigJam encima de la imagen */
  cursors?: { name: string; color: string }[];
  /** Plano detalle / lupa encima de la imagen */
  zoom?: {
    src: string;
    /** Posición de la burbuja sobre la foto, en % */
    left: string;
    top: string;
    /** Tamaño de la burbuja relativo a la foto */
    size?: string;
    /** Punto de la imagen que se enseña dentro de la lupa */
    focus?: string;
    /** Ajuste dentro de la lupa: fill | cover | contain | 260% */
    magnify?: string;
  };
};

export type MetaItem = { label: string; value: string };

/** Tarjeta de la home y del carrusel «más proyectos» */
export type ProjectCard = {
  slug: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tone: string;
  /** Cover en la home: /images/projects/{slug}/cover.jpg */
  image?: string;
  /** Vídeo en la card de la home; `image` se usa como poster */
  video?: string;
};

export type CaseSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** soft | dark | cream | default */
  tone?: "default" | "soft" | "dark" | "cream";
  media?: MediaRef[];
};

export type CaseStudyContent = {
  slug: string;
  documentTitle: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lead?: string;
    skills: string;
    meta: MetaItem[];
    artLabel: string;
    artTitle: string;
    artHint: string;
    heroMedia?: MediaRef;
  };
  sections: CaseSection[];
  closing: {
    eyebrow: string;
    title: string;
    skills: string[];
    text: string;
  };
};
