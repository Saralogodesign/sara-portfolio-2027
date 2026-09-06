import { Link, useParams } from "react-router-dom";
import type { ComponentType } from "react";
import ConectaCase from "./ConectaCase";
import CucharitaCase from "./CucharitaCase";
import EscuelaCase from "./EscuelaCase";
import RosettaCase from "./RosettaCase";
import VioletaCase from "./VioletaCase";

const casePages: Record<string, ComponentType> = {
  conecta: ConectaCase,
  rosetta: RosettaCase,
  violeta: VioletaCase,
  cucharita: CucharitaCase,
  "escuela-hosteleria": EscuelaCase,
};

export default function Project() {
  const { slug = "" } = useParams();
  const CasePage = casePages[slug];

  if (CasePage) return <CasePage />;

  return (
    <main className="case-missing">
      <h1>Proyecto no encontrado</h1>
      <Link to="/#work">Volver al portfolio</Link>
    </main>
  );
}
