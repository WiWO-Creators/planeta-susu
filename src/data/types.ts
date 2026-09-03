import type { WiwoSiteArticle } from "@wiwo/contract";

/**
 * Responsabilidad: los tipos de lo que Planeta Susu publica.
 * Usado por: data/articles/, data/catalog.ts y todo lo que dibuja una pieza.
 * NO hace: no contiene datos ni lógica.
 *
 * Una pieza es el tipo del CONTRATO, no uno propio. Antes cada colección tenía
 * su modelo —Story, Reading, Lesson, Guide, PackMission, ClubQ— y habría hecho
 * falta traducir de ida y de vuelta para hablar con el orquestador; cada campo
 * que ese adaptador no cubriera se perdería en silencio al editar una pieza ya
 * publicada. Lo propio del universo —anfitrión, minutos, tema, edad, quiz,
 * color— vive en `extra`, y se lee con los accesores de data/catalog.ts.
 *
 * Lo que NO se publica sigue siendo tipo propio de este sitio: el elenco, los
 * juegos, las misiones diarias, los stickers, los rangos y los territorios. El
 * contrato es para lo que se publica, no para el catálogo.
 */

/** Una pieza del sitio, en la forma en que también viaja al orquestador. */
export type Article = WiwoSiteArticle;

/** Qué clase de pieza es. Es el `section` del contrato, no un campo aparte. */
export type SectionId =
  | "aventuras"
  | "leer"
  | "explora"
  | "padres"
  | "misiones"
  | "preguntas"
  | "interactivo";

/** Qué clase de lectura es una pieza de la biblioteca. */
export type ReadingKind = "ficha" | "rima" | "lab" | "carta";

/**
 * La pregunta con la que cierra una lección.
 *
 * No es cuerpo: es un juego con estado —se elige una opción y el acierto suma
 * estrellas—, así que viaja en `extra` y no entre los bloques.
 */
export type Quiz = {
  question: string;
  options: { text: string; ok: boolean; why: string }[];
};
