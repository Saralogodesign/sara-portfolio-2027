/* ============================================================
   LISTADO DE PROYECTOS (HOME) — ES / EN
   ============================================================ */

import type { Locale } from "../../i18n/types";
import type { ProjectCard } from "../types";

type ProjectCardBase = Omit<ProjectCard, "category" | "description"> & {
  category: { es: string; en: string };
  description: { es: string; en: string };
};

const projectBase: ProjectCardBase[] = [
  {
    slug: "productos-madrid",
    year: "04 · 2026",
    category: {
      es: "PRODUCT DISCOVERY · EN CURSO",
      en: "PRODUCT DISCOVERY · IN PROGRESS",
    },
    title: "Productos de Madrid",
    tone: "ink",
    image: "/images/projects/productos-madrid/carousel.png",
    description: {
      es: "Definir qué necesita saber un profesional para encontrar un proveedor viable.",
      en: "Define what a professional needs to know to find a viable supplier.",
    },
  },
  {
    slug: "rosetta",
    year: "01 · 2026",
    category: {
      es: "DESIGN SYSTEM · PLATFORM · EN PROCESO",
      en: "DESIGN SYSTEM · PLATFORM · IN PROGRESS",
    },
    title: "Rosetta",
    tone: "blue",
    image: "/images/projects/rosetta/cover.png",
    description: {
      es: "Convertir un proyecto en un sistema de trabajo compartido, transparente y replicable.",
      en: "Turn a project into a shared, transparent, and reusable way of working.",
    },
  },
  {
    slug: "conecta",
    year: "2025",
    category: {
      es: "PRODUCT DESIGN · MVP",
      en: "PRODUCT DESIGN · MVP",
    },
    title: "Conecta",
    tone: "ink",
    image: "/images/projects/conecta/cover.png",
    video: "/images/projects/conecta/hero.mp4",
    description: {
      es: "De una oportunidad de negocio a un MVP listo para evolucionar.",
      en: "From a business opportunity to an MVP ready to evolve.",
    },
  },
  {
    slug: "escuela-hosteleria",
    year: "2025",
    category: {
      es: "PRODUCT DESIGN · UI SYSTEM",
      en: "PRODUCT DESIGN · UI SYSTEM",
    },
    title: "Escuela de Hostelería",
    tone: "teal",
    image: "/images/projects/escuela-hosteleria/cover.jpg",
    description: {
      es: "Diseñar para que el producto pueda seguir funcionando cuando tú ya no estás.",
      en: "Design so the product can keep working when you are no longer there.",
    },
  },
  {
    slug: "violeta",
    year: "2024",
    category: {
      es: "RESEARCH · PRODUCT STRATEGY",
      en: "RESEARCH · PRODUCT STRATEGY",
    },
    title: "Violeta",
    tone: "violet",
    image: "/images/projects/violeta/cover.png",
    video: "/images/projects/violeta/resultado.mp4",
    description: {
      es: "De un problema social complejo a una estrategia de producto viable.",
      en: "From a complex social problem to a viable product strategy.",
    },
  },
  {
    slug: "cucharita",
    year: "2024",
    category: {
      es: "PRODUCT CONCEPT · BRAND",
      en: "PRODUCT CONCEPT · BRAND",
    },
    title: "Cucharita",
    tone: "navy",
    image: "/images/projects/cucharita/cover.png",
    video: "/images/projects/cucharita/mvp.mp4",
    description: {
      es: "Bienestar, intimidad y tecnología desde una lógica slow.",
      en: "Wellbeing, intimacy, and technology through a slow lens.",
    },
  },
];

export function getProjects(locale: Locale): ProjectCard[] {
  return projectBase.map(({ category, description, ...rest }) => ({
    ...rest,
    category: category[locale],
    description: description[locale],
  }));
}

export function getProject(slug: string, locale: Locale = "es") {
  return getProjects(locale).find((project) => project.slug === slug);
}

/** Default Spanish list for any remaining static imports */
export const projects = getProjects("es");
