import { Component, For, Show } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import piecesSets, {
  PiecesStyle,
} from "../../board/styles-pieces/piecesStyles";
import { state, setState } from "../../state";

import "./Pieces.css";

const pieces = piecesSets.map((key) => ({
  key,
  img: `/pieces/${key}/nw.svg`,
})) as { key: PiecesStyle; img: string }[];

const Pieces: Component<{ handlers: Handlers; class?: string }> = (props) => {
  return (
    <Scrollable class={"collection" + (props.class ? ` ${props.class}` : "")}>
      <p class="switch">
        <button
          classList={{
            switch__btn: true,
            "switch__btn--left": true,
            "switch__btn--active": !state.showFavoritePieces,
          }}
          onClick={() => setState("showFavoritePieces", false)}
        >
          All
        </button>
        <button
          classList={{
            switch__btn: true,
            "switch__btn--right": true,
            "switch__btn--active": state.showFavoritePieces,
          }}
          onClick={() => setState("showFavoritePieces", true)}
        >
          Favorite
        </button>
      </p>
      <For
        each={
          state.showFavoritePieces
            ? pieces.filter(({ key }) => state.favoritePieces.has(key))
            : pieces
        }
      >
        {(item) => (
          <div className="collection__card">
            <div
              class={
                "collection__ico" +
                (state.boardConfig.piecesStyle === item.key
                  ? " collection__ico--active"
                  : "")
              }
              onClick={() => {
                setState("boardConfig", "piecesStyle", item.key);
                props.handlers.changePiecesStyle(item.key);
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
                  props.handlers.toggleFavoritePieces(item.key);
                }}
                classList={{
                  collection__action: true,
                  collection__favorite: true,
                  "collection__favorite--active": state.favoritePieces.has(
                    item.key
                  ),
                }}
                title="Add to favorites"
              />
              <Show when={!state.mobile}>
                <a
                  href={`stylus/pieces/${item.key}${
                    state.boardConfig.showShadows ? "_shadows" : ""
                  }.user.css`}
                  target="_blank"
                  className="collection__action collection__stylus"
                  title="Install via Stylus"
                />
                <a
                  href={`download/pieces/${item.key}.zip`}
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

export default Pieces;
