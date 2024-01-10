import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_IMG } from "./constants";

const Header = () => {
  return (
    <div className="navbar">
      <div className="right">
        <img src={LOGO_IMG} />
      </div>
      <div className="left">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact-Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
