import { Position } from "./../types";
import { GameConfig } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";
import { setState, state } from "../state";
import sfx from "./sfx";
import Speech, { sanToText } from "./speach";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class Player {
  private interval = 1000;
  private game: Game = new Game();
  private ply: number = 0;
  private callback: (playing: boolean, ply: number) => void = () => {};
  private speech: Speech;
  public playing: boolean = false;

  constructor(private board: Board, private config: GameConfig) {
    this.speech = new Speech();
  }

  async init() {
    await this.board
      .frame(this.game.getPosition(0), this.game.header)
      .then((_) => this.board.render());
  }

  watch(fn: (playing: boolean, ply: number) => void) {
    this.callback = fn;
  }

  updateConfig(config: Partial<GameConfig>) {
    this.config = { ...this.config, ...config };
  }

  getPosition() {
    const position = this.game.getPosition(this.ply);
    setState({ ply: position.ply });
    setState({ fen: position.fen });

    return position;
  }

  async load(game: Game) {
    this.pause();

    this.game = game;
    this.ply = 0;

    await this.board.frame(this.getPosition(), this.game.header);
    this.board.render();
  }

  async play() {
    this.playing = true;
    this.callback(this.playing, this.ply);

    if (this.ply === this.game.getMoves().length) {
      this.first();
    }

    while (true) {
      await delay(this.interval);
      if (!this.playing) {
        break;
      }

      this.next();
    }
  }

  pause() {
    this.playing = false;
    this.callback(this.playing, this.ply);
  }

  async prev() {
    const ply = this.ply - 1;

    if (ply < -1 || (ply < 0 && this.config.titleScreen === false)) {
      return;
    }

    this.ply = ply;

    if (ply === -1) {
      await this.board.titleFrame(this.game.header);
      this.board.render();
      return;
    }

    await this.board.frame(this.getPosition(), this.game.header);
    this.board.render();

    if (state.siteConfig.sounds) {
      sfx.rewind.play();
    }
  }

  playSFX(position: Position) {
    if (position.mate) {
      sfx.snap.play();
    } else if (/[ce]/.test(position.move?.flags as string)) {
      sfx.take.play();
    } else if (/[kqp]/.test(position.move?.flags as string)) {
      sfx.swap.play();
    } else {
      sfx.move.play();
    }
  }

  playAnarchySFX(position: Position) {
    if (position.mate) {
      sfx.snap.play();
    }

    if (position.move?.flags && position.move.flags.includes("e")) {
      sfx.fanfare.play();
    }

    if (position.move?.flags && position.move.flags.includes("p")) {
      sfx.brickCastle.play();
    }

    if (position.move?.flags && position.move.flags.includes("c")) {
      switch (position.move.piece) {
        case "p":
          sfx.coneTake.play();
          break;
        case "r":
          sfx.brickTake.play();
          break;
        case "n":
          sfx.take.play();
          sfx.neigh.play();
          break;
        case "k":
          sfx.pipiTake.play();
          break;
        case "b":
          sfx.toyTake.play();
          break;
        default:
          sfx.take.play();
      }
    } else if (/[kq]/.test(position.move?.flags as string)) {
      sfx.brickCastle.play();
    } else {
      switch (position.move?.piece) {
        case "p":
          sfx.coneMove.play();
          break;
        case "r":
          sfx.brickMove.play();
          break;
        case "n":
          sfx.snort.play();
          break;
        case "k":
          sfx.pipiMove.play();
          break;
        case "b":
          sfx.toyMove.play();
          break;
        default:
          sfx.move.play();
      }
    }
  }

  async next() {
    const ply = this.ply + 1;

    if (ply >= this.game.length) {
      this.pause();
      return;
    }

    this.ply = ply;

    const position = this.getPosition();

    await this.board.frame(position, this.game.header);
    this.board.render();

    if (this.ply > 0 && state.siteConfig.speech) {
      this.speech.say(sanToText(position.move?.san as string));
    }

    if (this.ply > 0 && state.siteConfig.sounds) {
      state.boardConfig.piecesStyle === "anarchy"
        ? this.playAnarchySFX(position)
        : this.playSFX(position);
    }

    if (position.end === 0 && state.siteConfig.speech) {
      const result = this.game.header.Result;
      if (result) {
        this.speech.say(
          result === "1-0"
            ? "White wins!"
            : result === "0-1"
            ? "Black wins!"
            : "Draw!"
        );
      }
    }
  }

  async first() {
    this.ply = 0;

    await this.board.frame(this.getPosition(), this.game.header);
    this.board.render();
  }

  async last() {
    this.ply = this.game.length - 1;

    await this.board.frame(this.getPosition(), this.game.header);
    this.board.render();
  }

  async goto(ply: number) {
    this.ply = ply;

    await this.board.frame(this.getPosition(), this.game.header);
    this.board.render();
  }
}

export default Player;
