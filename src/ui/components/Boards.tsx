import { Component, For, Show } from "solid-js";
import { Handlers, BoardStyle } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Boards.css";
import boardNames, {
  boardNamesGrouped,
} from "../../board/styles-board/boardStyles";
import { state, setState } from "../../state";
import BoardCard from "./BoardCard";

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
      <Show when={!state.showFavoriteBoards}>
        <For
          each={Object.entries(boardNamesGrouped).filter(
            ([key]) => key !== "hidden"
          )}
        >
          {([key, items]) => (
            <div class="collection_cards">
              <h2 class="collection__title">{key}</h2>
              <For each={items}>
                {(key) => (
                  <BoardCard
                    handlers={props.handlers}
                    item={{
                      key: key as BoardStyle,
                      img: `/boards/ico/${key}_ico.png`,
                    }}
                  />
                )}
              </For>
            </div>
          )}
        </For>
      </Show>
      <Show when={state.showFavoriteBoards}>
        <div class="collection_cards">
          <For each={boardNames.filter((key) => state.favoriteBoards.has(key))}>
            {(key) => (
              <BoardCard
                handlers={props.handlers}
                item={{
                  key: key as BoardStyle,
                  img: `/boards/ico/${key}_ico.png`,
                }}
              />
            )}
          </For>
        </div>
      </Show>
    </Scrollable>
  );
};

export default Boards;
