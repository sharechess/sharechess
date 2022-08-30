import { Component, Show } from "solid-js";
import { setState, state } from "../../state";
import FullscreenPopup from "./reusable/FullscreenPopup";

import "./About.css";

const About: Component = () => {
  return (
    <Show when={state.fullscreenPopup === "about"}>
      <FullscreenPopup
        class="about"
        onCLose={() => setState("fullscreenPopup", null)}
      >
        <h2>About</h2>
        <p>
          <b>ShareChess</b> is a free, open-source website that allows you to:
        </p>
        <ul class="about__features">
          <li>
            share chess games as self-contained replay links (the whole game is
            stored in the URL),
          </li>
          <li>create images and animations of chess games and positions,</li>
          <li>
            install additional chessboard styles and piece sets for major chess
            websites!
          </li>
        </ul>
        <p>
          You can find the complete source code on my{" "}
          <a href="https://github.com/sharechess/sharechess">GitHub page</a>.
        </p>
        <p>
          Follow my{" "}
          <a href="https://www.reddit.com/r/sharechess/" target="_blank">
            subreddit
          </a>{" "}
          for news, updates, and chess-related content!
        </p>
        <Show when={!state.mobile}>
          <hr />
          <h2>Keyboard Shortcuts</h2>
          <div class="about__shortcuts">
            <ul>
              <li>
                <kbd>→</kbd> Next move
              </li>
              <li>
                <kbd>←</kbd> Previous move
              </li>
              <li>
                <kbd>↑</kbd> Start position
              </li>
              <li>
                <kbd>↓</kbd> Final position
              </li>
              <li>
                <kbd>f</kbd> Flip the board
              </li>
              <li>
                <kbd>Space</kbd> Play / Pause
              </li>
              <li>
                <kbd>Enter</kbd> Analyze on Lichess
              </li>
            </ul>
            <ul>
              <li>
                <kbd>l</kbd> Load from clipboard
              </li>
              <li>
                <kbd>a</kbd> Toggle anonymous
              </li>
              <li>
                <kbd>b</kbd> Toggle border
              </li>
              <li>
                <kbd>i</kbd> Toggle extra info
              </li>
              <li>
                <kbd>h</kbd> Toggle header (title screen)
              </li>
              <li>
                <kbd>s</kbd> Toggle shadows
              </li>
              <li>
                <kbd>p</kbd> Toggle puzzle view
              </li>
            </ul>
          </div>
        </Show>
      </FullscreenPopup>
    </Show>
  );
};

export default About;
