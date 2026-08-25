import { createFileRoute } from "@tanstack/react-router";
import { Photo } from "@/components/ui/photo";
import type { ReactNode } from "react";
import { Radar, CrewNotes } from "@/components/play/Radar";
import { Bitacora, ColorMix, FeelMeter, HugAsk, ShadowSun } from "@/components/play/Toys";

export const Route = createFileRoute("/juguetes")({ component: Juguetes });

function Juguetes() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">Toca</h1>
      <div className="mt-6 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
        <Photo src="/scenes/nave-interior.jpg" alt="Interior de la nave" ratio="wide" />
      </div>

      <section className="mt-10 rounded-card border-[3px] border-ink bg-ink p-5 text-yellow shadow-chunky sm:p-8">
        <h2 className="font-display text-3xl font-semibold">Radar</h2>
        <div className="mt-6 text-cream">
          <Radar />
        </div>
      </section>

      <ToyBlock title="Voces">
        <CrewNotes />
      </ToyBlock>
      <ToyBlock title="Mezclar colores">
        <ColorMix />
      </ToyBlock>
      <ToyBlock title="Mover el sol">
        <ShadowSun />
      </ToyBlock>
      <ToyBlock title="¿Cómo te sientes?">
        <FeelMeter />
      </ToyBlock>
      <ToyBlock title="¿Abrazo?">
        <HugAsk />
      </ToyBlock>
      <ToyBlock title="Mapa">
        <Bitacora />
      </ToyBlock>
    </main>
  );
}

function ToyBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky-sm sm:p-8">
      <h2 className="font-display text-3xl font-semibold">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
