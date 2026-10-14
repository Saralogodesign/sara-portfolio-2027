import { useEffect, useRef } from "react";

const ICONS = {
  figma: "/images/projects/rosetta/icons/figma.png",
  mcp: "/images/projects/rosetta/icons/mcp.png",
  cursor: "/images/projects/rosetta/icons/cursor.png",
  chatgpt: "/images/projects/rosetta/icons/chatgpt.png",
  notion: "/images/projects/rosetta/icons/notion.webp",
  supabase: "/images/projects/rosetta/icons/supabase.png",
  vercel: "/images/projects/rosetta/icons/vercel.png",
  github: "/images/projects/rosetta/icons/github.png",
} as const;

function EcoIcon({ src }: { src: string }) {
  return <img className="ro-eco-logo" src={src} alt="" aria-hidden="true" />;
}

function EcoCard({
  id,
  label,
  note,
  icon,
  kind = "default",
}: {
  id: string;
  label: string;
  note: string;
  icon?: string;
  kind?: "source" | "core" | "default" | "stack";
}) {
  return (
    <div className={`ro-eco-card is-${kind} is-${id}`}>
      <span className="ro-eco-icon">
        {icon ? (
          <EcoIcon src={icon} />
        ) : (
          <span className="ro-eco-mark" aria-hidden="true">
            R
          </span>
        )}
      </span>
      <strong>{label}</strong>
      <em>{note}</em>
    </div>
  );
}

/** Enlace bidireccional Figma ↔ agente, con MCP chiquitín. */
function McpBridge({ label }: { label: string }) {
  return (
    <div className="ro-eco-mcp" aria-hidden="true" title={label}>
      <span className="ro-eco-mcp-rail">
        <span className="ro-eco-mcp-pulse is-forth" />
        <span className="ro-eco-mcp-pulse is-back" />
      </span>
      <span className="ro-eco-mcp-badge">
        <img src={ICONS.mcp} alt="" />
        <b>MCP</b>
      </span>
    </div>
  );
}

/** Ecosistema de construcción de Rosetta según el flujo real. */
export default function RosettaEcosystem() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotion = () => {
      el.classList.toggle("is-static", motion.matches);
    };
    applyMotion();
    motion.addEventListener("change", applyMotion);

    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-paused", !entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    return () => {
      motion.removeEventListener("change", applyMotion);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cx-diagram ro-eco"
      role="img"
      aria-label="Flujo de construcción: Figma conecta de forma bidireccional con Cursor y ChatGPT vía MCP API. Cursor alimenta Notion para seguimiento. Cursor y ChatGPT pasan por el changelog de GitHub hacia Rosetta, Supabase y la publicación en Vercel."
    >
      <p className="ro-eco-kicker">Figma como fuente de verdad · orquestación con IA</p>

      <div className="ro-eco-board">
        <div className="ro-eco-main">
          {/* Columna agentes: Notion sale de Cursor */}
          <div className="ro-eco-notion">
            <EcoCard
              id="notion"
              label="Notion"
              note="Seguimiento · actas · texto"
              icon={ICONS.notion}
            />
          </div>
          <span className="ro-eco-arrow-up" aria-hidden="true">
            <span className="ro-eco-arrow-up-line" />
            <span className="ro-eco-arrow-up-head" />
          </span>

          <div className="ro-eco-source">
            <EcoCard
              id="figma"
              label="Figma"
              note="Fuente de verdad"
              icon={ICONS.figma}
              kind="source"
            />
          </div>

          <div className="ro-eco-mcp-cursor">
            <McpBridge label="MCP API · Figma ↔ Cursor" />
          </div>
          <div className="ro-eco-mcp-chatgpt">
            <McpBridge label="MCP API · Figma ↔ ChatGPT" />
          </div>

          <div className="ro-eco-cursor">
            <EcoCard
              id="cursor"
              label="Cursor"
              note="Agente de código"
              icon={ICONS.cursor}
            />
          </div>
          <div className="ro-eco-chatgpt">
            <EcoCard
              id="chatgpt"
              label="ChatGPT"
              note="Orquestación"
              icon={ICONS.chatgpt}
            />
          </div>

          <div className="ro-eco-join" aria-hidden="true">
            <span className="ro-eco-brace" />
            <span className="ro-eco-join-line">
              <span className="ro-eco-join-pulse" />
            </span>
          </div>

          <div className="ro-eco-stack">
            <EcoCard
              id="github"
              label="GitHub"
              note="Changelog"
              icon={ICONS.github}
              kind="stack"
            />
            <span className="ro-eco-dash" aria-hidden="true" />
            <EcoCard id="rosetta" label="Rosetta" note="Plataforma" kind="core" />
            <span className="ro-eco-dash" aria-hidden="true" />
            <EcoCard
              id="supabase"
              label="Supabase"
              note="Datos y auth"
              icon={ICONS.supabase}
              kind="stack"
            />
            <span className="ro-eco-dash" aria-hidden="true" />
            <EcoCard
              id="vercel"
              label="Vercel"
              note="Publicación"
              icon={ICONS.vercel}
              kind="stack"
            />
          </div>
        </div>
      </div>

      <p className="ro-eco-caption">
        Figma ↔ Cursor y Figma ↔ ChatGPT por MCP API (ida y vuelta). Cursor documenta el seguimiento
        en Notion. Ambos agentes pasan por el changelog de GitHub hacia Rosetta, Supabase y Vercel.
      </p>
    </div>
  );
}
