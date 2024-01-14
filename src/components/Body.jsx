import React from "react";
import RestaurantList from "./RestaurantList";
const Body = ({ restaurants }) => {
  return (
    <div className="main-container">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Body;
