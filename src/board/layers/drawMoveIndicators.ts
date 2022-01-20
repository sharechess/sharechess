import { Move } from "chess.js";
import { Style, SquareStyle } from "../../types";
import drawRectangle from "./drawRectangle";

const FILES = "abcdefghijklmnopqrstuwvxyz";

const notationToXY = (notation: string, flipped: boolean, tiles: number) => {
  const x = FILES.indexOf(notation[0]);
  const y = Number(notation[1]) - 1;

  return [flipped ? tiles - x - 1 : x, flipped ? y : tiles - y - 1];
};

const drawMoveIndicators = async (
  ctx: CanvasRenderingContext2D,
  move: Move,
  squareSize: number,
  { dark, light, moveIndicator }: Style,
  borderWidth: number,
  tiles: number,
  flipped: boolean,
  margin: number
) => {
  const [x0, y0] = notationToXY(move.from, flipped, tiles);
  const [x1, y1] = notationToXY(move.to, flipped, tiles);

  const [fromX, fromY, toX, toY] = [x0, y0, x1, y1].map(
    (v) => v * squareSize + borderWidth
  );

  let fromStyle;
  let toStyle;

  if (moveIndicator.type === "hueShift") {
    ctx.filter = `hue-rotate(${moveIndicator.data}deg)`;
    fromStyle = (x0 + y0) % 2 === 0 ? light : dark;
    toStyle = (x1 + y1) % 2 === 0 ? light : dark;
  } else {
    fromStyle = {
      type: "solid",
      data: { color: moveIndicator.data },
    } as SquareStyle;
    toStyle = fromStyle;
  }

  drawRectangle(ctx, squareSize, squareSize, fromX, fromY + margin, fromStyle);
  drawRectangle(ctx, squareSize, squareSize, toX, toY + margin, toStyle);
};

export default drawMoveIndicators;
