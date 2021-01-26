import React, {useState, useEffect} from 'react';
import { Card, Image } from 'semantic-ui-react'

 export default function RestaurantDisplay(){

    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        const res = fetch('/api/restaurantsearch');
        setRestaurant(res.json());
    })

     return (

         <>
         <h3>DMD has rolled a nat 20! You're going to:</h3>
         <Card>
             <Image src={`${restaurant.image_url}`} />
             <Card.Content>
                 {restaurant.name}
                 {restaurant.rating}{restaurant.review_count}
                 {restaurant.price}
                 {restaurant.location.display_address}
             </Card.Content>
         </Card>
         </>
     )
 }