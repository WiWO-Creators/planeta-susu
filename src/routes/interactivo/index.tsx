import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import { Speech } from "@/components/characters/Figure";
import { articleImage, articleMinutes, articleSlug, articlesOfSection } from "@/data/catalog";
import { getArticles } from "@/lib/articles";
import { useProgress } from "@/store/progress";

/**
 * Responsabilidad: la sala de Interactivo — lista lo que llegó desde afuera.
 * Usado por: la ruta "/interactivo" del sitio.
 * NO hace: no lee la base ni mezcla fuentes; eso es lib/articles.
 *
 * Es la única sección donde publica el orquestador, y existe separada a
 * propósito: este sitio lo leen niños, así que lo que escribe una máquina no se
 * mezcla con el material de la casa. Se anuncia como lo que es y vive aparte.
 *
 * Arranca vacía, y eso es lo normal: hasta que alguien publique algo, la sala
 * tiene que explicarse sola en vez de mostrar un hueco.
 */

export const Route = createFileRoute("/interactivo/")({
  loader: () => getArticles(),
  component: Interactivo,
});

function Interactivo() {
  const ARTICLES = Route.useLoaderData();
  const completed = useProgress((s) => s.completed);
  const items = articlesOfSection(ARTICLES, "interactivo");

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Interactivo</h1>
      <div className="mt-6">
        <Speech who="vector">
          Acá guardo lo que llega de visita. Son cosas nuevas, todavía calentitas.
        </Speech>
      </div>

      {items.length === 0 ? (
        <p className="mt-10 rounded-card border-[3px] border-ink bg-cloud p-6 text-lg shadow-chunky-sm">
          Todavía no llegó nada. Cuando llegue, lo vas a ver acá primero.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((pieza) => {
            const slug = articleSlug(pieza);
            const leida = completed.includes(`read:${slug}`);
            return (
              <Link
                key={pieza.id}
                to="/interactivo/$id"
                params={{ id: slug }}
                className="overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm transition-transform hover:-translate-y-1"
              >
                <div className="relative">
                  <Photo src={articleImage(pieza).url} ratio="card" />
                  {leida ? (
                    <span className="absolute right-2 top-2 rounded-full bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                      Leído
                    </span>
                  ) : null}
                </div>
                <div className="p-4">
                  <p className="font-display text-xl font-semibold leading-tight">{pieza.title}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-ink-soft">
                    {articleMinutes(pieza)} min
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
