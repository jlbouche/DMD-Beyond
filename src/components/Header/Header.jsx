import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import './Header.css';

export default function PageHeader({user, handleLogout}){
    return (
        <Segment clearing style={{height: 120}}>
            <Header as='h2' floated='right' style={{height:100, width: 150}}>
                <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>                 
                <Link to='' onClick={handleLogout} class="link">Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to="/"><Image src="https://i.imgur.com/4kxGXSS.png" style={{height:100, width: 150}}></Image></Link>
            </Header>
        </Segment>
    )
}