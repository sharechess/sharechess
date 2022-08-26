const WikipediaBoardCSS = (cssVars: { board: string }) => {
  return `
    @-moz-document domain("wikipedia.org") {
      .chess-board > img {
        content: ${cssVars.board} !important;
      }
    }
  `;
};

export default WikipediaBoardCSS;
