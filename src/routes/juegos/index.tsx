import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import { characterMap } from "@/data/characters";
import { games } from "@/data/games";
import { useProgress } from "@/store/progress";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/juegos/")({ component: Juegos });

function Juegos() {
  const completed = useProgress((s) => s.completed);
  const won = games.filter((g) => completed.includes(`game:${g.id}`)).length;
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl font-semibold sm:text-6xl">Jugar</h1>
        <p className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-yellow px-3 py-1 font-display text-sm font-semibold">
          <Sparkles className="size-4" /> {won}/{games.length}
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => {
          const host = characterMap[g.host];
          const done = completed.includes(`game:${g.id}`);
          return (
            <Link
              key={g.id}
              to="/juegos/$id"
              params={{ id: g.id }}
              className="lift overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
            >
              <div className="relative">
                <Photo src={g.cover} ratio="card" />
                <img
                  src={host.portrait}
                  alt=""
                  className="absolute bottom-0 right-1 h-24 w-auto object-contain object-bottom sm:h-28"
                />
                {done ? (
                  <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border-2 border-ink bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                    <Sparkles className="size-3" />
                  </span>
                ) : null}
              </div>
              <p className="p-3 font-display text-xl font-semibold leading-tight">{g.title}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
