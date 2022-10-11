import React from 'react';
import './Topic.css';

const Topic = ({topic}) => {
    const {logo, name, total} = topic;
    return (
            <div className='topic-card'>
            <img src={logo} alt="" />
            <div className='card-details'>
                <h3>{name}</h3>
                <p>Questions: {total}</p>
            </div>
            <div className='start-btn'>
                <button>Start Now</button>
            </div>
        </div>
    );
};

export default Topic;