import { createFileRoute, Link } from "@tanstack/react-router";
import { characters } from "@/data/characters";

export const Route = createFileRoute("/personajes/")({ component: Personajes });

function Personajes() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Toca un amigo</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {characters.map((c) => (
          <Link
            key={c.slug}
            to="/personajes/$slug"
            params={{ slug: c.slug }}
            className="group card-press flex flex-col overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
          >
            <div
              className="flex h-56 items-end justify-center px-2 pt-4 sm:h-64"
              style={{ background: `${c.color}33` }}
            >
              <img
                src={c.portrait}
                alt={c.name}
                className="h-52 w-auto object-contain object-bottom sm:h-60"
              />
            </div>
            <p className="border-t-[3px] border-ink p-3 text-center font-display text-2xl font-semibold">
              {c.name}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
