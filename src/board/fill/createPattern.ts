import { ImageData } from "../../types";
import loadImage from "../loaders/loadImage";

const createPattern = async (
  ctx: CanvasRenderingContext2D,
  data: ImageData
) => {
  const img = await loadImage(data.src);
  return ctx.createPattern(img, "repeat");
};

export default createPattern;
