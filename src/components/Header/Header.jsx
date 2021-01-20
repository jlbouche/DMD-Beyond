import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import './Header.css';

export default function PageHeader({user, handleLogout}){
    return (
        <Segment clearing>
            <Header as='h2' floated='right'>
                <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>                 
                <Link to='' onClick={handleLogout} class="link">Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to="/"><Image src="https://see.fontimg.com/api/renderfont4/JRw6B/eyJyIjoiZnMiLCJoIjozMiwidyI6MTAwMCwiZnMiOjMyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RE1E/draconis.png"></Image></Link>
            </Header>
        </Segment>
    )
}