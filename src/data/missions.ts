import type { CharacterSlug } from "./characters";

export type Mission = {
  id: string;
  title: string;
  hint: string;
  to: string;
  host: CharacterSlug;
  stars: number;
  match: (completed: string[]) => boolean;
};

const POOL: Mission[] = [
  {
    id: "m-cuento",
    title: "Leer un cuento hasta el final",
    hint: "Pasa las viñetas. El último recuadro suma estrellas.",
    to: "/aventuras",
    host: "susu",
    stars: 4,
    match: (c) => c.some((x) => x.startsWith("story:")),
  },
  {
    id: "m-juego",
    title: "Terminar un minijuego",
    hint: "Cualquiera del patio cuenta.",
    to: "/juegos",
    host: "gadu",
    stars: 4,
    match: (c) => c.some((x) => x.startsWith("game:")),
  },
  {
    id: "m-leccion",
    title: "Responder una pregunta de Gadú",
    hint: "Al final de cada lección hay un quiz.",
    to: "/explora",
    host: "vector",
    stars: 5,
    match: (c) => c.some((x) => x.startsWith("lesson:")),
  },
  {
    id: "m-ficha",
    title: "Leer una ficha curiosa",
    hint: "Son cortas. Caben en un recreo.",
    to: "/leer",
    host: "zizu",
    stars: 3,
    match: (c) => c.some((x) => x.startsWith("read:")),
  },
  {
    id: "m-memoria",
    title: "Ganar Memoria de amigos",
    hint: "Encuentra las parejas del elenco.",
    to: "/juegos/memoria",
    host: "susu",
    stars: 6,
    match: (c) => c.includes("game:memoria"),
  },
  {
    id: "m-codigo",
    title: "Llevar a Gadú a la estrella",
    hint: "Un programa es una receta de flechas.",
    to: "/juegos/codigo",
    host: "gadu",
    stars: 6,
    match: (c) => c.includes("game:codigo"),
  },
  {
    id: "m-rio",
    title: "Visitar el cuento del río",
    hint: "Zizú ya se abrochó el chaleco.",
    to: "/aventuras/rio-triste",
    host: "zizu",
    stars: 5,
    match: (c) => c.includes("story:rio-triste"),
  },
  {
    id: "m-taller",
    title: "Dejar una mancha en el taller",
    hint: "No hay color equivocado.",
    to: "/juegos/colores",
    host: "margarel",
    stars: 4,
    match: (c) => c.includes("game:colores"),
  },
  {
    id: "m-rima",
    title: "Leer una rima en voz alta",
    hint: "Las palabras también juegan.",
    to: "/leer",
    host: "margarel",
    stars: 3,
    match: (c) => c.some((x) => x.startsWith("read:rima")),
  },
  {
    id: "m-lab",
    title: "Hacer un laboratorio en casa",
    hint: "Lee los pasos. Después, a la cocina.",
    to: "/leer",
    host: "vector",
    stars: 4,
    match: (c) => c.some((x) => x.startsWith("read:lab")),
  },
  {
    id: "m-silueta",
    title: "Adivinar una sombra",
    hint: "El patio al atardecer alarga a los amigos.",
    to: "/juegos/siluetas",
    host: "zizu",
    stars: 5,
    match: (c) => c.includes("game:siluetas"),
  },
  {
    id: "m-ciclo",
    title: "Acompañar a la gota",
    hint: "Sol, vapor, nube, lluvia.",
    to: "/juegos/ciclo",
    host: "zizu",
    stars: 5,
    match: (c) => c.includes("game:ciclo"),
  },
  {
    id: "m-contar",
    title: "Contar planetas con Vector",
    hint: "Sin prisa. Un número por cada uno.",
    to: "/juegos/contar",
    host: "vector",
    stars: 5,
    match: (c) => c.includes("game:contar"),
  },
  {
    id: "m-carta",
    title: "Guardar una carta del recreo",
    hint: "Son cortas. Caben en un bolsillo.",
    to: "/leer",
    host: "susu",
    stars: 3,
    match: (c) => c.some((x) => x.startsWith("read:carta")),
  },
];

export function missionsForToday(date = new Date()): Mission[] {
  const seed = date.getFullYear() * 1000 + date.getMonth() * 50 + date.getDate();
  const idx = seed % POOL.length;
  const picked: Mission[] = [];
  for (let i = 0; i < 3; i++) picked.push(POOL[(idx + i * 3) % POOL.length]);
  return picked;
}

export function missionDayKey(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
