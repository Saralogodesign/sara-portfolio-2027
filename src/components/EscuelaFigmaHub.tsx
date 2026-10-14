import type { CSSProperties } from "react";

const NODES = [
  { id: "design", label: "Diseño", note: "UI · foundations · sistema" },
  { id: "versions", label: "Seguimiento y versiones", note: "Changelog · historial" },
  { id: "dev", label: "Comunicación con desarrollo", note: "Specs · estados · handoff" },
  { id: "client", label: "Comunicación con cliente", note: "Validación · decisiones" },
  { id: "internal", label: "Comunicación interna", note: "Alineación del equipo" },
  { id: "handoff", label: "Handoff", note: "Fuente única de verdad" },
  { id: "evolution", label: "Entregables de evolución", note: "Continuidad del servicio" },
] as const;

const FIGMA_ICON = "/images/projects/escuela-hosteleria/icon-figma.png?v=2";

/** Figma como centro de comunicación y entrega llave en mano. */
export default function EscuelaFigmaHub() {
  const count = NODES.length;

  return (
    <div
      className="cx-diagram eh-figma-hub"
      role="img"
      aria-label="Figma en el centro: diseño, seguimiento y versiones, comunicación con desarrollo, comunicación con cliente, comunicación interna, handoff y entregables de evolución. Entrega llave en mano."
    >
      <p className="eh-figma-hub-kicker">Figma como centro de comunicación · entrega llave en mano</p>

      <div className="eh-figma-hub-board" style={{ "--eh-hub-n": count } as CSSProperties}>
        <div className="eh-figma-hub-spin">
          <div className="eh-figma-hub-ring" aria-hidden="true" />

          {NODES.map((node, index) => (
            <div
              key={node.id}
              className={`eh-figma-hub-spoke is-${node.id}`}
              style={{ "--eh-hub-i": index } as CSSProperties}
            >
              <article className="eh-figma-hub-node">
                <div className="eh-figma-hub-node-face">
                  <strong>{node.label}</strong>
                  <span>{node.note}</span>
                </div>
              </article>
            </div>
          ))}

          <div className="eh-figma-hub-core" aria-label="Figma · llave en mano">
            <div className="eh-figma-hub-core-face">
              <img src={FIGMA_ICON} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <p className="eh-figma-hub-caption">
        Todo el producto se diseñó, documentó y entregó en Figma: era el punto de encuentro entre
        diseño, cliente y desarrollo.
      </p>
    </div>
  );
}
