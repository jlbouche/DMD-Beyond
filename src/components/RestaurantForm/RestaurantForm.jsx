import React, { useState, initialState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'
import RestaurantDisplay from '../RestaurantDisplay/RestaurantDisplay'

export default function RestaurantForm({handleAddressChange, handleCityChange, handleStateCodeChange, handleSubmit, restaurant, address, city, stateCode}){

    return (
      <div>
        <h3>Ready to roll the dice on dinner?</h3>
        <Form style={{maxWidth: 450}} onSubmit={handleSubmit}>
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
      </div>
    )
}