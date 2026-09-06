import { createFileRoute, Link } from "@tanstack/react-router";
import { Figure } from "@/components/characters/Figure";
import { characters, characterMap, type CharacterSlug } from "@/data/characters";
import { cn } from "@/lib/utils";
import { QuestBar } from "@/components/play/QuestBar";
import { games } from "@/data/games";
import { GAME_TOY } from "@/data/gameArt";
import { useProgress } from "@/store/progress";

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

function Home() {
  const completed = useProgress((s) => s.completed);
  return (
    <main className="sky-play min-h-[70vh]">
      <div className="mx-auto max-w-5xl px-4 pb-8 pt-4 sm:px-6">
        <QuestBar />
        <h1 className="mt-5 text-center font-display text-4xl font-semibold sm:text-6xl">¿Jugamos?</h1>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
          {ROOMS.map((r) => {
            const c = characterMap[r.who];
            return (
              <Link
                key={r.to}
                to={r.to}
                className={cn(
                  "flex min-h-44 flex-col items-center justify-end overflow-hidden rounded-card border-[3px] border-ink shadow-chunky sm:min-h-56",
                  r.color,
                )}
              >
                <img
                  src={c.portrait}
                  alt=""
                  draggable={false}
                  className="pointer-events-none h-32 w-auto object-contain object-bottom sm:h-40"
                />
                <p className="w-full border-t-[3px] border-ink bg-cream p-3 text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {r.title}
                </p>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-center font-display text-xl font-semibold">Empieza aquí</p>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {games.slice(0, 4).map((g, i) => {
            const host = characterMap[g.host];
            const toy = GAME_TOY[g.id];
            const done = completed.includes(`game:${g.id}`);
            return (
              <Link
                key={g.id}
                to="/juegos/$id"
                params={{ id: g.id }}
                className="overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
              >
                <div
                  className="relative flex h-28 items-end justify-center sm:h-32"
                  style={{ background: `${host.color}40` }}
                >
                  <span className="absolute left-1.5 top-1.5 grid size-7 place-items-center rounded-full border-2 border-ink bg-yellow font-display text-xs font-semibold">
                    {i + 1}
                  </span>
                  {toy ? (
                    <img src={toy} alt="" className="pointer-events-none absolute right-1 top-1 h-9 w-9 object-contain" />
                  ) : null}
                  <img
                    src={host.portrait}
                    alt=""
                    draggable={false}
                    className="pointer-events-none h-[90%] w-auto object-contain object-bottom"
                  />
                  {done ? (
                    <span className="absolute bottom-1 left-1 font-display text-sm">★</span>
                  ) : null}
                </div>
                <p className="border-t-[3px] border-ink p-2 text-center font-display text-sm font-semibold leading-tight sm:text-base">
                  {g.title}
                </p>
              </Link>
            );
          })}
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
