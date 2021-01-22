import React from "react";

function RestaurantInfo({ restaurant }) {
  return (
    <div className="restaurant-data">
      <h1>{restaurant.name}</h1>
      <h4>Rating: {restaurant.user_rating.aggregate_rating}{restaurant.user_rating.votes}</h4>
      <h4>Cost for two: {restaurant.currency}{restaurant.average_cost_for_two}</h4>
      <h4>Menu: {restaurant.menu_url}</h4>
    </div>
  );
}

export default RestaurantInfo;
