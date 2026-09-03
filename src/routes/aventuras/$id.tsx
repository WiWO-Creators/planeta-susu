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
    <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <Link to="/aventuras" className="font-display text-sm font-semibold">
        ← Cuentos
      </Link>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{story.title}</h1>
      <div className="mt-6">
        <StoryReader story={story} />
      </div>
    </main>
  );
}
