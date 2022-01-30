// import { PieceType, BoardData } from "../types";
// import { Chess, ChessInstance, Move } from "chess.js";
// import { cleanPGN } from "./PGNHelpers";

// export type MoveWithDetails = Move & { ply: number; end: number; fen: string };

// const MATERIAL_VALUE: Map<PieceType, number> = new Map([
//   ["q", 9],
//   ["r", 5],
//   ["b", 3],
//   ["n", 3],
//   ["p", 1],
// ]);

// class Game {
//   private moves: MoveWithDetails[];
//   private currentPly: number = 0;

//   constructor() {
//     this.moves = [];
//   }

//   getMoves() {
//     return this.moves.map((move) => move.san);
//   }

//   loadPGN(pgn: string) {
//     const game = new Chess();
//     const replay = new Chess();

//     game.load_pgn(cleanPGN(pgn));
//     game.delete_comments();

//     const moves = game.history({ verbose: true });
//     const fen = game.header().FEN;

//     if (fen) {
//       replay.load(fen);
//     }

//     this.moves = moves.map((item, i) => {
//       replay.move(item);

//       const currentFEN = replay.fen();

//       return {
//         ...item,
//         ply: i + 1,
//         end: moves.length - 1 - i,
//         fen: currentFEN,
//         material: this.materialInfo(replay.board()),
//       };
//     });

//     this.currentPly = 0;

//     return this;
//   }

//   next() {
//     // const move = this.moves[this.currentPly];
//     // if (!move) {
//     //   return null;
//     // }
//     // this.currentPly++;
//     // this.replay.move(move);
//     // return move;
//   }

//   prev() {
//     // const undo = Boolean(this.replay.undo());
//     // if (undo) {
//     //   this.currentPly--;
//     // } else {
//     //   return null;
//     // }
//     // const move = this.moves[this.currentPly - 1];
//     // return move;
//   }

//   last() {
//     while (this.next()) {}
//     return this.moves[this.moves.length - 1];
//   }

//   first() {
//     while (this.prev()) {}
//     return this.moves[0];
//   }

//   goto(ply: number) {
//     if (ply === this.currentPly || ply < 0 || ply > this.moves.length - 1) {
//       return null;
//     }

//     while (this.currentPly !== ply) {
//       ply > this.currentPly ? this.next() : this.prev();
//     }

//     return this.moves[ply - 1];
//   }

//   materialInfo(boardData: BoardData) {
//     const pieces = boardData.flat().filter(Boolean);

//     const sum = { w: 0, b: 0 };
//     const imbalance = {
//       w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
//       b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
//     };
//     const count = {
//       w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
//       b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
//     };

//     for (const piece of pieces) {
//       if (piece !== null && piece.type !== "k") {
//         sum[piece.color] += MATERIAL_VALUE.get(piece.type) ?? 0;
//         count[piece.color][piece.type] += 1;

//         const oppositeColor = piece.color === "b" ? "w" : "b";

//         if (imbalance[oppositeColor][piece.type] === 0) {
//           imbalance[piece.color][piece.type] += 1;
//         } else {
//           imbalance[oppositeColor][piece.type] -= 1;
//         }
//       }
//     }

//     return { sum, imbalance, count, diff: sum.w - sum.b };
//   }

//   getBoardData() {
//     // return this.replay.board();
//     return new Chess().board();
//   }

//   getHeader() {
//     return this.game.header();
//   }

//   pgn() {
//     return this.game.pgn();
//   }
// }

// export type Material = ReturnType<Game["materialInfo"]>;

// export default Game;
