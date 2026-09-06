import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { MediaRef } from "../content/types";
import FigmaCursors from "./FigmaCursors";

type Props = {
  media?: MediaRef;
  /** Fallback cuando no hay media */
  label?: string;
  className?: string;
};

export function isVideoSrc(src: string) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src);
}

/** Pie de foto/vídeo y texto alternativo: el mismo string. */
export function mediaCaption(media?: MediaRef, fallback = "Imagen pendiente") {
  const pie = media?.caption?.trim();
  return pie || fallback;
}

export function CaseVideo({
  src,
  alt,
  onError,
  poster,
  interactive = false,
}: {
  src: string;
  alt: string;
  onError: () => void;
  poster?: string;
  /** Controles nativos al hover (play, pausa, sonido). En táctil, siempre visibles. */
  interactive?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!interactive) return;
    const mq = window.matchMedia("(hover: none)");
    const sync = () => {
      if (mq.matches) setShowControls(true);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [interactive]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted={muted}
      loop
      playsInline
      autoPlay
      preload="metadata"
      controls={interactive && showControls}
      aria-label={alt || undefined}
      onError={onError}
      onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
      onMouseEnter={() => {
        if (interactive) setShowControls(true);
      }}
      onMouseLeave={() => {
        if (!interactive) return;
        if (window.matchMedia("(hover: hover)").matches) setShowControls(false);
      }}
      onFocus={() => {
        if (interactive) setShowControls(true);
      }}
    />
  );
}

function ZoomBubble({ zoom }: { zoom: NonNullable<MediaRef["zoom"]> }) {
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

    const host = el.parentElement ?? el;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-paused", !entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    io.observe(host);

    return () => {
      motion.removeEventListener("change", applyMotion);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cx-zoom-bubble"
      aria-hidden="true"
      style={
        {
          "--zoom-left": zoom.left,
          "--zoom-top": zoom.top,
          "--zoom-size": zoom.size ?? "40%",
          "--zoom-focus": zoom.focus ?? "50% 50%",
          "--zoom-magnify": zoom.magnify ?? "cover",
          "--zoom-image": `url("${zoom.src}")`,
        } as CSSProperties
      }
    />
  );
}

/**
 * Foto o vídeo de case study.
 * - Si hay src y carga bien → muestra el archivo
 * - Si no → placeholder con caption (edita src en content/projects/*.ts)
 */
export default function CaseMedia({ media, label, className = "" }: Props) {
  const [broken, setBroken] = useState(false);
  const pie = mediaCaption(media, label);
  const src = media?.src?.trim();

  if (src && !broken) {
    const showCursors = Boolean(media?.cursors?.length) && !isVideoSrc(src);
    const showZoom = Boolean(media?.zoom?.src) && !isVideoSrc(src);
    const framed = showCursors || showZoom;

    return (
      <figure className={`cx-photo cx-photo-real ${className}`.trim()}>
        {isVideoSrc(src) ? (
          <CaseVideo src={src} alt={pie} interactive onError={() => setBroken(true)} />
        ) : framed ? (
          <div className="cx-photo-frame">
            <img src={src} alt={pie} onError={() => setBroken(true)} />
            {showCursors ? <FigmaCursors cursors={media!.cursors!} /> : null}
            {showZoom ? <ZoomBubble zoom={media!.zoom!} /> : null}
          </div>
        ) : (
          <img src={src} alt={pie} onError={() => setBroken(true)} />
        )}
        <figcaption className="cx-media-caption">{pie}</figcaption>
      </figure>
    );
  }

  return (
    <div className={`cx-photo ${className}`.trim()} aria-label={pie}>
      <span>{pie}</span>
    </div>
  );
}
