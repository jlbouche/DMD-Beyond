import React from 'react';
import {  Grid } from 'semantic-ui-react'

export default function RestaurantForm(){

    return (
      <Grid>
      <Grid.Column style={{maxWidth: 450}}>
              <form action="/api/restaurantsearch" method="post">
                <input required name="address" type="text" placeholder="Street No. and Name"/>
                <input required name="city" type="text" placeholder="City" />
                <input required name="state" type="text" placeholder="State initials: i.e. CA, NY, WA"/>
                <input type="submit" value="HELP ME DECIDE" />
              </form>
            </Grid.Column>
      </Grid>
    )
}