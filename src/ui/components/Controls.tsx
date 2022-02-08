import { Component } from "solid-js";
import { Handlers } from "../../types";
import "./Controls.css";

const Controls: Component<{ handlers: Handlers }> = (props) => {
  return (
    <div class="controls">
      <button
        class="controls__button"
        onClick={props.handlers.first}
        title="FIRST"
      >
        <i class="las la-angle-double-left"></i>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.prev}
        title="PREV"
      >
        <i class="las la-angle-left"></i>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.togglePlay}
        title="PLAY"
      >
        <i class="las la-play"></i>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.next}
        title="NEXT"
      >
        <i class="las la-angle-right"></i>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.last}
        title="LAST"
      >
        <i class="las la-angle-double-right"></i>
      </button>
      {/* <button
        class="controls__button"
        onClick={props.handlers.flip}
        title="FLIP"
      >
        <i class="las la-sync"></i>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.toggleBorder}
        title="BORDER"
      >
        <i class="las la-expand"></i>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.toggleExtraInfo}
        title="EXTRA INFO"
      >
        <i class="las la-info"></i>
      </button> */}
    </div>
  );
};

export default Controls;
