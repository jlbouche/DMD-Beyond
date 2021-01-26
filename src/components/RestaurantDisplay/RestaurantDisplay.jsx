import React from 'react';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'

export default function RestaurantDisplay({restaurant}){
    console.log('restaurantDisplay', restaurant)
    
    return (
        <Card>           
                    <>
                    <h3>DMD has rolled a nat 20! You're going to:</h3>
                    <Card.Content>
                     <Image src={`${restaurant.restaurant.image_url}`} />
                         {restaurant.restaurant.name}
                         {restaurant.restaurant.rating}{restaurant.restaurant.review_count}
                         {restaurant.restaurant.price}
                         {restaurant.restaurant.location.address}
                     </Card.Content>
                    </>
        </Card>
    )
}