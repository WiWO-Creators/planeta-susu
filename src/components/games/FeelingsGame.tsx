import { useMemo, useState } from "react";
import { ArcadeHud, ArcadeStart, tone } from "./playkit";
import { GameWin } from "./GameWin";
import { Sticker } from "./Sticker";
import { drawCloud, drawDrop, drawSun } from "./stickers";

const FEELS = [
  { id: "alegria", label: "alegría", color: "#ffe27a", pose: "/characters/susu.webp", say: "¡Brillo!", draw: drawSun },
  { id: "calma", label: "calma", color: "#c5d7ff", pose: "/characters/vector.webp", say: "Despacio.", draw: drawCloud },
  { id: "rabia", label: "rabia", color: "#ffc4b8", pose: "/characters/gadu.webp", say: "¡Importa!", draw: drawSun },
  { id: "miedo", label: "miedo", color: "#e3d4ff", pose: "/characters/margarel.webp", say: "Un paso.", draw: drawCloud },
  { id: "triste", label: "tristeza", color: "#c8f5dc", pose: "/characters/zizu.webp", say: "Me siento cerca.", draw: drawDrop },
];

export function FeelingsGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const round = FEELS[i % FEELS.length]!;
  const opts = useMemo(() => [...FEELS].sort(() => Math.random() - 0.5), [i]);

  function pick(id: string) {
    const ok = id === round.id;
    tone(ok ? 780 : 160, 110, ok ? "triangle" : "sawtooth");
    if (ok) setScore((s) => s + 1);
    if (i + 1 >= 8) setPhase("win");
    else setI((n) => n + 1);
  }

  if (phase === "start") {
    return (
      <ArcadeStart
        who="susu"
        title="El radar de emociones"
        how="Mirá la cara. Tocá el clima que ves."
        onStart={() => {
          setPhase("play");
          setI(0);
          setScore(0);
        }}
      />
    );
  }
  if (phase === "win") {
    return (
      <GameWin
        who="susu"
        score={score}
        total={8}
        id="game:emociones"
        badge="radar-susu"
        kids="Nombrar el clima interior es el primer paso."
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={score * 15} extra={<span>{i + 1}/8</span>} />
      <div className="mt-3 overflow-hidden rounded-card border-[3px] border-ink p-4 text-center" style={{ background: round.color }}>
        <img src={round.pose} alt="" className="mx-auto h-40 bob object-contain sm:h-48" />
        <p className="mt-2 font-display text-2xl font-semibold">«{round.say}»</p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {opts.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => pick(f.id)}
            className="flex min-h-20 flex-col items-center justify-center rounded-2xl border-[3px] border-ink font-display font-semibold shadow-chunky-sm active:translate-y-1"
            style={{ background: f.color }}
          >
            <Sticker draw={f.draw} size={48} />
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
