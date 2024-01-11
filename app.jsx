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
const restaurantAPI = {
  name: "Naadbramha Idli",
  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9cdf251bd1a68f107dbe79f7ed95e40a",
  rating: "4.5",
  time: 21,
  category: "South Indian",
  location: "Swaragate",
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <div className="restaurantImg">
        <img src={restaurantAPI.img} alt="restaurantImg" />
      </div>

      <h2 className="name">{restaurantAPI.name}</h2>
      <h4 className="rating-time">
        ⭐{restaurantAPI.rating} & {restaurantAPI.time}mins
      </h4>
      <p className="category">{restaurantAPI.category}</p>
      <p className="location">{restaurantAPI.location}</p>
    </div>
  );
};
const RestaurantList = () => {
  return (
    <>
      <RestaurantCard />
    </>
  );
};
const Body = () => {
  return (
    <div className="main-container">
      <RestaurantList />
    </div>
  );
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
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
