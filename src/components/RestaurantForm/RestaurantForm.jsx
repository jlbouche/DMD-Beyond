import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'
import RestaurantDisplay from '../RestaurantDisplay/RestaurantDisplay'

export default function RestaurantForm(){
  
  // const [restaurant, setRestaurant] = useState({})
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [stateCode, setStateCode] = useState('')

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = fetch('/api/restaurantsearch', {
  //    method: 'POST',
  //    data: 'application/json'
  //    });
  //    console.log(response)
  //   console.log(e)
  //   setRestaurant(e);
  // };

    return (
      <Grid >
      <Grid.Column style={{maxWidth: 450}}>
        <Form action="/api/restaurantsearch" method="post">
          <Segment stacked>               
            <Form.Input   
              type="address"
              name="address"                
              value={address}
              placeholder="Street No. and Name"
              required
              onChange={e => setAddress(e.target.value)}
            />
            <Form.Input
              type="city"
              name="city"                  
              value={city}
              placeholder="City"
              required
              onChange={e => setCity(e.target.value)}            
              />
            <Form.Input             
              type="state"
              name="state"
              value={stateCode}
              placeholder="State initials: i.e. CA, NY, WA"
              required
              onChange={e => setStateCode(e.target.value)}            
              />
            <Button
              type="submit"
              className="btn"
              >
            HELP ME DECIDE
            </Button>
          </Segment>
        </Form>
        {/* {restaurant ? <RestaurantDisplay /> : null} */}
      </Grid.Column>
      </Grid>
    )
}