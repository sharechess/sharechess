import { SquareStyle } from "../../types";
import createGradient from "../fill/createGradient";
import createPattern from "../fill/createPattern";

const drawSquare = async (
  ctx: CanvasRenderingContext2D,
  squareSize: number,
  x: number,
  y: number,
  squareStyle: SquareStyle
) => {
  const fill = await (squareStyle.type === "solid"
    ? squareStyle.data.color
    : squareStyle.type === "gradient"
    ? createGradient(ctx, squareStyle.data, squareSize, x, y)
    : createPattern(ctx, squareStyle.data));

  if (fill === null) {
    throw new Error("Cannot create canvas fill style");
  }

  ctx.fillStyle = fill;
  ctx.fillRect(x, y, squareSize, squareSize);
};

export default drawSquare;
