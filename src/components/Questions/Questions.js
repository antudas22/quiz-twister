import React from 'react';
import './Questions.css';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    const myQnas = questions.data.questions
    console.log(myQnas)
    return (
        <div className='quiz-header'>
            <h2>Quiz of {questions.data.name}</h2>
            <div>
                {
                    myQnas.map(myqna => <Question
                        key={myqna.id}
                        myqna={myqna}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Questions;