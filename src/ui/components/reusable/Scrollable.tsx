import { Component } from "solid-js";
import "./Scrollable.css";

const Scrollable: Component<{ class: string }> = (props) => {
  return (
    <div class={`scrollable ${props.class}`}>
      <div class="scrollable__content">{props.children}</div>
    </div>
  );
};

export default Scrollable;
