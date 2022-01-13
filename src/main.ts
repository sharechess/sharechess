import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import GIF from "./gif/GIF";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createSimpleGIF from "./gif/createSimpleGIF";

const $app = document.querySelector<HTMLImageElement>("#app");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const pgn = pgns[5];

const play = async (board: Board, interval: number) => {
  const game = new Game().loadPGN(pgn);
  await board.render(game.getBoardData());

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await delay(interval);
    await board.render(game.getBoardData(), move);
  }

  await delay(interval);
  play(board, interval);
};

const main = async () => {
  const style = styles.calm;

  createSimpleGIF(pgn, style, 1024);

  for (const style of Object.values(styles)) {
    const board = new Board(8).setStyle(style).setSize(1024).showBorder();

    $app?.appendChild(board.canvas);

    play(board, 1000);
  }
};

main();
