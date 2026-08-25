export const ART = {
  banana: "/games/banana.webp",
  apple: "/games/apple.webp",
  leaves: "/games/leaves.webp",
  bottle: "/games/bottle.webp",
  paper: "/games/paper.webp",
  can: "/games/can.webp",
  carton: "/games/carton.webp",
  bag: "/games/bag.webp",
  gum: "/games/gum.webp",
  binOrg: "/games/bin-org.webp",
  binRec: "/games/bin-rec.webp",
  binOtr: "/games/bin-otr.webp",
  planetBlue: "/games/planet-blue.webp",
  planetYellow: "/games/planet-yellow.webp",
  planetPurple: "/games/planet-purple.webp",
  planetGreen: "/games/planet-green.webp",
  balloonPink: "/games/balloon-pink.webp",
  balloonYellow: "/games/balloon-yellow.webp",
  balloonGreen: "/games/balloon-green.webp",
  balloonOrange: "/games/balloon-orange.webp",
  bread: "/games/bread.webp",
  tomato: "/games/tomato.webp",
  lettuce: "/games/lettuce.webp",
  cheese: "/games/cheese.webp",
  sun: "/games/sun.webp",
  cloud: "/games/cloud.webp",
  drop: "/games/drop.webp",
  wave: "/games/wave.webp",
  plate: "/games/plate.webp",
  beadYellow: "/games/bead-yellow.webp",
  beadPurple: "/games/bead-purple.webp",
  beadGreen: "/games/bead-green.webp",
  beadPink: "/games/bead-pink.webp",
  beadBlue: "/games/bead-blue.webp",
} as const;

export const TRASH_ART: Record<string, string> = {
  Cáscara: ART.banana,
  Manzana: ART.apple,
  Hojas: ART.leaves,
  Botella: ART.bottle,
  Papel: ART.paper,
  Lata: ART.can,
  Cartón: ART.carton,
  Bolsa: ART.bag,
  Chicle: ART.gum,
};

export const PLANET_ART = [ART.planetBlue, ART.planetYellow, ART.planetPurple, ART.planetGreen];
export const BALLOON_ART = [ART.balloonPink, ART.balloonYellow, ART.balloonGreen, ART.balloonOrange];
export const BEAD_ART = [
  { color: "#ffd000", src: ART.beadYellow, name: "sol" },
  { color: "#6c3ce0", src: ART.beadPurple, name: "uva" },
  { color: "#2ebe7a", src: ART.beadGreen, name: "hoja" },
  { color: "#ff5d8f", src: ART.beadPink, name: "chicle" },
  { color: "#5579df", src: ART.beadBlue, name: "cielo" },
];

export function loadImages(srcs: string[]): Promise<Record<string, HTMLImageElement>> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<[string, HTMLImageElement]>((resolve) => {
          const img = new Image();
          img.onload = () => resolve([src, img]);
          img.onerror = () => resolve([src, img]);
          img.src = src;
        }),
    ),
  ).then((entries) => Object.fromEntries(entries));
}

export function blit(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement | undefined,
  x: number,
  y: number,
  size: number,
) {
  if (!img || !img.complete || !img.naturalWidth) return false;
  ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
  return true;
}
