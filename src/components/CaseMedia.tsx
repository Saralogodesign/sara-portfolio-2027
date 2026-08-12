import { useState } from "react";
import type { MediaRef } from "../content/types";

type Props = {
  media?: MediaRef;
  /** Fallback cuando no hay media */
  label?: string;
  note?: string;
  className?: string;
};

/**
 * Foto de case study.
 * - Si hay src y carga bien → muestra la imagen
 * - Si no → placeholder con caption (edita src en content/projects/*.ts)
 */
export default function CaseMedia({ media, label, note, className = "" }: Props) {
  const [broken, setBroken] = useState(false);
  const caption = media?.caption ?? label ?? "Imagen pendiente";
  const help = media?.note ?? note;
  const src = media?.src?.trim();

  if (src && !broken) {
    return (
      <figure className={`cx-photo cx-photo-real ${className}`.trim()}>
        <img src={src} alt={media?.alt || caption} onError={() => setBroken(true)} />
        {help ? <figcaption className="eh-photo-note">{help}</figcaption> : null}
      </figure>
    );
  }

  return (
    <div className={`cx-photo ${className}`.trim()} aria-label={caption}>
      <span>{caption}</span>
      {help ? <em className="eh-photo-note">{help}</em> : null}
      {/* Añade el archivo en public{src} o quita src en content */}
    </div>
  );
}
