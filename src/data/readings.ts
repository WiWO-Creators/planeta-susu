import type { CharacterSlug } from "./characters";

export type ReadingKind = "ficha" | "rima" | "lab" | "carta";

export type Reading = {
  id: string;
  kind: ReadingKind;
  title: string;
  kicker: string;
  host: CharacterSlug;
  minutes: number;
  cover: string;
  body: { title?: string; text: string }[];
  tryAtHome?: string;
};

export const readings: Reading[] = [
  {
    id: "ficha-gota",
    kind: "ficha",
    title: "Una gota es una viajera",
    kicker: "Ficha curiosa",
    host: "zizu",
    minutes: 2,
    cover: "/scenes/zizu-rio.jpg",
    body: [
      { text: "El agua de tu vaso puede haber sido nieve, nube, lágrima de dinosaurio o charco de ayer. No hay agua nueva: hay agua que da vueltas." },
      { title: "Dato para guardar", text: "Una nube no pesa «nada»: un cúmulo mediano puede pesar como muchos elefantes. Flota porque está hecha de gotitas muy, muy chiquitas." },
    ],
    tryAtHome: "Deja un vaso con agua marcada (una gota de colorante) al sol. Mira cómo baja el nivel. ¿A dónde se fue la viajera?",
  },
  {
    id: "ficha-cielo",
    kind: "ficha",
    title: "El aire elige el azul",
    kicker: "Ficha curiosa",
    host: "gadu",
    minutes: 2,
    cover: "/scenes/gadu-estrellas.jpg",
    body: [
      { text: "La luz del sol viaja con un equipo de colores. Al chocar con el aire, el azul se dispersa para todos lados. Por eso el cielo nos saluda en azul." },
      { title: "Y al atardecer", text: "Cuando el sol se acuesta, la luz recorre más aire. El azul se gasta en el camino y quedan el naranja y el rojo." },
    ],
  },
  {
    id: "ficha-diez",
    kind: "ficha",
    title: "El 10 es un amigo",
    kicker: "Ficha curiosa",
    host: "vector",
    minutes: 2,
    cover: "/scenes/vector-lab.jpg",
    body: [
      { text: "7+3, 6+4, 8+2, 9+1, 5+5. Son parejas que viven en el 10. Si las reconoces, sumar se vuelve un saludo, no un susto." },
      { title: "Truco", text: "Los dedos son un ábaco que no se pierde. Úsalos sin vergüenza: Vector también." },
    ],
  },
  {
    id: "ficha-bug",
    kind: "ficha",
    title: "Un bug es una pista",
    kicker: "Ficha curiosa",
    host: "gadu",
    minutes: 2,
    cover: "/scenes/vector-lab.jpg",
    body: [
      { text: "«Bug» significa bicho. En programación es un error en los pasos. No es una sentencia: es información. Se mira con lupa y se edita una flecha." },
    ],
    tryAtHome: "Escribe los pasos para hacer un té. Pruébalos al revés. Ríanse. Reescriban.",
  },
  {
    id: "ficha-lombriz",
    kind: "ficha",
    title: "Las lombrices tienen oficio",
    kicker: "Ficha curiosa",
    host: "zizu",
    minutes: 2,
    cover: "/scenes/zizu-patio.jpg",
    body: [
      { text: "Una lombriz come tierra y deja un abono que las plantas adoran. No es basura: es un laboratorio subterráneo. Zizú dice que contestan lento, pero contestan." },
    ],
  },
  {
    id: "ficha-telar",
    kind: "ficha",
    title: "Las rayas recuerdan caminos",
    kicker: "Ficha curiosa",
    host: "margarel",
    minutes: 2,
    cover: "/scenes/margarel-taller.jpg",
    body: [
      { text: "Un telar es un algoritmo suave: un gesto que se repite y aparece un dibujo. En muchos pueblos de los Andes, los textiles guardan historias que no caben en un cuaderno." },
    ],
  },
  {
    id: "ficha-corazon",
    kind: "ficha",
    title: "Las emociones son mensajes",
    kicker: "Ficha curiosa",
    host: "susu",
    minutes: 2,
    cover: "/scenes/susu-lee.jpg",
    body: [
      { text: "El enojo dice «hay un límite». El miedo dice «hay algo que cuidar». La tristeza dice «algo importaba». Nombrarlas no las apaga: las ilumina." },
    ],
  },
  {
    id: "ficha-robot",
    kind: "ficha",
    title: "Un robot hereda nuestras reglas",
    kicker: "Ficha curiosa",
    host: "vector",
    minutes: 2,
    cover: "/scenes/gadu-juega.jpg",
    body: [
      { text: "Una máquina no elige sola qué está bien. Hace lo que las personas escribieron. Por eso, antes de inventar un robot, se escriben tres reglas que nunca debe romper." },
    ],
  },
  {
    id: "rima-gota",
    kind: "rima",
    title: "Rima de la gota",
    kicker: "Para leer en voz alta",
    host: "zizu",
    minutes: 1,
    cover: "/scenes/zizu-rio.jpg",
    body: [
      { text: "Sube la gota, baja la gota,\nse esconde en la raíz y en la bota.\nSi el grifo canta de más,\nla gota se cansa y se va." },
    ],
  },
  {
    id: "rima-gadu",
    kind: "rima",
    title: "La cola de Gadú",
    kicker: "Para leer en voz alta",
    host: "gadu",
    minutes: 1,
    cover: "/scenes/gadu-estrellas.jpg",
    body: [
      { text: "Violeta, naranja, violeta, naranja:\nla cola de Gadú nunca se cansa.\nSi adivinas el color que sigue,\nuna estrella en el cielo te sigue." },
    ],
  },
  {
    id: "rima-asiento",
    kind: "rima",
    title: "Hay lugar",
    kicker: "Para leer en voz alta",
    host: "susu",
    minutes: 1,
    cover: "/scenes/susu-lee.jpg",
    body: [
      { text: "Si el recreo se queda chico,\nse inventa una regla y un asiento.\nDiferente no es un lío:\ndiferente es un cuento." },
    ],
  },
  {
    id: "rima-mancha",
    kind: "rima",
    title: "Mancha valiente",
    kicker: "Para leer en voz alta",
    host: "margarel",
    minutes: 1,
    cover: "/scenes/margarel-taller.jpg",
    body: [
      { text: "Rosa, verde, un poco de sol.\nNo era un perro: era un martes, un gol.\nSi alguien corrige tu hoja al pasar,\ninvítalo a pintar en vez de borrar." },
    ],
  },
  {
    id: "rima-vector",
    kind: "rima",
    title: "Aún no lo sé",
    kicker: "Para leer en voz alta",
    host: "vector",
    minutes: 1,
    cover: "/scenes/vector-lab.jpg",
    body: [
      { text: "«Aún no lo sé» no es un fallo:\nes el principio de un hallazgo.\nSe anota, se prueba, se ríe,\ny el error se vuelve un aliado." },
    ],
  },
  {
    id: "lab-nube",
    kind: "lab",
    title: "La nube en un vaso",
    kicker: "Laboratorio en casa",
    host: "zizu",
    minutes: 10,
    cover: "/scenes/zizu-patio.jpg",
    body: [
      { text: "Un vaso con agua caliente (pide ayuda). Un plato arriba. Cubitos de hielo sobre el plato. En unos minutos aparece una nubecita. Eso también pasa en el cielo." },
      { title: "Qué observar", text: "El vapor sube. El frío lo junta. Gota a gota, una nube de cocina." },
    ],
    tryAtHome: "Dibuja el viaje: vaso → nube → gota → vaso. Pégalo en la heladera.",
  },
  {
    id: "lab-semilla",
    kind: "lab",
    title: "Una semilla con nombre",
    kicker: "Laboratorio en casa",
    host: "zizu",
    minutes: 15,
    cover: "/scenes/zizu-rio.jpg",
    body: [
      { text: "Un vaso, algodón húmedo, una semilla de lenteja o poroto. Ponle nombre. Mírala tres días. Las raíces buscan abajo; el tallo, la luz." },
    ],
  },
  {
    id: "lab-imanes",
    kind: "lab",
    title: "Cacería de imanes",
    kicker: "Laboratorio en casa",
    host: "vector",
    minutes: 10,
    cover: "/scenes/vector-lab.jpg",
    body: [
      { text: "Si hay un imán en casa (de la heladera sirve), recorre la cocina: ¿qué se pega y qué no? El metal no es todo igual. Hagan una tabla: pega / no pega." },
    ],
  },
  {
    id: "lab-colores",
    kind: "lab",
    title: "El arcoíris del filtro",
    kicker: "Laboratorio en casa",
    host: "margarel",
    minutes: 12,
    cover: "/scenes/margarel-taller.jpg",
    body: [
      { text: "Filtro de café o papel, puntos de marcador cerca del borde, un dedo de agua en un plato. El papel bebe. Algunos colores viajan más lejos. Eso se llama cromatografía: un desfile de tintas." },
    ],
  },
  {
    id: "ficha-sombra",
    kind: "ficha",
    title: "Las sombras también juegan",
    kicker: "Ficha curiosa",
    host: "zizu",
    minutes: 2,
    cover: "/scenes/patio-sombras.jpg",
    body: [
      { text: "Una sombra es un recorte de luz. Si el sol se acuesta, las sombras se alargan. Por eso a última hora el patio parece un teatro." },
      { title: "Prueba", text: "A mediodía tu sombra es chaparrita. Al atardecer, se estira. No creciste: se movió el foco." },
    ],
  },
  {
    id: "ficha-contar",
    kind: "ficha",
    title: "Contar es mirar despacio",
    kicker: "Ficha curiosa",
    host: "vector",
    minutes: 2,
    cover: "/scenes/planetas-contar.jpg",
    body: [
      { text: "Cuando cuentas planetas, no estás recitando: estás poniendo un nombre a cada uno. El número es un apodo de la cantidad." },
    ],
  },
  {
    id: "ficha-receta",
    kind: "ficha",
    title: "Las recetas son programas",
    kicker: "Ficha curiosa",
    host: "gadu",
    minutes: 2,
    cover: "/scenes/cocina-lab.jpg",
    body: [
      { text: "Si pones el pan después de morder, el sándwich no existe. El orden importa. Un algoritmo es eso: una receta que una máquina (o un amigo) puede repetir." },
    ],
    tryAtHome: "Escriban los pasos para ponerse los zapatos. Pruébenlos al revés. Ríanse. Reescriban.",
  },
  {
    id: "ficha-eco",
    kind: "ficha",
    title: "El eco también practica",
    kicker: "Ficha curiosa",
    host: "margarel",
    minutes: 2,
    cover: "/scenes/jardin-rimas.jpg",
    body: [
      { text: "Repetir una secuencia de colores o sonidos no es copiar: es entrenar la memoria musical. El patio también tiene oído." },
    ],
  },
  {
    id: "rima-sol",
    kind: "rima",
    title: "Rima del sol",
    kicker: "Para leer en voz alta",
    host: "zizu",
    minutes: 1,
    cover: "/scenes/ciclo-agua.jpg",
    body: [
      { text: "El sol calienta, el mar suspira,\nel vapor se sube y la nube se estira.\nSi la gota se cansa de volar,\nvuelve al río para descansar." },
    ],
  },
  {
    id: "rima-sombra",
    kind: "rima",
    title: "Rima de la sombra",
    kicker: "Para leer en voz alta",
    host: "susu",
    minutes: 1,
    cover: "/scenes/patio-sombras.jpg",
    body: [
      { text: "Si te escondes, tu sombra te encuentra.\nSi te estiras, tu sombra se agranda.\nNo es un fantasma ni una cuenta:\nes luz que se sienta a tu banda." },
    ],
  },
  {
    id: "rima-estrella",
    kind: "rima",
    title: "Rima de la estrella",
    kicker: "Para leer en voz alta",
    host: "gadu",
    minutes: 1,
    cover: "/scenes/misiones.jpg",
    body: [
      { text: "Una estrella no se gasta al usarla.\nSe guarda en el álbum, se vuelve a mirar.\nSi hoy juntaste apenas una,\nmañana pueden ser un mar." },
    ],
  },
  {
    id: "lab-sombra",
    kind: "lab",
    title: "Teatro de sombras",
    kicker: "Laboratorio en casa",
    host: "zizu",
    minutes: 12,
    cover: "/scenes/patio-sombras.jpg",
    body: [
      { text: "Una linterna, una pared y las manos. Prueben un perro, un pico, un corazón. Después, acerquen la mano: la sombra crece. Aléjenla: se achica. El tamaño depende de la luz, no del miedo." },
    ],
    tryAtHome: "Dibujen el contorno de una sombra al atardecer. Mañana a mediodía, comparen.",
  },
  {
    id: "lab-pasos",
    kind: "lab",
    title: "La receta del diente de león",
    kicker: "Laboratorio en casa",
    host: "gadu",
    minutes: 8,
    cover: "/scenes/zizu-patio.jpg",
    body: [
      { text: "Si hay un diente de león, soplen. Cuenten cuántas semillitas vuelan. Cada una es un programa: «viaja con el viento y, si hay tierra, empieza»." },
    ],
  },
  {
    id: "carta-lugar",
    kind: "carta",
    title: "Hay lugar",
    kicker: "Carta del recreo",
    host: "susu",
    minutes: 1,
    cover: "/scenes/semaforo-emociones.jpg",
    body: [
      { text: "Dos palabras que agrandan un patio. No arreglan todo de una vez. Avisan: nadie se queda al borde." },
    ],
  },
  {
    id: "carta-error",
    kind: "carta",
    title: "Aún no lo sé",
    kicker: "Carta del recreo",
    host: "vector",
    minutes: 1,
    cover: "/scenes/vector-lab.jpg",
    body: [
      { text: "No es un fallo. Es el principio de un hallazgo. En Planeta Susu esa frase es una fiesta." },
    ],
  },
  {
    id: "carta-diferente",
    kind: "carta",
    title: "Diferente es información",
    kicker: "Carta del recreo",
    host: "gadu",
    minutes: 1,
    cover: "/scenes/gadu-estrellas.jpg",
    body: [
      { text: "Gadú llegó un martes. Traía otra forma de mirar. Lo raro no se corrige: se pregunta." },
    ],
  },
  {
    id: "carta-rio",
    kind: "carta",
    title: "El desagüe no es un portal",
    kicker: "Carta del recreo",
    host: "zizu",
    minutes: 1,
    cover: "/scenes/zizu-rio.jpg",
    body: [
      { text: "Es una boca del río. Lo que tiramos viaja. El agua es de todas." },
    ],
  },
  {
    id: "carta-mancha",
    kind: "carta",
    title: "No hay color equivocado",
    kicker: "Carta del recreo",
    host: "margarel",
    minutes: 1,
    cover: "/scenes/margarel-taller.jpg",
    body: [
      { text: "Hay combinaciones que todavía no existen. Una mancha valiente vale más que una hoja en blanco perfecta." },
    ],
  },
  {
    id: "carta-bug",
    kind: "carta",
    title: "Un bug es una pista",
    kicker: "Carta del recreo",
    host: "gadu",
    minutes: 1,
    cover: "/scenes/gadu-juega.jpg",
    body: [
      { text: "No es vergüenza. Se mira con lupa y se edita una flecha. Los programas, como las recetas, se pueden mejorar." },
    ],
  },
  {
    id: "carta-diez",
    kind: "carta",
    title: "El 10 tiene parejas",
    kicker: "Carta del recreo",
    host: "vector",
    minutes: 1,
    cover: "/scenes/planetas-contar.jpg",
    body: [
      { text: "7+3, 6+4, 8+2, 9+1, 5+5. Si las reconoces, sumar se vuelve un saludo." },
    ],
  },
  {
    id: "carta-estrella",
    kind: "carta",
    title: "Las estrellas no se gastan",
    kicker: "Carta del recreo",
    host: "susu",
    minutes: 1,
    cover: "/scenes/fiesta-estrellas.jpg",
    body: [
      { text: "Se guardan en el álbum. Una pregunta bien pensada también brilla. Mañana puede haber más." },
    ],
  },
];

export function getReading(id: string) {
  return readings.find((r) => r.id === id);
}

export const KIND_LABEL: Record<ReadingKind, string> = {
  ficha: "Fichas curiosas",
  rima: "Rimas",
  lab: "Laboratorios",
  carta: "Cartas del recreo",
};

export const KIND_ORDER: ReadingKind[] = ["carta", "ficha", "rima", "lab"];

