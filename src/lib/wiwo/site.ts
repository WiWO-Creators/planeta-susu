import { createArticleStore, createMediaStore, type WiwoSiteConfig } from "@wiwo/contract/server";
import { getSql } from "@/lib/db";
import { ARTICLES } from "@/data/catalog";
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
 * La dirección de una pieza dentro del sitio, deducida de su id.
 *
 * Las seis secciones no se dibujan igual y por eso no comparten un patrón de
 * URL: un cuento y una lectura tienen página propia, una lección vive dentro de
 * la página de su mundo, y las misiones y las preguntas son una sola página con
 * todas adentro. La dirección de una pieza es, entonces, la de donde se la puede
 * LEER, que no siempre es una dirección exclusiva suya.
 *
 * Se resuelve sobre el id y no sobre `section` porque el contrato le pasa a
 * `urlFor` el id a secas. Por eso el id de toda pieza empieza por el id de su
 * sección —y el de una lección lleva además su mundo, separado por doble guion—:
 * es lo que vuelve posible ubicarla sin tener la pieza a mano. El manifest lo
 * dice en la pista del campo `section`.
 */
function rutaDe(id: string): string {
  // Las tres secciones con página por pieza: el resto del id es el slug con el
  // que resuelve la ruta del sitio, así que no hay nada que traducir.
  for (const seccion of ["aventuras", "leer", "padres"]) {
    if (id.startsWith(`${seccion}-`)) return `/${seccion}/${id.slice(seccion.length + 1)}`;
  }

  // Una lección se dibuja dentro de su mundo y no tiene dirección propia; el
  // doble guion existe justo para poder cortar el mundo del nombre corto.
  if (id.startsWith("explora-")) {
    const [mundo] = id.slice("explora-".length).split("--");
    return mundo ? `/explora/${mundo}` : "/explora";
  }

  for (const seccion of ["misiones", "preguntas"]) {
    if (id.startsWith(`${seccion}-`)) return `/${seccion}`;
  }

  // Un id que no empieza por ninguna sección no se puede ubicar. Devolver una
  // dirección inventada daría un enlace roto al orquestador; la portada es lo
  // único que con certeza existe.
  return "/";
}

/** La URL pública de una pieza en este sitio. */
export function urlFor(id: string, origin: string): string {
  return new URL(rutaDe(id), origin).toString();
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
