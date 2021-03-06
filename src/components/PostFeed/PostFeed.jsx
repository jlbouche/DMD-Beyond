import React from 'react';
import { Card  } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostFeed({posts, isProfile, numPhotosCol, user}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {posts.map((post) => {
                return ( 
                        <PostCard post={post} isProfile={isProfile} user={user}/>
                    )
                })}
        </Card.Group>
    )
}