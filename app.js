import { createElement } from "react";
import ReactDOM from "react-dom/client";

const container = createElement("div", { className: "container" }, [
  createElement(
    "h1",
    {
      className: "title",
    },
    "heading1"
  ),
  createElement(
    "h2",
    {
      className: "title",
    },
    "heading2"
  ),
  createElement(
    "h3",
    {
      className: "title",
    },
    "heading3"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
