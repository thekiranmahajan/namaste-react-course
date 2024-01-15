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
