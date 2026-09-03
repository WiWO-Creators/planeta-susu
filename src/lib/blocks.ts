import type { WiwoBlock } from "@wiwo/contract";
import { isCharacterSlug, type CharacterSlug } from "@/data/characters";

/**
 * Responsabilidad: leer un campo de un bloque del cuerpo sin que un bloque mal
 * escrito rompa la página.
 * Usado por: las vistas que dibujan cuerpos (cuentos, lecturas, lecciones,
 *   guías y misiones).
 * NO hace: no dibuja ni decide qué bloques existen; eso es de cada vista, y la
 *   lista de los que este sitio sabe dibujar se declara en el manifest.
 *
 * El contrato deja el tipo de bloque ABIERTO a propósito: `WiwoBlock` es
 * `{ type: string }` más campos JSON cualesquiera. Eso permite que este sitio
 * tenga viñetas y laboratorios sin tocar el paquete, pero también que llegue un
 * bloque con un campo faltante desde el orquestador. Estas funciones son puras
 * y siempre devuelven algo dibujable.
 */

/** El texto de un campo del bloque; cadena vacía si no es texto. */
export function blockText(block: WiwoBlock, clave = "text"): string {
  const valor = block[clave];
  return typeof valor === "string" ? valor : "";
}

/** La lista de textos de un campo del bloque; vacía si no es una lista. */
export function blockList(block: WiwoBlock, clave: string): string[] {
  const valor = block[clave];
  if (!Array.isArray(valor)) return [];
  return valor.filter((v): v is string => typeof v === "string");
}

/** Si el bloque tiene marcada una bandera. */
export function blockFlag(block: WiwoBlock, clave: string): boolean {
  return block[clave] === true;
}

/** Quién habla en el bloque, o nada si no habla nadie del elenco. */
export function blockHost(block: WiwoBlock, clave = "who"): CharacterSlug | null {
  const valor = block[clave];
  return isCharacterSlug(valor) ? valor : null;
}

/** Los bloques de una clase, en el orden del cuerpo. */
export function blocksOfType(blocks: WiwoBlock[], type: string): WiwoBlock[] {
  return blocks.filter((b) => b.type === type);
}

/** El primer bloque de una clase, o nada si el cuerpo no lo trae. */
export function firstBlockOfType(blocks: WiwoBlock[], type: string): WiwoBlock | undefined {
  return blocks.find((b) => b.type === type);
}
