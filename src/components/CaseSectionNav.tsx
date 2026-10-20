import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { getUi } from "../i18n/ui";

export type SectionNavItem = {
  id: string;
  label: string;
};

type Props = {
  items: SectionNavItem[];
};

/** Botón flotante a la derecha con submenú de secciones del case */
export default function CaseSectionNav({ items }: Props) {
  const { locale } = useLocale();
  const ui = useMemo(() => getUi(locale), [locale]);

  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.08, 0.2, 0.4] },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setActiveId(id);
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
    setActiveId(items[0]?.id ?? "");
  };

  return (
    <div className={`case-section-nav${open ? " is-open" : ""}`} ref={rootRef}>
      <div className="case-section-nav-row">
        <button
          type="button"
          className="case-section-top"
          aria-label={locale === "en" ? "Back to top" : "Subir al inicio de la página"}
          onClick={goTop}
        >
          ↑
        </button>
      </div>

      <button
        type="button"
        className="case-section-fab"
        aria-label={open ? ui.closeSections : ui.openSections}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "×" : "☰"}
      </button>

      {open ? (
        <nav id={menuId} className="case-section-menu" aria-label={ui.sectionsAria}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === activeId ? "is-active" : undefined}
              aria-current={item.id === activeId ? "location" : undefined}
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
