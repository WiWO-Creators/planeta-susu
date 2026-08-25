import type { CharacterSlug } from "./characters";

export type Panel = {
  bg: "yellow" | "cream" | "vector" | "gadu" | "zizu" | "margarel" | "susu" | "teal" | "sky" | "ink";
  who?: CharacterSlug;
  narrator?: boolean;
  text: string;
};

export type Story = {
  id: string;
  title: string;
  subtitle: string;
  hosts: CharacterSlug[];
  minutes: number;
  theme: string;
  colorToken: string;
  panels: Panel[];
};

export const stories: Story[] = [
  {
    id: "rio-triste",
    title: "El día que el río se puso triste",
    subtitle: "Una expedición de Zizú con botas, lupa y amigos.",
    hosts: ["zizu", "susu", "gadu"],
    minutes: 5,
    theme: "Ecología",
    colorToken: "zizu",
    panels: [
      {
        bg: "cream",
        narrator: true,
        text: "Una mañana, el río del barrio no cantaba. El agua iba despacio, como quien no quiere llegar.",
      },
      {
        bg: "zizu",
        who: "zizu",
        text: "«Los ríos no se enojan porque sí», dijo Zizú. «Vamos a investigar.» Se abrochó el chaleco. Once bolsillos. Un sándwich.",
      },
      {
        bg: "gadu",
        who: "gadu",
        text: "Gadú metió un pie violeta. «En mi planeta los ríos hablan en burbujas. Este habla poco.»",
      },
      {
        bg: "susu",
        who: "susu",
        text: "Susu encontró una botella. Y un envoltorio. Y una tristeza chiquita, del tamaño de una tapa.",
      },
      {
        bg: "teal",
        who: "zizu",
        text: "No era magia oscura. Era basura que había tomado el camino equivocado. El desagüe no es un portal: es una boca del río.",
      },
      {
        bg: "yellow",
        who: "susu",
        text: "Juntaron lo que pudieron. Una señora se sumó. Un niño. Después, otro. El río no se arregló en un día. Pero volvió a hacer un plic.",
      },
      {
        bg: "cream",
        narrator: true,
        text: "Esa noche, Zizú escribió en su cuaderno: «Un río se alegra cuando las personas recuerdan que el agua es de todas.»",
      },
    ],
  },
  {
    id: "planeta-preguntas",
    title: "El planeta de las preguntas",
    subtitle: "Gadú no da nada por obvio. Vector toma nota.",
    hosts: ["gadu", "vector"],
    minutes: 5,
    theme: "Ciencia",
    colorToken: "gadu",
    panels: [
      {
        bg: "gadu",
        who: "gadu",
        text: "Gadú señaló el cielo. «¿Por qué es azul? En mi casa a veces es lila.»",
      },
      {
        bg: "vector",
        who: "vector",
        text: "Vector se ajustó las gafas. Brillaron. «Aún no lo sé del todo. ¿Lo averiguamos?» Esa frase, en Planeta Susu, es una fiesta.",
      },
      {
        bg: "sky",
        narrator: true,
        text: "Hicieron un vaso con agua, una gota de leche y una linterna. El vaso se puso un poco cielo.",
      },
      {
        bg: "yellow",
        who: "gadu",
        text: "«¡El aire elige el azul para saludarnos!», gritó Gadú. La cresta se le puso más naranja.",
      },
      {
        bg: "cream",
        who: "vector",
        text: "Vector anotó: hipótesis, prueba, asombro. Y abajo, con letra chica: «volver a preguntar mañana».",
      },
    ],
  },
  {
    id: "numero-escondido",
    title: "Un número que se escondió",
    subtitle: "Tres más dos no es un truco. Es un reencuentro.",
    hosts: ["vector", "gadu", "margarel"],
    minutes: 4,
    theme: "Matemáticas",
    colorToken: "vector",
    panels: [
      {
        bg: "vector",
        who: "vector",
        text: "El número 5 se escondió. Vector lo buscó detrás de las cortinas. No estaba.",
      },
      {
        bg: "margarel",
        who: "margarel",
        text: "«Tal vez se disfrazó de color», dijo Margarel, que ve números hasta en las rayas.",
      },
      {
        bg: "gadu",
        who: "gadu",
        text: "Gadú puso 3 planetas de cartón. Después 2. Los miró de reojo. «Siguen siendo planetas. Pero juntos son…»",
      },
      {
        bg: "yellow",
        who: "vector",
        text: "«¡Cinco!» El 5 no se había ido. Estaba en la mesa, disfrazado de colección. Sumar es juntar lo que ya estaba.",
      },
      {
        bg: "cream",
        narrator: true,
        text: "Desde entonces, cuando un número se esconde, en Planeta Susu lo buscan con las manos, no con prisa.",
      },
    ],
  },
  {
    id: "robot-carton",
    title: "El primer robot de cartón",
    subtitle: "Un bug, un sándwich y una receta que se puede mejorar.",
    hosts: ["vector", "gadu", "zizu"],
    minutes: 5,
    theme: "Programación",
    colorToken: "gadu",
    panels: [
      {
        bg: "cream",
        who: "vector",
        text: "Vector pegó cajas. Le puso ojos. Lo bautizó C-0 (se lee «Cero», pero con cariño).",
      },
      {
        bg: "gadu",
        who: "gadu",
        text: "Escribieron flechas en papeles: arriba, arriba, derecha. C-0 avanzó… y besó una silla.",
      },
      {
        bg: "zizu",
        who: "zizu",
        text: "«Es un bug», dijo Zizú, que también cataloga bichos de verdad. «No es vergüenza. Es una pista.»",
      },
      {
        bg: "vector",
        who: "vector",
        text: "Cambiaron una flecha. C-0 llegó al sándwich. El sándwich era la meta. Las metas con hambre funcionan mejor.",
      },
      {
        bg: "yellow",
        narrator: true,
        text: "Esa tarde aprendieron que un programa no tiene que salir bien a la primera. Tiene que poder editarse.",
      },
    ],
  },
  {
    id: "colores-abuela",
    title: "Los colores de la abuela de Margarel",
    subtitle: "Un telar, un camino y un pantalón que es un mapa.",
    hosts: ["margarel", "susu"],
    minutes: 5,
    theme: "Arte",
    colorToken: "margarel",
    panels: [
      {
        bg: "margarel",
        who: "margarel",
        text: "Margarel sacó un ovillo rosa. «La abuela dice que las rayas recuerdan los caminos.»",
      },
      {
        bg: "susu",
        who: "susu",
        text: "Susu sostuvo la lana con las patas. Quedó un nudo. Se rieron. Los nudos también son parte del dibujo.",
      },
      {
        bg: "cream",
        narrator: true,
        text: "Pasaron la trama. Apareció un río. Una casa. Una persona que ya no está y sin embargo está.",
      },
      {
        bg: "yellow",
        who: "margarel",
        text: "«Crear es una forma de cuidar», dijo Margarel. Se puso el pantalón nuevo. Caminó como si el viento le hubiera compuesto una canción.",
      },
    ],
  },
  {
    id: "abrazo-viajero",
    title: "El abrazo que viajó",
    subtitle: "Susu demuestra que un asiento extra cambia el recreo.",
    hosts: ["susu", "gadu", "zizu", "vector", "margarel"],
    minutes: 5,
    theme: "Valores",
    colorToken: "susu",
    panels: [
      {
        bg: "cream",
        narrator: true,
        text: "Gadú no conocía las reglas del recreo. Se quedó al borde, con la cola enrollada.",
      },
      {
        bg: "susu",
        who: "susu",
        text: "Susu se sentó al lado. No arregló nada de una vez. Solo dijo: «hay lugar».",
      },
      {
        bg: "vector",
        who: "vector",
        text: "Vector inventó una regla nueva para que el juego cupiera un jugador más. Las reglas, como los programas, se editan.",
      },
      {
        bg: "zizu",
        who: "zizu",
        text: "Zizú cedió un bolsillo del chaleco: un tesoro de hoja seca. Los tesoros se multiplican cuando viajan.",
      },
      {
        bg: "margarel",
        who: "margarel",
        text: "Margarel le pintó a Gadú una raya extra en la cola, de honor. Gadú brilló. La cresta, naranja.",
      },
      {
        bg: "yellow",
        narrator: true,
        text: "Esa tarde el recreo fue más raro y más rico. En Planeta Susu, eso se considera un final feliz.",
      },
    ],
  },
  {
    id: "nube-vaso",
    title: "La nube que nació en la cocina",
    subtitle: "Un vaso, un plato, hielo: el cielo a escala de merienda.",
    hosts: ["zizu", "gadu", "vector"],
    minutes: 4,
    theme: "Ciencia",
    colorToken: "zizu",
    panels: [
      { bg: "cream", narrator: true, text: "Gadú miraba la pava. «El agua se esfuma. ¿Se va a mi planeta?»" },
      { bg: "zizu", who: "zizu", text: "«No se esfuma: viaja», dijo Zizú. «Vamos a invitarla a quedarse un rato en un vaso.»" },
      { bg: "vector", who: "vector", text: "Agua caliente. Plato. Hielo. Vector anotó la hora. A las nubes les gusta que las esperen." },
      { bg: "gadu", who: "gadu", text: "Apareció una nubecita. Gadú aplaudió tan fuerte que la cresta se le puso más naranja." },
      { bg: "yellow", narrator: true, text: "Esa noche, Gadú soñó que todas las cocinas tenían un pedacito de cielo." },
    ],
  },
  {
    id: "semaforo-susu",
    title: "El semáforo de Susu",
    subtitle: "Verde, amarillo, rojo: un idioma para el clima interior.",
    hosts: ["susu", "margarel"],
    minutes: 4,
    theme: "Valores",
    colorToken: "susu",
    panels: [
      { bg: "susu", who: "susu", text: "Susu dibujó tres círculos. Verde: puedo jugar. Amarillo: necesito un minuto. Rojo: ahora no, por favor." },
      { bg: "margarel", who: "margarel", text: "Margarel lo colgó en la heladera con una raya rosa. «Un semáforo también es arte», dijo." },
      { bg: "cream", narrator: true, text: "Esa tarde el recreo tuvo un rojo chiquito. Nadie se enojó. Esperaron. El verde volvió." },
      { bg: "yellow", who: "susu", text: "«Nombrar no apaga», dijo Susu. «Nombrar ilumina.»" },
    ],
  },
  {
    id: "hormigas-mapa",
    title: "El mapa de las hormigas",
    subtitle: "Contar, agrupar y no pisar lo que trabaja.",
    hosts: ["vector", "zizu"],
    minutes: 4,
    theme: "Matemáticas",
    colorToken: "vector",
    panels: [
      { bg: "zizu", who: "zizu", text: "En el patio había una fila. Zizú se tiró al suelo. «Son hormigas. Tienen oficio.»" },
      { bg: "vector", who: "vector", text: "Vector contó de 2 en 2. «Doce. Van a un agujero. Vuelven con migas. Es un algoritmo con patas.»" },
      { bg: "cream", narrator: true, text: "Dibujaron el mapa: cocina → patio → hormiguero. Ponerle número a un camino es una forma de cuidarlo." },
      { bg: "yellow", who: "zizu", text: "Acordaron no pisar la fila. El recreo se hizo un poco más ancho." },
    ],
  },
  {
    id: "cancion-inventada",
    title: "La canción que no existía",
    subtitle: "Margarel demuestra que una melodía se puede cocinar.",
    hosts: ["margarel", "gadu", "susu"],
    minutes: 4,
    theme: "Arte",
    colorToken: "margarel",
    panels: [
      { bg: "margarel", who: "margarel", text: "«Hoy el día pidió una canción que todavía no existe», dijo Margarel, y palmeó un ritmo: clap, pie, clap clap." },
      { bg: "gadu", who: "gadu", text: "Gadú lo repitió con la cola. Violeta, naranja, violeta. Era el mismo patrón, en otro idioma." },
      { bg: "susu", who: "susu", text: "Susu puso una letra: «hay lugar, hay lugar». Se rieron. La canción ya existía." },
      { bg: "yellow", narrator: true, text: "No la grabaron. Se la aprendió el patio." },
    ],
  },
  {
    id: "sombra-amiga",
    title: "La sombra que se perdió",
    subtitle: "Al atardecer el patio se estira. Zizú investiga.",
    hosts: ["zizu", "gadu", "susu"],
    minutes: 4,
    theme: "Ciencia",
    colorToken: "zizu",
    panels: [
      { bg: "cream", narrator: true, text: "Gadú gritó: «¡Se me perdió la sombra!» Miró bajo las piedras. No estaba." },
      { bg: "zizu", who: "zizu", text: "«Las sombras no se pierden: se esconden cuando la luz se va de lado», dijo Zizú, y se paró de puntillas." },
      { bg: "gadu", who: "gadu", text: "El sol se acostaba. La sombra de Gadú se alargó como una cola extra. «¡Ahí estás! Estabas disfrazada de camino.»" },
      { bg: "susu", who: "susu", text: "Susu le puso la pata encima. Dos sombras se saludaron. «Hasta las sombras necesitan un asiento», dijo." },
      { bg: "yellow", narrator: true, text: "Anotaron: la sombra no es un fantasma. Es luz que se sienta al lado." },
    ],
  },
  {
    id: "robot-miedo",
    title: "El robot que tenía miedo",
    subtitle: "C-0 se encontró con una silla. Vector reescribió la receta.",
    hosts: ["vector", "gadu", "susu"],
    minutes: 5,
    theme: "Programación",
    colorToken: "vector",
    panels: [
      { bg: "vector", who: "vector", text: "C-0 (el robot de cartón) se detuvo frente a una silla. Vector anotó: «posible miedo»." },
      { bg: "gadu", who: "gadu", text: "«En mi planeta los robots no sienten. Aquí parece que sí», dijo Gadú. La cresta, un poco naranja." },
      { bg: "susu", who: "susu", text: "Susu se sentó al lado del cartón. «A veces el miedo es un paso que falta, no un corazón roto.»" },
      { bg: "cream", who: "vector", text: "Agregaron una flecha: rodear. C-0 pasó. El sándwich esperaba. El miedo se había editado." },
      { bg: "yellow", narrator: true, text: "Desde entonces, cada programa de Planeta Susu tiene un bolsillo para el «¿y si me asusto?»." },
    ],
  },
  {
    id: "dia-gris",
    title: "El día que pidió gris",
    subtitle: "Margarel demuestra que un color apagado también es valiente.",
    hosts: ["margarel", "susu", "vector"],
    minutes: 4,
    theme: "Arte",
    colorToken: "margarel",
    panels: [
      { bg: "margarel", who: "margarel", text: "El cielo amaneció sin fucsia. Margarel miró el ovillo gris. «Hoy el día pidió esto. También es un color.»" },
      { bg: "susu", who: "susu", text: "Susu se acurrucó. Los días grises también merecen un lazo. Ella tenía uno rosa, por si acaso." },
      { bg: "vector", who: "vector", text: "Vector midió la luz. «Hay menos. No es que falte el mundo: cambió el foco.»" },
      { bg: "yellow", who: "margarel", text: "Pintaron un río gris con una raya rosa. El patio se vio más honesto. Crear también es acompañar el clima." },
    ],
  },
  {
    id: "picnic-numeros",
    title: "El picnic de los números",
    subtitle: "Tres peras, dos jugos, un hambre que se puede contar.",
    hosts: ["vector", "zizu", "margarel"],
    minutes: 4,
    theme: "Matemáticas",
    colorToken: "vector",
    panels: [
      { bg: "vector", who: "vector", text: "Vector puso 3 peras. Zizú trajo 2 jugos. «¿Alcanza para cinco?» se preguntó el mantel." },
      { bg: "zizu", who: "zizu", text: "«Alcanza si partimos», dijo Zizú. Cortar también es una operación. El patio huele a matemática." },
      { bg: "margarel", who: "margarel", text: "Margarel pintó un plato extra, por si Gadú llegaba. El 5 se hizo 6. Sumar a veces es dejar lugar." },
      { bg: "yellow", narrator: true, text: "Comieron. Contaron. Sobró una semilla de pera. La plantaron. El picnic siguió creciendo." },
    ],
  },
  {
    id: "arboles-secretos",
    title: "¿Los árboles se mandan mensajes secretos?",
    subtitle: "Zizú escucha la tierra. Vector pide una hipótesis. El bosque es más interesante que un internet mágico.",
    hosts: ["zizu", "vector"],
    minutes: 8,
    theme: "Bosque de Zizú",
    colorToken: "zizu",
    panels: [
      { bg: "cream", narrator: true, text: "Zizú apoyó una oreja sobre la tierra húmeda. «Shhh. Creo que el bosque está diciendo algo.»" },
      { bg: "vector", who: "vector", text: "«Hipótesis uno: una raíz hablando. Dos: un escarabajo. Tres: tu estómago pide merienda.» GRRRRUM. Era la tres." },
      { bg: "zizu", who: "zizu", text: "«Si los árboles no tienen boca, ¿pueden mandarse mensajes?»" },
      { bg: "cream", narrator: true, text: "Un árbol no conversa como tú. No tiene cerebro ni palabras en el tronco. Pero percibe luz, agua, heridas y sustancias químicas, y responde." },
      { bg: "vector", who: "vector", text: "«Debajo del suelo, muchas raíces se asocian con hongos. Se llaman micorrizas. El hongo ayuda a conseguir agua o nutrientes. La planta entrega carbono.»" },
      { bg: "zizu", who: "zizu", text: "«Entonces hay señales, pero no necesariamente alguien diciendo: hola, vecino.»" },
      { bg: "vector", who: "vector", text: "«Exacto. En experimentos se han visto movimientos de sustancias. Todavía se debate cuánto conectan esas redes en bosques reales. Todavía también es información.»" },
      { bg: "yellow", narrator: true, text: "Salgan a escuchar un árbol sin tocarlo ni extraer nada. ¿Qué señales hay — viento, insectos, sombra — que no son un mensaje secreto?" },
    ],
  },
  {
    id: "algoritmo-si",
    title: "Vector contra el algoritmo que siempre decía sí",
    subtitle: "Seguir todas las instrucciones no siempre produce una buena decisión.",
    hosts: ["vector", "gadu", "susu"],
    minutes: 8,
    theme: "Laboratorio Vector",
    colorToken: "vector",
    panels: [
      { bg: "vector", who: "vector", text: "Vector construyó un algoritmo para elegir merienda: si alguien lo pide, di que sí." },
      { bg: "gadu", who: "gadu", text: "Gadú pidió helado para desayuno, almuerzo y cena. El algoritmo dijo que sí. Tres veces." },
      { bg: "susu", who: "susu", text: "«Mi radar detecta un problema. Decir que sí no es lo mismo que cuidar.»" },
      { bg: "cream", narrator: true, text: "Un algoritmo es una receta con orden. Hace lo que le pedimos, incluso si la receta es injusta, incompleta o tonta." },
      { bg: "vector", who: "vector", text: "«Necesitamos más preguntas: ¿quién lo pide? ¿cuántas veces? ¿hace daño? Un “sí” automático no es amable: es perezoso.»" },
      { bg: "gadu", who: "gadu", text: "«¿Y si el algoritmo a veces dice “espera” o “preguntémosle a Zizú”?»" },
      { bg: "yellow", narrator: true, text: "La tecnología tiene autores. Las reglas también se pueden cambiar. ¿Qué instrucción agregarías para que un “sí” no se coma el mundo?" },
    ],
  },
  {
    id: "museo-2126",
    title: "El museo de las cosas que todavía no existen",
    subtitle: "Gadú abre un museo vacío. El año 2126 cabe en un dibujo.",
    hosts: ["gadu", "margarel", "susu"],
    minutes: 8,
    theme: "Taller de Gadú",
    colorToken: "gadu",
    panels: [
      { bg: "gadu", who: "gadu", text: "Gadú abrió un museo. Las paredes estaban vacías. «Perfecto. Así cabe todo lo que todavía no existe.»" },
      { bg: "margarel", who: "margarel", text: "«¿Y si primero miramos lo que ya existe cerca? Un objeto cotidiano también puede viajar al futuro.»" },
      { bg: "susu", who: "susu", text: "«Una pregunta para la vitrina: ¿a quién ayuda esta cosa? ¿a quién podría olvidar?»" },
      { bg: "cream", narrator: true, text: "El futuro no viene terminado. Un invento puede cuidar o excluir. Por eso el museo pide bocetos, no milagros." },
      { bg: "gadu", who: "gadu", text: "«Dibuja un objeto del año 2126. Puede ser inútil. Puede ser tierno. Después le ponemos un cartel: para qué sirve y para quién no.»" },
      { bg: "yellow", narrator: true, text: "Llena una hoja. Ese es tu primer objeto de museo. ¿Qué pregunta deja abierta?" },
    ],
  },
  {
    id: "abrazo-permiso",
    title: "Zizú y el abrazo que primero pidió permiso",
    subtitle: "Un abrazo puede ser cuidado. Preguntar antes también.",
    hosts: ["zizu", "susu", "gadu"],
    minutes: 6,
    theme: "Radar de Susu",
    colorToken: "zizu",
    panels: [
      { bg: "zizu", who: "zizu", text: "Gadú se había quedado callado. Zizú abrió los brazos. Eran enormes. «Puedo ayudarte. Antes quiero saber cómo te gustaría que lo hiciera.»" },
      { bg: "gadu", who: "gadu", text: "«Hoy no quiero un abrazo. Quiero que te sientes cerca, sin girar.»" },
      { bg: "susu", who: "susu", text: "«Cuidar no es decidir por el otro. El radar también detecta un no.»" },
      { bg: "cream", narrator: true, text: "Preguntar no apaga el cariño. Lo hace más preciso. Un no también es información para el siguiente intento." },
      { bg: "zizu", who: "zizu", text: "Zizú se sentó. El silencio ya no pesaba tanto. «Cuando quieras el abrazo, avisas. Yo espero.»" },
      { bg: "yellow", narrator: true, text: "Hoy puedes practicar una frase: “¿Quieres un abrazo, compañía o espacio?”" },
    ],
  },
];

