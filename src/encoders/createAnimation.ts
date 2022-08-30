import { BoardConfig, Size } from "./../types";
import Board from "../board/Board";
import Game from "../game/Game";
import sizeToPX from "./sizeToPX";
// import GIF from "./GIF";
// import WebM from "./WebM";
// import MP4 from "./MP4";

const createAnimation = async (
  pgn: string,
  boardConfig: BoardConfig,
  format: "GIF" | "WebM" | "MP4",
  size: Size,
  includeTitleScreen: boolean
) => {
  const game = new Game().loadPGN(pgn);
  const board = new Board();
  await board.init({ ...boardConfig, size: sizeToPX[size] });

  const Encoder = (
    await (format === "GIF"
      ? import("./GIF")
      : format === "MP4"
      ? import("./MP4")
      : import("./WebM"))
  ).default;

  const encoder = new Encoder(board.width, board.height, true);

  // const encoder =
  //   format === "GIF"
  //     ? new GIF(board.width, board.height, true)
  //     : format === "MP4"
  //     ? new MP4(board.width, board.height)
  //     : new WebM();

  const header = game.header;

  if (includeTitleScreen) {
    await board.titleFrame(header);
    board.render();

    await encoder.add(board, 4);
  }

  for (let ply = 0; ply < game.length; ply++) {
    const position = game.getPosition(ply);
    await board.frame(position, header);
    board.render();

    const frames =
      position.end === 0
        ? 5
        : position.ply === 0 && !includeTitleScreen
        ? 2
        : 1;

    await encoder.add(board, frames);
  }

  return await encoder.render();
};

export default createAnimation;
