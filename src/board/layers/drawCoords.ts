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
  size: number
) => {
  const scale = size / 1024;

  if (scale <= 0.25) {
    return;
  }

  const fontSize = BASE_FONT_SIZE * scale;
  const offset = 10;
  const offsetFileX =
    borderWidth > 0 ? borderWidth + squareSize / 2 : offset * scale;
  const offsetFileY =
    borderWidth > 0 ? -borderWidth * 2 + offset * scale : offset * scale;
  const offsetRankX = borderWidth > 0 ? borderWidth / 2 : offset * scale;
  const offsetRankY =
    borderWidth > 0
      ? borderWidth + squareSize / 2 - fontSize / 2
      : offset * scale;

  const ranks =
    "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26"
      .split(",")
      .slice(0, tiles);
  const orderedRanks = blackSide ? ranks : ranks.reverse();

  ctx.font = `${fontSize}px ${FONT_FAMILY}`;

  orderedRanks.forEach((v, i) => {
    ctx.fillStyle =
      borderWidth > 0
        ? coords.onBorder
        : i % 2 === 0
        ? coords.onLight
        : coords.onDark;

    ctx.textAlign = borderWidth > 0 ? "center" : "left";
    ctx.fillText(v, offsetRankX, squareSize * i + fontSize + offsetRankY);
  });

  const files = "ABCDEFGHIJKLMNOPQRSTUWVXYZ".split("").slice(0, tiles);
  const orderedFiles = blackSide ? files.reverse() : files;

  orderedFiles.forEach((v, i) => {
    ctx.fillStyle =
      borderWidth > 0
        ? coords.onBorder
        : i % 2 === 0
        ? coords.onDark
        : coords.onLight;

    ctx.textAlign = borderWidth > 0 ? "center" : "left";
    ctx.fillText(
      v,
      squareSize * i + offsetFileX,
      squareSize * tiles - offsetFileY
    );
  });
};

export default drawCoords;
