import { useCallback, useRef, useState, type PointerEvent } from "react";
import { ArcadeHud, ArcadeStart, Playfield, tone, useLoop } from "./playkit";
import { GameWin } from "./GameWin";
import { cn } from "@/lib/utils";

type Bin = "org" | "rec" | "otr";
type Piece = {
  id: number;
  name: string;
  bin: Bin;
  color: string;
  x: number;
  y: number;
  vy: number;
  held: boolean;
};

const KINDS: { name: string; bin: Bin; color: string }[] = [
  { name: "Cáscara", bin: "org", color: "#ffd000" },
  { name: "Manzana", bin: "org", color: "#d7655c" },
  { name: "Hojas", bin: "org", color: "#2ebe7a" },
  { name: "Botella", bin: "rec", color: "#5fade9" },
  { name: "Papel", bin: "rec", color: "#fff6d8" },
  { name: "Lata", bin: "rec", color: "#7a6550" },
  { name: "Cartón", bin: "rec", color: "#ea9e48" },
  { name: "Bolsa", bin: "otr", color: "#ff5d8f" },
  { name: "Chicle", bin: "otr", color: "#6c3ce0" },
];

const BINS: { id: Bin; label: string; color: string }[] = [
  { id: "org", label: "Orgánico", color: "#2ebe7a" },
  { id: "rec", label: "Recicla", color: "#5579df" },
  { id: "otr", label: "Otros", color: "#1f1408" },
];

let nid = 1;

export function RecycleGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win" | "lost">("start");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [pieces, setPieces] = useState<Piece[]>([]);
  const hold = useRef<number | null>(null);
  const spawn = useRef(0);
  const speed = useRef(38);

  const spawnOne = useCallback(() => {
    const k = KINDS[Math.floor(Math.random() * KINDS.length)]!;
    setPieces((p) => [
      ...p,
      {
        id: nid++,
        name: k.name,
        bin: k.bin,
        color: k.color,
        x: 8 + Math.random() * 72,
        y: -12,
        vy: speed.current,
        held: false,
      },
    ]);
  }, []);

  useLoop(phase === "play", (dt) => {
    spawn.current += dt;
    if (spawn.current > Math.max(0.7, 1.8 - score * 0.03)) {
      spawn.current = 0;
      spawnOne();
      speed.current = Math.min(90, 38 + score * 1.2);
    }
    setPieces((list) => {
      const next: Piece[] = [];
      let miss = 0;
      for (const it of list) {
        if (it.held) {
          next.push(it);
          continue;
        }
        const y = it.y + it.vy * dt;
        if (y > 78) miss += 1;
        else next.push({ ...it, y });
      }
      if (miss) {
        tone(160, 180, "sawtooth");
        setLives((l) => {
          const n = l - miss;
          if (n <= 0) setPhase("lost");
          return n;
        });
      }
      return next;
    });
  });

  function onDown(id: number, e: PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    hold.current = id;
    setPieces((p) => p.map((it) => (it.id === id ? { ...it, held: true } : it)));
  }

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (hold.current == null) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    const hid = hold.current;
    setPieces((p) => p.map((it) => (it.id === hid ? { ...it, x: x - 6, y: y - 6 } : it)));
  }

  function onUp(e: PointerEvent<HTMLDivElement>) {
    if (hold.current == null) return;
    const hid = hold.current;
    hold.current = null;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    const bin = y > 78 ? (x < 33 ? "org" : x < 66 ? "rec" : "otr") : null;
    setPieces((p) => {
      const it = p.find((x) => x.id === hid);
      if (!it) return p;
      if (bin && bin === it.bin) {
        tone(880, 120);
        setScore((s) => {
          const n = s + 10;
          if (n >= 120) setPhase("win");
          return n;
        });
        return p.filter((x) => x.id !== hid);
      }
      if (bin) {
        tone(180, 160, "sawtooth");
        setLives((l) => {
          const n = l - 1;
          if (n <= 0) setPhase("lost");
          return n;
        });
        return p.filter((x) => x.id !== hid);
      }
      return p.map((x) => (x.id === hid ? { ...x, held: false } : x));
    });
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="¡Atrapá la basura!"
        how="Las cosas caen. Agarralas y tiralas al bote correcto."
        onStart={() => {
          setPhase("play");
          setScore(0);
          setLives(3);
          setPieces([]);
          speed.current = 38;
        }}
      />
    );
  }
  if (phase === "win" || (phase === "lost" && score >= 120)) {
    return (
      <GameWin
        who="zizu"
        score={score}
        total={120}
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
        how={`${score} puntos. ¿Otra vez?`}
        onStart={() => {
          setPhase("play");
          setScore(0);
          setLives(3);
          setPieces([]);
          speed.current = 38;
        }}
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={score} lives={lives} extra={<span>120 para ganar</span>} />
      <Playfield className="relative mt-3 h-[30rem] overflow-hidden rounded-card border-[3px] border-ink bg-[#8fd6a4] select-none touch-none sm:h-[34rem]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-sky" />
        <img
          src="/characters/zizu.webp"
          alt=""
          className="pointer-events-none absolute bottom-24 left-2 h-20 w-auto object-contain"
        />
        <div
          className="absolute inset-0"
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          {pieces.map((it) => (
            <button
              key={it.id}
              type="button"
              onPointerDown={(e) => onDown(it.id, e)}
              className="absolute flex size-16 cursor-grab items-center justify-center rounded-2xl border-[3px] border-ink font-display text-[11px] font-semibold leading-tight active:cursor-grabbing sm:size-20 sm:text-xs"
              style={{ left: `${it.x}%`, top: `${it.y}%`, background: it.color, zIndex: it.held ? 5 : 1 }}
            >
              {it.name}
            </button>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 grid h-[22%] grid-cols-3 border-t-[3px] border-ink">
          {BINS.map((b) => (
            <div
              key={b.id}
              className="flex items-end justify-center pb-2 font-display text-sm font-semibold text-cream"
              style={{ background: b.color }}
            >
              {b.label}
            </div>
          ))}
        </div>
      </Playfield>
    </div>
  );
}
