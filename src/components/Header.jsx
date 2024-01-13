import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [searchText, setSearchText] = useState("");

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
          setSearchText(e.target.value);
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
