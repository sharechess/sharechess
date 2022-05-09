import { PieceType, PieceColor, BoardData, Position } from "../types";
import { Chess, ChessInstance } from "chess.js";
import { cleanPGN } from "./PGNHelpers";
import { formatDate, formatName } from "../utils/formatters";
import isLink from "../utils/isLink";

const MATERIAL_VALUE: Map<PieceType, number> = new Map([
  ["q", 9],
  ["r", 5],
  ["b", 3],
  ["n", 3],
  ["p", 1],
]);

const prepareHeaderEntry = (
  entry: string | undefined,
  ifEmpty: null | string = null
) => {
  return !entry || entry === "?" ? ifEmpty : entry;
};

class Game {
  private positions: Position[] = [];
  private game: ChessInstance = new Chess();

  constructor() {}

  loadPGN(pgn: string) {
    const game = new Chess();
    const replay = new Chess();

    game.load_pgn(cleanPGN(pgn));
    game.delete_comments();

    const moves = game.history({ verbose: true });
    const fen = game.header().FEN;

    if (fen) {
      replay.load(fen);
    }

    this.positions = [
      {
        ply: 0,
        move: null,
        end: moves.length,
        fen: replay.fen(),
        check: replay.in_check(),
        mate: replay.in_checkmate(),
        turn: replay.turn(),
        material: this.materialInfo(replay.board()),
        placement: this.getPlacement(replay.fen()),
        last: moves.length === 0,
      },
    ];

    moves.forEach((item, i) => {
      replay.move(item);

      const currentFEN = replay.fen();

      this.positions.push({
        ply: i + 1,
        move: item,
        end: moves.length - 1 - i,
        fen: currentFEN,
        check: replay.in_check(),
        mate: replay.in_checkmate(),
        turn: replay.turn(),
        material: this.materialInfo(replay.board()),
        placement: this.getPlacement(currentFEN),
        last: i === moves.length - 1,
      });
    });

    this.game = game;
    return this;
  }

  loadFEN(fen: string) {
    this.game = new Chess(fen);
    this.positions = [
      {
        ply: 0,
        move: null,
        end: 0,
        fen,
        check: this.game.in_check(),
        mate: this.game.in_checkmate(),
        turn: this.game.turn(),
        material: this.materialInfo(this.game.board()),
        placement: this.getPlacement(this.game.fen()),
        last: true,
      },
    ];
    return this;
  }

  private getPlacement(fen: string) {
    const board = new Chess(fen).board();

    const placement: {
      x: number;
      y: number;
      type: PieceType;
      color: PieceColor;
    }[] = [];

    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (board[y][x] !== null) {
          const { type, color } = board[y][x] as {
            type: PieceType;
            color: PieceColor;
          };

          placement.push({ x, y, type, color });
        }
      }
    }

    return placement;
  }

  private materialInfo(boardData: BoardData) {
    const pieces = boardData.flat().filter(Boolean);

    const sum = { w: 0, b: 0 };
    const imbalance = {
      w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
      b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    };
    const count = {
      w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
      b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    };

    for (const piece of pieces) {
      if (piece !== null && piece.type !== "k") {
        sum[piece.color] += MATERIAL_VALUE.get(piece.type) ?? 0;
        count[piece.color][piece.type] += 1;

        const oppositeColor = piece.color === "b" ? "w" : "b";

        if (imbalance[oppositeColor][piece.type] === 0) {
          imbalance[piece.color][piece.type] += 1;
        } else {
          imbalance[oppositeColor][piece.type] -= 1;
        }
      }
    }

    return { sum, imbalance, count, diff: sum.w - sum.b };
  }

  get length() {
    return this.positions.length;
  }

  get header() {
    const header = this.game.header();

    const white = prepareHeaderEntry(header.White, "Anonymous") as string;
    const black = prepareHeaderEntry(header.Black, "Anonymous") as string;
    const date = prepareHeaderEntry(header.Date);

    return {
      White: white,
      Black: black,
      WhitePretty: formatName(white),
      BlackPretty: formatName(black),
      WhiteElo: prepareHeaderEntry(header.WhiteElo),
      BlackElo: prepareHeaderEntry(header.BlackElo),
      Date: date,
      DatePretty: date === null ? null : formatDate(date),
      Event: prepareHeaderEntry(header.Event),
      Round: prepareHeaderEntry(header.Round),
      Site: prepareHeaderEntry(header.Site),
      Result: prepareHeaderEntry(header.Result),
    };
  }

  getTitle({ anonymous }: { anonymous: boolean }) {
    const header = this.header;
    const w = anonymous ? "Anonymous" : header.WhitePretty;
    const b = anonymous ? "Anonymous" : header.BlackPretty;

    return (
      `${w} vs ${b}` +
      (header.Event ? ` | ${header.Event}` : "") +
      (header.Round ? `, Round ${header.Round}` : "") +
      (header.DatePretty ? ` | ${header.DatePretty}` : "")
    );
  }

  getFileName(anonymous: boolean) {
    const header = this.header;
    const w = anonymous ? "Anonymous" : header.WhitePretty;
    const b = anonymous ? "Anonymous" : header.BlackPretty;

    return (
      (header.Date
        ? `${header.Date.replace(/\?/g, "X").replace(/\./g, "-")}_`
        : "") +
      `${w}_${b}` +
      (header.Event ? `_${header.Event}` : "") +
      (header.Round ? `_R${header.Round}` : "")
    ).replace(/\s+/g, "-");
  }

  get pgn() {
    return this.game.pgn();
  }

  get anonymousPGN() {
    const pgn = this.game
      .pgn()
      .replace(/\[White .+\]/, '[White "Anonymous"]')
      .replace(/\[Black .+\]/, '[Black "Anonymous"]');

    return isLink(this.header.Site)
      ? pgn.replace(/\[Site .+\]/, '[Site "?"]')
      : pgn;
  }

  getPosition(ply: number) {
    const position = this.positions[ply];

    return position ?? null;
  }

  getMoves() {
    return this.positions.slice(1).map(({ move }) => move?.san) as string[];
  }
}

export default Game;
