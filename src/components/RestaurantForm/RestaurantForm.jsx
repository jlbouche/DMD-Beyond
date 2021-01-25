import React from 'react';
import {  Grid } from 'semantic-ui-react'

export default function RestaurantForm(){

    return (
      <Grid>
      <Grid.Column style={{maxWidth: 450}}>
              <form action="/api/restaurantsearch" method="post">
                <input required name="address" type="text" placeholder="Street No. and Name"/><br />
                <input required name="city" type="text" placeholder="City" /><br />
                <input required name="state" type="text" placeholder="State initials: i.e. CA, NY, WA"/><br />
                <input type="submit" value="HELP ME DECIDE" />
              </form>
            </Grid.Column>
      </Grid>
    )
}