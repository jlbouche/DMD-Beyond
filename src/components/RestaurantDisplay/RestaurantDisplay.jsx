import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, Grid, Icon, Image, Segment, Card } from 'semantic-ui-react'

export default function RestaurantDisplay({restaurant}){
    console.log('restaurantDisplay', restaurant)
    
    return (
        <>
        <Card style={{width: 300, height: 300}} class="ui container center aligned">           
                    <Card.Content>
                        <Card.Header>
                            <img src={restaurant.restaurant.image_url} height={180} width={270}/><br/>
                            <a href={restaurant.restaurant.url}>{restaurant.restaurant.name}</a>
                        </Card.Header>
                        <Card.Meta>
                            {restaurant.restaurant.location.address1}<br/>
                            {restaurant.restaurant.location.city}{restaurant.restaurant.location.zip_code}
                        </Card.Meta>
                     </Card.Content>
                     <Card.Content extra>
                            <Icon name='star' />
                            {restaurant.restaurant.rating}
                            {restaurant.restaurant.review_count}
                     </Card.Content>
        </Card>
        </>
    )
}