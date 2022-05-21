import fs from "fs";
import path from "path";
import mime from "mime";

const ACCEPTED_FORMATS = new Set([".svg", ".pgn", ".jpg"]);

const encode = (filePath: string) => {
  const stat = fs.lstatSync(filePath);
  if (stat.isDirectory()) {
    throw new Error(`Unexpected directory: ${filePath}`);
  }

  const ext = path.parse(filePath).ext;

  if (!ACCEPTED_FORMATS.has(ext)) {
    throw new Error(`Unexpected file format: ${filePath}`);
  }

  const type = mime.getType(filePath);
  const data = fs.readFileSync(filePath).toString("base64");

  return `data:${type};base64,${data}`;
};

export default encode;
