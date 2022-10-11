import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData()
    return (
            <div className="home-container">
                <div className='home-display'>
                    <h2>An investment in knowledge <br/>pays the best interest. – Benjamin Franklin</h2>
                </div>
                <div className='topic-container'>
                    {
                        topics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>
            </div>
    );
};

export default Topics;