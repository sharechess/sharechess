import { Component, JSXElement } from "solid-js";

import "./FullscreenPopup.css";

const About: Component<{
  children: JSXElement;
  onCLose: () => void;
  class: string;
}> = (props) => {
  return (
    <div class="fs-popup">
      <div class="fs-popup__box">
        <button class="fs-popup__close" onClick={props.onCLose}>
          <i class="las la-times"></i>
        </button>
        <div class={`fs-popup__content ${props.class}`}>{props.children}</div>
      </div>
    </div>
  );
};

export default About;
