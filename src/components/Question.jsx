import React from "react";

export default function Question(prop){
    const options = [prop.question.correct_answer, ...prop.question.incorrect_answers]
    const answers = options.map((option, index) => <button key={index} className="answer--btn">{option}</button>)
    
    return (
        <div className="question">
            <h4 className="question--text">{prop.question.question}</h4>
            <div className="answer">
                {answers}
            </div>
        </div>
    )
}