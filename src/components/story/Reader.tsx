import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { characterMap } from "@/data/characters";
import { articleBlocks, articleHost, articleSlug } from "@/data/catalog";
import type { Article } from "@/data/types";
import { blockFlag, blockHost, blockText } from "@/lib/blocks";
import { Button } from "@/components/ui/button";
import { beep, cheer } from "@/components/games/playkit";
import { useProgress } from "@/store/progress";

export function StoryReader({ story }: { story: Article }) {
  const [i, setI] = useState(0);
  const [fin, setFin] = useState(false);
  const complete = useProgress((s) => s.complete);
  const panels = articleBlocks(story);
  const panel = panels[i]!;
  const quien = blockHost(panel);
  const who = characterMap[quien ?? "susu"];
  const last = i === panels.length - 1;
  const art = blockText(panel, "art");
  const slug = articleSlug(story);
  const hostSlug = articleHost(story);

  function go(next: number) {
    const n = Math.max(0, Math.min(panels.length - 1, next));
    if (n === i) {
      if (last) {
        complete(`story:${slug}`, 8, `cuento-${slug}`, hostSlug);
        cheer();
        setFin(true);
      }
      return;
    }
    beep(520 + n * 20, 80);
    setI(n);
    if (n === panels.length - 1) {
      complete(`story:${slug}`, 8, `cuento-${slug}`, hostSlug);
    }
  }

  useEffect(() => {
    const img = new Image();
    img.src = blockText(panels[Math.min(i + 1, panels.length - 1)]!, "art");
  }, [i, panels]);

  if (fin) {
    const host = characterMap[hostSlug];
    return (
      <div className="py-6 text-center">
        <p className="font-display text-2xl font-semibold">¡Cuento listo!</p>
        <img src={host.portrait} alt="" className="mx-auto mt-3 h-44 w-auto bob object-contain" />
        <p className="bubble mx-auto mt-4 max-w-md text-left text-xl">{story.title}</p>
        <p className="mt-3 font-display text-lg font-semibold">+8 ★</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button className="min-h-16 min-w-40 text-xl" tone="yellow" onClick={() => { setFin(false); setI(0); }}>
            Otra vez
          </Button>
          <Button className="min-h-16 min-w-40 text-xl" tone="cream" asChild>
            <Link to="/aventuras">Más cuentos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => go(i + 1)}
        className="relative block w-full overflow-hidden rounded-card border-[3px] border-ink bg-cream text-left shadow-chunky"
        aria-label={last ? "Terminar cuento" : "Siguiente página"}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-cloud sm:aspect-video">
          {art ? (
            <img
              src={art}
              alt=""
              draggable={false}
              className="pointer-events-none h-full w-full object-cover object-center"
            />
          ) : null}
          <img
            src={who.portrait}
            alt=""
            draggable={false}
            className="pointer-events-none absolute bottom-0 left-2 h-[55%] w-auto object-contain object-bottom sm:left-4"
          />
        </div>
        <div className="border-t-[3px] border-ink bg-cream p-4 sm:p-5">
          <p className="font-display text-sm font-semibold" style={{ color: who.color }}>
            {blockFlag(panel, "narrator") || !quien ? "Narrador" : who.name}
          </p>
          <p className="mt-1 font-display text-xl font-medium leading-snug sm:text-3xl">{blockText(panel)}</p>
          <p className="mt-3 font-display text-base font-semibold text-ink-soft">
            Toca para seguir · {i + 1}/{panels.length}
          </p>
        </div>
      </button>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Button tone="cream" size="lg" className="min-h-16 min-w-28" onClick={() => go(i - 1)} disabled={i === 0}>
          <ChevronLeft className="size-7" />
        </Button>
        <div className="flex flex-wrap justify-center gap-1.5">
          {panels.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Página ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-4 rounded-full border-2 border-ink ${idx === i ? "w-8 bg-ink" : "w-4 bg-cloud"}`}
            />
          ))}
        </div>
        <Button tone={last ? "zizu" : "yellow"} size="lg" className="min-h-16 min-w-32" onClick={() => go(i + 1)}>
          {last ? "Fin" : "Sigue"} <ChevronRight className="size-7" />
        </Button>
      </div>
    </div>
  );
}
