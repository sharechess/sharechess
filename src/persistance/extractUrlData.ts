import { decompressPGN } from "../game/PGNHelpers";

const HEADER_REGEX = /^#v\d+\/(pgn|fen)\//;

const extractUrlData = () => {
  const hash = window.location.hash;

  if (!HEADER_REGEX.test(hash)) {
    return {
      pgn: "",
      fen: "",
    };
  }

  const [rawVersion, format, ...chunks] = hash.split("/");

  const version = Number((rawVersion.match(/\d+/g) ?? [])[0]);
  const data = chunks.join("/");

  return {
    version,
    pgn: format === "pgn" ? decompressPGN(data) : "",
    fen: format === "fen" ? decodeURI(data) : "",
  };
};

export default extractUrlData;
