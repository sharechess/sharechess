import { compressPGN } from "../game/PGNHelpers";

type LinkData = {
  pgn?: string;
  fen?: string;
  side?: "b" | "w";
  ply?: number;
};

const defaultLinkData = {
  pgn: "",
  fen: "",
  side: "w",
  ply: 0,
};

let linkData: LinkData = { ...defaultLinkData } as LinkData;

const link = {
  set(data: LinkData) {
    if (data.fen) {
      linkData = { ...defaultLinkData } as LinkData;
      linkData.fen = data.fen;

      location.hash = `fen/${linkData.fen}`;
      return;
    }

    if (data.pgn) {
      linkData = { ...defaultLinkData } as LinkData;
      linkData.pgn = compressPGN(data.pgn);
    }

    if (data.side) {
      linkData.side = data.side;
    }

    if (data.ply !== undefined) {
      linkData.ply = data.ply;
    }

    location.hash = `pgn/${linkData.side}/${linkData.ply}/${linkData.pgn}`;
  },

  get() {
    return location.href;
  },

  entries() {
    return { ...linkData } as LinkData;
  },
};

export default link;
