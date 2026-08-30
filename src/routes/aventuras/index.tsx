import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import { PageHero } from "@/components/play/PageHero";
import { characterMap } from "@/data/characters";
import { stories, storyCover } from "@/data/stories";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/aventuras/")({ component: Aventuras });

function Aventuras() {
  const completed = useProgress((s) => s.completed);
  return (
    <main>
      <PageHero title="Cuentos" who="margarel" kicker="Toca un cuento" />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {stories.map((s, i) => {
            const host = characterMap[s.hosts[0]];
            const done = completed.includes(`story:${s.id}`);
            return (
              <Link
                key={s.id}
                to="/aventuras/$id"
                params={{ id: s.id }}
                className="overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
              >
                <div className="relative">
                  <Photo src={storyCover[s.id] ?? host.portrait} ratio="video" />
                  <img
                    src={host.portrait}
                    alt=""
                    className="absolute bottom-0 right-2 h-24 w-auto object-contain object-bottom sm:h-28"
                  />
                  <span className="absolute left-2 top-2 grid size-9 place-items-center rounded-full border-[3px] border-ink bg-yellow font-display text-sm font-semibold">
                    {i + 1}
                  </span>
                  {done ? (
                    <span className="absolute right-2 top-2 rounded-full border-2 border-ink bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                      Listo
                    </span>
                  ) : null}
                </div>
                <p className="p-3 font-display text-xl font-semibold leading-tight sm:text-2xl">{s.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
