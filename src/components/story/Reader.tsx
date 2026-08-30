import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { characterMap } from "@/data/characters";
import { panelArt, type Story } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { beep, cheer } from "@/components/games/playkit";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

const SPARKS = [
  { x: "18%", y: "22%" },
  { x: "72%", y: "30%" },
  { x: "54%", y: "62%" },
];

export function StoryReader({ story }: { story: Story }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"on" | "off">("on");
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState<number[]>([]);
  const [wiggle, setWiggle] = useState(false);
  const lock = useRef(false);
  const startX = useRef(0);
  const complete = useProgress((s) => s.complete);
  const panel = story.panels[i]!;
  const who = panel.who ? characterMap[panel.who] : characterMap.susu;
  const last = i === story.panels.length - 1;
  const art = panelArt(story.id, i);

  function go(next: number) {
    const n = Math.max(0, Math.min(story.panels.length - 1, next));
    if (n === i || lock.current) return;
    lock.current = true;
    setPhase("off");
    window.setTimeout(() => {
      setI(n);
      setOpen(false);
      setStars([]);
      setPhase("on");
      lock.current = false;
      if (n === story.panels.length - 1) {
        complete(`story:${story.id}`, 8, `cuento-${story.id}`, story.hosts[0]);
      }
    }, 280);
  }

  function tapStar(idx: number) {
    if (stars.includes(idx)) return;
    beep(520 + idx * 80, 90);
    setStars((s) => [...s, idx]);
    setOpen(true);
    if (stars.length + 1 >= 2) cheer();
  }

  useEffect(() => {
    const img = new Image();
    img.src = panelArt(story.id, Math.min(i + 1, story.panels.length - 1));
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
      <article
        className="overflow-hidden rounded-card border-[3px] border-ink bg-cream shadow-chunky"
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          const dx = e.clientX - startX.current;
          if (dx < -60) go(i + 1);
          if (dx > 60) go(i - 1);
        }}
      >
        <div
          className={cn(
            "transition-opacity duration-500 ease-in-out",
            phase === "on" ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="relative aspect-video w-full overflow-hidden bg-cloud">
            <img src={art} alt="" className="h-full w-full object-cover object-center" />
            <button
              type="button"
              className="absolute inset-0"
              aria-label="Tocar el dibujo"
              onClick={() => {
                if (!open) {
                  setOpen(true);
                  beep(640, 80);
                }
              }}
            />
            {SPARKS.map((s, idx) => (
              <button
                key={idx}
                type="button"
                aria-label="Estrella"
                className={cn(
                  "absolute z-10 grid size-11 place-items-center rounded-full border-[3px] border-ink",
                  stars.includes(idx) ? "bg-yellow scale-90" : "bg-yellow bob",
                )}
                style={{ left: s.x, top: s.y }}
                onClick={() => tapStar(idx)}
              >
                <Sparkles className="size-4" />
              </button>
            ))}
            {!open ? (
              <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border-[3px] border-ink bg-yellow px-4 py-2 font-display text-base font-semibold shadow-chunky-sm">
                Toca el dibujo
              </span>
            ) : null}
          </div>

          <div className="flex items-end gap-3 px-3 py-4 sm:gap-5 sm:px-5">
            <button
              type="button"
              className="shrink-0"
              aria-label={who.name}
              onClick={() => {
                beep(700, 90);
                setWiggle(true);
                setOpen(true);
                window.setTimeout(() => setWiggle(false), 500);
              }}
            >
              <img
                src={who.portrait}
                alt={who.name}
                className={cn(
                  "h-28 w-auto object-contain object-bottom sm:h-36",
                  wiggle && "wiggle",
                )}
              />
            </button>
            <div
              className={cn(
                "bubble min-w-0 flex-1 transition-opacity duration-300",
                open ? "opacity-100" : "opacity-40",
              )}
            >
              <p className="font-display text-sm font-semibold" style={{ color: who.color }}>
                {panel.narrator || !panel.who ? "Narrador" : who.name}
              </p>
              <p className="mt-1 font-display text-lg font-medium leading-snug sm:text-2xl">
                {open ? panel.text : "…"}
              </p>
              <p className="mt-2 font-display text-sm tabular-nums text-ink-soft">
                {i + 1} / {story.panels.length}
              </p>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Button
          tone="cream"
          size="lg"
          className="min-w-24"
          onClick={() => go(i - 1)}
          disabled={i === 0}
          aria-label="Viñeta anterior"
        >
          <ChevronLeft className="size-6" />
        </Button>
        <div className="flex flex-wrap justify-center gap-1.5">
          {story.panels.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Viñeta ${idx + 1}`}
              onClick={() => go(idx)}
              className={cn(
                "h-4 rounded-full border-2 border-ink transition-all duration-300",
                idx === i ? "w-8 bg-ink" : "w-4 bg-cloud",
              )}
            />
          ))}
        </div>
        <Button
          tone={last ? "zizu" : "yellow"}
          size="lg"
          className="min-w-28"
          onClick={() => go(i + 1)}
          disabled={last}
        >
          {last ? "Fin" : "Sigue"} <ChevronRight className="size-6" />
        </Button>
      </div>
    </div>
  );
}
