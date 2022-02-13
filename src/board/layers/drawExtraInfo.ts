import { Style, Position, Header } from "./../../types";
import drawText from "./drawText";

const chessFontMapping: { [key: string]: string } = {
  k: "l",
  q: "w",
  r: "t",
  b: "n",
  n: "j",
  p: "o",
};

const drawExtraInfo = async (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  scale: number,
  margin: number,
  style: Style,
  data: Header,
  flipped: boolean,
  position: Position
) => {
  const fontSize = Math.round(20 * scale);
  let offsetX = (margin - fontSize) / 2;
  let offsetY = margin / 2;

  const marginLeft = offsetX;

  ctx.fillStyle = style.coords.onBorder;

  {
    const w = drawText(
      ctx,
      data.White === "Anonymous" ? "White" : data.White,
      "Ubuntu",
      fontSize,
      700,
      marginLeft,
      flipped ? offsetY : height - offsetY,
      "left"
    );

    const elo = data.WhiteElo ? ` ${data.WhiteElo}` : "";

    drawText(
      ctx,
      elo,
      "Fira Mono",
      fontSize,
      500,
      marginLeft + w,
      flipped ? offsetY : height - offsetY,
      "left"
    );
  }

  {
    const w = drawText(
      ctx,
      data.Black === "Anonymous" ? "Black" : data.Black,
      "Ubuntu",
      fontSize,
      700,
      marginLeft,
      flipped ? height - offsetY : offsetY,
      "left"
    );

    const elo = data.BlackElo ? ` ${data.BlackElo}` : "";

    drawText(
      ctx,
      elo,
      "Fira Mono",
      fontSize,
      500,
      marginLeft + w,
      flipped ? height - offsetY : offsetY,
      "left"
    );
  }

  let rightMarginWhite = 0;
  let rightMarginBlack = 0;

  if (position.last && data.Result) {
    const [resultWhite, resultBlack] = data.Result.split("-");

    const textWhite =
      resultWhite === "0" ? "Lost" : resultWhite === "1" ? "Won" : "Draw";

    const textBlack =
      resultBlack === "0" ? "Lost" : resultBlack === "1" ? "Won" : "Draw";

    const widthWhite = drawText(
      ctx,
      textWhite,
      "Ubuntu",
      fontSize,
      700,
      width - offsetX,
      flipped ? offsetY : height - offsetY,
      "right"
    );

    const widthBlack = drawText(
      ctx,
      textBlack,
      "Ubuntu",
      fontSize,
      700,
      width - offsetX,
      flipped ? height - offsetY : offsetY,
      "right"
    );

    const w = Math.max(widthWhite, widthBlack);

    rightMarginWhite = w + 20 * scale;
    rightMarginBlack = w + 20 * scale;
  }

  const { diff, imbalance } = position.material;

  const textWhite = diff > 0 ? `+${Math.abs(diff)}` : "";

  rightMarginWhite += drawText(
    ctx,
    textWhite,
    "Fira Mono",
    fontSize,
    500,
    width - offsetX - rightMarginWhite,
    flipped ? offsetY : height - offsetY,
    "right"
  );

  const textBlack = diff < 0 ? `+${Math.abs(diff)}` : "";

  rightMarginBlack += drawText(
    ctx,
    textBlack,
    "Fira Mono",
    fontSize,
    500,
    width - offsetX - rightMarginBlack,
    flipped ? height - offsetY : offsetY,
    "right"
  );

  for (const [piece, count] of Object.entries(imbalance.w)) {
    for (let i = 0; i < count; i++) {
      const textWidth = drawText(
        ctx,
        chessFontMapping[piece],
        "Chess",
        fontSize,
        500,
        width - offsetX - rightMarginWhite,
        (flipped ? offsetY : height - offsetY) - 2 * scale,
        "right"
      );

      rightMarginWhite +=
        i === count - 1
          ? textWidth * 0.85
          : piece === "p"
          ? textWidth * 0.4
          : textWidth * 0.6;
    }
  }

  for (const [piece, count] of Object.entries(imbalance.b)) {
    for (let i = 0; i < count; i++) {
      const textWidth = drawText(
        ctx,
        chessFontMapping[piece],
        "Chess",
        fontSize,
        500,
        width - offsetX - rightMarginBlack,
        (flipped ? height - offsetY : offsetY) - 2 * scale,
        "right"
      );

      rightMarginBlack +=
        i === count - 1
          ? textWidth * 0.85
          : piece === "p"
          ? textWidth * 0.4
          : textWidth * 0.6;
    }
  }
};

export default drawExtraInfo;
