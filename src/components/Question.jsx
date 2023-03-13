import React from "react";

export default function Question(prop){
    console.log(prop)
    const answerElements = prop.question.answers.map((answer, index) => {
        return (
            <button
                onClick={() => prop.selectAnswer(prop.question.id, answer.text)}
                key={index}
                className={`answer--btn ${answer.selected && "selected"}`}>{answer.text}</button>
        )
    })
    return (
        <div className="question">
            <h4 className="question--text">{prop.question.question}</h4>
            <div className="answers">
                {answerElements}
            </div>
        </div>
    )
}