import { Style } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";
import GIF from "./GIF";
import WebM from "./WebM";
import MP4 from "./MP4";

const getData = (board: Board, encoder: GIF | WebM | MP4) => {
  return encoder instanceof GIF
    ? board.toImgElement()
    : encoder instanceof MP4
    ? board.toImageData()
    : board.canvas;
};

const createAnimation = async (
  pgn: string,
  style: Style,
  size: number = 720,
  format: "GIF" | "WebM" | "MP4"
) => {
  const game = new Game().loadPGN(pgn);
  const board = new Board(8).setStyle(style).setSize(size).showBorder();
  const encoder =
    format === "GIF"
      ? new GIF(board.width, board.height, true)
      : format === "MP4"
      ? new MP4(board.width, board.height)
      : new WebM();

  const header = game.getHeader();

  await board.titleFrame(header);
  board.render();

  // @ts-ignore
  await encoder.add(getData(board, encoder), 5);

  await board.frame(game.getBoardData(), header, null, game.materialInfo());
  board.render();
  // @ts-ignore
  await encoder.add(getData(board, encoder), 1);

  while (true) {
    const move = game.next();

    // console.log(move);

    if (!move) {
      break;
    }

    await board.frame(game.getBoardData(), header, move, game.materialInfo());
    board.render();
    // @ts-ignore
    await encoder.add(getData(board, encoder), move.end === 0 ? 5 : 1);
  }

  return await encoder.render();
};

export default createAnimation;
