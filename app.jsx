import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

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
const Body = () => {
  return <div className="main-container"></div>;
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="footer">
      ©️ Copyright {currentYear}.Kiran Mahajan. All Rights Reserved
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
