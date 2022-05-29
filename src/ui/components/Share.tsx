import { Component, createSignal, Show } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import { state, setState } from "../../state";
import "./Share.css";
import download from "../../utils/download";
import link from "../../persistance/link";

const Share: Component<{ handlers: Handlers; class?: string }> = (props) => {
  const [copyId, setCopyId] = createSignal("");
  const [imageRendering, setImageRendering] = createSignal(false);
  const [animationRendering, setAnimationRendering] = createSignal(false);

  const blinkCopy = (id: string) => {
    setCopyId(id);
    setTimeout(() => setCopyId(""), 1000);
  };

  return (
    <Scrollable class={"share" + (props.class ? ` ${props.class}` : "")}>
      <div className="share__view">
        <h2 class="header--first">Board options</h2>
        <button
          classList={{
            options__button: true,
            "options__button--last": false,
            "options__button--active": state.anonymous,
          }}
          onClick={props.handlers.toggleAnonymous}
          title="TOGGLE ANONYMOUS"
        >
          <i class="las la-user-secret"></i>
        </button>
        <button
          classList={{
            options__button: true,
            "options__button--active": state.boardConfig.showBorder,
          }}
          onClick={props.handlers.toggleBorder}
          title={state.boardConfig.showBorder ? "HIDE BORDER" : "SHOW BORDER"}
        >
          <i class="las la-expand"></i>
        </button>
        <button
          classList={{
            options__button: true,
            "options__button--active": state.boardConfig.showExtraInfo,
          }}
          onClick={props.handlers.toggleExtraInfo}
          title={
            state.boardConfig.showExtraInfo
              ? "HIDE EXTRA INFO"
              : "SHOW EXTRA INFO"
          }
        >
          <i class="las la-info-circle"></i>
        </button>
        <button
          classList={{
            options__button: true,
            "options__button--active": state.gameConfig.titleScreen,
          }}
          onClick={props.handlers.toggleTitleScreen}
          title={
            state.gameConfig.titleScreen
              ? "EXCLUDE TITLE SCREEN"
              : "INCLUDE TITLE SCREEN"
          }
        >
          <i class="las la-heading"></i>
        </button>
        <button
          classList={{
            options__button: true,
            "options__button--last": false,
            "options__button--active": state.boardConfig.showShadows,
          }}
          onClick={props.handlers.toggleShadows}
          title={
            state.boardConfig.showShadows ? "HIDE SHADOWS" : "SHOW SHADOWS"
          }
        >
          <i class="las la-cloud"></i>
        </button>
      </div>
      <hr />
      <div className="share__fen">
        <h2>Current position</h2>
        <input
          type="text"
          name="current_fen"
          readOnly
          placeholder="Current FEN..."
          value={state.fen}
          onClick={(e) => {
            const target = e.target as HTMLInputElement;
            target.select();
          }}
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
              navigator.clipboard.writeText(link.getFENLink(state.fen));
              blinkCopy("fen-link");
            }}
          >
            {copyId() === "fen-link" ? "Copied!" : "Copy link"}
          </button>
        </div>
        <hr class="invisible" />
        <button
          classList={{
            share__size: true,
            "share__size--first": true,
            "share__size--active": state.gameConfig.picSize === "XS",
          }}
          onClick={() => setState("gameConfig", "picSize", "XS")}
          title="360px"
        >
          XS
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.gameConfig.picSize === "S",
          }}
          onClick={() => setState("gameConfig", "picSize", "S")}
          title="512px"
        >
          S
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.gameConfig.picSize === "M",
          }}
          onClick={() => setState("gameConfig", "picSize", "M")}
          title="720px"
        >
          M
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--active": state.gameConfig.picSize === "L",
          }}
          onClick={() => setState("gameConfig", "picSize", "L")}
          title="1024px"
        >
          L
        </button>
        <button
          classList={{
            share__size: true,
            "share__size--last": true,
            "share__size--active": state.gameConfig.picSize === "XL",
          }}
          onClick={() => setState("gameConfig", "picSize", "XL")}
          title="1440px"
        >
          XL
        </button>
        <button
          class="share__btn"
          onClick={async () => {
            setImageRendering(true);
            await props.handlers.downloadImage();
            setImageRendering(false);
          }}
        >
          {imageRendering() ? "Please wait..." : "Save as image"}
        </button>
      </div>
      <Show when={state.pgn}>
        <hr />
        <div class="share__pgn">
          <h2>Game</h2>
          <div class="double">
            <button
              class="share__btn"
              onClick={() => {
                navigator.clipboard.writeText(
                  state.anonymous ? state.game.anonymousPGN : state.pgn
                );
                blinkCopy("pgn");
              }}
            >
              {copyId() === "pgn" ? "Copied!" : "Copy PGN"}
            </button>
            <button
              class="share__btn"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                blinkCopy("pgn-link");
              }}
            >
              {copyId() === "pgn-link" ? "Copied!" : "Copy link"}
            </button>
          </div>
          <div class="double">
            <button
              class="share__btn"
              onClick={() => {
                const data = new Blob([state.pgn], {
                  type: "application/vnd.chess-pgn;charset=utf-8",
                });
                const name = state.game.getFileName(state.anonymous);
                download(data, name, "pgn");
              }}
            >
              Export PGN
            </button>
            <button
              class="share__btn"
              onClick={() => {
                const title = state.game.getTitle({
                  anonymous: state.anonymous,
                });

                const md = `[${title}](${window.location.href})`;

                navigator.clipboard.writeText(md);
                blinkCopy("markdown");
              }}
            >
              {copyId() === "markdown" ? "Copied!" : "Copy markdown"}
            </button>
          </div>
        </div>
        <div class="share__animation">
          <hr className="invisible" />
          <button
            classList={{
              share__size: true,
              "share__size--first": true,
              "share__size--active": state.gameConfig.animationSize === "XS",
            }}
            onClick={() => setState("gameConfig", "animationSize", "XS")}
            title="360px"
          >
            XS
          </button>
          <button
            classList={{
              share__size: true,
              "share__size--active": state.gameConfig.animationSize === "S",
            }}
            onClick={() => setState("gameConfig", "animationSize", "S")}
            title="512px"
          >
            S
          </button>
          <button
            classList={{
              share__size: true,
              "share__size--active": state.gameConfig.animationSize === "M",
            }}
            onClick={() => setState("gameConfig", "animationSize", "M")}
            title="720px"
          >
            M
          </button>
          <button
            classList={{
              share__size: true,
              "share__size--active": state.gameConfig.animationSize === "L",
            }}
            onClick={() => setState("gameConfig", "animationSize", "L")}
            title="1024px"
          >
            L
          </button>
          <button
            classList={{
              share__size: true,
              "share__size--last": true,
              "share__size--active": state.gameConfig.animationSize === "XL",
            }}
            onClick={() => setState("gameConfig", "animationSize", "XL")}
            title="1440px"
          >
            XL
          </button>
          <button
            classList={{
              share__format: true,
              "share__format--first": true,
              "share__format--active": state.gameConfig.format === "GIF",
            }}
            onClick={() => setState("gameConfig", "format", "GIF")}
          >
            GIF
          </button>
          <button
            classList={{
              share__format: true,
              "share__format--active": state.gameConfig.format === "MP4",
            }}
            onClick={() => setState("gameConfig", "format", "MP4")}
          >
            MP4
          </button>
          <button
            classList={{
              share__format: true,
              "share__format--last": true,
              "share__format--active": state.gameConfig.format === "WebM",
            }}
            onClick={() => setState("gameConfig", "format", "WebM")}
          >
            WebM
          </button>
          <button
            class="share__create-animation"
            onClick={async () => {
              setAnimationRendering(true);
              await props.handlers.downloadAnimation();
              setAnimationRendering(false);
            }}
          >
            {animationRendering() ? "Please wait..." : "Save animation"}
          </button>
        </div>
      </Show>
      <Show
        when={
          !state.mobile &&
          ["Chrome", "Firefox", "Opera"].includes(state.browser as string)
        }
      >
        <hr />

        <button
          class="share__stylus"
          onClick={() => setState("userStylesInfo", true)}
        >
          INSTALL STYLES
          <br />
          <span>for lichess.org & chess.com</span>
        </button>
        {/* <h2>
          Install this style for lichess & chess.com via{" "}
          <a
            href={
              state.browser === "Chrome"
                ? "https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne"
                : state.browser === "Firefox"
                ? "https://addons.mozilla.org/pl/firefox/addon/styl-us/"
                : "https://addons.opera.com/pl/extensions/details/stylus/"
            }
            target="_blank"
          >
            Stylus
          </a>
        </h2> */}
        {/* <p class="stylus">
          Pieces:{" "}
          <a
            href={`stylus/pieces/${state.boardConfig.piecesStyle}${
              state.boardConfig.showShadows ? "_shadows" : ""
            }.user.css`}
            target="_blank"
            title="Install"
          >
            Install
          </a>
        </p>
        <p class="stylus">
          Board:{" "}
          <a
            href={`stylus/boards/${state.boardConfig.boardStyle}.user.css`}
            target="_blank"
            title="Install"
          >
            Install
          </a>
        </p> */}
      </Show>
    </Scrollable>
  );
};

export default Share;
