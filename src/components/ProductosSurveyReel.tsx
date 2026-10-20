import { useEffect, useMemo, useState } from "react";
import { useLocale } from "../i18n/LocaleContext";

type Slice = { label: string; pct: number; color: string };

const SLICES_BY_LOCALE: Record<"es" | "en", Slice[]> = {
  es: [
    { label: "No entrega en mi zona", pct: 55, color: "var(--strawberry)" },
    { label: "Pedido mínimo excesivo", pct: 30, color: "var(--strawberry-400)" },
    { label: "Información insuficiente", pct: 15, color: "var(--strawberry-200)" },
  ],
  en: [
    { label: "No delivery in my area", pct: 55, color: "var(--strawberry)" },
    { label: "Excessive minimum order", pct: 30, color: "var(--strawberry-400)" },
    { label: "Insufficient information", pct: 15, color: "var(--strawberry-200)" },
  ],
};

type Mode = "pie" | "columns" | "bars";

const SEQUENCE: { mode: Mode; ms: number }[] = [
  { mode: "pie", ms: 4200 },
  { mode: "columns", ms: 4200 },
  { mode: "bars", ms: 5200 },
];

function polar(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function piePath(cx: number, cy: number, r: number, start: number, end: number) {
  const a = polar(cx, cy, r, end);
  const b = polar(cx, cy, r, start);
  const large = end - start > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${a.x} ${a.y} A ${r} ${r} 0 ${large} 0 ${b.x} ${b.y} Z`;
}

function PieChart({ active, slices }: { active: boolean; slices: Slice[] }) {
  let angle = 0;
  const arcs = slices.map((slice) => {
    const start = angle;
    const end = angle + slice.pct * 3.6;
    angle = end;
    return { ...slice, d: piePath(100, 100, 78, start, end), start, end };
  });

  return (
    <div className={`pm-reel-stage pm-reel-pie${active ? " is-active" : ""}`}>
      <svg viewBox="0 0 200 200" className="pm-reel-pie-svg" aria-hidden="true">
        {arcs.map((arc, i) => (
          <path
            key={arc.label}
            d={arc.d}
            fill={arc.color}
            style={{ ["--pm-i" as string]: i }}
          />
        ))}
      </svg>
      <ul className="pm-reel-legend">
        {slices.map((slice) => (
          <li key={slice.label}>
            <i style={{ background: slice.color }} aria-hidden="true" />
            <span>{slice.label}</span>
            <strong>{slice.pct}%</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColumnsChart({ active, slices }: { active: boolean; slices: Slice[] }) {
  return (
    <div className={`pm-reel-stage pm-reel-columns${active ? " is-active" : ""}`}>
      <div className="pm-reel-columns-chart" aria-hidden="true">
        {slices.map((slice, i) => (
          <div key={slice.label} className="pm-reel-col" style={{ ["--pm-i" as string]: i }}>
            <strong>{slice.pct}%</strong>
            <div className="pm-reel-col-track">
              <i style={{ height: `${slice.pct}%`, background: slice.color }} />
            </div>
            <span>{slice.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarsChart({ active, slices }: { active: boolean; slices: Slice[] }) {
  return (
    <div className={`pm-reel-stage pm-reel-bars${active ? " is-active" : ""}`}>
      <ul>
        {slices.map((slice, i) => (
          <li key={slice.label} style={{ ["--pm-i" as string]: i }}>
            <div className="pm-reel-bars-meta">
              <span>{slice.label}</span>
              <strong>{slice.pct}%</strong>
            </div>
            <div className="pm-reel-bars-track">
              <i style={{ width: `${slice.pct}%`, background: slice.color }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Props = {
  /** Miniatura de la home: tipografía y paddings más densos */
  compact?: boolean;
};

/** Reel formativo: quesito → columnas → barras con los datos de encuesta HORECA. */
export default function ProductosSurveyReel({ compact = false }: Props) {
  const { locale } = useLocale();
  const slices = useMemo(() => SLICES_BY_LOCALE[locale], [locale]);
  const copy = useMemo(
    () =>
      locale === "en"
        ? {
            aria: "Educational animation of HORECA survey results: offer rejection. 55% no delivery in area, 30% excessive minimum order, 15% insufficient information. Shown as pie, columns, and bars.",
            question: "What would make you reject an offer first?",
            pie: "Pie",
            columns: "Columns",
            bars: "Bars",
          }
        : {
            aria: "Animación formativa de resultados de encuesta HORECA: descarte de oferta. 55% no entrega en zona, 30% pedido mínimo excesivo, 15% información insuficiente. Se muestran en quesito, columnas y barras.",
            question: "¿Qué condición te haría descartar primero una oferta?",
            pie: "Quesito",
            columns: "Columnas",
            bars: "Barras",
          },
    [locale],
  );
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const mode = SEQUENCE[index]!.mode;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % SEQUENCE.length);
    }, SEQUENCE[index]!.ms);
    return () => window.clearTimeout(timer);
  }, [index, reduced]);

  return (
    <div
      className={`pm-reel${compact ? " is-compact" : ""}${reduced ? " is-reduced" : ""}`}
      role="img"
      aria-label={copy.aria}
    >
      <p className="pm-reel-kicker">HORECA · n = 40</p>
      <h3 className="pm-reel-question">{copy.question}</h3>
      <p className="pm-reel-format" aria-live="polite">
        {reduced
          ? copy.bars
          : mode === "pie"
            ? copy.pie
            : mode === "columns"
              ? copy.columns
              : copy.bars}
      </p>
      <div className="pm-reel-stagewrap">
        {reduced ? (
          <BarsChart active slices={slices} />
        ) : (
          <>
            <PieChart active={mode === "pie"} slices={slices} />
            <ColumnsChart active={mode === "columns"} slices={slices} />
            <BarsChart active={mode === "bars"} slices={slices} />
          </>
        )}
      </div>
    </div>
  );
}
