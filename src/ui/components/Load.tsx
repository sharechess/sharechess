import { Component, For } from "solid-js";
import chunk_ from "@arrows/array/chunk_";
import { Handlers } from "../../types";
import "./load.css";

const Load: Component<{}> = (props) => {
  return (
    <div class="load">
      <input
        class="load__fen-input"
        type="text"
        name="load-fen"
        placeholder="PASTE FEN..."
      />
      <button class="load__fen-btn">LOAD FEN</button>
      <textarea
        class="load__pgn-input"
        name="load-pgn"
        placeholder="PASTE PGN..."
      ></textarea>
      <button class="load__pgn-btn">LOAD PGN</button>
    </div>
  );
};

export default Load;
