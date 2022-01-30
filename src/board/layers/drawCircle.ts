const drawCircle = async (
  ctx: CanvasRenderingContext2D,
  radius: number,
  x: number,
  y: number,
  thickness: number,
  color: string,
  fill: boolean = false
) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.beginPath();
  ctx.arc(x + radius, y + radius, radius - thickness / 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();

  if (fill) {
    ctx.fillStyle = color;
    ctx.fill();
  }
};

export default drawCircle;
