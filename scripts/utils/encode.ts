import fs from "fs";
import mime from "mime";

const encode = (filePath: string) => {
  const data = fs.readFileSync(filePath).toString("base64");

  const type = mime.getType(filePath);

  return `data:${type};base64,${data}`;
};

export default encode;
