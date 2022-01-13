import { BoardData, PieceType, PieceColor } from "../../types";
import ImagesCache from "../loaders/PiecesCache";

const drawPieces = async (
  ctx: CanvasRenderingContext2D,
  board: BoardData,
  squareSize: number,
  borderWidth: number,
  tiles: number,
  flipped: boolean = false
) => {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (board[y][x] !== null) {
        const { type, color } = board[y][x] as {
          type: PieceType;
          color: PieceColor;
        };
        const img = await ImagesCache.get("tatiana", type, color);
        const rank = flipped ? tiles - 1 - y : y;
        const file = flipped ? tiles - 1 - x : x;

        ctx.drawImage(
          img,
          borderWidth + file * squareSize,
          borderWidth + rank * squareSize,
          squareSize,
          squareSize
        );
      }
    }
  }
};

export default drawPieces;
