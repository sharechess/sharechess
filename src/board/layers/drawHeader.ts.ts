import { Style } from "./../../types";
import drawRectangle from "./drawRectangle";
import drawText from "./drawText";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: string) => {
  const [y, m, d] = date.split(".").map(Number);

  const month = Number.isNaN(m) ? null : MONTHS[m - 1];
  const day = Number.isNaN(d) || month === null ? null : d;
  const year = Number.isNaN(y) ? null : y;

  return month && day && year
    ? `${month} ${day}, ${year}`
    : month && year
    ? `${month} ${year}`
    : year
    ? String(year)
    : "";
};

const formatName = (name: string) => {
  return name
    .split(",")
    .map((x) => x.trim())
    .reverse()
    .join(" ");
};

const drawHeader = async (
  ctx: CanvasRenderingContext2D,
  size: number,
  scale: number,
  margin: number,
  style: Style,
  data: { [key: string]: string | undefined }
) => {
  ctx.clearRect(0, 0, size, size);
  await drawRectangle(ctx, size, size + margin * 2, 0, 0, style.border);

  const allSizes = [
    { key: "White", line: 60 * scale, font: 42 * scale, n: 0 },
    { key: "Black", line: 60 * scale, font: 42 * scale, n: 2 },
    { key: "Event", line: 30 * scale, font: 20 * scale, n: 4 },
    { key: "Round", line: 30 * scale, font: 20 * scale, n: 5 },
    { key: "Date", line: 30 * scale, font: 20 * scale, n: 7 },
    { key: "Site", line: 30 * scale, font: 20 * scale, n: 8 },
  ];

  const keys = new Set(Object.keys(data));

  const sizes = allSizes.filter(({ key }) => keys.has(key));

  if (data.White && data.Black) {
    sizes.push({ key: "vs", line: 50, font: 20, n: 1 });
  }

  if (data.Event || data.Round) {
    sizes.push({ key: "margin", line: 100, font: 0, n: 3 });
  }

  if (data.Date || data.Site) {
    const line = data.Event || data.Round ? 20 : 100;
    sizes.push({ key: "margin", line, font: 0, n: 6 });
  }

  const totalHeight = sizes.reduce((a, b) => a + b.line, 0);
  let fromTop = (size + margin * 2 - totalHeight) / 2;

  ctx.fillStyle = style.coords.onBorder;

  sizes
    .sort((a, b) => a.n - b.n)
    .forEach(({ key, line, font }) => {
      if (key === "vs") {
        const y = fromTop + line / 2;
        drawText(ctx, "vs", font, 700, size / 2, y, "center");

        fromTop += line;
        return;
      }

      if (key === "margin") {
        fromTop += line;
        return;
      }

      const item = data[key];

      if (item) {
        const text =
          key === "Date"
            ? formatDate(item)
            : key === "Black" || key === "White"
            ? formatName(item)
            : key === "Round"
            ? `Round ${item}`
            : item;

        const y = fromTop + line / 2;

        drawText(ctx, text, font, 700, size / 2, y, "center", size * 0.9);
      }

      fromTop += line;
    });
};

export default drawHeader;
