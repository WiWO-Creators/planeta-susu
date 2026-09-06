import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticleBySlug } from "@/data/catalog";
import { getArticles } from "@/lib/articles";
import { StoryReader } from "@/components/story/Reader";

export const Route = createFileRoute("/aventuras/$id")({
  loader: () => getArticles(),
  component: StoryPage,
});

function StoryPage() {
  const { id } = Route.useParams();
  const ARTICLES = Route.useLoaderData();
  const story = getArticleBySlug(ARTICLES, "aventuras", id);
  if (!story) throw notFound();

  return (
    <main className="mx-auto max-w-4xl px-3 py-4 sm:px-6">
      <Link to="/aventuras" className="font-display text-lg font-semibold">
        ← Cuentos
      </Link>
      <h1 className="mt-2 font-display text-2xl font-semibold sm:text-4xl">{story.title}</h1>
      <div className="mt-4">
        <StoryReader story={story} />
      </div>
    </main>
  );
}
