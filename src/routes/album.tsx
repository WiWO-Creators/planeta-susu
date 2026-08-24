import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Sparkles } from "lucide-react";
import { RankBar } from "@/components/progress/RankBar";
import { Hearts } from "@/components/progress/Hearts";
import { games } from "@/data/games";
import { stories } from "@/data/stories";
import { topics } from "@/data/topics";
import { readings } from "@/data/readings";
import { STICKERS } from "@/data/stickers";
import { characters } from "@/data/characters";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/album")({ component: Album });

function Album() {
  const stars = useProgress((s) => s.stars);
  const completed = useProgress((s) => s.completed);
  const badges = useProgress((s) => s.badges);
  const stickers = useProgress((s) => s.stickers);
  const friendship = useProgress((s) => s.friendship);
  const streak = useProgress((s) => s.streak);

  const lessonIds = topics.flatMap((t) => t.lessons.map((l) => `lesson:${t.slug}:${l.slug}`));
  const gameIds = games.map((g) => `game:${g.id}`);
  const storyIds = stories.map((s) => `story:${s.id}`);
  const readIds = readings.map((r) => `read:${r.id}`);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-gadu">
        Colección
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">Álbum de estrellas</h1>
      <p className="mt-4 text-lg text-ink-soft">
        Preguntas, cuentos, juegos, cartas y amaneceres. Todo se guarda aquí. Nadie más lo ve.
      </p>

      <div className="mt-8 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
        <img src="/scenes/fiesta-estrellas.jpg" alt="El elenco celebra con estrellas" className="h-44 w-full object-cover sm:h-56" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border-[3px] border-ink bg-yellow p-6 shadow-chunky">
          <div className="flex items-center gap-4">
            <Sparkles className="size-10" />
            <div>
              <p className="font-display text-5xl font-semibold tabular-nums">{stars}</p>
              <p className="text-ink-soft">estrellas en el planeta</p>
            </div>
          </div>
          <div className="mt-4">
            <RankBar stars={stars} />
          </div>
        </div>
        <div className="rounded-card border-[3px] border-ink bg-orange p-6 shadow-chunky">
          <div className="flex items-center gap-4">
            <Flame className="size-10" />
            <div>
              <p className="font-display text-5xl font-semibold tabular-nums">{streak}</p>
              <p className="text-ink-soft">días seguidos de visita</p>
            </div>
          </div>
          <p className="mt-4 text-ink-soft">
            Cada visita suma 2 estrellas. No hay que volver todos los días: el álbum no castiga.
          </p>
          <Link to="/misiones" className="mt-3 inline-block font-display font-semibold underline">
            Ver misiones de hoy →
          </Link>
        </div>
      </div>

      <h2 className="mt-12 font-display text-2xl font-semibold">Stickers</h2>
      <p className="mt-1 text-ink-soft">
        {stickers.length}/{STICKERS.length} conseguidos
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STICKERS.map((s) => {
          const on = stickers.includes(s.id);
          return (
            <div
              key={s.id}
              className={cn(
                "overflow-hidden rounded-card border-[3px] border-ink",
                on ? "bg-cloud shadow-chunky-sm" : "bg-cream",
              )}
            >
              <img
                src={s.cover}
                alt=""
                className={cn("h-24 w-full object-cover", !on && "grayscale opacity-50")}
              />
              <div className="p-3">
                <p className="font-display text-sm font-semibold">{on ? s.name : "???"}</p>
                <p className="text-xs text-ink-soft">{on ? "Conseguido" : s.hint}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="mt-12 font-display text-2xl font-semibold">Amistad</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-5">
        {characters.map((c) => (
          <Link
            key={c.slug}
            to="/personajes/$slug"
            params={{ slug: c.slug }}
            className="rounded-card border-[3px] border-ink bg-cloud p-3 text-center"
          >
            <img src={c.portrait} alt={c.name} className="mx-auto h-20 object-contain" />
            <p className="mt-1 font-display font-semibold">{c.name}</p>
            <Hearts n={friendship[c.slug] ?? 0} className="mt-1 justify-center" />
          </Link>
        ))}
      </div>

      <Section title="Lecciones" items={lessonIds} completed={completed} />
      <Section title="Juegos" items={gameIds} completed={completed} />
      <Section title="Aventuras" items={storyIds} completed={completed} />
      <Section title="Lecturas" items={readIds} completed={completed} />

      {badges.length > 0 ? (
        <div className="mt-10">
          <h2 className="font-display text-2xl font-semibold">Insignias</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border-[3px] border-ink bg-cloud px-3 py-1 font-display text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/explora" className="font-display font-semibold underline">
          Seguir explorando
        </Link>
        <Link to="/juegos" className="font-display font-semibold underline">
          Ir a jugar
        </Link>
        <Link to="/leer" className="font-display font-semibold underline">
          Biblioteca
        </Link>
      </div>
    </main>
  );
}

function Section({
  title,
  items,
  completed,
}: {
  title: string;
  items: string[];
  completed: string[];
}) {
  const n = items.filter((id) => completed.includes(id)).length;
  return (
    <section className="mt-10">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl font-semibold">{title}</h2>
        <p className="tabular-nums text-ink-soft">
          {n}/{items.length}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((id) => {
          const on = completed.includes(id);
          return (
            <span
              key={id}
              title={id}
              className={cn(
                "size-8 rounded-full border-[3px] border-ink",
                on ? "bg-yellow" : "bg-cloud",
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
