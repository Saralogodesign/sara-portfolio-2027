import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Props = {
  words: readonly string[];
  /** Tiempo entre una palabra y la siguiente (incluye el flip) */
  intervalMs?: number;
  className?: string;
};

function padWord(word: string, len: number) {
  return word.toUpperCase().padEnd(len, " ");
}

/** Panel tipo aeropuerto: cada columna gira letras hasta formar la palabra */
export default function SplitFlapRole({
  words,
  intervalMs = 3400,
  className = "",
}: Props) {
  const maxLen = Math.max(...words.map((w) => w.length));
  const [wordIndex, setWordIndex] = useState(0);
  const [chars, setChars] = useState(() => padWord(words[0], maxLen).split(""));
  const [ticks, setTicks] = useState(() => Array.from({ length: maxLen }, () => 0));
  const [spinning, setSpinning] = useState(() => Array.from({ length: maxLen }, () => false));
  const runId = useRef(0);
  const charsRef = useRef(chars);
  const firstPaint = useRef(true);

  useEffect(() => {
    charsRef.current = chars;
  }, [chars]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs]);

  useEffect(() => {
    const target = padWord(words[wordIndex], maxLen).split("");

    if (firstPaint.current) {
      firstPaint.current = false;
      setChars(target);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setChars(target);
      setSpinning(Array.from({ length: maxLen }, () => false));
      return;
    }

    const myRun = ++runId.current;
    const timers: number[] = [];
    setSpinning(Array.from({ length: maxLen }, () => true));

    for (let col = 0; col < maxLen; col++) {
      const startDelay = col * 75;
      const flips = 10 + col;
      const tickMs = 42;
      const from = charsRef.current[col];

      const startTimer = window.setTimeout(() => {
        if (runId.current !== myRun) return;
        let step = 0;
        let cursor = CHARS.indexOf(from === " " ? "A" : from);
        if (cursor < 0) cursor = 0;

        const tick = window.setInterval(() => {
          if (runId.current !== myRun) {
            window.clearInterval(tick);
            return;
          }
          step += 1;
          if (step >= flips) {
            window.clearInterval(tick);
            setChars((prev) => {
              const next = [...prev];
              next[col] = target[col];
              return next;
            });
            setSpinning((prev) => {
              const next = [...prev];
              next[col] = false;
              return next;
            });
            setTicks((prev) => {
              const next = [...prev];
              next[col] += 1;
              return next;
            });
            return;
          }

          cursor = (cursor + 1) % CHARS.length;
          const letter = CHARS[cursor];
          setChars((prev) => {
            const next = [...prev];
            next[col] = letter;
            return next;
          });
          setTicks((prev) => {
            const next = [...prev];
            next[col] += 1;
            return next;
          });
        }, tickMs);

        timers.push(tick);
      }, startDelay);

      timers.push(startTimer);
    }

    return () => {
      timers.forEach((t) => {
        window.clearTimeout(t);
        window.clearInterval(t);
      });
    };
  }, [wordIndex, words, maxLen]);

  return (
    <span
      className={`hero-role split-flap ${className}`.trim()}
      aria-live="polite"
      aria-label={words[wordIndex]}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`split-flap-cell${spinning[i] ? " is-spinning" : ""}${ch === " " ? " is-empty" : ""}`}
        >
          <span className="split-flap-letter" key={`${i}-${ticks[i]}-${ch}`}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </span>
  );
}
