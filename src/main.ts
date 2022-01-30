import { BoardConfig, GameConfig } from "./types";
import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createAnimation from "./encoders/createAnimation";
// import { decompressPGN } from "./game/PGNHelpers";
import WebFont from "webfontloader";
import Player from "./player/Player";
import * as Hammer from "hammerjs";

const $app = document.querySelector<HTMLImageElement>("#app");

const boardConfig: BoardConfig = {
  size: 1024,
  boardStyle: styles.chesscom,
  piecesStyle: "tatiana",
  showBorder: true,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  flipped: false,
};

const gameConfig: GameConfig = {
  titleScreen: true,
  fromPly: null,
  toPly: null,
  loop: true,
};

const createDownloadLink = async (pgn: string, boardConfig: BoardConfig) => {
  const file = await createAnimation(pgn, boardConfig, "GIF");
  const link = document.createElement("a");
  link.innerText = "DOWNLOAD";
  link.setAttribute("href", URL.createObjectURL(file));
  link.setAttribute("download", file.name);
  return link;
};

console.log(createDownloadLink.name);

const main = async () => {
  // window.location.hash =
  //   "#QiBEdWtlIEthcmwgLyBDb3VudCBJc291YXJkCkQgMTg1OC4/Py4/PwpFIFBhcmlzClIgMS0wClMgUGFyaXMgRlJBClcgUGF1bCBNb3JwaHkKCmU0IGU1IE5mMyBkNiBkNCBCZzQgZHhlNSBCeGYzIFF4ZjMgZHhlNSBCYzQgTmY2IFFiMyBRZTcgTmMzIGM2IEJnNSBiNSBOeGI1IGN4YjUgQnhiNSsgTmJkNyBPLU8tTyBSZDggUnhkNyBSeGQ3IFJkMSBRZTYgQnhkNysgTnhkNyBRYjgrIE54YjggUmQ4Iw==";

  // const hash = window.location.hash;
  // const pgn = hash === "" ? null : decompressPGN(hash.slice(1));
  const pgn = pgns[pgns.length - 1];
  // const pgn = pgns[2];
  const board = new Board(boardConfig);

  $app?.appendChild(board.canvas);

  // const interval = 1000;
  // play(board, gameConfig, pgn, interval);

  const player = new Player(board, gameConfig);
  const game = new Game().loadPGN(pgn);

  await player.load(game);

  // @ts-ignore
  window.player = player;
  // @ts-ignore
  window.game = game;

  // @ts-ignore
  window.load = async (pgn: string) => {
    await player.load(new Game().loadPGN(pgn));
  };

  // document.addEventListener("click", () => {
  //   player.next();
  // });

  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      player.prev();
      return false;
    },
    false
  );

  document.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "ArrowLeft":
        player.pause();
        player.prev();
        break;
      case "ArrowRight":
        player.pause();
        player.next();
        break;
      case "ArrowUp":
        player.pause();
        player.first();
        break;
      case "ArrowDown":
        player.pause();
        player.last();
        break;
      case " ":
        player.playing ? player.pause() : player.play();
        break;
      case "b":
        board.toggleBorder();
        break;
      case "f":
        board.flip();
        break;
      case "e":
        board.toggleExtraInfo();
        break;
    }
  });

  const hammer = new Hammer.Manager(board.canvas);
  hammer.add(new Hammer.Swipe());
  hammer.add(new Hammer.Pinch());
  hammer.add(new Hammer.Press({ time: 500 }));
  hammer.add(new Hammer.Tap({ taps: 1 }));

  hammer.on("swiperight", () => {
    player.pause();
    player.prev();
  });

  hammer.on("swipeleft", () => {
    player.playing ? player.pause() : player.play();
  });

  hammer.on("swipeup", () => {
    player.pause();
    player.first();
  });

  hammer.on("swipedown", () => {
    player.pause();
    player.last();
  });

  hammer.on("pinchin", () => {
    board.showBorder();
  });

  hammer.on("pinchout", () => {
    board.hideBorder();
  });

  hammer.on("tap", () => {
    player.pause();
    player.next();
  });

  hammer.on("press", () => {
    board.flip();
  });

  // createDownloadLink(pgn, boardConfig).then((link) => {
  //   document.body.appendChild(link);
  // });
};

WebFont.load({
  google: {
    families: ["Ubuntu:500,700", "Fira Mono"],
  },
  custom: {
    families: ["Chess"],
    urls: ["/fonts.css"],
  },
  active: main,
});
