import { useMemo, useState } from "react";
import { characterMap } from "@/data/characters";
import { useProgress } from "@/store/progress";
import { ding, cn } from "@/lib/utils";

const PALETTE = [
  { id: "y", name: "amarillo", hex: "#ffd000" },
  { id: "r", name: "rojo", hex: "#e23b4a" },
  { id: "b", name: "azul", hex: "#5579df" },
  { id: "g", name: "verde", hex: "#2ebe7a" },
  { id: "p", name: "violeta", hex: "#6c3ce0" },
  { id: "w", name: "blanco", hex: "#fff6d8" },
];

function mixHex(a: string, b: string) {
  const n = (h: string) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const [ar, ag, ab] = n(a);
  const [br, bg, bb] = n(b);
  const r = Math.round((ar + br) / 2);
  const g = Math.round((ag + bg) / 2);
  const bl = Math.round((ab + bb) / 2);
  return `#${[r, g, bl].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

export function ColorMix() {
  const [left, setLeft] = useState(PALETTE[0]);
  const [right, setRight] = useState(PALETTE[2]);
  const [guess, setGuess] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const complete = useProgress((s) => s.complete);
  const result = useMemo(() => mixHex(left.hex, right.hex), [left, right]);

  function mix() {
    setRevealed(true);
    complete("toy:colormix", 2, undefined, "gadu");
    ding(true);
  }

  return (
    <div>
      <p className="font-display text-lg font-semibold">Elige dos. Mezcla.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <SwatchSet label="Uno" value={left.id} onPick={(p) => { setLeft(p); setRevealed(false); }} />
        <SwatchSet label="Otro" value={right.id} onPick={(p) => { setRight(p); setRevealed(false); }} />
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">Hipótesis</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {PALETTE.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-label={p.name}
                onClick={() => setGuess(p.id)}
                className={cn(
                  "size-10 rounded-full border-[3px] border-ink",
                  guess === p.id && "ring-4 ring-gadu ring-offset-2",
                )}
                style={{ background: p.hex }}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={mix}
        className="chunky mt-5 inline-flex min-h-12 items-center rounded-full bg-gadu px-5 font-display font-semibold text-cream"
      >
        Mezclar
      </button>
      {revealed ? (
        <div className="mt-5 flex items-center gap-4">
          <div className="size-24 rounded-card border-[3px] border-ink shadow-chunky-sm" style={{ background: result }} />
          <p className="font-display text-lg font-semibold">
            {guess ? "Tu hipótesis quedó al lado del resultado. ¿Se parecen?" : "Así se ven juntos."}{" "}
            Un color nuevo es una mezcla, no magia.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function SwatchSet({
  label,
  value,
  onPick,
}: {
  label: string;
  value: string;
  onPick: (p: (typeof PALETTE)[number]) => void;
}) {
  return (
    <div>
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {PALETTE.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-label={p.name}
            onClick={() => onPick(p)}
            className={cn("size-10 rounded-full border-[3px] border-ink", value === p.id && "ring-4 ring-ink ring-offset-2")}
            style={{ background: p.hex }}
          />
        ))}
      </div>
    </div>
  );
}

export function ShadowSun() {
  const [t, setT] = useState(35);
  const complete = useProgress((s) => s.complete);
  const angle = -70 + (t / 100) * 140;
  const stretch = 0.6 + Math.abs(t - 50) / 50 * 1.8;
  const opacity = 0.18 + (1 - Math.abs(t - 50) / 50) * 0.2;

  return (
    <div>
      <p className="font-display text-lg font-semibold">Mueve el sol.</p>
      <div className="relative mt-4 h-56 overflow-hidden rounded-card border-[3px] border-ink bg-sky">
        <div
          className="absolute top-4 size-12 rounded-full border-[3px] border-ink bg-yellow"
          style={{ left: `${t}%`, transform: "translateX(-50%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-zizu-deep/40" />
        <img
          src="/characters/zizu.webp"
          alt=""
          className="absolute bottom-10 left-1/2 h-28 w-auto -translate-x-1/2 object-contain"
        />
        <div
          className="absolute bottom-10 left-1/2 h-6 origin-top rounded-full bg-ink"
          style={{
            width: 36,
            opacity,
            transform: `translateX(-50%) rotate(${angle}deg) scaleX(${stretch})`,
          }}
        />
      </div>
      <label className="mt-4 flex items-center gap-3">
        <span className="font-display text-sm font-semibold">Sol</span>
        <input
          type="range"
          min={5}
          max={95}
          value={t}
          onChange={(e) => {
            setT(Number(e.target.value));
            complete("toy:shadow", 1, undefined, "vector");
          }}
          className="h-3 flex-1 cursor-pointer accent-yellow"
        />
        <span className="font-display text-sm">{t < 30 ? "amanecer" : t > 70 ? "atardecer" : "mediodía"}</span>
      </label>
      <p className="mt-2 text-ink-soft">Al atardecer, la sombra se alarga.</p>
    </div>
  );
}

const FEELS = [
  { id: "alegria", label: "alegría", color: "#ffd000", say: "La alegría cabe en un salto. ¿Quieres compartirla o guardarla un rato?" },
  { id: "calma", label: "calma", color: "#5579df", say: "La calma también es una señal. Podemos ir despacio." },
  { id: "rabia", label: "rabia", color: "#e23b4a", say: "La rabia avisa que algo importa. ¿Quieres una idea, ayuda o espacio?" },
  { id: "miedo", label: "miedo", color: "#6c3ce0", say: "El miedo a veces es un paso que falta, no un corazón roto." },
  { id: "triste", label: "tristeza", color: "#2ebe7a", say: "La tristeza puede sentarse con nosotras. No hay que apagarla al toque." },
  { id: "asombro", label: "asombro", color: "#ff5d8f", say: "El asombro enciende el radar. ¿Qué pregunta aparece?" },
];

export function FeelMeter() {
  const [id, setId] = useState<string | null>(null);
  const complete = useProgress((s) => s.complete);
  const feel = FEELS.find((f) => f.id === id);
  const susu = characterMap.susu;

  return (
    <div>
      <p className="font-display text-lg font-semibold">¿Cómo está el clima interior ahora?</p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {FEELS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setId(f.id);
              complete("toy:feel", 1, undefined, "susu");
              ding(true);
            }}
            className={cn(
              "min-h-16 rounded-card border-[3px] border-ink font-display text-sm font-semibold shadow-chunky-sm",
              id === f.id && "translate-y-[3px] shadow-none",
            )}
            style={{ background: f.color }}
          >
            {f.label}
          </button>
        ))}
      </div>
      {feel ? (
        <figure className="mt-5 flex gap-3 rounded-card border-[3px] border-ink bg-cloud p-4">
          <img src={susu.portrait} alt="" className="h-20 w-auto object-contain" />
          <figcaption>
            <p className="font-display text-sm font-semibold text-susu">Susu</p>
            <p className="mt-1 text-lg">«{feel.say}»</p>
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}

export function HugAsk() {
  const [ans, setAns] = useState<"si" | "no" | "cerca" | null>(null);
  const complete = useProgress((s) => s.complete);
  const zizu = characterMap.zizu;
  const replies = {
    si: "Gracias por decir que sí. Un abrazo con permiso calienta más.",
    no: "Gracias por el no. Yo me siento cerca, sin girar. Cuando quieras, avisas.",
    cerca: "Me siento aquí. Cuidar también es compañía sin tocar.",
  };

  return (
    <div>
      <div className="flex items-end gap-3">
        <img src={zizu.portrait} alt="" className="h-28 w-auto object-contain" />
        <p className="rounded-card border-[3px] border-ink bg-cloud px-4 py-3 font-display text-lg font-semibold">
          Puedo ayudarte. ¿Quieres un abrazo, compañía cerca o espacio?
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {([
          ["si", "Abrazo"],
          ["cerca", "Cerca, sin abrazo"],
          ["no", "Ahora no"],
        ] as const).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setAns(k);
              complete("toy:hug", 1, undefined, "zizu");
              ding(true);
            }}
            className={cn(
              "min-h-12 rounded-full border-[3px] border-ink px-4 font-display font-semibold shadow-chunky-sm",
              ans === k ? "bg-zizu" : "bg-cream",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      {ans ? <p className="mt-4 font-display text-lg">Zizú: «{replies[ans]}»</p> : null}
    </div>
  );
}

const STAMPS = [
  { id: "arbol", label: "árbol", color: "#2ebe7a" },
  { id: "agua", label: "agua", color: "#5579df" },
  { id: "casa", label: "casa", color: "#ea9e48" },
  { id: "ave", label: "ave", color: "#ff5d8f" },
];

export function Bitacora() {
  const [tool, setTool] = useState(STAMPS[0].id);
  const [marks, setMarks] = useState<{ x: number; y: number; id: string }[]>([]);
  const complete = useProgress((s) => s.complete);

  function drop(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setMarks((m) => [...m, { x, y, id: tool }].slice(-24));
    complete("toy:map", 1, undefined, "margarel");
    ding(true);
  }

  return (
    <div>
      <p className="font-display text-lg font-semibold">Toca el mapa.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {STAMPS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setTool(s.id)}
            className={cn(
              "rounded-full border-[3px] border-ink px-3 py-1 font-display text-sm font-semibold",
              tool === s.id ? "text-ink" : "bg-cream",
            )}
            style={{ background: tool === s.id ? s.color : undefined }}
          >
            {s.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setMarks([])}
          className="rounded-full border-[3px] border-ink bg-cream px-3 py-1 font-display text-sm font-semibold"
        >
          Borrar
        </button>
      </div>
      <div
        role="application"
        aria-label="Mapa del barrio"
        onClick={drop}
        className="relative mt-4 h-56 cursor-crosshair overflow-hidden rounded-card border-[3px] border-ink bg-mint"
      >
        <div className="absolute left-[8%] top-[20%] h-16 w-24 rounded-2xl bg-vector/50" />
        <div className="absolute right-[12%] top-[28%] size-20 rounded-full bg-zizu/40" />
        <div className="absolute bottom-[18%] left-[28%] h-10 w-2/5 rounded-full bg-vector/30" />
        <div className="absolute bottom-[8%] right-[18%] h-14 w-20 rounded-md bg-orange/70" />
        {marks.map((m, i) => {
          const s = STAMPS.find((x) => x.id === m.id)!;
          return (
            <span
              key={`${m.x}-${m.y}-${i}`}
              className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink"
              style={{ left: `${m.x}%`, top: `${m.y}%`, background: s.color }}
            />
          );
        })}
      </div>
      <p className="mt-2 text-sm text-ink-soft">{marks.length} pistas en la bitácora.</p>
    </div>
  );
}
