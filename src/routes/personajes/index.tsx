import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/play/PageHero";
import { characters } from "@/data/characters";

export const Route = createFileRoute("/personajes/")({ component: Personajes });

function Personajes() {
  return (
    <main>
      <PageHero title="Toca un amigo" scene="/scenes/nave-interior.jpg" who="susu" kicker="La tripulación" />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {characters.map((c) => (
            <Link
              key={c.slug}
              to="/personajes/$slug"
              params={{ slug: c.slug }}
              className="group card-press flex flex-col overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
            >
              <div className="relative flex h-56 items-end justify-center px-2 pt-4 sm:h-64" style={{ background: `${c.color}44` }}>
                <span className="bubble absolute left-3 top-3 z-10 max-w-[80%] text-xs opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm">
                  {c.tagline}
                </span>
                <img src={c.portrait} alt={c.name} className="h-52 w-auto object-contain object-bottom sm:h-60" />
              </div>
              <p className="border-t-[3px] border-ink bg-cream p-3 text-center font-display text-2xl font-semibold">
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
