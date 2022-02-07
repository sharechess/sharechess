import { Component } from "solid-js";
import { Handlers } from "../../types";

const Controls: Component<{ handlers: Handlers }> = (props) => {
  return (
    <div class="controls">
      <button class="controls__button" onClick={props.handlers.first}>
        FIRST
      </button>
      <button class="controls__button" onClick={props.handlers.prev}>
        PREV
      </button>
      <button class="controls__button" onClick={props.handlers.togglePlay}>
        PLAY/PAUSE
      </button>
      <button class="controls__button" onClick={props.handlers.next}>
        NEXT
      </button>
      <button class="controls__button" onClick={props.handlers.last}>
        LAST
      </button>
      <button class="controls__button" onClick={props.handlers.flip}>
        FLIP
      </button>
      <button class="controls__button" onClick={props.handlers.toggleBorder}>
        TOGGLE BORDER
      </button>
      <button class="controls__button" onClick={props.handlers.toggleExtraInfo}>
        TOGGLE EXTRA INFO
      </button>
    </div>
  );
};

export default Controls;
