import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { beep } from "@/components/games/playkit";

const LINES = [
  { say: "¿Jugamos?", to: "/juegos" as const },
  { say: "¿Un cuento?", to: "/aventuras" as const },
  { say: "¡Al radar!", to: "/juguetes" as const },
  { say: "¿Vamos al bosque?", to: "/explora" as const },
];

export function HiBuddy() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(true);
  const line = LINES[i % LINES.length]!;
  if (pathname.startsWith("/juegos/") || pathname.startsWith("/aventuras/")) return null;

  return (
    <div className="pointer-events-none fixed bottom-24 right-3 z-30 hidden flex-col items-end gap-2 sm:bottom-6 md:flex">
      {open ? (
        <Link
          to={line.to}
          className="pointer-events-auto max-w-[10rem] rounded-2xl border-[3px] border-ink bg-yellow px-3 py-2 font-display text-sm font-semibold shadow-chunky-sm"
        >
          {line.say}
        </Link>
      ) : null}
      <button
        type="button"
        className="pointer-events-auto"
        aria-label="Hablar con Susu"
        onClick={() => {
          beep(640, 80);
          setOpen(true);
          setI((n) => n + 1);
        }}
      >
        <img src="/characters/susu.webp" alt="" className="h-20 w-auto bob object-contain drop-shadow-soft" />
      </button>
    </div>
  );
}