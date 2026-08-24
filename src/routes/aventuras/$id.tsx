import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getStory } from "@/data/stories";
import { StoryReader } from "@/components/story/Reader";

export const Route = createFileRoute("/aventuras/$id")({
  component: StoryPage,
});

function StoryPage() {
  const { id } = Route.useParams();
  const story = getStory(id);
  if (!story) throw notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link to="/aventuras" className="font-display text-sm font-semibold">
        ← Cuentos
      </Link>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{story.title}</h1>
      <div className="mt-6">
        <StoryReader story={story} />
      </div>
    </main>
  );
}
