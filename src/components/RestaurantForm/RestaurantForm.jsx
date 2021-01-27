import React, { useState, initialState, useEffect } from 'react';
import { Button, Form, Popup, Grid, Header, Image, Segment, Card } from 'semantic-ui-react'
import RestaurantDisplay from '../RestaurantDisplay/RestaurantDisplay'

export default function RestaurantForm({handleAddressChange, handleCityChange, handleStateCodeChange, handleSubmit, restaurant, address, city, stateCode}){

    return (
      <div>
        <h3>Ready to roll the dice? Enter your address below!</h3>
        <Form style={{maxWidth: 450}} onSubmit={handleSubmit} >
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
            <Popup
              trigger={
                <Button type="submit" className="btn" color="red" content='Decide my dinner!'/>
                }
                content={<Image src="https://media3.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif"/>}
                on='hover'
                mouseEnterDelay={200}
                mouseLeaveDelay={500}
                position='top right'
            />
          </Segment>
        </Form>
      </div>
    )
}