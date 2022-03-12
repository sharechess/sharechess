import { Component, Show } from "solid-js";
import { Handlers } from "../../types";
import "./Controls.css";

import { state } from "../../state";

const Controls: Component<{ handlers: Handlers }> = (props) => {
  return (
    <div class="controls">
      <button
        class="controls__button controls__button--first"
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
        title={state.playing ? "PAUSE" : "PLAY"}
      >
        <Show when={!state.playing} fallback={<i class="las la-pause"></i>}>
          <i class="las la-play"></i>
        </Show>
      </button>
      <button
        class="controls__button"
        onClick={props.handlers.next}
        title="NEXT"
      >
        <i class="las la-angle-right"></i>
      </button>
      <button
        class="controls__button controls__button--last"
        onClick={props.handlers.last}
        title="LAST"
      >
        <i class="las la-angle-double-right"></i>
      </button>
      <button onClick={props.handlers.flip} title="FLIP" class="flip__button">
        <i
          classList={{
            rotated: state.boardConfig.flipped,
            las: true,
            "la-sync": true,
            rotatable: true,
          }}
        ></i>
      </button>
    </div>
  );
};

export default Controls;
