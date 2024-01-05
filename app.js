import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "headings",
  },
  "hey I'm heading 1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    className: "headings",
  },
  "hey I'm heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "headingContainer",
    ray: true,
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
