import type { WiwoBlock } from "@wiwo/contract";
import type { CharacterSlug } from "./characters";
import { isCharacterSlug } from "./characters";
import type { Article, Quiz, ReadingKind, SectionId } from "./types";
import { AVENTURAS } from "./articles/aventuras";
import { LECTURAS } from "./articles/leer";
import { LECCIONES } from "./articles/explora";
import { GUIAS } from "./articles/padres";
import { MISIONES } from "./articles/misiones";
import { PREGUNTAS } from "./articles/preguntas";

/**
 * Responsabilidad: el archivo editorial del sitio y cómo se lee cada campo
 * propio que el contrato no conoce.
 * Usado por: las vistas que dibujan piezas y, más adelante, lib/wiwo/site.ts.
 * NO hace: no habla con la base ni con el orquestador.
 *
 * `extra` no está tipado —el contrato lo transporta sin entenderlo—, así que
 * leerlo a mano deja `undefined` colándose hasta la pantalla. Cada campo propio
 * tiene acá su accesor, que devuelve cadena vacía o lista vacía cuando falta.
 * Ninguna vista debe leer `extra` por su cuenta.
 */

/** Las seis clases de pieza publicable, en el orden en que abren el archivo. */
export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "aventuras", label: "Cuentos" },
  { id: "leer", label: "Leer" },
  { id: "explora", label: "Explora" },
  { id: "padres", label: "Sala de Grandes" },
  { id: "misiones", label: "Misiones de 7 minutos" },
  { id: "preguntas", label: "Club de las Grandes Preguntas" },
];

/**
 * Todo lo que este sitio publica, en orden de curaduría.
 *
 * El orden es el de las colecciones tal como estaban escritas: es lo que ven
 * las páginas de cada sección, y por eso no se ordena por fecha.
 */
export const ARTICLES: Article[] = [
  ...AVENTURAS,
  ...LECTURAS,
  ...LECCIONES,
  ...GUIAS,
  ...MISIONES,
  ...PREGUNTAS,
];

/** Cómo se anuncia cada clase de lectura en la biblioteca. */
export const KIND_LABEL: Record<ReadingKind, string> = {
  ficha: "Fichas curiosas",
  rima: "Rimas",
  lab: "Laboratorios",
  carta: "Cartas del recreo",
};

/** El orden en que la biblioteca muestra sus estantes. */
export const KIND_ORDER: ReadingKind[] = ["carta", "ficha", "rima", "lab"];

function propio(article: Article, clave: string): string {
  const valor = article.extra?.[clave];
  return typeof valor === "string" ? valor : "";
}

function propioLista(article: Article, clave: string): string[] {
  const valor = article.extra?.[clave];
  if (!Array.isArray(valor)) return [];
  return valor.filter((v): v is string => typeof v === "string");
}

/** Las piezas de una sección, sin alterar el orden del archivo. */
export function articlesOfSection(list: Article[], id: SectionId): Article[] {
  return list.filter((a) => a.section?.id === id);
}

/**
 * El nombre corto de una pieza dentro de su sección: lo que viaja en la URL.
 *
 * El id lleva la sección adelante (`leer-ficha-gota`) porque es lo único que
 * permite armar la URL pública sabiendo solo el id, que es todo lo que el
 * contrato le pasa a `urlFor`. Las direcciones del sitio no la llevan, así que
 * acá se le saca.
 */
export function articleSlug(article: Article): string {
  const seccion = article.section?.id ?? "";
  const prefijo = `${seccion}-`;
  return article.id.startsWith(prefijo) ? article.id.slice(prefijo.length) : article.id;
}

/** La pieza que una dirección del sitio nombra, o nada si no existe. */
export function getArticleBySlug(
  list: Article[],
  seccion: SectionId,
  slug: string,
): Article | undefined {
  return articlesOfSection(list, seccion).find((a) => articleSlug(a) === slug);
}

/** La imagen de apertura; vacía cuando la pieza no tiene una. */
export function articleImage(article: Article) {
  return article.image ?? { url: "", alt: "" };
}

/** El cuerpo, siempre como bloques. */
export function articleBlocks(article: Article): WiwoBlock[] {
  return article.body.format === "blocks" ? article.body.blocks : [];
}

/**
 * Quién de la tripulación acompaña la pieza.
 *
 * Devuelve Susu —la capitana— y no cadena vacía cuando falta o no es del
 * elenco: `characterMap[""]` sería `undefined` y la página se caería al pedirle
 * el retrato. El elenco es cerrado y el manifest lo declara como enum.
 */
export function articleHost(article: Article): CharacterSlug {
  const valor = article.extra?.anfitrion;
  return isCharacterSlug(valor) ? valor : "susu";
}

/** Quiénes más aparecen en la pieza, después del anfitrión. */
export function articleCompanions(article: Article): CharacterSlug[] {
  return propioLista(article, "acompanantes").filter(isCharacterSlug);
}

/** Cuánto dura la pieza. Cero cuando el sitio no lo calcula. */
export function articleMinutes(article: Article): number {
  return article.readingMinutes ?? 0;
}

/** El mundo de Explora al que pertenece una lección. */
export function articleWorld(article: Article): string {
  return propio(article, "tema");
}

/** El nombre corto de la lección dentro de su mundo. */
export function articleLesson(article: Article): string {
  return propio(article, "leccion");
}

/** Para qué edades está pensada la pieza. */
export function articleAge(article: Article): string {
  return propio(article, "edad");
}

/** Qué hace falta para hacer una misión. */
export function articleMaterials(article: Article): string {
  return propio(article, "materiales");
}

/** La pregunta que abre una misión. */
export function articleQuestion(article: Article): string {
  return propio(article, "pregunta");
}

/** La línea que presenta la pieza antes del título. */
export function articleKicker(article: Article): string {
  return propio(article, "kicker");
}

/** Qué clase de lectura es una pieza de la biblioteca. */
export function articleReadingKind(article: Article): ReadingKind {
  const valor = propio(article, "tipoLectura");
  return valor in KIND_LABEL ? (valor as ReadingKind) : "ficha";
}

/** El color del universo con el que se pinta la pieza. */
export function articleColorToken(article: Article): string {
  return propio(article, "colorToken");
}

/**
 * La pregunta con la que cierra una lección, o nada si no la trae.
 *
 * Se comprueba la forma entera —enunciado y opciones— porque una pieza
 * publicada desde el orquestador puede llegar sin quiz o con un quiz a medio
 * escribir, y la vista prefiere no dibujarlo a dibujar botones vacíos.
 */
export function articleQuiz(article: Article): Quiz | null {
  const valor = article.extra?.quiz;
  if (typeof valor !== "object" || valor === null || Array.isArray(valor)) return null;
  const question = valor.question;
  const options = valor.options;
  if (typeof question !== "string" || !Array.isArray(options)) return null;

  const opciones = options.flatMap((opcion) => {
    if (typeof opcion !== "object" || opcion === null || Array.isArray(opcion)) return [];
    const { text, ok, why } = opcion;
    if (typeof text !== "string" || typeof ok !== "boolean" || typeof why !== "string") return [];
    return [{ text, ok, why }];
  });

  return opciones.length ? { question, options: opciones } : null;
}
