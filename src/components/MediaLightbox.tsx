import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type MediaLightboxSlide = {
  src: string;
  alt: string;
};

type Props = {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
  slides?: MediaLightboxSlide[];
  index?: number;
  onIndexChange?: (index: number) => void;
};

/** Overlay a pantalla completa para ampliar imágenes de case study. */
export function MediaLightbox({
  open,
  src,
  alt,
  onClose,
  slides,
  index = 0,
  onIndexChange,
}: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const hasGallery = Boolean(slides && slides.length > 1 && onIndexChange);
  const active = hasGallery && slides ? slides[index]! : { src, alt };
  const canPrev = hasGallery && index > 0;
  const canNext = hasGallery && slides && index < slides.length - 1;

  const goPrev = () => {
    if (!hasGallery || !onIndexChange || index <= 0) return;
    onIndexChange(index - 1);
  };

  const goNext = () => {
    if (!hasGallery || !onIndexChange || !slides || index >= slides.length - 1) return;
    onIndexChange(index + 1);
  };

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (!hasGallery || !onIndexChange || !slides) return;
      if (event.key === "ArrowLeft" && index > 0) onIndexChange(index - 1);
      if (event.key === "ArrowRight" && index < slides.length - 1) onIndexChange(index + 1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, index, hasGallery, onIndexChange, slides]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="cx-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="cx-lightbox-close"
        aria-label="Cerrar imagen ampliada"
        onClick={onClose}
      >
        ×
      </button>
      {hasGallery ? (
        <>
          <button
            type="button"
            className="cx-lightbox-nav cx-lightbox-prev"
            aria-label="Imagen anterior"
            disabled={!canPrev}
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="cx-lightbox-nav cx-lightbox-next"
            aria-label="Imagen siguiente"
            disabled={!canNext}
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
          >
            ›
          </button>
        </>
      ) : null}
      <img
        key={active.src}
        src={active.src}
        alt={active.alt}
        id={titleId}
        className="cx-lightbox-img"
        onClick={(event) => event.stopPropagation()}
      />
      <p className="cx-lightbox-caption">
        {active.alt}
        {hasGallery && slides ? (
          <span className="cx-lightbox-counter" aria-hidden="true">
            {" "}
            · {index + 1}/{slides.length}
          </span>
        ) : null}
      </p>
    </div>,
    document.body,
  );
}

type TriggerProps = {
  src: string;
  alt: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  /** Si true, no monta lightbox (lo controla el padre). */
  lightboxExternal?: boolean;
};

/** Botón accesible que envuelve media y abre el lightbox. */
export function MediaZoomTrigger({
  src,
  alt,
  open,
  onOpen,
  onClose,
  className = "",
  children,
  lightboxExternal = false,
}: TriggerProps) {
  return (
    <>
      <button
        type="button"
        className={`cx-media-zoom ${className}`.trim()}
        onClick={onOpen}
        aria-label={`Ampliar: ${alt}`}
      >
        {children}
        <span className="cx-media-zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M15.5 15.5 21 21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M10.5 7.5v6M7.5 10.5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {lightboxExternal ? null : (
        <MediaLightbox open={open} src={src} alt={alt} onClose={onClose} />
      )}
    </>
  );
}
