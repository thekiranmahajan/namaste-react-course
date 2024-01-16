import React from "react";
import RestaurantList from "./RestaurantList";
const Body = ({ restaurants }) => {
  return restaurants == "" ? (
    <div>Placeholer UI or Shimmer UI....</div>
  ) : (
    <div className="main-container">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Body;
