import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGuide } from "@/data/guides";

export const Route = createFileRoute("/padres/$slug")({
  component: GuidePage,
});

function GuidePage() {
  const { slug } = Route.useParams();
  const g = getGuide(slug);
  if (!g) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link to="/padres" className="font-display text-sm font-semibold uppercase tracking-widest">
        ← Sala de Grandes
      </Link>
      <p className="mt-4 font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
        {g.minutes} min de lectura · {g.topics.join(" · ")}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{g.title}</h1>
      <p className="mt-4 text-xl leading-relaxed text-ink-soft">{g.lede}</p>
      <div className="mt-10 space-y-8">
        {g.sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      <aside className="mt-10 rounded-card border-[3px] border-ink bg-yellow p-5 shadow-chunky-sm">
        <h2 className="font-display text-2xl font-semibold">Prueben esta noche</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-lg">
          {g.tryTonight.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </aside>
    </main>
  );
}
