import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getReading, KIND_LABEL } from "@/data/readings";
import { characterMap } from "@/data/characters";
import { Speech } from "@/components/characters/Figure";
import { Button, buttonVariants } from "@/components/ui/button";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leer/$id")({ component: ReadingPage });

function ReadingPage() {
  const { id } = Route.useParams();
  const reading = getReading(id);
  if (!reading) throw notFound();
  const host = characterMap[reading.host];
  const complete = useProgress((s) => s.complete);
  const done = useProgress((s) => s.has(`read:${reading.id}`));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link to="/leer" className="font-display text-sm font-semibold uppercase tracking-widest">
        ← Biblioteca del patio
      </Link>
      <div className="mt-5 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
        <img src={reading.cover} alt="" className="h-52 w-full object-cover sm:h-64" />
      </div>
      <p className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
        {KIND_LABEL[reading.kind]} · {reading.minutes} min · con {host.name}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{reading.title}</h1>
      <div className="mt-6">
        <Speech who={reading.host}>{reading.kicker}. Léelo despacio. Las orejas grandes sirven.</Speech>
      </div>
      <article className="mt-8 space-y-6">
        {reading.body.map((block, i) => (
          <div key={i} className="rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky-sm">
            {block.title ? (
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-gadu">
                {block.title}
              </p>
            ) : null}
            <p
              className={cn(
                "whitespace-pre-line text-lg leading-relaxed",
                reading.kind === "rima" && "font-display text-2xl font-medium leading-snug",
                reading.kind === "carta" && "font-display text-2xl font-medium leading-snug",
              )}
            >
              {block.text}
            </p>
          </div>
        ))}
      </article>
      {reading.tryAtHome ? (
        <div className="mt-6 rounded-card border-[3px] border-ink bg-yellow p-5 shadow-chunky-sm">
          <p className="font-display text-sm font-semibold uppercase tracking-widest">Para casa</p>
          <p className="mt-2 text-lg">{reading.tryAtHome}</p>
        </div>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {done ? (
          <p className="font-display text-lg font-semibold text-zizu">Guardado en el álbum.</p>
        ) : (
          <Button
            tone="yellow"
            onClick={() => complete(`read:${reading.id}`, reading.kind === "carta" ? 3 : 5, `lectura-${reading.id}`, reading.host)}
          >
            {reading.kind === "carta" ? "Guardar en el álbum" : "¡Ya lo leí!"}
          </Button>
        )}
        <Link to="/leer" className={buttonVariants({ tone: "cream" })}>
          Más lecturas
        </Link>
      </div>
    </main>
  );
}
