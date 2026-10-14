import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, video";
const ZOOMABLE = ".cx-media-zoom, .cx-media-scroll-zoom, .cx-hero-zoom";
const SCROLLABLE = ".cx-media-scroll.has-scroll-hint";

/** Cursor circular custom (solo puntero fino; respeta reduced motion). */
export default function CircleCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const el = dotRef.current;
    const label = labelRef.current;
    if (!el || !label) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const zooming = Boolean(target?.closest(ZOOMABLE));
      const scrolling = !zooming && Boolean(target?.closest(SCROLLABLE));
      const hovering =
        zooming || scrolling || Boolean(target?.closest(INTERACTIVE));
      el.classList.toggle("is-hover", hovering);
      el.classList.toggle("is-zoom", zooming || scrolling);
      el.classList.toggle("is-scroll", scrolling);
      label.textContent = scrolling ? "Scroll" : "zoom";
    };

    const tick = () => {
      x += (tx - x) * 0.28;
      y += (ty - y) * 0.28;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    document.documentElement.classList.add("has-circle-cursor");
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-circle-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={dotRef} className="circle-cursor" aria-hidden="true">
      <span ref={labelRef} className="circle-cursor-label">
        zoom
      </span>
    </div>
  );
}
