import fs from "fs";
import prettier from "prettier";

import encode from "./utils/encode";

import LichessPiecesCSS from "./style-templates/LichessPiecesCSS";
import ChesscomPiecesCSS from "./style-templates/ChesscomPiecesCSS";
import ChessablePiecesCSS from "./style-templates/ChessablePiecesCSS";

const domains = [
  {
    name: "lichess.org",
    template: LichessPiecesCSS,
  },
  {
    name: "chess.com",
    template: ChesscomPiecesCSS,
  },
  {
    name: "chessable.com",
    template: ChessablePiecesCSS,
  },
];

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/stylus/pieces";

const Header = (setName: string, content: string) => {
  return `
    /* ==UserStyle==
    @name           ${setName} piece set
    @namespace      sharechess.github.io
    @version        1.0.0
    @description    Piece set for ${domains.map((d) => d.name).join(", ")}
    @author         sharechess.github.io
    ==/UserStyle== */

    ${content}
  `;
};

const createUserStyles = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const sets = fs.readdirSync(PIECES_FOLDER);

  for (const name of sets) {
    console.log(`Generating stylesheets for pieces: ${name}...`);

    const files = fs
      .readdirSync(`${PIECES_FOLDER}/${name}`)
      .filter((file) => file !== "README.txt");

    const namePretty = name
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ");

    const encodedPieces = files.map((fileName) => {
      const key = fileName.split(".")[0];
      const dataURL = encode(`${PIECES_FOLDER}/${name}/${fileName}`);

      return { key, cssVar: `--sharechess-${key}-url`, val: `url(${dataURL})` };
    });

    const vars = `
    @-moz-document ${domains.map((d) => `domain(${d.name})`).join(", ")} {
      :root {
        ${encodedPieces.map((p) => `${p.cssVar}: ${p.val};`).join("\n")}
      }
    }
    `;

    const domainStylesheets = domains
      .map((d) => d.template(encodedPieces))
      .join("\n");

    const domainStylesheetsShadows = domains
      .map((d) => d.template(encodedPieces, true))
      .join("\n");

    const content = `
      ${vars}
      ${domainStylesheets}
    `;

    const contentShadows = `
      ${vars}
      ${domainStylesheetsShadows}
    `;

    const stylesheet = prettier.format(Header(namePretty, content), {
      parser: "css",
    });
    const stylesheetShadows = prettier.format(
      Header(`${namePretty} Shadows`, contentShadows),
      { parser: "css" }
    );

    fs.writeFileSync(`${OUT_DIR}/${name}.user.css`, stylesheet);
    fs.writeFileSync(`${OUT_DIR}/${name}_shadows.user.css`, stylesheetShadows);
  }
};

createUserStyles();
