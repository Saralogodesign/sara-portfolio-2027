import type { MouseEvent } from "react";
import { useLocale } from "./LocaleContext";

type Props = {
  className?: string;
};

/** Interruptor: izquierda = EN, derecha = ES */
export default function LanguageToggle({ className = "" }: Props) {
  const { locale, setLocale } = useLocale();
  const isEs = locale === "es";

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
        className={`lang-toggle-label${!isEs ? " is-active" : ""}`}
        aria-pressed={!isEs}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle-track${isEs ? " is-es" : " is-en"}`}
        aria-label={isEs ? "Switch to English" : "Cambiar a español"}
        onClick={() => setLocale(isEs ? "en" : "es")}
      >
        <span className="lang-toggle-knob" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={`lang-toggle-label${isEs ? " is-active" : ""}`}
        aria-pressed={isEs}
        onClick={() => setLocale("es")}
      >
        ES
      </button>
    </div>
  );
}
