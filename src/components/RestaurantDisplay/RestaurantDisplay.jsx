import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'

export default function RestaurantDisplay({restaurant}){
    console.log('restaurantDisplay', restaurant)
    
    return (
        <>
        <h3>DMD has rolled a nat 20! You're going to:</h3>
        <Card style={{width: 450, height: 450}}>           
                    <Card.Content>
                        <Card.Header>
                            <Image src={restaurant.restaurant.image_url} />
                            <a href={restaurant.restaurant.url}>{restaurant.restaurant.name}</a>
                        </Card.Header>
                        <Card.Meta>
                            {restaurant.restaurant.rating}{restaurant.restaurant.review_count}
                            {restaurant.restaurant.price}
                            {restaurant.restaurant.location.address}{restaurant.restaurant.location.city}{restaurant.restaurant.location.zip_code}
                        </Card.Meta>
                     </Card.Content>
        </Card>
        </>
    )
}