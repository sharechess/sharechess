import { Component, For } from "solid-js";
import { Handlers, PiecesStyle } from "../../types";
import Scrollable from "./reusable/Scrollable";
import piecesSets from "../../board/styles-pieces";
import { state, setState } from "../../state";
import "./Pieces.css";

const pieces = Object.entries(piecesSets).map(([key, data]) => ({
  key,
  img: data.nw,
})) as { key: PiecesStyle; img: string }[];

const Pieces: Component<{ handlers: Handlers }> = (props) => {
  return (
    <Scrollable class="pieces">
      {
        <For each={pieces}>
          {(item) => (
            <img
              class={
                "pieces__ico" +
                (state.board.piecesStyle === item.key
                  ? " pieces__ico--active"
                  : "")
              }
              onClick={() => {
                setState("board", "piecesStyle", item.key);
                props.handlers.changePiecesStyle(item.key);
              }}
              src={item.img}
              title={item.key}
              draggable={false}
            />
          )}
        </For>
      }
    </Scrollable>
  );
};

export default Pieces;

// import { Component, For, createSignal } from "solid-js";
// import { Handlers, StyleCategory, BoardStyle, Style } from "../../types";
// import Scrollable from "./reusable/Scrollable";
// import "./Boards.css";
// import styles from "../../board/styles-board";
// import Board from "../../board/Board";
// import { state, setState } from "../../state";

// type BoardPreview = {
//   key: keyof typeof styles;
//   name: string;
//   category: StyleCategory;
//   img: string;
// };

// const prepareBoards = async () => {
//   const boards = [];

//   const board = new Board({
//     size: 72,
//     tiles: 2,
//     showBorder: true,
//     showExtraInfo: false,
//   });

//   for (const [key, style] of Object.entries(styles) as [BoardStyle, Style][]) {
//     await board.updateConfig({ boardStyle: key });
//     await board.frame(null, {});
//     board.render();
//     boards.push({
//       key,
//       name: style.name,
//       category: style.category,
//       img: board.toImgUrl(),
//     } as BoardPreview);
//   }

//   return boards;
// };

// const Boards: Component<{ handlers: Handlers }> = (props) => {
//   const [boards, setBoards] = createSignal<BoardPreview[]>([]);

//   prepareBoards().then((data) => setBoards(data));

//   return (
//     <Scrollable class="boards">
//       <For each={boards()}>
//         {(board) => {
//           return (
//             <img
//               class={
//                 "boards__ico" +
//                 (state.board.boardStyle === board.key
//                   ? " boards__ico--active"
//                   : "")
//               }
//               onClick={() => setState("board", "boardStyle", board.key)}
//               src={board.img}
//               title={board.name}
//             />
//           );
//         }}
//       </For>
//     </Scrollable>
//   );
// };

// export default Boards;
