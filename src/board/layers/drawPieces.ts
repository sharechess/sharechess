import { BoardData, PieceType, PieceColor } from "../../types";
import ImagesCache from "../loaders/PiecesCache";

const drawPieces = async (
  ctx: CanvasRenderingContext2D,
  board: BoardData,
  squareSize: number,
  borderWidth: number,
  tiles: number,
  flipped: boolean,
  check: "b" | "w" | undefined,
  mate: "b" | "w" | undefined,
  shadow: boolean,
  margin: number
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

        const filters = [];

        if (shadow) {
          filters.push(
            `drop-shadow(${squareSize * 0.05}px ${squareSize * 0.05}px ${
              squareSize * 0.05
            }px rgba(0, 0, 0, 0.6))`
          );
        }

        if (color === check && type === "k") {
          filters.push(`drop-shadow(0 0 ${squareSize * 0.07}px #ffa600)`);
          filters.push(`drop-shadow(0 0 ${squareSize * 0.07}px #ffa600)`);
        } else if (color === mate && type === "k") {
          filters.push(`drop-shadow(0 0 ${squareSize * 0.07}px #ff002f)`);
          filters.push(`drop-shadow(0 0 ${squareSize * 0.07}px #ff002f)`);
        }

        ctx.filter = filters.length > 0 ? filters.join(" ") : "none";

        ctx.drawImage(
          img,
          borderWidth + file * squareSize,
          borderWidth + rank * squareSize + margin,
          squareSize,
          squareSize
        );
      }
    }
  }

  ctx.filter = "none";
};

export default drawPieces;
