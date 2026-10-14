import {
  Accessibility,
  Archive,
  Blocks,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const gates = [
  { n: "01", title: "Brand", note: "Coherencia con logo, tono y guidelines.", mark: "orange" },
  { n: "02", title: "Tokens", note: "Sin valores aislados ni duplicados.", mark: "blue" },
  { n: "03", title: "Accessibility", note: "WCAG, foco, teclado y target.", mark: "green" },
  { n: "04", title: "API", note: "Properties y estados acordados con código.", mark: "navy" },
  { n: "05", title: "Documentation", note: "Uso, do / do not, specs y handoff completos.", mark: "brown" },
];

const rights: { topic: string; who: string; Icon: LucideIcon }[] = [
  { topic: "Foundations", who: "System Owner + Design", Icon: Layers },
  { topic: "Component API", who: "Design + Engineering", Icon: Blocks },
  { topic: "Accesibilidad", who: "A11y Reviewer", Icon: Accessibility },
  { topic: "Release", who: "System Owner", Icon: Rocket },
  { topic: "Deprecación", who: "Council completo", Icon: Archive },
];

const doneItems = [
  "tokens",
  "estados",
  "documentación",
  "accesibilidad",
  "revisión técnica",
  "versión",
  "comunicación",
];

export default function EscuelaGovernance() {
  return (
    <div className="cx-diagram eh-governance" aria-label="Gobernanza del sistema en Figma">
      <header className="eh-gov-head">
        <p className="eh-gov-eyebrow">Design System · Gobernanza · Figma</p>
      </header>

      <section className="eh-gov-block is-white">
        <p className="eh-gov-kicker">01 / Quality gates</p>
        <div className="eh-gov-gates">
          {gates.map((gate) => (
            <article key={gate.title}>
              <p>
                <i className={`is-${gate.mark}`} aria-hidden="true" />
                {gate.n} · {gate.title}
              </p>
              <span>{gate.note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="eh-gov-block is-white">
        <p className="eh-gov-kicker">02 / Decision rights</p>
        <ul className="eh-gov-rights">
          {rights.map(({ topic, who, Icon }) => (
            <li key={topic}>
              <Icon className="eh-gov-rights-icon" aria-hidden="true" strokeWidth={2} />
              <strong>{topic}</strong>
              <span>{who}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="eh-gov-done" aria-label="Definition of done">
        <p>Definition of done</p>
        <ul>
          {doneItems.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
