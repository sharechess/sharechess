import { Coords } from "../../types";

const BASE_FONT_SIZE = 20;
const FONT_FAMILY = "Fira Mono";

const drawCoords = (
  ctx: CanvasRenderingContext2D,
  coords: Coords,
  squareSize: number,
  tiles: number,
  blackSide: boolean = false,
  borderWidth: number,
  size: number,
  hasBorder: boolean,
  margin: number
) => {
  const scale = size / 1024;

  if (scale <= 0.32) {
    return;
  }

  const fontSize = BASE_FONT_SIZE * scale;
  const offsetA = 6 * scale;
  const offsetB = 4 * scale;

  const ranks =
    "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26"
      .split(",")
      .slice(0, tiles);
  const orderedRanks = blackSide ? ranks : ranks.reverse();

  ctx.font = `${fontSize}px ${FONT_FAMILY}`;
  ctx.textBaseline = hasBorder ? "middle" : "top";

  orderedRanks.forEach((v, i) => {
    ctx.fillStyle =
      borderWidth > 0
        ? coords.onBorder
        : i % 2 === 0
        ? coords.onLight
        : coords.onDark;

    const x = hasBorder ? borderWidth / 2 : offsetA;
    const y =
      (hasBorder
        ? squareSize * i + borderWidth + squareSize / 2
        : squareSize * i + offsetA) + margin;

    ctx.textAlign = hasBorder ? "center" : "left";
    ctx.fillText(v, x, y);
  });

  const files = "ABCDEFGHIJKLMNOPQRSTUWVXYZ".split("").slice(0, tiles);
  const orderedFiles = blackSide ? files.reverse() : files;

  ctx.textBaseline = hasBorder ? "middle" : "bottom";

  orderedFiles.forEach((v, i) => {
    ctx.fillStyle =
      borderWidth > 0
        ? coords.onBorder
        : i % 2 === 0
        ? coords.onDark
        : coords.onLight;

    const x = hasBorder
      ? squareSize * i + borderWidth + squareSize / 2
      : squareSize * i + offsetA;
    const y = (hasBorder ? size - borderWidth / 2 : size - offsetB) + margin;

    ctx.textAlign = hasBorder ? "center" : "left";
    ctx.fillText(v, x, y);
  });
};

export default drawCoords;
