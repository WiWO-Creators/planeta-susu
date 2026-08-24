import { useState } from "react";
import { characterMap, type CharacterSlug } from "@/data/characters";
import { randomSignal, type Signal } from "@/data/signals";
import { buttonVariants } from "@/components/ui/button";
import { useProgress } from "@/store/progress";
import { ding, cn } from "@/lib/utils";

export function Radar({ compact = false }: { compact?: boolean }) {
  const [scanning, setScanning] = useState(false);
  const [signal, setSignal] = useState<Signal | null>(null);
  const complete = useProgress((s) => s.complete);

  function ping() {
    if (scanning) return;
    setScanning(true);
    setSignal(null);
    ding(true);
    window.setTimeout(() => {
      const next = randomSignal(signal?.id);
      setSignal(next);
      setScanning(false);
      complete("toy:radar", 1, undefined, "susu");
      ding(true);
    }, 1100);
  }

  return (
    <div className={cn("grid items-center gap-6", compact ? "" : "md:grid-cols-[auto_1fr]")}>
      <button
        type="button"
        onClick={ping}
        disabled={scanning}
        aria-label="Encender el Radar Estelar"
        className="relative mx-auto grid size-56 place-items-center rounded-full border-[3px] border-ink bg-ink text-yellow shadow-chunky sm:size-64"
      >
        <span className="pointer-events-none absolute inset-4 rounded-full border border-yellow/25" />
        <span className="pointer-events-none absolute inset-10 rounded-full border border-yellow/20" />
        <span className="pointer-events-none absolute inset-16 rounded-full border border-yellow/15" />
        <span
          className={cn(
            "pointer-events-none absolute inset-3 origin-center rounded-full",
            scanning ? "radar-sweep-fast" : "radar-sweep",
          )}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgb(255 208 0 / 0.0) 20deg, rgb(255 208 0 / 0.45) 70deg, transparent 90deg)",
          }}
        />
        <span className="relative z-10 flex flex-col items-center">
          <span className="radar-dot size-4 rounded-full bg-yellow" />
          <span className="mt-2 font-display text-lg font-semibold">
            {scanning ? "Buscando…" : "Tocar el radar"}
          </span>
        </span>
      </button>

      <div className="min-h-40">
        {!signal && !scanning ? (
          <p className="font-display text-2xl font-semibold">Toca. Sale una sorpresa.</p>
        ) : null}
        {scanning ? (
          <p className="font-display text-2xl font-semibold">Buscando…</p>
        ) : null}
        {signal && !scanning ? (
          <SignalCard signal={signal} />
        ) : null}
      </div>
    </div>
  );
}

function SignalCard({ signal }: { signal: Signal }) {
  const host = characterMap[signal.host];
  return (
    <div className="rounded-card border-[3px] border-ink bg-cream p-5 shadow-chunky-sm">
      <div className="flex items-start gap-3">
        <img src={host.portrait} alt="" className="h-20 w-auto object-contain object-bottom" />
        <div>
          <h3 className="font-display text-2xl font-semibold">{signal.title}</h3>
          <a href={signal.href} className={cn(buttonVariants({ tone: "ink", size: "sm" }), "mt-4")}>
            ¡Vamos!
          </a>
        </div>
      </div>
    </div>
  );
}

export function CrewNotes() {
  const phrases: Record<CharacterSlug, { note: number; line: string }> = {
    susu: { note: 523, line: "¡Mi radar detecta una gran pregunta!" },
    vector: { note: 392, line: "Probemos una idea." },
    gadu: { note: 659, line: "¿Y si lo hacemos al revés?" },
    zizu: { note: 311, line: "Lo grande también se cuida con cosas pequeñas." },
    margarel: { note: 784, line: "¡Casco puesto, vamos a descubrirlo!" },
  };
  const [who, setWho] = useState<CharacterSlug | null>(null);
  const complete = useProgress((s) => s.complete);

  function play(slug: CharacterSlug) {
    setWho(slug);
    chime(phrases[slug].note);
    complete("toy:notes", 1, undefined, slug);
  }

  const crew: CharacterSlug[] = ["susu", "vector", "gadu", "zizu", "margarel"];

  return (
    <div>
      <div className="grid grid-cols-5 gap-2">
        {crew.map((slug) => {
          const c = characterMap[slug];
          return (
            <button
              key={slug}
              type="button"
              onClick={() => play(slug)}
              className={cn(
                "flex flex-col items-center rounded-card border-[3px] border-ink bg-cloud p-2 shadow-chunky-sm transition-transform active:translate-y-[3px]",
                who === slug && "bg-yellow",
              )}
            >
              <img src={c.portrait} alt={c.name} className="h-16 w-auto object-contain sm:h-20" />
              <span className="mt-1 font-display text-xs font-semibold sm:text-sm">{c.name}</span>
            </button>
          );
        })}
      </div>
      {who ? (
        <p className="mt-4 rounded-2xl border-[3px] border-ink bg-yellow px-4 py-3 font-display text-lg font-semibold">
          {characterMap[who].name}: «{phrases[who].line}»
        </p>
      ) : (
        <p className="mt-4 text-ink-soft">Toca a alguien para escuchar su frase.</p>
      )}
    </div>
  );
}

function chime(freq: number) {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.value = 0.07;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc.stop(ctx.currentTime + 0.5);
  } catch {
    /* optional */
  }
}
