import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  ArcadeHud,
  ArcadeStart,
  beep,
  burst,
  canvasPos,
  cheer,
  drawParticles,
  fitCanvas,
  roundRect,
  stepParticles,
  type Particle,
} from "./playkit";
import { PLANET_ART, blit, loadImages } from "@/data/gameArt";
import { GameWin } from "./GameWin";

const HUES = ["#5579df", "#6c3ce0", "#ffd000", "#ff5d8f", "#2ebe7a", "#ea9e48"];
const WAVES = 6;

type Planet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  pop: number;
  src: string;
};

type World = {
  w: number;
  h: number;
  planets: Planet[];
  need: number;
  got: number;
  wave: number;
  score: number;
  ps: Particle[];
  over: boolean;
  sprites: Record<string, HTMLImageElement>;
};

function make(n: number, w: number, h: number): Planet[] {
  return Array.from({ length: n }, () => {
    const r = 28 + Math.random() * 16;
    return {
      x: r + 20 + Math.random() * (w - r * 2 - 40),
      y: r + 50 + Math.random() * (h - r * 2 - 90),
      vx: (Math.random() < 0.5 ? -1 : 1) * (50 + Math.random() * 70),
      vy: (Math.random() < 0.5 ? -1 : 1) * (40 + Math.random() * 60),
      r,
      color: HUES[Math.floor(Math.random() * HUES.length)]!,
      pop: 0,
      src: PLANET_ART[Math.floor(Math.random() * PLANET_ART.length)]!,
    };
  });
}

export function MathGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const world = useRef<World | null>(null);
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [hud, setHud] = useState({ score: 0, wave: 1, got: 0, need: 3 });
  const hudRef = useRef(hud);
  const sprites = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    void loadImages([...PLANET_ART, "/scenes/planeta-espacio.jpg"]).then((m) => {
      sprites.current = m;
    });
  }, []);

  useEffect(() => {
    if (phase !== "play") return;
    const c = canvasRef.current;
    if (!c) return;
    const boot = fitCanvas(c);
    const need = 3;
    world.current = {
      w: boot.w,
      h: boot.h,
      planets: make(5, boot.w, boot.h),
      need,
      got: 0,
      wave: 1,
      score: 0,
      ps: [],
      over: false,
      sprites: sprites.current,
    };
    hudRef.current = { score: 0, wave: 1, got: 0, need };
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
      step(g, dt);
      paint(sized.ctx, g);
      const nextHud = { score: g.score, wave: g.wave, got: g.got, need: g.need };
      if (
        nextHud.score !== hudRef.current.score ||
        nextHud.got !== hudRef.current.got ||
        nextHud.wave !== hudRef.current.wave
      ) {
        hudRef.current = nextHud;
        setHud(nextHud);
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
    if (!g || !c || g.over) return;
    const { x, y } = canvasPos(e, c);
    let hit: Planet | undefined;
    let best = 1e9;
    for (const p of g.planets) {
      if (p.pop) continue;
      const d = (p.x - x) ** 2 + (p.y - y) ** 2;
      if (d < p.r * p.r && d < best) {
        best = d;
        hit = p;
      }
    }
    if (!hit) return;
    hit.pop = 0.01;
    beep(520 + g.got * 70, 90);
    burst(g.ps, hit.x, hit.y, hit.color, 16);
    g.got += 1;
    g.score += 10;
    if (g.got >= g.need) {
      cheer();
      if (g.wave >= WAVES) {
        g.over = true;
        return;
      }
      g.wave += 1;
      g.need = Math.min(8, 2 + g.wave);
      g.got = 0;
      g.planets = make(g.need + 2, g.w, g.h);
    }
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="vector"
        title="Caza planetas"
        how="Tocá los planetas que rebotan. Llegá al número de la ronda."
        cover="/scenes/planetas-contar.jpg"
        onStart={() => setPhase("play")}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="vector"
        score={hud.score}
        total={WAVES}
        id="game:sumas"
        badge="planetas-vector"
        kids="Contar es tocar con cuidado. Vector anota todo."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={hud.score} extra={<span>Ronda {hud.wave}/{WAVES}</span>} />
      <canvas
        ref={canvasRef}
        className="mt-3 h-[28rem] w-full touch-none rounded-card border-[3px] border-ink bg-[#140c2e] sm:h-[32rem]"
        onPointerDown={tap}
      />
    </div>
  );
}

function step(g: World, dt: number) {
  stepParticles(g.ps, dt);
  for (let i = g.planets.length - 1; i >= 0; i--) {
    const p = g.planets[i]!;
    if (p.pop) {
      p.pop += dt * 4;
      p.r *= 1 - dt * 8;
      if (p.pop > 1 || p.r < 2) g.planets.splice(i, 1);
      continue;
    }
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    if (p.x < p.r) {
      p.x = p.r;
      p.vx = Math.abs(p.vx);
    }
    if (p.x > g.w - p.r) {
      p.x = g.w - p.r;
      p.vx = -Math.abs(p.vx);
    }
    if (p.y < p.r + 48) {
      p.y = p.r + 48;
      p.vy = Math.abs(p.vy);
    }
    if (p.y > g.h - p.r - 8) {
      p.y = g.h - p.r - 8;
      p.vy = -Math.abs(p.vy);
    }
  }
}

function paint(ctx: CanvasRenderingContext2D, g: World) {
  const bg = g.sprites["/scenes/planeta-espacio.jpg"];
  if (bg && bg.complete) ctx.drawImage(bg, 0, 0, g.w, g.h);
  else {
    ctx.fillStyle = "#140c2e";
    ctx.fillRect(0, 0, g.w, g.h);
  }
  ctx.fillStyle = "rgba(20,12,46,0.25)";
  ctx.fillRect(0, 0, g.w, g.h);
  for (const p of g.planets) {
    blit(ctx, g.sprites[p.src], p.x, p.y, p.r * 2.4);
  }
  ctx.fillStyle = "#ffd000";
  ctx.strokeStyle = "#1f1408";
  ctx.lineWidth = 3;
  const label = `Tocá ${g.need}  ·  ${g.got}/${g.need}`;
  ctx.font = "700 20px Fredoka, Nunito, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const tw = ctx.measureText(label).width + 28;
  roundRect(ctx, g.w / 2 - tw / 2, 10, tw, 36, 18);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#1f1408";
  ctx.fillText(label, g.w / 2, 28);
}
