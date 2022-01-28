import { BoardConfig, GameConfig } from "./types";
import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createAnimation from "./encoders/createAnimation";
// import { decompressPGN } from "./game/PGNHelpers";
import WebFont from "webfontloader";

const $app = document.querySelector<HTMLImageElement>("#app");

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const boardConfig: BoardConfig = {
  size: 720,
  boardStyle: styles.violet,
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

class Player {
  // private interval = 1000;
  private game: Game = new Game();
  private header: { [key: string]: string | undefined } = {};
  public playing: boolean = false;

  constructor(private board: Board, private config: GameConfig) {
    this.board
      .frame(this.game.getBoardData(), {}, null)
      .then((_) => this.board.render());
  }

  updateConfig(config: Partial<GameConfig>) {
    this.config = { ...this.config, ...config };
  }

  load(game: Game) {
    this.game = game;
    this.header = game.getHeader();

    return this;
  }

  async play() {
    this.playing = true;

    while (this.playing) {}
  }

  pause() {
    this.playing = false;
  }

  async prev() {
    const move = this.game.prev();

    console.log({ ply: move?.ply, end: move?.end });

    if (!move) {
      await this.board.titleFrame(this.header);
      this.board.render();
      return;
    }

    await this.board.frame(
      this.game.getBoardData(),
      this.header,
      move,
      this.game.materialInfo()
    );
    this.board.render();
  }

  async next() {
    const move = this.game.next();

    console.log({ ply: move?.ply, end: move?.end });

    if (!move) {
      return;
    }

    await this.board.frame(
      this.game.getBoardData(),
      this.header,
      move,
      this.game.materialInfo()
    );
    this.board.render();
  }

  first() {}

  last() {}
}

// const play = async (
//   board: Board,
//   config: GameConfig,
//   pgn: string | null,
//   interval: number = 1000
// ) => {
//   const game = new Game();

//   if (pgn) {
//     game.loadPGN(pgn);
//   }

//   console.log(game.pgn());

//   const header = game.getHeader();

//   await board.titleFrame(header);
//   board.render();
//   await board.frame(game.getBoardData(), header, null, game.materialInfo());
//   await delay(interval * 1);
//   board.render();

//   while (true) {
//     const move = game.next();

//     if (!move) {
//       break;
//     }

//     await board.frame(game.getBoardData(), header, move, game.materialInfo());
//     await delay(interval);
//     board.render();
//   }

//   await delay(interval * 5);
//   // play(board, config, pgn, interval);
// };

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

  const player = new Player(board, gameConfig).load(new Game().loadPGN(pgn));

  // @ts-ignore
  window.player = player;

  document.addEventListener("click", () => {
    player.next();
  });

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
    console.log(key);
    switch (key) {
      case "ArrowLeft":
        player.prev();
        break;
      case "ArrowRight":
        player.next();
        break;
      case "ArrowUp":
        player.first();
        break;
      case "ArrowDown":
        player.last();
        break;
      case "":
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

  createDownloadLink(pgn, boardConfig).then((link) => {
    document.body.appendChild(link);
  });
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
