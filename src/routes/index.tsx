import { createFileRoute, Link } from "@tanstack/react-router";
import { Figure } from "@/components/characters/Figure";
import { characters, characterMap, type CharacterSlug } from "@/data/characters";
import { cn } from "@/lib/utils";
import { QuestBar } from "@/components/play/QuestBar";
import { beep, cheer } from "@/components/games/playkit";
import { useProgress } from "@/store/progress";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const delays = [0, 1, 2, 3, 4] as const;

const ROOMS: {
  to: "/juegos" | "/aventuras" | "/explora" | "/juguetes";
  who: CharacterSlug;
  title: string;
  color: string;
}[] = [
  { to: "/juegos", who: "gadu", title: "Jugar", color: "bg-yellow" },
  { to: "/aventuras", who: "margarel", title: "Cuentos", color: "bg-margarel text-cream" },
  { to: "/explora", who: "zizu", title: "Mundo", color: "bg-zizu text-cream" },
  { to: "/juguetes", who: "susu", title: "Radar", color: "bg-susu" },
];

const MAP_STARS = [
  { id: "map-a", x: "8%", y: "18%" },
  { id: "map-b", x: "86%", y: "14%" },
  { id: "map-c", x: "48%", y: "8%" },
];

function Home() {
  const complete = useProgress((s) => s.complete);
  const has = useProgress((s) => s.has);

  return (
    <main className="sky-play min-h-[70vh]">
      <div className="mx-auto max-w-5xl px-4 pb-8 pt-4 sm:px-6">
        <QuestBar />
        <div className="relative mt-4">
          {MAP_STARS.map((s) => {
            const got = has(`toy:${s.id}`);
            return (
              <button
                key={s.id}
                type="button"
                aria-label="Estrella"
                className={cn(
                  "absolute z-10 grid size-11 place-items-center rounded-full border-[3px] border-ink",
                  got ? "bg-cloud" : "bg-yellow bob",
                )}
                style={{ left: s.x, top: s.y }}
                onClick={() => {
                  if (got) {
                    beep(400, 60);
                    return;
                  }
                  complete(`toy:${s.id}`, 1);
                  cheer();
                }}
              >
                <Sparkles className="size-4" />
              </button>
            );
          })}
          <p className="pt-6 text-center font-display text-4xl font-semibold sm:text-6xl">¿Jugamos?</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            {ROOMS.map((r) => {
              const c = characterMap[r.who];
              return (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => beep(560, 70)}
                  className={cn(
                    "card-press relative flex min-h-44 flex-col items-center justify-end overflow-hidden rounded-card border-[3px] border-ink shadow-chunky sm:min-h-56",
                    r.color,
                  )}
                >
                  <img
                    src={c.portrait}
                    alt=""
                    className="h-32 w-auto object-contain object-bottom sm:h-40"
                  />
                  <p className="w-full border-t-[3px] border-ink bg-cream/95 p-2 text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {r.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-8 text-center font-display text-xl font-semibold">Toca un amigo</p>
        <div className="mt-3 flex snap-x gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:overflow-visible">
          {characters.map((c, i) => (
            <div key={c.slug} className="w-28 shrink-0 snap-center sm:w-auto">
              <Figure slug={c.slug} delay={delays[i]} height="h-28 sm:h-36" label />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
