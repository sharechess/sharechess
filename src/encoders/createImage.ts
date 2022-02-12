import { BoardConfig } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";

const createImage = async (
  fen: string,
  boardConfig: BoardConfig,
  size: number
) => {
  const game = new Game().loadFEN(fen);
  const board = new Board({ ...boardConfig, size });

  const position = game.getPosition(0);
  await board.frame(position, {});
  board.render();

  return board.toImgUrl();
};

export default createImage;
