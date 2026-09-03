import { WIWO_CONTRACT_VERSION, type WiwoField, type WiwoManifest } from "@wiwo/contract";
import { canDelete, canWrite } from "@wiwo/contract/server";
import { BRAND } from "@/data/brand";
import { KIND_LABEL, SECTIONS } from "@/data/catalog";
import { characters } from "@/data/characters";

/**
 * Responsabilidad: declarar qué es este sitio, qué campos pide para publicar y
 * qué bloques sabe dibujar.
 * Usado por: routes/api/wiwo/v1/manifest.ts y, a través de lib/wiwo/site.ts, la
 *   validación de todo lo que llega a publicarse.
 * NO hace: no serializa piezas (eso es el contrato) ni arma la respuesta HTTP.
 *
 * Es la pieza que reemplaza a la detección de plataforma: el orquestador no
 * adivina qué es Planeta Susu, pregunta y el sitio contesta.
 *
 * Las secciones, el elenco y las clases de lectura se derivan del catálogo del
 * sitio, así que sumar un mundo o un personaje no obliga a tocar este archivo.
 * Los límites son los de este sitio, medidos sobre las piezas publicadas.
 */

/** Máximos del sitio, con margen sobre lo que ya está publicado. */
const LIMITS = {
  title: 120,
  summary: 340,
  imageAlt: 220,
  /** Ninguna pieza del archivo pasa de una etiqueta, y solo una sección las muestra. */
  tags: 1,
  readingMinutes: 20,
} as const;

/** Los cinco del elenco, como los ofrece un desplegable. */
const ELENCO = characters.map((c) => ({ value: c.slug, label: c.name }));

/**
 * Campos que el sitio acepta al publicar.
 *
 * Las claves del núcleo son las del contrato (`summary`, no `bajada`); la
 * etiqueta es la que usa este sitio. Lo propio del universo —el anfitrión, el
 * mundo, la edad, los materiales— conserva su nombre y viaja en `extra`, y se
 * lee con los accesores de data/catalog.ts.
 *
 * Casi todo es opcional a propósito: las seis secciones son seis formatos
 * distintos —un cuento ilustrado y una respuesta de tres líneas comparten muy
 * poco— y exigir lo de una haría imposible publicar las otras cinco. Obligatorio
 * es solo lo que ninguna de las piezas del archivo deja vacío.
 *
 * Se exportan porque el contrato los usa dos veces: para describir el formato en
 * el manifest y para validar una pieza que llega. Si fueran dos listas, un campo
 * agregado en una rechazaría piezas que la otra anunció como válidas.
 */
