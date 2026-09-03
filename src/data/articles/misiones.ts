import type { Article } from "@/data/types";

/**
 * Responsabilidad: las 11 misiones de 7 minutos, en la forma del contrato.
 * Usado por: data/catalog.ts, que las suma al archivo del sitio.
 * NO hace: no incluye las misiones diarias, que llevan una funcion `match` que
 *   no se puede serializar ni publicar desde afuera (siguen en data/missions.ts).
 */

export const MISIONES: Article[] = [
  {
    id: "misiones-m7-007",
    title: "Un cuadrado lleno de vida",
    summary:
      "Margarel encierra un pedacito de mundo con sus dedos y descubre que la biodiversidad también aparece a escala diminuta.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Elige: Con una persona adulta, busca un sitio seguro: una jardinera, el borde de un sendero o la base de un árbol. Imagina un cuadrado de aproximadamente un paso por lado. No entres a zonas protegidas ni privadas.",
        },
        {
          type: "paso",
          text: "Busca señales: Una hoja mordida, una telaraña, una pluma o un agujero pueden indicar que alguien estuvo allí. No recolectes nada.",
        },
        {
          type: "paso",
          text: "Mira condiciones: ¿Hay sombra, humedad, suelo descubierto, piedras o viento? Esas condiciones ayudan a explicar quién puede vivir allí.",
        },
        {
          type: "paso",
          text: "Registra: Dibuja el cuadrado y coloca puntos donde viste organismos o señales. Usa otro símbolo para lo que no lograste identificar.",
        },
        {
          type: "paso",
          text: "Formula una hipótesis: Completa: “Creo que encontraría más ______ si volviera a la hora/estación ______ porque ______”.",
        },
        {
          type: "idea",
          text: "Observar un área pequeña en distintos momentos revela diversidad y cambios que una mirada rápida puede perder.",
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
      edad: "5–11",
      materiales: "Papel, lápices y lo que haya en casa.",
      pregunta: "¿Cuánta vida puede aparecer en un cuadrado de un paso por un paso?",
    },
  },
  {
    id: "misiones-m7-008",
    title: "El mapa que se escucha",
    summary:
      "Gadú cierra los ojos y el lugar cambia de forma: una ciudad también puede dibujarse con zumbidos, pasos, hojas y silencios.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Centro: Dibuja un círculo en medio de la hoja. Ese punto eres tú.",
        },
        {
          type: "paso",
          text: "Inventa símbolos: Una espiral puede ser viento; rayas cortas, pasos; puntos, pájaros. No hace falta escribir nombres.",
        },
        {
          type: "paso",
          text: "Mide sin números: Dibuja grande un sonido cercano o intenso y pequeño uno lejano o suave. “Intenso” y “cercano” no son lo mismo: un sonido lejano puede ser fuerte.",
        },
        {
          type: "paso",
          text: "Clasifica: Marca con un triángulo los sonidos de seres vivos, con una onda fenómenos como viento o lluvia y con un cuadrado los producidos por máquinas o actividades humanas. Si quieres, además puedes usar colores. No todos cabrán en una sola categoría.",
        },
        {
          type: "paso",
          text: "Ponle título: “La ventana de los tres ritmos”, “Plaza con motor y alas” o el nombre que revele algo que viste con los oídos.",
        },
        {
          type: "idea",
          text: "Un paisaje sonoro reúne los sonidos de un lugar, y escucharlo permite reconocer fuentes, direcciones y cambios.",
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
      edad: "5–11",
      materiales: "Papel, lápices y lo que haya en casa.",
      pregunta: "¿Se puede dibujar un lugar solo con lo que escuchamos?",
    },
  },
  {
    id: "misiones-m7-009",
    title: "El laberinto de luz",
    summary:
      "Vector diseña una caja con una sola ventana. La misión tarda siete minutos; la respuesta de la planta puede tardar varios días.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 3,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Ventana: El adulto abre un cuadrado pequeño en un costado alto de la caja.",
        },
        {
          type: "paso",
          text: "Entrada: Coloca la maceta dentro, lejos de los bordes. La planta debe caber sin doblarse.",
        },
        {
          type: "paso",
          text: "Hipótesis: Dibuja hacia dónde crees que se orientará el tallo.",
        },
        {
          type: "paso",
          text: "Ubicación: Cierra la caja y déjala en un lugar seguro donde la única entrada principal de luz sea la ventana. Nada de Sol directo: la caja podría calentarse.",
        },
        {
          type: "paso",
          text: "Etiqueta: Escribe fecha, hora y “revisar diariamente”.",
        },
        {
          type: "idea",
          text: "Los tallos de muchas plantas orientan su crecimiento en respuesta a la luz.",
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
      edad: "5–11",
      materiales: "Papel, lápices y lo que haya en casa.",
      pregunta: "¿Puede una planta crecer a través de un camino hacia la luz?",
    },
  },
  {
    id: "misiones-m7-010",
    title: "Un puente de papel",
    summary:
      "Gadú descubre que doblar una hoja puede cambiar cuánto peso sostiene. La misión no premia al puente más bonito, sino al prototipo que aprende.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 4,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Instala: Separa los libros unos 15 centímetros y apoya la hoja plana. Coloca fichas de una en una en el centro. Registra cuántas sostuvo antes de tocar la mesa.",
        },
        {
          type: "paso",
          text: "Imagina: Sin cortar ni pegar, piensa tres formas: acordeón, canal, tubo o bordes doblados.",
        },
        {
          type: "paso",
          text: "Prueba: Agrega las fichas de una en una, siempre en el centro y desde poca altura.",
        },
        {
          type: "paso",
          text: "Mejora: Observa dónde se dobló. Cambia un pliegue, no todo el diseño.",
        },
        {
          type: "paso",
          text: "Segunda prueba: Repite y compara.",
        },
        {
          type: "idea",
          text: "La forma de un material cambia cómo distribuye una carga y resiste la flexión.",
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
      edad: "5–11",
      materiales: "Papel, lápices y lo que haya en casa.",
      pregunta: "¿Cómo puede una sola hoja convertirse en un puente más resistente?",
    },
  },
  {
    id: "misiones-m7-011",
    title: "Detective del agua",
    summary:
      "Margarel sigue sonidos, gotas y manchas sin abrir una sola tubería. Encontrar una pista no es reparar: es avisar a la persona indicada.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 5,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Silencio: Cierren las llaves que estén usando y escuchen. ¿Aparece un goteo o flujo continuo?",
        },
        {
          type: "paso",
          text: "Lavamanos: Miren la llave y la zona inferior sin tocar conexiones. ¿Hay gotas, humedad o manchas nuevas?",
        },
        {
          type: "paso",
          text: "Cocina: Observen alrededor del fregadero/lavaplatos. No muevan electrodomésticos ni productos.",
        },
        {
          type: "paso",
          text: "Ducha: Revisen si una llave cerrada sigue goteando. No entren si el piso está mojado.",
        },
        {
          type: "paso",
          text: "Inodoro: Escuchen si el estanque vuelve a llenarse sin haberlo usado. No retiren tapas pesadas; una prueba con colorante solo la hace un adulto siguiendo instrucciones del fabricante y del proveedor local.",
        },
        {
          type: "paso",
          text: "Registro: Dibujen una gota junto a cada pista y escriban: sonido, humedad o goteo visible.",
        },
        {
          type: "idea",
          text: "Una fuga puede dejar pistas visibles o sonoras; detectarla y reportarla permite que un adulto gestione la reparación.",
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
      edad: "5–11",
      materiales: "Papel, lápices y lo que haya en casa.",
      pregunta: "¿Qué pistas deja una fuga de agua?",
    },
  },
  {
    id: "misiones-m7-012",
    title: "Una ciudad que respira",
    summary:
      "Susu convoca a la tripulación para rediseñar una calle caliente. Respirar no será una metáfora vacía: el plano tendrá sombra, aire limpio, agua y rutas para distintos cuerpos.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 6,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Personas: Marca viviendas, escuela, comercio o paradas. Incluye a alguien que camina, usa silla de ruedas, pedalea o empuja un coche.",
        },
        {
          type: "paso",
          text: "Fuentes: Señala lugares que podrían producir contaminación o mucho calor: tránsito, motores encendidos, quema, techos oscuros o grandes superficies sin sombra. No toda contaminación se ve.",
        },
        {
          type: "paso",
          text: "Movimiento: Diseña rutas seguras para caminar, pedalear y usar transporte colectivo. Reducir emisiones en su origen suele ser más efectivo que pretender que las plantas limpien todo.",
        },
        {
          type: "paso",
          text: "Sombra y naturaleza: Agrega árboles o vegetación apropiada al clima y al espacio, sin bloquear veredas, rampas ni visibilidad. Las plantas pueden aportar sombra, enfriamiento y hábitat, pero requieren agua, suelo y mantenimiento.",
        },
        {
          type: "paso",
          text: "Agua: Dibuja superficies donde la lluvia pueda infiltrarse o almacenarse de forma segura. Conecta la idea con drenaje, no con charcos improvisados.",
        },
        {
          type: "paso",
          text: "Aire y calor: Deja espacios para circulación de aire y evita encerrar toda la calle entre muros. La forma y separación de edificios influye en viento, sombra y calor.",
        },
        {
          type: "idea",
          text: "La calidad del aire y el calor urbano dependen de sistemas y decisiones colectivas; el diseño puede reducir fuentes, dar sombra y hacer espacio para naturaleza y movilidad limpia.",
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
      edad: "5–11",
      materiales: "Papel, lápices y lo que haya en casa.",
      pregunta: "¿Cómo sería una calle que ayudara a respirar y moverse mejor?",
    },
  },
  {
    id: "misiones-m7-sandwich",
    title: "Programa un sándwich",
    summary: "Un algoritmo es una receta con orden. Si cambias un paso, cambia el sándwich.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 7,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Elige a una persona. No puede usar lo que ya sabe: solo tus instrucciones.",
        },
        {
          type: "paso",
          text: "Escribe los pasos: pan, untar, relleno, cerrar, cortar.",
        },
        {
          type: "paso",
          text: "Léelos uno por uno. Si falta “abrir el frasco”, se nota.",
        },
        {
          type: "paso",
          text: "Corrige un solo paso y prueba de nuevo.",
        },
        {
          type: "paso",
          text: "Pregunta: ¿qué instrucción era indispensable?",
        },
        {
          type: "idea",
          text: "Un programa sigue instrucciones. Un error es información para el siguiente intento.",
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
      edad: "5–10",
      materiales: "Objetos cotidianos. Costo cero o muy bajo.",
      pregunta: "¿Qué ocurre cuando una instrucción se salta o se invierte?",
    },
  },
  {
    id: "misiones-m7-patrones",
    title: "Caza patrones en casa",
    summary: "La casa está llena de reglas escondidas: baldosas, canciones, rutinas.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 8,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Camina por un rincón. Encuentra un patrón de sonido.",
        },
        {
          type: "paso",
          text: "Encuentra un patrón de objetos o colores.",
        },
        {
          type: "paso",
          text: "Encuentra un patrón de movimiento (pasos, parpadeos, un ventilador).",
        },
        {
          type: "paso",
          text: "Dibuja la regla: A-B-A-B o A-A-B.",
        },
        {
          type: "paso",
          text: "Inventa un patrón nuevo de 8 y pídele a alguien que lo continúe.",
        },
        {
          type: "idea",
          text: "Un patrón es una regla que se repite. Verla es el primer paso para pensarla.",
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
      edad: "5–10",
      materiales: "Objetos cotidianos. Costo cero o muy bajo.",
      pregunta: "¿Dónde se esconde un patrón cerca tuyo?",
    },
  },
  {
    id: "misiones-m7-piedra",
    title: "Siete usos imposibles",
    summary: "Gadú toma una piedra y la mira al revés: no es un objeto, es un prototipo.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 9,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Elige una piedra o un objeto cotidiano.",
        },
        {
          type: "paso",
          text: "Escribe o dibuja siete usos. Al menos tres deben ser imposibles.",
        },
        {
          type: "paso",
          text: "Elige uno posible y pruébalo con cuidado.",
        },
        {
          type: "paso",
          text: "Pregunta: ¿a quién ayuda? ¿qué podría romper?",
        },
        {
          type: "paso",
          text: "Guarda el boceto. Un prototipo también es una idea.",
        },
        {
          type: "idea",
          text: "Una restricción puede producir más ideas, no menos.",
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
      edad: "5–11",
      materiales: "Objetos cotidianos. Costo cero o muy bajo.",
      pregunta: "¿Cuántos usos puede tener una piedra si cambiamos la regla?",
    },
  },
  {
    id: "misiones-m7-pinta-sonido",
    title: "Pinta un sonido",
    summary: "Un sonido no tiene forma obligatoria. Gadú lo pinta igual.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 10,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Cierra los ojos. Escucha 20 segundos.",
        },
        {
          type: "paso",
          text: "Elige un sonido: agua, un camión, una risa, un pájaro.",
        },
        {
          type: "paso",
          text: "Dibújalo sin dibujar el objeto. Usa líneas, manchas, ritmo.",
        },
        {
          type: "paso",
          text: "Muéstraselo a alguien: ¿adivina el sonido?",
        },
        {
          type: "paso",
          text: "Prueba otra vez con un sonido más suave.",
        },
        {
          type: "idea",
          text: "El arte puede formular preguntas que las palabras todavía no tienen.",
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
      edad: "5–11",
      materiales: "Objetos cotidianos. Costo cero o muy bajo.",
      pregunta: "¿Cómo se dibuja algo que no se puede tocar?",
    },
  },
  {
    id: "misiones-m7-color-bolsa",
    title: "¿Qué color saldrá?",
    summary: "Antes de mezclar, Vector pide una hipótesis.",
    section: {
      id: "misiones",
      label: "Misiones de 7 minutos",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: [],
    featured: false,
    rank: 11,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "paso",
          text: "Elige dos colores de lápiz, pintura o papel celofán.",
        },
        {
          type: "paso",
          text: "Antes de juntarlos, di en voz alta qué color saldrá.",
        },
        {
          type: "paso",
          text: "Mézclalos o superpónlos.",
        },
        {
          type: "paso",
          text: "Compara: ¿coincidió con tu hipótesis?",
        },
        {
          type: "paso",
          text: "Cambia una sola variable y vuelve a probar.",
        },
        {
          type: "idea",
          text: "Una hipótesis no es una respuesta. Es una idea que podemos probar.",
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
      edad: "5–9",
      materiales: "Objetos cotidianos. Costo cero o muy bajo.",
      pregunta: "¿Qué crees que ocurrirá si juntamos estos dos colores?",
    },
  },
];
