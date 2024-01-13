import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  /* Where,
   * searchText is the state variable name
   * and useState("") this empty string is the default initialized value of it.
   * setSearchText() is a Fn which helps to update new value to replace default one
   */

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
          /*
          
          this Fn gets fired when input is given to input field updating the value of input to as new user typed string. using e.target.value
          
           */
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
