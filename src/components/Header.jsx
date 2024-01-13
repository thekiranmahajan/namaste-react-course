import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const searchText = "hello";

  return (
    <div className="navbar">
      <div className="right">
        <img src={logo} alt="logo" />
      </div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search restaurants here.."
        value={searchText}
        onInput={(e) => {
          console.log(e.target.value);
        }}
      />
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

export default Header;
