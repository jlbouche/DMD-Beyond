import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

function PostCard({post, isProfile, user}) { 

  return (
    <Card style={{width: 300, height: 300}} class="ui container center aligned">
        <Card.Content>
        <Card.Header>
            <img src={`${post.photoUrl}`} height={180} width={270}/>
            {post.postTitle}
        </Card.Header>
        <Card.Meta>
            {post.caption}
        </Card.Meta>
        </Card.Content>
    </Card>
  );
}

export default PostCard;