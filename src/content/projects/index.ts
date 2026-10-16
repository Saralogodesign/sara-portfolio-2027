/* ============================================================
   LISTADO DE PROYECTOS (HOME)
   Orden = orden en la home. Edita year, category, description, image.
   Cover: /images/projects/{slug}/cover.jpg
   ============================================================ */

import type { ProjectCard } from "../types";

export const projects: ProjectCard[] = [
  {
    slug: "productos-madrid",
    year: "04 · 2026",
    category: "PRODUCT DISCOVERY · EN CURSO",
    title: "Productos de Madrid",
    tone: "ink",
    image: "/images/projects/productos-madrid/carousel.png",
    description: "Definir qué necesita saber un profesional para encontrar un proveedor viable.",
  },
  {
    slug: "rosetta",
    year: "01 · 2026",
    category: "DESIGN SYSTEM · PLATFORM · EN PROCESO",
    title: "Rosetta",
    tone: "blue",
    image: "/images/projects/rosetta/cover.png",
    description: "Convertir un proyecto en un sistema de trabajo compartido, transparente y replicable.",
  },
  {
    slug: "conecta",
    year: "2025",
    category: "PRODUCT DESIGN · MVP",
    title: "Conecta",
    tone: "ink",
    image: "/images/projects/conecta/cover.png",
    video: "/images/projects/conecta/hero.mp4",
    description: "De una oportunidad de negocio a un MVP listo para evolucionar.",
  },
  {
    slug: "escuela-hosteleria",
    year: "2025",
    category: "PRODUCT DESIGN · UI SYSTEM",
    title: "Escuela de Hostelería",
    tone: "teal",
    image: "/images/projects/escuela-hosteleria/cover.jpg",
    description: "Diseñar para que el producto pueda seguir funcionando cuando tú ya no estás.",
  },
  {
    slug: "violeta",
    year: "2024",
    category: "RESEARCH · PRODUCT STRATEGY",
    title: "Violeta",
    tone: "violet",
    image: "/images/projects/violeta/cover.png",
    video: "/images/projects/violeta/resultado.mp4",
    description: "De un problema social complejo a una estrategia de producto viable.",
  },
  {
    slug: "cucharita",
    year: "2024",
    category: "PRODUCT CONCEPT · BRAND",
    title: "Cucharita",
    tone: "navy",
    image: "/images/projects/cucharita/cover.png",
    video: "/images/projects/cucharita/mvp.mp4",
    description: "Bienestar, intimidad y tecnología desde una lógica slow.",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
