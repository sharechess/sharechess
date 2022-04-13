import { Handlers } from "./../types";
import { setState } from "../state";
import link from "../persistance/link";

const loadFromUrl = async (refreshHash: boolean, handlers: Handlers) => {
  setState("refreshHash", refreshHash);
  const { pgn, fen, side, ply } = await link.read();

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

  setState("refreshHash", true);
};

export default loadFromUrl;
