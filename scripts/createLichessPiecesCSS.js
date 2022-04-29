const fs = require("fs");
const pieces = require("./utils/pieces");

const files = fs.readdirSync("_release_assets/encoded_pieces");

for (const file of files) {
  const [name] = file.split(".");

  const data = JSON.parse(
    fs.readFileSync(`_release_assets/encoded_pieces/${file}`, {
      encoding: "utf8",
    })
  );

  const css = data
    .map(([key, dataURL]) => {
      const [piece, color] = key.split("");

      return `.is2d .${pieces.names[piece]}.${pieces.colors[color]} {background-image:url('${dataURL}')}`;
    })
    .join("\n");

  fs.writeFileSync(`_release_assets/lichess_css/${name}.css`, css);

  const cssExternal = data
    .map(([key]) => {
      const [piece, color] = key.split("");

      return `.is2d .${pieces.names[piece]}.${
        pieces.colors[color]
      } {background-image:url('/assets/piece/${name}/${color}${piece.toUpperCase()}.svg')}`;
    })
    .join("\n");

  fs.writeFileSync(
    `_release_assets/lichess_css/${name}.external.css`,
    cssExternal
  );
}
