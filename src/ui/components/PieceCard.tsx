import { Component, Show } from "solid-js";
import { Handlers } from "../../types";
import { PiecesStyle } from "../../board/styles-pieces/piecesStyles";
import { state, setState } from "../../state";

import "./Pieces.css";

const PieceCard: Component<{
  item: {
    key: PiecesStyle;
    img: string;
  };
  handlers: Handlers;
}> = (props) => {
  return (
    <div class="collection__card">
      <div
        class={
          "collection__ico" +
          (state.boardConfig.piecesStyle === props.item.key
            ? " collection__ico--active"
            : "")
        }
        onClick={() => {
          setState("boardConfig", "piecesStyle", props.item.key);
          props.handlers.changePiecesStyle(props.item.key);
        }}
        style={{ "background-image": `url(${props.item.img})` }}
        title={props.item.key as string}
        draggable={false}
      ></div>
      <div class="collection__actions">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.handlers.toggleFavoritePieces(props.item.key);
          }}
          classList={{
            collection__action: true,
            collection__favorite: true,
            "collection__favorite--active": state.favoritePieces.has(
              props.item.key
            ),
          }}
          title="Add to favorites"
        />
        <Show when={!state.mobile}>
          <a
            href={`stylus/pieces/${props.item.key}${
              state.boardConfig.showShadows ? "_shadows" : ""
            }.user.css`}
            target="_blank"
            class="collection__action collection__stylus"
            title="Install via Stylus"
          />
          <a
            href={`download/pieces/${props.item.key}.zip`}
            class="collection__action collection__download"
            title="Download"
          />
        </Show>
      </div>
    </div>
  );
};

export default PieceCard;
