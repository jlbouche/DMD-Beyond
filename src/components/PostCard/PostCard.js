import React from 'react';
import { Card, Icon, Image, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function PostCard({post, isProfile, user}) { 

  return (
    <Card key={post._id}>
     {isProfile ? ''
        :  
        <Link to={`/${user.username}`}>
          <Card.Content textAlign='left'>
              <Image
                  floated='left'
                  size='large'
                  avatar
                  src={post.user.photoUrl ? post.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              />
              <Card.Header floated="right">{post.user.username}</Card.Header>
          </Card.Content>
        </Link>
      }
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
      <Card.Description>
        {post.caption}
      </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PostCard;