import { Material } from "../../game/Game";
import { Style } from "./../../types";
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
  data: { [key: string]: string | undefined },
  flipped: boolean,
  lastMove: boolean,
  material?: Material
) => {
  const fontSize = Math.round(20 * scale);
  let offsetX = (margin - fontSize) / 2;
  let offsetY = margin / 2;

  const marginLeft = offsetX;

  ctx.fillStyle = style.coords.onBorder;

  if (data.White) {
    const w = drawText(
      ctx,
      data.White,
      "Ubuntu",
      fontSize,
      700,
      marginLeft,
      flipped ? offsetY : height - offsetY,
      "left"
    );

    const elo =
      data.WhiteElo && data.WhiteElo !== "?" ? ` ${data.WhiteElo}` : "";

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

  if (data.Black) {
    const elo =
      data.BlackElo && data.BlackElo !== "?" ? ` ${data.BlackElo}` : "";

    const w = drawText(
      ctx,
      data.Black,
      "Ubuntu",
      fontSize,
      700,
      marginLeft,
      flipped ? height - offsetY : offsetY,
      "left"
    );

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

  if (lastMove && data.Result) {
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

  if (material) {
    const textWhite = material.diff > 0 ? `+${Math.abs(material.diff)}` : "";

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

    const textBlack = material.diff < 0 ? `+${Math.abs(material.diff)}` : "";

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

    for (const [piece, count] of Object.entries(material.imbalance.w)) {
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

    for (const [piece, count] of Object.entries(material.imbalance.b)) {
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
        // i === count - 1 || piece !== "p" ? textWidth * 0.8 : textWidth * 0.4;
      }
    }
  }
};

export default drawExtraInfo;
