import { Header, Style } from "../../types";
import drawRectangle from "./drawRectangle";
import drawText from "./drawText";

const drawHeader = async (
  ctx: CanvasRenderingContext2D,
  size: number,
  scale: number,
  margin: number,
  style: Style,
  data: Header
) => {
  ctx.clearRect(0, 0, size, size);
  await drawRectangle(ctx, size, size + margin * 2, 0, 0, style.border);

  const font = "Ubuntu";

  const allSizes = [
    { key: "WhitePretty", line: 60 * scale, fontSize: 42 * scale, n: 0 },
    { key: "BlackPretty", line: 60 * scale, fontSize: 42 * scale, n: 2 },
    { key: "Event", line: 30 * scale, fontSize: 20 * scale, n: 4 },
    { key: "Round", line: 30 * scale, fontSize: 20 * scale, n: 5 },
    { key: "DatePretty", line: 30 * scale, fontSize: 20 * scale, n: 7 },
    { key: "Site", line: 30 * scale, fontSize: 20 * scale, n: 8 },
  ];

  const keys = new Set(Object.keys(data));

  const sizes = allSizes.filter(({ key }) => keys.has(key));

  if (data.WhitePretty && data.BlackPretty) {
    sizes.push({ key: "vs", line: 50 * scale, fontSize: 20 * scale, n: 1 });
  }

  if (data.Event || data.Round) {
    sizes.push({ key: "margin", line: 100 * scale, fontSize: 0, n: 3 });
  }

  if (data.Date || data.Site) {
    const line = data.Event || data.Round ? 20 * scale : 100 * scale;
    sizes.push({ key: "margin", line, fontSize: 0, n: 6 });
  }

  const totalHeight = sizes.reduce((a, b) => a + b.line, 0);
  let fromTop = (size + margin * 2 - totalHeight) / 2;

  ctx.fillStyle = style.coords.onBorder;

  sizes
    .sort((a, b) => a.n - b.n)
    .forEach(({ key, line, fontSize }) => {
      if (key === "vs") {
        const y = fromTop + line / 2;
        drawText(ctx, "vs", font, fontSize, 700, size / 2, y, "center");

        fromTop += line;
        return;
      }

      if (key === "margin") {
        fromTop += line;
        return;
      }

      const item = data[key as keyof Header];

      if (item) {
        const text = key === "Round" ? `Round ${item}` : item;

        const y = fromTop + line / 2;

        drawText(
          ctx,
          text,
          font,
          fontSize,
          700,
          size / 2,
          y,
          "center",
          size * 0.9
        );
      }

      fromTop += line;
    });
};

export default drawHeader;
