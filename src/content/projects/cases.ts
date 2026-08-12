import type { CaseStudyContent } from "../types";
import { conectaCase } from "./conecta";
import { cucharitaCase } from "./cucharita";
import { escuelaCase } from "./escuela";
import { rosettaCase } from "./rosetta";
import { violetaCase } from "./violeta";

export { conectaCase, cucharitaCase, escuelaCase, rosettaCase, violetaCase };

export const caseStudies: CaseStudyContent[] = [
  rosettaCase,
  conectaCase,
  escuelaCase,
  violetaCase,
  cucharitaCase,
];

export const getCaseStudy = (slug: string): CaseStudyContent | undefined =>
  caseStudies.find((study) => study.slug === slug);
