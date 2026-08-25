import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  ArcadeHud,
  ArcadeStart,
  boop,
  burst,
  canvasPos,
  cheer,
  drawParticles,
  fitCanvas,
  roundRect,
  stepParticles,
  type Particle,
} from "./playkit";
import { GameWin } from "./GameWin";

type Bin = "org" | "rec" | "otr";
type Kind = { name: string; bin: Bin; color: string };

const KINDS: Kind[] = [
  { name: "Cáscara", bin: "org", color: "#ffd000" },
  { name: "Manzana", bin: "org", color: "#d7655c" },
  { name: "Hojas", bin: "org", color: "#2ebe7a" },
  { name: "Botella", bin: "rec", color: "#5fade9" },
  { name: "Papel", bin: "rec", color: "#fff6d8" },
  { name: "Lata", bin: "rec", color: "#8a7a68" },
  { name: "Cartón", bin: "rec", color: "#ea9e48" },
  { name: "Bolsa", bin: "otr", color: "#ff5d8f" },
  { name: "Chicle", bin: "otr", color: "#6c3ce0" },
];

const BINS: { id: Bin; label: string; color: string }[] = [
  { id: "org", label: "Orgánico", color: "#2ebe7a" },
  { id: "rec", label: "Recicla", color: "#5579df" },
  { id: "otr", label: "Otros", color: "#2a2118" },
];

const GOAL = 10;

type Item = {
  kind: Kind;
  x: number;
  y: number;
  fly: { x: number; y: number; t: number } | null;
};

type World = {
  w: number;
  h: number;
  item: Item | null;
  speed: number;
  lock: number;
  score: number;
  lives: number;
  combo: number;
  shake: number;
  flash: string | null;
  ps: Particle[];
  pops: { x: number; y: number; text: string; life: number }[];
  over: "win" | "lost" | null;
};

function spawn(w: number): Item {
  const kind = KINDS[Math.floor(Math.random() * KINDS.length)]!;
  return { kind, x: w / 2, y: 70, fly: null };
}

export function RecycleGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const world = useRef<World | null>(null);
  const zizu = useRef<HTMLImageElement | null>(null);
  const [phase, setPhase] = useState<"start" | "play" | "win" | "lost">("start");
  const [hud, setHud] = useState({ score: 0, lives: 3, combo: 0 });
  const hudRef = useRef(hud);

  useEffect(() => {
    const img = new Image();
    img.src = "/characters/zizu.webp";
    zizu.current = img;
  }, []);

  useEffect(() => {
    if (phase !== "play") return;
    const c = canvasRef.current;
    if (!c) return;
    const boot = fitCanvas(c);
    world.current = {
      w: boot.w,
      h: boot.h,
      item: spawn(boot.w),
      speed: 90,
      lock: 0,
      score: 0,
      lives: 3,
      combo: 0,
      shake: 0,
      flash: null,
      ps: [],
      pops: [],
      over: null,
    };
    setHud({ score: 0, lives: 3, combo: 0 });

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
      step(g, dt);
      paint(sized.ctx, g, zizu.current);
      if (
        g.score !== hudRef.current.score ||
        g.lives !== hudRef.current.lives ||
        g.combo !== hudRef.current.combo
      ) {
        hudRef.current = { score: g.score, lives: g.lives, combo: g.combo };
        setHud(hudRef.current);
      }
      if (g.over) {
        setHud({ score: g.score, lives: g.lives, combo: g.combo });
        setPhase(g.over);
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
    if (!g || !c || g.lock > 0 || !g.item || g.item.fly) return;
    const { x, y } = canvasPos(e, c);
    const binH = Math.max(110, g.h * 0.22);
    if (y < g.h - binH - 8) return;
    const i = Math.min(2, Math.max(0, Math.floor((x / g.w) * 3)));
    const bin = BINS[i]!;
    const item = g.item;
    const bw = g.w / 3;
    if (bin.id === item.kind.bin) {
      cheer();
      item.fly = { x: bw * i + bw / 2, y: g.h - binH / 2, t: 0 };
      g.combo += 1;
      g.flash = bin.color;
      burst(g.ps, item.x, item.y, item.kind.color, 18);
      g.pops.push({ x: item.x, y: item.y - 20, text: g.combo > 1 ? `+${10 * g.combo}` : "+10", life: 0.8 });
    } else {
      boop();
      g.combo = 0;
      g.lives -= 1;
      g.shake = 0.45;
      g.lock = 0.35;
      setHud({ score: g.score, lives: g.lives, combo: 0 });
      if (g.lives <= 0) g.over = "lost";
      else {
        g.item = spawn(g.w);
        g.speed = Math.min(170, g.speed + 6);
      }
    }
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="¡A los botes!"
        how="Cae una cosa. Tocá el bote correcto. Orgánico, recicla u otros."
        onStart={() => setPhase("play")}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="zizu"
        score={hud.score}
        total={GOAL * 10}
        id="game:reciclar"
        badge="botes-zizu"
        kids="Cada cosa tiene un lugar. El río lo agradece."
      />
    );
  }
  if (phase === "lost") {
    return (
      <ArcadeStart
        who="zizu"
        title="Se escapó algo"
        how={`${hud.score} puntos. ¿Otra ronda?`}
        onStart={() => setPhase("play")}
      />
    );
  }

  return (
    <div>
      <ArcadeHud
        score={hud.score}
        lives={hud.lives}
        extra={<span>{hud.combo > 1 ? `combo x${hud.combo}` : `${GOAL} para ganar`}</span>}
      />
      <canvas
        ref={canvasRef}
        className="mt-3 h-[30rem] w-full touch-none rounded-card border-[3px] border-ink bg-sky sm:h-[34rem]"
        onPointerDown={tap}
      />
    </div>
  );
}

