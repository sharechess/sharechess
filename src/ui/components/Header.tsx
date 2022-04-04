import { Component, createSignal } from "solid-js";
import { Handlers } from "../../types";
import { state } from "../../state";
import "./Header.css";

const Header: Component<{ handlers: Handlers }> = (props) => {
  const [darkMode, setDarkMode] = createSignal(true);

  return (
    <header class="header-box">
      <div class="header__logo">
        <a href="/">
          <div class="header__logo-pic" />
        </a>
      </div>
      <div class="header__options">
        {/* <div class="header__options-ico" onClick={() => {}}>
          <i class="las la-question-circle"></i>
        </div> */}
        <div
          class="header__options-ico"
          onClick={() => {
            props.handlers.toggleSound();
          }}
          title={state.boardConfig.sounds ? "MUTE" : "SOUND ON"}
        >
          <i
            classList={{
              las: true,
              "la-volume-mute": !state.boardConfig.sounds,
              "la-volume-up": state.boardConfig.sounds,
            }}
          ></i>
        </div>
        <div
          class="header__options-ico"
          onClick={() => {
            props.handlers.toggleSpeech();
          }}
          title={state.boardConfig.speech ? "SPEECH OFF" : "SPEECH ON"}
        >
          <i
            classList={{
              las: true,
              "la-deaf": !state.boardConfig.speech,
              "la-assistive-listening-systems": state.boardConfig.speech,
            }}
          ></i>
        </div>
        <div
          class="header__options-ico"
          onClick={() => {
            setDarkMode(!darkMode());
            document.body.classList.toggle("light");
          }}
          title={darkMode() ? "LIGHT MODE" : "DARK MODE"}
        >
          <i
            classList={{
              las: true,
              "la-sun": darkMode(),
              "la-moon": !darkMode(),
            }}
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
