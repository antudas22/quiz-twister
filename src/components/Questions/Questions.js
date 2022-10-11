import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
            <h2>Quiz of {quiz.data.name}</h2>
        </div>
    );
};

export default Questions;