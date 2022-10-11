import React from 'react';

const Question = ({myqna}) => {
    const {question, options, correctAnswer} = myqna;
    const myQuestion = (question).slice(3, -4)
    console.log(myqna)
    return (
        <div>
                <h3>{myQuestion}</h3>
                <div>
                    {
                        options.map(option => <p>{option}</p>)
                    }
                </div>
        </div>
    );
};

export default Question;