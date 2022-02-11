import { BoardConfig, BoardStyle, GameConfig, PiecesStyle } from "./types";
import Board from "./board/Board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createAnimation from "./encoders/createAnimation";
// import { decompressPGN } from "./game/PGNHelpers";
import WebFont from "webfontloader";
import Player from "./player/Player";
import * as Hammer from "hammerjs";
// import Moves from "./ui/Moves";
// import Controls from "./ui/Controls";
import { state, setState } from "./state";

import { render } from "solid-js/web";
import App from "./ui/App";

const boardConfig: BoardConfig = {
  size: 1024,
  tiles: 8,
  boardStyle: "calm",
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
  format: "GIF",
  size: "M",
};

const createDownloadLink = async (pgn: string, boardConfig: BoardConfig) => {
  const file = await createAnimation(pgn, { ...boardConfig, size: 720 }, "MP4");
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

  // const interval = 1000;
  // play(board, gameConfig, pgn, interval);

  const player = new Player(board, gameConfig);
  const game = new Game().loadPGN(pgn);

  setState({ moves: game.getMoves() });

  const handlers = {
    prev() {
      player.pause();
      player.prev();
    },
    next() {
      player.pause();
      player.next();
    },
    first() {
      player.pause();
      player.first();
    },
    last() {
      player.pause();
      player.last();
    },
    toggleBorder() {
      board.toggleBorder();
    },

    showBorder() {
      board.showBorder();
    },
    hideBorder() {
      board.hideBorder();
    },
    toggleExtraInfo() {
      board.toggleExtraInfo();
    },
    flip() {
      board.flip();
    },
    togglePlay() {
      player.playing ? player.pause() : player.play();
    },
    goto(ply: number) {
      player.pause();
      player.goto(ply);
    },
    changeBoardStyle(style: BoardStyle) {
      board.updateConfig({ boardStyle: style });
    },
    changePiecesStyle(style: PiecesStyle) {
      board.updateConfig({ piecesStyle: style });
    },
  };

  /**
   * RENDER
   **/
  render(
    () => <App handlers={handlers} state={state} />,
    document.getElementById("root") as HTMLElement
  );

  const $board = document.querySelector<HTMLImageElement>("#board");
  $board?.appendChild(board.canvas);

  // const moves = new Moves($moves as HTMLElement, player).load(game.getMoves());
  // const controls = new Controls($controls as HTMLElement, handlers).load();

  await player.load(game);

  // @ts-ignore
  window.load = async (pgn: string) => {
    const game = new Game().loadPGN(pgn);
    await player.load(game);
    // moves.load(game.getMoves());
    // controls.load();
  };

  // @ts-ignore
  window.board = board;

  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      handlers.prev();
      return false;
    },
    false
  );

  const keyMapping: { [key: string]: () => void } = {
    ArrowLeft: handlers.prev,
    ArrowRight: handlers.next,
    ArrowUp: handlers.first,
    ArrowDown: handlers.last,
    " ": handlers.togglePlay,
    b: handlers.toggleBorder,
    f: handlers.flip,
    e: handlers.toggleExtraInfo,
  };

  document.addEventListener("keydown", ({ key }) => {
    if (keyMapping[key]) {
      keyMapping[key]();
    }
  });

  const hammer = new Hammer.Manager(board.canvas);
  hammer.add(new Hammer.Swipe());
  hammer.add(new Hammer.Pinch());
  hammer.add(new Hammer.Press({ time: 500 }));
  hammer.add(new Hammer.Tap({ taps: 1 }));

  hammer.on("swiperight", handlers.next);
  hammer.on("swipeleft", handlers.prev);
  hammer.on("swipeup", handlers.first);
  hammer.on("swipedown", handlers.last);
  hammer.on("pinchin", handlers.showBorder);
  hammer.on("pinchout", handlers.hideBorder);
  hammer.on("tap", handlers.next);
  hammer.on("press", handlers.flip);

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
