import { useState } from "react";

type ButtonType = "org" | "bl" | "bk";
type ButtonSize = "normal" | "medium" | "small";
type ButtonState = "default" | "hover" | "focus" | "click" | "disabled" | "loading";
type ButtonIcon = "none" | "left" | "right";
type StageSurface = "cream" | "blue" | "orange";

const TYPES: { id: ButtonType; label: string }[] = [
  { id: "org", label: "Org" },
  { id: "bl", label: "Blue" },
  { id: "bk", label: "Black" },
];

const SIZES: { id: ButtonSize; label: string }[] = [
  { id: "normal", label: "Normal" },
  { id: "medium", label: "Medium" },
  { id: "small", label: "Small" },
];

const STATES: { id: ButtonState; label: string }[] = [
  { id: "default", label: "Default" },
  { id: "hover", label: "Hover" },
  { id: "focus", label: "Focus" },
  { id: "click", label: "Click" },
  { id: "loading", label: "Loading" },
  { id: "disabled", label: "Disabled" },
];

const ICONS: { id: ButtonIcon; label: string }[] = [
  { id: "none", label: "No" },
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
];

const SURFACES: { id: StageSurface; label: string; swatch: string }[] = [
  { id: "cream", label: "Crema", swatch: "#F4E9DF" },
  { id: "blue", label: "Azul", swatch: "#5777DE" },
  { id: "orange", label: "Naranja", swatch: "#FF8945" },
];

function ArrowIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`eh-btn-icon${flip ? " is-flip" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h12M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="eh-btn-icon is-spin" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeDasharray="36 20"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PropertyRow<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; label: string; swatch?: string }[];
  onChange: (next: T) => void;
}) {
  return (
    <div className="eh-btn-prop">
      <span className="eh-btn-prop-label">{label}</span>
      <div className="eh-btn-prop-options" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={[
              value === option.id ? "is-active" : "",
              option.swatch ? "has-swatch" : "",
            ]
              .filter(Boolean)
              .join(" ") || undefined}
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
          >
            {option.swatch ? (
              <span
                className="eh-btn-swatch"
                style={{ background: option.swatch }}
                aria-hidden="true"
              />
            ) : null}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function EscuelaButtonPlayground() {
  const [type, setType] = useState<ButtonType>("org");
  const [size, setSize] = useState<ButtonSize>("normal");
  const [state, setState] = useState<ButtonState>("default");
  const [icon, setIcon] = useState<ButtonIcon>("none");
  const [surface, setSurface] = useState<StageSurface>("cream");

  const showSpinner = state === "loading";
  const showLeft = icon === "left" && !showSpinner;
  const showRight = icon === "right" && !showSpinner;
  const disabled = state === "disabled" || state === "loading";

  return (
    <div
      className="cx-diagram eh-btn-playground"
      aria-label="Artefacto de handoff · Figma como fuente de verdad"
    >
      <div className={`eh-btn-stage is-surface-${surface}`}>
        <div className="eh-btn-stage-top">
          <p className="eh-btn-stage-label">Preview · Button</p>
          <div className="eh-btn-surface-chips" role="group" aria-label="Fondo">
            {SURFACES.map((option) => (
              <button
                key={option.id}
                type="button"
                className={surface === option.id ? "is-active" : undefined}
                aria-pressed={surface === option.id}
                aria-label={`Fondo ${option.label}`}
                title={option.label}
                onClick={() => setSurface(option.id)}
              >
                <span style={{ background: option.swatch }} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={[
            "eh-ds-btn",
            `is-${type}`,
            `is-${size}`,
            `is-${state}`,
            icon !== "none" ? `has-icon-${icon}` : "",
            showSpinner ? "has-icon-right" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          disabled={disabled}
          aria-busy={state === "loading" || undefined}
        >
          {showLeft ? <ArrowIcon flip /> : null}
          <span>Label</span>
          {showSpinner ? <SpinnerIcon /> : showRight ? <ArrowIcon /> : null}
        </button>
        <p className="eh-btn-formula" aria-live="polite">
          Type={type === "org" ? "Org" : type === "bl" ? "Bl" : "Bk"} · Size=
          {size[0].toUpperCase() + size.slice(1)} · State=
          {state[0].toUpperCase() + state.slice(1)} · Icon=
          {icon === "none" ? "No" : icon[0].toUpperCase() + icon.slice(1)}
        </p>
      </div>

      <div className="eh-btn-panel">
        <p className="eh-btn-panel-title">Properties</p>
        <PropertyRow label="Fondo" value={surface} options={SURFACES} onChange={setSurface} />
        <PropertyRow label="Type" value={type} options={TYPES} onChange={setType} />
        <PropertyRow label="Size" value={size} options={SIZES} onChange={setSize} />
        <PropertyRow label="State" value={state} options={STATES} onChange={setState} />
        <PropertyRow label="Icon" value={icon} options={ICONS} onChange={setIcon} />
      </div>
    </div>
  );
}
