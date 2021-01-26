import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import {  Grid } from 'semantic-ui-react'
import './HomePage.css';

export default function HomePage({user, handleLogout}){

    

    return (
      <div class="homebg">
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column verticalAlign='middle' columns={1} style={{maxWidth: 450}}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <RestaurantForm />
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
}