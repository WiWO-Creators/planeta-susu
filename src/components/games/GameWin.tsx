import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { characters, type CharacterSlug } from "@/data/characters";
import { useProgress } from "@/store/progress";

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
    if (!done) complete(id, 10, badge, who);
  }, [complete, done, id, badge, who]);
  const c = characters.find((x) => x.slug === who)!;
  return (
    <div className="text-center">
      <img src={c.portrait} alt="" className="mx-auto h-36 bob" />
      <h2 className="mt-3 font-display text-3xl font-semibold">
        {score} de {total}
      </h2>
      <p className="mt-2 text-lg text-ink-soft">{kids}</p>
      <p className="mt-2 font-display text-sm font-semibold text-gadu">+10 estrellas en el álbum</p>
      <Button className="mt-6" tone="yellow" onClick={() => window.location.reload()}>
        Otra ronda
      </Button>
    </div>
  );
}
