import type { Article } from "@/data/types";

/**
 * Responsabilidad: las 8 guias largas para adultos, en la forma del contrato.
 * Usado por: data/catalog.ts, que las suma al archivo del sitio.
 * NO hace: no dibuja. La pagina de la guia arma las secciones desde los bloques.
 */

export const GUIAS: Article[] = [
  {
    id: "padres-como-responder-cuando-no-sabemos",
    title: "¿Y si no sé? Cómo responder una pregunta infantil sin inventar una respuesta",
    summary:
      "No saber no debilita la confianza: puede convertir una pregunta inesperada en una pequeña investigación compartida.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 7,
    image: null,
    tags: ["Cuando no sabemos la respuesta"],
    featured: false,
    rank: 1,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "Son las 8:12 de la mañana. Falta encontrar un zapato, preparar una colación y salir. Entonces llega la pregunta: “¿Dónde termina el universo?”. O: “¿Por qué esa persona vive en la calle?”. O una especialmente precisa sobre insectos, muerte, electricidad o el origen de una palabra. El adulto siente que debería saber. Responde rápido, cambia de tema o improvisa algo verosímil para mantener la autoridad.",
            "La tensión es comprensible. Acompañar a un niño suele venir con la expectativa imposible de ser buscador, enciclopedia y brújula moral al mismo tiempo. Pero una pregunta infantil no siempre está pidiendo una conferencia. A veces busca una palabra. Otras veces quiere comprobar si puede hablar de un tema inquietante. Y muchas veces solo está abriendo una puerta para pensar acompañado.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "Las interacciones de ida y vuelta —el niño inicia con una mirada, un gesto o una pregunta y el adulto responde de manera atenta— son importantes para el lenguaje, el vínculo y el desarrollo. La calidad está en la respuesta sensible, no en que el adulto posea de inmediato el dato perfecto.",
            "También sabemos algo fundamental sobre la ciencia: el conocimiento confiable no nace de responder con seguridad, sino de formular preguntas, observar, contrastar explicaciones y actualizar lo que creemos. Decir “no lo sé todavía” puede modelar ese proceso. Le muestra al niño que la incertidumbre no es una falla y que una afirmación necesita alguna razón para ser creída.",
            "Eso no significa convertir cada desayuno en una investigación de cuarenta minutos. La curiosidad necesita atención, pero una familia también tiene horarios, cansancio y prioridades. La respuesta adecuada depende de la edad, de la pregunta y de lo que el niño realmente necesita saber.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "Una respuesta útil puede tener cuatro movimientos muy breves:",
            "1. Reconocer: “No lo sé con seguridad”.\n2. Aclarar: “¿Qué parte te da curiosidad?” o “¿Dónde escuchaste eso?”.\n3. Ofrecer una pista honesta: “Creo que tiene que ver con…, pero tendríamos que comprobarlo”.\n4. Elegir un siguiente paso: buscar ahora, anotarlo para después, preguntarle a alguien o aceptar que todavía no hay una respuesta completa.",
            "La frase “no sé” cambia cuando se le agrega una dirección. “No sé y me da curiosidad” abre. “No sé, deja de preguntar” cierra. También conviene diferenciar tres situaciones. Hay preguntas con una respuesta verificable; otras admiten varias interpretaciones; y algunas todavía están abiertas incluso para especialistas. “¿Cuántas patas tiene una araña?” no se investiga igual que “¿qué hace justa a una regla?” o “¿qué había antes del universo?”.",
          ],
        },
        {
          type: "seccion",
          title: "Cuatro cosas que podrían probar",
          parrafos: [
            "Antes de responder, preguntar: “¿Tú qué imaginas?”. No es una prueba escolar. Sirve para descubrir qué está preguntando realmente. Si dice “¿las plantas duermen?”, quizá le interesa por qué una flor se cerró y no una definición general del sueño.",
            "Mantengan una nota en papel o en el teléfono del adulto. Escriban la pregunta con las palabras del niño y acuerden cuándo volverán a ella: después de comer, durante el fin de semana o en el próximo viaje en bus. Volver importa más que investigar de inmediato; demuestra que la pregunta no fue una forma elegante de aplazarlo para siempre.",
            "Elijan dos fuentes apropiadas: un museo, una universidad, un organismo científico o un libro con autor. Comparen qué dicen. Para niños mayores, agreguen: “¿Quién escribió esto?”, “¿Cómo podría saberlo?” y “¿Qué parte coincide?”. La meta no es navegar sin fin, sino practicar criterio.",
            "Un mecánico, una abuela, una jardinera, una bibliotecaria o una científica conocen cosas distintas. Antes de preguntar, distingan experiencia y evidencia: alguien puede saber mucho por práctica, aunque no toda experiencia individual permita generalizar. Después, agradezcan y reconstruyan juntos lo aprendido.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar fingir certeza para conservar autoridad. Si luego descubren un error, corregirlo de forma visible: “Te dije esto, pero revisé y no era exacto”. Esa reparación enseña más que sostener una respuesta falsa.",
            "También conviene evitar la descarga automática de información. Un artículo adulto de veinte páginas puede aplastar una curiosidad pequeña. No entregar el teléfono sin acompañamiento cuando la búsqueda puede exponer al niño a publicidad, desinformación o contenidos inadecuados. Y no devolver siempre la pregunta como examen —“dime tú”— cuando el niño necesita contención o una explicación clara.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "La pausa de veinte segundos",
            "El estacionamiento de preguntas",
            "La búsqueda de dos pistas",
            "Consultar a una persona",
            "Conversar: ¿Qué crees que ya sabemos y qué nos falta averiguar?",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-hablar-cambio-climatico-sin-miedo",
    title: "Cómo hablar del cambio climático sin instalar miedo permanente",
    summary:
      "Los niños necesitan información honesta, emociones escuchadas y acciones proporcionales; no la tarea imposible de salvar solos el planeta.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: ["Clima: verdad sin miedo permanente"],
    featured: false,
    rank: 2,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "Un niño ve imágenes de un incendio en el teléfono de un adulto y pregunta si su casa también se quemará. Otra escucha en la escuela que “el planeta se está muriendo” y decide que dejar correr el agua unos segundos la convierte en culpable. Un tercero no parece preocupado, mientras su padre siente que debería explicarle todo antes de que sea demasiado tarde.",
            "En una conversación climática conviven dos deseos adultos: decir la verdad y proteger. El problema aparece cuando creemos que solo podemos elegir uno. Ocultar no impide que las noticias, conversaciones o eventos extremos lleguen. Exponer sin escala, en cambio, puede transformar un fenómeno complejo en una amenaza total y permanente.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "El cambio climático causado por actividades humanas es real y ya afecta sistemas naturales y sociedades. Sus impactos no son idénticos en todos los lugares ni para todas las personas: dependen de exposición, infraestructura, recursos, decisiones y capacidad de adaptación. También existen respuestas en marcha —reducción de emisiones, restauración, adaptación, ciencia, políticas y organización comunitaria— aunque su avance todavía es insuficiente.",
            "Los niños pueden sentir miedo, tristeza, rabia, confusión o interés. UNICEF recomienda escuchar qué saben y cómo se sienten, usar ciencia simple y adecuada para la edad, conectar con la naturaleza y enfocarse también en soluciones. Validar no significa confirmar el peor escenario. “Entiendo que esa imagen te asustó” es distinto de “sí, eso nos pasará”.",
            "No existe una frase capaz de eliminar toda preocupación. La meta razonable es que el niño pueda sostener tres ideas a la vez: hay un problema importante; muchas personas trabajan sobre él; y no es su responsabilidad individual resolverlo.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "Antes de explicar, conviene preguntar: “¿Qué escuchaste exactamente?” y “¿Qué crees que podría pasar?”. Así se evita responder a una catástrofe que el niño ni siquiera imaginaba. Para edades de 5 a 7 años suele bastar una relación concreta: al quemar carbón, petróleo y gas liberamos gases que retienen más calor; eso cambia el clima. Entre 8 y 11 se pueden sumar fuentes de emisiones, diferencias entre tiempo y clima, impactos locales y decisiones colectivas.",
            "Después viene la escala. Un incendio particular puede estar influido por calor, sequedad, vegetación, viento, actividad humana y manejo del territorio; no toda emergencia tiene una sola causa. Una proyección climática describe posibilidades bajo ciertas condiciones, no una fecha exacta de destino familiar. Y una conducta doméstica ayuda, pero no reemplaza cambios en energía, transporte, edificios, agricultura, empresas y gobiernos.",
          ],
        },
        {
          type: "seccion",
          title: "Cuatro cosas que podrían probar",
          parrafos: [
            "Usen tres preguntas: “¿Qué viste?”, “¿Cómo te hizo sentir?” y “¿Qué te gustaría saber?”. Respondan solo a esa necesidad. Si la preocupación aparece antes de dormir, prioricen seguridad presente: dónde están, qué adultos cuidan y qué planes existen.",
            "Observen una sombra, la temperatura de dos superficies, un árbol de la calle o cómo entra el sol en casa. Hablen de clima desde patrones, no solo desde desastre. Registrar una observación semanal ayuda a comprender que el clima se estudia con datos acumulados y escalas largas.",
            "Por cada impacto que aparezca, busquen una respuesta real: techos fríos frente a olas de calor, alertas tempranas ante inundaciones, transporte público eléctrico, protección de humedales o restauración de bosques. Pregunten quién participa y qué límites tiene la solución. Esperanza no es optimismo vacío; es capacidad organizada.",
            "Elijan algo cercano: crear sombra para una ventana, reducir desperdicio de alimentos durante una semana, escribir al municipio por un punto limpio o conocer un proyecto ambiental del barrio. Expliquen la proporción: “Esto aporta y nos enseña; no resuelve todo”. Si no hay tiempo o dinero, conversar y aprender también es una acción válida.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar frases absolutas como “no va a pasar nada” o “ya no hay nada que hacer”. Ambas cierran la conversación y ninguna refleja bien la evidencia. Tampoco usar imágenes de sufrimiento como combustible emocional, imponer listas de pureza ecológica ni hacer que el niño vigile y sancione cada conducta familiar.",
            "No presentar reciclaje, compra de un producto “verde” o ahorro doméstico como solución total. Ni asignar igual responsabilidad a todas las familias: las opciones dependen de vivienda, ingreso, transporte e infraestructura. La sostenibilidad no debe convertirse en una competencia moral.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "Escuchar antes de informar",
            "Una ventana local",
            "Problema y respuesta en pareja",
            "Una acción con resultado visible",
            "Conversar: ¿Qué parte de esta noticia es un hecho y qué parte es una predicción?",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-matematicas-familiares-sin-miedo",
    title: "Matemáticas familiares para quienes crecieron temiéndoles",
    summary:
      "No hace falta convertirse en profesor ni esconder la propia historia: se puede acompañar desde los patrones, las preguntas y la vida cotidiana.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: ["Matemáticas sin heredar el miedo"],
    featured: false,
    rank: 3,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "Llega una tarea con un método que el adulto no reconoce. El niño mira esperando ayuda. Aparece una frase casi automática: “Yo siempre fui pésimo para matemáticas; pregúntale a otra persona”. O el extremo contrario: la presión por resolver rápido, borrar cada error y llegar al procedimiento correcto antes de comprender qué está ocurriendo.",
            "Muchas personas adultas aprendieron matemáticas con cronómetro, vergüenza pública o como una colección de reglas sin sentido. Acompañar a un hijo puede reactivar esa experiencia. El desafío no es ocultarla ni transformarse de noche en docente. Es evitar que una historia personal se convierta en identidad heredada.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "La ansiedad matemática es una reacción real de tensión o preocupación frente a situaciones numéricas. Se relaciona con desempeño y participación, aunque la relación es compleja: la ansiedad puede dificultar el trabajo y las dificultades repetidas también pueden aumentarla. No es simplemente falta de esfuerzo.",
            "La investigación educativa recomienda desarrollar comprensión a través de representaciones, conversación, comparación de estrategias y resolución de problemas. Usar objetos —frijoles, tapas, dedos, dibujos o bloques— puede hacer visible una idea, siempre que se conecte explícitamente con el concepto y no se convierta en una receta nueva para memorizar.",
            "Las matemáticas tampoco se reducen al cálculo. Incluyen reconocer patrones, estimar, medir, comparar, visualizar formas, interpretar datos y justificar decisiones. Un niño que encuentra tres maneras de repartir doce uvas está haciendo matemáticas, aunque no haya una hoja de ejercicios.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "La frase que más ayuda no es “esto es fácil”, porque si al niño le cuesta puede escuchar “entonces el problema soy yo”. Es mejor: “Todavía no veo el camino; probemos una representación”. Cambiar respuesta por estrategia reduce el examen permanente. Preguntar “¿cómo lo pensaste?” permite valorar razonamiento y detectar dónde se perdió una relación.",
            "También se puede hablar con honestidad de la propia historia sin fijarla: “A mí me enseñaron de una forma que me daba miedo. Quiero aprender a mirarlo contigo”. Eso modela cambio. Eviten “en esta familia somos de letras” o “las niñas/los niños son mejores para…”. Ninguna de esas identidades ayuda a observar lo que una persona puede aprender con apoyos y tiempo.",
          ],
        },
        {
          type: "seccion",
          title: "Cinco cosas que podrían probar",
          parrafos: [
            "Con escalones, frutas o minutos de trayecto, hagan una estimación y luego comprueben. No se premia acertar exacto: se conversa si la estimación fue demasiado alta, baja o razonable y qué pista usarían la próxima vez.",
            "Busquen varias formas de formar 10, ordenar cuatro objetos o dividir un sándwich. Cuando hay más de un camino, la experiencia matemática deja de ser una adivinación de lo que el adulto piensa.",
            "En una feria, almacén o lista imaginaria, comparen precios por unidad, calculen cambios aproximados o decidan qué cabe en un presupuesto. El adulto puede decir sus dudas en voz alta. No conviertan cada salida en clase; basta con una pregunta relevante.",
            "Antes de operar, representen con rayas, grupos, una recta numérica o un esquema. Luego pregunten qué parte del dibujo corresponde a cada número. Si el método escolar es distinto, el dibujo puede ayudar a comprenderlo sin desautorizar a la escuela.",
            "Si el procedimiento genera conflicto frecuente, pidan al docente un ejemplo resuelto y el propósito del método. La pregunta no es “¿por qué lo hacen tan complicado?”, sino “¿qué relación busca enseñar y cómo podemos usar el mismo lenguaje en casa?”.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar usar velocidad como sinónimo de inteligencia, arrebatar el lápiz, corregir cada paso antes de que el niño termine o elogiar solo el resultado. También evitar el elogio vacío del esfuerzo: persistir en una estrategia que no funciona no basta; a veces hay que pedir una pista, cambiar la representación o descansar.",
            "No inventar juegos competitivos para todo. A algunos niños les entusiasman; a otros les bloquean. Y no diagnosticar “ansiedad matemática”, discalculia u otra dificultad a partir de una mala tarde. Si las dificultades son persistentes y afectan de manera importante el aprendizaje, corresponde conversar con la escuela y profesionales calificados.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "Estimar antes de contar",
            "La pregunta “¿de cuántas maneras?”",
            "Narrar la compra",
            "Dibujar el problema",
            "Reunión breve con la escuela",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-pantallas-creativas-y-pasivas",
    title: "Pantallas creativas y pantallas pasivas: una diferencia más útil que contar minutos",
    summary:
      "Los minutos importan, pero también qué desplazan, qué ocurre en la pantalla, con quién se usa y qué idea logra salir de ella.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: ["No todas las pantallas hacen lo mismo"],
    featured: false,
    rank: 4,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "Una niña pasa cuarenta minutos dibujando cuadro por cuadro una animación. Su hermano pasa el mismo tiempo deslizando videos elegidos automáticamente. Por la noche, ambos aparecen en el registro familiar como “40 minutos de pantalla”. El número es idéntico; la experiencia no.",
            "En otra casa, una videollamada con la abuela cruza el límite diario y se corta. En otra, el videojuego colaborativo termina en una discusión porque nadie acordó cuándo cerrar. Contar minutos puede ayudar a poner bordes, pero cuando se convierte en la única pregunta borra contenido, propósito, compañía, diseño de la plataforma y lo que ese tiempo reemplazó.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "La evidencia actual no respalda tratar toda exposición digital como una sustancia uniforme. La Academia Americana de Pediatría propone mirar al niño, el contenido, el contexto y las conversaciones, además del tiempo. Su política más reciente también presta atención al diseño de los ecosistemas digitales: reproducción automática, notificaciones, recomendadores y modelos de negocio influyen en cuánto cuesta detenerse.",
            "Hay diferencias entre ver, crear, comunicarse y resolver. Sin embargo, “creativo” no significa automáticamente saludable y “pasivo” no significa siempre dañino. Una película compartida puede ofrecer descanso, cultura y conversación; editar un video puede volverse agotador, competitivo o invadir privacidad. La pregunta clave es qué ocurre antes, durante y después.",
            "El desplazamiento importa: un uso digital puede ser motivo de revisión si, de manera habitual, ocupa el lugar de sueño suficiente, movimiento, alimentación, juego, responsabilidades o relaciones. También importa la transferencia. Cuando un niño ve una idea y luego dibuja, construye, pregunta o juega con ella, la experiencia se extiende. Cuando el diseño busca mantenerlo consumiendo sin un final reconocible, la salida se hace más difícil.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "En vez de una sola categoría, una familia puede observar cuatro:",
            "- Consumir: mirar o escuchar contenido.\n- Conectar: hablar o jugar con personas conocidas.\n- Crear: producir una historia, música, código, dibujo o solución.\n- Transferir: llevar una idea a conversación, movimiento o mundo físico.",
            "Un mismo uso puede combinar varias. La clasificación no sirve para puntuar al niño, sino para detectar si la dieta digital está dominada por una modalidad. También conviene mirar la capacidad de detenerse: ¿hay un final natural?, ¿el dispositivo responde a una decisión o empuja la siguiente pieza?, ¿cómo queda el cuerpo y el ánimo al terminar?",
          ],
        },
        {
          type: "seccion",
          title: "Cinco cosas que podrían probar",
          parrafos: [
            "Antes de abrir: “Voy a buscar una receta”, “quiero construir una casa en este juego” o “veré un episodio”. Una intención no garantiza el final, pero ayuda a distinguir elección de arrastre automático.",
            "Usen unidades con cierre: un episodio, una partida, un capítulo o terminar tres cuadros de animación. Desactiven reproducción automática y notificaciones cuando sea posible. Un reloj puede complementar el acuerdo, no reemplazarlo.",
            "Al cerrar, prueben una sola: “¿Qué te gustaría hacer con eso?”. Puede ser contar una escena, dibujar un personaje, probar un movimiento o no hacer nada. El descanso también es legítimo; no toda pantalla debe justificar su existencia con una tarea.",
            "Fotografíen sombras para contar una historia, graben sonidos del hogar, programen una secuencia con bloques o diseñen un afiche. No es necesario publicar. Guardar localmente protege privacidad y permite concentrarse en el proceso.",
            "Miren aplicaciones, cuentas, permisos, chats, publicidad y recomendaciones. Pregunten qué le gusta, qué le incomoda y qué cuesta dejar. Ajusten el plan con el niño según edad, sin convertir la revisión en vigilancia secreta.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar convertir el contador en una negociación minuto a minuto o usar la pantalla como premio moral y su retiro como castigo universal. Eso puede aumentar su valor simbólico sin enseñar autorregulación. Tampoco es útil llamar “adicción” a cualquier protesta al terminar; las transiciones pueden ser difíciles y el diseño de algunas plataformas añade fricción.",
            "No asumir que una aplicación rotulada “educativa” enseña, ni que acompañar equivale a sentarse en silencio. Conversar, hacer conexiones y observar juntos suele aportar más. Y no exigir a la familia una supervisión permanente imposible: configuraciones, rutinas y espacios compartidos pueden repartir la carga.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "Nombrar el propósito",
            "Finales visibles",
            "La pregunta de salida",
            "Crear con herramientas simples",
            "Revisar juntos el ecosistema",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-inteligencia-artificial-infancia",
    title: "Inteligencia artificial en la infancia: posibilidades, límites y preguntas",
    summary:
      "La pregunta no es solo si un niño puede usar IA, sino para qué, bajo qué condiciones y qué capacidad humana queremos que siga practicando.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 9,
    image: null,
    tags: ["IA en la infancia, con criterio"],
    featured: false,
    rank: 5,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "Una niña pide a un chatbot que haga su tarea “para entenderla mejor”. Un niño quiere subir una foto para verse como astronauta. En el grupo familiar circula una voz sintética y nadie sabe si es verdadera. La IA ya no es un tema lejano: aparece dentro de buscadores, teléfonos, aplicaciones educativas, juguetes y plataformas que no siempre la nombran con claridad.",
            "Los adultos quedan atrapados entre dos relatos igualmente pobres: “hay que prohibirla porque arruina el pensamiento” y “debe usarla cuanto antes para no quedarse atrás”. Ninguno pregunta qué herramienta es, qué datos recoge, qué edad admite, qué tarea se intenta resolver ni qué aprende realmente el niño.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "Los sistemas generativos producen texto, imágenes, audio o código a partir de patrones aprendidos en grandes conjuntos de datos. No saben, sienten ni comprenden como una persona, aunque su lenguaje lo parezca. Pueden inventar información, reflejar sesgos, omitir contexto y entregar una respuesta distinta ante preguntas similares.",
            "UNICEF y UNESCO sitúan la seguridad, privacidad, transparencia, no discriminación y agencia humana como condiciones centrales. Las plataformas tienen edades mínimas y términos diferentes; muchas no fueron diseñadas para conversación infantil independiente. La guía de UNESCO de 2023 propuso una edad mínima de 13 años para el uso independiente de herramientas generativas en contextos educativos, sujeta a regulación local y a las condiciones de cada servicio. UNICEF, por su parte, advierte que el impacto de chatbots y “compañeros” de IA sobre relaciones y bienestar infantil todavía necesita más investigación.",
            "También hay posibilidades reales. Una IA puede ofrecer variaciones de una historia, ayudar a comparar explicaciones, apoyar accesibilidad o convertir una idea en un prototipo. El valor pedagógico no está en obtener más rápido un producto impecable, sino en observar, preguntar, verificar, decidir y revisar. Si la herramienta hace todo el trabajo que queríamos que el niño practicara, la eficiencia puede borrar el aprendizaje.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "Antes de usar una herramienta, hagan cinco preguntas: qué queremos hacer; por qué usar IA; qué datos pide; qué podría equivocarse; y qué parte decidirá el niño. Para menores, es preferible que el adulto opere la cuenta, que la tarea sea cerrada y breve, y que no exista conversación emocional abierta.",
            "Una secuencia sensata es idea humana → apoyo de IA → comprobación → decisión humana → crédito. Por ejemplo, el niño dibuja primero su criatura, describe tres rasgos y luego observa variaciones generadas. Compara qué conservó el sistema, qué cambió y qué no representa su idea. El resultado no se presenta como autoría exclusivamente propia si fue producido de manera sustantiva por una herramienta.",
          ],
        },
        {
          type: "seccion",
          title: "Cinco cosas que podrían probar",
          parrafos: [
            "El adulto obtiene una respuesta sobre un tema conocido y la revisan con dos fuentes institucionales. Marquen hechos comprobables, opiniones y afirmaciones sin respaldo. La lección no es “la IA siempre miente”, sino “una respuesta fluida también necesita evidencia”.",
            "Escriban una petición ambigua, observen el resultado y luego agreguen propósito, audiencia, límites y formato. Comparen. Esto enseña precisión y muestra que la salida depende de decisiones humanas.",
            "Inventen una historia, melodía o diseño en papel. Solo después usen una herramienta permitida para explorar alternativas. El niño elige, rechaza y explica. Si no hay acceso, otro adulto puede hacer de “máquina de variaciones” siguiendo instrucciones literales.",
            "Revisen edad mínima, política de datos, permisos y opción de borrado. No ingresen nombre completo, escuela, ubicación, secretos, información de salud ni imágenes o voces del niño. Una foto contiene más información que el rostro: uniforme, calle, interiores y rutinas.",
            "Pregunten quién creó el sistema, quién trabajó en sus datos, qué idiomas representa mejor, qué energía e infraestructura usa y a quién podría dejar fuera. La IA es un sistema sociotécnico, no una nube sin materiales ni personas.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "No presentar una IA como amiga humana, terapeuta, ser consciente o autoridad neutral. Evitar conversaciones abiertas sin supervisión, especialmente sobre emociones, sexualidad, violencia o salud. No subir imágenes, voces, dibujos identificables o tareas con datos personales sin comprender los términos y contar con protección adecuada.",
            "También conviene evitar el policiamiento secreto. Si la escuela permite o prohíbe ciertos usos, conversen sobre la razón y definan cómo declarar ayuda de IA. “Cazar trampas” no reemplaza diseñar tareas donde el proceso, la conversación y las fuentes sean visibles.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "El detector de certeza",
            "Instrucciones que mejoran",
            "Crear primero sin IA",
            "Auditoría de privacidad",
            "Mapa de impactos",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-aprender-invento-no-funciona",
    title: "Qué aprende un niño cuando inventa algo que no funciona",
    summary:
      "Un prototipo que falla no es una lección automática de perseverancia: se vuelve aprendizaje cuando ayuda a observar, cambiar algo y volver a probar.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: ["Cuando el invento no funciona"],
    featured: false,
    rank: 6,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "La torre de cartón se inclina por quinta vez. El auto con tapas no avanza. La catapulta lanza la bolita hacia atrás. El niño empuja el proyecto, dice “soy malo para esto” y mira al adulto. El adulto sabe cómo reforzar la base y siente dos impulsos: arreglarlo en diez segundos o pronunciar un discurso sobre no rendirse.",
            "Ninguno garantiza aprendizaje. Si el adulto resuelve, el objeto funciona pero la investigación termina. Si exige insistir sin una pista nueva, el niño puede repetir frustración. Un intento se vuelve productivo cuando produce información utilizable.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "El aprendizaje mediante juego y diseño suele ser iterativo: imaginar, probar, observar y revisar. En ese proceso, el niño puede practicar planificación, pensamiento causal, creatividad, colaboración y autorregulación. UNICEF describe experiencias tecnológicas donde el valor no reside solo en los prototipos finales, sino en observar problemas, intercambiar ideas, equivocarse y mejorar.",
            "Pero “equivocarse hace bien” es una simplificación. Un error demasiado difícil, repetido sin comprensión o vivido bajo vergüenza puede no enseñar nada útil. El apoyo adulto importa: ofrecer una pista, reducir el problema, recordar el propósito o permitir una pausa. La motivación tiende a sostenerse mejor cuando hay un desafío alcanzable, cierta elección y retroalimentación sobre el proceso.",
            "El lenguaje también cambia la experiencia. “Fracasó” convierte el resultado en veredicto. “La rueda roza el cartón” describe algo observable. El segundo enunciado abre una variable que puede modificarse.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "Cuando algo no funciona, separen persona, idea y resultado. El niño no es el error; diseñó una versión que, bajo estas condiciones, produjo un resultado distinto al esperado. Luego reconstruyan cuatro elementos:",
            "- qué queríamos que ocurriera;\n- qué ocurrió realmente;\n- qué cambió o permaneció;\n- qué probaríamos en la siguiente versión.",
            "Cambiar una variable a la vez ayuda a inferir causas. Si se modifica peso, altura, material y ángulo al mismo tiempo, quizá aparezca una solución, pero será difícil saber por qué. En proyectos creativos no siempre hace falta control experimental estricto; aun así, comparar versiones vuelve visible el pensamiento.",
          ],
        },
        {
          type: "seccion",
          title: "Cinco cosas que podrían probar",
          parrafos: [
            "Reemplacen “está mal” por una observación: “La base se dobla cuando agregamos el tercer piso”. Pregunten: “¿Qué notas tú?”. La precisión baja la temperatura emocional y entrega un punto de entrada.",
            "Fotografíen o dibujen prototipo 1, 2 y 3. Anoten una modificación. Al final, el niño puede contar la historia del objeto, no solo exhibir el resultado. Sin dispositivo, basta una hoja dividida en cuadros.",
            "Elijan peso, forma, unión o material. Antes de probar, hagan una predicción: “Si ensanchamos la base, creemos que…”. El objetivo es conectar decisión y consecuencia, incluso si la predicción no se cumple.",
            "Primero: una pregunta (“¿dónde empieza a doblarse?”). Segundo: dos opciones (“¿probamos una base más ancha o menos peso?”). Tercero: modelar una técnica en una pieza aparte. Así el adulto apoya sin apropiarse del proyecto.",
            "Guarden una pieza descartada con una nota: “Esto nos enseñó…”. Puede convivir con proyectos incompletos. No todo debe terminar en producto bonito; documentar una decisión ya es una salida válida.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar arreglar a escondidas, elogiar de forma automática (“¡perfecto!”) o usar la frustración como prueba de carácter. Tampoco repetir “inténtalo otra vez” si nada cambia. Perseverar incluye modificar estrategia, pedir ayuda y decidir que el costo ya no vale el objetivo.",
            "No diseñar fallas artificiales solo para enseñar resiliencia ni elevar el riesgo físico en nombre de la exploración. Herramientas, electricidad, calor, piezas pequeñas y sustancias requieren edad, supervisión y protección adecuadas. La autonomía nunca significa ausencia de cuidado.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "Describir sin juzgar",
            "La foto de cada versión",
            "Cambiar una sola cosa",
            "Pistas en tres niveles",
            "Museo de intentos",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-valor-aburrimiento-bien-acompanado",
    title: "El valor del aburrimiento bien acompañado",
    summary:
      "No hace falta llenar cada silencio ni abandonar al niño a su suerte: acompañar puede ser sostener el tiempo sin dirigir lo que debe ocurrir.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 8,
    image: null,
    tags: ["Aburrirse sin quedar solo"],
    featured: false,
    rank: 7,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "Es sábado. El niño aparece por cuarta vez: “Me aburro”. El adulto está cocinando, trabajando o intentando descansar. Ofrece juguetes, una película, una actividad impresa y tres ideas. Todas reciben un no. La paciencia se termina: “Tienes miles de cosas; aprende a entretenerte solo”. Cinco minutos después, alguien entrega una pantalla para que la casa recupere silencio.",
            "No hay villanos en esta escena. Organizar la vida familiar exige energía y el juego autónomo no se enciende con un interruptor. Sin embargo, cuando cada intervalo se llena desde afuera, el niño tiene pocas oportunidades de notar un interés, iniciar algo y tolerar el momento confuso entre “no sé qué hacer” y “se me ocurrió”.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "El juego libre y no estructurado ofrece oportunidades para elegir, imaginar, negociar reglas, moverse y resolver problemas. Organizaciones como la Academia Americana de Pediatría, UNICEF y NAEYC reconocen el juego como parte importante del desarrollo y recomiendan proteger espacios que no estén dominados por instrucción o consumo digital.",
            "Eso no demuestra que el aburrimiento, por sí solo, produzca creatividad. “Me aburro” puede significar muchas cosas: la actividad perdió interés, cuesta iniciar, falta conexión, hay cansancio, hambre, sobreestimulación o necesidad de movimiento. Algunos niños, incluidas personas con distintas necesidades sensoriales, atencionales o ejecutivas, pueden requerir más estructura para pasar de la inactividad al juego.",
            "El valor potencial no está en sufrir aburrimiento, sino en disponer de un espacio seguro donde emerja iniciativa. El acompañamiento puede ser cercano sin dirigir: reconocer, ofrecer un marco pequeño y dejar que el niño decida qué historia, regla o construcción aparece.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "Una respuesta en tres pasos suele ser más útil que una lista interminable:",
            "1. Nombrar: “Parece que nada te interesa ahora”.\n2. Revisar necesidades básicas: descanso, comida, contacto, movimiento o ayuda para empezar.\n3. Ofrecer un borde, no un programa: “Puedes elegir papel y cinta o los cojines. Yo estaré aquí cocinando”.",
            "El borde reduce la carga de elegir entre toda la casa. Dos materiales abiertos suelen invitar más iniciativa que veinte propuestas detalladas. Después, el adulto puede ayudar durante dos minutos y retirarse: “Te ayudo a poner la primera cinta; el resto lo decides tú”.",
          ],
        },
        {
          type: "seccion",
          title: "Cinco cosas que podrían probar",
          parrafos: [
            "Respondan: “No tenemos que resolverlo de inmediato. Puedes quedarte conmigo mientras aparece una idea”. El niño puede ordenar cubiertos, mirar por la ventana o simplemente estar. No toda pausa debe producir algo visible.",
            "Ofrezcan solo dos categorías: construir o dibujar; moverse o escuchar; jugar solo o cerca del adulto. Si rechaza ambas, el límite se mantiene con calma: “Esas son las opciones disponibles ahora”.",
            "Reúnan cartón limpio, telas, tapas grandes, tubos y cinta de papel. Eviten piezas peligrosas según edad. No presenten un modelo terminado; una colección abierta permite inventar usos. En espacios pequeños, cabe en una bolsa.",
            "En un momento tranquilo, el niño dibuja seis cosas que disfruta sin preparación adulta: hacer una guarida, mirar nubes, bailar dos canciones, inventar un cómic, ordenar piedras, escuchar un audio. Cuando aparezca el aburrimiento, el menú recuerda posibilidades sin convertir al adulto en animador.",
            "Prueben 20 o 30 minutos semanales con materiales accesibles y sin objetivo de producto. Al principio puede haber quejas. El adulto puede estar disponible y hacer una tarea propia. La regularidad ayuda a aprender la transición; no hace falta imponer largos períodos.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar responder con burla, culpa o nostalgia: “En mi época no necesitábamos nada”. Tampoco romantizar el abandono, retirar apoyos de golpe o exigir juego independiente durante un tiempo que no corresponde a la edad y experiencia del niño.",
            "No convertir cada aburrimiento en manualidad ni usar una pantalla como respuesta automática o como enemigo absoluto. Ver una película puede ser una decisión familiar válida. La diferencia está en si existe elección, límite y variedad, o si cualquier incomodidad debe desaparecer inmediatamente.",
            "Y evitar evaluar el resultado: si el niño pasó veinte minutos ordenando autos en lugar de crear una obra sorprendente, el tiempo no fue desperdiciado. La autonomía puede verse silenciosa.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "Una espera acompañada",
            "Dos puertas abiertas",
            "Canasta sin instrucciones",
            "Menú creado por el niño",
            "Bloque predecible de juego libre",
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
      kicker: "Sala de Grandes",
    },
  },
  {
    id: "padres-sostenibilidad-sin-perfeccion-culpa",
    title: "Sostenibilidad familiar sin perfección ni culpa",
    summary:
      "Una familia no necesita comprar una vida ‘verde’ ni hacerlo todo: puede observar sus condiciones, elegir una práctica y conectarla con cambios colectivos.",
    section: {
      id: "padres",
      label: "Sala de Grandes",
    },
    author: null,
    publishedAt: "2026-08-24",
    updatedAt: "2026-08-24",
    readingMinutes: 9,
    image: null,
    tags: ["Sostenibilidad familiar posible"],
    featured: false,
    rank: 8,
    body: {
      format: "blocks",
      blocks: [
        {
          type: "seccion",
          title: "La situación real",
          parrafos: [
            "En el supermercado, una niña pregunta por qué compran algo con plástico “si hace mal al planeta”. El adulto sabe que la alternativa cuesta el doble o no existe. En casa, otra persona separa residuos que el sistema local no recibe. La conversación se convierte en un inventario de incoherencias: transporte, envases, ropa, comida, energía. Pareciera que cuidar exige dinero, tiempo, información perfecta y ninguna contradicción.",
            "Ese estándar es invivible. Además, enseña una idea equivocada: que la sostenibilidad depende de consumidores impecables y que una familia puede resolver mediante elecciones privadas problemas diseñados también por infraestructura, producción, regulación y desigualdad.",
          ],
        },
        {
          type: "seccion",
          title: "Qué sabemos",
          parrafos: [
            "Los estilos de vida influyen en uso de materiales, energía, emisiones, residuos y contaminación. Pero las opciones no se distribuyen de manera igual. Una persona puede preferir transporte público y vivir donde no existe; querer reparar y encontrar un producto sellado; separar un material que el municipio no recoge. El Programa de las Naciones Unidas para el Medio Ambiente define los estilos de vida sostenibles junto con el bienestar y la equidad, y subraya la necesidad de repensar cómo las sociedades se organizan y abastecen.",
            "La evidencia climática muestra que reducir demanda y mejorar servicios puede aportar de forma importante, especialmente cuando políticas, infraestructura y tecnología habilitan opciones de bajo impacto. Esto desplaza la conversación desde “elige mejor” hacia “¿qué condiciones permiten elegir y vivir mejor?”.",
            "En familia, una práctica pequeña puede tener tres valores: reducir un impacto concreto, enseñar cómo funciona un sistema y abrir participación. Su valor no necesita inflarse. Usar una botella por más tiempo ayuda a evitar reemplazos; no “salva el planeta”.",
          ],
        },
        {
          type: "seccion",
          title: "Qué significa en la práctica",
          parrafos: [
            "Una ruta realista es observar → elegir → probar → medir algo simple → revisar → conectar. Observar evita comenzar por una lista genérica. Quizá el mayor desperdicio visible son alimentos, quizá ropa que ya no sirve, una habitación que acumula calor o viajes cortos que sí podrían combinarse.",
            "Elegir una sola práctica durante dos semanas permite aprender sin reorganizar toda la vida. Medir puede ser contar panes descartados, registrar cuántos objetos se repararon o notar si una cortina reduce el calor; no hace falta calcular una huella exacta. Después se conversa sobre límites: qué dependía de la familia y qué requeriría al edificio, comercio, escuela o municipio.",
          ],
        },
        {
          type: "seccion",
          title: "Cinco cosas que podrían probar",
          parrafos: [
            "Sin tocar residuos peligrosos, miren qué aparece con frecuencia. Elijan una categoría y pregunten si puede evitarse, reutilizarse o gestionarse de otra forma localmente. Usen guantes cuando corresponda y lávense las manos. No expongan ni avergüencen a quien compró algo.",
            "Designen una zona visible para alimentos que deben consumirse primero. Inventen una comida con sobras que hayan sido conservadas de forma segura y registren qué suele quedar. La seguridad alimentaria y las necesidades nutricionales están primero; no obliguen a comer de más para “no desperdiciar”.",
            "Elijan un juguete, prenda o utensilio que pueda limpiarse, coserse o ajustarse de forma segura. Si repararlo no es viable, investiguen donación, repuesto o gestión local. No desmonten aparatos eléctricos ni objetos con baterías sin conocimiento y supervisión.",
            "Observen sol, sombra y ventilación antes de encender calefacción o refrigeración, cuando el clima y la seguridad lo permitan. Prueben cortinas, sellos, horarios o ventilación cruzada. En calor o frío extremos, la salud tiene prioridad: no reduzcan climatización necesaria para cumplir una meta ambiental.",
            "Escriban a la escuela, administración o municipio: ¿qué materiales recibe el reciclaje?, ¿hay sombra en el patio?, ¿puede existir un punto de reparación o intercambio? Participar muestra que cuidar también es diseñar reglas y servicios, no solo comprar.",
          ],
        },
        {
          type: "seccion",
          title: "Qué conviene evitar",
          parrafos: [
            "Evitar que el niño sea policía ecológica de la casa o que una compra inevitable se convierta en confesión de culpa. No comparar familias: ingreso, vivienda, discapacidad, cuidado, ubicación y tiempo cambian las posibilidades. Tampoco reemplazar objetos que funcionan solo para adquirir una versión comercializada como “verde”; fabricar lo nuevo también usa recursos.",
            "Desconfiar de afirmaciones vagas como “natural”, “eco”, “biodegradable” o “reciclable” sin condiciones. Pregunten respecto de qué mejora, en qué etapa y si el sistema local puede procesarlo. Y no asumir que una acción individual elimina la necesidad de regulación y responsabilidad empresarial.",
          ],
        },
        {
          type: "prueben",
          title: "Prueben esta noche",
          pasos: [
            "Auditoría amable de una basura",
            "Semana de aprovechar comida",
            "Clínica de objetos",
            "Confort antes que aparato",
            "Una pregunta pública",
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
      kicker: "Sala de Grandes",
    },
  },
];
