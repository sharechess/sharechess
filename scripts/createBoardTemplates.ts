import fs from "fs";
import boardStyles from "../src/board/styles-board/templates";
import { StyleCategory } from "../src/types";

const OUT_DIR = "public/board-templates";
const TS_OUT_FILE = "src/board/styles-board/boardStyles.ts";

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

Object.entries(boardStyles).forEach(([name, style]) => {
  const json = JSON.stringify(style);

  fs.writeFileSync(`${OUT_DIR}/${name}.json`, json);
});

const boardNames = Object.keys(boardStyles);

const boardNamesGrouped: { [category: string]: string[] } = {};

for (const [key, data] of Object.entries(boardStyles)) {
  if (!boardNamesGrouped[data.category]) {
    boardNamesGrouped[data.category] = [key];
  } else {
    boardNamesGrouped[data.category].push(key);
  }
}

const boardNamesFile = `const boardNames = ${JSON.stringify(
  boardNames,
  null,
  2
)}

const boardNamesGrouped = ${JSON.stringify(boardNamesGrouped, null, 2)}

export { boardNamesGrouped }
export default boardNames`;

fs.writeFileSync(TS_OUT_FILE, boardNamesFile);
