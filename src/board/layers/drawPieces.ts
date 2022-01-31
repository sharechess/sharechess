import { Position, PiecesStyle } from "../../types";
import ImagesCache from "../loaders/PiecesCache";
// import drawCircle from "./drawCircle";

const drawPieces = async (
  ctx: CanvasRenderingContext2D,
  position: Position,
  squareSize: number,
  borderWidth: number,
  flipped: boolean,
  margin: number,
  piecesStyle: PiecesStyle
) => {
  const { placement, check, mate, turn } = position;

  for (const { x, y, type, color } of placement) {
    const img = await ImagesCache.get(piecesStyle, type, color);
    const rank = flipped ? 8 - 1 - y : y;
    const file = flipped ? 8 - 1 - x : x;

    const filters = [];

    // if ((color === check || color === mate) && type === "k") {
    //   const hex = check ? "#ffa600" : "#ff002f";
    //   drawCircle(
    //     ctx,
    //     squareSize / 2,
    //     borderWidth + file * squareSize,
    //     borderWidth + rank * squareSize + margin,
    //     0,
    //     hex,
    //     true
    //   );
    // }

    if ((check || mate) && type === "k" && color === turn) {
      const hex = mate ? "#ff002f" : "#ffa600";
      filters.push(`drop-shadow(0 0 ${squareSize * 0.07}px ${hex})`);
      filters.push(`drop-shadow(0 0 ${squareSize * 0.07}px ${hex})`);
    }

    ctx.filter = filters.join(" ");

    ctx.drawImage(
      img,
      borderWidth + file * squareSize,
      borderWidth + rank * squareSize + margin,
      squareSize,
      squareSize
    );

    ctx.filter = "none";
  }
};

export default drawPieces;
