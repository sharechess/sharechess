import { BoardStyle, Handlers } from "../types";

import Board from "../board/Board";
import Game from "../game/Game";
import Player from "../player/Player";

import { state, setState } from "../state";
import saveConfig from "../persistance/saveConfig";

import createImage from "../encoders/createImage";
import createAnimation from "../encoders/createAnimation";
import download from "../utils/download";
import importFromLink from "../imports/importFromLink";
import isFEN from "../utils/isFEN";
import isPGN from "../utils/isPGN";
import isSafeLink from "../utils/isSafeLink";
import { PiecesStyle } from "../board/styles-pieces/piecesStyles";
import link from "../persistance/link";
import importToLichess from "../imports/importToLichess";

const MAX_RECENT_ITEMS = 20;

const registerHandlers = (player: Player, board: Board): Handlers => {
  return {
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
        link.set({ pgn });
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

      if (location.hash !== "") {
        setState("recent", (recent) => {
          const newRecent = recent.filter(({ hash }) => hash !== location.hash);
          newRecent.unshift({
            hash: location.hash,
            title: game.getShortTitle({ anonymous: state.anonymous }),
          });

          return newRecent.slice(0, MAX_RECENT_ITEMS);
        });

        saveConfig("recent");
      }
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
    async loadFromClipboard() {
      const clip = await navigator.clipboard.readText();
      return this.load(clip);
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
      setState("siteConfig", "sounds", !state.siteConfig.sounds);
      saveConfig("site");
    },
    toggleSpeech() {
      setState("siteConfig", "speech", !state.siteConfig.speech);
      saveConfig("site");
    },
    toggleDarkMode() {
      setState("siteConfig", "darkMode", !state.siteConfig.darkMode);
      saveConfig("site");
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
    toggleFavoritePieces(name) {
      if (state.favoritePieces.has(name)) {
        setState("favoritePieces", (fp) => {
          const updated = new Set([...fp]);
          updated.delete(name);
          return updated;
        });
      } else {
        setState("favoritePieces", (fp) => {
          const updated = new Set([...fp]);
          updated.add(name);
          return updated;
        });
      }

      saveConfig("pieces");
    },
    toggleFavoriteBoard(name) {
      if (state.favoriteBoards.has(name)) {
        setState("favoriteBoards", (fb) => {
          const updated = new Set([...fb]);
          updated.delete(name);
          return updated;
        });
      } else {
        setState("favoriteBoards", (fb) => {
          const updated = new Set([...fb]);
          updated.add(name);
          return updated;
        });
      }

      saveConfig("boards");
    },
    clearRecent(e: Event) {
      e.preventDefault();
      setState("recent", []);
      saveConfig("recent");
    },
    deleteRecent(hash) {
      setState("recent", (recent) => {
        const newRecent = recent.filter((x) => x.hash !== hash);
        return newRecent;
      });
      saveConfig("recent");
    },
  };
};

export default registerHandlers;
