import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'

const Question = ({myqna}) => {
    const {question, options, correctAnswer} = myqna;
    const myQuestion = (question).slice(3, -4)
    console.log(myqna)

    const checkCorrectOrWrong = (option) => {
        if(correctAnswer === option){
            toast.success('Correct Answer!', {autoClose: 1000})
        }
        else{
            toast.warning('Wrong Answer!', {autoClose: 1000})
        }
    }

    return (
        <div className='questions-container'>
                <div className='question'>
                    <h3>Q: {myQuestion}</h3>
                    <div className='options'>
                        {
                            options.map(option => <button className='option' onClick={() => checkCorrectOrWrong(option)}><p>{option}</p></button>)
                        }
                    </div>
                </div>
                <ToastContainer />
        </div>
    );
};

export default Question;