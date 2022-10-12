import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1>Quiz Twister</h1>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/'></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;