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
      <PageHero title="Cuentos" scene="/scenes/grupo-lee.jpg" who="margarel" kicker="Para leer juntos" />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {stories.map((s) => {
            const host = characterMap[s.hosts[0]];
            const done = completed.includes(`story:${s.id}`);
            return (
              <Link
                key={s.id}
                to="/aventuras/$id"
                params={{ id: s.id }}
                className="card-press overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
              >
                <div className="relative">
                  <Photo src={storyCover[s.id] ?? host.portrait} ratio="card" />
                  <span className="absolute left-2 bottom-2 rounded-full border-[3px] border-ink bg-yellow px-3 py-1 font-display text-sm font-semibold">
                    Leer
                  </span>
                  {done ? (
                    <span className="absolute left-2 top-2 rounded-full border-2 border-ink bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                      Leído
                    </span>
                  ) : null}
                </div>
                <p className="p-4 font-display text-2xl font-semibold leading-tight">{s.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
