import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, Grid, Icon, Image, Segment, Card } from 'semantic-ui-react'

export default function RestaurantDisplay({handleSubmit, restaurant}){
    console.log('restaurantDisplay', restaurant)
    
    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <>
        <div>
            <h3>DMD rolled a natural 20! You're going to: </h3>
        </div>
        <Card centered style={{width: 345, height: 300}} class="ui container center aligned">           
                    <Card.Content>
                        <Card.Header>
                            <img src={restaurant.restaurant.image_url} height={180} width={315}/><br/>
                            <a href={restaurant.restaurant.url}>{restaurant.restaurant.name}</a>
                        </Card.Header>
                        <Card.Meta>
                            {restaurant.restaurant.categories.alias}
                            {restaurant.restaurant.location.address1}<br/>
                            {restaurant.restaurant.location.city}, 
                            {restaurant.restaurant.location.state}, 
                            {restaurant.restaurant.location.zip_code}
                        </Card.Meta>
                     </Card.Content>
                     <Card.Content extra>
                            Reviews: {restaurant.restaurant.review_count}<span>  </span>
                            <Icon name='star' />
                            {restaurant.restaurant.rating}
                     </Card.Content>
        </Card>
        <Button 
            type="submit" 
            className="btn" 
            color="red" 
            content='Search again?'
            onClick={refreshPage}/>
        </>
    )
}