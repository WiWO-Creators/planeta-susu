import { rankFor } from "@/data/ranks";
import { cn } from "@/lib/utils";

export function RankBar({ stars, compact }: { stars: number; compact?: boolean }) {
  const { current, next, progress } = rankFor(stars);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-lg font-semibold">{current.name}</p>
        {next ? (
          <p className="text-sm text-ink-soft">
            {next.min - stars} para {next.name}
          </p>
        ) : (
          <p className="text-sm text-ink-soft">Rango máximo</p>
        )}
      </div>
      <div
        className={cn(
          "mt-2 overflow-hidden rounded-full border-[3px] border-ink bg-cloud",
          compact ? "h-3" : "h-4",
        )}
      >
        <div
          className="h-full bg-yellow transition-[width] duration-500"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      {compact ? null : <p className="mt-2 text-sm text-ink-soft">{current.tagline}</p>}
    </div>
  );
}
