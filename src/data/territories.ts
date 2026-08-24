import type { CharacterSlug } from "./characters";

export type Territory = {
  slug: string;
  topic: string;
  title: string;
  kicker: string;
  question: string;
  description: string;
  host: CharacterSlug;
  cta: string;
  cover: string;
  explores: string[];
  related: string[];
};

export const territories: Territory[] = [
  {
    slug: "radar",
    topic: "valores",
    title: "Radar de Susu",
    kicker: "Grandes preguntas",
    question: "Una pregunta puede cambiar toda la ruta",
    description:
      "Aquí viven las preguntas sobre futuro, convivencia y esas situaciones en las que necesitamos más de una mirada. No siempre hay una respuesta final. Sí hay una misión compartida.",
    host: "susu",
    cta: "Seguir una señal",
    cover: "/scenes/radar-susu.jpg",
    explores: [
      "¿Cómo elegimos cuando todas las ideas tienen algo valioso?",
      "¿Qué significa cuidar sin decidir por otra persona?",
      "¿Qué hacemos cuando descubrimos que estábamos equivocados?",
    ],
    related: ["valores", "futuro"],
  },
  {
    slug: "laboratorio",
    topic: "ciencia",
    title: "Laboratorio Vector",
    kicker: "Ciencia y código",
    question: "Una hipótesis no es una respuesta. Es una idea que podemos probar.",
    description:
      "Medimos sombras, buscamos patrones y descubrimos bugs. No necesitas ser “bueno para las matemáticas”. Solo una pregunta y ganas de mirar qué ocurre.",
    host: "vector",
    cta: "Probar una idea",
    cover: "/scenes/lab-vector.jpg",
    explores: [
      "¿Por qué las burbujas no son cuadradas?",
      "¿Qué ocurre cuando un algoritmo sigue una regla injusta?",
      "¿Puede una inteligencia artificial equivocarse?",
    ],
    related: ["ciencia", "matematicas", "programacion"],
  },
  {
    slug: "taller",
    topic: "arte",
    title: "Taller de Gadú",
    kicker: "Arte e invención",
    question: "Cambia una regla. Aparece un mundo.",
    description:
      "Una caja puede ser arquitectura y un sonido se puede pintar. Aquí un intento que no funciona puede convertirse en la parte más interesante.",
    host: "gadu",
    cta: "Inventar algo",
    cover: "/scenes/taller-gadu.jpg",
    explores: [
      "¿Para qué sirve un objeto que todavía no existe?",
      "¿Cómo se dibuja una canción?",
      "¿Puede una restricción producir más ideas?",
    ],
    related: ["arte"],
  },
  {
    slug: "bosque",
    topic: "ecologia",
    title: "Bosque de Zizú",
    kicker: "Planeta y cuidado",
    question: "Todo lo vivo forma parte de una relación",
    description:
      "Empezamos debajo de una piedra o entre dos personas que intentan escucharse. Cuidar no es hacerlo todo perfecto. Es observar conexiones y encontrar una acción a nuestra escala.",
    host: "zizu",
    cta: "Seguir una huella",
    cover: "/scenes/bosque-red.jpg",
    explores: [
      "¿Los árboles se mandan señales?",
      "¿Una ciudad también puede ser hogar de animales?",
      "¿Por qué preguntar antes de abrazar también es cuidado?",
    ],
    related: ["ecologia"],
  },
  {
    slug: "orbita",
    topic: "orbita",
    title: "Órbita Margarel",
    kicker: "Expediciones",
    question: "Para comprender un lugar, primero hay que escucharlo",
    description:
      "Una foto desde arriba nunca cuenta la historia completa. Visitamos humedales, ciudades, talleres y comunidades. América Latina produce conocimiento y futuro.",
    host: "margarel",
    cta: "Preparar el casco",
    cover: "/scenes/orbita-ciudad.jpg",
    explores: [
      "¿Qué conocimiento contiene un tejido, una plaza o un alimento?",
      "¿Cómo se diseña para vivir con lluvia, altura o calor?",
      "¿Qué cambiaría si miraras tu barrio como explorador?",
    ],
    related: ["orbita"],
  },
];
