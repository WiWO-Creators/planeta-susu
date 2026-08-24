import { useMemo, useRef, useState, type PointerEvent } from "react";
import { characters } from "@/data/characters";
import { cn } from "@/lib/utils";
import { GameWin } from "./GameWin";
import { ArcadeHud, ArcadeStart, Playfield, tone, useLoop } from "./playkit";

export function SilhouetteGame() {
  const order = useMemo(() => [...characters].sort(() => Math.random() - 0.5), []);
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [x, setX] = useState(-20);
  const who = order[i];

  useLoop(phase === "play" && !!who, (dt) => {
    setX((v) => {
      const n = v + 28 * dt;
      return n > 120 ? -20 : n;
    });
  });

  function pick(slug: string) {
    if (!who) return;
    const ok = slug === who.slug;
    tone(ok ? 780 : 160, 120, ok ? "triangle" : "sawtooth");
    if (ok) setScore((s) => s + 1);
    if (i + 1 >= order.length) setPhase("win");
    else {
      setI((n) => n + 1);
      setX(-20);
    }
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="¿Quién es esa sombra?"
        how="Una sombra camina. Tocá de quién es."
        onStart={() => {
          setPhase("play");
          setI(0);
          setScore(0);
          setX(-20);
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
      <Playfield className="relative mt-3 h-56 overflow-hidden rounded-card border-[3px] border-ink bg-[#163528] sm:h-64">
        <div className="absolute inset-x-0 bottom-0 h-10 bg-[#0d2118]" />
        <img
          src={who.portrait}
          alt=""
          className="absolute bottom-6 h-36 w-auto object-contain brightness-0 sm:h-44"
          style={{ left: `${x}%`, transform: "translateX(-50%)" }}
        />
      </Playfield>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {characters.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => pick(c.slug)}
            className="flex flex-col items-center rounded-2xl border-[3px] border-ink bg-cream p-1 active:translate-y-1"
          >
            <img src={c.portrait} alt={c.name} className="h-14 w-auto object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}

const STAGES = [
  { id: "mar", label: "mar", y: 78, color: "#5579df" },
  { id: "sol", label: "sol", y: 18, color: "#ffd000" },
  { id: "nube", label: "nube", y: 22, color: "#fff6d8" },
  { id: "lluvia", label: "lluvia", y: 48, color: "#5fade9" },
];

export function CycleGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [step, setStep] = useState(0);
  const drop = useRef({ x: 50, y: 78 });
  const [, tick] = useState(0);

  useLoop(phase === "play", () => {
    tick((n) => n + 1);
  });

  function move(e: PointerEvent<HTMLDivElement>) {
    if (phase !== "play") return;
    const r = e.currentTarget.getBoundingClientRect();
    drop.current = {
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    };
    const s = STAGES[step]!;
    const dy = Math.abs(drop.current.y - s.y);
    const dx = Math.abs(drop.current.x - (20 + step * 20));
    if (dy < 12 && dx < 16) {
      tone(500 + step * 80, 100);
      if (step + 1 >= STAGES.length) setPhase("win");
      else setStep((n) => n + 1);
    }
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="zizu"
        title="Viaje de una gota"
        how="Arrastrá la gota: mar, sol, nube, lluvia."
        onStart={() => {
          setPhase("play");
          setStep(0);
          drop.current = { x: 50, y: 78 };
        }}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="zizu"
        score={4}
        total={4}
        id="game:ciclo"
        badge="ciclo-agua"
        kids="El agua no se esfuma: viaja."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={step * 25} extra={<span>{STAGES[step]?.label}</span>} />
      <Playfield className="relative mt-3 h-[26rem] touch-none overflow-hidden rounded-card border-[3px] border-ink bg-sky sm:h-[30rem]">
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-vector" />
        <div className="absolute right-6 top-4 size-16 rounded-full border-[3px] border-ink bg-yellow" />
        <div className="absolute left-8 top-8 h-14 w-28 rounded-full border-[3px] border-ink bg-cloud" />
        {STAGES.map((s, i) => (
          <span
            key={s.id}
            className={cn(
              "absolute rounded-full border-[3px] border-ink font-display text-xs font-semibold",
              i === step ? "scale-110" : "opacity-60",
            )}
            style={{
              left: `${20 + i * 20}%`,
              top: `${s.y}%`,
              background: s.color,
              padding: "4px 8px",
              transform: "translate(-50%, -50%)",
            }}
          >
            {s.label}
          </span>
        ))}
        <div
          className="absolute inset-0"
          onPointerMove={move}
          onPointerDown={move}
        >
          <span
            className="absolute size-10 -translate-x-1/2 -translate-y-1/2 rounded-b-full rounded-t-[40%] border-[3px] border-ink bg-sky"
            style={{ left: `${drop.current.x}%`, top: `${drop.current.y}%` }}
          />
        </div>
      </Playfield>
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
  const p = PAIRS[i];

  function choose(yes: boolean) {
    if (!p) return;
    const ok = yes === p.ok;
    tone(ok ? 820 : 160, 120, ok ? "triangle" : "sawtooth");
    if (ok) setScore((s) => s + 1);
    if (i + 1 >= PAIRS.length) setPhase("win");
    else setI((n) => n + 1);
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="margarel"
        title="¿Riman?"
        how="Dos palabras vuelan. Tocá SÍ o NO."
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
      <Playfield className="relative mt-3 flex h-64 items-center justify-center gap-6 overflow-hidden rounded-card border-[3px] border-ink bg-mint sm:h-72">
        <img src="/characters/margarel.webp" alt="" className="absolute bottom-0 right-2 h-24" />
        <span className="bob rounded-2xl border-[3px] border-ink bg-yellow px-5 py-3 font-display text-3xl font-semibold">
          {p.a}
        </span>
        <span className="bob-d2 rounded-2xl border-[3px] border-ink bg-cloud px-5 py-3 font-display text-3xl font-semibold">
          {p.b}
        </span>
      </Playfield>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="min-h-16 rounded-card border-[3px] border-ink bg-zizu font-display text-2xl font-semibold shadow-chunky"
        >
          ¡Sí riman!
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="min-h-16 rounded-card border-[3px] border-ink bg-coral font-display text-2xl font-semibold text-cream shadow-chunky"
        >
          No
        </button>
      </div>
    </div>
  );
}

type Balloon = { id: number; x: number; y: number; vy: number; hue: string };
let bid = 1;

export function CountGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [need, setNeed] = useState(4);
  const [got, setGot] = useState(0);
  const [wave, setWave] = useState(1);
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState<Balloon[]>([]);
  const spawn = useRef(0);

  useLoop(phase === "play", (dt) => {
    spawn.current += dt;
    if (spawn.current > 0.7) {
      spawn.current = 0;
      setBalls((b) => [
        ...b,
        {
          id: bid++,
          x: 10 + Math.random() * 80,
          y: 110,
          vy: 28 + wave * 4,
          hue: ["#ff5d8f", "#ffd000", "#5579df", "#2ebe7a", "#6c3ce0"][Math.floor(Math.random() * 5)]!,
        },
      ]);
    }
    setBalls((b) => b.map((x) => ({ ...x, y: x.y - x.vy * dt })).filter((x) => x.y > -10));
  });

  function pop(id: number) {
    tone(620 + got * 40, 80);
    setBalls((b) => b.filter((x) => x.id !== id));
    setGot((g) => {
      const n = g + 1;
      if (n >= need) {
        setScore((s) => s + need * 10);
        if (wave >= 5) {
          setPhase("win");
          return n;
        }
        setWave((w) => w + 1);
        setNeed((k) => k + 1);
        return 0;
      }
      return n;
    });
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="vector"
        title="Revienta globos"
        how="Tocá globos hasta llegar al número."
        onStart={() => {
          setPhase("play");
          setNeed(4);
          setGot(0);
          setWave(1);
          setScore(0);
          setBalls([]);
        }}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="vector"
        score={score}
        total={5}
        id="game:contar"
        badge="globos-vector"
        kids="Contar es una forma de mirar con cuidado."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={score} extra={<span>{got}/{need}</span>} />
      <Playfield className="relative mt-3 h-[28rem] touch-none overflow-hidden rounded-card border-[3px] border-ink bg-sky sm:h-[32rem]">
        <p className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full border-[3px] border-ink bg-yellow px-4 py-1 font-display text-2xl font-semibold">
          {need}
        </p>
        {balls.map((b) => (
          <button
            key={b.id}
            type="button"
            aria-label="globo"
            onClick={() => pop(b.id)}
            className="absolute size-14 -translate-x-1/2 rounded-full border-[3px] border-ink shadow-chunky-sm active:scale-90 sm:size-16"
            style={{ left: `${b.x}%`, top: `${b.y}%`, background: b.hue }}
          />
        ))}
      </Playfield>
    </div>
  );
}

const ING = [
  { id: "pan", label: "pan", color: "#ea9e48" },
  { id: "tomate", label: "tomate", color: "#d7655c" },
  { id: "hoja", label: "hoja", color: "#2ebe7a" },
  { id: "queso", label: "queso", color: "#ffd000" },
];

export function RecipeGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [order] = useState(() => [...ING].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<string[]>([]);
  const drag = useRef<string | null>(null);

  function drop() {
    const id = drag.current;
    drag.current = null;
    if (!id) return;
    const next = order[placed.length];
    if (next && next.id === id) {
      tone(700, 90);
      const n = [...placed, id];
      setPlaced(n);
      if (n.length === order.length) setPhase("win");
    } else tone(160, 140, "sawtooth");
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="gadu"
        title="Receta de pasos"
        how="El orden importa. Arrastrá al plato en la receta."
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
      <p className="mt-2 font-display text-lg font-semibold">
        Ahora: {order[placed.length]?.label}
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_180px]">
        <div
          onPointerUp={drop}
          className="flex min-h-48 flex-col items-center justify-end rounded-card border-[3px] border-ink bg-cream p-4"
        >
          {placed.map((id) => {
            const it = ING.find((x) => x.id === id)!;
            return (
              <div
                key={id}
                className="h-8 w-40 rounded-md border-2 border-ink"
                style={{ background: it.color }}
              />
            );
          })}
          <p className="mt-2 font-display text-sm">plato</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
          {ING.filter((x) => !placed.includes(x.id)).map((it) => (
            <button
              key={it.id}
              type="button"
              onPointerDown={() => {
                drag.current = it.id;
              }}
              className="min-h-14 rounded-2xl border-[3px] border-ink font-display font-semibold shadow-chunky-sm"
              style={{ background: it.color }}
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
