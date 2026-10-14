import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { Download, X } from "lucide-react";

type Props = {
  open: boolean;
  src: string;
  fileName?: string;
  onClose: () => void;
};

/** Modal de previsualización del CV con descarga. */
export default function CvPreview({
  open,
  src,
  fileName = "Sara_Lopez_Gomez_CV_2026.pdf",
  onClose,
}: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="cv-preview"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="cv-preview-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="cv-preview-bar">
          <h2 id={titleId}>Currículum</h2>
          <div className="cv-preview-actions">
            <a
              className="cv-preview-download"
              href={src}
              download={fileName}
            >
              Descargar
              <Download aria-hidden="true" strokeWidth={2.25} />
            </a>
            <button
              ref={closeRef}
              type="button"
              className="cv-preview-close"
              aria-label="Cerrar previsualización"
              onClick={onClose}
            >
              <X aria-hidden="true" strokeWidth={2.25} />
            </button>
          </div>
        </header>
        <iframe
          className="cv-preview-frame"
          src={`${src}#toolbar=0&navpanes=0`}
          title="Previsualización del currículum"
        />
      </div>
    </div>,
    document.body,
  );
}
