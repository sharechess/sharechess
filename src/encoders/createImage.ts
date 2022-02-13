import { BoardConfig, Size } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";
import sizeToPX from "./sizeToPX";

const createImage = async (
  fen: string,
  pgn: string | null,
  ply: number = 0,
  boardConfig: BoardConfig,
  size: Size
) => {
  const game = new Game();

  if (pgn) {
    game.loadPGN(pgn);
  } else {
    game.loadFEN(fen);
  }

  const board = new Board({ ...boardConfig, size: sizeToPX[size] });

  const position = game.getPosition(ply);
  await board.frame(position, game.header);
  board.render();

  return board.toImgUrl();
};

export default createImage;
