import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { characters } from "@/data/characters";
import { cn } from "@/lib/utils";
import { ART, BALLOON_ART, blit, loadImages } from "@/data/gameArt";
import { GameWin } from "./GameWin";
import {
  ArcadeHud,
  ArcadeStart,
  beep,
  boop,
  burst,
  canvasPos,
  cheer,
  drawParticles,
  fitCanvas,
  stepParticles,
  type Particle,
} from "./playkit";

export function SilhouetteGame() {
  const order = useMemo(() => [...characters].sort(() => Math.random() - 0.5), []);
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const who = order[i];

  function pick(slug: string) {
    if (!who || lock) return;
    setLock(true);
    const ok = slug === who.slug;
    if (ok) {
      cheer();
      setScore((s) => s + 1);
    } else boop();
    window.setTimeout(() => {
      if (i + 1 >= order.length) setPhase("win");
      else {
        setI((n) => n + 1);
        setLock(false);
      }
    }, 450);
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="¿Quién es esa sombra?"
        how="Una sombra camina. Tocá de quién es."
        cover="/scenes/patio-siluetas.jpg"
        onStart={() => {
          setPhase("play");
          setI(0);
          setScore(0);
          setLock(false);
        }}
      />
    );
  }
  if (phase === "win" || !who) {
    return (
      <GameWin
        who="zizu"
        score={score}
        total={order.length}
        id="game:siluetas"
        badge="sombras-amigas"
        kids="Una sombra también es un amigo."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={score * 20} extra={<span>{i + 1}/5</span>} />
      <div className="relative mt-3 h-56 overflow-hidden rounded-card border-[3px] border-ink bg-[#163528] sm:h-64">
        <div className="absolute inset-x-0 bottom-0 h-10 bg-[#0d2118]" />
        <img
          key={who.slug}
          src={who.portrait}
          alt=""
          className="absolute bottom-6 h-36 w-auto object-contain brightness-0 sm:h-44"
          style={{ animation: "walk-across 4s linear infinite" }}
        />
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {characters.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => pick(c.slug)}
            className="flex min-h-16 flex-col items-center rounded-2xl border-[3px] border-ink bg-cream p-1 active:translate-y-1"
          >
            <img src={c.portrait} alt={c.name} className="h-14 w-auto object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}

const STAGES = [
  { id: "mar", label: "mar", color: "#8ec5ff", src: ART.wave },
  { id: "sol", label: "sol", color: "#ffe27a", src: ART.sun },
  { id: "nube", label: "nube", color: "#fff6d8", src: ART.cloud },
  { id: "lluvia", label: "lluvia", color: "#b7e4ff", src: ART.drop },
];

export function CycleGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [step, setStep] = useState(0);

  function tap(i: number) {
    if (i !== step) {
      boop();
      return;
    }
    beep(500 + step * 90, 100);
    if (step + 1 >= STAGES.length) {
      cheer();
      setPhase("win");
    } else setStep((n) => n + 1);
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="Viaje de una gota"
        how="Tocá el camino: mar, sol, nube, lluvia."
        cover="/scenes/ciclo-agua.jpg"
        onStart={() => {
          setPhase("play");
          setStep(0);
        }}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin who="zizu" score={4} total={4} id="game:ciclo" badge="ciclo-agua" kids="El agua no se esfuma: viaja." />
    );
  }

  return (
    <div>
      <ArcadeHud score={step * 25} extra={<span>Ahora: {STAGES[step]?.label}</span>} />
      <div className="relative mt-3 min-h-[22rem] overflow-hidden rounded-card border-[3px] border-ink">
        <img src="/scenes/ciclo-agua.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative grid h-full grid-cols-2 gap-4 p-5 sm:grid-cols-4">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => tap(i)}
              className={cn(
                "mt-auto flex min-h-36 flex-col items-center justify-center gap-1 rounded-card border-[3px] border-ink bg-cream/90 font-display text-xl font-semibold shadow-chunky active:translate-y-1",
                i === step ? "scale-105" : "opacity-80",
              )}
            >
              <img src={s.src} alt="" className="h-20 w-20 object-contain bob" />
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const PAIRS = [
  { a: "sol", b: "farol", ok: true },
  { a: "casa", b: "masa", ok: true },
  { a: "río", b: "zapato", ok: false },
  { a: "luna", b: "cuna", ok: true },
  { a: "bosque", b: "taza", ok: false },
  { a: "gato", b: "pato", ok: true },
  { a: "nube", b: "uva", ok: false },
  { a: "pan", b: "flan", ok: true },
];

export function RhymeGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState<"ok" | "no" | null>(null);
  const p = PAIRS[i];

  function choose(yes: boolean) {
    if (!p || flash) return;
    const ok = yes === p.ok;
    if (ok) {
      cheer();
      setScore((s) => s + 1);
      setFlash("ok");
    } else {
      boop();
      setFlash("no");
    }
    window.setTimeout(() => {
      setFlash(null);
      if (i + 1 >= PAIRS.length) setPhase("win");
      else setI((n) => n + 1);
    }, 420);
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="margarel"
        title="¿Riman?"
        how="Dos palabras. Tocá SÍ o NO."
        cover="/scenes/jardin-rimas.jpg"
        onStart={() => {
          setPhase("play");
          setI(0);
          setScore(0);
        }}
      />
    );
  }
  if (phase === "win" || !p) {
    return (
      <GameWin
        who="margarel"
        score={score}
        total={PAIRS.length}
        id="game:rimas"
        badge="rimas-margarel"
        kids="Las palabras también juegan."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={score * 10} extra={<span>{i + 1}/{PAIRS.length}</span>} />
      <div
        className={cn(
          "relative mt-3 flex h-64 items-center justify-center gap-4 overflow-hidden rounded-card border-[3px] border-ink sm:h-72",
          flash === "ok" ? "bg-zizu" : flash === "no" ? "bg-coral" : "bg-mint",
        )}
      >
        <img src="/characters/margarel.webp" alt="" className="absolute bottom-0 right-2 h-24" />
        <span className="bob rounded-2xl border-[3px] border-ink bg-yellow px-5 py-3 font-display text-3xl font-semibold">
          {p.a}
        </span>
        <span className="bob-d2 rounded-2xl border-[3px] border-ink bg-cloud px-5 py-3 font-display text-3xl font-semibold">
          {p.b}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="min-h-16 rounded-card border-[3px] border-ink bg-zizu font-display text-2xl font-semibold shadow-chunky active:translate-y-1"
        >
          ¡Sí riman!
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="min-h-16 rounded-card border-[3px] border-ink bg-coral font-display text-2xl font-semibold text-cream shadow-chunky active:translate-y-1"
        >
          No
        </button>
      </div>
    </div>
  );
}

