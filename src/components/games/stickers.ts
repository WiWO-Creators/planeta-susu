/** Stickers dibujados: objetos que un niño reconoce, con cara y trazo gordo. */

const INK = "#1f1408";

export function ink(ctx: CanvasRenderingContext2D, w = 4) {
  ctx.strokeStyle = INK;
  ctx.lineWidth = w;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
}

export function face(ctx: CanvasRenderingContext2D, s: number, mood: "happy" | "wow" | "tiny" = "happy") {
  ctx.fillStyle = INK;
  const e = s * 0.09;
  ctx.beginPath();
  ctx.arc(-s * 0.14, -s * 0.06, e, 0, Math.PI * 2);
  ctx.arc(s * 0.14, -s * 0.06, e, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  if (mood === "wow") {
    ctx.ellipse(0, s * 0.16, s * 0.1, s * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.strokeStyle = INK;
    ctx.lineWidth = Math.max(2, s * 0.06);
    ctx.arc(0, s * 0.08, s * 0.16, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
  }
}

function fillStroke(ctx: CanvasRenderingContext2D) {
  ctx.fill();
  ctx.stroke();
}

export function drawBanana(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#ffd000";
  ctx.beginPath();
  ctx.moveTo(-s * 0.42, s * 0.1);
  ctx.quadraticCurveTo(-s * 0.1, s * 0.55, s * 0.38, s * 0.18);
  ctx.quadraticCurveTo(s * 0.5, s * 0.05, s * 0.4, -s * 0.05);
  ctx.quadraticCurveTo(-s * 0.05, s * 0.28, -s * 0.4, -s * 0.08);
  ctx.quadraticCurveTo(-s * 0.52, 0, -s * 0.42, s * 0.1);
  fillStroke(ctx);
  ctx.fillStyle = "#7a4a12";
  ctx.beginPath();
  ctx.arc(-s * 0.42, 0, s * 0.07, 0, Math.PI * 2);
  fillStroke(ctx);
  face(ctx, s * 0.85);
}

export function drawApple(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#e23b4a";
  ctx.beginPath();
  ctx.arc(-s * 0.16, s * 0.06, s * 0.34, 0, Math.PI * 2);
  ctx.arc(s * 0.16, s * 0.06, s * 0.34, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, s * 0.08, s * 0.4, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.fillStyle = "#2ebe7a";
  ctx.beginPath();
  ctx.ellipse(s * 0.22, -s * 0.32, s * 0.16, s * 0.1, -0.6, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.22);
  ctx.lineTo(0, -s * 0.42);
  ctx.stroke();
  face(ctx, s * 0.8);
}

export function drawLeaves(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#2ebe7a";
  for (const [dx, rot] of [
    [-0.18, -0.5],
    [0.18, 0.4],
  ] as const) {
    ctx.save();
    ctx.translate(dx * s, 0);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.18, s * 0.38, 0, 0, Math.PI * 2);
    fillStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.3);
    ctx.lineTo(0, s * 0.3);
    ctx.stroke();
    ctx.restore();
  }
}

export function drawBottle(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#5fade9";
  ctx.beginPath();
  ctx.moveTo(-s * 0.22, s * 0.42);
  ctx.lineTo(-s * 0.22, -s * 0.02);
  ctx.quadraticCurveTo(-s * 0.22, -s * 0.18, -s * 0.1, -s * 0.22);
  ctx.lineTo(-s * 0.1, -s * 0.42);
  ctx.lineTo(s * 0.1, -s * 0.42);
  ctx.lineTo(s * 0.1, -s * 0.22);
  ctx.quadraticCurveTo(s * 0.22, -s * 0.18, s * 0.22, -s * 0.02);
  ctx.lineTo(s * 0.22, s * 0.42);
  ctx.closePath();
  fillStroke(ctx);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillRect(-s * 0.14, -s * 0.05, s * 0.08, s * 0.32);
  ctx.fillStyle = "#ea9e48";
  ctx.fillRect(-s * 0.1, -s * 0.46, s * 0.2, s * 0.1);
  ctx.strokeRect(-s * 0.1, -s * 0.46, s * 0.2, s * 0.1);
  face(ctx, s * 0.7, "tiny");
}

export function drawPaper(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#fff6d8";
  ctx.beginPath();
  ctx.moveTo(-s * 0.32, -s * 0.38);
  ctx.lineTo(s * 0.22, -s * 0.38);
  ctx.lineTo(s * 0.38, -s * 0.18);
  ctx.lineTo(s * 0.38, s * 0.38);
  ctx.lineTo(-s * 0.32, s * 0.38);
  ctx.closePath();
  fillStroke(ctx);
  ctx.beginPath();
  ctx.moveTo(s * 0.22, -s * 0.38);
  ctx.lineTo(s * 0.22, -s * 0.18);
  ctx.lineTo(s * 0.38, -s * 0.18);
  ctx.stroke();
  ctx.strokeStyle = "#c9b48a";
  ctx.lineWidth = 2;
  for (const y of [-0.08, 0.06, 0.2]) {
    ctx.beginPath();
    ctx.moveTo(-s * 0.2, y * s);
    ctx.lineTo(s * 0.22, y * s);
    ctx.stroke();
  }
}

export function drawCan(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#b8b0a4";
  ctx.beginPath();
  ctx.roundRect(-s * 0.28, -s * 0.32, s * 0.56, s * 0.7, 8);
  fillStroke(ctx);
  ctx.fillStyle = "#d7655c";
  ctx.fillRect(-s * 0.28, -s * 0.08, s * 0.56, s * 0.22);
  ctx.strokeRect(-s * 0.28, -s * 0.08, s * 0.56, s * 0.22);
  ctx.beginPath();
  ctx.ellipse(0, -s * 0.32, s * 0.28, s * 0.1, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#d8d2c8";
  fillStroke(ctx);
  face(ctx, s * 0.65);
}

export function drawCarton(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#ea9e48";
  ctx.beginPath();
  ctx.rect(-s * 0.32, -s * 0.22, s * 0.64, s * 0.52);
  fillStroke(ctx);
  ctx.fillStyle = "#c47d2c";
  ctx.beginPath();
  ctx.moveTo(-s * 0.32, -s * 0.22);
  ctx.lineTo(0, -s * 0.42);
  ctx.lineTo(s * 0.32, -s * 0.22);
  ctx.closePath();
  fillStroke(ctx);
  ctx.fillStyle = "#fff6d8";
  ctx.beginPath();
  ctx.arc(0, 0.05 * s, s * 0.12, 0, Math.PI * 2);
  fillStroke(ctx);
}

export function drawBag(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#ff5d8f";
  ctx.beginPath();
  ctx.moveTo(-s * 0.32, s * 0.38);
  ctx.quadraticCurveTo(-s * 0.42, 0, -s * 0.18, -s * 0.28);
  ctx.lineTo(s * 0.18, -s * 0.28);
  ctx.quadraticCurveTo(s * 0.42, 0, s * 0.32, s * 0.38);
  ctx.closePath();
  fillStroke(ctx);
  ctx.beginPath();
  ctx.moveTo(-s * 0.12, -s * 0.28);
  ctx.quadraticCurveTo(0, -s * 0.5, s * 0.12, -s * 0.28);
  ctx.stroke();
  face(ctx, s * 0.7);
}

export function drawGum(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#6c3ce0";
  ctx.beginPath();
  ctx.ellipse(0, 0.06 * s, s * 0.34, s * 0.22, 0, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.fillStyle = "#ffd000";
  ctx.beginPath();
  ctx.ellipse(0, -s * 0.12, s * 0.28, s * 0.12, 0, 0, Math.PI * 2);
  fillStroke(ctx);
  face(ctx, s * 0.55, "tiny");
}

export const ITEM_DRAW: Record<string, (ctx: CanvasRenderingContext2D, s: number) => void> = {
  Cáscara: drawBanana,
  Manzana: drawApple,
  Hojas: drawLeaves,
  Botella: drawBottle,
  Papel: drawPaper,
  Lata: drawCan,
  Cartón: drawCarton,
  Bolsa: drawBag,
  Chicle: drawGum,
};

export function drawBin(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string,
  label: string,
  kind: "org" | "rec" | "otr",
) {
  ink(ctx, 4);
  ctx.fillStyle = color;
  const lid = h * 0.18;
  ctx.beginPath();
  ctx.roundRect(x + w * 0.08, y + lid, w * 0.84, h - lid, 16);
  fillStroke(ctx);
  ctx.beginPath();
  ctx.roundRect(x, y, w, lid + 8, 10);
  fillStroke(ctx);
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.beginPath();
  ctx.roundRect(x + w * 0.18, y + lid + 12, w * 0.64, 14, 7);
  ctx.fill();

  ctx.save();
  ctx.translate(x + w / 2, y + h * 0.52);
  ctx.fillStyle = kind === "otr" ? "#fff6d8" : INK;
  if (kind === "org") {
    ctx.fillStyle = "#fff6d8";
    ctx.beginPath();
    ctx.ellipse(0, 4, 16, 28, 0.3, 0, Math.PI * 2);
    ctx.fill();
  } else if (kind === "rec") {
    ctx.strokeStyle = "#fff6d8";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 4, 18, 0.2, Math.PI * 1.6);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12, -8);
    ctx.lineTo(18, 2);
    ctx.lineTo(6, 2);
    ctx.closePath();
    ctx.fillStyle = "#fff6d8";
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(-14, -8);
    ctx.lineTo(14, -8);
    ctx.lineTo(10, 20);
    ctx.lineTo(-10, 20);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  ctx.fillStyle = kind === "otr" ? "#fff6d8" : INK;
  if (kind === "org" || kind === "rec") ctx.fillStyle = INK;
  ctx.font = "700 16px Fredoka, Nunito, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = kind === "otr" ? "#fff6d8" : INK;
  ctx.fillText(label, x + w / 2, y + h - 12);
}

export function drawPlanet(ctx: CanvasRenderingContext2D, r: number, color: string, ring: boolean) {
  ink(ctx, 4);
  if (ring) {
    ctx.strokeStyle = "#ffd000";
    ctx.lineWidth = Math.max(4, r * 0.18);
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 1.45, r * 0.38, -0.25, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = INK;
  ctx.beginPath();
  ctx.arc(0, 0, r + 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(0,0,0,0.12)";
  ctx.beginPath();
  ctx.arc(-r * 0.25, r * 0.15, r * 0.22, 0, Math.PI * 2);
  ctx.arc(r * 0.28, -r * 0.1, r * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.beginPath();
  ctx.arc(-r * 0.28, -r * 0.28, r * 0.16, 0, Math.PI * 2);
  ctx.fill();
  face(ctx, r * 1.5, "wow");
}

export function drawBalloon(ctx: CanvasRenderingContext2D, r: number, color: string) {
  ink(ctx, 4);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.1, r * 0.85, r, 0, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.beginPath();
  ctx.moveTo(-r * 0.12, r * 0.85);
  ctx.lineTo(0, r * 1.05);
  ctx.lineTo(r * 0.12, r * 0.85);
  ctx.closePath();
  fillStroke(ctx);
  ctx.beginPath();
  ctx.moveTo(0, r * 1.05);
  ctx.quadraticCurveTo(r * 0.2, r * 1.5, 0, r * 1.9);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.beginPath();
  ctx.ellipse(-r * 0.25, -r * 0.35, r * 0.18, r * 0.28, -0.4, 0, Math.PI * 2);
  ctx.fill();
  face(ctx, r * 1.2);
}

export function drawBread(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#ea9e48";
  ctx.beginPath();
  ctx.roundRect(-s * 0.45, -s * 0.18, s * 0.9, s * 0.36, 12);
  fillStroke(ctx);
  ctx.fillStyle = "#fff1c4";
  ctx.beginPath();
  ctx.roundRect(-s * 0.38, -s * 0.1, s * 0.76, s * 0.2, 8);
  ctx.fill();
}

export function drawTomato(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#e23b4a";
  ctx.beginPath();
  ctx.ellipse(0, 0.04 * s, s * 0.42, s * 0.16, 0, 0, Math.PI * 2);
  fillStroke(ctx);
}

export function drawLettuce(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#2ebe7a";
  ctx.beginPath();
  ctx.ellipse(0, 0, s * 0.46, s * 0.18, 0, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.beginPath();
  ctx.ellipse(-s * 0.2, 0, s * 0.2, s * 0.14, -0.3, 0, Math.PI * 2);
  ctx.fill();
}

export function drawCheese(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#ffd000";
  ctx.beginPath();
  ctx.roundRect(-s * 0.42, -s * 0.12, s * 0.84, s * 0.24, 6);
  fillStroke(ctx);
  ctx.fillStyle = "#f0b400";
  ctx.beginPath();
  ctx.arc(-s * 0.15, 0, s * 0.05, 0, Math.PI * 2);
  ctx.arc(s * 0.18, 0.02 * s, s * 0.04, 0, Math.PI * 2);
  ctx.fill();
}

export function drawSun(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#ffd000";
  for (let i = 0; i < 8; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 4);
    ctx.beginPath();
    ctx.roundRect(-s * 0.06, -s * 0.62, s * 0.12, s * 0.18, 4);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  ctx.beginPath();
  ctx.arc(0, 0, s * 0.38, 0, Math.PI * 2);
  fillStroke(ctx);
  face(ctx, s * 0.7);
}

export function drawCloud(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#fff6d8";
  ctx.beginPath();
  ctx.arc(-s * 0.22, 0.06 * s, s * 0.22, 0, Math.PI * 2);
  ctx.arc(s * 0.22, 0.06 * s, s * 0.22, 0, Math.PI * 2);
  ctx.arc(0, -s * 0.1, s * 0.28, 0, Math.PI * 2);
  fillStroke(ctx);
}

export function drawDrop(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#5fade9";
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.5);
  ctx.quadraticCurveTo(s * 0.42, s * 0.1, 0, s * 0.42);
  ctx.quadraticCurveTo(-s * 0.42, s * 0.1, 0, -s * 0.5);
  fillStroke(ctx);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.beginPath();
  ctx.ellipse(-s * 0.08, 0, s * 0.08, s * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  face(ctx, s * 0.7, "tiny");
}

export function drawSea(ctx: CanvasRenderingContext2D, s: number) {
  ink(ctx, 4);
  ctx.fillStyle = "#5579df";
  ctx.beginPath();
  ctx.ellipse(0, s * 0.1, s * 0.5, s * 0.28, 0, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.strokeStyle = "#fff6d8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-s * 0.28, s * 0.05);
  ctx.quadraticCurveTo(-s * 0.1, -s * 0.05, 0, s * 0.05);
  ctx.quadraticCurveTo(s * 0.1, s * 0.14, s * 0.28, s * 0.05);
  ctx.stroke();
}

export function drawBead(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ink(ctx, 4);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
  fillStroke(ctx);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.beginPath();
  ctx.arc(-s * 0.15, -s * 0.15, s * 0.12, 0, Math.PI * 2);
  ctx.fill();
  face(ctx, s * 0.7, "tiny");
}
