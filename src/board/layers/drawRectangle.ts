import { SquareStyle } from "../../types";
import createGradient from "../fill/createGradient";
import loadImage from "../loaders/loadImage";

const drawRectangle = async (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  x: number,
  y: number,
  squareStyle: SquareStyle,
  tiles: number = 8
) => {
  if (squareStyle.type === "image") {
    const img = await loadImage(squareStyle.data.src);

    if (tiles < 8) {
      ctx.drawImage(
        img,
        0,
        0,
        img.width * (tiles / 8),
        img.height * (tiles / 8),
        x,
        y,
        width,
        height
      );
    } else {
      ctx.drawImage(img, x, y, width, height);
    }

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
