import { createFileRoute, Link } from "@tanstack/react-router";
import { KIND_LABEL, KIND_ORDER, readings, type ReadingKind } from "@/data/readings";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/leer/")({ component: Leer });

function Leer() {
  const completed = useProgress((s) => s.completed);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Leer</h1>
      <img
        src="/scenes/biblioteca.jpg"
        alt=""
        className="mt-6 h-40 w-full rounded-blob border-[3px] border-ink object-cover shadow-chunky sm:h-56"
      />
      {KIND_ORDER.map((kind) => (
        <KindSection key={kind} kind={kind} completed={completed} />
      ))}
    </main>
  );
}

function KindSection({ kind, completed }: { kind: ReadingKind; completed: string[] }) {
  const items = readings.filter((r) => r.kind === kind);
  const n = items.filter((r) => completed.includes(`read:${r.id}`)).length;
  return (
    <section className="mt-12">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-display text-3xl font-semibold">{KIND_LABEL[kind]}</h2>
        <p className="tabular-nums text-ink-soft">
          {n}/{items.length}
        </p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => {
          const read = completed.includes(`read:${r.id}`);
          return (
            <Link
              key={r.id}
              to="/leer/$id"
              params={{ id: r.id }}
              className="overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative h-36 overflow-hidden">
                <img src={r.cover} alt="" className="h-full w-full object-cover" />
                {read ? (
                  <span className="absolute right-2 top-2 rounded-full bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                    Leído
                  </span>
                ) : null}
              </div>
              <p className="p-4 font-display text-xl font-semibold leading-tight">{r.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
