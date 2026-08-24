import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  kickerClassName,
  title,
  lede,
  children,
}: {
  kicker: string;
  kickerClassName?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <p
        className={cn(
          "font-display text-sm font-semibold uppercase tracking-widest",
          kickerClassName ?? "text-gadu",
        )}
      >
        {kicker}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">{title}</h1>
      {lede ? <p className="mt-4 max-w-2xl text-lg text-ink-soft">{lede}</p> : null}
      {children}
    </header>
  );
}
