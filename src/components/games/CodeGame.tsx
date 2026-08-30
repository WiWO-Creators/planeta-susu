import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Play, Trash2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArcadeStart, tone } from "./playkit";
import { GameWin } from "./GameWin";
import { cn } from "@/lib/utils";
import { ART } from "@/data/gameArt";

type Dir = "U" | "D" | "L" | "R";
type Cell = { x: number; y: number };

const LEVELS: { walls: Cell[]; start: Cell; goal: Cell; size: number }[] = [
  {
    size: 5,
    start: { x: 0, y: 4 },
    goal: { x: 4, y: 0 },
    walls: [
      { x: 2, y: 4 },
      { x: 2, y: 3 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
    ],
  },
  {
    size: 5,
    start: { x: 0, y: 0 },
    goal: { x: 4, y: 4 },
    walls: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ],
  },
  {
    size: 6,
    start: { x: 0, y: 5 },
    goal: { x: 5, y: 0 },
    walls: [
      { x: 1, y: 5 },
      { x: 1, y: 4 },
      { x: 1, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
    ],
  },
];

const DELTA: Record<Dir, Cell> = {
  U: { x: 0, y: -1 },
  D: { x: 0, y: 1 },
  L: { x: -1, y: 0 },
  R: { x: 1, y: 0 },
};

function eq(a: Cell, b: Cell) {
  return a.x === b.x && a.y === b.y;
}

export function CodeGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [lvl, setLvl] = useState(0);
  const L = LEVELS[lvl]!;
  const [prog, setProg] = useState<Dir[]>([]);
  const [pos, setPos] = useState<Cell>(L.start);
  const [running, setRunning] = useState(false);
  const [bump, setBump] = useState(false);

  function isWall(c: Cell) {
    return L.walls.some((w) => eq(w, c));
  }

  function add(d: Dir) {
    if (running || prog.length >= 16) return;
    setProg((p) => [...p, d]);
    setBump(false);
  }

  async function run() {
    if (running || prog.length === 0) return;
    setRunning(true);
    setBump(false);
    let cur = { ...L.start };
    setPos(cur);
    for (const step of prog) {
      await wait(320);
      const n = { x: cur.x + DELTA[step].x, y: cur.y + DELTA[step].y };
      if (n.x < 0 || n.y < 0 || n.x >= L.size || n.y >= L.size || isWall(n)) {
        tone(140, 200, "sawtooth");
        setBump(true);
        setRunning(false);
        return;
      }
      cur = n;
      setPos(cur);
      tone(520, 80);
      if (eq(cur, L.goal)) {
        tone(880, 200);
        if (lvl + 1 >= LEVELS.length) {
          setPhase("win");
        } else {
          const next = lvl + 1;
          setLvl(next);
          setProg([]);
          setPos(LEVELS[next]!.start);
        }
        setRunning(false);
        return;
      }
    }
    tone(180, 180, "sawtooth");
    setBump(true);
    setRunning(false);
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="gadu"
        title="Flechas para Gadú"
        how="Armá un camino con flechas. Gadú camina solo. Si pega una roca, se edita."
        cover="/scenes/algoritmo-si.jpg"
        onStart={() => {
          setPhase("play");
          setLvl(0);
          setProg([]);
          setPos(LEVELS[0]!.start);
        }}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="gadu"
        score={3}
        total={3}
        id="game:codigo"
        badge="flechas-gadu"
        kids="Un programa es una receta. Si falla, se cambia un paso."
      />
    );
  }

  return (
    <div>
      <p className="mb-3 rounded-2xl border-[3px] border-ink bg-yellow px-3 py-2 text-center font-display font-semibold">
        Nivel {lvl + 1} / {LEVELS.length}
      </p>
      <div className="grid gap-4 lg:grid-cols-[1fr_200px]">
        <div
          className="grid aspect-square w-full max-w-md gap-1 rounded-card border-[3px] border-ink bg-gadu/30 p-2 shadow-chunky"
          style={{ gridTemplateColumns: `repeat(${L.size}, 1fr)` }}
        >
          {Array.from({ length: L.size * L.size }, (_, i) => {
            const x = i % L.size;
            const y = Math.floor(i / L.size);
            const cell = { x, y };
            const here = eq(pos, cell);
            const goal = eq(L.goal, cell);
            const wall = isWall(cell);
            return (
              <div
                key={i}
                className={cn(
                  "relative flex items-center justify-center overflow-hidden rounded-lg border-2 border-ink/15 bg-cloud",
                  wall && "bg-ink",
                  goal && !here && "bg-yellow",
                )}
              >
                {here ? (
                  <img
                    src="/characters/gadu.webp"
                    alt="Gadú"
                    className={cn("h-[90%] w-auto object-contain transition-transform", bump && "rotate-12")}
                  />
                ) : goal ? (
                  <span className="inline-block">
                    <img src={ART.bread} alt="sándwich" className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 place-items-center gap-2">
            <span />
            <Pad onClick={() => add("U")} label="Arriba">
              <ArrowUp />
            </Pad>
            <span />
            <Pad onClick={() => add("L")} label="Izquierda">
              <ArrowLeft />
            </Pad>
            <Pad onClick={() => add("D")} label="Abajo">
              <ArrowDown />
            </Pad>
            <Pad onClick={() => add("R")} label="Derecha">
              <ArrowRight />
            </Pad>
          </div>
          <div className="min-h-14 rounded-2xl border-[3px] border-ink bg-cloud p-2">
            <p className="flex flex-wrap gap-1 font-display text-xl">
              {prog.length === 0 ? "…" : prog.map((d, i) => <span key={i}>{d === "U" ? "↑" : d === "D" ? "↓" : d === "L" ? "←" : "→"}</span>)}
            </p>
          </div>
          <div className="flex gap-2">
            <Button tone="gadu" onClick={run} disabled={running}>
              <Play className="size-4" />
            </Button>
            <Button tone="cream" onClick={() => setProg((p) => p.slice(0, -1))} disabled={running}>
              <Trash2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pad({ onClick, label, children }: { onClick: () => void; label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-16 items-center justify-center rounded-2xl border-[3px] border-ink bg-yellow shadow-chunky-sm active:translate-y-1 sm:size-[4.5rem]"
    >
      {children}
    </button>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