export function buildFields(): WiwoField[] {
  return [
    {
      key: "title",
      label: "Título",
      type: "text",
      required: true,
      maxLength: LIMITS.title,
    },
    {
      key: "summary",
      label: "Bajada",
      type: "longtext",
      required: true,
      maxLength: LIMITS.summary,
      hint: "Una o dos frases que digan de qué trata la pieza, en la voz con la que se le habla a quien tiene siete años.",
    },
    {
      key: "section",
      label: "Sección",
      type: "enum",
      required: true,
      options: SECTIONS.map((section) => ({ value: section.id, label: section.label })),
      // La sección no solo clasifica: es la mitad de la dirección pública. El id
      // de la pieza tiene que empezar por el id de la sección, porque `urlFor`
      // recibe el id a secas y es lo único que le permite saber dónde vive.
      hint: "El id de la pieza tiene que empezar por el id de la sección: \"leer-mi-nota\" vive en /leer/mi-nota. Una lección de Explora lleva además su mundo, con doble guion: \"explora-ciencia--cielo-azul\".",
    },
    {
      key: "kicker",
      label: "Antetítulo",
      type: "text",
      required: false,
      hint: 'La línea corta que anuncia la pieza antes del título: "Ficha curiosa", "Carta del recreo".',
    },
    {
      key: "anfitrion",
      label: "Quién acompaña",
      type: "enum",
      required: false,
      options: ELENCO,
      // El sitio no firma piezas —ninguna de las 102 tiene autor— porque quien
      // acompaña no es una redacción sino alguien del elenco, y de ahí salen el
      // retrato y el color con que se dibuja la pieza.
      hint: "Quien presenta la pieza y le pone su retrato y su color. El elenco es cerrado; si falta, acompaña Susu.",
    },
    {
      key: "acompanantes",
      label: "Quiénes más aparecen",
      type: "list",
      required: false,
      itemCount: { max: 4 },
      hint: `Slugs del elenco, sin repetir al anfitrión: ${characters.map((c) => c.slug).join(", ")}.`,
    },
    {
      key: "image",
      label: "Ilustración de apertura",
      type: "image",
      required: false,
      // La pista NO es solo para quien escribe: es el estilo con el que el
      // orquestador GENERA y ADAPTA la imagen de este sitio. Está escrita
      // mirando las ilustraciones de public/; cambiarla cambia cómo se ilustra
      // Planeta Susu, y no hay que tocar nada más.
      hint: "Ilustración digital 2D de dibujo animado, nunca fotografía ni render 3D. Color plano y saturado, contorno oscuro grueso y parejo en todo —figura y fondo por igual—, sombreado mínimo y sin degradados de estudio. Un solo plano, legible de un vistazo, con aire alrededor del motivo. Sin texto, letras ni números dentro de la imagen. Horizontal 16:9.",
    },
    {
      key: "imageAlt",
      label: "Texto alternativo de la ilustración",
      type: "text",
      required: false,
      maxLength: LIMITS.imageAlt,
      hint: "Obligatorio si hay ilustración: sin esto la pieza no es accesible. Describe lo que se ve, no repitas el título.",
    },
    {
      key: "readingMinutes",
      label: "Minutos",
      type: "number",
      required: false,
      hint: `Cuánto dura leerla o hacerla, entre 1 y ${LIMITS.readingMinutes}. Una misión de siete minutos dice 7.`,
    },
    {
      key: "tags",
      label: "Etiqueta",
      type: "tags",
      required: false,
      itemCount: { max: LIMITS.tags },
      hint: "Una sola, y solo la Sala de Grandes la muestra, en la línea que precede al título.",
    },
    {
      key: "tema",
      label: "Tema",
      type: "text",
      required: false,
      // Una lección de Explora se dibuja DENTRO de su mundo y el mundo se
      // reconoce por este campo: escribir otra cosa la deja fuera de la página
      // aunque la pieza exista. En un cuento el tema es una etiqueta suelta que
      // nadie filtra, así que no puede ser un enum.
      hint: "En una lección de Explora, el slug del mundo donde se dibuja, el mismo que va en el id: ecologia, ciencia, matematicas, programacion, arte, valores, futuro, orbita. En un cuento, el tema tal como se lee.",
    },
    {
      key: "leccion",
      label: "Nombre corto de la lección",
      type: "text",
      required: false,
      hint: "Solo en Explora: cómo se llama la lección dentro de su mundo. Es lo que cuenta el álbum para dar la estrella.",
    },
    {
      key: "tipoLectura",
      label: "Estante de la biblioteca",
      type: "enum",
      required: false,
      options: Object.entries(KIND_LABEL).map(([value, label]) => ({ value, label })),
      hint: "Solo en Leer: en cuál de los cuatro estantes aparece la pieza.",
    },
    {
      key: "colorToken",
      label: "Color",
      type: "enum",
      required: false,
      options: ELENCO,
      hint: "Con qué color del universo se pinta la pieza. Se nombra por el personaje dueño de ese color.",
    },
    {
      key: "edad",
      label: "Edades",
      type: "text",
      required: false,
      hint: 'Un rango escrito con guion largo, como se lee en la tarjeta: "5–9".',
    },
    {
      key: "materiales",
      label: "Materiales",
      type: "text",
      required: false,
      hint: "Solo en Misiones: qué hace falta para hacerla. Lo que ya hay en casa, a costo cero o casi cero.",
    },
    {
      key: "pregunta",
      label: "Pregunta que la abre",
      type: "text",
      required: false,
      hint: "Solo en Misiones: la pregunta con la que arranca, antes del primer paso.",
    },
    {
      key: "body",
      label: "Cuerpo",
      type: "blocks",
      required: true,
      hint: "Bloques, no Markdown, y cada sección usa los suyos: viñetas en un cuento, pasos en una misión, explicación y laboratorio en una lección.",
    },
  ];
}

