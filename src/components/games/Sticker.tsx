import { useEffect, useRef } from "react";

export function Sticker({
  draw,
  size = 72,
  className,
}: {
  draw: (ctx: CanvasRenderingContext2D, s: number) => void;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = size * dpr;
    c.height = size * dpr;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);
    draw(ctx, size * 0.4);
  }, [draw, size]);
  return <canvas ref={ref} width={size} height={size} className={className} style={{ width: size, height: size }} />;
}
