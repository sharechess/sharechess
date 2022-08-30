import fs from "fs";
import { execSync } from "child_process";

const BOARDS_FOLDER = "public/boards";
const OUT_DIR = "public/download/boards";

const generateREADME = (name: string) => {
  const namePretty = name
    .split(/[-_]/)
    .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
    .join(" ");

  const credits = {
    author: { name: "caderek", link: "https://github.com/caderek" },
    license: {
      name: "CC0 1.0",
      link: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
  };

  const title = `${namePretty} chessboard\n`;

  const author =
    "Author: " +
    credits.author.name +
    (credits.author.link ? ` (${credits.author.link})` : "");

  const license =
    "License: " +
    credits.license.name +
    (credits.license.link ? ` (${credits.license.link})` : "");

  const source = "Source: https://sharechess.github.io";

  return [title, author, license, source].filter((x) => x !== null).join("\n");
};

const cmd = (name: string) =>
  `zip -9 -j -r ${OUT_DIR}/${name}.zip ${BOARDS_FOLDER}/${name}`;

const main = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const sets = fs.readdirSync(BOARDS_FOLDER).filter((name) => name !== "ico");

  for (const name of sets) {
    console.log(`Generating ZIP for pieces: ${name}...`);
    const readme = generateREADME(name);
    fs.writeFileSync(`${BOARDS_FOLDER}/${name}/README.txt`, readme);
    execSync(cmd(name));
  }
};

main();
