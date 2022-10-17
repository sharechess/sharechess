import fs from "fs";
import prettier from "prettier";

import encode from "./utils/encode";

import LichessPiecesCSS from "./style-templates/LichessPiecesCSS";
import ChesscomPiecesCSS from "./style-templates/ChesscomPiecesCSS";
import OpeningTreePiecesCSS from "./style-templates/OpeningTreePiecesCSS";
import ChessGamesPiecesCSS from "./style-templates/ChessGamesPiecesCSS";
import Chess24PiecesCSS from "./style-templates/Chess24PiecesCSS";
import ChesstempoPiecesCSS from "./style-templates/ChesstempoPiecesCSS";
import ListudyPiecesCSS from "./style-templates/ListudyPiecesCSS";
import ChesspeckerPiecesCSS from "./style-templates/ChesspeckerPiecesCSS";
import ChessbasePiecesCSS from "./style-templates/ChessbasePiecesCSS";
import WikipediaPiecesCSS from "./style-templates/WikipediaPiecesCSS";
import AimchessPiecesCSS from "./style-templates/AimchessPiecesCSS";
import ChessablePiecesCSS from "./style-templates/ChessablePiecesCSS";

type CreditsEntry = { name: string; link: string | null };

type Credits = {
  [key: string]: {
    files?: CreditsEntry;
    author: CreditsEntry;
    license: CreditsEntry;
    source?: CreditsEntry;
    colors?: { [key: string]: CreditsEntry };
  };
};

const credits = require("../PIECES_CREDITS.json") as Credits;

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
  {
    name: "chess24.com",
    template: Chess24PiecesCSS,
  },
  {
    name: "chesstempo.com",
    template: ChesstempoPiecesCSS,
  },
  {
    name: "listudy.org",
    template: ListudyPiecesCSS,
  },
  {
    name: "chesspecker.com",
    template: ChesspeckerPiecesCSS,
  },
  {
    name: "chessbase.com",
    template: ChessbasePiecesCSS,
  },
  {
    name: "wikipedia.org",
    template: WikipediaPiecesCSS,
  },
  {
    name: "aimchess.com",
    template: AimchessPiecesCSS,
  },
  {
    name: "chessable.com",
    template: ChessablePiecesCSS,
  },
];

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/stylus/pieces";

const Header = (setName: string, content: string, shadows: boolean = false) => {
  const [baseName, colorName] = setName.split("_");
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

  let editor: string | null = null;

  if (!isOriginal) {
    editor = credit?.colors?.[colorName]?.name ?? "caderek";
  }

  return `
    /* ==UserStyle==
    @name           Custom pieces
    @namespace      sharechess.github.io
    @version        1.5.0
    @description    ${namePretty} piece set for ${domains
    .map((d) => d.name)
    .join(", ")}
    @author         ${credit.author.name} ${
    isOriginal ? "" : `(color variant by ${editor})`
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
