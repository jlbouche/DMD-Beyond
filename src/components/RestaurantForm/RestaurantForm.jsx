import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

export default function RestaurantForm(){

    return (
      <Grid>
      <Grid.Column style={{maxWidth: 450}}>
        <Form action="/api/restaurantsearch" method="post">
          <Segment stacked>               
            <Form.Input   
              type="address"                 
              name="address"
              placeholder="Street No. and Name"
              required
            />
            <Form.Input
              type="city"                  
              name="city"
              placeholder="City"
              required
            />
            <Form.Input             
              name="state"
              type="state"
              placeholder="State initials: i.e. CA, NY, WA"
              required
            />
            <Button
              type="submit"
              className="btn">
            HELP ME DECIDE
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
      </Grid>
    )
}