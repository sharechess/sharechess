import chunk from "@arrows/array/chunk_";

/**
 * Converts color in RGB to HSL
 *
 * @param r - in [0,255]
 * @param g - in [0,255]
 * @param b - in [0,255]
 * @returns [h, l, s] - h in [0,360) and s, l in [0,1]
 */
const rgb2hsl = (r: number, g: number, b: number) => {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  let v = Math.max(r, g, b),
    c = v - Math.min(r, g, b),
    f = 1 - Math.abs(v + v - c - 1);
  let h =
    c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);

  return [60 * (h < 0 ? h + 6 : h), f ? c / f : 0, (v + v - c) / 2];
};

/**
 * Converts color in HSL to RGB
 *
 * @param h - in [0,360]
 * @param s - in [0,1]
 * @param l - in [0,1]
 * @returns [r, g, b] - r, g, b in [0,255]
 */
let hsl2rgb = (h: number, s: number, l: number) => {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  return (
    "#" +
    [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
      .map((x) => x.toString(16))
      .join("")
  );
};

/**
 * Changes HLS of the provided color
 *
 * @param r - in [0,255]
 * @param g - in [0,255]
 * @param b - in [0,255]
 * @param deltaH - in [-360, 360] (-) towards yellow (+) towards blue
 * @param deltaS - in [-1, 1]
 * @param deltaL - in [-1, 1]
 * @returns [r, g, b] - r, g, b in [0,255]
 */
const changeHSL = (
  colorHex: string,
  deltaH: number,
  deltaS: number = 0,
  deltaL: number = 0
) => {
  const [r, g, b] = chunk(
    colorHex.length === 4 ? 1 : 2,
    colorHex.slice(1).split("")
  ).map((x) => parseInt(x.join(""), 16));

  let [h, s, l] = rgb2hsl(r, g, b);
  const absDelta = Math.abs(deltaH);

  if (h >= 60 && h < 240) {
    h += deltaH;
    if (h < 60 && h > 60 - absDelta) {
      h = 60;
    } else if (h > 240 && h < 240 + absDelta) {
      h = 240;
    }
  } else {
    h -= deltaH;
    if (h > 60 && h < 60 + absDelta) {
      h = 60;
    } else if (h < 240 && h > 240 - absDelta) {
      h = 240;
    }
  }

  h = h > 360 ? h - 360 : h > 0 ? h + 360 : h;

  s = Math.min(1, Math.max(0, s + deltaS));
  l = Math.min(1, Math.max(0, l + deltaL));

  return hsl2rgb(h, s, l);
};

export { changeHSL };
