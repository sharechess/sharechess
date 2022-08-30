import { Component, Show } from "solid-js";
import { Handlers } from "../../types";
import { setState, state } from "../../state";
import "./Header.css";

const Header: Component<{ handlers: Handlers }> = (props) => {
  return (
    <header class="header-box">
      <div class="header__logo">
        <a href="/">
          <div class="header__logo-pic" />
        </a>
      </div>
      <div class="header__options">
        <div
          class="header__options-ico"
          onClick={props.handlers.toggleDarkMode}
          title={
            state.siteConfig.darkMode
              ? "SWITCH TO LIGHT MODE"
              : "SWITCH TO DARK MODE"
          }
        >
          <i
            classList={{
              las: true,
              "la-sun": state.siteConfig.darkMode,
              "la-moon": !state.siteConfig.darkMode,
            }}
          ></i>
        </div>
        <div
          class="header__options-ico"
          onClick={props.handlers.toggleSound}
          title={state.siteConfig.sounds ? "MUTE" : "SOUND ON"}
        >
          <i
            classList={{
              las: true,
              "la-volume-mute": !state.siteConfig.sounds,
              "la-volume-up": state.siteConfig.sounds,
            }}
          ></i>
        </div>
        <Show when={window.speechSynthesis}>
          <div
            class="header__options-ico"
            onClick={props.handlers.toggleSpeech}
            title={state.siteConfig.speech ? "SPEECH OFF" : "SPEECH ON"}
          >
            <i
              classList={{
                las: true,
                "la-deaf": !state.siteConfig.speech,
                "la-assistive-listening-systems": state.siteConfig.speech,
              }}
            ></i>
          </div>
        </Show>
        <div class="header__options-ico" title="VISIT SUBREDDIT">
          <a href="https://www.reddit.com/r/sharechess" target="_blank">
            <i class="lab la-reddit-alien"></i>
          </a>
        </div>
        <div class="header__options-ico" title="SOURCE CODE">
          <a href="https://github.com/sharechess/sharechess" target="_blank">
            <i class="lab la-github"></i>
          </a>
        </div>
        <div
          class="header__options-ico"
          onClick={() => {
            setState(
              "fullscreenPopup",
              state.fullscreenPopup === "about" ? null : "about"
            );
          }}
          title="ABOUT"
        >
          <i class="las la-question-circle"></i>
        </div>

        <Show when={state.mobile}>
          <div
            class="header__options-ico"
            onClick={() => {
              setState(
                "fullscreenPopup",
                state.fullscreenPopup === "support" ? null : "support"
              );
            }}
            title="SUPPORT"
          >
            <i class="las la-heart"></i>
          </div>
        </Show>
      </div>
      <Show when={!state.mobile}>
        <a
          href=""
          class="header__support"
          onClick={(e) => {
            e.preventDefault();
            setState("fullscreenPopup", "support");
          }}
        >
          <i class="las la-heart header__support-ico"></i> &nbsp;Support the
          project
        </a>
      </Show>
    </header>
  );
};

export default Header;