/**
 * Arma el manifest del sitio.
 *
 * @param origin Origen público por el que entró la petición, para que las URLs
 *   que se emiten queden en ese mismo dominio.
 * @param articleCount Cuántas piezas va a entregar el sitio.
 * @param acceptsMedia Si el sitio puede recibir imágenes: hace falta que tenga
 *   dónde guardarlas y clave de escritura, porque subir un archivo es escribir.
 */
export function buildManifest(
  origin: string,
  articleCount: number,
  acceptsMedia: boolean,
): WiwoManifest {
  return {
    contract: WIWO_CONTRACT_VERSION,
    site: {
      name: BRAND.name,
      url: origin,
      language: "es",
      // Lo leen niños, y el orquestador tiene que saberlo para mirar aparte lo
      // que se publica acá. Lo declara el sitio y no el orquestador porque es
      // una propiedad de este sitio: quien lo lea después no tiene que
      // averiguarlo por el nombre del dominio.
      audience: "kids",
    },
    capabilities: {
      articles: true,
      read: true,
      write: canWrite(),
      // Llega resuelto desde la ruta y no se calcula acá: quien lo sabe es
      // lib/wiwo/site.ts, que ya importa este archivo. Preguntárselo desde acá
      // cerraría un círculo entre los dos.
      media: acceptsMedia,
      // Borrar es escribir, así que depende de la misma clave. Se anuncia
      // aparte porque el orquestador no puede deducirlo de `write`: un sitio
      // con el paquete anterior acepta publicaciones y no entiende el borrado.
      delete: canDelete(),
    },
    format: {
      id: "planeta-susu",
      label: BRAND.name,
      fields: buildFields(),
      // El vocabulario común NO va: este sitio no dibuja párrafos, subtítulos ni
      // tablas genéricos en ninguna parte. Cada sección tiene sus bloques y una
      // página que solo sabe recorrer los suyos, así que anunciar `paragraph` o
      // `table` dejaría al orquestador escribiendo algo que saldría en blanco.
      blockTypes: [
        {
          type: "vineta",
          label: "Viñeta",
          hint: "Cuentos. Una página del cuento: `text`, su ilustración en `art`, `bg` con el color del fondo, y `who` con quien habla o `narrator: true` si habla la voz que cuenta.",
        },
        {
          type: "parrafo",
          label: "Párrafo",
          hint: "Leer. Un párrafo de la lectura, con `title` cuando abre un tramo.",
        },
        {
          type: "para-casa",
          label: "Para casa",
          hint: "Leer. Cierra la lectura con algo para hacer o mirar después, en una frase.",
        },
        {
          type: "say",
          label: "Alguien dice",
          hint: "Explora. Abre la lección: `who` del elenco y `text` con lo que dice, en bocadillo.",
        },
        {
          type: "text",
          label: "Explicación",
          hint: "Explora. El bloque que explica, con `title` y `body`.",
        },
        {
          type: "list",
          label: "Lista",
          hint: "Explora. `title` e `items`, para lo que se enumera sin orden obligatorio.",
        },
        {
          type: "try",
          label: "Laboratorio",
          hint: "Explora. Un experimento en casa: `title` y `steps`, en el orden en que se hacen.",
        },
        {
          type: "callout",
          label: "Aviso",
          hint: "Explora. `text` y `tone`: tip para un truco, wow para un dato que sorprende, care para lo que pide cuidado o compañía adulta.",
        },
        {
          type: "seccion",
          label: "Apartado",
          hint: "Sala de Grandes. Un apartado de la guía: `title` y `parrafos`.",
        },
        {
          type: "prueben",
          label: "Prueben esto",
          hint: "Sala de Grandes. Cierra la guía con lo que se puede probar hoy: `title` y `pasos`.",
        },
        {
          type: "paso",
          label: "Paso",
          hint: "Misiones. Un paso de la misión, en `text`. Se dibujan en el orden en que llegan.",
        },
        {
          type: "idea",
          label: "Idea de fondo",
          hint: "Misiones. Qué se aprende haciéndola, dicho para el adulto que acompaña.",
        },
        {
          type: "nueva-pregunta",
          label: "Nueva pregunta",
          hint: "Club de las Grandes Preguntas. La respuesta termina abriendo otra pregunta: eso es este bloque.",
        },
      ],
    },
    counts: { articles: articleCount },
    generatedAt: new Date().toISOString(),
  };
}
