export type Rank = { min: number; name: string; tagline: string };

export const RANKS: Rank[] = [
  { min: 0, name: "Semilla", tagline: "Acabas de llegar al planeta." },
  { min: 15, name: "Brote", tagline: "Ya asoma una pregunta." },
  { min: 35, name: "Explorador", tagline: "El patio tiene tu nombre." },
  { min: 70, name: "Guardián del recreo", tagline: "Cuidas lo que se comparte." },
  { min: 110, name: "Inventor de recetas", tagline: "Los bugs ya no te asustan." },
  { min: 160, name: "Estrella del planeta", tagline: "El cielo te pide autógrafo." },
];

export function rankFor(stars: number) {
  let current: Rank = RANKS[0];
  let next: Rank | null = RANKS[1] ?? null;
  for (let i = 0; i < RANKS.length; i++) {
    if (stars >= RANKS[i].min) {
      current = RANKS[i];
      next = RANKS[i + 1] ?? null;
    }
  }
  const start = current.min;
  const end = next ? next.min : start + 1;
  const progress = next ? Math.min(1, (stars - start) / (end - start)) : 1;
  return { current, next, progress };
}
