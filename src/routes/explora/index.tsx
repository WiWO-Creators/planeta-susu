import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/play/PageHero";
import { characterMap } from "@/data/characters";
import { territories } from "@/data/territories";

export const Route = createFileRoute("/explora/")({ component: Explora });

function Explora() {
  return (
    <main>
      <PageHero title="¿Con quién?" who="zizu" kicker="Elige un rincón" />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {territories.map((t) => {
            const host = characterMap[t.host];
            return (
              <Link
                key={t.slug}
                to="/explora/$tema"
                params={{ tema: t.topic }}
                className="group card-press overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
              >
                <div className="relative flex h-48 items-end justify-center sm:h-56" style={{ background: `${host.color}40` }}>
                  <img
                    src={host.portrait}
                    alt={host.name}
                    className="h-[92%] w-auto object-contain object-bottom"
                  />
                  <span className="absolute left-2 bottom-2 rounded-full border-[3px] border-ink bg-yellow px-3 py-1 font-display text-sm font-semibold">
                    ¡Toca!
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-display text-2xl font-semibold">{t.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
