import { Style } from "./types";
import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createSimpleGIF from "./gif/createSimpleGIF";
// import { decompressPGN } from "./game/PGNHelpers";
import WebFont from "webfontloader";

const $app = document.querySelector<HTMLImageElement>("#app");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const play = async (board: Board, pgn: string | null, interval: number) => {
  const game = new Game();

  if (pgn) {
    game.loadPGN(pgn);
  }

  await board.renderTitleScreen(game.getHeader());
  await delay(interval * 5);
  await board.render(game.getBoardData());

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await delay(interval);
    await board.render(game.getBoardData(), move);
  }

  await delay(interval * 5);
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

console.log(createDownloadLink.name);

const main = async () => {
  const style = styles.lila;

  // window.location.hash =
  //   "#QiBEdWtlIEthcmwgLyBDb3VudCBJc291YXJkCkQgMTg1OC4/Py4/PwpFIFBhcmlzClIgMS0wClMgUGFyaXMgRlJBClcgUGF1bCBNb3JwaHkKCmU0IGU1IE5mMyBkNiBkNCBCZzQgZHhlNSBCeGYzIFF4ZjMgZHhlNSBCYzQgTmY2IFFiMyBRZTcgTmMzIGM2IEJnNSBiNSBOeGI1IGN4YjUgQnhiNSsgTmJkNyBPLU8tTyBSZDggUnhkNyBSeGQ3IFJkMSBRZTYgQnhkNysgTnhkNyBRYjgrIE54YjggUmQ4Iw==";

  // const hash = window.location.hash;
  // const pgn = hash === "" ? null : decompressPGN(hash.slice(1));
  const pgn = pgns[1];
  const board = new Board(8).setStyle(style).setSize(720).showBorder();

  $app?.appendChild(board.canvas);

  console.log(pgn);

  play(board, pgn, 1000);

  // createDownloadLink(pgns[2], style).then((link) => {
  //   document.body.appendChild(link);
  // });
};

WebFont.load({
  google: {
    families: ["Ubuntu:500,700", "Fira Code"],
  },
  active: main,
});
