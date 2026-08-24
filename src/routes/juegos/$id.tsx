import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGame } from "@/data/games";
import { RecycleGame } from "@/components/games/RecycleGame";
import { MathGame } from "@/components/games/MathGame";
import { CodeGame } from "@/components/games/CodeGame";
import { ArtStudio } from "@/components/games/ArtStudio";
import { FeelingsGame } from "@/components/games/FeelingsGame";
import { MemoryGame, PatternGame, SimonGame, OddGame, SpotGame } from "@/components/games/Minis";
import { SilhouetteGame, CycleGame, RhymeGame, CountGame, RecipeGame } from "@/components/games/MoreMinis";

export const Route = createFileRoute("/juegos/$id")({
  component: GamePage,
});

function GamePage() {
  const { id } = Route.useParams();
  const game = getGame(id);
  if (!game) throw notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <Link to="/juegos" className="font-display text-sm font-semibold">
        ← Jugar
      </Link>
      <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{game.title}</h1>
      <div className="mt-4 overflow-hidden rounded-card border-[3px] border-ink bg-cloud p-3 shadow-chunky sm:p-4">
        <GameBody id={id} />
      </div>
    </main>
  );
}

function GameBody({ id }: { id: string }) {
  switch (id) {
    case "reciclar":
      return <RecycleGame />;
    case "sumas":
      return <MathGame />;
    case "codigo":
      return <CodeGame />;
    case "colores":
      return <ArtStudio />;
    case "emociones":
      return <FeelingsGame />;
    case "memoria":
      return <MemoryGame />;
    case "patrones":
      return <PatternGame />;
    case "simon":
      return <SimonGame />;
    case "sobra":
      return <OddGame />;
    case "busca":
      return <SpotGame />;
    case "siluetas":
      return <SilhouetteGame />;
    case "ciclo":
      return <CycleGame />;
    case "rimas":
      return <RhymeGame />;
    case "contar":
      return <CountGame />;
    case "receta":
      return <RecipeGame />;
    default:
      return null;
  }
}
