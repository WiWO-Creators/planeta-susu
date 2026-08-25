import { useEffect, useState, type ReactNode } from "react";
import { ART } from "@/data/gameArt";
import { cn } from "@/lib/utils";
import { beep } from "@/components/games/playkit";

type Pop = { id: number; x: number; y: number };

export function SparkleField() {
  const [pops, setPops] = useState<Pop[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    const on = (e: PointerEvent) => {
      const id = ++n;
      const pop = { id, x: e.clientX, y: e.clientY };
      setPops((p) => [...p.slice(-10), pop]);
      window.setTimeout(() => {
        setPops((p) => p.filter((x) => x.id !== id));
      }, 700);
    };
    window.addEventListener("pointerdown", on);
    return () => window.removeEventListener("pointerdown", on);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden>
      {pops.map((p) => (
        <span
          key={p.id}
          className="spark-pop"
          style={{ left: p.x, top: p.y }}
        />
      ))}
    </div>
  );
}

const FLOATS = [
  { src: ART.planetYellow, x: "4%", y: "8%", s: 72, d: "0s" },
  { src: ART.balloonPink, x: "86%", y: "6%", s: 64, d: "0.4s" },
  { src: ART.planetBlue, x: "90%", y: "38%", s: 56, d: "0.8s" },
  { src: ART.balloonYellow, x: "2%", y: "42%", s: 60, d: "1.1s" },
  { src: ART.sun, x: "78%", y: "58%", s: 52, d: "0.2s" },
];

export function SkyToys() {
  const [spin, setSpin] = useState<number | null>(null);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden={false}>
      {FLOATS.map((f, i) => (
        <button
          key={f.src}
          type="button"
          className={cn(
            "pointer-events-auto absolute floaty z-[1] rounded-full p-1 focus-visible:outline",
            spin === i && "wiggle",
          )}
          style={{ left: f.x, top: f.y, width: f.s, animationDelay: f.d }}
          aria-label="juguete del cielo"
          onClick={() => {
            beep(620 + i * 80, 90);
            setSpin(i);
            window.setTimeout(() => setSpin(null), 600);
          }}
        >
          <img src={f.src} alt="" className="h-full w-full object-contain" />
        </button>
      ))}
    </div>
  );
}

export function PageEnter({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
