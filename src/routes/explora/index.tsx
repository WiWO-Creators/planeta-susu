import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import { characterMap } from "@/data/characters";
import { territories } from "@/data/territories";

export const Route = createFileRoute("/explora/")({ component: Explora });

function Explora() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">¿Con quién?</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              </div>
              <div className="p-4">
                <p className="font-display text-2xl font-semibold">{t.title}</p>
                <p className="mt-1 font-display text-base">{t.cta} →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
