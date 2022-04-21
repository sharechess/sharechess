import { PiecesStyle } from "./../board/styles-pieces/piecesStyles";
import { BoardStyle, Handlers } from "./../types";
import { setState } from "../state";
import link from "../persistance/link";
import boardStyles from "../board/styles-board/boardStyles";
import piecesStyles from "../board/styles-pieces/piecesStyles";
import Board from "../board/Board";

const loadFromUrl = async (
  refreshHash: boolean,
  handlers: Handlers,
  board: Board
) => {
  setState("refreshHash", refreshHash);
  const { pgn, fen, side, ply, boardStyle, piecesStyle } = await link.read();

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

  if (boardStyle && Object.keys(boardStyles).includes(boardStyle)) {
    setState("boardConfig", "boardStyle", boardStyle as BoardStyle);
    board.setStyle(boardStyle as BoardStyle);
  }

  console.log({ piecesStyle });

  if (piecesStyle && piecesStyles.includes(piecesStyle as PiecesStyle)) {
    setState("boardConfig", "piecesStyle", piecesStyle as PiecesStyle);
    board.setPiecesStyle(piecesStyle as PiecesStyle);
  }

  setState("refreshHash", true);
};

export default loadFromUrl;
