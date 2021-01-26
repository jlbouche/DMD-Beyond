import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'
import restaurantService from '../../utils/restaurantService';
import RestaurantDisplay from '../RestaurantDisplay/RestaurantDisplay'


export default function RestaurantForm(){
  
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [stateCode, setStateCode] = useState('')
  const [currentRestaurant, setCurrentRestaurant] = useState({})

  function handleAddressChange(e){
    setAddress(e.target.value);
  }

  function handleCityChange(e){
    setCity(e.target.value);
  }

  function handleStateCodeChange(e){
    setStateCode( e.target.value);
  }



  async function handleSubmit(e) {
    e.preventDefault();
    const currentLocation = {address: address, city: city, stateCode: stateCode};
    console.log(currentLocation)
    try {
      // refer to the utils/restaurantService, to look at the getRestaurant fetch function
      const restaurant = await restaurantService.getRestaurant(currentLocation);
      // setCurrentRestaurant(restaurant);
    } catch(err){
      console.log(err.message)
    }
  };

    return (
      <Grid>
      <Grid.Column style={{maxWidth: 450}}>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>               
            <Form.Input   
              type="address"                 
              name="address"
              value={address}
              placeholder="Street No. and Name"
              required
              onChange={handleAddressChange}
            />
            <Form.Input
              type="city"                  
              name="city"
              value={city}
              placeholder="City"
              required
              onChange={handleCityChange}
            />
            <Form.Input             
              name="state"
              type="state"
              value={stateCode}
              placeholder="State initials: i.e. CA, NY, WA"
              required
              onChange={handleStateCodeChange}
            />
            <Button
              type="submit"
              className="btn"
            >
            HELP ME DECIDE
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
      </Grid>
    )
}