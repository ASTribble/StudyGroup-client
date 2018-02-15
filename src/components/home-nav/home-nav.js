import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeNav (props){
    return(
        <nav id='home-nav'>
            <Link to='/'>home</Link>
        </nav>
    )
}