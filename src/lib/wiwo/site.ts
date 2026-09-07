import { createArticleStore, createMediaStore, type WiwoSiteConfig } from "@wiwo/contract/server";
import { getSql } from "@/lib/db";
import type { Article } from "@/data/types";
import { ARTICLES, articleSlug, articleWorld } from "@/data/catalog";
import { buildFields } from "./manifest";

/**
 * Responsabilidad: decirle al contrato lo único que este sitio tiene de propio —
 * dónde guarda, qué archivo tiene, qué campos exige y cómo son sus direcciones.
 * Usado por: routes/api/wiwo/v1/, y lib/articles.ts para leer lo publicado.
 * NO hace: no implementa el protocolo, que vive en @wiwo/contract/server y es
 *   idéntico en todos los sitios. Tampoco traduce: el archivo ya está en la
 *   forma del contrato.
 *
 * Es el único archivo que hay que escribir para conectar un sitio nuevo.
 */

/** Las piezas publicadas por el orquestador. */
export const articleStore = createArticleStore(getSql);

/** Los archivos que subió el orquestador para ilustrar sus piezas. */
export const mediaStore = createMediaStore(getSql);

/** La URL pública de un archivo subido a este sitio. */
export function mediaUrlFor(id: string, origin: string): string {
  return new URL(`/api/wiwo/v1/media/${id}`, origin).toString();
}

/**
 * La dirección de una pieza dentro del sitio.
 *
 * Las seis secciones no se dibujan igual y por eso no comparten un patrón de
 * URL: un cuento y una lectura tienen página propia, una lección vive dentro de
 * la página de su mundo, y las misiones y las preguntas son una sola página con
 * todas adentro. La dirección de una pieza es, entonces, la de donde se la puede
 * LEER, que no siempre es una dirección exclusiva suya.
 *
 * Se resuelve sobre la PIEZA y no sobre su id: la sección es un campo suyo y el
 * mundo de una lección también. Deducirlo del id obligaba a que el id empezara
 * por la sección, y esa convención el orquestador no la puede cumplir —propone
 * el id a partir del título y nada más—, así que todo lo que publicaba caía en
 * el respaldo y se anunciaba con la dirección de la portada. La pieza estaba en
 * su sección y se podía leer; lo que estaba mal era la dirección que este sitio
 * decía de ella.
 *
 * El nombre corto sale de `articleSlug`, el mismo que usan las rutas para
 * BUSCAR la pieza. Al ser la misma función en los dos lados, una dirección
 * emitida acá no puede no resolver allá.
 */
function rutaDe(article: Article): string {
  const seccion = article.section?.id ?? "";
  const slug = articleSlug(article);

  // Las tres secciones con página por pieza.
  if (seccion === "aventuras" || seccion === "leer" || seccion === "padres") {
    return `/${seccion}/${slug}`;
  }

  // Una lección se dibuja dentro de su mundo y no tiene dirección propia. Sin
  // mundo declarado no hay página donde se la vea, así que se nombra el índice
  // de Explora, que es lo que con certeza existe.
  if (seccion === "explora") {
    const mundo = articleWorld(article);
    return mundo ? `/explora/${mundo}` : "/explora";
  }

  // Estas dos son una sola página con todas las piezas adentro.
  if (seccion === "misiones" || seccion === "preguntas") return `/${seccion}`;

  // Una pieza sin sección no se puede ubicar. Devolver una dirección inventada
  // daría un enlace roto al orquestador; la portada es lo único que con certeza
  // existe.
  return "/";
}

/**
 * La URL pública de una pieza en este sitio.
 *
 * El identificador llega igual porque así lo pide el contrato —a la mayoría de
 * los sitios les alcanza con él—, pero acá no se usa: todo lo que hace falta
 * está en la pieza, y el id de una publicada por el orquestador no dice nada de
 * dónde vive.
 */
export function urlFor(_id: string, origin: string, article: Article): string {
  return new URL(rutaDe(article), origin).toString();
}

/**
 * Las piezas del archivo que entran en una respuesta.
 *
 * `since` filtra por la ÚLTIMA MODIFICACIÓN, no por la publicación: es lo que
 * permite que una pieza vieja corregida hoy vuelva a viajar al orquestador.
 */
function archive(since?: string) {
  return since ? ARTICLES.filter((a) => a.updatedAt >= since) : ARTICLES;
}

/** Lo que este sitio aporta al protocolo. */
export const wiwoSite: WiwoSiteConfig = {
  store: articleStore,
  archive,
  fields: () => buildFields(),
  urlFor,
  media: { store: mediaStore, urlFor: mediaUrlFor },
};
