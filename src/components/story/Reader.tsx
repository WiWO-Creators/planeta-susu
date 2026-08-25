import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { characterMap } from "@/data/characters";
import { panelArt, type Story } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

export function StoryReader({ story }: { story: Story }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"on" | "off">("on");
  const lock = useRef(false);
  const complete = useProgress((s) => s.complete);
  const panel = story.panels[i]!;
  const who = panel.who ? characterMap[panel.who] : null;
  const last = i === story.panels.length - 1;
  const art = panelArt(story.id, i);

  function go(next: number) {
    const n = Math.max(0, Math.min(story.panels.length - 1, next));
    if (n === i || lock.current) return;
    lock.current = true;
    setPhase("off");
    window.setTimeout(() => {
      setI(n);
      setPhase("on");
      lock.current = false;
      if (n === story.panels.length - 1) {
        complete(`story:${story.id}`, 8, `cuento-${story.id}`, story.hosts[0]);
      }
    }, 280);
  }

  useEffect(() => {
    const next = panelArt(story.id, Math.min(i + 1, story.panels.length - 1));
    const img = new Image();
    img.src = next;
  }, [i, story.id, story.panels.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i]);

  return (
    <div>
      <article className="overflow-hidden rounded-card border-[3px] border-ink bg-cream shadow-chunky">
        <div
          className={cn(
            "transition-opacity duration-500 ease-in-out",
            phase === "on" ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="relative aspect-video overflow-hidden bg-cloud">
            <img
              src={art}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex items-end gap-4 px-4 py-5 sm:gap-5 sm:px-6 sm:py-6">
            {who ? (
              <img
                src={who.portrait}
                alt={who.name}
                className="h-24 w-auto shrink-0 object-contain object-bottom sm:h-32"
              />
            ) : (
              <img
                src="/characters/susu.webp"
                alt=""
                className="h-24 w-auto shrink-0 object-contain object-bottom sm:h-32"
              />
            )}
            <div className="min-w-0 pb-1">
              <p className="font-display text-sm font-semibold" style={who ? { color: who.color } : undefined}>
                {who && !panel.narrator ? who.name : "Narrador"}
              </p>
              <p className="mt-1 font-display text-xl font-medium leading-snug sm:text-2xl">{panel.text}</p>
              <p className="mt-3 font-display text-sm tabular-nums text-ink-soft">
                {i + 1} / {story.panels.length}
              </p>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-5 flex items-center justify-between gap-3">
        <Button tone="cream" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Viñeta anterior">
          <ChevronLeft className="size-5" /> Atrás
        </Button>
        <div className="flex gap-1.5">
          {story.panels.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Viñeta ${idx + 1}`}
              onClick={() => go(idx)}
              className={cn(
                "h-3 rounded-full border-2 border-ink transition-all duration-300",
                idx === i ? "w-7 bg-ink" : "w-3 bg-cloud",
              )}
            />
          ))}
        </div>
        <Button tone={last ? "zizu" : "yellow"} onClick={() => go(i + 1)} disabled={last}>
          {last ? "Fin" : "Siguiente"} <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
