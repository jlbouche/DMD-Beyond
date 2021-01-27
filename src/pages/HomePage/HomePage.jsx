import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay';

import {  Grid, Image, Card } from 'semantic-ui-react'
import './HomePage.css';

export default function HomePage({user, handleLogout, handleAddressChange, handleCityChange, handleStateCodeChange, handleSubmit, restaurant, address, city, stateCode}){
    

    return (
      <div class="homebg">
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} class="ui container">
            <Grid.Column verticalAlign='middle' columns={2} style={{maxWidth: 450}}>
              {restaurant ? null : <RestaurantForm handleAddressChange={handleAddressChange} 
                handleCityChange={handleCityChange} 
                handleStateCodeChange={handleStateCodeChange} 
                handleSubmit={handleSubmit}
                address={address}
                city={city}
                stateCode={stateCode}/>
                }
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} class="ui container">
            <Grid.Column verticalAlign='middle' columns={2} style={{maxWidth: 450}}>
            {restaurant ? <RestaurantDisplay restaurant={restaurant}/> : null }
            </Grid.Column>
        </Grid.Row>
        <Image src="https://i.imgur.com/QpBVnrP.png" />
      </Grid>
      </div>
    )
}