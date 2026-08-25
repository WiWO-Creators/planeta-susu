import { Eraser, Download } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import { Speech } from "@/components/characters/Figure";
import { characters } from "@/data/characters";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

const COLORS = [
  "#1F1408",
  "#FFD000",
  "#6C3CE0",
  "#5579DF",
  "#2EBE7A",
  "#FF5D8F",
  "#EA9E48",
  "#D7655C",
  "#5FADE9",
  "#FFF6D8",
];

export function ArtStudio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState(COLORS[2]);
  const [size, setSize] = useState(14);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const complete = useProgress((s) => s.complete);
  const painted = useRef(false);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#FFFAF0";
    ctx.fillRect(0, 0, c.width, c.height);
  }, []);

  function pos(e: PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current!;
    const r = c.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * c.width,
      y: ((e.clientY - r.top) / r.height) * c.height,
    };
  }

  function paint(e: PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const { x, y } = pos(e);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (last.current) {
      ctx.beginPath();
      ctx.moveTo(last.current.x, last.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    last.current = { x, y };
    if (!painted.current) {
      painted.current = true;
      complete("game:colores", 6, "taller-margarel", "margarel");
    }
  }

  function stamp(src: string) {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const h = 140;
      const w = (img.width / img.height) * h;
      ctx.drawImage(img, c.width / 2 - w / 2, c.height / 2 - h / 2, w, h);
      complete("game:colores", 6, "taller-margarel", "margarel");
    };
    img.src = src;
  }

  function clear() {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    ctx.fillStyle = "#FFFAF0";
    ctx.fillRect(0, 0, c.width, c.height);
  }

  function download() {
    const c = canvasRef.current;
    if (!c) return;
    const a = document.createElement("a");
    a.download = "planeta-susu-obra.png";
    a.href = c.toDataURL("image/png");
    a.click();
  }

  return (
    <div>
      <Speech who="margarel">
        No hay un color equivocado. Hay combinaciones que todavía no existen. Hoy el día pidió fucsia.
      </Speech>
      <div className="mt-6 overflow-hidden rounded-card border-[3px] border-ink bg-paper shadow-chunky">
        <canvas
          ref={canvasRef}
          width={900}
          height={560}
          className="h-auto w-full touch-none"
          onPointerDown={(e) => {
            drawing.current = true;
            last.current = null;
            (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
            paint(e);
          }}
          onPointerMove={(e) => drawing.current && paint(e)}
          onPointerUp={() => {
            drawing.current = false;
            last.current = null;
          }}
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {COLORS.map((c) => (
          <button
            key={c}
            type="button"
            aria-label={`Color ${c}`}
            onClick={() => setColor(c)}
            className={cn(
              "size-9 rounded-full border-[3px] border-ink",
              color === c && "ring-4 ring-gadu/40",
            )}
            style={{ background: c }}
          />
        ))}
        <label className="ml-2 flex items-center gap-2 font-display text-sm">
          Grosor
          <input
            type="range"
            min={6}
            max={36}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-ink-soft">Sellos</p>
        {characters.map((ch) => (
          <button
            key={ch.slug}
            type="button"
            onClick={() => stamp(ch.portrait)}
            className="size-12 overflow-hidden rounded-full border-[3px] border-ink bg-cream"
            aria-label={`Sello de ${ch.name}`}
          >
            <img src={ch.portrait} alt="" className="h-full w-full object-cover object-top" />
          </button>
        ))}
        <Button tone="cream" size="sm" onClick={clear}>
          <Eraser className="size-4" /> Limpiar
        </Button>
        <Button tone="margarel" size="sm" onClick={download}>
          <Download className="size-4" /> Guardar
        </Button>
      </div>
    </div>
  );
}
