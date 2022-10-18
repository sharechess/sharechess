import { Component, Show } from "solid-js";
import { Handlers, BoardStyle } from "../../types";
import "./Boards.css";
import { state, setState } from "../../state";

const BoardCard: Component<{
  item: {
    key: BoardStyle;
    img: string;
  };
  handlers: Handlers;
}> = (props) => {
  return (
    <div class="collection__card">
      <div
        class={
          "collection__ico boards__ico" +
          (state.boardConfig.boardStyle === props.item.key
            ? " collection__ico--active"
            : "")
        }
        onClick={() => {
          setState("boardConfig", "boardStyle", props.item.key);
          props.handlers.changeBoardStyle(props.item.key);
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
            props.handlers.toggleFavoriteBoard(props.item.key);
          }}
          classList={{
            collection__action: true,
            collection__favorite: true,
            "collection__favorite--active": state.favoriteBoards.has(
              props.item.key
            ),
          }}
          title="Add to favorites"
        />
        <Show when={!state.mobile}>
          <a
            href={`stylus/boards/${props.item.key}.user.css`}
            target="_blank"
            class="collection__action collection__stylus"
            title="Install via Stylus"
          />
          <a
            href={`download/boards/${props.item.key}.zip`}
            target="_blank"
            class="collection__action collection__download"
            title="Download"
          />
        </Show>
      </div>
    </div>
  );
};

export default BoardCard;
