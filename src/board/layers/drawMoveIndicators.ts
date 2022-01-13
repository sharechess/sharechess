import { Move } from "chess.js";
import { SquareStyle } from "../../types";
import drawSquare from "./drawSquare";

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
  squareStyle: SquareStyle,
  borderWidth: number,
  tiles: number,
  flipped: boolean = false
) => {
  const [fromX, fromY, toX, toY] = [
    ...notationToXY(move.from, flipped, tiles),
    ...notationToXY(move.to, flipped, tiles),
  ].map((v) => v * squareSize + borderWidth);

  drawSquare(ctx, squareSize, fromX, fromY, squareStyle);
  drawSquare(ctx, squareSize, toX, toY, squareStyle);
};

export default drawMoveIndicators;
