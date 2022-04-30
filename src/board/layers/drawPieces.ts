import { LoadImage, Position } from "../../types";
import PiecesCache from "../loaders/PiecesCache";
import { PiecesStyle } from "../styles-pieces/piecesStyles";

const drawPieces = async (
  ctx: CanvasRenderingContext2D,
  position: Position,
  squareSize: number,
  borderWidth: number,
  flipped: boolean,
  margin: number,
  piecesStyle: PiecesStyle,
  shadow: boolean = true,
  loadImage: LoadImage
) => {
  const { placement, check, mate, turn } = position;
  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  for (const { x, y, type, color } of placement) {
    const img = await PiecesCache.get(piecesStyle, type, color, loadImage);
    const rank = flipped ? 8 - 1 - y : y;
    const file = flipped ? 8 - 1 - x : x;

    if ((check || mate) && type === "k" && color === turn) {
      const hex = mate ? "#ff002f" : "#ffa600";

      ctx.shadowColor = hex;
      ctx.shadowBlur = squareSize * 0.15;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.drawImage(
        img,
        borderWidth + file * squareSize,
        borderWidth + rank * squareSize + margin,
        squareSize,
        squareSize
      );
    } else if (shadow) {
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowOffsetX = squareSize * 0.07;
      ctx.shadowOffsetY = squareSize * 0.07;
      ctx.shadowBlur = squareSize * 0.1;
    }

    ctx.drawImage(
      img,
      borderWidth + file * squareSize,
      borderWidth + rank * squareSize + margin,
      squareSize,
      squareSize
    );

    ctx.shadowColor = "rgba(0, 0, 0, 0)";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }
};

export default drawPieces;
