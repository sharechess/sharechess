import WebFont from "webfontloader";
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
import importFromLink from "./imports/importFromLink";
import isFEN from "./utils/isFEN";
import isPGN from "./utils/isPGN";
import isSafeLink from "./utils/isSafeLink";
import { PiecesStyle } from "./board/styles-pieces/piecesStyles";
import link from "./persistance/link";
import importToLichess from "./imports/importToLichess";

const main = async () => {
  const board = new Board(state.boardConfig);
  const player = new Player(board, state.gameConfig);

  player.watch((playing) => setState("playing", playing));

  link.read();

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
      setState("refreshHash", false);
      link.set({ side: state.boardConfig.flipped ? "b" : "w" });
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
    async loadPGN(pgn: string, side: "w" | "b" = "w", ply: number = 0) {
      const game = new Game().loadPGN(pgn);
      setState({
        pgn: game.pgn,
        fen: "",
        moves: game.getMoves(),
        ply: 0,
        game,
      });
      link.set({ pgn: game.pgn, side, ply });

      await player.load(game);
      setState("activeTab", "game");

      if (side === "w") {
        board.flipWhite();
      } else {
        board.flipBlack();
      }

      setState("boardConfig", "flipped", side === "b");

      document.title = `ShareChess - ${game.getTitle({ anonymous: false })}`;
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
        link.set({ fen: state.fen });
        setState("activeTab", "game");
      }

      const side = game.getPosition(0).turn;

      if (side === "w") {
        board.flipWhite();
      } else {
        board.flipBlack();
      }

      setState("boardConfig", "flipped", side === "b");

      document.title = `ShareChess - FEN ${fen}`;
    },
    async load(data: string) {
      setState("refreshHash", false);

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
    toggleSound() {
      setState("boardConfig", "sounds", !state.boardConfig.sounds);
      saveConfig("board");
    },
    toggleSpeech() {
      setState("boardConfig", "speech", !state.boardConfig.speech);
      saveConfig("board");
    },
    async openOnLichess() {
      if (state.pgn === "") {
        window.open(
          `https://lichess.org/analysis/${state.fen.replace(/\s+/g, "_")}`
        );
        return true;
      }

      try {
        const url = await importToLichess(state.pgn, state.game.header.Site);
        window.open(`${url}/${state.boardConfig.flipped ? "black" : ""}`);
        return true;
      } catch (e) {
        return false;
      }
    },
  };

  // @ts-ignore
  window.handlers = handlers;

  /* Render the page */

  render(
    () => <App handlers={handlers} state={state} />,
    document.getElementById("root") as HTMLElement
  );

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  await board.setCanvas(canvas);
  await player.init();

  /* Load game from the url */

  const loadFromUrl = async (refreshHash: boolean = true) => {
    setState("refreshHash", refreshHash);
    const { pgn, fen, side, ply } = link.read();

    await (pgn
      ? handlers.loadPGN(pgn, side, ply)
      : fen
      ? handlers.loadFEN(fen)
      : handlers.loadFEN(
          "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
          false
        ));

    if (ply !== 0) {
      handlers.goto(ply);
    }

    setState("refreshHash", true);
  };

  await loadFromUrl(false);

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
      return;
    }

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
        setState("refreshHash", false);
        handlers.loadPGN(content);
      }
    });
  }
};

/* Boot */

Promise.all([
  new Promise((resolve) =>
    WebFont.load({
      google: {
        families: ["Ubuntu:500,700", "Fira Mono:500"],
      },
      custom: {
        families: ["Chess"],
        urls: ["/fonts.css"],
      },
      active: () => resolve(null),
    })
  ).catch(() => null),
  new Promise((resolve) => {
    if (speechSynthesis.getVoices().length > 0) {
      resolve(null);
    } else {
      window.speechSynthesis.onvoiceschanged = resolve;
    }
  }).catch(() => null),
]).then(() => main());
