import React, { useState, useEffect } from 'react';
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import PostFeed from '../../components/PostFeed/PostFeed';
import AddFoodPic from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/postService';
import PageHeader from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';

export default function ProfilePage({ user, handleLogout }) {

    const [posts, setPosts] = useState([])
    const [profileUser, setProfileUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const location = useLocation()

    async function handleAddPost(post){

        const data = await postsAPI.create(post);

        console.log(data, ' data')
        setPosts([data.post,  ...posts])
        
    }

    async function getPosts(){
    
        try {
          const data = await postsAPI.getAll();
          setPosts([...data.posts])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }    

    async function getProfile() {

        try {

            const username = location.pathname.substring(1)
            console.log(username)
            const data = await userService.getProfile(username);
            console.log(data)
            setLoading(() => false)
            setProfileUser(() => data.user)
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }


    useEffect(() => {
        getProfile()
        getPosts()
    }, [])



    return (

        <>
            { loading ?
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >                
                    <Grid.Column style={{ maxWidth: 450}}>                            
                            <Loader size='large' active>Loading</Loader>                         
                    </Grid.Column>
                </Grid>
                :
                <Grid >
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column style={{ maxWidth: 450}}>
                            <ProfileBio user={profileUser} />
                            <AddFoodPic handleAddPost={handleAddPost}/>
                        </Grid.Column>
                        <Grid.Row>
                        <Grid.Column style={{ maxWidth: 750 }}>
                            <PostFeed posts={posts} numPhotosCol={3} user={user} />
                        </Grid.Column>
                        </Grid.Row>
                    </Grid.Row>
                </Grid>
            }
        </>
    )
}
