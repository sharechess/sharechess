const drawText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string,
  fontSize: number,
  fontWeight: number,
  x: number,
  y: number,
  align: CanvasTextAlign,
  maxWidth?: number
) => {
  ctx.font = `${fontWeight} ${fontSize}px ${font}`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y, maxWidth);

  return Math.ceil(ctx.measureText(text).width);
};

export default drawText;
