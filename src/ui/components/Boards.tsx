import { Component, For, createSignal } from "solid-js";
import { Handlers, StyleCategory, BoardStyle, Style } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Boards.css";
import boardStyles from "../../board/styles-board/boardStyles";
import Board from "../../board/Board";
import { state, setState } from "../../state";

type BoardPreview = {
  key: keyof typeof boardStyles;
  name: string;
  category: StyleCategory;
  img: string;
};

const prepareBoards = async () => {
  const boards = [];

  const board = new Board({
    size: 144,
    tiles: 2,
    showBorder: true,
    showExtraInfo: false,
  });

  board.setBorderScale(3);

  for (const [key, style] of Object.entries(boardStyles) as [
    BoardStyle,
    Style
  ][]) {
    let img: string;

    if (style.category !== "custom") {
      img = `/boards/${key}_ico.png`;
    } else {
      await board.updateConfig({ boardStyle: key });
      await board.frame(null);
      board.render();
      img = board.toImgUrl();
    }

    boards.push({
      key,
      img,
    } as BoardPreview);
  }

  return boards;
};

const Boards: Component<{ handlers: Handlers; class?: string }> = (props) => {
  const [boards, setBoards] = createSignal<BoardPreview[]>([]);

  prepareBoards().then((data) => setBoards(data));

  return (
    <Scrollable class={"boards" + (props.class ? ` ${props.class}` : "")}>
      <For each={boards()}>
        {(board) => {
          return (
            <div
              class={
                "boards__ico" +
                (state.boardConfig.boardStyle === board.key
                  ? " boards__ico--active"
                  : "")
              }
              onClick={() => {
                setState("boardConfig", "boardStyle", board.key);
                props.handlers.changeBoardStyle(board.key);
              }}
              style={{ "background-image": `url(${board.img})` }}
              title={board.key}
              draggable={false}
            />
          );
        }}
      </For>
    </Scrollable>
  );
};

export default Boards;
