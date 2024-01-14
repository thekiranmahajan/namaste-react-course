import React from "react";
import { IMG_URL } from "../../constants";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  avgRating,
  sla,
}) => {
  return (
    <div className="card">
      <div className="restaurantImg">
        <img src={IMG_URL + cloudinaryImageId} alt="restaurantImg" />
      </div>

      <h2 className="name">{name}</h2>
      <h4 className="rating-time">
        ⭐{avgRating} & {sla.deliveryTime} mins
      </h4>
      <p className="category">{cuisines.join(", ")}</p>
      <p className="location">{locality}</p>
    </div>
  );
};

export default RestaurantCard;
