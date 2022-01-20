import { Style } from "./../types";
import Board from "../board/Board";
import Game from "../game/Game";
import GIF from "./GIF";

const MOVE_TIME = 1000;

const createSimpleGIF = async (
  pgn: string,
  style: Style,
  size: number = 720
) => {
  const game = new Game().loadPGN(pgn);
  const board = new Board(8).setStyle(style).setSize(size).hideBorder();
  const gif = new GIF(board.width, board.height, true);
  const header = game.getHeader();

  await board.titleFrame(header);
  board.render();
  gif.add(board.toImgElement(), 5000);

  await board.frame(game.getBoardData(), header);
  board.render();
  gif.add(board.toImgElement(), MOVE_TIME);

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await board.frame(game.getBoardData(), header, move);
    board.render();
    gif.add(board.toImgElement(), MOVE_TIME);
  }

  return await gif.render();
};

export default createSimpleGIF;
