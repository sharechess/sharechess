import { Component } from "solid-js";

import "./FullscreenPopup.css";

const About: Component<{ onCLose: () => void; class: string }> = (props) => {
  return (
    <div className="fs-popup">
      <div className="fs-popup__box">
        <button className="fs-popup__close" onClick={props.onCLose}>
          <i class="las la-times"></i>
        </button>
        <div className={`fs-popup__content ${props.class}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default About;
