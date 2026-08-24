export type Sticker = {
  id: string;
  name: string;
  hint: string;
  cover: string;
  requireStars?: number;
  requireId?: string;
  requirePrefix?: string;
  requireCount?: number;
  requireStreak?: number;
};

export const STICKERS: Sticker[] = [
  { id: "primera", name: "Primera estrella", hint: "Gana tu primera estrella", cover: "/scenes/fiesta-estrellas.jpg", requireStars: 1 },
  { id: "lector", name: "Lector esponjoso", hint: "Termina un cuento", cover: "/scenes/biblioteca.jpg", requirePrefix: "story:", requireCount: 1 },
  { id: "biblioteca", name: "Biblioteca del patio", hint: "Lee 3 cuentos", cover: "/scenes/grupo-lee.jpg", requirePrefix: "story:", requireCount: 3 },
  { id: "saga", name: "Saga del planeta", hint: "Lee 8 cuentos", cover: "/scenes/susu-lee.jpg", requirePrefix: "story:", requireCount: 8 },
  { id: "jugador", name: "Manos a jugar", hint: "Termina un juego", cover: "/scenes/gadu-juega.jpg", requirePrefix: "game:", requireCount: 1 },
  { id: "arcade", name: "Arcade del recreo", hint: "Gana 5 juegos", cover: "/scenes/vector-lab.jpg", requirePrefix: "game:", requireCount: 5 },
  { id: "campeon", name: "Campeón del patio", hint: "Gana 10 juegos", cover: "/scenes/fiesta-estrellas.jpg", requirePrefix: "game:", requireCount: 10 },
  { id: "cientifico", name: "Bata de cartón", hint: "Completa una lección", cover: "/scenes/cocina-lab.jpg", requirePrefix: "lesson:", requireCount: 1 },
  { id: "sabio", name: "Cabeza de preguntas", hint: "Completa 4 lecciones", cover: "/scenes/gadu-estrellas.jpg", requirePrefix: "lesson:", requireCount: 4 },
  { id: "ficha", name: "Coleccionista de fichas", hint: "Lee una ficha o carta", cover: "/scenes/biblioteca.jpg", requirePrefix: "read:", requireCount: 1 },
  { id: "archivo", name: "Archivo del recreo", hint: "Lee 8 lecturas", cover: "/scenes/jardin-rimas.jpg", requirePrefix: "read:", requireCount: 8 },
  { id: "rio", name: "Amigo del río", hint: "Lee el cuento del río", cover: "/scenes/zizu-rio.jpg", requireId: "story:rio-triste" },
  { id: "pintor", name: "Mancha valiente", hint: "Entra al taller de Margarel", cover: "/scenes/margarel-taller.jpg", requireId: "game:colores" },
  { id: "sombra", name: "Detective de sombras", hint: "Gana ¿Quién es esa sombra?", cover: "/scenes/patio-sombras.jpg", requireId: "game:siluetas" },
  { id: "gota", name: "Viajera del agua", hint: "Completa el viaje del agua", cover: "/scenes/ciclo-agua.jpg", requireId: "game:ciclo" },
  { id: "poeta", name: "Poeta del patio", hint: "Gana Rimas de Margarel", cover: "/scenes/jardin-rimas.jpg", requireId: "game:rimas" },
  { id: "constancia", name: "Tres amaneceres", hint: "Visita el planeta 3 días seguidos", cover: "/scenes/misiones.jpg", requireStreak: 3 },
  { id: "semana", name: "Semana brillante", hint: "Racha de 7 días", cover: "/scenes/gadu-estrellas.jpg", requireStreak: 7 },
  { id: "estrella", name: "Estrella del planeta", hint: "Junta 100 estrellas", cover: "/scenes/fiesta-estrellas.jpg", requireStars: 100 },
  { id: "constelacion", name: "Constelación", hint: "Junta 200 estrellas", cover: "/scenes/planetas-contar.jpg", requireStars: 200 },
];
