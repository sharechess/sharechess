import { chunk_ } from "@arrows/array/chunk_";
import fs from "fs";
import beginner from "../public/daily-puzzles/beginner.json";
import intermediate from "../public/daily-puzzles/intermediate.json";
import advanced from "../public/daily-puzzles/advanced.json";
import puzzleThemes from "../public/daily-puzzles/puzzle-themes.json";

type Tag =
  | "advancedPawn"
  | "advantage"
  | "anastasiaMate"
  | "arabianMate"
  | "attackingF2F7"
  | "attraction"
  | "backRankMate"
  | "bishopEndgame"
  | "bodenMate"
  | "castling"
  | "capturingDefender"
  | "crushing"
  | "doubleBishopMate"
  | "dovetailMate"
  | "equality"
  | "kingsideAttack"
  | "clearance"
  | "defensiveMove"
  | "deflection"
  | "discoveredAttack"
  | "doubleCheck"
  | "endgame"
  | "exposedKing"
  | "fork"
  | "hangingPiece"
  | "hookMate"
  | "interference"
  | "intermezzo"
  | "knightEndgame"
  | "long"
  | "master"
  | "masterVsMaster"
  | "mate"
  | "mateIn1"
  | "mateIn2"
  | "mateIn3"
  | "mateIn4"
  | "mateIn5"
  | "middlegame"
  | "oneMove"
  | "opening"
  | "pawnEndgame"
  | "pin"
  | "promotion"
  | "queenEndgame"
  | "queenRookEndgame"
  | "queensideAttack"
  | "quietMove"
  | "rookEndgame"
  | "sacrifice"
  | "short"
  | "skewer"
  | "smotheredMate"
  | "superGM"
  | "trappedPiece"
  | "underPromotion"
  | "veryLong"
  | "xRayAttack"
  | "zugzwang";

const start = 19150;

const num = Number(process.argv[2]);

const day = start + num;

console.log(day);

const dailyPuzzles = [
  {
    level: "beginner",
    data: beginner[day % beginner.length],
  },
  {
    level: "intermediate",
    data: intermediate[day % intermediate.length],
  },
  {
    level: "advanced",
    data: advanced[day % advanced.length],
  },
];

let markdown = `<!-- prettier-ignore-start -->\n\nDaily puzzles\n\n`;

dailyPuzzles.forEach((puzzle) => {
  markdown += `Level: ${puzzle.level}\n\n`;
  markdown += `https://sharechess.github.io/${puzzle.data.HASH}\n\n`;
  markdown += `https://lichess.org/training/${puzzle.data.ID}\n\n`;
  markdown += "---\n\n";
});

markdown += "# Solutions\n";

dailyPuzzles.forEach((puzzle) => {
  const moves =
    puzzle.data.SIDE === "b"
      ? ["..", ...puzzle.data.SAN.slice(1)]
      : puzzle.data.SAN.slice(1);

  const continuation = chunk_(2, moves)
    .map((move, i) => `${i + 1}. ${move.join(" ")}`)
    .join(" ");

  markdown += `
---

**${puzzle.level.toUpperCase()}** puzzle:

* Move: >!\`${puzzle.data.SAN[1]}\`!<
* Continuation: >!\`${continuation}\`!<
* Motifs:
${puzzle.data.TAG.map(
  (tag) =>
    `    * >!**${puzzleThemes[tag as Tag].name}** - ${
      puzzleThemes[tag as Tag].description
    }!<`
).join("\n")}
  `;
});

markdown += "\n<!-- prettier-ignore-end -->";

fs.writeFileSync("temp/daily-puzzles.md", markdown);
