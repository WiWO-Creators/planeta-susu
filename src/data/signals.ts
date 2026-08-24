import type { CharacterSlug } from "./characters";

export type SignalKind = "cuento" | "juego" | "pregunta" | "mision";

export type Signal = {
  id: string;
  title: string;
  blurb: string;
  host: CharacterSlug;
  kind: SignalKind;
  href: string;
};

export const signals: Signal[] = [
  {
    id: "sig-arboles",
    title: "¿Los árboles se mandan mensajes?",
    blurb: "Zizú pone la oreja en la tierra. Vector pide una hipótesis.",
    host: "zizu",
    kind: "cuento",
    href: "/aventuras/arboles-secretos",
  },
  {
    id: "sig-algo",
    title: "El algoritmo que siempre decía sí",
    blurb: "Seguir todas las instrucciones no siempre cuida.",
    host: "vector",
    kind: "cuento",
    href: "/aventuras/algoritmo-si",
  },
  {
    id: "sig-museo",
    title: "El museo de las cosas que no existen",
    blurb: "Gadú abre un museo vacío. El año 2126 cabe en un dibujo.",
    host: "gadu",
    kind: "cuento",
    href: "/aventuras/museo-2126",
  },
  {
    id: "sig-abrazo",
    title: "El abrazo que primero pidió permiso",
    blurb: "Cuidar también es preguntar.",
    host: "zizu",
    kind: "cuento",
    href: "/aventuras/abrazo-permiso",
  },
  {
    id: "sig-memoria",
    title: "Memoria de amigos",
    blurb: "Encuentra las parejas de la tripulación.",
    host: "susu",
    kind: "juego",
    href: "/juegos/memoria",
  },
  {
    id: "sig-ciclo",
    title: "El viaje de una gota",
    blurb: "Sol, vapor, nube, lluvia.",
    host: "zizu",
    kind: "juego",
    href: "/juegos/ciclo",
  },
  {
    id: "sig-codigo",
    title: "Flechas para Gadú",
    blurb: "Un programa es una receta de pasos.",
    host: "gadu",
    kind: "juego",
    href: "/juegos/codigo",
  },
  {
    id: "sig-peces",
    title: "¿Los peces tienen sed?",
    blurb: "Una gran pregunta del Club.",
    host: "zizu",
    kind: "pregunta",
    href: "/preguntas",
  },
  {
    id: "sig-cero",
    title: "¿El cero es algo o es nada?",
    blurb: "Vector se pone los lentes.",
    host: "vector",
    kind: "pregunta",
    href: "/preguntas",
  },
  {
    id: "sig-ciudad",
    title: "Una ciudad que respira",
    blurb: "Siete minutos, papel y cuatro colores.",
    host: "susu",
    kind: "mision",
    href: "/misiones",
  },
  {
    id: "sig-sonido",
    title: "Pinta un sonido",
    blurb: "Gadú dice: un sonido no tiene forma obligatoria.",
    host: "gadu",
    kind: "mision",
    href: "/misiones",
  },
  {
    id: "sig-casco",
    title: "Casco puesto, permiso pedido",
    blurb: "Margarel sale al terreno.",
    host: "margarel",
    kind: "cuento",
    href: "/explora/orbita",
  },
];

export function randomSignal(except?: string) {
  const pool = except ? signals.filter((s) => s.id !== except) : signals;
  return pool[Math.floor(Math.random() * pool.length)]!;
}
