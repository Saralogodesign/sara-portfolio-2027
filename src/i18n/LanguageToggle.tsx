import type { MouseEvent } from "react";
import { useLocale } from "./LocaleContext";

type Props = {
  className?: string;
};

/** Segmentado EN | ES · mismo patrón que Grid / Timeline, más compacto */
export default function LanguageToggle({ className = "" }: Props) {
  const { locale, setLocale } = useLocale();

  const stop = (event: MouseEvent) => event.stopPropagation();

  return (
    <div
      className={`lang-toggle ${className}`.trim()}
      role="group"
      aria-label="Language"
      onClick={stop}
    >
      <button
        type="button"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={locale === "es"}
        onClick={() => setLocale("es")}
      >
        ES
      </button>
    </div>
  );
}
