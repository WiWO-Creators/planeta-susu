import { useMemo, useState } from "react";
import { characters } from "@/data/characters";
import { cn } from "@/lib/utils";
import { GameWin } from "./GameWin";
import { ArcadeHud, ArcadeStart, Playfield, tone } from "./playkit";
import { Sticker } from "./Sticker";
import { drawApple, drawBanana, drawBead, drawPlanet } from "./stickers";

export function MemoryGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [deck, setDeck] = useState<string[]>([]);
  const [open, setOpen] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [lock, setLock] = useState(false);
  const [moves, setMoves] = useState(0);

  function deal() {
    const pairs = characters.map((c) => c.slug);
    setDeck([...pairs, ...pairs].sort(() => Math.random() - 0.5));
    setOpen([]);
    setMatched([]);
    setMoves(0);
    setPhase("play");
  }

  function flip(i: number) {
    if (lock || open.includes(i) || matched.includes(deck[i]!)) return;
    const next = [...open, i];
    setOpen(next);
    tone(420, 60);
    if (next.length === 2) {
      setLock(true);
      setMoves((m) => m + 1);
      const [a, b] = next;
      const ok = deck[a!] === deck[b!];
      window.setTimeout(() => {
        if (ok) {
          tone(820, 120);
          setMatched((m) => {
            const n = [...m, deck[a!]!];
            if (n.length === characters.length) setPhase("win");
            return n;
          });
        } else tone(160, 140, "sawtooth");
        setOpen([]);
        setLock(false);
      }, 550);
    }
  }

  if (phase === "start") {
    return <ArcadeStart who="susu" title="Memoria" how="Volteá dos cartas. Encontrá a los cinco amigos." onStart={deal} />;
  }
  if (phase === "win") {
    return (
      <GameWin
        who="susu"
        score={characters.length}
        total={characters.length}
        id="game:memoria"
        badge="memoria-amigos"
        kids={`${moves} intentos. La memoria también se entrena.`}
      />
    );
  }

  return (
    <div>
      <ArcadeHud score={matched.length * 20} extra={<span>{moves} intentos</span>} />
      <div className="mt-3 grid grid-cols-5 gap-2">
        {deck.map((slug, i) => {
          const show = open.includes(i) || matched.includes(slug);
          const c = characters.find((x) => x.slug === slug)!;
          return (
            <button
              key={`${slug}-${i}`}
              type="button"
              onClick={() => flip(i)}
              className="group relative aspect-square [perspective:600px]"
              aria-label={show ? c.name : "carta"}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-2xl border-[3px] border-ink shadow-chunky-sm transition-transform duration-300 [transform-style:preserve-3d]",
                  show && "[transform:rotateY(180deg)]",
                )}
              >
                <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gadu font-display text-2xl text-yellow [backface-visibility:hidden]">
                  ?
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-2xl bg-cream [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <img src={c.portrait} alt="" className="h-full w-full object-contain object-bottom p-1" />
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const BEADS = [
  { color: "#ffd000", name: "sol" },
  { color: "#6c3ce0", name: "uva" },
  { color: "#2ebe7a", name: "hoja" },
  { color: "#ff5d8f", name: "chicle" },
  { color: "#5579df", name: "cielo" },
];

export function PatternGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [lvl, setLvl] = useState(0);
  const pattern = useMemo(() => {
    const a = BEADS[lvl % BEADS.length]!;
    const b = BEADS[(lvl + 2) % BEADS.length]!;
    return lvl % 2 === 0 ? [a, b, a, b, a] : [a, a, b, a, a];
  }, [lvl]);
  const answer = (lvl % 2 === 0 ? BEADS[lvl % BEADS.length]! : BEADS[(lvl + 2) % BEADS.length]!).color;

  function pick(color: string) {
    if (color !== answer) {
      tone(150, 160, "sawtooth");
      return;
    }
    tone(700, 100);
    if (lvl + 1 >= 6) setPhase("win");
    else setLvl((n) => n + 1);
  }

  if (phase === "start") {
    return (
      <ArcadeStart who="gadu" title="La cola de Gadú" how="Mirá el patrón. Tocá el color que sigue." onStart={() => { setPhase("play"); setLvl(0); }} />
    );
  }
  if (phase === "win") {
    return (
      <GameWin who="gadu" score={6} total={6} id="game:patrones" badge="cola-gadu" kids="Un patrón es una promesa que se repite." />
    );
  }

  return (
    <div>
      <ArcadeHud score={lvl * 15} extra={<span>Ronda {lvl + 1}/6</span>} />
      <div className="mt-4 flex min-h-28 flex-wrap items-center justify-center gap-1 rounded-card border-[3px] border-ink bg-cloud p-3">
        <img src="/characters/gadu.webp" alt="" className="h-16 w-auto object-contain" />
        {pattern.map((c, i) => (
          <Sticker key={i} size={56} draw={(ctx, s) => drawBead(ctx, s * 2.2, c.color)} />
        ))}
        <span className="flex size-14 items-center justify-center rounded-full border-[3px] border-dashed border-ink font-display text-2xl">
          ?
        </span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {BEADS.map((c) => (
          <button
            key={c.color}
            type="button"
            aria-label={c.name}
            onClick={() => pick(c.color)}
            className="flex min-h-20 flex-col items-center justify-center rounded-2xl border-[3px] border-ink bg-cream shadow-chunky-sm active:translate-y-1"
          >
            <Sticker size={52} draw={(ctx, s) => drawBead(ctx, s * 2.2, c.color)} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function SimonGame() {
  const pads = [
    { bg: "bg-yellow", f: 523, who: "susu", src: "/characters/susu.webp" },
    { bg: "bg-vector", f: 392, who: "vector", src: "/characters/vector.webp" },
    { bg: "bg-gadu", f: 659, who: "gadu", src: "/characters/gadu.webp" },
    { bg: "bg-margarel", f: 784, who: "margarel", src: "/characters/margarel.webp" },
  ];
  const [phase, setPhase] = useState<"start" | "play" | "win" | "lost">("start");
  const [seq, setSeq] = useState<number[]>([]);
  const [lit, setLit] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [listen, setListen] = useState(false);

  async function show(s: number[]) {
    setListen(false);
    for (const n of s) {
      await wait(220);
      setLit(n);
      tone(pads[n]!.f, 180, "sine");
      await wait(320);
      setLit(null);
    }
    setStep(0);
    setListen(true);
  }

  function start() {
    const s = [Math.floor(Math.random() * 4)];
    setSeq(s);
    setPhase("play");
    void show(s);
  }

  function press(n: number) {
    if (!listen) return;
    tone(pads[n]!.f, 140, "sine");
    if (n !== seq[step]) {
      setPhase("lost");
      tone(140, 250, "sawtooth");
      return;
    }
    if (step + 1 === seq.length) {
      if (seq.length >= 8) {
        setPhase("win");
        return;
      }
      const next = [...seq, Math.floor(Math.random() * 4)];
      setSeq(next);
      window.setTimeout(() => void show(next), 450);
    } else setStep(step + 1);
  }

  if (phase === "start") {
    return <ArcadeStart who="margarel" title="Eco de colores" how="Mirá. Escuchá. Repetí la canción." onStart={start} />;
  }
  if (phase === "win") {
    return <GameWin who="margarel" score={8} total={8} id="game:simon" badge="eco-margarel" kids="Repetir una canción es un algoritmo con ritmo." />;
  }
  if (phase === "lost") {
    return <ArcadeStart who="margarel" title="Se rompió el eco" how={`Llegaste a ${seq.length}. Otra vez.`} onStart={start} />;
  }

  return (
    <div>
      <ArcadeHud score={seq.length * 10} extra={<span>Nivel {seq.length}/8</span>} />
      <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-3">
        {pads.map((p, n) => (
          <button
            key={n}
            type="button"
            onClick={() => press(n)}
            className={cn(
              "flex min-h-28 items-end justify-center overflow-hidden rounded-card border-[3px] border-ink shadow-chunky transition-transform sm:min-h-36",
              p.bg,
              lit === n && "scale-95 brightness-125",
            )}
          >
            <img src={p.src} alt="" className="h-24 w-auto object-contain object-bottom sm:h-28" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function OddGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [lvl, setLvl] = useState(0);
  const round = useMemo(() => {
    const oddAt = Math.floor(Math.random() * 9);
    const apples = lvl % 2 === 0;
    return { oddAt, apples };
  }, [lvl]);

  function tap(i: number) {
    if (i !== round.oddAt) {
      tone(150, 120, "sawtooth");
      return;
    }
    tone(700, 90);
    if (lvl + 1 >= 8) setPhase("win");
    else setLvl((n) => n + 1);
  }

  if (phase === "start") {
    return <ArcadeStart who="vector" title="El que no encaja" how="Tocá el que es distinto. Cada vez más rápido." onStart={() => { setPhase("play"); setLvl(0); }} />;
  }
  if (phase === "win") {
    return <GameWin who="vector" score={8} total={8} id="game:sobra" badge="coleccion-vector" kids="Una colección se entiende cuando ves al que se coló." />;
  }

  return (
    <div>
      <ArcadeHud score={lvl * 12} extra={<span>{lvl + 1}/8</span>} />
      <div className="mt-4 grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }, (_, i) => {
          const odd = i === round.oddAt;
          const draw = round.apples
            ? odd
              ? drawBanana
              : drawApple
            : odd
              ? drawApple
              : (ctx: CanvasRenderingContext2D, s: number) => drawPlanet(ctx, s * 0.9, "#5579df", false);
          return (
            <button
              key={i}
              type="button"
              onClick={() => tap(i)}
              className="flex aspect-square items-center justify-center rounded-card border-[3px] border-ink bg-cream shadow-chunky-sm active:scale-95"
            >
              <Sticker draw={draw} size={88} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

const HIDDEN = [
  { id: "lupa", label: "lupa", x: 18, y: 62 },
  { id: "botella", label: "botella", x: 72, y: 70 },
  { id: "hoja", label: "hoja", x: 40, y: 78 },
  { id: "estrella", label: "estrella", x: 82, y: 22 },
  { id: "saco", label: "mochila", x: 58, y: 48 },
  { id: "piedra", label: "piedra", x: 28, y: 80 },
];

export function SpotGame() {
  const [phase, setPhase] = useState<"start" | "play" | "win">("start");
  const [found, setFound] = useState<string[]>([]);

  function find(id: string) {
    if (found.includes(id)) return;
    tone(760, 100);
    const n = [...found, id];
    setFound(n);
    if (n.length === HIDDEN.length) setPhase("win");
  }

  if (phase === "start") {
    return <ArcadeStart who="zizu" title="Busca en el patio" how="Encontrá las 6 cosas escondidas. Tocá cuando las veas." onStart={() => { setPhase("play"); setFound([]); }} />;
  }
  if (phase === "win") {
    return <GameWin who="zizu" score={6} total={6} id="game:busca" badge="lupa-zizu" kids="Observar es un superpoder. Zizú lo entrena todos los días." />;
  }

  return (
    <div>
      <ArcadeHud score={found.length * 15} extra={<span>{found.length}/6</span>} />
      <Playfield className="relative mt-3 h-[26rem] overflow-hidden rounded-card border-[3px] border-ink sm:h-[30rem]">
        <img src="/scenes/zizu-patio.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        {HIDDEN.map((h) => (
          <button
            key={h.id}
            type="button"
            aria-label={h.label}
            onClick={() => find(h.id)}
            className={cn(
              "absolute size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px]",
              found.includes(h.id) ? "border-yellow bg-yellow/60" : "border-ink/40 bg-yellow/25",
            )}
            style={{
              left: `${h.x}%`,
              top: `${h.y}%`,
              animation: found.includes(h.id) ? undefined : "pulse-hit 1.4s ease-in-out infinite",
            }}
          />
        ))}
      </Playfield>
      <ul className="mt-3 flex flex-wrap gap-2">
        {HIDDEN.map((h) => (
          <li
            key={h.id}
            className={cn(
              "rounded-full border-[3px] border-ink px-3 py-1 font-display text-sm font-semibold",
              found.includes(h.id) ? "bg-yellow" : "bg-cloud",
            )}
          >
            {h.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
