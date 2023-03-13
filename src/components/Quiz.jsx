import React from 'react'
import data from '../data'
import Question from './Question'
import { nanoid } from 'nanoid'
/**
 * What data do we need for each question?
 * question id
 * question text
 * correct answer, incorrect answer, along with whether its selected.
 * category, question type, difficulty
 * 
 */
export default function Quiz(){
    const [questions, setQuestions] = React.useState(getNewQuestions())
    const [answersChecked, setAnswersChecked] = React.useState(false)
    function getNewQuestions(){
        const x = data.results.map(question => {
            let inCorrectAnswers = question.incorrect_answers.map((ans)=>{
                return { text: ans, selected: false, isCorrect: false }
            })

            let correctAnswer = { text: question.correct_answer, selected: false, isCorrect: true }
            return (
                {
                    question: question.question,
                    type: question.type,
                    category: question.category,
                    difficulty: question.difficulty,
                    answers: [correctAnswer, ...inCorrectAnswers],
                    id: nanoid()
                }
            )
        })
        return x
    }

    function selectAnswer(questionId, answer_text){
        setQuestions(oldQuestions => oldQuestions.map(q=>{
            return (q.id === questionId) ? 
                {...q,
                answers: q.answers.map((answer)=>{
                    return answer.text === answer_text ? 
                        { ...answer, selected: !answer.selected } : {...answer, selected: false}
                })}
                : q
        }))
    }

    function checkAnswers(){
        setAnswersChecked(true);
    }


    const questionElements = questions.map((data)=>{
        return(
            <Question key={data.id} question={data} answersChecked={answersChecked} selectAnswer={selectAnswer} />
        )
    })

    return(
        <section className='quiz'>
            <div className="all_questions">
                {questionElements}
            </div>
            {answersChecked && <span>You answered {questions.length} questions!</span>}
            <button onClick={checkAnswers} className='check_answer_button'>Check Answers</button>
        </section>
    )
}