import { GameConfig } from "../types";
import Board from "../board/Board";
import Game from "../game/Game";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class Player {
  private interval = 1000;
  private game: Game = new Game();
  private header: { [key: string]: string | undefined } = {};
  private start: boolean = true;
  private end: boolean = false;
  public playing: boolean = false;
  private firstRender: Promise<void>;

  constructor(private board: Board, private config: GameConfig) {
    this.firstRender = this.board
      .frame(this.game.getBoardData(), {}, null)
      .then((_) => this.board.render());
  }

  updateConfig(config: Partial<GameConfig>) {
    this.config = { ...this.config, ...config };
  }

  async load(game: Game) {
    this.pause();
    await this.firstRender;

    this.game = game;
    this.header = game.getHeader();

    await this.board.titleFrame(this.game.getHeader());
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
    if (this.start) {
      return;
    }

    this.end = false;

    const move = this.game.prev();

    if (!move) {
      await this.board.titleFrame(this.header);
      this.board.render();
      this.start = true;

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
    if (this.end) {
      return;
    }

    if (this.start) {
      await this.board.frame(
        this.game.getBoardData(),
        this.header,
        null,
        this.game.materialInfo()
      );
      this.board.render();
      this.start = false;
      return;
    }

    const move = this.game.next();

    this.end = move?.end === 0;

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

  async first() {
    this.game.first();

    await this.board.titleFrame(this.header);
    this.board.render();

    this.end = false;
    this.start = true;
  }

  async last() {
    const move = this.game.last();

    await this.board.frame(
      this.game.getBoardData(),
      this.header,
      move,
      this.game.materialInfo()
    );
    this.board.render();

    this.end = true;
    this.start = false;
  }

  async goto(ply: number) {
    const move = this.game.goto(ply);

    await this.board.frame(
      this.game.getBoardData(),
      this.header,
      move,
      this.game.materialInfo()
    );
    this.board.render();

    this.start = false;
    this.end = move?.end === 0;
  }
}

export default Player;
