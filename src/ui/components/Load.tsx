import { Component } from "solid-js";
import "./load.css";

const Load: Component = () => {
  return (
    <div class="load">
      <input
        class="load__fen-input"
        type="text"
        name="load-fen"
        placeholder="PASTE FEN..."
        spellcheck={false}
      />
      <button class="load__fen-btn">LOAD FEN</button>
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
