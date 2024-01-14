import React from "react";
import logo from "../assets/images/logo.png";

const Header = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div className="navbar">
      <div className="right">
        <img src={logo} alt="logo" />
      </div>
      <div className="middle">
        <input
          className="searchbar"
          type="text"
          placeholder="Search restaurants here.."
          value={searchText}
          onInput={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onSearch(searchText);
          }}
          className="search-btn"
        >
          Search
        </button>
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

export default Header;
