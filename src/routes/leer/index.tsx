import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import {
  KIND_LABEL,
  KIND_ORDER,
  articleImage,
  articleReadingKind,
  articleSlug,
  articlesOfSection,
} from "@/data/catalog";
import type { ReadingKind } from "@/data/types";
import { getArticles } from "@/lib/articles";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/leer/")({
  loader: () => getArticles(),
  component: Leer,
});

function Leer() {
  const completed = useProgress((s) => s.completed);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Leer</h1>
      <div className="mt-6 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
        <Photo src="/scenes/biblioteca.jpg" alt="" ratio="wide" />
      </div>
      {KIND_ORDER.map((kind) => (
        <KindSection key={kind} kind={kind} completed={completed} />
      ))}
    </main>
  );
}

function KindSection({ kind, completed }: { kind: ReadingKind; completed: string[] }) {
  const ARTICLES = Route.useLoaderData();
  const items = articlesOfSection(ARTICLES, "leer").filter((r) => articleReadingKind(r) === kind);
  const n = items.filter((r) => completed.includes(`read:${articleSlug(r)}`)).length;
  return (
    <section className="mt-12">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-display text-3xl font-semibold">{KIND_LABEL[kind]}</h2>
        <p className="tabular-nums text-ink-soft">
          {n}/{items.length}
        </p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => {
          const slug = articleSlug(r);
          const read = completed.includes(`read:${slug}`);
          return (
            <Link
              key={r.id}
              to="/leer/$id"
              params={{ id: slug }}
              className="overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <Photo src={articleImage(r).url} ratio="card" />
                {read ? (
                  <span className="absolute right-2 top-2 rounded-full bg-yellow px-2 py-0.5 font-display text-xs font-semibold">
                    Leído
                  </span>
                ) : null}
              </div>
              <p className="p-4 font-display text-xl font-semibold leading-tight">{r.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
