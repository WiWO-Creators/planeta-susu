import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, Lightbulb, Sparkles } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { Speech } from "@/components/characters/Figure";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  articleBlocks,
  articleHost,
  articleImage,
  articleKicker,
  articleMinutes,
  articleSlug,
  getArticleBySlug,
} from "@/data/catalog";
import { characterMap } from "@/data/characters";
import { getArticles } from "@/lib/articles";
import { blockText } from "@/lib/blocks";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";
import type { WiwoBlock } from "@wiwo/contract";

/**
 * Responsabilidad: dibujar una pieza de la sala de Interactivo.
 * Usado por: la ruta "/interactivo/$id" del sitio.
 * NO hace: no decide qué entra en la sala; eso lo impone el manifest, que ofrece
 *   "interactivo" como única sección publicable.
 *
 * Los bloques se dibujan EN ORDEN y no filtrados por tipo, al revés que la
 * biblioteca: acá el recuadro tiene que caer donde el texto lo dejó, porque
 * interrumpe a propósito. Un tipo desconocido no rompe la página, simplemente no
 * se dibuja: la pieza la escribe una máquina y el sitio no puede confiar en que
 * respete el vocabulario que anunció.
 */

const ICONO_POR_TONO = { tip: Lightbulb, wow: Sparkles, care: Heart };

export const Route = createFileRoute("/interactivo/$id")({
  loader: () => getArticles(),
  component: PiezaInteractiva,
});

function PiezaInteractiva() {
  const { id } = Route.useParams();
  const ARTICLES = Route.useLoaderData();
  const pieza = getArticleBySlug(ARTICLES, "interactivo", id);
  if (!pieza) throw notFound();

  const anfitrion = articleHost(pieza);
  const quien = characterMap[anfitrion];
  const slug = articleSlug(pieza);
  const bloques = articleBlocks(pieza);
  const complete = useProgress((s) => s.complete);
  const leida = useProgress((s) => s.has(`read:${slug}`));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        to="/interactivo"
        className="font-display text-sm font-semibold uppercase tracking-widest"
      >
        ← Interactivo
      </Link>
      <div className="mt-5 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
        <Photo src={articleImage(pieza).url} alt="" ratio="wide" />
      </div>
      <p className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
        {articleMinutes(pieza)} min · con {quien.name}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{pieza.title}</h1>
      {articleKicker(pieza) ? (
        <div className="mt-6">
          <Speech who={anfitrion}>{articleKicker(pieza)}</Speech>
        </div>
      ) : null}

      <article className="mt-8 space-y-6">
        {bloques.map((bloque, i) => (
          <Bloque key={i} bloque={bloque} />
        ))}
      </article>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {leida ? (
          <p className="font-display text-lg font-semibold text-zizu">Guardado en el álbum.</p>
        ) : (
          <Button
            tone="yellow"
            onClick={() => complete(`read:${slug}`, 5, `interactivo-${slug}`, anfitrion)}
          >
            ¡Ya lo leí!
          </Button>
        )}
        <Link to="/interactivo" className={buttonVariants({ tone: "cream" })}>
          Ver más
        </Link>
      </div>
    </main>
  );
}

/** Un bloque de la pieza. Devuelve null cuando el tipo no es de esta sala. */
function Bloque({ bloque }: { bloque: WiwoBlock }) {
  if (bloque.type === "parrafo") {
    const titulo = blockText(bloque, "title");
    return (
      <div className="rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky-sm">
        {titulo ? (
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-gadu">
            {titulo}
          </p>
        ) : null}
        <p className="whitespace-pre-line text-lg leading-relaxed">{blockText(bloque)}</p>
      </div>
    );
  }

  if (bloque.type === "callout") {
    const tono = blockText(bloque, "tone");
    const Icono = ICONO_POR_TONO[tono as keyof typeof ICONO_POR_TONO] ?? Lightbulb;
    return (
      <p
        className={cn(
          "flex gap-3 rounded-card border-[3px] border-ink p-4 text-base shadow-chunky-sm sm:text-lg",
          tono === "wow" ? "bg-yellow" : tono === "care" ? "bg-pink" : "bg-sky",
        )}
      >
        <Icono className="mt-0.5 size-5 shrink-0" />
        <span>{blockText(bloque)}</span>
      </p>
    );
  }

  if (bloque.type === "para-casa") {
    return (
      <div className="rounded-card border-[3px] border-ink bg-yellow p-5 shadow-chunky-sm">
        <p className="font-display text-sm font-semibold uppercase tracking-widest">Para casa</p>
        <p className="mt-2 text-lg">{blockText(bloque)}</p>
      </div>
    );
  }

  return null;
}
