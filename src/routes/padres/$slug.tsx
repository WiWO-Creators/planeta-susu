import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articleBlocks, articleMinutes, getArticleBySlug } from "@/data/catalog";
import { getArticles } from "@/lib/articles";
import { blockList, blockText, blocksOfType, firstBlockOfType } from "@/lib/blocks";

export const Route = createFileRoute("/padres/$slug")({
  loader: () => getArticles(),
  component: GuidePage,
});

function GuidePage() {
  const { slug } = Route.useParams();
  const ARTICLES = Route.useLoaderData();
  const g = getArticleBySlug(ARTICLES, "padres", slug);
  if (!g) throw notFound();
  const bloques = articleBlocks(g);
  const prueben = firstBlockOfType(bloques, "prueben");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link to="/padres" className="font-display text-sm font-semibold uppercase tracking-widest">
        ← Sala de Grandes
      </Link>
      <p className="mt-4 font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
        {articleMinutes(g)} min de lectura · {g.tags.join(" · ")}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{g.title}</h1>
      <p className="mt-4 text-xl leading-relaxed text-ink-soft">{g.summary}</p>
      <div className="mt-10 space-y-8">
        {blocksOfType(bloques, "seccion").map((s) => (
          <section key={blockText(s, "title")}>
            <h2 className="font-display text-2xl font-semibold">{blockText(s, "title")}</h2>
            {blockList(s, "parrafos").map((p) => (
              <p key={p} className="mt-3 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      {prueben ? (
        <aside className="mt-10 rounded-card border-[3px] border-ink bg-yellow p-5 shadow-chunky-sm">
          <h2 className="font-display text-2xl font-semibold">{blockText(prueben, "title")}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-lg">
            {blockList(prueben, "pasos").map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </aside>
      ) : null}
    </main>
  );
}
