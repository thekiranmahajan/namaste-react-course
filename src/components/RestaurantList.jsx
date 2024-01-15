import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  useEffect(() => {
    console.log("callback from useEffect");
  }, [restaurants]);
  console.log("render()");
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
      ))}
    </>
  );
};
export default RestaurantList;
