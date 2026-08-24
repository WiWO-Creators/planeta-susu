import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hearts({ n, max = 5, className }: { n: number; max?: number; className?: string }) {
  return (
    <div className={cn("flex gap-1", className)} aria-label={`${n} de ${max} corazones de amistad`}>
      {Array.from({ length: max }, (_, i) => (
        <Heart
          key={i}
          className={cn("size-5", i < n ? "fill-margarel text-margarel" : "text-ink/25")}
          strokeWidth={2.4}
        />
      ))}
    </div>
  );
}
