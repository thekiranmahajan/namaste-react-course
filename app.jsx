import React from "react";
import ReactDOM from "react-dom/client";

const ContainerComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Heading1</h1>
      <h2 className="title">Heading2</h2>
      <h2 className="title">Heading2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent />);
