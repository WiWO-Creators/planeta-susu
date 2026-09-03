import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { characterMap } from "@/data/characters";
import { articleWorld, articlesOfSection } from "@/data/catalog";
import { getArticles } from "@/lib/articles";
import { getTopic } from "@/data/topics";
import { territories } from "@/data/territories";
import { LessonView } from "@/components/learn/LessonView";
import { Speech } from "@/components/characters/Figure";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/explora/$tema")({
  loader: () => getArticles(),
  component: TemaPage,
});

function TemaPage() {
  const { tema } = Route.useParams();
  const ARTICLES = Route.useLoaderData();
  const topic = getTopic(tema);
  if (!topic) throw notFound();
  const host = characterMap[topic.host];
  const territory = territories.find((t) => t.topic === tema);
  const lessons = articlesOfSection(ARTICLES, "explora").filter((a) => articleWorld(a) === tema);

  return (
    <main>
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        {territory ? (
          <img src={territory.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-cream/70" />
        <div className="relative mx-auto grid max-w-6xl items-end gap-6 px-4 pt-10 sm:px-6 md:grid-cols-[1fr_auto]">
          <div className="pb-10">
            <Link to="/explora" className="font-display text-sm font-semibold">
              ← Explora
            </Link>
            <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">{topic.title}</h1>
          </div>
          <img
            src={host.portrait}
            alt={host.name}
            className="h-56 w-auto object-contain object-bottom sm:h-72"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-16 px-4 py-12 sm:px-6">
        <Speech who={topic.host}>{host.greeting}</Speech>
        {lessons.map((lesson) => (
          <LessonView key={lesson.id} lesson={lesson} topicSlug={topic.slug} />
        ))}
        <aside className="rounded-card border-[3px] border-ink bg-cream p-5">
          <p className="font-display text-sm font-semibold uppercase tracking-widest">Para grandes</p>
          <p className="mt-2">{topic.forParents}</p>
          <Link to="/padres" className={cn(buttonVariants({ tone: "ink", size: "sm" }), "mt-4")}>
            Ir a zona padres
          </Link>
        </aside>
      </div>
    </main>
  );
}
