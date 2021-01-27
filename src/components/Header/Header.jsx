import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon, Menu } from 'semantic-ui-react';
import './Header.css';

export default function PageHeader({user, handleLogout}){
    return (
        <div>
            <Menu secondary>
                <Menu.Item>
                    <Link to="/"><Image src="https://i.imgur.com/FMpEgJi.png" style={{height:75, width: 100}}></Image></Link>
                </Menu.Item>
                <Menu.Item>
                    
                </Menu.Item>
                <Menu.Item position='right'>
                    <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar style={{height: 50, width: 50}}></Image></Link>                 
                </Menu.Item>
                <Menu.Item>
                    <Link to='' onClick={handleLogout} class="link">Logout</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}