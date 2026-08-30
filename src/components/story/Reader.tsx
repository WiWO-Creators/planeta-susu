import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { characterMap } from "@/data/characters";
import { panelArt, type Story } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/store/progress";

export function StoryReader({ story }: { story: Story }) {
  const [i, setI] = useState(0);
  const complete = useProgress((s) => s.complete);
  const panel = story.panels[i]!;
  const who = panel.who ? characterMap[panel.who] : characterMap.susu;
  const last = i === story.panels.length - 1;
  const art = panelArt(story.id, i);

  function go(next: number) {
    const n = Math.max(0, Math.min(story.panels.length - 1, next));
    if (n === i) return;
    setI(n);
    if (n === story.panels.length - 1) {
      complete(`story:${story.id}`, 8, `cuento-${story.id}`, story.hosts[0]);
    }
  }

  useEffect(() => {
    const img = new Image();
    img.src = panelArt(story.id, Math.min(i + 1, story.panels.length - 1));
  }, [i, story.id, story.panels.length]);

  return (
    <div>
      <article className="overflow-hidden rounded-card border-[3px] border-ink bg-cream shadow-chunky">
        <button
          type="button"
          className="block w-full"
          onClick={() => go(i + 1)}
          aria-label="Siguiente página"
        >
          <div className="aspect-video overflow-hidden bg-cloud">
            <img src={art} alt="" draggable={false} className="pointer-events-none h-full w-full object-cover object-center" />
          </div>
        </button>
        <div className="flex items-end gap-3 px-3 py-4 sm:gap-5 sm:px-5">
          <img
            src={who.portrait}
            alt={who.name}
            draggable={false}
            className="h-28 w-auto shrink-0 object-contain object-bottom sm:h-36"
          />
          <div className="bubble min-w-0 flex-1">
            <p className="font-display text-sm font-semibold" style={{ color: who.color }}>
              {panel.narrator || !panel.who ? "Narrador" : who.name}
            </p>
            <p className="mt-1 font-display text-lg font-medium leading-snug sm:text-2xl">{panel.text}</p>
            <p className="mt-2 font-display text-sm tabular-nums text-ink-soft">
              {i + 1} / {story.panels.length}
            </p>
          </div>
        </div>
      </article>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Button tone="cream" size="lg" className="min-h-16 min-w-28" onClick={() => go(i - 1)} disabled={i === 0}>
          <ChevronLeft className="size-7" /> Atrás
        </Button>
        <p className="font-display text-lg font-semibold tabular-nums">
          {i + 1}/{story.panels.length}
        </p>
        <Button
          tone={last ? "zizu" : "yellow"}
          size="lg"
          className="min-h-16 min-w-32"
          onClick={() => go(i + 1)}
          disabled={last}
        >
          {last ? "Fin" : "Sigue"} <ChevronRight className="size-7" />
        </Button>
      </div>
    </div>
  );
}
