import fs from "fs";
import { execSync } from "child_process";

type CreditsEntry = { name: string; link: string | null };

type Credits = {
  [key: string]: {
    files?: CreditsEntry;
    author: CreditsEntry;
    license: CreditsEntry;
    source?: CreditsEntry;
  };
};

const CREDITS = require("../PIECES_CREDITS.json") as Credits;

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/download/pieces";

const generateREADME = (name: string) => {
  const namePretty = name
    .split(/[-_]/)
    .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
    .join(" ");

  const [baseName] = name.split("_");

  const credits = CREDITS[baseName] ?? {
    author: { name: "unknown", link: null },
    license: { name: "unknown", link: null },
  };

  const isOriginal = name === baseName;

  const title = `${namePretty} piece set\n`;

  const author =
    (isOriginal ? "Author: " : "Original author: ") +
    credits.author.name +
    (credits.author.link ? ` (${credits.author.link})` : "");

  const editor = isOriginal
    ? null
    : "Color variant by: caderek (https://github.com/caderek)";

  const license =
    "License: " +
    credits.license.name +
    (credits.license.link ? ` (${credits.license.link})` : "");

  const source = "Source: https://sharechess.github.io";

  return [title, author, editor, license, source]
    .filter((x) => x !== null)
    .join("\n");
};

const cmd = (name: string) =>
  `zip -9 -j -r ${OUT_DIR}/${name}.zip ${PIECES_FOLDER}/${name}`;

const main = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const sets = fs.readdirSync(PIECES_FOLDER);

  for (const name of sets) {
    console.log(`Generating ZIP for pieces: ${name}...`);
    const readme = generateREADME(name);
    fs.writeFileSync(`${PIECES_FOLDER}/${name}/README.txt`, readme);
    execSync(cmd(name));
  }
};

main();
