import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error-container'>
            <div className='error'>
                <h1>Oops!</h1>
                <p>404 - PAGE NOT FOUND</p>
                <p><small>The page you are looking for might have been removed<br /> had its name changed or is temporarily unavailable.</small></p>
                <Link to='/'><button>Go To Homepage</button></Link>
            </div>
        </div>
    );
};

export default Error;