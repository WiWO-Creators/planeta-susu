import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { characterMap } from "@/data/characters";
import { articleBlocks, articleHost, articleSlug } from "@/data/catalog";
import type { Article } from "@/data/types";
import { blockFlag, blockHost, blockText } from "@/lib/blocks";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/store/progress";

/**
 * Responsabilidad: pasar las viñetas de un cuento, una por una.
 * Usado por: routes/aventuras/$id.tsx.
 * NO hace: no elige el cuento ni sabe de dónde viene.
 *
 * La ilustración viaja DENTRO de la viñeta. Antes se buscaba en una tabla
 * aparte por id y posición, con un recorte cuando había menos ilustraciones que
 * viñetas; ahora cada viñeta trae la suya y un cuento publicado desde el
 * orquestador se dibuja igual que los del archivo.
 */

export function StoryReader({ story }: { story: Article }) {
  const [i, setI] = useState(0);
  const complete = useProgress((s) => s.complete);
  const panels = articleBlocks(story);
  const panel = panels[i]!;
  const quien = blockHost(panel);
  const who = characterMap[quien ?? "susu"];
  const last = i === panels.length - 1;
  const art = blockText(panel, "art");

  function go(next: number) {
    const n = Math.max(0, Math.min(panels.length - 1, next));
    if (n === i) return;
    setI(n);
    if (n === panels.length - 1) {
      const slug = articleSlug(story);
      complete(`story:${slug}`, 8, `cuento-${slug}`, articleHost(story));
    }
  }

  useEffect(() => {
    const img = new Image();
    img.src = blockText(panels[Math.min(i + 1, panels.length - 1)]!, "art");
  }, [i, panels]);

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
              {blockFlag(panel, "narrator") || !quien ? "Narrador" : who.name}
            </p>
            <p className="mt-1 font-display text-lg font-medium leading-snug sm:text-2xl">{blockText(panel)}</p>
            <p className="mt-2 font-display text-sm tabular-nums text-ink-soft">
              {i + 1} / {panels.length}
            </p>
          </div>
        </div>
      </article>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Button tone="cream" size="lg" className="min-h-16 min-w-28" onClick={() => go(i - 1)} disabled={i === 0}>
          <ChevronLeft className="size-7" /> Atrás
        </Button>
        <p className="font-display text-lg font-semibold tabular-nums">
          {i + 1}/{panels.length}
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
