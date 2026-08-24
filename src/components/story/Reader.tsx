import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { characterMap } from "@/data/characters";
import type { Story } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/store/progress";
import { ding } from "@/lib/utils";
import { cn } from "@/lib/utils";

const bgClass: Record<Story["panels"][number]["bg"], string> = {
  yellow: "bg-yellow text-ink",
  cream: "bg-cream text-ink",
  vector: "bg-vector text-cloud",
  gadu: "bg-gadu text-cloud",
  zizu: "bg-zizu text-ink",
  margarel: "bg-margarel text-cloud",
  susu: "bg-susu text-ink",
  teal: "bg-teal text-cloud",
  sky: "bg-sky text-ink",
  ink: "bg-ink text-cream",
};

export function StoryReader({ story }: { story: Story }) {
  const [i, setI] = useState(0);
  const complete = useProgress((s) => s.complete);
  const panel = story.panels[i];
  const who = panel.who ? characterMap[panel.who] : null;
  const last = i === story.panels.length - 1;

  function go(next: number) {
    const n = Math.max(0, Math.min(story.panels.length - 1, next));
    setI(n);
    if (n === story.panels.length - 1) {
      complete(`story:${story.id}`, 8, `cuento-${story.id}`, story.hosts[0]);
      ding(true);
    }
  }

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky-lg",
          bgClass[panel.bg],
        )}
      >
        <div className="flex min-h-[26rem] flex-col items-center gap-6 px-5 py-8 sm:flex-row sm:items-end sm:px-10">
          {who ? (
            <img
              src={who.portrait}
              alt={who.name}
              className="h-56 w-auto object-contain object-bottom sm:h-80"
            />
          ) : (
            <img
              src="/characters/group-wave.webp"
              alt=""
              className="h-48 w-auto object-contain sm:h-64"
            />
          )}
          <div className="relative max-w-md rounded-card border-[3px] border-ink bg-cloud/90 p-5 text-ink shadow-chunky-sm">
            {who && !panel.narrator ? (
              <p className="font-display text-sm font-semibold uppercase tracking-widest" style={{ color: who.color }}>
                {who.name}
              </p>
            ) : (
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
                Narrador
              </p>
            )}
            <p className="mt-2 font-display text-2xl font-medium leading-snug sm:text-3xl">
              {panel.text}
            </p>
            <p className="mt-4 font-display text-sm tabular-nums text-ink-soft">
              {i + 1} / {story.panels.length}
            </p>
          </div>
        </div>
      </div>
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
                "size-4 rounded-full border-2 border-ink transition-all sm:size-3.5",
                idx === i ? "w-8 bg-ink sm:w-8" : "bg-cloud",
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
