import { GradientData } from "../../types";

const gradientDirs = {
  horizontal: [0, 0, 1, 0],
  vertical: [0, 0, 0, 1],
  "diagonal-top": [0, 0, 1, 1],
  "diagonal-bottom": [0, 1, 1, 0],
};

const createGradient = (
  ctx: CanvasRenderingContext2D,
  data: GradientData,
  width: number,
  height: number,
  x: number,
  y: number
) => {
  const [dirXStart, dirYStart, dirXStop, dirYStop] = gradientDirs[data.dir];
  const gradient = ctx.createLinearGradient(
    x + dirXStart * width,
    y + dirYStart * height,
    x + dirXStop * width,
    y + dirYStop * height
  );

  const maxIndex = data.colors.length - 1;

  data.colors.forEach((color, i) => {
    gradient.addColorStop(i / maxIndex, color);
  });

  return gradient;
};

export default createGradient;
