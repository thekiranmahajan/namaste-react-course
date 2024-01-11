import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="right">
        <img src={logo} alt="logo" />
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
