import { Chess } from "chess.js";

const PGN_KEYS_TO_SHORT = {
  Event: "E",
  Site: "S",
  Round: "N",
  White: "W",
  Black: "B",
  Date: "D",
  Result: "R",
  FEN: "F",
  WhiteElo: "WE",
  BlackElo: "BE",
};

const PGN_KEYS = Object.keys(PGN_KEYS_TO_SHORT);

const PGN_KEYS_TO_LONG = Object.fromEntries(
  Object.entries(PGN_KEYS_TO_SHORT).map(([long, short]) => [short, long])
);

const cleanPGN = (pgn: string) => {
  const game = new Chess();
  game.load_pgn(pgn);
  game.delete_comments();

  if (!game.header().Result) {
    const result = (pgn.trim().match(/(1-0)|(0-1)|(1\/2-1\/2)$/) || [])[0];

    if (result) {
      game.header("Result", result);
    }
  }

  const headerEntries = Object.entries(game.header());

  const [_, moves] =
    headerEntries.length > 0
      ? game.pgn().split("\n\n")
      : [undefined, game.pgn()];

  const header = headerEntries
    .filter(([key, val]) => PGN_KEYS.includes(key) && val !== "?")
    .map(([key, val]) => `[${key} "${val}"]`)
    .sort()
    .join("\n");

  return [header, moves].join("\n\n");
};

const compressPGN = (pgn: string) => {
  const game = new Chess();
  game.load_pgn(pgn);

  const moves = game.history().join(" ");

  const header = Object.entries(game.header())
    .filter(([key]) => PGN_KEYS.includes(key))
    .map(
      ([key, val]) =>
        `${PGN_KEYS_TO_SHORT[key as keyof typeof PGN_KEYS_TO_SHORT]} ${val}`
    )
    .sort()
    .join("\n");

  return btoa([header, moves].join("\n\n"));
};

const decompressPGN = (compressedPGN: string) => {
  const [headerRaw, movesRaw] = atob(compressedPGN).split("\n\n");

  let result;

  const header = headerRaw
    .split("\n")
    .map((entry) => {
      const [shortKey, ...data] = entry.split(" ");
      const value = data.join(" ");

      if (shortKey === "R") {
        result = value;
      }

      return `[${PGN_KEYS_TO_LONG[shortKey]} "${value}"]`;
    })
    .join("\n");

  const moves =
    movesRaw
      .split(" ")
      .map((move, index) =>
        index % 2 === 0 ? `${index / 2 + 1}. ${move}` : move
      )
      .join(" ") + ` ${result}`;

  return [header, moves].join("\n\n");
};

export { cleanPGN, compressPGN, decompressPGN };
