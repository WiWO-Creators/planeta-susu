# Planeta Susu

Sitio para peques y grandes: historias, minijuegos, ciencia, arte y cuidado.

Stack: TanStack Start + Vite + Nitro (preset Vercel) + Tailwind v4.

## Local

```bash
npm ci
npm run dev
```

Abre `http://localhost:8087`.

## Subir a Vercel

1. Entra a [vercel.com/new](https://vercel.com/new).
2. Importa este repo de GitHub.
3. Framework: **Other** (ya viene en `vercel.json`).
4. Build command: `npm run build`.
5. Node: **22**.
6. Variable de entorno (Production + Preview):

   `VITE_AUTH_ENABLED` = `false`

7. Deploy. Cada push a `main` publica solo.

No hace falta base de datos ni login.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Preview local |
| `npm run build` | Build de producción |
| `npm run typecheck` | TypeScript |

## Notas

- Auth y Postgres están apagados a propósito.
- El álbum y las estrellas se guardan en el dispositivo.

## Qué se publica

El contenido vive en `src/data/articles/` en la forma del contrato `@wiwo/contract`
(`WiwoSiteArticle`), y `src/data/catalog.ts` lo junta en `ARTICLES` y da los accesores
para leer lo propio del universo, que viaja en `extra`.

Son 102 piezas en seis secciones, y la sección **es** la clase de pieza:

| Sección     | Qué es                       | Cuántas |
| ----------- | ---------------------------- | ------- |
| `aventuras` | Cuentos por viñetas          | 18      |
| `leer`      | Lecturas de la biblioteca    | 34      |
| `explora`   | Lecciones de los ocho mundos | 16      |
| `padres`    | Guías de la Sala de Grandes  | 8       |
| `misiones`  | Misiones de 7 minutos        | 11      |
| `preguntas` | Respuestas del Club          | 15      |

El id de una pieza lleva su sección adelante (`leer-ficha-gota`) porque es lo único
que permite armar su URL pública sabiendo solo el id, que es todo lo que el contrato
le pasa a `urlFor`. Las direcciones del sitio no la llevan: `/leer/ficha-gota`.

### Lo que NO se publica

Sigue siendo catálogo del sitio, con tipo propio, y el orquestador no lo toca:

- **Personajes** (`src/data/characters.ts`): el elenco es cerrado. Cada uno tiene
  retrato, color en los tokens de Tailwind y presencia en el store de progreso; un
  personaje llegado de afuera dejaría `characterMap[slug]` en `undefined`.
- **Juegos** (`src/data/games.ts`): cada id se resuelve a un componente React por un
  `switch` literal. Un juego publicado desde afuera abriría una tarjeta vacía.
- **Misiones diarias** (`src/data/missions.ts`): llevan una función `match` que mira
  el progreso. Una función no se serializa, así que no cabe en el contrato.
- **Stickers, rangos y territorios**: son las reglas del álbum y el mapa del sitio,
  no piezas que alguien lea. Publicar uno no agregaría una página.
- **Los mundos de Explora** (`src/data/topics.ts`): un mundo es el escenario que
  agrupa lecciones, con su anfitrión y su color. Lo publicable es la lección.

## wiwo.doom

El sitio habla el contrato `@wiwo/contract`, así que el orquestador puede leer su
archivo y publicarle piezas. Son cuatro rutas bajo `/api/wiwo/v1/`: `manifest`,
`articles`, `media` y `media/:id`. El protocolo entero vive en el paquete; lo único
propio de este sitio es `src/lib/wiwo/` —qué campos exige, qué bloques dibuja y cómo
son sus direcciones— y `src/lib/articles.ts`, que junta el archivo del repositorio
con lo publicado para las vistas.

Las piezas ya se guardan **en la forma del contrato** (`WiwoSiteArticle`): lo que el
sitio muestra y lo que le entrega al orquestador son el mismo dato, sin adaptador en
el medio. Lo propio del universo —anfitrión, acompañantes, mundo, estante, edad,
materiales, color— viaja en `extra` y se lee con los accesores de `data/catalog.ts`.

`urlFor` no reparte la misma forma de URL para todas: la dirección de una pieza es la
de donde se la puede **leer**, y eso depende de la sección. Un cuento, una lectura y
una guía tienen página propia (`/aventuras/rio-triste`); una lección se dibuja dentro
de su mundo (`/explora/ecologia`) y las misiones y las preguntas son una sola página
con todas adentro (`/misiones`, `/preguntas`). Todas se resuelven sobre el id, que es
lo único que el contrato le pasa a `urlFor`, y por eso el id empieza siempre por el id
de su sección.

Para publicar desde doom hacen falta dos cosas:

1. `WIWO_WRITE_TOKEN` en el entorno del sitio, y la misma clave cargada en doom en la
   página conectada. Sin ella el manifest anuncia `write: false` y el orquestador no
   ofrece este destino.
2. `DATABASE_URL`. Sin base, lo publicado y las ilustraciones subidas viven en una
   PGLite **en memoria** y se pierden en cada despliegue y en cada reinicio. Las
   migraciones `migrations/0003_wiwo_articles.sql` y `0004_wiwo_media.sql` se aplican
   solas en el `build`.

### Qué quedó fuera del contrato

No es lo mismo que [lo que no se publica](#lo-que-no-se-publica): esto sí está en las
piezas, pero no viaja como campo del manifest.

- **El quiz de las lecciones** (`extra.quiz`). El contrato tipa los campos como texto,
  número, lista, pares, etiquetas, enum, imagen o bloques, y un quiz es un objeto:
  enunciado más opciones con su marca de acierto y su explicación. Declararlo como
  pares perdería el acierto y el enunciado, así que no se declara. Las 16 lecciones del
  archivo lo conservan; una lección publicada desde doom sale sin juego, y la vista lo
  omite en vez de dibujar botones vacíos.
- **La capa SEO** (`seo.title`, `seo.description`, `tldr`, `faq`). El contrato la
  transporta, pero ninguna página de este sitio la lee: las 102 piezas la tienen vacía.
  Declarar campos que se tiran a la basura le haría creer al orquestador que escribir
  ahí cambia algo.
- **La firma** (`author`). Ninguna de las 102 piezas tiene autor: este sitio no firma.
  Quien acompaña es alguien del elenco y va en `extra.anfitrion`, declarado como enum
  cerrado de cinco.
- **`featured` y `rank`.** El orden de las páginas es el del archivo, no una jerarquía
  editorial calculada; `rank` solo ordena el cable.

Y hay dos cosas que el manifest declara **de menos** a propósito: `image` no es
obligatoria, porque 50 de las 102 piezas nunca tuvieron ilustración y exigirla haría
que el sitio rechazara sus propias piezas al republicarlas; y `blockTypes` no incluye
el vocabulario común del contrato (`paragraph`, `heading`, `table`…), porque acá cada
sección dibuja sus propios bloques y ninguna página sabe recorrer los genéricos.
