import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { characterMap, type CharacterSlug } from "@/data/characters";
import { cn } from "@/lib/utils";

let actx: AudioContext | null = null;

function audio() {
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!actx) actx = new Ctx();
  if (actx.state === "suspended") void actx.resume();
  return actx;
}

export function beep(freq: number, ms = 140, type: OscillatorType = "triangle", vol = 0.08) {
  try {
    const ctx = audio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq * (0.97 + Math.random() * 0.06);
    gain.gain.value = vol;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000);
    osc.stop(ctx.currentTime + ms / 1000 + 0.03);
  } catch {
    /* optional */
  }
}

export const tone = beep;

export function cheer() {
  beep(523, 90);
  window.setTimeout(() => beep(659, 90), 80);
  window.setTimeout(() => beep(784, 140), 160);
}

export function boop() {
  beep(180, 180, "sawtooth", 0.05);
}

export type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  r: number;
};

export function burst(ps: Particle[], x: number, y: number, color: string, n = 14) {
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n + Math.random() * 0.4;
    const s = 90 + Math.random() * 180;
    ps.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - 40,
      life: 0.7 + Math.random() * 0.3,
      color,
      r: 3 + Math.random() * 5,
    });
  }
}

export function stepParticles(ps: Particle[], dt: number) {
  for (let i = ps.length - 1; i >= 0; i--) {
    const p = ps[i]!;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 520 * dt;
    p.life -= dt * 1.6;
    if (p.life <= 0) ps.splice(i, 1);
  }
}

export function drawParticles(ctx: CanvasRenderingContext2D, ps: Particle[]) {
  for (const p of ps) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function fitCanvas(c: HTMLCanvasElement) {
  const r = c.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const bw = Math.max(1, Math.floor(r.width * dpr));
  const bh = Math.max(1, Math.floor(r.height * dpr));
  if (c.width !== bw || c.height !== bh) {
    c.width = bw;
    c.height = bh;
  }
  const ctx = c.getContext("2d");
  if (!ctx) return { ctx: null as CanvasRenderingContext2D | null, w: r.width, h: r.height };
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: r.width, h: r.height };
}

export function canvasPos(e: { clientX: number; clientY: number }, c: HTMLCanvasElement) {
  const r = c.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

export function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function ArcadeStart({
  who,
  title,
  how,
  onStart,
  cover,
}: {
  who: CharacterSlug;
  title: string;
  how: string;
  onStart: () => void;
  cover?: string;
}) {
  const c = characterMap[who];
  return (
    <div className="flex min-h-[26rem] flex-col items-center justify-center px-3 py-5 text-center">
      {cover ? (
        <div className="relative mb-3 w-full max-w-lg overflow-hidden rounded-card border-[3px] border-ink">
          <Photo src={cover} ratio="video" />
          <img
            src={c.portrait}
            alt=""
            className="absolute bottom-0 right-2 h-28 w-auto object-contain sm:h-32"
          />
        </div>
      ) : (
        <img src={c.portrait} alt="" className="h-32 w-auto bob object-contain sm:h-40" />
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="bubble mt-3 max-w-sm text-lg">{how}</p>
      <Button
        className="mt-6 min-h-16 min-w-48 text-2xl"
        tone={
          who === "vector"
            ? "vector"
            : who === "zizu"
              ? "zizu"
              : who === "gadu"
                ? "gadu"
                : who === "margarel"
                  ? "margarel"
                  : "yellow"
        }
        size="lg"
        onClick={() => {
          try {
            audio();
          } catch {
            /* */
          }
          onStart();
        }}
      >
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

export function useRaf(active: boolean, tick: (dt: number) => void) {
  const fn = useRef(tick);
  fn.current = tick;
  useEffect(() => {
    if (!active) return;
    let id = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      fn.current(dt);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [active]);
}

export const useLoop = useRaf;

export function Stage({
  bg,
  children,
  className,
}: {
  bg?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mt-3 overflow-hidden rounded-card border-[3px] border-ink",
        className,
      )}
      style={
        bg
          ? {
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
