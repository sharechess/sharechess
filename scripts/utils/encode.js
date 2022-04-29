const fs = require("fs");
const mime = require("mime");

const encode = (filePath) => {
  const data = fs.readFileSync(filePath).toString("base64");

  const type = mime.getType(filePath);

  return `data:${type};base64,${data}`;
};

module.exports = encode;
