import { cleanPGN, compressPGN, decompressPGN } from "../game/PGNHelpers";
import { importFromLichess } from "../imports/importFromLink";

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

      location.hash = `fen/${linkData.fen.replace(/ /g, "_")}`;
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

  getFENLink(fen: string) {
    return `${location.origin}/#fen/${fen.replace(/ /g, "_")}`;
  },

  async read() {
    const url = new URL(location.href);
    const [type, ...rest] = location.hash.split("/");

    if (/fen/.test(type)) {
      linkData = { ...defaultLinkData } as LinkData;
      linkData.fen = decodeURI(rest.join("/")).replace(/_/g, " ");
    } else if (/pgn/.test(type)) {
      const [side, ply, ...pgn] = rest;
      linkData.side = side as "w" | "b";
      linkData.ply = Number(ply);
      linkData.pgn = pgn.join("/");
      linkData.fen = "";
    } else if (/lid/.test(type)) {
      const [side, ply, ...id] = rest;
      linkData.side = side as "w" | "b";
      linkData.ply = Number(ply);

      const result = await importFromLichess(
        new URL(`https://lichess.org/${id[0]}`)
      );

      if (!result.error) {
        linkData.pgn = compressPGN(cleanPGN(result.pgn));
        linkData.fen = "";
      } else {
        linkData.pgn = "";
        linkData.fen = "";
      }
    }

    return {
      pgn: linkData.pgn ? decompressPGN(linkData.pgn) : "",
      fen: linkData.fen,
      side: linkData.side,
      ply: linkData.ply,
      boardStyle: url.searchParams.get("b"),
      piecesStyle: url.searchParams.get("p"),
    };
  },

  entries() {
    return { ...linkData } as LinkData;
  },
};

export default link;
