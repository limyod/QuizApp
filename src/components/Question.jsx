import React from "react";

export default function Question(props){
    console.log(props)
    const answerElements = props.question.answers.map((answer, index) => {
        let styleClass = ""
        if (props.answersChecked){
            if (answer.isCorrect){
                styleClass = "correct"
            } else if(answer.selected) {
                styleClass = "incorrect"
            }
        } else {
            if(answer.selected){
                styleClass = "selected"
            }
        }

        return (
            <button
                disabled={props.answersChecked}
                onClick={() => props.selectAnswer(props.question.id, answer.text)}
                key={index}
                className={`answer--btn ${styleClass}`}>{answer.text}</button>
        )
    })
    return (
        <div className="question">
            <h4 className="question--text">{props.question.question}</h4>
            <div className="answers">
                {answerElements}
            </div>
        </div>
    )
}