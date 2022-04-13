import { Component, Show } from "solid-js";
import { setState, state } from "../../state";

import "./About.css";

const About: Component = () => {
  return (
    <Show when={state.about}>
      <div className="about">
        <div className="about__box">
          <button
            className="about__close"
            onClick={() => setState("about", !state.about)}
          >
            <i class="las la-times"></i>
          </button>
          <div className="about__content">
            <h2>About</h2>
            <p>
              <b>ShareChess</b> is a free, open source website that allows you
              to share chess games as self-contained replay links (the whole
              game is stored in the url without the need for a database), PNG
              images, or GIF / MP4 / WebM animations.
            </p>

            <p>
              The website provides a high variety of chessboard and piece
              designs to serve as an open alternative for commercial chess GIF
              makers.
            </p>
            <p>
              You can find the complete source code on our{" "}
              <a href="https://github.com/sharechess/sharechess">GitHub page</a>
              .
            </p>
            <hr />
            <h2>Keyboard Shortcuts</h2>
            <div className="about__shortcuts">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default About;
