/* ============================================================
   TIPOS DE CONTENIDO
   ============================================================ */

export type MediaRef = {
  /** Id único del slot (coincide con el archivo esperado en public/images/projects/{slug}/) */
  id: string;
  /** Ruta pública, ej. /images/projects/rosetta/hero.jpg — vacío = placeholder */
  src?: string;
  alt: string;
  /** Texto de ayuda / caption bajo la imagen o en el placeholder */
  caption?: string;
  note?: string;
};

export type MetaItem = { label: string; value: string };

export type ProjectCard = {
  slug: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tone: string;
  /** Cover en la home: /images/projects/{slug}/cover.jpg */
  image?: string;
  subtitle: string;
  role: string;
  duration: string;
  team: string;
  intro: string;
  context: string;
  challenge: string;
  process: string[];
  system: string;
  evolution: { label: string; text: string }[];
  impact: string[];
  technical: string[];
};

export type CaseSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** soft | dark | default */
  tone?: "default" | "soft" | "dark";
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
    heroNote?: string;
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
