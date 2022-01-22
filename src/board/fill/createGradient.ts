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
  let gradient: CanvasGradient;

  if (data.dir === "radial") {
    const radius = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    gradient = ctx.createRadialGradient(
      x + width / 2,
      y + height / 2,
      radius,
      x + width / 2,
      y + height / 2,
      0
    );
  } else {
    const [dirXStart, dirYStart, dirXStop, dirYStop] = gradientDirs[data.dir];
    gradient = ctx.createLinearGradient(
      x + dirXStart * width,
      y + dirYStart * height,
      x + dirXStop * width,
      y + dirYStop * height
    );
  }

  const maxIndex = data.colors.length - 1;

  data.colors.forEach((color, i) => {
    gradient.addColorStop(i / maxIndex, color);
  });

  return gradient;
};

export default createGradient;
