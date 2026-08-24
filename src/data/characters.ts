export type CharacterSlug = "susu" | "vector" | "gadu" | "zizu" | "margarel";

export type Character = {
  slug: CharacterSlug;
  name: string;
  nameAccent: string;
  role: string;
  tagline: string;
  greeting: string;
  color: string;
  colorToken: string;
  pronoun: string;
  species: string;
  portrait: string;
  scene: string;
  bio: string;
  superpower: string;
  loves: string[];
  teaches: string[];
  quotes: string[];
  secret: string;
  parentNote: string;
  intelligence: string;
  territory: string;
};

export const characters: Character[] = [
  {
    slug: "susu",
    name: "Susu",
    nameAccent: "Susu",
    role: "Capitana de la nave",
    tagline: "¡Mi radar detecta una gran pregunta!",
    greeting:
      "¡Hola! Soy Susu. Si tienes una pregunta, ya podemos despegar. El radar está encendido.",
    color: "#F0B429",
    colorToken: "susu",
    pronoun: "ella",
    species: "Cockapoo curiosa",
    portrait: "/characters/susu.webp",
    scene: "/scenes/radar-susu.jpg",
    bio: "Susu es una cockapoo tierna, expresiva y valiente. Es la capitana de la tripulación, pero no su autoridad absoluta: su liderazgo consiste en hacer que cada integrante aporte lo mejor de sí. El Radar Estelar le avisa cuando una pregunta brilla. A veces quiere que todos estén bien tan rápido que intenta resolver una emoción antes de escucharla por completo. Está aprendiendo que liderar no es conocer todas las respuestas.",
    superpower: "Convertir una inquietud en una misión compartida.",
    loves: ["Las preguntas enormes", "La tripulación junta", "Las señales del radar", "Los lazos rosados"],
    teaches: ["Valores", "Colaboración", "Ciudadanía", "Futuros"],
    quotes: [
      "¡Mi radar detecta una gran pregunta!",
      "Antes de despegar, ¿qué sabemos y qué necesitamos descubrir?",
      "Nadie deja de preguntar por miedo a equivocarse. No en esta nave.",
    ],
    secret: "Guarda una galleta extra en su mochila por si alguien la necesita.",
    parentNote:
      "Susu modela alfabetización emocional y liderazgo relacional: nombra lo que siente, sostiene la pregunta y no resuelve por los demás. Es el ancla afectiva y la anfitriona del universo.",
    intelligence: "Relacional, ética y curiosa",
    territory: "Radar de Susu",
  },
  {
    slug: "vector",
    name: "Vector",
    nameAccent: "Vector",
    role: "Investigador de la nave",
    tagline: "Probemos una idea.",
    greeting:
      "¡Hola! Soy Vector. Tengo una hipótesis, pero todavía no una respuesta. Si cambiamos una sola cosa, podremos comparar.",
    color: "#5579DF",
    colorToken: "vector",
    pronoun: "él",
    species: "Niño investigador de lentes redondos",
    portrait: "/characters/vector.webp",
    scene: "/scenes/lab-vector.jpg",
    bio: "Vector es un investigador de energía nerd, lentes redondos y fascinación por los patrones. Disfruta medir, comparar, programar y construir modelos, pero su rasgo más importante no es saber: es querer comprobar. Cuando se entusiasma con un modelo puede olvidar que un modelo es una representación incompleta. Los datos ayudan a comprender; necesitan contexto y personas capaces de interpretar sus límites.",
    superpower: "Convertir una pregunta enorme en una prueba pequeña.",
    loves: ["Las hipótesis", "Los patrones", "Depurar un error", "Las gafas que brillan"],
    teaches: ["Ciencia", "Matemáticas", "Programación", "Pensamiento crítico"],
    quotes: [
      "Probemos una idea.",
      "Todavía no lo sabemos. Eso también es información.",
      "Un error no es un choque: es una pista para el siguiente intento.",
    ],
    secret: "Se pone la corbata al revés cuando está nervioso. Nadie se lo dice.",
    parentNote:
      "Vector encarna mentalidad de crecimiento y pensamiento científico. Sirve para desarmar el mito de «ser bueno en mates»: se trata de observar, comparar y reconocer incertidumbre.",
    intelligence: "Lógica, científica y computacional",
    territory: "Laboratorio Vector",
  },
  {
    slug: "gadu",
    name: "Gadú",
    nameAccent: "Gadú",
    role: "Inventor de la nave",
    tagline: "¿Y si lo hacemos al revés?",
    greeting:
      "¡Hola! Soy Gadú. Lanzo ideas como trompos. Algunas se caen. Una inesperada abre la puerta.",
    color: "#6C3CE0",
    colorToken: "gadu",
    pronoun: "elle / él",
    species: "Criatura del cosmos violeta",
    portrait: "/characters/gadu.webp",
    scene: "/scenes/taller-gadu.jpg",
    bio: "Gadú es un inventor excéntrico, rápido y visual. Lanza ideas como trompos: algunas se sostienen, otras caen y una inesperada abre la solución. Su función no es hacer ruido, sino romper una suposición que parecía fija. Puede enamorarse de la primera idea extravagante y avanzar antes de preguntar a quién ayuda. Una idea creativa se vuelve más poderosa cuando se prueba, se escucha a otros y se mejora.",
    superpower: "Mirar una regla desde más de un lado.",
    loves: ["Los prototipos", "Mezclar lo que no se junta", "El ritmo", "Las colas a rayas"],
    teaches: ["Arte", "Diseño", "Invención", "Prototipado"],
    quotes: [
      "¿Y si lo hacemos al revés?",
      "Primero lo dibujamos imposible. Después vemos qué parte podría funcionar.",
      "Un prototipo que se cae también entrega información.",
    ],
    secret: "Su cresta se pone más naranja cuando una idea le gusta de verdad.",
    parentNote:
      "Gadú es el catalizador divergente: permite el pensamiento lateral sin convertir la creatividad en caos. Ideal para desarmar el «yo no sirvo para inventar».",
    intelligence: "Divergente, artística y lúdica",
    territory: "Taller de Gadú",
  },
  {
    slug: "zizu",
    name: "Zizú",
    nameAccent: "Zizú",
    role: "Guardián de la nave",
    tagline: "Lo grande también se cuida con cosas pequeñas.",
    greeting:
      "Hola. Soy Zizú. Puedo ayudarte. Antes quiero saber cómo te gustaría que lo hiciera.",
    color: "#2EBE7A",
    colorToken: "zizu",
    pronoun: "él",
    species: "Guardián de enorme corazón",
    portrait: "/characters/zizu.webp",
    scene: "/scenes/bosque-red.jpg",
    bio: "Zizú parece un monstruo, pero posee una sensibilidad extraordinaria. Percibe efectos que otros pasan por alto: una planta dañada, alguien excluido, un ruido que asusta o una decisión conveniente hoy y costosa mañana. A veces teme que su tamaño cause daño y evita actuar. Cuidar no es impedir todo riesgo: es observar, preguntar, actuar con atención y reparar cuando haga falta.",
    superpower: "Ver que todo lo vivo está conectado — y que cuidar también es inteligencia.",
    loves: ["Los hogares chiquitos", "Reparar", "Los silencios", "Las lombrices del patio"],
    teaches: ["Sostenibilidad", "Biodiversidad", "Emociones", "Cuidado"],
    quotes: [
      "Lo grande también se cuida con cosas pequeñas.",
      "Puedo ayudarte. Antes quiero saber cómo te gustaría que lo hiciera.",
      "El planeta no es un fondo de pantalla. Es nuestro cuarto compartido.",
    ],
    secret: "Habla en voz baja con las lombrices. Dice que contestan lento, pero contestan.",
    parentNote:
      "Zizú traduce sostenibilidad a escala infantil: lo local, lo concreto, lo que se puede hacer hoy. Evita el eco-ansiedad y la culpa. Cuidar es agencia, no heroísmo.",
    intelligence: "Emocional, ecológica y ética",
    territory: "Bosque de Zizú",
  },
  {
    slug: "margarel",
    name: "Margarel",
    nameAccent: "Margarel",
    role: "Exploradora de la nave",
    tagline: "¡Casco puesto, vamos a descubrirlo!",
    greeting:
      "¡Hola! Soy Margarel. Desde lejos parecía un dibujo. De cerca, era otra historia. ¿Vamos al terreno?",
    color: "#FF5D8F",
    colorToken: "margarel",
    pronoun: "ella",
    species: "Exploradora y corresponsal de terreno",
    portrait: "/characters/margarel.webp",
    scene: "/scenes/orbita-ciudad.jpg",
    bio: "Margarel es exploradora, corresponsal y navegante. Necesita ver, tocar, escuchar y recorrer antes de sacar conclusiones. Lleva a la tripulación hacia ecosistemas, comunidades, talleres, observatorios y paisajes de América Latina y el mundo. Su entusiasmo a veces la hace entrar demasiado rápido, sin pedir permiso. Explorar también implica escuchar, respetar reglas locales y reconocer que llegar a un lugar no es comprenderlo de inmediato.",
    superpower: "Descubrir lo que no se ve mirando desde lejos.",
    loves: ["Las bitácoras", "Los mapas", "Pedir permiso", "Los pantalones de todos los colores"],
    teaches: ["Naturaleza", "Geografía", "Culturas", "Observación"],
    quotes: [
      "¡Casco puesto, vamos a descubrirlo!",
      "Cuando pregunté a quienes viven aquí, el mapa se hizo más verdadero.",
      "Llegar no es lo mismo que comprender.",
    ],
    secret: "Se pone nerviosa antes de mostrar un dibujo de bitácora. Después, no puede parar de sonreír.",
    parentNote:
      "Margarel ancla la exploración situada: América Latina como origen de conocimiento, no como decorado. Observar, pedir consentimiento y no hablar por otras personas.",
    intelligence: "Corporal, espacial y cultural",
    territory: "Órbita Margarel",
  },
];

export const characterMap = Object.fromEntries(characters.map((c) => [c.slug, c])) as Record<
  CharacterSlug,
  Character
>;

export function getCharacter(slug: string) {
  return characterMap[slug as CharacterSlug];
}
