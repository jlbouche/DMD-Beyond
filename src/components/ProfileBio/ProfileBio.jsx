import React from 'react';
import {  Image, Grid, Segment } from 'semantic-ui-react';


export default function ProfileBio({user}) { 
  return (
  <Grid textAlign='center' columns={2}>
    <Grid.Row>
      <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
        <Image src={`${user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} avatar size='small' />
           <h3>{user.username}</h3>
           <span> Bio: {user.bio}</span>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
}