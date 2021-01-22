import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import {  Grid } from 'semantic-ui-react'

export default function HomePage({user, handleLogout}){

    const [restaurantData, setRestaurantData] = useState("");
    const [apiCall, setAPICall] = useState("");

    const handleSubmit = (e) => {
      console.log("App--set event call for API");
      setAPICall(e)
    }

    useEffect(() => {
      const city = req.user.city;
      const state = req.user.state;
      fetch(movieUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovieData(data);
        });
    }, [movieTitle]);

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
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}