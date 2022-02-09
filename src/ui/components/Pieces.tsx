import { Component, For } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Pieces.css";

const Pieces: Component<{ handlers: Handlers }> = (props) => {
  return <Scrollable class="pieces">Pieces</Scrollable>;
};

export default Pieces;
