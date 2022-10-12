import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({myqna}) => {
    const {question, options, correctAnswer} = myqna;
    const myQuestion = (question).slice(3, -4);

    const [ans, setAns] = useState();

    const showCorrectAns = (correctAnswer) => {
        setAns(correctAnswer);
    }

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
                    <div className='question-header'>
                        <div><h3>Q: {myQuestion}</h3></div> 
                        <div><button onClick={() => showCorrectAns(correctAnswer)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button></div>
                    </div>
                    <div className='options'>
                        {
                            options.map(option => <button className='option' onClick={() => checkCorrectOrWrong(option)}><p>{option}</p></button>)
                        }
                    </div>
                    <div className='show'>
                        <h3>Correct Answer is: {ans}</h3>
                    </div>
                </div>
                <ToastContainer />
        </div>
    );
};

export default Question;