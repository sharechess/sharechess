import { SquareStyle } from "../../types";
import createGradient from "../fill/createGradient";
import loadImage from "../loaders/loadImage";

const drawRectangle = async (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  x: number,
  y: number,
  squareStyle: SquareStyle
) => {
  if (squareStyle.type === "image") {
    const img = await loadImage(squareStyle.data.src);
    ctx.drawImage(img, x, y, width, height);
    return;
  }

  const fill = await (squareStyle.type === "solid"
    ? squareStyle.data.color
    : createGradient(ctx, squareStyle.data, width, height, x, y));

  if (fill === null) {
    throw new Error("Cannot create canvas fill style");
  }

  ctx.fillStyle = fill;
  ctx.fillRect(x, y, width, height);
};

export default drawRectangle;
