import { useMemo, useState } from "react";
import { ArcadeHud, ArcadeStart, tone } from "./playkit";
import { GameWin } from "./GameWin";

const FEELS = [
  { id: "alegria", label: "alegría", color: "#ffd000", pose: "/characters/susu.webp", say: "¡Brillo!" },
  { id: "calma", label: "calma", color: "#5579df", pose: "/characters/vector.webp", say: "Despacio." },
  { id: "rabia", label: "rabia", color: "#e23b4a", pose: "/characters/gadu.webp", say: "¡Importa!" },
  { id: "miedo", label: "miedo", color: "#6c3ce0", pose: "/characters/margarel.webp", say: "Un paso." },
  { id: "triste", label: "tristeza", color: "#2ebe7a", pose: "/characters/zizu.webp", say: "Me siento cerca." },
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
            className="min-h-14 rounded-2xl border-[3px] border-ink font-display font-semibold shadow-chunky-sm active:translate-y-1"
            style={{ background: f.color }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
