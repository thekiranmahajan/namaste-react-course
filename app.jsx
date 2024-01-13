import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import { RESTAURANT_DATA, IMG_URL } from "./constants";

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

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  avgRating,
  sla,
}) => {
  // console.log(cloudinaryImageId);
  return (
    <div className="card">
      <div className="restaurantImg">
        <img src={IMG_URL + cloudinaryImageId} alt="restaurantImg" />
      </div>

      <h2 className="name">{name}</h2>
      <h4 className="rating-time">
        ⭐{avgRating} & {sla.deliveryTime} mins
      </h4>
      <p className="category">{cuisines}</p>
      <p className="location">{locality}</p>
    </div>
  );
};
const RestaurantList = () => {
  // console.log({ ...RESTAURANT_DATA[0].info });
  return (
    <>
      <RestaurantCard {...RESTAURANT_DATA[0].info} />;
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
