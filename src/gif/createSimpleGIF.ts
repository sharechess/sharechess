import { Style } from "./../types";
import Board from "../board/Board";
import Game from "../game/Game";
import GIF from "./GIF";

const MOVE_TIME = 1000;

const createSimpleGIF = async (
  pgn: string,
  style: Style,
  size: number = 1024
) => {
  const game = new Game().loadPGN(pgn);
  const board = new Board(8).setStyle(style).setSize(size).showBorder();
  const gif = new GIF(size, true);

  await board.render(game.getBoardData());
  gif.add(board.toImgElement(), MOVE_TIME);

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await board.render(game.getBoardData(), move);
    gif.add(board.toImgElement(), MOVE_TIME);
  }

  const url = await gif.render();

  window.open(url);
};

export default createSimpleGIF;
