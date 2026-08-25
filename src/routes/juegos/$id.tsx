import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGame } from "@/data/games";
import { characterMap } from "@/data/characters";
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
  const host = characterMap[game.host];

  return (
    <main className="mx-auto max-w-5xl px-3 py-4 sm:px-6 sm:py-6">
      <Link to="/juegos" className="font-display text-sm font-semibold">
        ← Jugar
      </Link>
      <div className="mt-3 flex items-end gap-3">
        <img src={host.portrait} alt="" className="h-16 w-auto object-contain sm:h-20" />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{game.title}</h1>
      </div>
      <div className="mt-3 overflow-hidden rounded-card border-[3px] border-ink bg-cream p-3 shadow-chunky sm:p-4">
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
