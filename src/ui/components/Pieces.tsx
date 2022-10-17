import { Component, For, Show } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import piecesStyles, {
  PiecesStyle,
  piecesStylesGrouped,
} from "../../board/styles-pieces/piecesStyles";
import { state, setState } from "../../state";

import "./Pieces.css";
import PieceCard from "./PieceCard";

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
      <Show when={!state.showFavoritePieces}>
        <For
          each={Object.entries(piecesStylesGrouped).filter(
            ([key]) => key !== "hidden"
          )}
        >
          {([key, items]) => (
            <div class="collection_cards">
              <h2 class="collection__title">{key}</h2>
              <For each={items}>
                {(key) => (
                  <PieceCard
                    handlers={props.handlers}
                    item={{
                      key: key as PiecesStyle,
                      img: `/pieces/${key}/nw.svg`,
                    }}
                  />
                )}
              </For>
            </div>
          )}
        </For>
      </Show>
      <Show when={state.showFavoritePieces}>
        <div class="collection_cards">
          <For
            each={piecesStyles.filter((key) => state.favoritePieces.has(key))}
          >
            {(key) => (
              <PieceCard
                handlers={props.handlers}
                item={{ key, img: `/pieces/${key}/nw.svg` }}
              />
            )}
          </For>
        </div>
      </Show>
    </Scrollable>
  );
};

export default Pieces;
