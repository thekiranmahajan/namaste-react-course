import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  if (!restaurants) {
    console.log("no restaurants");
    return <p>No Restaurants</p>;
  }
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
      ))}
    </>
  );
};
export default RestaurantList;
