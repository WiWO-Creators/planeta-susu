import { createServerFn } from "@tanstack/react-start";
import { ARTICLES } from "@/data/catalog";
import type { Article } from "@/data/types";
import { articleStore } from "@/lib/wiwo/site";

/**
 * Responsabilidad: dar al SITIO todas sus piezas, las del archivo del
 * repositorio y las publicadas por el orquestador.
 * Usado por: las rutas que listan o abren una pieza.
 * NO hace: no traduce —el archivo y la base guardan la misma forma— ni habla con
 *   la base (eso es lib/wiwo/site.ts).
 *
 * Existe porque `ARTICLES` es una constante del módulo y la base no: leerla es
 * asíncrono y solo puede ocurrir en el servidor. Esta función es el único punto
 * donde se juntan las dos fuentes, para que ninguna vista muestre media verdad.
 *
 * Cuando una pieza está en los dos lados gana la de la base: el archivo del
 * repositorio es lo que se publicó al principio y la base lo que se corrigió
 * después.
 */

/**
 * Une las dos fuentes SIN reordenar el archivo.
 *
 * El orden del archivo es curaduría: los cuentos se numeran 1, 2, 3… por su
 * posición en la página, la biblioteca arma sus estantes en ese orden y el álbum
 * cuenta las lecciones mundo por mundo. Reordenar por fecha cambiaría las tres
 * páginas a la vez, que es justo lo que conectar el orquestador no debe hacer:
 * con la base vacía el sitio tiene que verse exactamente igual que antes.
 *
 * Una pieza corregida desde el orquestador reemplaza a la suya EN SU LUGAR. Una
 * pieza nueva no tiene lugar en el archivo, así que va al principio, que es
 * donde cada sección pone lo más reciente.
 *
 * Ojo: no es el orden del cable. Ahí manda `rank`, porque el orquestador pide
 * por curaduría; acá manda la edición.
 */
function unir(publicadas: Article[]): Article[] {
  const publicadaPorId = new Map(publicadas.map((a) => [a.id, a]));
  const enElArchivo = ARTICLES.map((a) => publicadaPorId.get(a.id) ?? a);

  const idsDelArchivo = new Set(ARTICLES.map((a) => a.id));
  const nuevas = publicadas
    .filter((a) => !idsDelArchivo.has(a.id))
    .sort((a, b) => {
      if (a.publishedAt !== b.publishedAt) return a.publishedAt < b.publishedAt ? 1 : -1;
      return a.id.localeCompare(b.id);
    });

  return [...nuevas, ...enElArchivo];
}

/**
 * Todas las piezas del sitio, para quien ya está en el servidor.
 *
 * Es una función normal y no de servidor porque otras funciones de servidor la
 * llaman: anidar una dentro de otra la haría viajar por HTTP contra sí misma.
 */
export async function allSiteArticles(): Promise<Article[]> {
  return unir(await articleStore.read());
}

/** Todas las piezas del sitio, para las vistas. */
export const getArticles = createServerFn({ method: "GET" }).handler(allSiteArticles);
