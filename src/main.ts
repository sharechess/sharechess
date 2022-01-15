import { Style } from "./types";
import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createSimpleGIF from "./gif/createSimpleGIF";

const $app = document.querySelector<HTMLImageElement>("#app");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const play = async (board: Board, pgn: string, interval: number) => {
  const game = new Game().loadPGN(pgn);
  // game.goto(28);
  await board.render(game.getBoardData());

  console.log(game.pgn());

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await delay(interval);
    await board.render(game.getBoardData(), move);
  }

  await delay(interval);
  play(board, pgn, interval);
};

const createDownloadLink = async (pgn: string, style: Style) => {
  const file = await createSimpleGIF(pgn, style, 720);
  const link = document.createElement("a");
  link.innerText = "DOWNLOAD";
  link.setAttribute("href", URL.createObjectURL(file));
  link.setAttribute("download", file.name);
  return link;
};

const main = async () => {
  const style = styles.calm;
  // Object.values(styles).forEach((style, i) => {
  const board = new Board(8).setStyle(style).setSize(720).showBorder();

  $app?.appendChild(board.canvas);

  play(board, pgns[0], 1000);
  // });

  // const link = await createDownloadLink(pgns[0], styles.peach);
  // document.body.appendChild(link);
};

main();
