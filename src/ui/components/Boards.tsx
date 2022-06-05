import { Component, For, Show } from "solid-js";
import { Handlers, BoardStyle } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Boards.css";
import boardStyles from "../../board/styles-board";
import { state, setState } from "../../state";

const boards = Object.keys(boardStyles).map((key) => ({
  key,
  img: `/boards/ico/${key}_ico.png`,
})) as { key: BoardStyle; img: string }[];

const Boards: Component<{ handlers: Handlers; class?: string }> = (props) => {
  return (
    <Scrollable class={"collection" + (props.class ? ` ${props.class}` : "")}>
      <p class="switch">
        <button
          classList={{
            switch__btn: true,
            "switch__btn--left": true,
            "switch__btn--active": !state.showFavoriteBoards,
          }}
          onClick={() => setState("showFavoriteBoards", false)}
        >
          All
        </button>
        <button
          classList={{
            switch__btn: true,
            "switch__btn--right": true,
            "switch__btn--active": state.showFavoriteBoards,
          }}
          onClick={() => setState("showFavoriteBoards", true)}
        >
          Favorite
        </button>
      </p>
      <For
        each={
          state.showFavoriteBoards
            ? boards.filter(({ key }) => state.favoriteBoards.has(key))
            : boards
        }
      >
        {(item) => (
          <div className="collection__card">
            <div
              class={
                "collection__ico boards__ico" +
                (state.boardConfig.boardStyle === item.key
                  ? " collection__ico--active"
                  : "")
              }
              onClick={() => {
                setState("boardConfig", "boardStyle", item.key);
                props.handlers.changeBoardStyle(item.key);
              }}
              style={{ "background-image": `url(${item.img})` }}
              title={item.key as string}
              draggable={false}
            ></div>
            <div className="collection__actions">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  props.handlers.toggleFavoriteBoard(item.key);
                }}
                classList={{
                  collection__action: true,
                  collection__favorite: true,
                  "collection__favorite--active": state.favoriteBoards.has(
                    item.key
                  ),
                }}
                title="Add to favorites"
              />
              <Show when={!state.mobile}>
                <a
                  href={`stylus/boards/${item.key}.user.css`}
                  target="_blank"
                  className="collection__action collection__stylus"
                  title="Install via Stylus"
                />
                <a
                  href={`boards/${item.key}.png`}
                  target="_blank"
                  className="collection__action collection__download"
                  title="Download"
                />
              </Show>
            </div>
          </div>
        )}
      </For>
    </Scrollable>
  );
};

export default Boards;
