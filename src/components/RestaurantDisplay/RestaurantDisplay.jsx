import React from 'react';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'

export default function RestaurantDisplay({restaurant}){
    
    return (
    <>
         <h3>DMD has rolled a nat 20! You're going to:</h3>
         <Card>
             <Image src={`${restaurant.image_url}`} />
             <Card.Content>
                 {restaurant.name}
                 {restaurant.rating}{restaurant.review_count}
                 {restaurant.price}
                 {restaurant.location}
             </Card.Content>
         </Card>
    </>
    )
}