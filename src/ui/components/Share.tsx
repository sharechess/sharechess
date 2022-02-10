import { Component } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import { state, setState } from "../../state";
import "./Share.css";

const Share: Component<{ handlers: Handlers }> = (props) => {
  return (
    <Scrollable class="share">
      <div className="share__view">
        <button
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
        </button>
        <button
          class="controls__button"
          onClick={props.handlers.toggleExtraInfo}
          title="INCLUDE HEADER"
        >
          <i class="las la-heading"></i>
        </button>
      </div>
      <div className="share__fen">
        <h2>Current position</h2>
        <input
          type="text"
          name="current_fen"
          readOnly
          placeholder="Current FEN..."
        />

        <button class="share__btn">Copy FEN</button>
        <button class="share__btn">Save as image</button>
        <button class="share__btn">Copy link</button>
      </div>
      <div class="share__pgn">
        <h2>Game</h2>
        <button class="share__btn">Copy PGN</button>
        <button class="share__btn">Export PGN</button>
        <button class="share__btn">Copy link</button>
      </div>
      <div class="share__animation">
        <h2>Animation</h2>
        <button
          classList={{
            share__size: true,
            "share__size--first": true,
            "share__size--active": state.game.size === "XS",
          }}
          onClick={() => setState("game", "size", "XS")}
        >
          XS
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.size === "S",
          }}
          onClick={() => setState("game", "size", "S")}
        >
          S
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.size === "M",
          }}
          onClick={() => setState("game", "size", "M")}
        >
          M
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.size === "L",
          }}
          onClick={() => setState("game", "size", "L")}
        >
          L
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--last": true,
            "share__size--active": state.game.size === "XL",
          }}
          onClick={() => setState("game", "size", "XL")}
        >
          XL
        </button>

        <button
          classList={{
            share__format: true,
            "share__format--first": true,
            "share__format--active": state.game.format === "GIF",
          }}
          onClick={() => setState("game", "format", "GIF")}
        >
          GIF
        </button>
        <button
          classList={{
            share__format: true,
            "share__format--active": state.game.format === "MP4",
          }}
          onClick={() => setState("game", "format", "MP4")}
        >
          MP4
        </button>
        <button
          classList={{
            share__format: true,
            "share__format--last": true,
            "share__format--active": state.game.format === "WebM",
          }}
          onClick={() => setState("game", "format", "WebM")}
        >
          WebM
        </button>

        <button class="share__create-animation">GENERATE</button>
      </div>
    </Scrollable>
  );
};

export default Share;
