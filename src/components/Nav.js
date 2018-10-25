import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li><Link to='/users'>Users </Link></li>
            <li><Link to='/products'>Products</Link></li>
        </ul>
    )
}

export default Nav;
