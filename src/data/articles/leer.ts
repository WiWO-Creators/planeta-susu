import type { Article } from "@/data/types";

/**
 * Responsabilidad: las 34 lecturas de la biblioteca, en la forma del contrato.
 * Usado por: data/catalog.ts, que las suma al archivo del sitio.
 * NO hace: no agrupa por tipo de lectura; eso lo hace la vista con KIND_ORDER.
 *
 * El «Para casa» es un bloque del cuerpo y no un campo aparte: es texto de la
 * lectura, y asi el orquestador puede escribirlo como escribe un parrafo.
 */

export const LECTURAS: Article[] = [
  {
    id: "leer-ficha-gota",
    title: "Una gota es una viajera",
    summary:
      "El agua de tu vaso puede haber sido nieve, nube, lágrima de dinosaurio o charco de ayer. No hay agua nueva: hay agua que da vueltas.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/zizu-rio.jpg",
      alt: "Una gota es una viajera",
    },
    tags: [],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "El agua de tu vaso puede haber sido nieve, nube, lágrima de dinosaurio o charco de ayer. No hay agua nueva: hay agua que da vueltas.",
        },
        {
          type: "parrafo",
          title: "Dato para guardar",
          text: "Una nube no pesa «nada»: un cúmulo mediano puede pesar como muchos elefantes. Flota porque está hecha de gotitas muy, muy chiquitas.",
        },
        {
          type: "para-casa",
          text: "Deja un vaso con agua marcada (una gota de colorante) al sol. Mira cómo baja el nivel. ¿A dónde se fue la viajera?",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-cielo",
    title: "El aire elige el azul",
    summary:
      "La luz del sol viaja con un equipo de colores. Al chocar con el aire, el azul se dispersa para todos lados. Por eso el cielo nos saluda en azul.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/gadu-estrellas.jpg",
      alt: "El aire elige el azul",
    },
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "La luz del sol viaja con un equipo de colores. Al chocar con el aire, el azul se dispersa para todos lados. Por eso el cielo nos saluda en azul.",
        },
        {
          type: "parrafo",
          title: "Y al atardecer",
          text: "Cuando el sol se acuesta, la luz recorre más aire. El azul se gasta en el camino y quedan el naranja y el rojo.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-diez",
    title: "El 10 es un amigo",
    summary:
      "7+3, 6+4, 8+2, 9+1, 5+5. Son parejas que viven en el 10. Si las reconoces, sumar se vuelve un saludo, no un susto.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/vector-lab.jpg",
      alt: "El 10 es un amigo",
    },
    tags: [],
    featured: false,
    rank: 3,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "7+3, 6+4, 8+2, 9+1, 5+5. Son parejas que viven en el 10. Si las reconoces, sumar se vuelve un saludo, no un susto.",
        },
        {
          type: "parrafo",
          title: "Truco",
          text: "Los dedos son un ábaco que no se pierde. Úsalos sin vergüenza: Vector también.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-bug",
    title: "Un bug es una pista",
    summary:
      "«Bug» significa bicho. En programación es un error en los pasos. No es una sentencia: es información. Se mira con lupa y se edita una flecha.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/vector-lab.jpg",
      alt: "Un bug es una pista",
    },
    tags: [],
    featured: false,
    rank: 4,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "«Bug» significa bicho. En programación es un error en los pasos. No es una sentencia: es información. Se mira con lupa y se edita una flecha.",
        },
        {
          type: "para-casa",
          text: "Escribe los pasos para hacer un té. Pruébalos al revés. Ríanse. Reescriban.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-lombriz",
    title: "Las lombrices tienen oficio",
    summary:
      "Una lombriz come tierra y deja un abono que las plantas adoran. No es basura: es un laboratorio subterráneo. Zizú dice que contestan lento, pero contestan.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/zizu-patio.jpg",
      alt: "Las lombrices tienen oficio",
    },
    tags: [],
    featured: false,
    rank: 5,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Una lombriz come tierra y deja un abono que las plantas adoran. No es basura: es un laboratorio subterráneo. Zizú dice que contestan lento, pero contestan.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-telar",
    title: "Las rayas recuerdan caminos",
    summary:
      "Un telar es un algoritmo suave: un gesto que se repite y aparece un dibujo. En muchos pueblos de los Andes, los textiles guardan historias que no caben en un cuaderno.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/margarel-taller.jpg",
      alt: "Las rayas recuerdan caminos",
    },
    tags: [],
    featured: false,
    rank: 6,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Un telar es un algoritmo suave: un gesto que se repite y aparece un dibujo. En muchos pueblos de los Andes, los textiles guardan historias que no caben en un cuaderno.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-corazon",
    title: "Las emociones son mensajes",
    summary:
      "El enojo dice «hay un límite». El miedo dice «hay algo que cuidar». La tristeza dice «algo importaba». Nombrarlas no las apaga: las ilumina.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/susu-lee.jpg",
      alt: "Las emociones son mensajes",
    },
    tags: [],
    featured: false,
    rank: 7,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "El enojo dice «hay un límite». El miedo dice «hay algo que cuidar». La tristeza dice «algo importaba». Nombrarlas no las apaga: las ilumina.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-robot",
    title: "Un robot hereda nuestras reglas",
    summary:
      "Una máquina no elige sola qué está bien. Hace lo que las personas escribieron. Por eso, antes de inventar un robot, se escriben tres reglas que nunca debe romper.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/gadu-juega.jpg",
      alt: "Un robot hereda nuestras reglas",
    },
    tags: [],
    featured: false,
    rank: 8,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Una máquina no elige sola qué está bien. Hace lo que las personas escribieron. Por eso, antes de inventar un robot, se escriben tres reglas que nunca debe romper.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-rima-gota",
    title: "Rima de la gota",
    summary:
      "Sube la gota, baja la gota,\nse esconde en la raíz y en la bota.\nSi el grifo canta de más,\nla gota se cansa y se va.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/zizu-rio.jpg",
      alt: "Rima de la gota",
    },
    tags: [],
    featured: false,
    rank: 9,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Sube la gota, baja la gota,\nse esconde en la raíz y en la bota.\nSi el grifo canta de más,\nla gota se cansa y se va.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-rima-gadu",
    title: "La cola de Gadú",
    summary:
      "Violeta, naranja, violeta, naranja:\nla cola de Gadú nunca se cansa.\nSi adivinas el color que sigue,\nuna estrella en el cielo te sigue.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/gadu-estrellas.jpg",
      alt: "La cola de Gadú",
    },
    tags: [],
    featured: false,
    rank: 10,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Violeta, naranja, violeta, naranja:\nla cola de Gadú nunca se cansa.\nSi adivinas el color que sigue,\nuna estrella en el cielo te sigue.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-rima-asiento",
    title: "Hay lugar",
    summary:
      "Si el recreo se queda chico,\nse inventa una regla y un asiento.\nDiferente no es un lío:\ndiferente es un cuento.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/susu-lee.jpg",
      alt: "Hay lugar",
    },
    tags: [],
    featured: false,
    rank: 11,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Si el recreo se queda chico,\nse inventa una regla y un asiento.\nDiferente no es un lío:\ndiferente es un cuento.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-rima-mancha",
    title: "Mancha valiente",
    summary:
      "Rosa, verde, un poco de sol.\nNo era un perro: era un martes, un gol.\nSi alguien corrige tu hoja al pasar,\ninvítalo a pintar en vez de borrar.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/margarel-taller.jpg",
      alt: "Mancha valiente",
    },
    tags: [],
    featured: false,
    rank: 12,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Rosa, verde, un poco de sol.\nNo era un perro: era un martes, un gol.\nSi alguien corrige tu hoja al pasar,\ninvítalo a pintar en vez de borrar.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-rima-vector",
    title: "Aún no lo sé",
    summary:
      "«Aún no lo sé» no es un fallo:\nes el principio de un hallazgo.\nSe anota, se prueba, se ríe,\ny el error se vuelve un aliado.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/vector-lab.jpg",
      alt: "Aún no lo sé",
    },
    tags: [],
    featured: false,
    rank: 13,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "«Aún no lo sé» no es un fallo:\nes el principio de un hallazgo.\nSe anota, se prueba, se ríe,\ny el error se vuelve un aliado.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-lab-nube",
    title: "La nube en un vaso",
    summary:
      "Un vaso con agua caliente (pide ayuda). Un plato arriba. Cubitos de hielo sobre el plato. En unos minutos aparece una nubecita. Eso también pasa en el cielo.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 10,
    image: {
      url: "/scenes/zizu-patio.jpg",
      alt: "La nube en un vaso",
    },
    tags: [],
    featured: false,
    rank: 14,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Un vaso con agua caliente (pide ayuda). Un plato arriba. Cubitos de hielo sobre el plato. En unos minutos aparece una nubecita. Eso también pasa en el cielo.",
        },
        {
          type: "parrafo",
          title: "Qué observar",
          text: "El vapor sube. El frío lo junta. Gota a gota, una nube de cocina.",
        },
        {
          type: "para-casa",
          text: "Dibuja el viaje: vaso → nube → gota → vaso. Pégalo en la heladera.",
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
      tipoLectura: "lab",
      kicker: "Laboratorio en casa",
    },
  },
  {
    id: "leer-lab-semilla",
    title: "Una semilla con nombre",
    summary:
      "Un vaso, algodón húmedo, una semilla de lenteja o poroto. Ponle nombre. Mírala tres días. Las raíces buscan abajo; el tallo, la luz.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 15,
    image: {
      url: "/scenes/zizu-rio.jpg",
      alt: "Una semilla con nombre",
    },
    tags: [],
    featured: false,
    rank: 15,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Un vaso, algodón húmedo, una semilla de lenteja o poroto. Ponle nombre. Mírala tres días. Las raíces buscan abajo; el tallo, la luz.",
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
      tipoLectura: "lab",
      kicker: "Laboratorio en casa",
    },
  },
  {
    id: "leer-lab-imanes",
    title: "Cacería de imanes",
    summary:
      "Si hay un imán en casa (de la heladera sirve), recorre la cocina: ¿qué se pega y qué no? El metal no es todo igual. Hagan una tabla: pega / no pega.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 10,
    image: {
      url: "/scenes/vector-lab.jpg",
      alt: "Cacería de imanes",
    },
    tags: [],
    featured: false,
    rank: 16,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Si hay un imán en casa (de la heladera sirve), recorre la cocina: ¿qué se pega y qué no? El metal no es todo igual. Hagan una tabla: pega / no pega.",
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
      tipoLectura: "lab",
      kicker: "Laboratorio en casa",
    },
  },
  {
    id: "leer-lab-colores",
    title: "El arcoíris del filtro",
    summary:
      "Filtro de café o papel, puntos de marcador cerca del borde, un dedo de agua en un plato. El papel bebe. Algunos colores viajan más lejos. Eso se llama cromatografía: un desfile de tintas.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 12,
    image: {
      url: "/scenes/margarel-taller.jpg",
      alt: "El arcoíris del filtro",
    },
    tags: [],
    featured: false,
    rank: 17,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Filtro de café o papel, puntos de marcador cerca del borde, un dedo de agua en un plato. El papel bebe. Algunos colores viajan más lejos. Eso se llama cromatografía: un desfile de tintas.",
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
      tipoLectura: "lab",
      kicker: "Laboratorio en casa",
    },
  },
  {
    id: "leer-ficha-sombra",
    title: "Las sombras también juegan",
    summary:
      "Una sombra es un recorte de luz. Si el sol se acuesta, las sombras se alargan. Por eso a última hora el patio parece un teatro.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/patio-sombras.jpg",
      alt: "Las sombras también juegan",
    },
    tags: [],
    featured: false,
    rank: 18,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Una sombra es un recorte de luz. Si el sol se acuesta, las sombras se alargan. Por eso a última hora el patio parece un teatro.",
        },
        {
          type: "parrafo",
          title: "Prueba",
          text: "A mediodía tu sombra es chaparrita. Al atardecer, se estira. No creciste: se movió el foco.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-contar",
    title: "Contar es mirar despacio",
    summary:
      "Cuando cuentas planetas, no estás recitando: estás poniendo un nombre a cada uno. El número es un apodo de la cantidad.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/planetas-contar.jpg",
      alt: "Contar es mirar despacio",
    },
    tags: [],
    featured: false,
    rank: 19,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Cuando cuentas planetas, no estás recitando: estás poniendo un nombre a cada uno. El número es un apodo de la cantidad.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-receta",
    title: "Las recetas son programas",
    summary:
      "Si pones el pan después de morder, el sándwich no existe. El orden importa. Un algoritmo es eso: una receta que una máquina (o un amigo) puede repetir.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/cocina-lab.jpg",
      alt: "Las recetas son programas",
    },
    tags: [],
    featured: false,
    rank: 20,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Si pones el pan después de morder, el sándwich no existe. El orden importa. Un algoritmo es eso: una receta que una máquina (o un amigo) puede repetir.",
        },
        {
          type: "para-casa",
          text: "Escriban los pasos para ponerse los zapatos. Pruébenlos al revés. Ríanse. Reescriban.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-ficha-eco",
    title: "El eco también practica",
    summary:
      "Repetir una secuencia de colores o sonidos no es copiar: es entrenar la memoria musical. El patio también tiene oído.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 2,
    image: {
      url: "/scenes/jardin-rimas.jpg",
      alt: "El eco también practica",
    },
    tags: [],
    featured: false,
    rank: 21,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Repetir una secuencia de colores o sonidos no es copiar: es entrenar la memoria musical. El patio también tiene oído.",
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
      tipoLectura: "ficha",
      kicker: "Ficha curiosa",
    },
  },
  {
    id: "leer-rima-sol",
    title: "Rima del sol",
    summary:
      "El sol calienta, el mar suspira,\nel vapor se sube y la nube se estira.\nSi la gota se cansa de volar,\nvuelve al río para descansar.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/ciclo-agua.jpg",
      alt: "Rima del sol",
    },
    tags: [],
    featured: false,
    rank: 22,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "El sol calienta, el mar suspira,\nel vapor se sube y la nube se estira.\nSi la gota se cansa de volar,\nvuelve al río para descansar.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-rima-sombra",
    title: "Rima de la sombra",
    summary:
      "Si te escondes, tu sombra te encuentra.\nSi te estiras, tu sombra se agranda.\nNo es un fantasma ni una cuenta:\nes luz que se sienta a tu banda.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/patio-sombras.jpg",
      alt: "Rima de la sombra",
    },
    tags: [],
    featured: false,
    rank: 23,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Si te escondes, tu sombra te encuentra.\nSi te estiras, tu sombra se agranda.\nNo es un fantasma ni una cuenta:\nes luz que se sienta a tu banda.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-rima-estrella",
    title: "Rima de la estrella",
    summary:
      "Una estrella no se gasta al usarla.\nSe guarda en el álbum, se vuelve a mirar.\nSi hoy juntaste apenas una,\nmañana pueden ser un mar.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/misiones.jpg",
      alt: "Rima de la estrella",
    },
    tags: [],
    featured: false,
    rank: 24,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Una estrella no se gasta al usarla.\nSe guarda en el álbum, se vuelve a mirar.\nSi hoy juntaste apenas una,\nmañana pueden ser un mar.",
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
      tipoLectura: "rima",
      kicker: "Para leer en voz alta",
    },
  },
  {
    id: "leer-lab-sombra",
    title: "Teatro de sombras",
    summary:
      "Una linterna, una pared y las manos. Prueben un perro, un pico, un corazón. Después, acerquen la mano: la sombra crece. Aléjenla: se achica. El tamaño depende de la luz, no del miedo.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 12,
    image: {
      url: "/scenes/patio-sombras.jpg",
      alt: "Teatro de sombras",
    },
    tags: [],
    featured: false,
    rank: 25,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Una linterna, una pared y las manos. Prueben un perro, un pico, un corazón. Después, acerquen la mano: la sombra crece. Aléjenla: se achica. El tamaño depende de la luz, no del miedo.",
        },
        {
          type: "para-casa",
          text: "Dibujen el contorno de una sombra al atardecer. Mañana a mediodía, comparen.",
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
      tipoLectura: "lab",
      kicker: "Laboratorio en casa",
    },
  },
  {
    id: "leer-lab-pasos",
    title: "La receta del diente de león",
    summary:
      "Si hay un diente de león, soplen. Cuenten cuántas semillitas vuelan. Cada una es un programa: «viaja con el viento y, si hay tierra, empieza».",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: {
      url: "/scenes/zizu-patio.jpg",
      alt: "La receta del diente de león",
    },
    tags: [],
    featured: false,
    rank: 26,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Si hay un diente de león, soplen. Cuenten cuántas semillitas vuelan. Cada una es un programa: «viaja con el viento y, si hay tierra, empieza».",
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
      tipoLectura: "lab",
      kicker: "Laboratorio en casa",
    },
  },
  {
    id: "leer-carta-lugar",
    title: "Hay lugar",
    summary:
      "Dos palabras que agrandan un patio. No arreglan todo de una vez. Avisan: nadie se queda al borde.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/semaforo-emociones.jpg",
      alt: "Hay lugar",
    },
    tags: [],
    featured: false,
    rank: 27,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Dos palabras que agrandan un patio. No arreglan todo de una vez. Avisan: nadie se queda al borde.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-error",
    title: "Aún no lo sé",
    summary:
      "No es un fallo. Es el principio de un hallazgo. En Planeta Susu esa frase es una fiesta.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/vector-lab.jpg",
      alt: "Aún no lo sé",
    },
    tags: [],
    featured: false,
    rank: 28,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "No es un fallo. Es el principio de un hallazgo. En Planeta Susu esa frase es una fiesta.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-diferente",
    title: "Diferente es información",
    summary: "Gadú llegó un martes. Traía otra forma de mirar. Lo raro no se corrige: se pregunta.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/gadu-estrellas.jpg",
      alt: "Diferente es información",
    },
    tags: [],
    featured: false,
    rank: 29,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Gadú llegó un martes. Traía otra forma de mirar. Lo raro no se corrige: se pregunta.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-rio",
    title: "El desagüe no es un portal",
    summary: "Es una boca del río. Lo que tiramos viaja. El agua es de todas.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/zizu-rio.jpg",
      alt: "El desagüe no es un portal",
    },
    tags: [],
    featured: false,
    rank: 30,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Es una boca del río. Lo que tiramos viaja. El agua es de todas.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-mancha",
    title: "No hay color equivocado",
    summary:
      "Hay combinaciones que todavía no existen. Una mancha valiente vale más que una hoja en blanco perfecta.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/margarel-taller.jpg",
      alt: "No hay color equivocado",
    },
    tags: [],
    featured: false,
    rank: 31,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Hay combinaciones que todavía no existen. Una mancha valiente vale más que una hoja en blanco perfecta.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-bug",
    title: "Un bug es una pista",
    summary:
      "No es vergüenza. Se mira con lupa y se edita una flecha. Los programas, como las recetas, se pueden mejorar.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/gadu-juega.jpg",
      alt: "Un bug es una pista",
    },
    tags: [],
    featured: false,
    rank: 32,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "No es vergüenza. Se mira con lupa y se edita una flecha. Los programas, como las recetas, se pueden mejorar.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-diez",
    title: "El 10 tiene parejas",
    summary: "7+3, 6+4, 8+2, 9+1, 5+5. Si las reconoces, sumar se vuelve un saludo.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/planetas-contar.jpg",
      alt: "El 10 tiene parejas",
    },
    tags: [],
    featured: false,
    rank: 33,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "7+3, 6+4, 8+2, 9+1, 5+5. Si las reconoces, sumar se vuelve un saludo.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
  {
    id: "leer-carta-estrella",
    title: "Las estrellas no se gastan",
    summary:
      "Se guardan en el álbum. Una pregunta bien pensada también brilla. Mañana puede haber más.",
    section: {
      id: "leer",
      label: "Leer",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 1,
    image: {
      url: "/scenes/fiesta-estrellas.jpg",
      alt: "Las estrellas no se gastan",
    },
    tags: [],
    featured: false,
    rank: 34,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "parrafo",
          text: "Se guardan en el álbum. Una pregunta bien pensada también brilla. Mañana puede haber más.",
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
      tipoLectura: "carta",
      kicker: "Carta del recreo",
    },
  },
];