type Balloon = { id: number; x: number; y: number; vy: number; r: number; color: string; pop: number; src: string };
let bid = 1;

type CountWorld = {
  w: number;
  h: number;
  balls: Balloon[];
  spawn: number;
  need: number;
  got: number;
  wave: number;
  score: number;
  ps: Particle[];
  over: boolean;
  sprites: Record<string, HTMLImageElement>;
};

export function CountGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const world = useRef<CountWorld | null>(null);
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [hud, setHud] = useState({ score: 0, got: 0, need: 4, wave: 1 });
  const hudRef = useRef(hud);
  const sprites = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    void loadImages([...BALLOON_ART, "/scenes/picnic-numeros.jpg"]).then((m) => {
      sprites.current = m;
    });
  }, []);

  useEffect(() => {
    if (phase !== "play") return;
    const c = canvasRef.current;
    if (!c) return;
    const boot = fitCanvas(c);
    world.current = {
      w: boot.w,
      h: boot.h,
      balls: [],
      spawn: 0.95,
      need: 4,
      got: 0,
      wave: 1,
      score: 0,
      ps: [],
      over: false,
      sprites: sprites.current,
    };
    hudRef.current = { score: 0, got: 0, need: 4, wave: 1 };
    setHud(hudRef.current);
    let last = performance.now();
    let raf = 0;
    const loop = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      const g = world.current;
      if (!g) return;
      const sized = fitCanvas(c);
      if (!sized.ctx) {
        raf = requestAnimationFrame(loop);
        return;
      }
      g.w = sized.w;
      g.h = sized.h;
      g.sprites = sprites.current;
      g.spawn += dt;
      if (g.spawn > Math.max(0.45, 0.9 - g.wave * 0.08)) {
        g.spawn = 0;
        const r = 26 + Math.random() * 10;
        g.balls.push({
          id: bid++,
          x: r + 16 + Math.random() * (g.w - r * 2 - 32),
          y: g.h + r,
          vy: 70 + g.wave * 18,
          r,
          color: "#ff5d8f",
          pop: 0,
          src: BALLOON_ART[Math.floor(Math.random() * BALLOON_ART.length)]!,
        });
      }
      stepParticles(g.ps, dt);
      for (let i = g.balls.length - 1; i >= 0; i--) {
        const b = g.balls[i]!;
        if (b.pop) {
          b.pop += dt * 5;
          b.r *= 1 - dt * 10;
          if (b.pop > 1) g.balls.splice(i, 1);
          continue;
        }
        b.y -= b.vy * dt;
        if (b.y < -40) g.balls.splice(i, 1);
      }
      paintCount(sized.ctx, g);
      const nh = { score: g.score, got: g.got, need: g.need, wave: g.wave };
      if (nh.got !== hudRef.current.got || nh.wave !== hudRef.current.wave || nh.score !== hudRef.current.score) {
        hudRef.current = nh;
        setHud(nh);
      }
      if (g.over) {
        setPhase("win");
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  function tap(e: PointerEvent<HTMLCanvasElement>) {
    const g = world.current;
    const c = canvasRef.current;
    if (!g || !c) return;
    const { x, y } = canvasPos(e, c);
    let hit: Balloon | undefined;
    let best = 1e9;
    for (const b of g.balls) {
      if (b.pop) continue;
      const d = (b.x - x) ** 2 + (b.y - y) ** 2;
      if (d < (b.r + 8) ** 2 && d < best) {
        best = d;
        hit = b;
      }
    }
    if (!hit) return;
    hit.pop = 0.01;
    beep(560 + g.got * 40, 80);
    burst(g.ps, hit.x, hit.y, hit.color, 12);
    g.got += 1;
    g.score += 10;
    if (g.got >= g.need) {
      cheer();
      if (g.wave >= 5) {
        g.over = true;
        return;
      }
      g.wave += 1;
      g.need = 3 + g.wave;
      g.got = 0;
      g.balls = [];
    }
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="vector"
        title="Revienta globos"
        how="Tocá globos hasta llegar al número."
        cover="/scenes/picnic-numeros.jpg"
        onStart={() => setPhase("play")}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="vector"
        score={hud.score}
        total={5}
        id="game:contar"
        badge="globos-vector"
        kids="Contar es una forma de mirar con cuidado."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={hud.score} extra={<span>{hud.got}/{hud.need}</span>} />
      <canvas
        ref={canvasRef}
        className="mt-3 h-[28rem] w-full touch-none rounded-card border-[3px] border-ink bg-sky sm:h-[32rem]"
        onPointerDown={tap}
      />
    </div>
  );
}

function paintCount(ctx: CanvasRenderingContext2D, g: CountWorld) {
  const bg = g.sprites["/scenes/picnic-numeros.jpg"];
  if (bg && bg.complete) ctx.drawImage(bg, 0, 0, g.w, g.h);
  else {
    ctx.fillStyle = "#7ec8ea";
    ctx.fillRect(0, 0, g.w, g.h);
  }
  ctx.fillStyle = "rgba(255,246,216,0.12)";
  ctx.fillRect(0, 0, g.w, g.h);
  for (const b of g.balls) {
    blit(ctx, g.sprites[b.src], b.x, b.y, b.r * 2.6);
  }
  drawParticles(ctx, g.ps);
  ctx.font = "700 28px Fredoka, Nunito, sans-serif";
  ctx.textAlign = "center";
  ctx.strokeStyle = "#1f1408";
  ctx.lineWidth = 5;
  ctx.fillStyle = "#ffd000";
  ctx.strokeText(String(g.need), g.w / 2, 40);
  ctx.fillText(String(g.need), g.w / 2, 40);
}

const ING = [
  { id: "pan", label: "pan", color: "#ea9e48", src: ART.bread },
  { id: "tomate", label: "tomate", color: "#ffd8d4", src: ART.tomato },
  { id: "hoja", label: "hoja", color: "#c8f5dc", src: ART.lettuce },
  { id: "queso", label: "queso", color: "#ffe27a", src: ART.cheese },
] as const;

export function RecipeGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [order] = useState(() => [...ING].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<string[]>([]);

  function tap(id: string) {
    const next = order[placed.length];
    if (!next) return;
    if (next.id === id) {
      beep(640, 90);
      const n = [...placed, id];
      setPlaced(n);
      if (n.length === order.length) {
        cheer();
        setPhase("win");
      }
    } else boop();
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="gadu"
        title="Receta de pasos"
        how="El orden importa. Tocá el ingrediente que pide la receta."
        cover="/scenes/receta-pasos.jpg"
        onStart={() => {
          setPhase("play");
          setPlaced([]);
        }}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="gadu"
        score={order.length}
        total={order.length}
        id="game:receta"
        badge="receta-gadu"
        kids="Si un paso se mueve, el sándwich cambia."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={placed.length * 20} extra={<span>Paso {placed.length + 1}</span>} />
      <p className="mt-3 text-center font-display text-2xl font-semibold">
        Ahora: {order[placed.length]?.label}
      </p>
      <div className="relative mt-3 flex min-h-56 flex-col items-center justify-end overflow-hidden rounded-card border-[3px] border-ink p-4">
        <img src="/scenes/cocina-lab.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <img src={ART.plate} alt="" className="relative z-[1] h-36 w-36 object-contain" />
        <div className="absolute inset-x-0 bottom-10 z-[2] flex flex-col items-center">
          {placed.map((id) => {
            const it = ING.find((x) => x.id === id)!;
            return <img key={id} src={it.src} alt="" className="h-16 w-16 -mb-6 object-contain" />;
          })}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {ING.filter((x) => !placed.includes(x.id)).map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => tap(it.id)}
            className="flex min-h-24 flex-col items-center justify-center rounded-2xl border-[3px] border-ink bg-cream font-display text-xl font-semibold shadow-chunky active:translate-y-1"
          >
            <img src={it.src} alt="" className="h-16 w-16 object-contain bob" />
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
}
