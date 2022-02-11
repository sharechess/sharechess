import { GameConfig } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class Player {
  private interval = 1000;
  private game: Game = new Game();
  private ply: number = 0;
  public playing: boolean = false;

  private firstRender: Promise<void>;

  constructor(private board: Board, private config: GameConfig) {
    this.firstRender = this.board
      .frame(this.game.getPosition(0), this.game.header)
      .then((_) => this.board.render());
  }

  updateConfig(config: Partial<GameConfig>) {
    this.config = { ...this.config, ...config };
  }

  async load(game: Game) {
    this.pause();
    await this.firstRender;

    this.game = game;
    this.ply = 0;

    await this.board.frame(this.game.getPosition(this.ply), this.game.header);
    this.board.render();
  }

  async play() {
    this.playing = true;

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

    await this.board.frame(this.game.getPosition(ply), this.game.header);
    this.board.render();
  }

  async next() {
    const ply = this.ply + 1;

    if (ply >= this.game.length) {
      return;
    }

    this.ply = ply;

    await this.board.frame(this.game.getPosition(ply), this.game.header);
    this.board.render();
  }

  async first() {
    this.ply = 0;

    await this.board.frame(this.game.getPosition(this.ply), this.game.header);
    this.board.render();
  }

  async last() {
    this.ply = this.game.length - 1;

    await this.board.frame(this.game.getPosition(this.ply), this.game.header);
    this.board.render();
  }

  async goto(ply: number) {
    this.ply = ply;

    await this.board.frame(this.game.getPosition(this.ply), this.game.header);
    this.board.render();
  }
}

export default Player;
