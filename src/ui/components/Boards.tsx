import { Component, For, createSignal } from "solid-js";
import { Handlers, StyleCategory, BoardStyle, Style } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Boards.css";
import styles from "../../board/styles-board";
import Board from "../../board/Board";
import { state, setState } from "../../state";

type BoardPreview = {
  key: keyof typeof styles;
  name: string;
  category: StyleCategory;
  img: string;
};

const prepareBoards = async () => {
  const boards = [];

  const board = new Board({
    size: 72,
    tiles: 2,
    showBorder: true,
    showExtraInfo: false,
  });

  for (const [key, style] of Object.entries(styles) as [BoardStyle, Style][]) {
    await board.updateConfig({ boardStyle: key });
    await board.frame(null, {});
    board.render();
    boards.push({
      key,
      name: style.name,
      category: style.category,
      img: board.toImgUrl(),
    } as BoardPreview);
  }

  return boards;
};

const Boards: Component<{ handlers: Handlers }> = () => {
  const [boards, setBoards] = createSignal<BoardPreview[]>([]);

  prepareBoards().then((data) => setBoards(data));

  return (
    <Scrollable class="boards">
      <For each={boards()}>
        {(board) => {
          return (
            <img
              class={
                "boards__ico" +
                (state.board.boardStyle === board.key
                  ? " boards__ico--active"
                  : "")
              }
              onClick={() => setState("board", "boardStyle", board.key)}
              src={board.img}
              title={board.name}
              draggable={false}
            />
          );
        }}
      </For>
    </Scrollable>
  );
};

export default Boards;
