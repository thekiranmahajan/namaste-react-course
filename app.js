import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement("div", { className: "container" }, [
  React.createElement(
    "h1",
    {
      className: "title",
    },
    "heading1"
  ),
  React.createElement(
    "h2",
    {
      className: "title",
    },
    "heading2"
  ),
  React.createElement(
    "h3",
    {
      className: "title",
    },
    "heading3"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
