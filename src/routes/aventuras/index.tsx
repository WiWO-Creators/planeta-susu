import { createFileRoute, Link } from "@tanstack/react-router";
import { characterMap } from "@/data/characters";
import { stories, storyCover } from "@/data/stories";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/aventuras/")({ component: Aventuras });

function Aventuras() {
  const completed = useProgress((s) => s.completed);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Cuentos</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {stories.map((s) => {
          const host = characterMap[s.hosts[0]];
          const done = completed.includes(`story:${s.id}`);
          return (
            <Link
              key={s.id}
              to="/aventuras/$id"
              params={{ id: s.id }}
              className="lift overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={storyCover[s.id] ?? host.portrait} alt="" className="h-full w-full object-cover" />
                {done ? (
                  <span className="absolute left-2 top-2 rounded-full bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                    Leído
                  </span>
                ) : null}
              </div>
              <p className="p-4 font-display text-2xl font-semibold leading-tight">{s.title}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
