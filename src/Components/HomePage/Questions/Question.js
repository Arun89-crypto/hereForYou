import React, { useState } from 'react'
import Plus from '../../../assets/plus.png';
import Minus from '../../../assets/minus.png';

function Question({ id, question, answer }) {
    const [show, setShow] = useState(false);
    return (
        <div className="faq">
            <div className="question__section__faq flex__spacebetween">
                <p>{question}</p>
                <button onClick={() => setShow(!show)} className="flex__center">
                    <img src={(show) ? Minus : Plus} alt=''></img>
                </button>
            </div>
            {
                (show) ? (
                    <div className="answer__section__faq">
                        <p>{answer}</p>
                    </div>
                ) : ''
            }

        </div>
    )
}

export default Question
