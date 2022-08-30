import { Style } from "../../src/types";
import { hexToRGBA, rgb2hsl } from "../utils/colors";

const Chess24BoardCSS = (cssVars: { board: string }, style: Style) => {
  const [r, g, b] = hexToRGBA(style.moveIndicator.color);
  const [h, s, l] = rgb2hsl(r, g, b);

  return `
    @-moz-document domain("chess24.com") {
      .chess-board .svg {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
        opacity: 1 !important;
        border-radius: 2.8%;
      }
        
      .chess-board .svg > * {
        opacity: 0.6 !important;
        filter:
          brightness(${l})
          sepia(1)
          hue-rotate(${h}deg)
          saturate(${Math.round(s * 100)});
      }

      [data-cy='chessboard'] > div:first-child > div:first-child > div:first-child > div > svg {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
      }

      [data-cy='chessboard'] > div:first-child > div:first-child > div:first-child > div > svg * {
          display: none;
      }

      [data-cy='chessboard'] > div:first-child > div:first-child > div:first-child > div:nth-child(2),
      [data-cy='chessboard'] > div:first-child > div:first-child > div:first-child > div:nth-child(3) {
          background-color: ${style.moveIndicator.color} !important;
          opacity: 1 !important;
      }
    }
  `;
};

export default Chess24BoardCSS;
