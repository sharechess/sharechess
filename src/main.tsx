import WebFont from "webfontloader";
// import * as Hammer from "hammerjs";
import { render } from "solid-js/web";

import { BoardStyle } from "./types";

import Board from "./board/Board";
import Game from "./game/Game";
import Player from "./player/Player";
import App from "./ui/App";

import { state, setState } from "./state";
import saveConfig from "./persistance/saveConfig";

import createImage from "./encoders/createImage";
import createAnimation from "./encoders/createAnimation";
import readFile from "./utils/readFile";
import download from "./utils/download";
import { compressPGN } from "./game/PGNHelpers";
import extractUrlData from "./persistance/extractUrlData";
import importFromLink from "./imports/importFromLink";
import isFEN from "./utils/isFEN";
import isPGN from "./utils/isPGN";
import isSafeLink from "./utils/isSafeLink";
import { PiecesStyle } from "./board/styles-pieces/piecesStyles";

const main = async () => {
  const board = new Board(state.boardConfig);
  const player = new Player(board, state.gameConfig);

  player.watch((playing) => setState("playing", playing));

  /* Register handlers */

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
    togglePlay() {
      player.playing ? player.pause() : player.play();
    },
    goto(ply: number) {
      player.pause();
      player.goto(ply);
    },
    toggleBorder() {
      board.toggleBorder();
      setState("boardConfig", "showBorder", !state.boardConfig.showBorder);
      saveConfig("board");
    },
    showBorder() {
      board.showBorder();
      setState("boardConfig", "showBorder", true);
      saveConfig("board");
    },
    hideBorder() {
      board.hideBorder();
      setState("boardConfig", "showBorder", false);
      saveConfig("board");
    },
    toggleExtraInfo() {
      board.toggleExtraInfo();
      setState(
        "boardConfig",
        "showExtraInfo",
        !state.boardConfig.showExtraInfo
      );
      saveConfig("board");
    },
    toggleAnonymous() {
      setState("anonymous", !state.anonymous);
      board.anonymous = state.anonymous;

      if (state.pgn !== "") {
        const pgn = state.anonymous ? state.game.anonymousPGN : state.game.pgn;
        window.location.hash = `pgn/${compressPGN(pgn)}`;
        setState("refreshHash", false);
      }
    },
    toggleTitleScreen() {
      setState("gameConfig", "titleScreen", !state.gameConfig.titleScreen);
      saveConfig("game");
    },
    toggleShadows() {
      board.toggleShadows();
      setState("boardConfig", "showShadows", !state.boardConfig.showShadows);
      saveConfig("board");
    },
    flip() {
      console.log("FLIP");
      board.flip();
      setState("boardConfig", "flipped", !state.boardConfig.flipped);
    },
    changeBoardStyle(style: BoardStyle) {
      board.setStyle(style);
      setState("boardConfig", "boardStyle", style);
      saveConfig("board");
    },
    changePiecesStyle(style: PiecesStyle) {
      board.setPiecesStyle(style);
      setState("boardConfig", "piecesStyle", style);
      saveConfig("board");
    },
    async loadPGN(pgn: string, side: "w" | "b" = "w") {
      const game = new Game().loadPGN(pgn);
      setState({
        pgn: game.pgn,
        fen: "",
        moves: game.getMoves(),
        ply: 0,
        game,
      });
      window.location.hash = `pgn/${compressPGN(game.pgn)}`;
      setState("refreshHash", false);

      await player.load(game);
      setState("activeTab", "game");

      if (side === "w") {
        board.flipWhite();
      } else {
        board.flipBlack();
      }

      setState("boardConfig", "flipped", side === "b");

      document.title = `SHARECHESS - ${game.getTitle({ anonymous: false })}`;
    },
    async loadFEN(fen: string, hash = true) {
      const game = new Game().loadFEN(fen);
      setState({
        pgn: "",
        fen,
        moves: game.getMoves(),
        ply: 0,
        game,
      });

      await player.load(game);

      if (hash) {
        window.location.hash = `fen/${state.fen}`;
        setState("refreshHash", false);
        setState("activeTab", "game");
      }

      const side = game.getPosition(0).turn;

      if (side === "w") {
        board.flipWhite();
      } else {
        board.flipBlack();
      }

      setState("boardConfig", "flipped", side === "b");

      document.title = `SHARECHESS - FEN ${fen}`;
    },
    async load(data: string) {
      if (isFEN(data)) {
        await this.loadFEN(data);
        return true;
      }

      if (isPGN(data)) {
        await this.loadPGN(data);
        return true;
      }

      if (isSafeLink(data)) {
        await this.importPGN(data);
        return true;
      }

      return false;
    },
    async importPGN(link: string) {
      const result = await importFromLink(link);

      if (result.error) {
        return;
      }

      await this.loadPGN(result.pgn, result.side);
    },
    async downloadImage() {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const data = await createImage(
        state.fen,
        state.pgn,
        state.ply,
        state.boardConfig,
        state.gameConfig.picSize
      );
      download(data, `fen_${Date.now()}`, "png");
    },
    async downloadAnimation() {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const data = await createAnimation(
        state.pgn,
        state.boardConfig,
        state.gameConfig.format,
        state.gameConfig.animationSize,
        state.gameConfig.titleScreen
      );

      const name = state.game.getFileName(state.anonymous);

      download(data, name, state.gameConfig.format.toLowerCase());
    },
  };

  /* Render the page */

  render(
    () => <App handlers={handlers} state={state} />,
    document.getElementById("root") as HTMLElement
  );

  const $board = document.querySelector<HTMLImageElement>("#board");
  $board?.prepend(board.canvas);

  /* Load game from the url */

  const loadFromUrl = async () => {
    const { pgn, fen } = extractUrlData();

    await (pgn
      ? handlers.loadPGN(pgn)
      : fen
      ? handlers.loadFEN(fen)
      : handlers.loadFEN(
          "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
          false
        ));
  };

  await loadFromUrl();

  /* Register events */
  document.addEventListener("dblclick", function (el) {
    el.preventDefault();
  });

  window.addEventListener("resize", () => {
    setState(
      "layout",
      window.innerWidth < window.innerHeight
        ? "single"
        : window.innerWidth < 1366
        ? "double"
        : "triple"
    );
  });

  window.addEventListener("hashchange", () => {
    if (!state.refreshHash) {
      setState("refreshHash", true);
      console.log("No refresh");
      return;
    }

    console.log("Refresh!");
    loadFromUrl();
  });

  if (!state.mobile) {
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

    document.addEventListener("keydown", (e) => {
      const target = e.target as HTMLElement | null;

      if (
        keyMapping[e.key] &&
        target?.nodeName !== "INPUT" &&
        target?.nodeName !== "TEXTAREA"
      ) {
        e.preventDefault();
        keyMapping[e.key]();
      }
    });

    const preventDefaults = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      document.addEventListener(eventName, preventDefaults, false);
    });

    document.addEventListener("drop", async (e) => {
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        const content = await readFile(e.dataTransfer.files[0]);
        handlers.loadPGN(content);
      }
    });
  } else {
    // const hammer = new Hammer.Manager(board.canvas);
    // hammer.add(new Hammer.Swipe());
    // hammer.add(new Hammer.Pinch());
    // hammer.add(new Hammer.Press({ time: 500 }));
    // hammer.add(new Hammer.Tap({ taps: 1 }));
    // hammer.on("swiperight", handlers.next);
    // hammer.on("swipeleft", handlers.prev);
    // hammer.on("swipeup", handlers.first);
    // hammer.on("swipedown", handlers.last);
    // hammer.on("pinchin", handlers.showBorder);
    // hammer.on("pinchout", handlers.hideBorder);
    // hammer.on("tap", handlers.next);
    // hammer.on("press", handlers.flip);
  }
};

/* Boot */

WebFont.load({
  google: {
    families: ["Ubuntu:500,700", "Fira Mono:500"],
  },
  custom: {
    families: ["Chess"],
    urls: ["/fonts.css"],
  },
  active: main,
});
