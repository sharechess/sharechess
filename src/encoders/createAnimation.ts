import { Style } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";
import GIF from "./GIF";
import WebM from "./WebM";
// import MP4 from "./MP4";

const MOVE_TIME = 1000;

const createAnimation = async (
  pgn: string,
  style: Style,
  size: number = 720,
  format: "GIF" | "WebM"
) => {
  const game = new Game().loadPGN(pgn);
  const board = new Board(8).setStyle(style).setSize(size).hideBorder();
  const animation =
    format === "GIF" ? new GIF(board.width, board.height, true) : new WebM();
  const header = game.getHeader();

  await board.titleFrame(header);
  board.render();
  animation.add(format === "GIF" ? board.toImgElement() : board.canvas, 5000);

  await board.frame(game.getBoardData(), header);
  board.render();
  animation.add(
    format === "GIF" ? board.toImgElement() : board.canvas,
    MOVE_TIME
  );

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await board.frame(game.getBoardData(), header, move);
    board.render();
    animation.add(
      format === "GIF" ? board.toImgElement() : board.canvas,
      MOVE_TIME
    );
  }

  return await animation.render();
};

export default createAnimation;
