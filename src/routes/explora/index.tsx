import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import { PageHero } from "@/components/play/PageHero";
import { characterMap } from "@/data/characters";
import { territories } from "@/data/territories";

export const Route = createFileRoute("/explora/")({ component: Explora });

function Explora() {
  return (
    <main>
      <PageHero title="¿Con quién?" scene="/scenes/bosque-red.jpg" who="zizu" kicker="Elige un rincón" />
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
                <div className="relative">
                  <Photo src={t.cover} ratio="card" />
                  <img
                    src={host.portrait}
                    alt=""
                    className="absolute bottom-0 right-2 h-28 w-auto object-contain object-bottom sm:h-32"
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
