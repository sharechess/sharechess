import { Component, Show, For } from "solid-js";
import { setState, state } from "../../state";
import FullscreenPopup from "./reusable/FullscreenPopup";

import "./UserStylesInfo.css";

const onBrowseClick = (tab: "pieces" | "boards") => () => {
  setState("fullscreenPopup", null);
  if (state.layout === "triple") {
    setState("activeLeftTab", tab);
  } else {
    setState("activeTab", tab);
  }
};

const websites = [
  "lichess.org",
  "chess.com",
  "openingtree.com",
  "chessgames.com",
  "chess24.com",
  "chesstempo.com",
  "listudy.org",
  "chesspecker.com",
  "chessbase.com",
  "wikipedia.org",
  "aimchess.com",
  "chessable.com",
];

const About: Component = () => {
  return (
    <Show when={state.fullscreenPopup === "styles"}>
      <FullscreenPopup
        class="us-info"
        onCLose={() => setState("fullscreenPopup", null)}
      >
        <p class="us-info__intro">
          You can install any chessboard and piece styles from this website for{" "}
          <For each={websites}>
            {(website) => (
              <a href={`https://${website}`} target="_blank">
                {website},{" "}
              </a>
            )}
          </For>
          by following the instructions below.
        </p>
        <div class="us-info__steps">
          <div class="us-info__step">
            <h2 class="us-info__step-num">1</h2>
            <h3 class="us-info__step-title">Install Stylus</h3>
            <p class="us-info__description">
              Get the Stylus extension for your browser, that allows you to use
              custom styles on other websites.
            </p>
            <p class="us-info__install-stylus">
              <a
                class="btn"
                href={
                  state.browser === "Chrome"
                    ? "https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne"
                    : state.browser === "Firefox"
                    ? "https://addons.mozilla.org/pl/firefox/addon/styl-us/"
                    : "https://addons.opera.com/pl/extensions/details/stylus/"
                }
                target="_blank"
              >
                Install the extension
              </a>
            </p>
          </div>
          <div class="us-info__step">
            <h2 class="us-info__step-num">2</h2>
            <h3 class="us-info__step-title">
              Choose your chessboard and pieces
            </h3>
            <p class="us-info__description">
              Install any of the piece or chessboard styles by clicking the{" "}
              <img class="us-info__text-ico" src="img/stylus.svg" alt="" /> icon
              on the chessboard / piece set card.
            </p>
            <p class="us-info__description">
              This will open a stylesheet, click{" "}
              <strong>"Install / Reinstall style"</strong> button in the top
              left corner.
            </p>
            <p class="us-info__browse">
              <button onClick={onBrowseClick("boards")}>
                Browse Chessboards
              </button>
              <button onClick={onBrowseClick("pieces")}>Browse Pieces</button>
            </p>
          </div>
          <div class="us-info__step">
            <h2 class="us-info__step-num">3</h2>
            <h3 class="us-info__step-title">Manage your styles</h3>
            <p class="us-info__description">
              Toggle installed styles via Stylus extension menu. Pin the
              extension for easy access.
            </p>
            <p class="us-info__manage-stylus">
              <img src="img/stylus-popup.png" alt="" />
            </p>
          </div>
        </div>
      </FullscreenPopup>
    </Show>
  );
};

export default About;
