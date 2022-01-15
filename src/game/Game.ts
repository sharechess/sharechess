import { Chess, ChessInstance, Move } from "chess.js";

class Game {
  private game: ChessInstance;
  private replay: ChessInstance;
  private moves: Move[];
  private currentPly: number = 0;

  constructor() {
    this.game = new Chess();
    this.replay = new Chess();
    this.moves = [];
  }

  private cleanPGN(pgn: string) {
    const game = new Chess();
    game.load_pgn(pgn);
    game.delete_comments();
    const [_, moves] = game.pgn().split("\n\n");

    const header = Object.entries(game.header())
      .filter(([key]) =>
        [
          "event",
          "site",
          "white",
          "black",
          "date",
          "result",
          "opening",
        ].includes(key.toLowerCase())
      )
      .map(([key, val]) => `[${key} "${val}"]`)
      .sort()
      .join("\n");

    return [header, moves].join("\n\n");
  }

  loadPGN(pgn: string) {
    this.game.load_pgn(this.cleanPGN(pgn));
    this.game.delete_comments();
    this.moves = this.game.history({ verbose: true });
    this.currentPly = 0;

    const fen = this.game.header().FEN;

    if (fen) {
      this.replay.load(fen);
    }

    return this;
  }

  loadFEN(fen: string) {
    this.game.load(fen);
    return this;
  }

  next() {
    const move = this.moves[this.currentPly];

    if (!move) {
      return null;
    }

    this.replay.move(move);
    this.currentPly++;
    return move;
  }

  prev() {
    const move = this.replay.undo();

    if (!move) {
      return null;
    }

    this.currentPly--;
    return move;
  }

  last() {
    while (this.next()) {}
  }

  first() {
    while (this.prev()) {}
  }

  goto(ply: number) {
    if (ply === this.currentPly || ply < 0 || ply > this.moves.length - 1) {
      return;
    }

    while (this.currentPly !== ply) {
      ply > this.currentPly ? this.next() : this.prev();
    }
  }

  getBoardData() {
    return this.replay.board();
  }

  pgn() {
    return this.game.pgn();
  }
}

export default Game;
