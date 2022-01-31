import { BoardConfig } from "./../types";
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
  boardConfig: BoardConfig,
  format: "GIF" | "WebM" | "MP4"
) => {
  const game = new Game().loadPGN(pgn);
  const board = new Board(boardConfig);
  const encoder =
    format === "GIF"
      ? new GIF(board.width, board.height, true)
      : format === "MP4"
      ? new MP4(board.width, board.height)
      : new WebM();

  const header = game.header;

  await board.titleFrame(header);
  board.render();

  // @ts-ignore
  await encoder.add(getData(board, encoder), 4);

  for (let ply = 0; ply < game.length; ply++) {
    const position = game.getPosition(ply);
    await board.frame(position, header);
    board.render();
    // @ts-ignore
    await encoder.add(getData(board, encoder), position.end === 0 ? 5 : 1);
  }

  return await encoder.render();
};

export default createAnimation;
