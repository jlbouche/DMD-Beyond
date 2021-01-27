import React from 'react';
import { Card, Popup, Icon, Image } from 'semantic-ui-react'

function PostCard({post, isProfile, user}) { 

  return (
    <Card style={{width: 230, height: 200}} class="ui container center aligned">
        <Card.Content>
        <Popup trigger={
        <Card.Header>
            <img src={`${post.photoUrl}`} height={180} width={200}/>
        </Card.Header>} wide position='bottom center'>
        <Card.Header>
            {post.postTitle}
        </Card.Header>
        <Card.Meta>
            {post.caption}
        </Card.Meta>
        </Popup>
        </Card.Content>
    </Card>
  );
}

export default PostCard;