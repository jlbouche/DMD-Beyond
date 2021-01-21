import React from "react";

function RestaurantInfo({ restaurant }) {
  return (
    <div className="restaurant-data">
      <h1>{restaurant.name}</h1>
      <h4>Rating: {restaurant.user_rating}</h4>
      <h4>Menu: {restaurant.menu_url}</h4>
    </div>
  );
}

export default RestaurantInfo;
