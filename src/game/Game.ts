import { PieceType } from "./../types";
import { Chess, ChessInstance, Move } from "chess.js";
import { cleanPGN } from "./PGNHelpers";

export type MoveWithPly = Move & { ply: number; end: number };

const MATERIAL_VALUE: Map<PieceType, number> = new Map([
  ["q", 9],
  ["r", 5],
  ["b", 3],
  ["n", 3],
  ["p", 1],
]);

class Game {
  private game: ChessInstance;
  private replay: ChessInstance;
  private moves: MoveWithPly[];
  private currentPly: number = 0;

  constructor() {
    this.game = new Chess();
    this.replay = new Chess();
    this.moves = [];
  }

  loadPGN(pgn: string) {
    this.game.load_pgn(cleanPGN(pgn));
    this.game.delete_comments();

    const moves = this.game.history({ verbose: true });

    this.moves = moves.map((item, i) => ({
      ...item,
      ply: i + 1,
      end: moves.length - 1 - i,
    }));

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
    this.currentPly++;
    const move = this.moves[this.currentPly - 1];

    if (!move) {
      return null;
    }

    this.replay.move(move);
    return move;
  }

  prev() {
    const undo = Boolean(this.replay.undo());

    if (undo) {
      this.currentPly--;
    } else {
      return null;
    }

    const move = this.moves[this.currentPly];

    // if (!move) {
    //   return null;
    // }

    console.log("Prev!");

    return move;
  }

  last() {
    while (this.next()) {}
    return this.moves[this.moves.length - 1];
  }

  first() {
    while (this.prev()) {}
    return this.moves[0];
  }

  goto(ply: number) {
    if (ply === this.currentPly || ply < 0 || ply > this.moves.length - 1) {
      return null;
    }

    while (this.currentPly !== ply) {
      ply > this.currentPly ? this.next() : this.prev();
    }

    return this.moves[ply];
  }

  materialInfo() {
    const pieces = this.getBoardData().flat().filter(Boolean);

    const sum = { w: 0, b: 0 };
    const imbalance = {
      w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
      b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    };
    const material = {
      w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
      b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    };

    for (const piece of pieces) {
      if (piece !== null && piece.type !== "k") {
        sum[piece.color] += MATERIAL_VALUE.get(piece.type) ?? 0;
        material[piece.color][piece.type] += 1;

        const oppositeColor = piece.color === "b" ? "w" : "b";

        if (imbalance[oppositeColor][piece.type] === 0) {
          imbalance[piece.color][piece.type] += 1;
        } else {
          imbalance[oppositeColor][piece.type] -= 1;
        }
      }
    }

    return { sum, imbalance, material, diff: sum.w - sum.b };
  }

  getBoardData() {
    return this.replay.board();
  }

  getHeader() {
    return this.game.header();
  }

  pgn() {
    return this.game.pgn();
  }
}

export type Material = ReturnType<Game["materialInfo"]>;

export default Game;
