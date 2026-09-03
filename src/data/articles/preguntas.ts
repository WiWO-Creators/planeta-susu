import type { Article } from "@/data/types";

/**
 * Responsabilidad: las 15 respuestas del Club de las Grandes Preguntas.
 * Usado por: data/catalog.ts, que las suma al archivo del sitio.
 * NO hace: no recibe preguntas nuevas; eso es el formulario de la pagina.
 *
 * Las preguntas no tenian id: la pagina las distinguia por su texto. El id sale
 * del texto de la pregunta para que siga siendo el mismo mientras el texto lo sea.
 */

export const PREGUNTAS: Article[] = [
  {
    id: "preguntas-los-peces-tienen-sed",
    title: "¿Los peces tienen sed?",
    summary:
      "Los peces necesitan mantener un equilibrio de agua y sales, pero no todos lo hacen igual. Los de agua salada pierden agua y muchas especies beben agua de mar. Los de agua dulce reciben agua por sus superficies y suelen beber muy poco. “Tener sed” como lo sentimos nosotras es más difícil de afirmar.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Cómo cambia este equilibrio en un pez que viaja entre río y océano?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "zizu",
    },
  },
  {
    id: "preguntas-por-que-bostezamos",
    title: "¿Por qué bostezamos?",
    summary:
      "Bostezar ocurre en muchas especies y puede relacionarse con sueño, atención y contagio social. Todavía no existe una sola explicación que resuelva todos los casos. Es un buen ejemplo de algo cotidiano que la ciencia sigue investigando.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Por qué ver o leer la palabra “bostezo” puede darte ganas de hacerlo?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "susu",
    },
  },
  {
    id: "preguntas-las-plantas-duermen",
    title: "¿Las plantas duermen?",
    summary:
      "No duermen como una persona, pero muchas cambian su actividad con ciclos de luz y oscuridad. Algunas hojas se pliegan de noche. Decir que “duermen” puede ser una metáfora, si recordamos que no tienen cerebro ni sueño humano.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 3,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué plantas de tu entorno cambian entre día y noche?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "zizu",
    },
  },
  {
    id: "preguntas-puede-llover-en-otro-planeta",
    title: "¿Puede llover en otro planeta?",
    summary:
      "Sí, si usamos “lluvia” para sustancias que caen desde una atmósfera. En otros mundos puede llover materiales distintos del agua. Algunas lluvias lejanas todavía son inferencias, no escenas filmadas.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 4,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué necesita un mundo para formar nubes?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "margarel",
    },
  },
  {
    id: "preguntas-por-que-el-cielo-no-tiene-el-mismo-color-todo-el-dia",
    title: "¿Por qué el cielo no tiene el mismo color todo el día?",
    summary:
      "La luz del Sol contiene muchos colores. Al atravesar la atmósfera se dispersa. De día destaca el azul. Al atardecer, la luz recorre más atmósfera y suelen aparecer rojos y naranjas.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 5,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿El cielo se vería igual desde un mundo con otra atmósfera?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "vector",
    },
  },
  {
    id: "preguntas-el-cero-es-algo-o-es-nada",
    title: "¿El cero es algo o es nada?",
    summary:
      "El cero puede representar que no hay objetos en un conjunto, y también es un número con propiedades importantes. Es una forma de representar una ausencia y, al mismo tiempo, una idea muy poderosa.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 6,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué cambiaría si intentaras escribir 105 sin usar cero?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "vector",
    },
  },
  {
    id: "preguntas-los-robots-sienten",
    title: "¿Los robots sienten?",
    summary:
      "Una máquina puede reconocer patrones y responder de una forma que parece emocional. Eso no demuestra una experiencia interna. Simular una emoción y sentirla no son lo mismo.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 7,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "Si una máquina parece triste, ¿por qué una persona podría sentir ganas de cuidarla?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "gadu",
    },
  },
  {
    id: "preguntas-quien-invento-las-matematicas",
    title: "¿Quién inventó las matemáticas?",
    summary:
      "No fueron inventadas por una sola persona ni en un solo lugar. Muchas culturas desarrollaron maneras de contar, medir, comerciar y observar el cielo. Las matemáticas son una creación humana colectiva.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 8,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué necesidad cotidiana pudo originar una forma de medir?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "vector",
    },
  },
  {
    id: "preguntas-por-que-olvidamos",
    title: "¿Por qué olvidamos?",
    summary:
      "La memoria no guarda una copia perfecta. El cerebro selecciona, reconstruye y conecta. Olvidar también evita que cada detalle compita todo el tiempo por nuestra atención.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 9,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué ayuda más a recordar: repetir, explicar, dibujar o relacionar una idea?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "susu",
    },
  },
  {
    id: "preguntas-puede-un-animal-entender-una-palabra",
    title: "¿Puede un animal entender una palabra?",
    summary:
      "Algunos animales pueden aprender que ciertos sonidos se relacionan con objetos o acciones. Eso no significa que comprendan el lenguaje exactamente como una persona.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 10,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Cómo demostrarías que alguien comprendió y no solo repitió?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "zizu",
    },
  },
  {
    id: "preguntas-por-que-el-mar-es-salado",
    title: "¿Por qué el mar es salado?",
    summary:
      "El agua desgasta rocas y transporta minerales hacia ríos y océanos. El agua puede evaporarse, pero muchas sales quedan. La cantidad de sal no es idéntica en todos los mares.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 11,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Por qué cerca de la desembocadura de un río el agua puede ser menos salada?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "margarel",
    },
  },
  {
    id: "preguntas-las-hormigas-tienen-una-reina-que-manda",
    title: "¿Las hormigas tienen una reina que manda?",
    summary:
      "La palabra “reina” puede confundir. En muchas especies es la hembra reproductora principal, pero no dirige cada decisión. El comportamiento de una colonia surge de señales y reglas simples entre muchas hormigas.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 12,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Cómo puede aparecer una decisión colectiva sin una jefa que dé órdenes?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "zizu",
    },
  },
  {
    id: "preguntas-se-acaba-internet-si-todos-entran-al-mismo-tiempo",
    title: "¿Se acaba internet si todos entran al mismo tiempo?",
    summary:
      "Internet no es un único objeto: es una red enorme. Mucha demanda puede volver lento un servicio. La red completa suele redirigir tráfico, pero también tiene límites físicos y energéticos.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 13,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué recorrido hace un mensaje antes de llegar a otra pantalla?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "vector",
    },
  },
  {
    id: "preguntas-una-sombra-pesa",
    title: "¿Una sombra pesa?",
    summary:
      "Una sombra no es un objeto añadido, sino una zona que recibe menos luz. No tiene masa propia como una piedra. La luz puede ejercer una presión extremadamente pequeña, pero eso es otra historia.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 14,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Puede existir una sombra sin una fuente de luz?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "vector",
    },
  },
  {
    id: "preguntas-por-que-algunas-ideas-dan-miedo-aunque-no-sean-reales",
    title: "¿Por qué algunas ideas dan miedo aunque no sean reales?",
    summary:
      "El cuerpo puede responder a una imagen o posibilidad antes de comprobar si hay un peligro. Imaginar ayuda a anticipar, pero a veces la alarma se activa con una historia. Podemos detenernos, nombrar lo que sentimos y buscar a una persona de confianza.",
    section: {
      id: "preguntas",
      label: "Club de las Grandes Preguntas",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: null,
    image: null,
    tags: [],
    featured: false,
    rank: 15,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "nueva-pregunta",
          text: "¿Qué señales te ayudan a distinguir una imaginación inquietante de un peligro presente?",
        },
      ],
    },
    seo: {
      title: null,
      description: null,
      tldr: [],
      faq: [],
    },
    extra: {
      anfitrion: "susu",
    },
  },
];
