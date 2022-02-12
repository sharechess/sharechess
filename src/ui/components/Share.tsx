import { Component, createSignal } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import { state, setState } from "../../state";
import "./Share.css";

const Share: Component<{ handlers: Handlers }> = (props) => {
  const [copyId, setCopyId] = createSignal("");

  const blinkCopy = (id: string) => {
    setCopyId(id);
    setTimeout(() => setCopyId(""), 1000);
  };

  return (
    <Scrollable class="share">
      <div className="share__view">
        <h2 class="header--first">Board options</h2>
        <button
          class="controls__button controls__button--first"
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
          <i class="las la-info-circle"></i>
        </button>
        <button
          class="controls__button"
          onClick={props.handlers.toggleExtraInfo}
          title="INCLUDE HEADER"
        >
          <i class="las la-heading"></i>
        </button>
        <button
          class="controls__button controls__button--last"
          onClick={props.handlers.toggleExtraInfo}
          title="ANONYMOUS"
        >
          <i class="las la-user-secret"></i>
        </button>
      </div>
      <div className="share__fen">
        <h2>Current position</h2>
        <input
          type="text"
          name="current_fen"
          readOnly
          placeholder="Current FEN..."
          value={state.fen}
        />

        <div class="double">
          <button
            class="share__btn share__btn--left"
            onClick={() => {
              navigator.clipboard.writeText(state.fen);
              blinkCopy("fen");
            }}
          >
            {copyId() === "fen" ? "Copied!" : "Copy FEN"}
          </button>
          <button
            class="share__btn share__btn--right"
            onClick={() => {
              const link = `${location.origin}/#v1/fen/${encodeURI(state.fen)}`;
              navigator.clipboard.writeText(link);
              blinkCopy("fen-link");
            }}
          >
            {copyId() === "fen-link" ? "Copied!" : "Copy link"}
          </button>
        </div>
        <h3>Image</h3>
        <button
          classList={{
            share__size: true,
            "share__size--first": true,
            "share__size--active": state.game.animationSize === "XS",
          }}
          onClick={() => setState("game", "animationSize", "XS")}
        >
          XS
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.animationSize === "S",
          }}
          onClick={() => setState("game", "animationSize", "S")}
        >
          S
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.animationSize === "M",
          }}
          onClick={() => setState("game", "animationSize", "M")}
        >
          M
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.animationSize === "L",
          }}
          onClick={() => setState("game", "animationSize", "L")}
        >
          L
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--last": true,
            "share__size--active": state.game.animationSize === "XL",
          }}
          onClick={() => setState("game", "animationSize", "XL")}
        >
          XL
        </button>
        <button
          class="share__btn"
          onClick={() => props.handlers.downloadImage()}
        >
          Save as image
        </button>
      </div>
      <div class="share__pgn">
        <h2>Game</h2>
        <div class="double">
          <button class="share__btn">Copy PGN</button>
          <button class="share__btn">Copy link</button>
        </div>
        <div class="double">
          <button class="share__btn">Export PGN</button>
          <button class="share__btn">Copy markdown</button>
        </div>
      </div>
      <div class="share__animation">
        <h3>Animation</h3>
        <button
          classList={{
            share__size: true,
            "share__size--first": true,
            "share__size--active": state.game.picSize === "XS",
          }}
          onClick={() => setState("game", "picSize", "XS")}
        >
          XS
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.picSize === "S",
          }}
          onClick={() => setState("game", "picSize", "S")}
        >
          S
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.picSize === "M",
          }}
          onClick={() => setState("game", "picSize", "M")}
        >
          M
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.game.picSize === "L",
          }}
          onClick={() => setState("game", "picSize", "L")}
        >
          L
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--last": true,
            "share__size--active": state.game.picSize === "XL",
          }}
          onClick={() => setState("game", "picSize", "XL")}
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

        <button class="share__create-animation">Save animation</button>
      </div>
    </Scrollable>
  );
};

export default Share;
