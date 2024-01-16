import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
      ))}
    </>
  );
};
export default RestaurantList;
