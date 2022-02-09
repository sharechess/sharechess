import { Component, For } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Share.css";

const Share: Component<{ handlers: Handlers }> = (props) => {
  return <Scrollable class="share">Share</Scrollable>;
};

export default Share;
