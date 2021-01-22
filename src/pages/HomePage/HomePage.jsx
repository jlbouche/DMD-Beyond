import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
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
          <Grid.Column style={{ maxWidth: 450 }}>
            <span>Confirmation HomePage is rendering</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
            <button onClick={handleSubmit}>HELP ME DECIDE</button>
            {setAPICall ? <RestaurantInfo restaurant={restaurantData} /> : null}
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}