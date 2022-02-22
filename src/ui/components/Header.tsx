import { Component, createSignal } from "solid-js";
import { Handlers } from "../../types";
// import { state, setState } from "../../state";
import "./Header.css";

const Header: Component<{ handlers: Handlers }> = () => {
  const [darkMode, setDarkMode] = createSignal(true);

  return (
    <header class="header-box">
      <div class="header__logo">
        <div class="header__logo-pic" />
      </div>
      <div class="header__options">
        {/* <div class="header__options-ico" onClick={() => {}}>
          <i class="las la-question-circle"></i>
        </div> */}
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
