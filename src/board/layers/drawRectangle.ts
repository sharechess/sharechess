import { LoadImage, SquareStyle } from "../../types";
import createGradient from "../fill/createGradient";

const drawRectangle = async (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  x: number,
  y: number,
  squareStyle: SquareStyle,
  loadImage: LoadImage,
  tiles: number = 8
) => {
  const layers = Array.isArray(squareStyle) ? squareStyle : [squareStyle];

  for (const layer of layers) {
    if (layer.type === "image") {
      const img = await loadImage(layer.data.src);

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

      continue;
    }

    const fill = await (layer.type === "solid"
      ? layer.data.color
      : createGradient(ctx, layer.data, width, height, x, y));

    if (fill === null) {
      throw new Error("Cannot create canvas fill style");
    }

    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
  }
};

export default drawRectangle;
