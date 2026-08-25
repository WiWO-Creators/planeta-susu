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
  stepParticles,
  type Particle,
} from "./playkit";
import { ART, TRASH_ART, blit, loadImages } from "@/data/gameArt";
import { GameWin } from "./GameWin";

type Bin = "org" | "rec" | "otr";
type Kind = { name: string; bin: Bin; src: string };

const KINDS: Kind[] = [
  { name: "Cáscara", bin: "org", src: TRASH_ART.Cáscara },
  { name: "Manzana", bin: "org", src: TRASH_ART.Manzana },
  { name: "Hojas", bin: "org", src: TRASH_ART.Hojas },
  { name: "Botella", bin: "rec", src: TRASH_ART.Botella },
  { name: "Papel", bin: "rec", src: TRASH_ART.Papel },
  { name: "Lata", bin: "rec", src: TRASH_ART.Lata },
  { name: "Cartón", bin: "rec", src: TRASH_ART.Cartón },
  { name: "Bolsa", bin: "otr", src: TRASH_ART.Bolsa },
  { name: "Chicle", bin: "otr", src: TRASH_ART.Chicle },
];

const BINS: { id: Bin; label: string; src: string }[] = [
  { id: "org", label: "Orgánico", src: ART.binOrg },
  { id: "rec", label: "Recicla", src: ART.binRec },
  { id: "otr", label: "Otros", src: ART.binOtr },
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
  ps: Particle[];
  pops: { x: number; y: number; text: string; life: number }[];
  over: "win" | "lost" | null;
  sprites: Record<string, HTMLImageElement>;
};

function spawn(w: number): Item {
  const kind = KINDS[Math.floor(Math.random() * KINDS.length)]!;
  return { kind, x: w / 2, y: 86, fly: null };
}

export function RecycleGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const world = useRef<World | null>(null);
  const [phase, setPhase] = useState<"start" | "play" | "win" | "lost">("start");
  const [hud, setHud] = useState({ score: 0, lives: 3, combo: 0 });
  const hudRef = useRef(hud);
  const sprites = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    const srcs = [
      ...KINDS.map((k) => k.src),
      ...BINS.map((b) => b.src),
      "/characters/zizu.webp",
      "/scenes/zizu-rio.jpg",
    ];
    void loadImages(srcs).then((m) => {
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
      item: spawn(boot.w),
      speed: 80,
      lock: 0,
      score: 0,
      lives: 3,
      combo: 0,
      shake: 0,
      ps: [],
      pops: [],
      over: null,
      sprites: sprites.current,
    };
    hudRef.current = { score: 0, lives: 3, combo: 0 };
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
    const binH = Math.max(130, g.h * 0.28);
    if (y < g.h - binH - 12) return;
    const i = Math.min(2, Math.max(0, Math.floor((x / g.w) * 3)));
    const bin = BINS[i]!;
    const item = g.item;
    const bw = g.w / 3;
    if (bin.id === item.kind.bin) {
      cheer();
      item.fly = { x: bw * i + bw / 2, y: g.h - binH / 2, t: 0 };
      g.combo += 1;
      burst(g.ps, item.x, item.y, "#ffd000", 18);
      g.pops.push({
        x: item.x,
        y: item.y - 20,
        text: g.combo > 1 ? `combo x${g.combo}` : "¡Bien!",
        life: 0.8,
      });
    } else {
      boop();
      g.combo = 0;
      g.lives -= 1;
      g.shake = 0.45;
      g.lock = 0.35;
      if (g.lives <= 0) g.over = "lost";
      else {
        g.item = spawn(g.w);
        g.speed = Math.min(160, g.speed + 6);
      }
    }
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="¡A los botes!"
        how="Cae una cosa. Tocá el bote correcto: orgánico, recicla u otros."
        cover="/scenes/reciclar.jpg"
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
        cover="/scenes/zizu-rio.jpg"
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
  stepParticles(g.ps, dt);
  for (let i = g.pops.length - 1; i >= 0; i--) {
    const p = g.pops[i]!;
    p.y -= 50 * dt;
    p.life -= dt;
    if (p.life <= 0) g.pops.splice(i, 1);
  }
  const item = g.item;
  if (!item) return;
  const binH = Math.max(130, g.h * 0.28);
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
      g.speed = Math.min(160, 80 + g.score * 0.7);
    }
    return;
  }
  item.y += g.speed * dt;
  if (item.y > g.h - binH + 24) {
    boop();
    g.combo = 0;
    g.lives -= 1;
    g.shake = 0.4;
    if (g.lives <= 0) g.over = "lost";
    else {
      g.item = spawn(g.w);
      g.speed = Math.min(160, g.speed + 8);
    }
  }
}

function paint(ctx: CanvasRenderingContext2D, g: World) {
  const { w, h, sprites } = g;
  ctx.save();
  if (g.shake > 0) {
    ctx.translate((Math.random() - 0.5) * 12 * g.shake, (Math.random() - 0.5) * 10 * g.shake);
  }
  const bg = sprites["/scenes/zizu-rio.jpg"];
  if (bg && bg.complete) ctx.drawImage(bg, 0, 0, w, h);
  else {
    ctx.fillStyle = "#8fd6a4";
    ctx.fillRect(0, 0, w, h);
  }
  ctx.fillStyle = "rgba(255,246,216,0.18)";
  ctx.fillRect(0, 0, w, h);

  const binH = Math.max(130, h * 0.28);
  const bw = w / 3;
  BINS.forEach((b, i) => {
    blit(ctx, sprites[b.src], i * bw + bw / 2, h - binH / 2 + 8, Math.min(bw - 8, binH + 20));
    ctx.font = "700 15px Fredoka, Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff6d8";
    ctx.strokeStyle = "#1f1408";
    ctx.lineWidth = 4;
    ctx.strokeText(b.label, i * bw + bw / 2, h - 10);
    ctx.fillText(b.label, i * bw + bw / 2, h - 10);
  });

  blit(ctx, sprites["/characters/zizu.webp"], 52, h - binH - 28, 96);

  ctx.font = "700 22px Fredoka, Nunito, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffd000";
  ctx.strokeStyle = "#1f1408";
  ctx.lineWidth = 5;
  ctx.strokeText("¡Tocá el bote!", w / 2, 34);
  ctx.fillText("¡Tocá el bote!", w / 2, 34);

  const item = g.item;
  if (item) {
    blit(ctx, sprites[item.kind.src], item.x, item.y, 108);
    ctx.font = "700 16px Fredoka, Nunito, sans-serif";
    ctx.fillStyle = "#1f1408";
    ctx.strokeStyle = "#fff6d8";
    ctx.lineWidth = 4;
    ctx.strokeText(item.kind.name, item.x, item.y + 62);
    ctx.fillText(item.kind.name, item.x, item.y + 62);
  }

  drawParticles(ctx, g.ps);
  ctx.textAlign = "center";
  ctx.font = "700 22px Fredoka, Nunito, sans-serif";
  for (const p of g.pops) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = "#ffd000";
    ctx.strokeStyle = "#1f1408";
    ctx.lineWidth = 4;
    ctx.strokeText(p.text, p.x, p.y);
    ctx.fillText(p.text, p.x, p.y);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}
