import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { RankBar } from "@/components/progress/RankBar";
import { Hearts } from "@/components/progress/Hearts";
import { buttonVariants } from "@/components/ui/button";
import { characterMap, characters } from "@/data/characters";
import { missionDayKey, missionsForToday } from "@/data/missions";
import { packMissions } from "@/data/packMissions";
import { STICKERS } from "@/data/stickers";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/misiones")({ component: Misiones });

function Misiones() {
  const stars = useProgress((s) => s.stars);
  const streak = useProgress((s) => s.streak);
  const completed = useProgress((s) => s.completed);
  const friendship = useProgress((s) => s.friendship);
  const stickers = useProgress((s) => s.stickers);
  const syncMissions = useProgress((s) => s.syncMissions);
  const [openId, setOpenId] = useState<string | null>("m7-012");
  const missions = missionsForToday();
  const day = missionDayKey();

  useEffect(() => {
    syncMissions();
  }, [syncMissions, completed]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Misiones</h1>
      <img
        src="/scenes/mision-mapa.jpg"
        alt=""
        className="mt-6 w-full rounded-blob border-[3px] border-ink object-cover shadow-chunky sm:h-56"
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border-[3px] border-ink bg-yellow p-5 shadow-chunky-sm">
          <p className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest">
            <Sparkles className="size-4" /> Estrellas
          </p>
          <p className="mt-1 font-display text-5xl font-semibold tabular-nums">{stars}</p>
          <div className="mt-3">
            <RankBar stars={stars} compact />
          </div>
        </div>
        <div className="rounded-card border-[3px] border-ink bg-orange p-5 shadow-chunky-sm">
          <p className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest">
            <Flame className="size-4" /> Racha
          </p>
          <p className="mt-1 font-display text-5xl font-semibold tabular-nums">{streak}</p>
          <p className="mt-2 text-ink-soft">
            {streak <= 1
              ? "Hoy es un amanecer. Si volvés otro día, el álbum se acuerda — sin apuro."
              : `${streak} amaneceres juntos. El radar te reconoce.`}
          </p>
        </div>
      </div>

      <h2 className="mt-12 font-display text-3xl font-semibold">Las tres señales</h2>
      <ul className="mt-5 grid gap-4">
        {missions.map((m) => {
          const host = characterMap[m.host];
          const claimed = completed.includes(`mission:${day}:${m.id}`);
          const ready = m.match(completed);
          return (
            <li
              key={m.id}
              className={cn(
                "grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-card border-[3px] border-ink p-4 shadow-chunky-sm",
                claimed ? "bg-zizu" : "bg-cloud",
              )}
            >
              <img src={host.portrait} alt="" className="h-20 w-16 object-contain object-bottom" />
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">
                  +{m.stars} estrellas · {host.name}
                </p>
                <p className="font-display text-xl font-semibold">{m.title}</p>
                <p className="text-sm text-ink-soft">{claimed ? "¡Cumplida!" : m.hint}</p>
              </div>
              <Link
                to={m.to}
                className={cn(buttonVariants({ tone: claimed ? "cream" : "ink", size: "sm" }))}
              >
                {claimed ? "Otra vez" : ready ? "Cobrar" : "Ir"}
              </Link>
            </li>
          );
        })}
      </ul>

      <h2 className="mt-14 font-display text-3xl font-semibold">Misiones de 7 minutos</h2>
      <p className="mt-2 text-ink-soft">
        Sin pantalla. Papel, patio o cocina. No hay que hacerlas todas. Salir no quita nada.
      </p>
      <ul className="mt-5 grid gap-3">
        {packMissions.map((m) => {
          const host = characterMap[m.host];
          const open = openId === m.id;
          return (
            <li key={m.id} className="rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm">
              <button
                type="button"
                className="flex w-full items-center gap-3 p-4 text-left"
                onClick={() => setOpenId(open ? null : m.id)}
                aria-expanded={open}
              >
                <img src={host.portrait} alt="" className="h-16 w-12 object-contain object-bottom" />
                <div className="flex-1">
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    {m.minutes} min · {m.age} · {host.name}
                  </p>
                  <p className="font-display text-xl font-semibold">{m.title}</p>
                  <p className="text-sm text-ink-soft">{m.question}</p>
                </div>
                <span className="font-display text-2xl">{open ? "–" : "+"}</span>
              </button>
              {open ? (
                <div className="border-t-[3px] border-ink bg-cream p-4">
                  <p>{m.lede}</p>
                  <p className="mt-2 text-sm text-ink-soft">{m.materials}</p>
                  <ol className="mt-3 list-decimal space-y-2 pl-5">
                    {m.steps.map((st) => (
                      <li key={st}>{st}</li>
                    ))}
                  </ol>
                  <p className="mt-4 rounded-2xl bg-yellow px-4 py-3 font-display font-semibold">{m.idea}</p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <h2 className="mt-12 font-display text-3xl font-semibold">Amistad</h2>
      <p className="mt-2 text-ink-soft">Jugar y leer con alguien llena su corazón.</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-5">
        {characters.map((c) => (
          <li key={c.slug} className="rounded-card border-[3px] border-ink bg-cloud p-3 text-center">
            <img src={c.portrait} alt="" className="mx-auto h-20 object-contain" />
            <p className="mt-1 font-display font-semibold">{c.name}</p>
            <Hearts n={friendship[c.slug] ?? 0} className="mt-1 justify-center" />
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-3xl font-semibold">Stickers</h2>
        <Link to="/album" className="font-display font-semibold underline">
          Ver álbum completo →
        </Link>
      </div>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {STICKERS.map((s) => {
          const on = stickers.includes(s.id);
          return (
            <div
              key={s.id}
              className={cn(
                "w-36 shrink-0 overflow-hidden rounded-2xl border-[3px] border-ink",
                on ? "bg-cloud" : "bg-cream opacity-60",
              )}
            >
              <img src={s.cover} alt="" className={cn("h-20 w-full object-cover", !on && "grayscale")} />
              <p className="p-2 font-display text-sm font-semibold">{on ? s.name : "???"}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
