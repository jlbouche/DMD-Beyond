import React, { useEffect, useState } from 'react'
import React from 'react';
import { Card, Icon, Image, Feed } from 'semantic-ui-react'

export default function RestaurantCard(){
    const [restaurantData, setRestaurantData] = useState("");
    const [restaurantName, setRestaurantName] = useState("");

  const handleSubmit = (restaurantName) => {
    console.log("App - makeApiCall - name", restaurantName);
    setRestaurantName(restaurantName);
  };

  useEffect(() => {
    const cuisineUrl = `https://developers.zomato.com/api/v2.1/cuisines?city_id=208`;
    fetch(cuisineUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRestaurantData(data);
      });
  }, [restaurantName]);

  return (
    <div className="restaurant-data">
      <h1>{cuisine.cuisine_name}</h1>
      <h4>Year: {movie.Year}</h4>
      <h4>Genre: {movie.Genre}</h4>
      <h4>Plot: {movie.Plot}</h4>
      <h4>imdbRating: {movie.imdbRating}</h4>
    </div>
  );
}