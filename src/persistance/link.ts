import { compressPGN, decompressPGN } from "../game/PGNHelpers";

type LinkData = {
  pgn: string;
  fen: string;
  side: "b" | "w";
  ply: number;
};

type LinkConfig = {
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
  set(data: LinkConfig) {
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

  read() {
    const [type, ...rest] = location.hash.split("/");

    if (/fen/.test(type)) {
      linkData = { ...defaultLinkData } as LinkData;
      linkData.fen = decodeURI(rest.join("/"));
    } else if (/pgn/.test(type)) {
      const [side, ply, ...pgn] = rest;
      linkData.side = side as "w" | "b";
      linkData.ply = Number(ply);
      linkData.pgn = pgn.join("/");
      linkData.fen = "";
    }

    return {
      pgn: linkData.pgn ? decompressPGN(linkData.pgn) : "",
      fen: linkData.fen,
      side: linkData.side,
      ply: linkData.ply,
    };
  },

  entries() {
    return { ...linkData } as LinkData;
  },
};

export default link;
