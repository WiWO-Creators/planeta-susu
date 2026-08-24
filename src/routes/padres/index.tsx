import { createFileRoute, Link } from "@tanstack/react-router";
import { guides } from "@/data/guides";
import { topics } from "@/data/topics";

export const Route = createFileRoute("/padres/")({ component: Padres });

function Padres() {
  return (
    <main>
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-ink text-cream">
        <img
          src="/scenes/sala-grandes.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-yellow">
            Sala de Grandes
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
            No necesitas tener todas las respuestas
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            Criterio, no recetas perfectas ni culpa. Clima sin miedo, mates sin identidad fija,
            pantallas con propósito e inteligencia artificial con preguntas. Menos tiempo mirando
            una pantalla. Más ideas que salen de ella.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Guías</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              to="/padres/$slug"
              params={{ slug: g.slug }}
              className="rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky-sm transition-transform hover:-translate-y-1"
            >
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">
                {g.minutes} min · {g.topics.join(" · ")}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-ink-soft">{g.lede}</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-14 font-display text-3xl font-semibold">Qué hay para ellas y ellos</h2>
        <p className="mt-2 max-w-2xl text-ink-soft">
          Cada mundo infantil tiene una nota para adultos al pie. Estos son los anclajes pedagógicos.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {topics.map((t) => (
            <li key={t.slug} className="rounded-2xl border-[3px] border-ink bg-cream p-4">
              <p className="font-display text-lg font-semibold">{t.title}</p>
              <p className="text-sm text-ink-soft">{t.forParents}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
