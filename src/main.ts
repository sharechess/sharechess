import { Style } from "./types";
import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createAnimation from "./encoders/createAnimation";
// import { decompressPGN } from "./game/PGNHelpers";
import WebFont from "webfontloader";

const $app = document.querySelector<HTMLImageElement>("#app");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const play = async (board: Board, pgn: string | null, interval: number) => {
  const game = new Game();

  if (pgn) {
    game.loadPGN(pgn);
  }

  console.log(game.pgn());

  const header = game.getHeader();

  await board.titleFrame(header);
  board.render();
  await board.frame(game.getBoardData(), header);
  await delay(interval * 3);
  board.render();

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await board.frame(game.getBoardData(), header, move);
    await delay(interval);
    board.render();
  }

  await delay(interval * 5);
  play(board, pgn, interval);
};

const createDownloadLink = async (pgn: string, style: Style) => {
  const file = await createAnimation(pgn, style, 720, "MP4");
  const link = document.createElement("a");
  link.innerText = "DOWNLOAD";
  link.setAttribute("href", URL.createObjectURL(file));
  link.setAttribute("download", file.name);
  return link;
};

console.log(createDownloadLink.name);

const main = async () => {
  const style = styles.calm;

  // window.location.hash =
  //   "#QiBEdWtlIEthcmwgLyBDb3VudCBJc291YXJkCkQgMTg1OC4/Py4/PwpFIFBhcmlzClIgMS0wClMgUGFyaXMgRlJBClcgUGF1bCBNb3JwaHkKCmU0IGU1IE5mMyBkNiBkNCBCZzQgZHhlNSBCeGYzIFF4ZjMgZHhlNSBCYzQgTmY2IFFiMyBRZTcgTmMzIGM2IEJnNSBiNSBOeGI1IGN4YjUgQnhiNSsgTmJkNyBPLU8tTyBSZDggUnhkNyBSeGQ3IFJkMSBRZTYgQnhkNysgTnhkNyBRYjgrIE54YjggUmQ4Iw==";

  // const hash = window.location.hash;
  // const pgn = hash === "" ? null : decompressPGN(hash.slice(1));
  const pgn = pgns[pgns.length - 12];
  const board = new Board(8).setStyle(style).setSize(720).showBorder();

  $app?.appendChild(board.canvas);

  const interval = 1000;
  play(board, pgn, interval);

  createDownloadLink(pgns[2], style).then((link) => {
    document.body.appendChild(link);
  });
};

WebFont.load({
  google: {
    families: ["Ubuntu:500,700", "Fira Mono"],
  },
  active: main,
});
