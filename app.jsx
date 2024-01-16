import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Footer } from "./src/components";
import { RESTAURANT_DATA } from "./constants";
const AppLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(RESTAURANT_DATA);

  const onSearch = (searchText) => {
    const filterData = RESTAURANT_DATA.filter((restaurant) =>
      restaurant.info.name.includes(searchText)
    );
    setFilteredRestaurants(filterData);
  };
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.51981990724166&lng=73.86026275822753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      // console.log(
      //   data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      // );
      setFilteredRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Something went wrong while fetching API...😵");
    }
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  console.log("render()");

  return (
    <>
      <Header
        onSearch={onSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Body restaurants={filteredRestaurants} />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
