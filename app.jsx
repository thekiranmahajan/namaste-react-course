import React from "react";
import ReactDOM from "react-dom/client";

const headings = (
  <>
    <h1 className="title">Heading1</h1>
    <h2 className="title">Heading2</h2>
    <h2 className="title">Heading2</h2>
  </>
);

const ContainerComponent = () => {
  return <div className="container">{headings}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent />);
