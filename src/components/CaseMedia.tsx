import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { MediaRef } from "../content/types";
import FigmaCursors from "./FigmaCursors";
import { MediaLightbox, MediaZoomTrigger, type MediaLightboxSlide } from "./MediaLightbox";

type Props = {
  media?: MediaRef;
  /** Fallback cuando no hay media */
  label?: string;
  className?: string;
  /** Índice en la galería de la sección (lightbox compartido). */
  galleryIndex?: number;
  onGalleryOpen?: (index: number) => void;
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
      { threshold: 0.2 },
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

  const magnify = zoom.magnify ?? "cover";
  const fit =
    magnify === "fill" || magnify === "cover" || magnify === "contain"
      ? magnify
      : "cover";

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
          "--zoom-fit": fit,
        } as CSSProperties
      }
    >
      <img src={zoom.src} alt="" />
    </div>
  );
}

/**
 * Foto o vídeo de case study.
 * - Si hay src y carga bien → muestra el archivo
 * - Si no → placeholder con caption (edita src en content/projects/*.ts)
 * - Las imágenes se pueden ampliar en lightbox
 */
export default function CaseMedia({
  media,
  label,
  className = "",
  galleryIndex,
  onGalleryOpen,
}: Props) {
  const [broken, setBroken] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const pie = mediaCaption(media, label);
  const src = media?.src?.trim();
  const sizeClass = media?.size === "half" ? "is-half" : "";
  const scrollVertical = media?.scroll === "vertical";
  const useSharedGallery =
    onGalleryOpen !== undefined && galleryIndex !== undefined && galleryIndex >= 0;

  const openLightbox = () => {
    if (useSharedGallery) onGalleryOpen(galleryIndex);
    else setLightboxOpen(true);
  };

  const embed = media?.embed?.trim();
  if (embed) {
    const embedHref = embed.split("#")[0] || embed;
    const isPdf = /\.pdf(\?|#|$)/i.test(embed);
    return (
      <figure className={`cx-photo cx-photo-real cx-photo-embed ${sizeClass} ${className}`.trim()}>
        <div className={`cx-media-embed${isPdf ? " is-pdf" : ""}`}>
          <iframe
            src={embed}
            title={pie}
            loading="eager"
            allowFullScreen
            allow="fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <figcaption className="cx-media-caption">
          {pie}
          {" · "}
          <a href={embedHref} target="_blank" rel="noreferrer">
            Abrir presentación
          </a>
        </figcaption>
      </figure>
    );
  }

  if (src && !broken) {
    const showCursors = Boolean(media?.cursors?.length) && !isVideoSrc(src);
    const showDetailZoom = Boolean(media?.zoom?.src) && !isVideoSrc(src);
    const framed = showCursors || showDetailZoom;
    const isImage = !isVideoSrc(src);

    if (isImage && scrollVertical) {
      const scrollHint = media?.cursorHint === "scroll";
      return (
        <figure className={`cx-photo cx-photo-real is-scroll-y ${sizeClass} ${className}`.trim()}>
          <div
            className={`cx-media-scroll${scrollHint ? " has-scroll-hint" : ""}`}
            tabIndex={0}
            role="region"
            aria-label={`${pie}. Usa scroll vertical para ver la captura completa.`}
          >
            <img src={src} alt={pie} onError={() => setBroken(true)} />
            <button
              type="button"
              className="cx-media-scroll-zoom"
              aria-label={`Ampliar: ${pie}`}
              onClick={openLightbox}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M15.5 15.5 21 21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M10.5 7.5v6M7.5 10.5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {useSharedGallery ? null : (
            <MediaLightbox
              open={lightboxOpen}
              src={src}
              alt={pie}
              onClose={() => setLightboxOpen(false)}
            />
          )}
          <figcaption className="cx-media-caption">{pie}</figcaption>
        </figure>
      );
    }

    const mediaBody = isVideoSrc(src) ? (
      <CaseVideo src={src} alt={pie} interactive onError={() => setBroken(true)} />
    ) : framed ? (
      <div className="cx-photo-frame">
        <img src={src} alt="" onError={() => setBroken(true)} />
        {showCursors ? <FigmaCursors cursors={media!.cursors!} /> : null}
        {showDetailZoom ? <ZoomBubble zoom={media!.zoom!} /> : null}
      </div>
    ) : (
      <img src={src} alt="" onError={() => setBroken(true)} />
    );

    return (
      <figure className={`cx-photo cx-photo-real ${sizeClass} ${className}`.trim()}>
        {isImage ? (
          <MediaZoomTrigger
            src={src}
            alt={pie}
            open={lightboxOpen}
            onOpen={openLightbox}
            onClose={() => setLightboxOpen(false)}
            lightboxExternal={useSharedGallery}
          >
            {mediaBody}
          </MediaZoomTrigger>
        ) : (
          mediaBody
        )}
        <figcaption className="cx-media-caption">{pie}</figcaption>
      </figure>
    );
  }

  return (
    <div className={`cx-photo ${sizeClass} ${className}`.trim()} aria-label={pie}>
      <span>{pie}</span>
    </div>
  );
}

function buildGallerySlides(media: MediaRef[]): MediaLightboxSlide[] {
  return media
    .filter((item) => {
      const itemSrc = item.src?.trim();
      return itemSrc && !isVideoSrc(itemSrc);
    })
    .map((item) => ({
      src: item.src!.trim(),
      alt: mediaCaption(item),
    }));
}

function galleryIndexForMedia(media: MediaRef[], target: MediaRef): number {
  let index = -1;
  for (const item of media) {
    const itemSrc = item.src?.trim();
    if (!itemSrc || isVideoSrc(itemSrc)) continue;
    index += 1;
    if (item.id === target.id) return index;
  }
  return -1;
}

/** Lista de media con lightbox compartido y flechas si hay varias imágenes. */
export function CaseMediaList({ media }: { media: MediaRef[] }) {
  const slides = useMemo(() => buildGallerySlides(media), [media]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const sharedGallery = slides.length > 1;

  return (
    <>
      <div className="cx-media-list">
        {media.map((item) => (
          <CaseMedia
            key={item.id}
            media={item}
            galleryIndex={sharedGallery ? galleryIndexForMedia(media, item) : undefined}
            onGalleryOpen={sharedGallery ? (i) => { setIndex(i); setOpen(true); } : undefined}
          />
        ))}
      </div>
      {sharedGallery ? (
        <MediaLightbox
          open={open}
          src={slides[index]?.src ?? ""}
          alt={slides[index]?.alt ?? ""}
          slides={slides}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
