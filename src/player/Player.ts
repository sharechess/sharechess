import { GameConfig } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";
import { setState } from "../state";
import sfx from "./sfx";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class Player {
  private interval = 1000;
  private game: Game = new Game();
  private ply: number = 0;
  private callback: (playing: boolean, ply: number) => void = () => {};
  public playing: boolean = false;

  private firstRender: Promise<void>;

  constructor(private board: Board, private config: GameConfig) {
    this.firstRender = this.board
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
    await this.firstRender;

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
  }

  async next() {
    const ply = this.ply + 1;

    if (ply >= this.game.length) {
      this.pause();
      return;
    }

    this.ply = ply;

    const position = this.getPosition();

    if (this.ply > 0) {
      if (position.mate) {
        sfx.snap.play();
        // sfx.move.play();
      } else if (/[ce]/.test(position.move?.flags as string)) {
        sfx.take.play();
        // sfx.move.play();
      } else if (/[kqp]/.test(position.move?.flags as string)) {
        sfx.swap.play();
        // sfx.move.play();
      } else {
        sfx.move.play();
      }
    }

    await this.board.frame(position, this.game.header);
    this.board.render();
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
