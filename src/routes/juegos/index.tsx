import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/play/PageHero";
import { characterMap } from "@/data/characters";
import { games } from "@/data/games";
import { useProgress } from "@/store/progress";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/juegos/")({ component: Juegos });

function Juegos() {
  const completed = useProgress((s) => s.completed);
  const won = games.filter((g) => completed.includes(`game:${g.id}`)).length;
  return (
    <main>
      <PageHero title="Jugar" who="gadu" kicker={`${won}/${games.length}`} />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => {
            const host = characterMap[g.host];
            const done = completed.includes(`game:${g.id}`);
            return (
              <Link
                key={g.id}
                to="/juegos/$id"
                params={{ id: g.id }}
                className="overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
              >
                <div
                  className="relative flex h-40 items-end justify-center sm:h-48"
                  style={{ background: `${host.color}40` }}
                >
                  <span className="absolute left-2 top-2 grid size-9 place-items-center rounded-full border-[3px] border-ink bg-yellow font-display text-sm font-semibold">
                    {i + 1}
                  </span>
                  <img src={host.portrait} alt="" className="h-[90%] w-auto object-contain object-bottom" />
                  {done ? (
                    <span className="absolute right-2 top-2 rounded-full border-2 border-ink bg-yellow p-1">
                      <Sparkles className="size-4" />
                    </span>
                  ) : null}
                </div>
                <p className="p-3 font-display text-xl font-semibold leading-tight">{g.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
