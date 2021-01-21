import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import RestaurantInfo from './RestaurantInfo'

import { Card, Icon, Image, Feed } from 'semantic-ui-react'

export default function RestaurantCard(){
    const [restaurantData, setRestaurantData] = useState("");
    const restaurantUrl = `https://developers.zomato.com/api/v2.1/cuisines?city_id=208`;
    let history = useHistory();
    let { restaurant } = useParams();

  useEffect(() => {
    const url = `${restaurantUrl}${restaurant}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRestaurantData(data);
      });
  }, []);

  return (
    <div>
    <RestaurantInfo restaurant={restaurantData} />
    </div>
  );
}