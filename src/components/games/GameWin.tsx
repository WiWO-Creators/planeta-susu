import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { characters, type CharacterSlug } from "@/data/characters";
import { useProgress } from "@/store/progress";
import { cheer } from "./playkit";

export function GameWin({
  who,
  score,
  total,
  id,
  badge,
  kids,
}: {
  who: CharacterSlug;
  score: number;
  total: number;
  id: string;
  badge: string;
  kids: string;
}) {
  const complete = useProgress((s) => s.complete);
  const done = useProgress((s) => s.has(id));
  useEffect(() => {
    cheer();
    if (!done) complete(id, 10, badge, who);
    // once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const c = characters.find((x) => x.slug === who)!;
  return (
    <div className="py-4 text-center">
      <p className="font-display text-2xl font-semibold text-gadu">¡Ganaste!</p>
      <img src={c.portrait} alt="" draggable={false} className="mx-auto mt-2 h-44 w-auto bob object-contain sm:h-52" />
      <h2 className="mt-3 font-display text-4xl font-semibold">
        {score} / {total}
      </h2>
      <p className="bubble mx-auto mt-3 max-w-sm text-left text-lg">{kids}</p>
      <p className="mt-3 font-display text-lg font-semibold">+10 ★</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button className="min-h-16 min-w-40 text-xl" tone="yellow" onClick={() => window.location.reload()}>
          Otra vez
        </Button>
        <Button className="min-h-16 min-w-40 text-xl" tone="cream" asChild>
          <Link to="/juegos">Más juegos</Link>
        </Button>
      </div>
    </div>
  );
}