function step(g: World, dt: number) {
  g.lock = Math.max(0, g.lock - dt);
  g.shake = Math.max(0, g.shake - dt * 2.2);
  if (g.flash) g.flash = null;
  stepParticles(g.ps, dt);
  for (let i = g.pops.length - 1; i >= 0; i--) {
    const p = g.pops[i]!;
    p.y -= 50 * dt;
    p.life -= dt;
    if (p.life <= 0) g.pops.splice(i, 1);
  }
  const item = g.item;
  if (!item) return;
  const binH = Math.max(110, g.h * 0.22);
  if (item.fly) {
    item.fly.t += dt * 3.2;
    const t = Math.min(1, item.fly.t);
    const e = 1 - (1 - t) * (1 - t);
    item.x += (item.fly.x - item.x) * e;
    item.y += (item.fly.y - item.y) * e;
    if (t >= 1) {
      g.score += 10 * Math.max(1, g.combo);
      if (g.score >= GOAL * 10) {
        g.over = "win";
        return;
      }
      g.item = spawn(g.w);
      g.speed = Math.min(170, 90 + g.score * 0.8);
    }
    return;
  }
  item.y += g.speed * dt;
  if (item.y > g.h - binH + 20) {
    boop();
    g.combo = 0;
    g.lives -= 1;
    g.shake = 0.4;
    if (g.lives <= 0) g.over = "lost";
    else {
      g.item = spawn(g.w);
      g.speed = Math.min(170, g.speed + 8);
    }
  }
}

function paint(ctx: CanvasRenderingContext2D, g: World, zizu: HTMLImageElement | null) {
  const { w, h } = g;
  ctx.save();
  if (g.shake > 0) {
    ctx.translate((Math.random() - 0.5) * 12 * g.shake, (Math.random() - 0.5) * 10 * g.shake);
  }
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#7ec8ea");
  sky.addColorStop(0.55, "#b7e3a1");
  sky.addColorStop(1, "#6fbf78");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  const binH = Math.max(110, h * 0.22);
  const bw = w / 3;
  BINS.forEach((b, i) => {
    ctx.fillStyle = b.color;
    ctx.strokeStyle = "#1f1408";
    ctx.lineWidth = 4;
    roundRect(ctx, i * bw + 8, h - binH, bw - 16, binH + 8, 18);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    roundRect(ctx, i * bw + 22, h - binH + 12, bw - 44, 18, 8);
    ctx.fill();
    ctx.fillStyle = b.id === "otr" ? "#fff6d8" : "#1f1408";
    ctx.font = "700 18px Fredoka, Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(b.label, i * bw + bw / 2, h - 22);
  });

  if (zizu && zizu.complete) {
    const zh = 90;
    const zw = (zizu.width / zizu.height) * zh;
    ctx.drawImage(zizu, 12, h - binH - zh + 8, zw, zh);
  }

  ctx.font = "700 22px Fredoka, Nunito, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "#1f1408";
  ctx.fillText("¡Tocá el bote!", w / 2, 32);

  const item = g.item;
  if (item) {
    const s = 86;
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.fillStyle = "#1f1408";
    roundRect(ctx, -s / 2 - 3, -s / 2 - 3, s + 6, s + 6, 22);
    ctx.fill();
    ctx.fillStyle = item.kind.color;
    roundRect(ctx, -s / 2, -s / 2, s, s, 20);
    ctx.fill();
    ctx.fillStyle = "#1f1408";
    ctx.font = "700 15px Fredoka, Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(item.kind.name, 0, 0);
    ctx.restore();
  }

  drawParticles(ctx, g.ps);
  ctx.textAlign = "center";
  ctx.font = "700 22px Fredoka, Nunito, sans-serif";
  for (const p of g.pops) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = "#1f1408";
    ctx.fillText(p.text, p.x, p.y);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}
