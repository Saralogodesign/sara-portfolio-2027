import { useEffect, useRef } from "react";

export type FigmaCursor = {
  name: string;
  color: string;
};

type Props = {
  cursors: FigmaCursor[];
};

/** Cursores tipo Figma / FigJam, en bucle, encima de una imagen. */
export default function FigmaCursors({ cursors }: Props) {
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
      { threshold: 0.15 },
    );
    io.observe(el);

    return () => {
      motion.removeEventListener("change", applyMotion);
      io.disconnect();
    };
  }, []);

  if (cursors.length === 0) return null;

  return (
    <div className="cx-figma-cursors" ref={ref} aria-hidden="true">
      {cursors.map((cursor, index) => (
        <div
          key={`${cursor.name}-${index}`}
          className={`cx-figma-cursor cx-figma-cursor-${index + 1}`}
          style={{ color: cursor.color }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4.2 2.1 21 12.4l-7.4 1.6 3.9 8.1-2.9 1.4-3.9-8.2-5.7 5.1z"
            />
            <path
              fill="#fff"
              fillOpacity=".22"
              d="M5.4 4.4 18.2 12.3l-6.1 1.3 3.3 6.8-1.4.7-3.4-7-4.7 4.2z"
            />
          </svg>
          <b>{cursor.name}</b>
        </div>
      ))}
    </div>
  );
}
