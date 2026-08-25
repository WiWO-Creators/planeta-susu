import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import { characters, getCharacter } from "@/data/characters";
import { territories } from "@/data/territories";
import { Speech } from "@/components/characters/Figure";
import { ColorMix, ShadowSun, FeelMeter, HugAsk, Bitacora } from "@/components/play/Toys";
import type { CharacterSlug } from "@/data/characters";

export const Route = createFileRoute("/personajes/$slug")({
  component: CharacterPage,
});

function CharacterPage() {
  const { slug } = Route.useParams();
  const c = getCharacter(slug);
  if (!c) throw notFound();
  const others = characters.filter((o) => o.slug !== c.slug);
  const home = territories.find((t) => t.host === c.slug);

  return (
    <main>
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-cream">
        <img src={c.scene} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-8 text-center sm:px-6">
          <Link to="/personajes" className="font-display text-sm font-semibold">
            ← Amigos
          </Link>
          <img src={c.portrait} alt={c.name} className="mt-4 h-64 w-auto object-contain object-bottom sm:h-80" />
          <h1 className="mt-2 font-display text-5xl font-semibold sm:text-7xl">{c.name}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
        <Speech who={c.slug}>{c.greeting}</Speech>
        {home ? (
          <Link
            to="/explora/$tema"
            params={{ tema: home.topic }}
            className="block overflow-hidden rounded-card border-[3px] border-ink shadow-chunky-sm"
          >
            <Photo src={c.scene} ratio="card" />
            <p className="p-4 font-display text-2xl font-semibold">Ir al {home.title} →</p>
          </Link>
        ) : null}
        <div className="rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky-sm">
          <p className="font-display text-xl font-semibold">Juguete de {c.name}</p>
          <div className="mt-4">
            <CharacterToy slug={c.slug} />
          </div>
        </div>
        <details className="rounded-card border-[3px] border-ink bg-cream p-4">
          <summary className="cursor-pointer font-display text-lg font-semibold">Para grandes</summary>
          <p className="mt-3 text-ink-soft">{c.parentNote}</p>
        </details>
      </div>

      <section className="border-t-[3px] border-ink bg-cloud px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/personajes/$slug"
              params={{ slug: o.slug }}
              className="flex flex-col items-center"
            >
              <img src={o.portrait} alt={o.name} className="h-16 w-auto object-contain" />
              <span className="font-display text-sm font-semibold">{o.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function CharacterToy({ slug }: { slug: CharacterSlug }) {
  if (slug === "susu") return <FeelMeter />;
  if (slug === "vector") return <ShadowSun />;
  if (slug === "gadu") return <ColorMix />;
  if (slug === "zizu") return <HugAsk />;
  return <Bitacora />;
}
