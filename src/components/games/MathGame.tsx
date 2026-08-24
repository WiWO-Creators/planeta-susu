import { useRef, useState } from "react";
import { ArcadeHud, ArcadeStart, Playfield, tone, useLoop } from "./playkit";
import { GameWin } from "./GameWin";

type Planet = { id: number; x: number; y: number; vx: number; vy: number; r: number; hue: string };

const HUES = ["#5579df", "#6c3ce0", "#ffd000", "#ff5d8f", "#2ebe7a"];
let pid = 1;

function make(n: number): Planet[] {
  return Array.from({ length: n }, () => ({
    id: pid++,
    x: 10 + Math.random() * 80,
    y: 15 + Math.random() * 55,
    vx: (Math.random() * 2 - 1) * 28,
    vy: (Math.random() * 2 - 1) * 28,
    r: 7 + Math.random() * 4,
    hue: HUES[Math.floor(Math.random() * HUES.length)]!,
  }));
}

export function MathGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [wave, setWave] = useState(1);
  const [need, setNeed] = useState(3);
  const [got, setGot] = useState(0);
  const [score, setScore] = useState(0);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const pop = useRef<number[]>([]);

  useLoop(phase === "play", (dt) => {
    setPlanets((list) =>
      list.map((p) => {
        let { x, y, vx, vy, r } = p;
        x += vx * dt;
        y += vy * dt;
        if (x < r) {
          x = r;
          vx *= -1;
        }
        if (x > 100 - r) {
          x = 100 - r;
          vx *= -1;
        }
        if (y < r) {
          y = r;
          vy *= -1;
        }
        if (y > 82 - r) {
          y = 82 - r;
          vy *= -1;
        }
        return { ...p, x, y, vx, vy };
      }),
    );
  });

  function tap(id: number) {
    if (phase !== "play") return;
    tone(640 + got * 80, 90);
    pop.current.push(id);
    setPlanets((p) => p.filter((x) => x.id !== id));
    setGot((g) => {
      const n = g + 1;
      if (n >= need) {
        const nextWave = wave + 1;
        const nextNeed = Math.min(9, 2 + nextWave);
        setScore((s) => s + need * 10);
        if (nextWave > 6) {
          setPhase("win");
          return n;
        }
        setWave(nextWave);
        setNeed(nextNeed);
        setPlanets(make(nextNeed + 2 + Math.floor(nextWave / 2)));
        return 0;
      }
      return n;
    });
  }

  function begin() {
    setPhase("play");
    setWave(1);
    setNeed(3);
    setGot(0);
    setScore(0);
    setPlanets(make(5));
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="vector"
        title="Caza planetas"
        how="Tocá los planetas que flotan. Llegá al número de la ronda."
        onStart={begin}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="vector"
        score={score}
        total={6}
        id="game:sumas"
        badge="planetas-vector"
        kids="Contar es tocar con cuidado. Vector anota todo."
      />
    );
  }

  return (
    <div>
      <ArcadeHud
        score={score}
        extra={
          <span>
            Ronda {wave}/6 · {got}/{need}
          </span>
        }
      />
      <Playfield className="relative mt-3 h-[28rem] overflow-hidden rounded-card border-[3px] border-ink bg-[#1a1040] select-none touch-none sm:h-[32rem]">
        <img
          src="/characters/vector.webp"
          alt=""
          className="pointer-events-none absolute bottom-2 left-2 h-16 w-auto"
        />
        <p className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full border-[3px] border-ink bg-yellow px-4 py-1 font-display text-2xl font-semibold">
          Tocá {need}
        </p>
        {planets.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-label="planeta"
            onClick={() => tap(p.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink shadow-chunky-sm transition-transform active:scale-90"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.r * 2}%`,
              paddingBottom: `${p.r * 2}%`,
              background: p.hue,
            }}
          />
        ))}
      </Playfield>
    </div>
  );
}
