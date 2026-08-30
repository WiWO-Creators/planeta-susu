import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { characterMap, type CharacterSlug } from "@/data/characters";

const bobDelay = ["", "bob-d1", "bob-d2", "bob-d3", "bob-d4"] as const;

type Props = {
  slug: CharacterSlug;
  className?: string;
  height?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  animate?: boolean;
  linked?: boolean;
  label?: boolean;
};

export function Figure({
  slug,
  className,
  height = "h-40 sm:h-56 md:h-72",
  delay = 0,
  animate = true,
  linked = true,
  label = false,
}: Props) {
  const c = characterMap[slug];
  const img = (
    <img
      src={c.portrait}
      alt={c.name}
      draggable={false}
      className={cn(
        "pointer-events-none w-auto object-contain object-bottom drop-shadow-soft",
        height,
        animate && "bob",
        animate && bobDelay[delay],
        className,
      )}
    />
  );
  if (!linked) {
    return label ? (
      <div className="flex flex-col items-center gap-1">
        {img}
        <span className="font-display text-sm font-semibold sm:text-base">{c.name}</span>
      </div>
    ) : (
      img
    );
  }
  return (
    <Link
      to="/personajes/$slug"
      params={{ slug }}
      className="flex flex-col items-center gap-1 outline-none"
      aria-label={`Conocer a ${c.name}`}
    >
      {img}
      {label ? (
        <span className="font-display text-sm font-semibold sm:text-base">{c.name}</span>
      ) : null}
    </Link>
  );
}

export function Speech({
  who,
  children,
  className,
}: {
  who?: CharacterSlug;
  children: ReactNode;
  className?: string;
}) {
  const c = who ? characterMap[who] : null;
  return (
    <figure
      className={cn(
        "relative flex gap-3 rounded-card border-[3px] border-ink bg-cloud p-4 shadow-chunky-sm sm:gap-4 sm:p-5",
        className,
      )}
    >
      {c ? (
        <img
          src={c.portrait}
          alt=""
          className="h-16 w-16 shrink-0 object-contain object-bottom sm:h-20 sm:w-20"
        />
      ) : null}
      <figcaption className="min-w-0">
        {c ? (
          <p
            className="font-display text-sm font-semibold uppercase tracking-wider"
            style={{ color: c.color }}
          >
            {c.name}
          </p>
        ) : null}
        <p className="mt-1 text-base leading-relaxed text-ink sm:text-lg">{children}</p>
      </figcaption>
    </figure>
  );
}
