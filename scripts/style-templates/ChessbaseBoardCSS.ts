import { Style } from "../../src/types";

const createSquareStyles = () => {
  const styles: string[] = [];

  for (let i = 0; i < 64; i++) {
    const column = Math.floor(i / 8);
    const row = i % 8;

    styles.push(`
      [boardalignment^='default'] > [squareindex='${i}'] {
        background-position: -${column * 100}% -${700 - row * 100}%;
      }
        
      [boardalignment^='upsideDown'] > [squareindex='${i}'] {
        background-position: -${700 - column * 100}% -${row * 100}%;
      }
    `);
  }

  return styles.join("\n");
};

const ChessbaseBoardCSS = (
  cssVars: { board: string; borderColor: string; borderImg: string | null },
  style: Style
) => {
  const arrowColor = style.moveIndicator.color.startsWith("#")
    ? style.moveIndicator.color.slice(0, 7)
    : style.moveIndicator.color;

  return `
    @-moz-document domain("chessbase.com") {

      [class^='CBChessBoard_grid'] {
        background-color: ${cssVars.borderColor} !important;
        background-image: ${cssVars.borderImg ?? "none"} !important;
        background-size: cover !important;
        --chessFieldWhite: transparent !important;
        --chessFieldBlack: transparent !important;
        --marginBackgroundColor: transparent !important;
        --arrowColor: ${arrowColor} !important;
        --squareHighlightColor: ${arrowColor} !important;
      }
        
      [class^='CBBoardMargin_marginContent'] {
        fill: ${style.coords.onBorder} !important;
      }
        
      [class^='CBSquare_container'] {
        background-image: ${cssVars.board} !important;
        background-size: 800% !important;
      }

      [class^='CBSelectPromotion_promotionContainer'] {
        background-color: ${cssVars.borderColor} !important;
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
      }
        
      [class^='CBSelectPromotion_promotionElement']:hover {
        background-color: #ffffff33 !important;
      }

      ${createSquareStyles()}
    }
  `;
};

export default ChessbaseBoardCSS;
