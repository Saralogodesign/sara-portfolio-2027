import {
  Accessibility,
  Archive,
  Blocks,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const roles = [
  { verb: "Decide", title: "System Owner", note: "Prioridad, alcance y roadmap." },
  { verb: "Propone", title: "Design Maintainer", note: "Tokens, componentes y documentación." },
  { verb: "Puede bloquear", title: "A11y Reviewer", note: "Contraste, teclado, foco y semántica." },
  { verb: "Coaprueba", title: "Engineering", note: "API, viabilidad y paridad con código." },
];

const lifecycle = [
  { n: "1", title: "Request", note: "Problema + evidencia" },
  { n: "2", title: "Triage", note: "Priorizar o rechazar" },
  { n: "3", title: "Design", note: "Explorar + documentar" },
  { n: "4", title: "Reviews", note: "A11y + ingeniería" },
  { n: "5", title: "Pilot", note: "Probar en producto" },
  { n: "6", title: "Publish", note: "Versionar librería" },
  { n: "7", title: "Monitor", note: "Medir y mantener" },
];

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

      <section className="eh-gov-block is-black">
        <p className="eh-gov-kicker is-orange">01 / Quién gobierna</p>
        <div className="eh-gov-roles">
          {roles.map((role) => (
            <article key={role.title}>
              <span>{role.verb}</span>
              <strong>{role.title}</strong>
              <p>{role.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eh-gov-block is-white">
        <p className="eh-gov-kicker">02 / Flujo de cambio</p>
        <p className="eh-gov-note">
          Una petición no entra directamente en la librería: primero demuestra necesidad, calidad y
          adopción.
        </p>
        <ol className="eh-gov-flow">
          {lifecycle.map((step) => (
            <li key={step.title}>
              <span className="eh-gov-flow-num">{step.n}</span>
              <strong>{step.title}</strong>
              <p>{step.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="eh-gov-block is-white">
        <p className="eh-gov-kicker">03 / Quality gates</p>
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
        <p className="eh-gov-kicker">04 / Decision rights</p>
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
