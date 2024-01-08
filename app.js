import { createElement as ray } from "react";
import ReactDOM from "react-dom/client";

const container = ray("div", { className: "container" }, [
  ray(
    "h1",
    {
      className: "title",
    },
    "heading1"
  ),
  ray(
    "h2",
    {
      className: "title",
    },
    "heading2"
  ),
  ray(
    "h3",
    {
      className: "title",
    },
    "heading3"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
