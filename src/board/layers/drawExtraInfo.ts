import { Style } from "./../../types";
import drawText from "./drawText";

const drawExtraInfo = async (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  scale: number,
  margin: number,
  style: Style,
  data: { [key: string]: string | undefined },
  flipped: boolean,
  lastMove: boolean = true
) => {
  ctx.fillStyle = style.coords.onBorder;

  const fontSize = 20 * scale;

  const offsetX = (margin - fontSize) / 2;
  const offsetY = margin / 2;

  if (data.White) {
    const text =
      data.White +
      (data.WhiteElo && data.WhiteElo !== "?" ? ` (${data.WhiteElo})` : "");

    drawText(
      ctx,
      text,
      fontSize,
      500,
      offsetX,
      (flipped ? offsetY : height - offsetY) * scale,
      "left"
    );
  }

  if (data.Black) {
    const text =
      data.Black +
      (data.BlackElo && data.BlackElo !== "?" ? ` (${data.BlackElo})` : "");

    drawText(
      ctx,
      text,
      fontSize,
      500,
      offsetX,
      (flipped ? height - offsetY : offsetY) * scale,
      "left"
    );
  }

  if (lastMove && data.Result) {
    const [resultWhite, resultBlack] = data.Result.split("-");

    const textWhite =
      resultWhite === "0" ? "Lost" : resultWhite === "1" ? "Won" : "Draw";

    const textBlack =
      resultBlack === "0" ? "Lost" : resultBlack === "1" ? "Won" : "Draw";

    drawText(
      ctx,
      textWhite,
      fontSize,
      500,
      width - offsetX,
      (flipped ? offsetY : height - offsetY) * scale,
      "right"
    );

    drawText(
      ctx,
      textBlack,
      fontSize,
      500,
      width - offsetX,
      (flipped ? height - offsetY : offsetY) * scale,
      "right"
    );
  }
};

export default drawExtraInfo;
