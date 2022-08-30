import { Component, JSXElement } from "solid-js";
import "./Scrollable.css";

const Scrollable: Component<{ children: JSXElement; class: string }> = (
  props
) => {
  return (
    <div class={`scrollable ${props.class}`}>
      <div class="scrollable__content">{props.children}</div>
    </div>
  );
};

export default Scrollable;
