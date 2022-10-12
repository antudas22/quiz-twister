import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';


const Topic = ({topic}) => {
    const {id, logo, name, total} = topic;

    return (
            <div className='topic-card'>
            <img src={logo} alt="" />
            <div className='card-details'>
                <h3>{name}</h3>
                <p>Questions: {total}</p>
            </div>
            <div className='start-btn'>
                <Link to={`/quiz/${id}`}>
                    <button>Start Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;