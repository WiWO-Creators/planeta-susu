import type { CharacterSlug } from "./characters";

export type ClubQ = {
  q: string;
  a: string;
  next: string;
  host: CharacterSlug;
};

export const clubQuestions: ClubQ[] = [
  {
    q: "¿Los peces tienen sed?",
    a: "Los peces necesitan mantener un equilibrio de agua y sales, pero no todos lo hacen igual. Los de agua salada pierden agua y muchas especies beben agua de mar. Los de agua dulce reciben agua por sus superficies y suelen beber muy poco. “Tener sed” como lo sentimos nosotras es más difícil de afirmar.",
    next: "¿Cómo cambia este equilibrio en un pez que viaja entre río y océano?",
    host: "zizu",
  },
  {
    q: "¿Por qué bostezamos?",
    a: "Bostezar ocurre en muchas especies y puede relacionarse con sueño, atención y contagio social. Todavía no existe una sola explicación que resuelva todos los casos. Es un buen ejemplo de algo cotidiano que la ciencia sigue investigando.",
    next: "¿Por qué ver o leer la palabra “bostezo” puede darte ganas de hacerlo?",
    host: "susu",
  },
  {
    q: "¿Las plantas duermen?",
    a: "No duermen como una persona, pero muchas cambian su actividad con ciclos de luz y oscuridad. Algunas hojas se pliegan de noche. Decir que “duermen” puede ser una metáfora, si recordamos que no tienen cerebro ni sueño humano.",
    next: "¿Qué plantas de tu entorno cambian entre día y noche?",
    host: "zizu",
  },
  {
    q: "¿Puede llover en otro planeta?",
    a: "Sí, si usamos “lluvia” para sustancias que caen desde una atmósfera. En otros mundos puede llover materiales distintos del agua. Algunas lluvias lejanas todavía son inferencias, no escenas filmadas.",
    next: "¿Qué necesita un mundo para formar nubes?",
    host: "margarel",
  },
  {
    q: "¿Por qué el cielo no tiene el mismo color todo el día?",
    a: "La luz del Sol contiene muchos colores. Al atravesar la atmósfera se dispersa. De día destaca el azul. Al atardecer, la luz recorre más atmósfera y suelen aparecer rojos y naranjas.",
    next: "¿El cielo se vería igual desde un mundo con otra atmósfera?",
    host: "vector",
  },
  {
    q: "¿El cero es algo o es nada?",
    a: "El cero puede representar que no hay objetos en un conjunto, y también es un número con propiedades importantes. Es una forma de representar una ausencia y, al mismo tiempo, una idea muy poderosa.",
    next: "¿Qué cambiaría si intentaras escribir 105 sin usar cero?",
    host: "vector",
  },
  {
    q: "¿Los robots sienten?",
    a: "Una máquina puede reconocer patrones y responder de una forma que parece emocional. Eso no demuestra una experiencia interna. Simular una emoción y sentirla no son lo mismo.",
    next: "Si una máquina parece triste, ¿por qué una persona podría sentir ganas de cuidarla?",
    host: "gadu",
  },
  {
    q: "¿Quién inventó las matemáticas?",
    a: "No fueron inventadas por una sola persona ni en un solo lugar. Muchas culturas desarrollaron maneras de contar, medir, comerciar y observar el cielo. Las matemáticas son una creación humana colectiva.",
    next: "¿Qué necesidad cotidiana pudo originar una forma de medir?",
    host: "vector",
  },
  {
    q: "¿Por qué olvidamos?",
    a: "La memoria no guarda una copia perfecta. El cerebro selecciona, reconstruye y conecta. Olvidar también evita que cada detalle compita todo el tiempo por nuestra atención.",
    next: "¿Qué ayuda más a recordar: repetir, explicar, dibujar o relacionar una idea?",
    host: "susu",
  },
  {
    q: "¿Puede un animal entender una palabra?",
    a: "Algunos animales pueden aprender que ciertos sonidos se relacionan con objetos o acciones. Eso no significa que comprendan el lenguaje exactamente como una persona.",
    next: "¿Cómo demostrarías que alguien comprendió y no solo repitió?",
    host: "zizu",
  },
  {
    q: "¿Por qué el mar es salado?",
    a: "El agua desgasta rocas y transporta minerales hacia ríos y océanos. El agua puede evaporarse, pero muchas sales quedan. La cantidad de sal no es idéntica en todos los mares.",
    next: "¿Por qué cerca de la desembocadura de un río el agua puede ser menos salada?",
    host: "margarel",
  },
  {
    q: "¿Las hormigas tienen una reina que manda?",
    a: "La palabra “reina” puede confundir. En muchas especies es la hembra reproductora principal, pero no dirige cada decisión. El comportamiento de una colonia surge de señales y reglas simples entre muchas hormigas.",
    next: "¿Cómo puede aparecer una decisión colectiva sin una jefa que dé órdenes?",
    host: "zizu",
  },
  {
    q: "¿Se acaba internet si todos entran al mismo tiempo?",
    a: "Internet no es un único objeto: es una red enorme. Mucha demanda puede volver lento un servicio. La red completa suele redirigir tráfico, pero también tiene límites físicos y energéticos.",
    next: "¿Qué recorrido hace un mensaje antes de llegar a otra pantalla?",
    host: "vector",
  },
  {
    q: "¿Una sombra pesa?",
    a: "Una sombra no es un objeto añadido, sino una zona que recibe menos luz. No tiene masa propia como una piedra. La luz puede ejercer una presión extremadamente pequeña, pero eso es otra historia.",
    next: "¿Puede existir una sombra sin una fuente de luz?",
    host: "vector",
  },
  {
    q: "¿Por qué algunas ideas dan miedo aunque no sean reales?",
    a: "El cuerpo puede responder a una imagen o posibilidad antes de comprobar si hay un peligro. Imaginar ayuda a anticipar, pero a veces la alarma se activa con una historia. Podemos detenernos, nombrar lo que sentimos y buscar a una persona de confianza.",
    next: "¿Qué señales te ayudan a distinguir una imaginación inquietante de un peligro presente?",
    host: "susu",
  },
];
