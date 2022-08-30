import { Component, JSXElement } from "solid-js";
import "./Tab.css";
import { TabName } from "../../../state";

const Tab: Component<{
  children: JSXElement;
  name: TabName;
  setTab: (name: TabName) => void;
  isActive: boolean;
}> = (props) => {
  return (
    <button
      class={"tab" + (props.isActive ? " tab--active" : "")}
      onClick={() => props.setTab(props.name)}
    >
      {props.children}
    </button>
  );
};

export default Tab;
