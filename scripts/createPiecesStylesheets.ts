import fs from "fs";
import prettier from "prettier";

import { PiecesStyle } from "./../src/board/styles-pieces/piecesStyles";
import encode from "./utils/encode";
import credits from "../PIECES_CREDITS.json";

import LichessPiecesCSS from "./style-templates/LichessPiecesCSS";
import ChesscomPiecesCSS from "./style-templates/ChesscomPiecesCSS";
import OpeningTreePiecesCSS from "./style-templates/OpeningTreePiecesCSS";
import ChessGamesPiecesCSS from "./style-templates/ChessGamesPiecesCSS";

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
    name: "openingtree.com",
    template: OpeningTreePiecesCSS,
  },
  {
    name: "chessgames.com",
    template: ChessGamesPiecesCSS,
  },
];

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/stylus/pieces";

const Header = (setName: string, content: string, shadows: boolean = false) => {
  const baseName = setName.split("_")[0] as keyof typeof credits;
  const isOriginal = setName === baseName;
  const credit = credits[baseName] ?? {
    author: { name: "unknown" },
    license: { name: "unknown" },
  };

  const namePretty =
    setName
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ") + (shadows ? " Shadows" : "");

  return `
    /* ==UserStyle==
    @name           ${namePretty} piece set
    @namespace      sharechess.github.io
    @version        1.2.0
    @description    Piece set for ${domains.map((d) => d.name).join(", ")}
    @author         ${credit.author.name} ${
    isOriginal ? "" : "(color variant by caderek)"
  }
    @license        ${credit.license.name}
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

    const stylesheet = prettier.format(Header(name, content), {
      parser: "css",
    });
    const stylesheetShadows = prettier.format(
      Header(name, contentShadows, true),
      { parser: "css" }
    );

    fs.writeFileSync(`${OUT_DIR}/${name}.user.css`, stylesheet);
    fs.writeFileSync(`${OUT_DIR}/${name}_shadows.user.css`, stylesheetShadows);
  }
};

createUserStyles();
