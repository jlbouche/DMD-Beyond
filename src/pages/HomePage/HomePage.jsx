import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay';
import {  Grid } from 'semantic-ui-react'

export default function HomePage({user, handleLogout}){

    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{maxWidth: 450}}>
              <RestaurantForm />
              {restaurant && <RestaurantDisplay />}
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}