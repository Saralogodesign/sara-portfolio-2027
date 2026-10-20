import { useEffect, useMemo, useRef } from "react";
import { useLocale } from "../i18n/LocaleContext";

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

const TOOLS = {
  es: [
    { id: "figma", label: "Figma", note: "Fuente de verdad", icon: ICONS.figma },
    { id: "mcp", label: "MCP", note: "Conexión bidireccional", icon: ICONS.mcp },
    { id: "cursor", label: "Cursor", note: "Agente de código", icon: ICONS.cursor },
    { id: "chatgpt", label: "ChatGPT", note: "Orquestación", icon: ICONS.chatgpt },
    { id: "notion", label: "Notion", note: "Seguimiento · actas · texto", icon: ICONS.notion },
    { id: "github", label: "GitHub", note: "Changelog", icon: ICONS.github },
    { id: "rosetta", label: "Rosetta", note: "Plataforma", icon: undefined as string | undefined },
    { id: "supabase", label: "Supabase", note: "Datos y auth", icon: ICONS.supabase },
    { id: "vercel", label: "Vercel", note: "Publicación", icon: ICONS.vercel },
  ],
  en: [
    { id: "figma", label: "Figma", note: "Source of truth", icon: ICONS.figma },
    { id: "mcp", label: "MCP", note: "Bidirectional link", icon: ICONS.mcp },
    { id: "cursor", label: "Cursor", note: "Coding agent", icon: ICONS.cursor },
    { id: "chatgpt", label: "ChatGPT", note: "Orchestration", icon: ICONS.chatgpt },
    { id: "notion", label: "Notion", note: "Tracking · notes · copy", icon: ICONS.notion },
    { id: "github", label: "GitHub", note: "Changelog", icon: ICONS.github },
    { id: "rosetta", label: "Rosetta", note: "Platform", icon: undefined as string | undefined },
    { id: "supabase", label: "Supabase", note: "Data and auth", icon: ICONS.supabase },
    { id: "vercel", label: "Vercel", note: "Publishing", icon: ICONS.vercel },
  ],
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
  const { locale } = useLocale();
  const tools = TOOLS[locale];
  const copy = useMemo(
    () =>
      locale === "en"
        ? {
            kicker: "Figma as source of truth · AI orchestration",
            aria: "Build flow: Figma connects bidirectionally with Cursor and ChatGPT via MCP API. Cursor feeds Notion for tracking. Cursor and ChatGPT move through the GitHub changelog into Rosetta, Supabase, and Vercel publishing.",
            caption:
              "Figma ↔ Cursor and Figma ↔ ChatGPT via MCP API (round trip). Cursor documents progress in Notion. Both agents move through the GitHub changelog into Rosetta, Supabase, and Vercel.",
            notes: {
              figma: "Source of truth",
              cursor: "Coding agent",
              notion: "Tracking · notes · copy",
              chatgpt: "Orchestration",
              github: "Changelog",
              rosetta: "Platform",
              supabase: "Data and auth",
              vercel: "Publishing",
            },
          }
        : {
            kicker: "Figma como fuente de verdad · orquestación con IA",
            aria: "Flujo de construcción: Figma conecta de forma bidireccional con Cursor y ChatGPT vía MCP API. Cursor alimenta Notion para seguimiento. Cursor y ChatGPT pasan por el changelog de GitHub hacia Rosetta, Supabase y la publicación en Vercel.",
            caption:
              "Figma ↔ Cursor y Figma ↔ ChatGPT por MCP API (ida y vuelta). Cursor documenta el seguimiento en Notion. Ambos agentes pasan por el changelog de GitHub hacia Rosetta, Supabase y Vercel.",
            notes: {
              figma: "Fuente de verdad",
              cursor: "Agente de código",
              notion: "Seguimiento · actas · texto",
              chatgpt: "Orquestación",
              github: "Changelog",
              rosetta: "Plataforma",
              supabase: "Datos y auth",
              vercel: "Publicación",
            },
          },
    [locale],
  );
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
      aria-label={copy.aria}
    >
      <p className="ro-eco-kicker">{copy.kicker}</p>

      {/* Lista compacta · iPad y móvil */}
      <ul className="ro-eco-list">
        {tools.map((tool) => (
          <li key={tool.id} className={`ro-eco-list-item is-${tool.id}`}>
            <span className="ro-eco-list-icon">
              {tool.icon ? (
                <EcoIcon src={tool.icon} />
              ) : (
                <span className="ro-eco-mark" aria-hidden="true">
                  R
                </span>
              )}
            </span>
            <span className="ro-eco-list-text">
              <span className="ro-eco-list-label">{tool.label}</span>
              <span className="ro-eco-list-note">{tool.note}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* Diagrama completo · solo desktop */}
      <div className="ro-eco-board">
        <div className="ro-eco-main">
          <div className="ro-eco-source">
            <EcoCard
              id="figma"
              label="Figma"
              note={copy.notes.figma}
              icon={ICONS.figma}
              kind="source"
            />
          </div>

          <div className="ro-eco-mcp-cursor">
            <McpBridge label="MCP API · Figma ↔ Cursor" />
          </div>

          <div className="ro-eco-cursor">
            <EcoCard
              id="cursor"
              label="Cursor"
              note={copy.notes.cursor}
              icon={ICONS.cursor}
            />
          </div>

          <span className="ro-eco-arrow-up" aria-hidden="true">
            <span className="ro-eco-arrow-up-line" />
            <span className="ro-eco-arrow-up-head" />
          </span>
          <div className="ro-eco-notion">
            <EcoCard
              id="notion"
              label="Notion"
              note={copy.notes.notion}
              icon={ICONS.notion}
            />
          </div>

          <div className="ro-eco-mcp-chatgpt">
            <McpBridge label="MCP API · Figma ↔ ChatGPT" />
          </div>

          <div className="ro-eco-chatgpt">
            <EcoCard
              id="chatgpt"
              label="ChatGPT"
              note={copy.notes.chatgpt}
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
              note={copy.notes.github}
              icon={ICONS.github}
              kind="stack"
            />
            <span className="ro-eco-dash" aria-hidden="true" />
            <EcoCard id="rosetta" label="Rosetta" note={copy.notes.rosetta} kind="core" />
            <span className="ro-eco-dash" aria-hidden="true" />
            <EcoCard
              id="supabase"
              label="Supabase"
              note={copy.notes.supabase}
              icon={ICONS.supabase}
              kind="stack"
            />
            <span className="ro-eco-dash" aria-hidden="true" />
            <EcoCard
              id="vercel"
              label="Vercel"
              note={copy.notes.vercel}
              icon={ICONS.vercel}
              kind="stack"
            />
          </div>
        </div>
      </div>

      <p className="ro-eco-caption">{copy.caption}</p>
    </div>
  );
}
