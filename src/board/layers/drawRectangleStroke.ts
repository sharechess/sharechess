const drawRectangleStroke = async (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  x: number,
  y: number,
  thickness: number,
  color: string
) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.strokeRect(
    x + thickness / 2,
    y + thickness / 2,
    width - thickness,
    height - thickness
  );
  ctx.stroke();
};

export default drawRectangleStroke;
