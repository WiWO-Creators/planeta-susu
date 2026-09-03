import type { Article } from "@/data/types";

/**
 * Responsabilidad: las 16 lecciones de los ocho mundos, en la forma del contrato.
 * Usado por: data/catalog.ts, que las suma al archivo del sitio.
 * NO hace: no describe los mundos. El mundo (titulo, anfitrion, nota para
 *   adultos) sigue siendo catalogo del sitio y vive en data/topics.ts.
 *
 * Una leccion no tiene pagina propia: se dibuja dentro de su mundo. Por eso el
 * id lleva el mundo adentro (explora-<mundo>--<leccion>): es lo unico que
 * permite armar su URL publica sabiendo solo el id.
 */

export const LECCIONES: Article[] = [
  {
    id: "explora-ecologia--el-rio-tiene-sed",
    title: "El río tiene sed",
    summary: "El agua no desaparece: viaja. Y nosotros podemos ayudarla a llegar limpia.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "zizu",
          text: "Hoy el río del barrio se ve cansado. No es magia oscura: es sed, tierra y a veces… basura que no le pertenece.",
        },
        {
          type: "text",
          title: "El agua es una viajera",
          body: "Una gota puede ser nube, charco, vaso o lágrima. Sube, baja, se esconde en las raíces y vuelve a cantar. Eso se llama ciclo del agua. No hay agua «nueva»: hay agua que da vueltas desde hace muchísimo tiempo.",
        },
        {
          type: "list",
          title: "Cómo ayudar a la viajera",
          items: [
            "Cerrar la llave mientras te enjabonas las manos (ella no necesita un concierto de grifo).",
            "No tirar pintura, aceite ni toallitas al inodoro: el río no tiene estómago para eso.",
            "Juntar agua de lluvia en un balde para las plantas.",
            "Si ves basura cerca de un desagüe, avisa a una persona grande. Un tapón de plástico puede inundar una calle.",
          ],
        },
        {
          type: "try",
          title: "Laboratorio en casa: la nube en un vaso",
          steps: [
            "Llena un vaso con agua caliente (pide ayuda).",
            "Cubre con un plato y ponle cubitos de hielo encima.",
            "Mira cómo se forma una nubecita. Eso también pasa en el cielo.",
            "Dibuja el viaje de una gota: mar → nube → lluvia → río → mar.",
          ],
        },
        {
          type: "callout",
          tone: "care",
          text: "Cuidar el agua no es un examen. Un grifo cerrado es un mini-superpoder. Los adultos también están aprendiendo.",
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
      tema: "ecologia",
      leccion: "el-rio-tiene-sed",
      edad: "4–8",
      quiz: {
        question: "¿Qué le pasa al agua cuando «desaparece» del charco?",
        options: [
          {
            text: "Se va de vacaciones a la Luna y no vuelve.",
            ok: false,
            why: "La Luna está muy lejos para un charco. El agua se evapora y sube.",
          },
          {
            text: "Se evapora, viaja por el aire y puede volver como lluvia.",
            ok: true,
            why: "¡Exacto! Es el ciclo del agua. La misma gota puede ser río y nube.",
          },
          {
            text: "Se convierte en piedra para siempre.",
            ok: false,
            why: "El agua puede congelarse, pero no se vuelve piedra. Sigue siendo agua.",
          },
        ],
      },
    },
  },
  {
    id: "explora-ecologia--los-tres-botes",
    title: "Los tres botes",
    summary: "Reciclar es solo un capítulo. Primero: reducir, reusar, reparar.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "susu",
          text: "¡Se me rompió el juguete! ¿Lo tiramos? El corazón me dice que no tan rápido.",
        },
        {
          type: "say",
          who: "zizu",
          text: "Antes del bote, hay una pregunta de explorador: ¿esto todavía puede ser otra cosa?",
        },
        {
          type: "text",
          title: "La familia de las erres",
          body: "Reciclar es famoso, pero no es el primer superpoder. Reducir es usar menos. Reusar es darle otra vida. Reparar es salvar una historia. Reciclar es convertir un material en otro. Y rechazar es decir «no, gracias» a lo que no necesitamos.",
        },
        {
          type: "list",
          title: "Qué va en cada bote (versión simple)",
          items: [
            "Orgánico: cáscaras, restos de comida, hojas. Vuelven a la tierra.",
            "Reciclable: papel seco, cartón, botellas limpias, latas. Se transforman.",
            "Otros: envoltorios sucios, chicles, cosas mixtas. Intentamos que este bote sea el más chiquito.",
          ],
        },
        {
          type: "try",
          title: "Misión de 10 minutos",
          steps: [
            "Elige un objeto que ibas a tirar.",
            "Pregúntale: ¿te puedo reparar, regalar o transformar?",
            "Si es una caja, conviértela en casa para un personaje de Planeta Susu.",
            "Ponle un nombre. Las cosas con nombre se tiran menos.",
          ],
        },
        {
          type: "callout",
          tone: "wow",
          text: "Una botella puede nacer otra vez como polar, banco o nueva botella. Pero cuesta energía. Por eso reducir gana el primer lugar.",
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
      tema: "ecologia",
      leccion: "los-tres-botes",
      edad: "4–9",
      quiz: {
        question: "Antes de reciclar, ¿cuál es el superpoder más poderoso?",
        options: [
          {
            text: "Comprar más cosas verdes.",
            ok: false,
            why: "Comprar más, aunque sea «eco», sigue siendo más.",
          },
          {
            text: "Usar menos, reparar y reusar. Reciclar viene después.",
            ok: true,
            why: "¡Sí! La mejor basura es la que no se produce.",
          },
          {
            text: "Esconder la basura bajo la cama.",
            ok: false,
            why: "Zizú revisa debajo de las camas. Se sabe el truco.",
          },
        ],
      },
    },
  },
  {
    id: "explora-ciencia--cielo-azul",
    title: "¿Por qué el cielo es azul?",
    summary: "La luz del sol es un arcoíris escondido. El aire elige el azul para saludarnos.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 6,
    image: null,
    tags: [],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "gadu",
          text: "En mi planeta el cielo a veces es lila. Aquí es azul casi todos los días. ¿El aire tiene favoritos?",
        },
        {
          type: "text",
          title: "La luz es un equipo",
          body: "La luz del sol parece blanca, pero viaja con muchos colores: como el arcoíris que se esconde en un vaso de agua. Al chocar con el aire, el color azul se dispersa para todos lados. Por eso, donde mires de día, te encuentra el azul.",
        },
        {
          type: "callout",
          tone: "wow",
          text: "Al atardecer el cielo se pone naranja porque la luz recorre más aire y el azul ya se «gastó» en el camino. Quedan los colores largos: rojo, naranja, oro.",
        },
        {
          type: "try",
          title: "El vaso del cielo",
          steps: [
            "Un vaso con agua, una gota de leche, una linterna.",
            "Oscurece la pieza y alumbra de lado.",
            "De frente verás un tono azulado; si miras hacia la linterna, más amarillo.",
            "Eso imita, un poquito, cómo el aire juega con la luz.",
          ],
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
      tema: "ciencia",
      leccion: "cielo-azul",
      edad: "5–10",
      quiz: {
        question: "¿Por qué vemos el cielo azul de día?",
        options: [
          {
            text: "Porque el mar se refleja hacia arriba como un espejo gigante.",
            ok: false,
            why: "El cielo es azul también en el desierto, lejos del mar.",
          },
          {
            text: "Porque el aire dispersa el color azul de la luz del sol.",
            ok: true,
            why: "¡Bingo! Se llama dispersión. Gadú lo anotó en su mapa.",
          },
          {
            text: "Porque alguien pinta el cielo cada mañana a las seis.",
            ok: false,
            why: "Hermoso, pero no. Aunque Margarel se ofrece de voluntaria.",
          },
        ],
      },
    },
  },
  {
    id: "explora-ciencia--cinco-sentidos",
    title: "Cinco sentidos en un planeta nuevo",
    summary: "Ver, oír, oler, gustar y tocar: cinco puertas para investigar el mundo.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "vector",
          text: "La ciencia empieza cuando prestas atención con el cuerpo, no solo con el cuaderno.",
        },
        {
          type: "list",
          title: "Las cinco puertas",
          items: [
            "Ver: colores, formas, movimiento. ¿Qué cambia si entrecerras los ojos?",
            "Oír: cerca, lejos, grave, agudo. El silencio también es información.",
            "Oler: la lluvia, el pan, el lápiz. El olfato es un detective antiguo.",
            "Gustar: dulce, salado, ácido, amargo, umami. La lengua es un mapa.",
            "Tocar: frío, áspero, suave, pesado. Las manos piensan.",
          ],
        },
        {
          type: "try",
          title: "Caja misteriosa",
          steps: [
            "Mete 4 objetos en una caja (sin que se vean).",
            "Una persona mete la mano y describe SIN decir el nombre.",
            "Las demás adivinan.",
            "Al final, todos dibujan lo que imaginaron. Casi nunca coinciden: eso también es ciencia.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: "Si un sentido está más cansado o funciona distinto (lentes, audífonos, texturas que molestan), el planeta se investiga de otra manera. Todas las maneras cuentan.",
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
      tema: "ciencia",
      leccion: "cinco-sentidos",
      edad: "4–8",
      quiz: {
        question: "¿Para qué sirven los sentidos en ciencia?",
        options: [
          {
            text: "Solo para disfrutar el recreo.",
            ok: false,
            why: "El recreo es sagrado, pero los sentidos también miden el mundo.",
          },
          {
            text: "Son herramientas para observar, comparar y descubrir.",
            ok: true,
            why: "Los sentidos son el laboratorio que siempre llevas puesto.",
          },
          {
            text: "No sirven: solo valen las máquinas.",
            ok: false,
            why: "Las máquinas ayudan. El asombro empieza en el cuerpo.",
          },
        ],
      },
    },
  },
  {
    id: "explora-matematicas--patrones-gadu",
    title: "Las rayas de Gadú",
    summary:
      "Un patrón es una promesa que se repite. Si la escuchas, puedes adivinar lo que sigue.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 6,
    image: null,
    tags: [],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "gadu",
          text: "Mi cola es violeta, naranja, violeta, naranja… ¿Qué viene después? ¡No hagas trampa!",
        },
        {
          type: "text",
          title: "Patrones en todas partes",
          body: "Los patrones son repeticiones con regla. Días de la semana. Canción que vuelve al estribillo. Baldosas. Un patrón puede ser de color, de forma, de número o de movimiento. Detectarlos es un superpoder matemático que no necesita hoja de examen.",
        },
        {
          type: "try",
          title: "Inventa un patrón de 8",
          steps: [
            "Elige dos palmas, dos pies o dos cucharas.",
            "Haz: clap, pie, clap, pie… y luego cámbialo: clap clap pie.",
            "Otra persona tiene que continuar el patrón.",
            "Si se rompe, ríanse y reparen la regla. Reparar también es mates.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: "Cuando un niño dice «me lo sé de memoria», pregúntale «¿cuál es la regla?». Memoria y comprensión son primas, no gemelas.",
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
      tema: "matematicas",
      leccion: "patrones-gadu",
      edad: "4–8",
      quiz: {
        question: "Si la cola de Gadú va violeta–naranja–violeta–naranja, ¿qué color sigue?",
        options: [
          {
            text: "Violeta.",
            ok: true,
            why: "La regla es ABAB. Después de naranja vuelve el violeta.",
          },
          {
            text: "Verde, porque Zizú se coló.",
            ok: false,
            why: "Zizú es un excelente explorador, pero no es parte de esta regla.",
          },
          {
            text: "Se acaba la cola.",
            ok: false,
            why: "Las colas de Gadú son larguísimas. El patrón sigue.",
          },
        ],
      },
    },
  },
  {
    id: "explora-matematicas--sumar-planetas",
    title: "Sumar planetas",
    summary: "Sumar es juntar colecciones. Restar es contar lo que se fue de visita.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "vector",
          text: "Tengo 3 planetas de cartón. Gadú trae 2. ¿Cuántos hay en la mesa? No adivines: muévelos.",
        },
        {
          type: "text",
          title: "Las manos antes que los símbolos",
          body: "El signo + es un atajo para una acción: juntar. El signo − es un atajo para separar. Si primero lo haces con piedritas, galletas o planetas de papel, el símbolo llega como un apodo, no como un misterio.",
        },
        {
          type: "list",
          title: "Trucos de Vector",
          items: [
            "Cuenta de 2 en 2: 2, 4, 6, 8… es un patrón numérico.",
            "El 10 es un amigo: 8 + 2, 7 + 3, 6 + 4. Son parejas que viven en el 10.",
            "Si te trabas, dibuja. Un dibujo es una operación disfrazada.",
          ],
        },
        {
          type: "try",
          title: "Mercadito de 10",
          steps: [
            "Pongan precios de 1 a 5 (botones, hojas, palitos).",
            "Cada quien tiene 10 «monedas» (porotos).",
            "Compren y den vuelto. El vuelto es una resta viva.",
            "Al final, cuenten juntos: ¿alcanzó? ¿sobró? ¿qué harían distinto?",
          ],
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
      tema: "matematicas",
      leccion: "sumar-planetas",
      edad: "5–9",
      quiz: {
        question: "Vector tiene 3 planetas y Gadú trae 2. ¿Cuántos hay?",
        options: [
          {
            text: "32, porque se pegan los números.",
            ok: false,
            why: "Pegar dígitos es otra operación. Aquí juntamos colecciones.",
          },
          {
            text: "5 planetas.",
            ok: true,
            why: "3 y 2 se juntan: 5. Puedes contarlo con los dedos.",
          },
          {
            text: "1, porque se comen entre sí.",
            ok: false,
            why: "Los planetas de cartón no son tan dramáticos.",
          },
        ],
      },
    },
  },
  {
    id: "explora-programacion--recetas-algoritmos",
    title: "Un sándwich es un algoritmo",
    summary: "Si los pasos están en otro orden, el sándwich sale al revés. Igual que un programa.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: [],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "gadu",
          text: "En mi planeta preparamos el sándwich al revés y nos reímos mucho. Aquí parece que el pan va primero. ¡Qué interesante!",
        },
        {
          type: "text",
          title: "Algoritmo = receta con orden",
          body: "Un algoritmo es una lista de pasos para lograr algo. Puede ser un sándwich, un baile o el camino al colegio. La computadora no adivina lo que quisiste decir: hace exactamente lo que escribiste. Por eso el orden importa tanto.",
        },
        {
          type: "list",
          title: "Las cuatro llaves del pensamiento computacional",
          items: [
            "Descomponer: partir un problema grande en pedacitos.",
            "Patrones: ¿esto se parece a algo que ya resolví?",
            "Abstracción: ¿qué es lo importante y qué es ruido?",
            "Algoritmo: escribe los pasos para que otro (o un robot) pueda repetirlos.",
          ],
        },
        {
          type: "try",
          title: "Programa a un humano",
          steps: [
            "Una persona es el «robot». Solo puede hacer lo que le dicen.",
            "Otra escribe pasos para cruzar la pieza y tomar un vaso.",
            "Si el robot choca, el programa tiene un bug: se reescribe, no se grita.",
            "¡Celebren el primer bug! Significa que el programa se puede mejorar.",
          ],
        },
        {
          type: "callout",
          tone: "care",
          text: "Programar no es «ser de sistemas». Es una forma de pensar. Niñas, niños, lentos, rápidos, con o sin computadora: hay asiento para todes.",
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
      tema: "programacion",
      leccion: "recetas-algoritmos",
      edad: "5–10",
      quiz: {
        question: "¿Qué es un bug?",
        options: [
          {
            text: "Un bicho que vive dentro de la tablet.",
            ok: false,
            why: "Aunque Zizú estaría encantado de catalogarlo.",
          },
          {
            text: "Un error en los pasos. Es una pista para mejorar el programa.",
            ok: true,
            why: "Los bugs no son vergüenza: son información. Vector los colecciona.",
          },
          {
            text: "Señal de que no sirves para programar.",
            ok: false,
            why: "Falso y feo. Hasta las personas expertas depuran todo el día.",
          },
        ],
      },
    },
  },
  {
    id: "explora-programacion--secuencia-gadu",
    title: "La secuencia de Gadú",
    summary:
      "Moverse por un mapa con flechas: arriba, abajo, izquierda, derecha. Eso es un programa.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 6,
    image: null,
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "gadu",
          text: "Si me das cuatro flechas, llego a la estrella. Si me das cinco, a veces me caigo al pozo. ¡Qué emoción!",
        },
        {
          type: "text",
          title: "Un programa es una lista de flechas",
          body: "En un videojuego, tu personaje obedece una secuencia. En la vida, cruzar la calle también. Anticipar «si hay un obstáculo, entonces…» es el germen de las condiciones (los if). Hoy practicamos solo la secuencia: el orden de los pasos.",
        },
        {
          type: "try",
          title: "Mapa de baldosas",
          steps: [
            "Usa las baldosas del piso o dibuja una grilla de 4×4.",
            "Pon un objeto-meta y un objeto-obstáculo.",
            "Escribe flechas en papeles y «córrelas» una a una.",
            "Cuando funcione, cambia la meta y reprograma. Flexibilidad > velocidad.",
          ],
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
      tema: "programacion",
      leccion: "secuencia-gadu",
      edad: "5–9",
      quiz: {
        question: "Si Gadú choca con una roca, ¿qué hacemos?",
        options: [
          {
            text: "Borrar todo y llorar un rato largo.",
            ok: false,
            why: "Llorar está permitido. Borrar todo, no siempre. Ajusta un paso.",
          },
          {
            text: "Mirar qué paso falló y cambiar esa flecha.",
            ok: true,
            why: "Depurar es mirar con lupa, no rehacer el universo.",
          },
          {
            text: "Culpar a la roca.",
            ok: false,
            why: "Las rocas son honestas. El programa es el que se puede editar.",
          },
        ],
      },
    },
  },
  {
    id: "explora-arte--colores-que-sienten",
    title: "Colores que sienten",
    summary: "El rojo no es «enojo» obligatorio. Pero los colores pueden ser un idioma paralelo.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "margarel",
          text: "Hoy me puse el pantalón de rayas porque el día pidió música. El arte empieza cuando le haces caso a un presentimiento.",
        },
        {
          type: "text",
          title: "Mezclar es descubrir",
          body: "Amarillo con azul: verde (un bosque nace). Rojo con amarillo: naranja (un atardecer). Rojo con azul: violeta (la cresta de Gadú). Los colores primarios son tres amigos que, al juntarse, inventan al resto.",
        },
        {
          type: "try",
          title: "Retrato del clima interior",
          steps: [
            "Pregúntate: ¿cómo está el clima dentro de mí ahora?",
            "Elige tres colores sin pensarlo demasiado.",
            "Llena una hoja: manchas, rayas, puntos. No tiene que parecer «algo».",
            "Ponle título. El título es parte de la obra.",
          ],
        },
        {
          type: "callout",
          tone: "care",
          text: "Si alguien dice «eso no se parece a un perro», responde: «no era un perro, era un martes». El arte no es un dictado.",
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
      tema: "arte",
      leccion: "colores-que-sienten",
      edad: "4–10",
      quiz: {
        question: "¿Qué pasa si mezclas amarillo y azul?",
        options: [
          {
            text: "Verde.",
            ok: true,
            why: "Como el chaleco de Zizú. Un bosque en miniatura.",
          },
          {
            text: "Se pelean y queda gris siempre.",
            ok: false,
            why: "El gris aparece si mezclas muchos. Amarillo + azul es verde.",
          },
          {
            text: "Nada, los colores no se hablan.",
            ok: false,
            why: "Los colores son muy habladores. Pregúntale a Margarel.",
          },
        ],
      },
    },
  },
  {
    id: "explora-arte--telar-abuela",
    title: "El telar de la abuela",
    summary: "Las rayas recuerdan caminos. El arte también es memoria y territorio.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "margarel",
          text: "Mi abuela dice que cada raya es un camino: el del río, el de la casa, el de las personas que queremos.",
        },
        {
          type: "text",
          title: "Hacer con las manos",
          body: "Un telar, un collage, una trenza de lana: son algoritmos suaves. Repites un gesto y aparece un dibujo. En los Andes, los textiles guardan historias que no caben en un cuaderno. Crear es una forma de pertenecer.",
        },
        {
          type: "try",
          title: "Telar de cartón",
          steps: [
            "Recorta ranuras en los bordes de un cartón.",
            "Tensa lanas de un lado a otro (la urdimbre).",
            "Pasa otras lanas de lado a lado, arriba-abajo (la trama).",
            "Cada color puede ser una persona de la familia o un lugar.",
          ],
        },
        {
          type: "callout",
          tone: "wow",
          text: "No hace falta «ser artista». Hace falta un rato sin que nadie arregle tu hoja.",
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
      tema: "arte",
      leccion: "telar-abuela",
      edad: "5–10",
      quiz: {
        question: "Según Margarel, ¿qué recuerdan las rayas de su pantalón?",
        options: [
          {
            text: "Los caminos y las historias de su abuela.",
            ok: true,
            why: "El textil es memoria. Un mapa que se puede vestir.",
          },
          {
            text: "Las reglas de un colegio muy estricto.",
            ok: false,
            why: "Las rayas de Margarel no son un reglamento.",
          },
          {
            text: "Nada: son solo decoración.",
            ok: false,
            why: "Decorar también es decir algo. Aquí, además, hay historia.",
          },
        ],
      },
    },
  },
  {
    id: "explora-valores--el-ultimo-asiento",
    title: "El último asiento",
    summary: "Incluir no es un premio. Es una forma de armar el juego para que quepa más mundo.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "susu",
          text: "Gadú llegó un martes y no conocía las reglas del recreo. Yo me senté al lado. El juego se hizo más raro y más rico.",
        },
        {
          type: "text",
          title: "Hay lugar",
          body: "Incluir no significa que te tenga que caer bien todo el mundo todo el tiempo. Significa que nadie se queda fuera por ser nuevo, lento, ruidoso, callado, de otro color o de otro planeta. A veces incluir es correrse. A veces es preguntar: «¿cómo se juega en tu casa?»",
        },
        {
          type: "list",
          title: "Frases que abren la puerta",
          items: [
            "«¿Quieres unirte? Te explico en dos minutos.»",
            "«Hoy inventamos una regla nueva para que puedas jugar.»",
            "«Si no quieres jugar, puedes mirar. Mirar también vale.»",
            "«Me equivoqué. ¿Lo intentamos otra vez?»",
          ],
        },
        {
          type: "try",
          title: "El juego de las sillas al revés",
          steps: [
            "Pongan sillas de menos. Cuando pare la música, hay que compartir silla, no eliminar.",
            "Gana el grupo si todes tienen al menos un pedacito de asiento.",
            "Hablen: ¿qué se sintió distinto?",
          ],
        },
        {
          type: "callout",
          tone: "care",
          text: "Pedir ayuda no es perder. Los corazones esponjosos piden ayuda más rápido.",
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
      tema: "valores",
      leccion: "el-ultimo-asiento",
      edad: "4–9",
      quiz: {
        question: "Gadú no conoce el juego. ¿Qué haría Susu?",
        options: [
          {
            text: "Seguir jugando más rápido para que no moleste.",
            ok: false,
            why: "Eso cierra la puerta. Susu las abre.",
          },
          {
            text: "Invitarlo, explicar las reglas y, si hace falta, inventar una nueva.",
            ok: true,
            why: "Incluir es un diseño, no un favor. El juego se puede rearmar.",
          },
          {
            text: "Decirle que vuelva cuando sea menos violeta.",
            ok: false,
            why: "El violeta es justamente el punto. Diferente es información.",
          },
        ],
      },
    },
  },
  {
    id: "explora-valores--emociones-tienen-nombre",
    title: "Las emociones tienen nombre",
    summary: "Si le pones nombre a lo que sientes, el cuerpo deja de gritar tan fuerte.",
    section: {
      id: "explora",
      label: "Explora",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: [],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "say",
          who: "susu",
          text: "A veces estoy nublada. A veces, soleada. A veces hay trueno chiquito en la panza. Todo eso es clima interior.",
        },
        {
          type: "text",
          title: "Nombrar no es apagar",
          body: "Enojada, triste, asustada, celosa, orgullosa, aburrida, emocionada. Las emociones no son buenas o malas: son mensajes. El enojo dice «hay un límite». El miedo dice «hay algo que cuidar». La tristeza dice «algo importaba».",
        },
        {
          type: "list",
          title: "Botiquín de 4 pasos",
          items: [
            "Para el cuerpo: tres respiraciones lentas (como soplar una sopa).",
            "Ponle nombre: «estoy celoso» es más preciso que «estoy mal».",
            "Dilo en voz alta a alguien de confianza.",
            "Elige un paso chiquito: un vaso de agua, un dibujo, un rato solo, un abrazo.",
          ],
        },
        {
          type: "try",
          title: "Termómetro esponjoso",
          steps: [
            "Dibujen un termómetro del 1 al 5.",
            "Varias veces al día, marquen el clima interior.",
            "No hay que explicarlo siempre. A veces el número basta.",
            "Si llega a 5, un adulto cerca. Pedir compañía es un superpoder.",
          ],
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
      tema: "valores",
      leccion: "emociones-tienen-nombre",
      edad: "4–8",
      quiz: {
        question: "¿Para qué sirve ponerle nombre a una emoción?",
        options: [
          {
            text: "Para que desaparezca de inmediato y nunca vuelva.",
            ok: false,
            why: "Las emociones van y vuelven. Nombrarlas las hace más manejables, no las borra.",
          },
          {
            text: "Para entender el mensaje y elegir un paso chiquito.",
            ok: true,
            why: "Susu aprueba. El nombre es una linterna, no un interruptor.",
          },
          {
            text: "Para tener razón en una pelea.",
            ok: false,
            why: "Nombrar no es ganar. Es entenderse.",
          },
        ],
      },
    },
  },
  {
    id: "explora-futuro--oficios-que-no-existen",
    title: "Oficios que todavía no existen",
    summary:
      "Cuando seas grande, puede que tu trabajo tenga un nombre que hoy da risa. Eso es una buena señal.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "vector",
          text: "Mi tía programa cosas que hace diez años eran ciencia ficción. Gadú quiere ser traductor de ballenas. Margarel, diseñadora de colores que aún no se mezclan.",
        },
        {
          type: "text",
          title: "El futuro se practica",
          body: "Nadie tiene el mapa completo. Lo que sí podemos ensayar: curiosidad, cuidado, colaboración, ganas de aprender otra vez. Esas cuatro herramientas sirven para oficios que todavía no tienen nombre.",
        },
        {
          type: "list",
          title: "Oficios inventados en Planeta Susu",
          items: [
            "Guardafaros de ríos (Zizú ya está en práctica).",
            "Compositora de telares sonoros (Margarel, candidata).",
            "Ingeniero de abrazos a distancia (Susu lidera el prototipo).",
            "Cartógrafo de preguntas (Gadú, a tiempo completo).",
            "Mecánico de robots de cartón (Vector, taller permanente).",
          ],
        },
        {
          type: "try",
          title: "Tu tarjeta de oficio",
          steps: [
            "Inventa un trabajo que el mundo podría necesitar.",
            "Dibuja el uniforme (puede ser ridículo).",
            "Escribe una frase: «Yo ayudo a…».",
            "Pégala en la heladera. Los oficios se ensayan en casa.",
          ],
        },
        {
          type: "callout",
          tone: "wow",
          text: "Cuidar el planeta, programar con ética y hacer arte no son «extras». Son materias primas del siglo que viene.",
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
      tema: "futuro",
      leccion: "oficios-que-no-existen",
      edad: "6–10",
      quiz: {
        question: "¿Cuál es la mejor forma de prepararse para un oficio que aún no existe?",
        options: [
          {
            text: "Memorizar todas las respuestas de un libro viejo.",
            ok: false,
            why: "Los libros sirven. La memorización sola se queda corta.",
          },
          {
            text: "Practicar curiosidad, cuidado, colaboración y ganas de aprender de nuevo.",
            ok: true,
            why: "Esas cuatro herramientas viajan bien hacia lo desconocido.",
          },
          {
            text: "Esperar a ser grande y ya ver.",
            ok: false,
            why: "El futuro se ensaya hoy. Hasta en el patio.",
          },
        ],
      },
    },
  },
  {
    id: "explora-futuro--robots-con-corazon",
    title: "Robots con corazón",
    summary:
      "La tecnología no es magia ni amenaza: es una herramienta. Las personas eligen para qué.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "gadu",
          text: "En mi planeta hay máquinas que recogen nubes. Aquí hay máquinas que recogen datos. Las dos necesitan instrucciones con corazón.",
        },
        {
          type: "text",
          title: "Preguntas para cualquier invento",
          body: "¿A quién ayuda? ¿A quién podría dejar afuera? ¿Usa mucha energía? ¿Se puede reparar? ¿Quién decide las reglas? Un robot (o una app) hereda las decisiones de quienes lo diseñan. Por eso Vector dice: programar es un acto ético, aunque estemos en cartón.",
        },
        {
          type: "try",
          title: "Diseña un robot amable",
          steps: [
            "Elige un problema chiquito (regar, recordar el agua, saludar a quien llega).",
            "Dibuja el robot con una cara (las caras nos recuerdan que hay personas detrás).",
            "Escribe 3 reglas que NUNCA debe romper.",
            "Preséntaselo a la familia. Las reglas se debaten.",
          ],
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
      tema: "futuro",
      leccion: "robots-con-corazon",
      edad: "6–10",
      quiz: {
        question: "¿Quién es responsable de lo que hace un robot?",
        options: [
          {
            text: "El robot, porque tiene botones.",
            ok: false,
            why: "Los botones no firman. Las personas sí.",
          },
          {
            text: "Las personas que lo diseñan, lo usan y deciden sus reglas.",
            ok: true,
            why: "La tecnología hereda nuestras decisiones. Por eso importan tanto.",
          },
          {
            text: "Nadie. Aparece solo.",
            ok: false,
            why: "Si apareciera solo, Margarel ya habría pedido el truco.",
          },
        ],
      },
    },
  },
  {
    id: "explora-orbita--casco-puesto",
    title: "Casco puesto, permiso pedido",
    summary:
      "Explorar no es entrar corriendo. Es prepararse, preguntar y escuchar a quienes ya viven ahí.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "margarel",
          text: "¡Casco puesto, vamos a descubrirlo! Espera. Antes del casco: ¿quién vive aquí? ¿Puedo pasar? ¿Cómo les gusta que cuenten su historia?",
        },
        {
          type: "text",
          title: "Llegar no es comprender",
          body: "Desde arriba, un humedal parece un dibujo verde. Cuando Margarel preguntó a quienes viven junto al agua, descubrió que también era protección, alimento y memoria. Un mismo lugar cambia según quién lo mira.",
        },
        {
          type: "list",
          title: "Bitácora de terreno",
          items: [
            "Qué ves (colores, formas, movimiento).",
            "Qué escuchas (viento, motores, voces, silencio).",
            "A quién le preguntarías permiso.",
            "Qué todavía no sabes.",
          ],
        },
        {
          type: "callout",
          tone: "care",
          text: "Una comunidad no es «exótica». Es un conjunto de personas que pueden hablar por sí mismas.",
        },
        {
          type: "try",
          title: "Expedición de 15 minutos",
          steps: [
            "Elige un rincón conocido: la plaza, el pasillo, el macetero.",
            "Dibuja lo que ves como si acabaras de aterrizar.",
            "Pregunta a alguien que lo usa todos los días: «¿qué es lo más importante de este lugar?»",
            "Compara tu dibujo con esa respuesta. ¿Qué cambió?",
          ],
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
      tema: "orbita",
      leccion: "casco-puesto",
      edad: "5–10",
      quiz: {
        question: "¿Qué hace una exploradora antes de entrar a un lugar que no es suyo?",
        options: [
          {
            text: "Correr a sacar fotos de todo.",
            ok: false,
            why: "Eso es invadir, no explorar.",
          },
          {
            text: "Prepararse, pedir permiso y escuchar a quienes viven ahí.",
            ok: true,
            why: "El casco es una señal de preparación. El permiso es parte de la misión.",
          },
          {
            text: "Inventar cómo es, desde la nave.",
            ok: false,
            why: "Desde lejos parece un dibujo. De cerca, es otra historia.",
          },
        ],
      },
    },
  },
  {
    id: "explora-orbita--tejido-que-cuenta",
    title: "Un tejido que es un mapa",
    summary:
      "En los Andes, un textil puede guardar caminos, ríos y memoria. Las matemáticas y el arte se sientan juntas.",
    section: {
      id: "explora",
      label: "Explora",
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
          type: "say",
          who: "margarel",
          text: "La abuela de un taller en los Andes me dijo: las rayas recuerdan caminos. Yo llevaba el casco. Me lo saqué para mirar de cerca.",
        },
        {
          type: "text",
          title: "El patrón también es un dato",
          body: "Un telar repite un gesto y aparece un dibujo. Vector diría: es un algoritmo suave. Gadú diría: es un prototipo que se puede usar. Zizú diría: es un hogar de historias. Las tres cosas pueden ser ciertas.",
        },
        {
          type: "say",
          who: "vector",
          text: "Si cuento los cruces, encuentro un patrón. Si cambio una variable —el color, el salto—, el mapa cambia. Todavía no sabemos todo lo que guarda un textil. Eso también es información.",
        },
        {
          type: "callout",
          tone: "wow",
          text: "América Latina produce conocimiento: en observatorios, en huertas, en telares y en laboratorios. No es un capítulo especial. Es el terreno.",
        },
        {
          type: "try",
          title: "Mapa de rayas",
          steps: [
            "Elige tres colores.",
            "Inventa una regla: dos rayas, una pausa, una raya.",
            "Repítela en un papel o con lana.",
            "Ponle un nombre de lugar: un río, una casa, una persona.",
            "Explícale a alguien qué recuerdan tus rayas.",
          ],
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
      tema: "orbita",
      leccion: "tejido-que-cuenta",
      edad: "6–11",
      quiz: {
        question: "¿Por qué un tejido puede ser también un mapa?",
        options: [
          {
            text: "Porque es bonito.",
            ok: false,
            why: "Lo bonito no alcanza. Hay información adentro.",
          },
          {
            text: "Porque un patrón repetido puede guardar caminos, ríos y memoria.",
            ok: true,
            why: "Las rayas recuerdan. El arte y las matemáticas se sientan juntas.",
          },
          {
            text: "Porque todos los mapas son de lana.",
            ok: false,
            why: "Algunos son de papel. Este, de gestos repetidos.",
          },
        ],
      },
    },
  },
];
