const drawText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  fontSize: number,
  fontWeight: number,
  x: number,
  y: number,
  align: CanvasTextAlign
) => {
  ctx.font = `${fontWeight} ${fontSize}px Ubuntu`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
};

export default drawText;
