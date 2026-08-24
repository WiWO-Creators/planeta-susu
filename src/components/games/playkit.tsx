import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { characterMap, type CharacterSlug } from "@/data/characters";

export function useLoop(active: boolean, fn: (dt: number) => void) {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      fnRef.current(dt);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);
}

export function tone(freq: number, ms = 140, type: OscillatorType = "triangle") {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = 0.07;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000);
    osc.stop(ctx.currentTime + ms / 1000 + 0.02);
  } catch {
    /* optional */
  }
}

export function ArcadeStart({
  who,
  title,
  how,
  onStart,
}: {
  who: CharacterSlug;
  title: string;
  how: string;
  onStart: () => void;
}) {
  const c = characterMap[who];
  return (
    <div className="flex min-h-[28rem] flex-col items-center justify-center px-4 py-8 text-center">
      <img src={c.portrait} alt="" className="h-32 w-auto bob object-contain sm:h-40" />
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mt-2 max-w-sm text-lg">{how}</p>
      <Button className="mt-6" tone={who === "vector" ? "vector" : who === "zizu" ? "zizu" : who === "gadu" ? "gadu" : who === "margarel" ? "margarel" : "yellow"} size="lg" onClick={onStart}>
        ¡Jugar!
      </Button>
    </div>
  );
}

export function ArcadeHud({
  score,
  lives,
  extra,
}: {
  score: number;
  lives?: number;
  extra?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border-[3px] border-ink bg-yellow px-3 py-2 font-display text-lg font-semibold">
      <span className="tabular-nums">{score} pts</span>
      {typeof lives === "number" ? (
        <span className="flex gap-1" aria-label={`${lives} vidas`}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`size-4 rounded-full border-2 border-ink ${i < lives ? "bg-coral" : "bg-cloud"}`}
            />
          ))}
        </span>
      ) : null}
      {extra}
    </div>
  );
}

export function Playfield({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        className ??
        "relative mt-3 h-[28rem] overflow-hidden rounded-card border-[3px] border-ink bg-sky select-none touch-none sm:h-[32rem]"
      }
    >
      {children}
    </div>
  );
}
