import { Component, For, createSignal } from "solid-js";
import { Handlers, StyleCategory } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Boards.css";
import styles from "../../board/styles-board";
import Board from "../../board/Board";

type BoardPreview = {
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

  for (const style of Object.values(styles)) {
    await board.updateConfig({ boardStyle: style });
    await board.frame(null, {});
    board.render();
    boards.push({
      name: style.name,
      category: style.category,
      img: board.toImgUrl(),
    });
  }

  return boards;
};

const Boards: Component<{ handlers: Handlers }> = (props) => {
  const [boards, setBoards] = createSignal<BoardPreview[]>([]);

  prepareBoards().then((data) => setBoards(data));

  return (
    <Scrollable class="boards">
      <For each={boards()}>
        {(board) => {
          return <img src={board.img} title={board.name} />;
        }}
      </For>
    </Scrollable>
  );
};

export default Boards;
