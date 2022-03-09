import { state } from "../../state";
import { Position, PiecesStyle } from "../../types";
import ImagesCache from "../loaders/PiecesCache";

const drawPieces = async (
  ctx: CanvasRenderingContext2D,
  position: Position,
  squareSize: number,
  borderWidth: number,
  flipped: boolean,
  margin: number,
  piecesStyle: PiecesStyle,
  shadow: boolean = true
) => {
  const { placement, check, mate, turn } = position;
  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  for (const { x, y, type, color } of placement) {
    const img = await ImagesCache.get(piecesStyle, type, color);
    const rank = flipped ? 8 - 1 - y : y;
    const file = flipped ? 8 - 1 - x : x;

    if ((check || mate) && type === "k" && color === turn) {
      const hex = mate ? "#ff002f" : "#ffa600";

      ctx.shadowColor = hex;
      ctx.shadowBlur = squareSize * (state.mobile ? 0.15 : 0.15);
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
