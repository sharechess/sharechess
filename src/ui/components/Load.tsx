import { Component, createSignal } from "solid-js";
import { Handlers } from "../../types";
import "./Load.css";

const Load: Component<{ handlers: Handlers }> = (props) => {
  const [fen, setFEN] = createSignal("");
  const [pgn, setPGN] = createSignal("");

  return (
    <div class="load">
      <input
        class="load__fen-input"
        type="text"
        name="load-fen"
        placeholder="PASTE FEN..."
        spellcheck={false}
        value={fen()}
        onInput={(e) => setFEN(e.currentTarget.value)}
      />
      <button
        class="load__fen-btn"
        onClick={() => props.handlers.loadFEN(fen())}
      >
        LOAD FEN
      </button>
      <textarea
        class="load__pgn-input"
        name="load-pgn"
        placeholder="PASTE PGN..."
        spellcheck={false}
      ></textarea>
      <button class="load__pgn-btn">LOAD PGN</button>
    </div>
  );
};

export default Load;
