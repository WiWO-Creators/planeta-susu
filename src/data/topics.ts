import type { CharacterSlug } from "./characters";

/**
 * Responsabilidad: los ocho mundos de Explora: quién los habita, qué prometen a
 * quien los visita y qué le dicen a una persona adulta.
 * Usado por: routes/explora/, routes/padres/index.tsx y data/territories.ts.
 * NO hace: no contiene lecciones. Una lección se publica y vive en el archivo
 *   editorial (data/articles/explora.ts), enlazada a su mundo por `extra.tema`.
 *
 * Un mundo no es una pieza publicable: es el escenario que las agrupa, con su
 * anfitrión y su color. Por eso sigue siendo un tipo propio del sitio y no una
 * nota del contrato.
 */

export type Topic = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  host: CharacterSlug;
  cohosts: CharacterSlug[];
  colorToken: string;
  emojiLabel: string;
  forKids: string;
  forParents: string;
};

export const topics: Topic[] = [
  {
    slug: "ecologia",
    title: "Bosque de Zizú",
    kicker: "¿Quién o qué necesita cuidado en este sistema?",
    description:
      "Zizú percibe lo que otros pasan por alto: un río triste, una planta dañada, una decisión conveniente hoy y costosa mañana. Cuidar también es una forma de inteligencia.",
    host: "zizu",
    cohosts: ["susu", "margarel"],
    colorToken: "zizu",
    emojiLabel: "bosque",
    forKids: "Misiones para observar, reparar y cuidar lo vivo — a la escala de un patio.",
    forParents:
      "Sostenibilidad con agencia concreta, sin culpa ni eco-ansiedad. Acción proporcional.",
  },
  {
    slug: "ciencia",
    title: "Laboratorio Vector",
    kicker: "¿Cómo lo observamos, medimos o comprobamos?",
    description:
      "Vector convierte preguntas enormes en pruebas pequeñas. Gadú propone el revés. Juntos distinguen hipótesis, evidencia y lo que todavía no sabemos.",
    host: "vector",
    cohosts: ["gadu"],
    colorToken: "vector",
    emojiLabel: "cosmos",
    forKids:
      "Por qué el cielo es azul, cómo funcionan los sentidos y qué significa «todavía no lo sabemos».",
    forParents:
      "Ciencia como práctica: observar, conjeturar, contrastar. La incertidumbre se nombra.",
  },
  {
    slug: "matematicas",
    title: "Matemáticas invisibles",
    kicker: "¿Qué patrón se esconde aquí?",
    description:
      "Los números son un idioma para mirar con cuidado. Vector organiza. Gadú desordena a propósito. El patrón aparece.",
    host: "vector",
    cohosts: ["gadu"],
    colorToken: "vector",
    emojiLabel: "patron",
    forKids: "Patrones, colecciones y el 10 como amigo. Contar es una forma de observar.",
    forParents:
      "Antes del símbolo, la acción. Mentalidad de crecimiento, no identidad de «bueno o malo en mates».",
  },
  {
    slug: "programacion",
    title: "Código Cósmico",
    kicker: "¿Qué pasa si cambiamos una instrucción?",
    description:
      "Un programa es una receta con orden. Vector verifica. Gadú lo prueba al revés. Un error es información para el siguiente intento.",
    host: "vector",
    cohosts: ["gadu"],
    colorToken: "gadu",
    emojiLabel: "código",
    forKids: "Secuencias, robots de cartón y el arte de descomponer un problema.",
    forParents:
      "Pensamiento computacional: descomponer, reconocer patrones, abstraer, algoritmos. Pantalla opcional.",
  },
  {
    slug: "arte",
    title: "Taller de Gadú",
    kicker: "¿Y si lo hacemos al revés?",
    description:
      "Gadú abre el taller: prototipos, mezclas y el permiso de dibujar imposible. Margarel trae el terreno, el telar y los colores que recuerdan caminos.",
    host: "gadu",
    cohosts: ["margarel", "susu"],
    colorToken: "gadu",
    emojiLabel: "taller",
    forKids: "Inventar, mezclar, pintar y transformar un error en prototipo.",
    forParents:
      "Proceso antes que producto. Creatividad con prueba. Identidad latinoamericana en el telar y el color.",
  },
  {
    slug: "valores",
    title: "Radar de Susu",
    kicker: "¿Qué gran pregunta conecta esto con nosotras y nosotros?",
    description:
      "Susu detecta la señal. Una emoción, un asiento que falta, una amistad que piensa distinto. La misión es sostener la pregunta, no resolverla por los demás.",
    host: "susu",
    cohosts: ["zizu", "margarel"],
    colorToken: "susu",
    emojiLabel: "radar",
    forKids: "Nombrar emociones, pedir permiso, dejar lugar y cambiar de opinión.",
    forParents: "Alfabetización emocional y límites cálidos. Valores que se viven. Sin moralina.",
  },
  {
    slug: "futuro",
    title: "Futuros posibles",
    kicker: "El futuro no viene terminado.",
    description:
      "Oficios que todavía no tienen nombre, máquinas con autores y la idea canónica: el futuro se imagina, se cuida y se construye. En plural.",
    host: "susu",
    cohosts: ["vector", "gadu", "zizu", "margarel"],
    colorToken: "orange",
    emojiLabel: "horizonte",
    forKids: "Inventar oficios, diseñar con criterio y preguntar quién decide las reglas.",
    forParents:
      "Agencia proporcional y alfabetización de futuros. Sin distopías ni «salvar el planeta está en tus manos».",
  },
  {
    slug: "orbita",
    title: "Órbita Margarel",
    kicker: "¿Qué cambia cuando vamos al lugar?",
    description:
      "Margarel necesita ver, tocar y escuchar antes de concluir. América Latina no es un decorado: es origen de ciencia, diseño y futuros. Llegar no es lo mismo que comprender.",
    host: "margarel",
    cohosts: ["zizu", "vector"],
    colorToken: "margarel",
    emojiLabel: "orbita",
    forKids: "Bitácoras, mapas, pedir permiso y descubrir lo que no se ve desde lejos.",
    forParents:
      "Exploración situada, consentimiento y una mirada latinoamericana que produce conocimiento.",
  },
];

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}
