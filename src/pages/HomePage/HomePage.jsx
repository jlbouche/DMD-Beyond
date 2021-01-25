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
            <Grid.Column style={{maxWidth: 450}}>
              <form action="/api/restaurantsearch" method="post">
                <input required name="address" type="text" placeholder="Street No. and Name"/>
                <input required name="city" type="text" placeholder="City" />
                <input required name="state" type="text" placeholder="State initials: i.e. CA, NY, WA"/>
                <input type="submit" value="HELP ME DECIDE" />
              </form>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}