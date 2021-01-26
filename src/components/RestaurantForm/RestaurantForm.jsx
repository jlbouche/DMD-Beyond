import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'


export default function RestaurantForm(){
  
  const [restaurant, setRestaurant] = useState({
    name: '',
    image_url: '',
    rating: Number,
    review_count: Number,
    is_closed: Boolean,
    price: '',
    location: '',
  })

  function handleSubmit(e) {
    e.preventDefault();
    const response = fetch('/api/restaurantsearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setRestaurant(response);
  };

    return (
      <Grid>
      <Grid.Column style={{maxWidth: 450}}>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>               
            <Form.Input   
              type="address"                 
              name="address"
              placeholder="Street No. and Name"
              required
            />
            <Form.Input
              type="city"                  
              name="city"
              placeholder="City"
              required
            />
            <Form.Input             
              name="state"
              type="state"
              placeholder="State initials: i.e. CA, NY, WA"
              required
            />
            <Button
              type="submit"
              className="btn">
            HELP ME DECIDE
            </Button>
          </Segment>
        </Form>
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
      </Grid.Column>
      </Grid>
    )
}