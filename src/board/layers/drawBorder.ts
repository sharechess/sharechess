import { SquareStyle } from "../../types";
import createGradient from "../fill/createGradient";
import createPattern from "../fill/createPattern";

const drawBorder = async (
  ctx: CanvasRenderingContext2D,
  size: number,
  x: number,
  y: number,
  width: number,
  squareStyle: SquareStyle
) => {
  const fill = await (squareStyle.type === "solid"
    ? squareStyle.data.color
    : squareStyle.type === "gradient"
    ? createGradient(ctx, squareStyle.data, size, x, y)
    : createPattern(ctx, squareStyle.data));

  if (fill === null) {
    throw new Error("Cannot create canvas fill style");
  }

  ctx.lineWidth = width;
  ctx.strokeStyle = fill;
  ctx.strokeRect(x, y, size, size);
};

export default drawBorder;