export const storyCover: Record<string, string> = {
  "rio-triste": "/stories/rio.jpg",
  "planeta-preguntas": "/stories/cielo.jpg",
  "numero-escondido": "/stories/planetas.jpg",
  "robot-carton": "/stories/robot.jpg",
  "colores-abuela": "/stories/telar.jpg",
  "abrazo-viajero": "/stories/sillas.jpg",
  "nube-vaso": "/stories/nube.jpg",
  "semaforo-susu": "/stories/semaforo.jpg",
  "hormigas-mapa": "/stories/hormigas.jpg",
  "cancion-inventada": "/stories/cancion.jpg",
  "sombra-amiga": "/stories/sombra.jpg",
  "robot-miedo": "/stories/robot.jpg",
  "dia-gris": "/stories/telar.jpg",
  "picnic-numeros": "/stories/picnic.jpg",
  "arboles-secretos": "/stories/raices.jpg",
  "algoritmo-si": "/stories/helado.jpg",
  "museo-2126": "/stories/museo.jpg",
  "abrazo-permiso": "/stories/sillas.jpg",
};

export const storyArt: Record<string, string[]> = {
  "rio-triste": [
    "/stories/rio.jpg",
    "/stories/rio.jpg",
    "/stories/rio.jpg",
    "/stories/rio.jpg",
    "/stories/rio.jpg",
    "/stories/sillas.jpg",
    "/stories/rio.jpg",
  ],
  "planeta-preguntas": [
    "/stories/cielo.jpg",
    "/stories/cielo.jpg",
    "/stories/nube.jpg",
    "/stories/cielo.jpg",
    "/stories/planetas.jpg",
  ],
  "numero-escondido": [
    "/stories/planetas.jpg",
    "/stories/telar.jpg",
    "/stories/planetas.jpg",
    "/stories/planetas.jpg",
    "/stories/picnic.jpg",
  ],
  "robot-carton": [
    "/stories/robot.jpg",
    "/stories/robot.jpg",
    "/stories/robot.jpg",
    "/stories/robot.jpg",
    "/stories/robot.jpg",
  ],
  "colores-abuela": ["/stories/telar.jpg", "/stories/telar.jpg", "/stories/telar.jpg", "/stories/telar.jpg"],
  "abrazo-viajero": [
    "/stories/sillas.jpg",
    "/stories/sillas.jpg",
    "/stories/cancion.jpg",
    "/stories/sillas.jpg",
    "/stories/telar.jpg",
    "/stories/sillas.jpg",
  ],
  "nube-vaso": [
    "/stories/nube.jpg",
    "/stories/nube.jpg",
    "/stories/nube.jpg",
    "/stories/nube.jpg",
    "/stories/cielo.jpg",
  ],
  "semaforo-susu": [
    "/stories/semaforo.jpg",
    "/stories/semaforo.jpg",
    "/stories/sillas.jpg",
    "/stories/semaforo.jpg",
  ],
  "hormigas-mapa": [
    "/stories/hormigas.jpg",
    "/stories/hormigas.jpg",
    "/stories/hormigas.jpg",
    "/stories/sillas.jpg",
  ],
  "cancion-inventada": [
    "/stories/cancion.jpg",
    "/stories/cancion.jpg",
    "/stories/cancion.jpg",
    "/stories/sillas.jpg",
  ],
  "sombra-amiga": [
    "/stories/sombra.jpg",
    "/stories/sombra.jpg",
    "/stories/sombra.jpg",
    "/stories/sillas.jpg",
    "/stories/sombra.jpg",
  ],
  "robot-miedo": [
    "/stories/robot.jpg",
    "/stories/robot.jpg",
    "/stories/sillas.jpg",
    "/stories/robot.jpg",
    "/stories/robot.jpg",
  ],
  "dia-gris": ["/stories/telar.jpg", "/stories/sillas.jpg", "/stories/sombra.jpg", "/stories/telar.jpg"],
  "picnic-numeros": ["/stories/picnic.jpg", "/stories/picnic.jpg", "/stories/picnic.jpg", "/stories/picnic.jpg"],
  "arboles-secretos": [
    "/stories/raices.jpg",
    "/stories/picnic.jpg",
    "/stories/raices.jpg",
    "/stories/raices.jpg",
    "/stories/raices.jpg",
    "/stories/raices.jpg",
    "/stories/raices.jpg",
    "/stories/raices.jpg",
  ],
  "algoritmo-si": [
    "/stories/helado.jpg",
    "/stories/helado.jpg",
    "/stories/semaforo.jpg",
    "/stories/robot.jpg",
    "/stories/helado.jpg",
    "/stories/sillas.jpg",
    "/stories/helado.jpg",
  ],
  "museo-2126": [
    "/stories/museo.jpg",
    "/stories/museo.jpg",
    "/stories/museo.jpg",
    "/stories/museo.jpg",
    "/stories/cancion.jpg",
    "/stories/museo.jpg",
  ],
  "abrazo-permiso": [
    "/stories/sillas.jpg",
    "/stories/sillas.jpg",
    "/stories/semaforo.jpg",
    "/stories/sillas.jpg",
    "/stories/sillas.jpg",
    "/stories/sillas.jpg",
  ],
};

export function panelArt(storyId: string, index: number) {
  const arts = storyArt[storyId];
  if (arts?.length) return arts[Math.min(index, arts.length - 1)]!;
  return storyCover[storyId] ?? "/stories/cielo.jpg";
}

export function getStory(id: string) {
  return stories.find((s) => s.id === id);
}
