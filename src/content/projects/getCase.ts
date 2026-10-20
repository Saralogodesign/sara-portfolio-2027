import type { Locale } from "../../i18n/types";
import type { CaseStudyContent } from "../types";

import { conectaCase } from "./conecta";
import { conectaCaseEn } from "./conecta.en";
import { cucharitaCase } from "./cucharita";
import { cucharitaCaseEn } from "./cucharita.en";
import { escuelaCase } from "./escuela";
import { escuelaCaseEn } from "./escuela.en";
import { productosMadridCase } from "./productos-madrid";
import { productosMadridCaseEn } from "./productos-madrid.en";
import { rosettaCase } from "./rosetta";
import { rosettaCaseEn } from "./rosetta.en";
import { violetaCase } from "./violeta";
import { violetaCaseEn } from "./violeta.en";

const casesByLocale: Record<Locale, Record<string, CaseStudyContent>> = {
  es: {
    rosetta: rosettaCase,
    conecta: conectaCase,
    "productos-madrid": productosMadridCase,
    violeta: violetaCase,
    cucharita: cucharitaCase,
    "escuela-hosteleria": escuelaCase,
  },
  en: {
    rosetta: rosettaCaseEn,
    conecta: conectaCaseEn,
    "productos-madrid": productosMadridCaseEn,
    violeta: violetaCaseEn,
    cucharita: cucharitaCaseEn,
    "escuela-hosteleria": escuelaCaseEn,
  },
};

export function getCase(slug: string, locale: Locale = "es"): CaseStudyContent | undefined {
  return casesByLocale[locale][slug];
}
