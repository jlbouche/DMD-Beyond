import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import './Header.css';

export default function PageHeader({user, handleLogout}){
    return (
        <Segment>
            <Header as='h1' floated='right'>
                <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>                 
                <Link to='' onClick={handleLogout} class="link">Logout</Link>
            </Header>
            <Header as='h4' floated='left'>
                <Link to="/"><Image src="https://i.imgur.com/4kxGXSS.png" style={{height:75, width: 100}}></Image></Link>
            </Header>
        </Segment>
    )
}