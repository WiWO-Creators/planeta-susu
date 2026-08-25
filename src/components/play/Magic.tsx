import { useEffect, useState, type ReactNode } from "react";

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

export function PageEnter({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
