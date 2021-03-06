import canvasTxt from "canvas-txt";
import { Header, LoadImage, Style } from "../../types";
import drawRectangle from "./drawRectangle";
import drawText from "./drawText";

const logoSvgCache: string | null = null;

const prepareLogoUrl = async (color: string) => {
  let svg;

  if (logoSvgCache) {
    svg = logoSvgCache;
  } else {
    const res = await fetch("/img/logo-full-mono.svg");
    svg = await res.text();
  }

  const colorized = svg.replace(/black/g, color);

  return `data:image/svg+xml;base64,${btoa(colorized)}`;
};

const drawPuzzleHeader = async (
  ctx: CanvasRenderingContext2D,
  size: number,
  scale: number,
  margin: number,
  style: Style,
  data: Header
) => {
  const title = data.PuzzleMotif ?? "Solve the Puzzle";
  const txt = data.PuzzleDescription ?? "";

  ctx.fillStyle = style.coords.onBorder;

  drawText(
    ctx,
    title,
    "Ubuntu",
    42 * scale,
    700,
    size / 2,
    (size * scale + margin) / 4,
    "center"
  );

  canvasTxt.fontSize = 30 * scale;
  canvasTxt.lineHeight = 35 * scale;
  canvasTxt.align = "left";
  canvasTxt.font = "Ubuntu";

  canvasTxt.drawText(ctx, txt, size * 0.1, 0, size * 0.8, size + margin * 2);
};

const drawHeader = async (
  ctx: CanvasRenderingContext2D,
  size: number,
  scale: number,
  margin: number,
  style: Style,
  data: Header,
  loadImage: LoadImage,
  puzzle: boolean
) => {
  ctx.clearRect(0, 0, size, size);
  await drawRectangle(
    ctx,
    size,
    size + margin * 2,
    0,
    0,
    style.border,
    loadImage
  );

  if (puzzle) {
    drawPuzzleHeader(ctx, size, scale, margin, style, data);
  } else {
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
  }

  const logoUrl = await prepareLogoUrl(style.coords.onBorder);
  const logo = await loadImage(logoUrl);
  const logoWidth = size * 0.6;
  const logoHeight = logo.height * (logoWidth / logo.width);

  ctx.drawImage(
    logo,
    size * 0.2,
    margin + size + margin - logoHeight * 2,
    logoWidth,
    logoHeight
  );
};

export default drawHeader;
