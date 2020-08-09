import React from 'react';
import styled from 'styled-components';

const Navigation = styled.ul`
    margin: 5px 20px;
    padding: 0;
    li {
        list-style-type: none;
    }
    li:not(:last-child) {
        border-bottom: 1px solid #2d4d56;
    }
    li a {
        font-size: 1.2em;
        color: rgb(228, 226, 197);
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px;
        width: 100%;
        display: block;
    }
    li:hover {
        background: #2d4d56; 
    }
`

const Nav = () => {
    return (
        <Navigation>
            <li><a href="#">Home</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Web</a></li>
            <li><a href="#">Gamedev</a></li>
            <li><a href="#">Algo</a></li>
        </Navigation>
    )
}

export default Nav;